import os,re,json,shutil,datetime
SRC='/home/claude/src'; OUT='/home/claude/sylvialab-website/sylvialab-website/design-md/'
HEX=re.compile(r'#[0-9a-fA-F]{6}\b')
def front(t):
    m=re.match(r'---\n(.*?)\n---\n',t,re.S); return (m.group(1) if m else ''), (t[m.end():] if m else t)
def colors(fm):
    blk=re.search(r'^colors:\n((?:[ ]+.*\n)+)',fm+'\n',re.M)
    if not blk: return []
    out=[]
    for line in blk.group(1).splitlines():
        m=re.match(r'\s+([\w.-]+):\s*"?(#[0-9a-fA-F]{6})',line)
        if m and m.group(2).lower() not in [c[1] for c in out]: out.append((m.group(1),m.group(2).lower()))
    return out
def pick(cols):
    # prefer brand-ish first, keep up to 6, skip near-duplicate whites/blacks after 2
    pri=[c for c in cols if re.search(r'primary|brand|accent|blue|red|green|orange|purple|rausch',c[0])]
    rest=[c for c in cols if c not in pri]
    return [h for _,h in (pri+rest)][:6]
def scan(t):
    out=[]
    for h in HEX.findall(t):
        h=h.lower()
        if h not in out: out.append(h)
        if len(out)==6: break
    return out
INTL_NAMES={'1win':'1win','bmw-m':'BMW M','cal':'Cal.com','dell-1996':'Dell (1996)','elevenlabs':'ElevenLabs','hashicorp':'HashiCorp','hp':'HP','ibm':'IBM','linear.app':'Linear','mistral.ai':'Mistral AI','mongodb':'MongoDB','nintendo-2001':'Nintendo (2001)','opencode.ai':'OpenCode','posthog':'PostHog','runwayml':'Runway','sap':'SAP','spacex':'SpaceX','theverge':'The Verge','together.ai':'Together AI','voltagent':'VoltAgent','x.ai':'xAI','dji':'DJI','nvidia':'NVIDIA','mydealz':'mydealz','nerdwallet':'NerdWallet','playstation':'PlayStation','clickhouse':'ClickHouse','minimax':'MiniMax','jobright':'Jobright','webflow':'Webflow','supabase':'Supabase','oura':'Oura','aljazeera':'Al Jazeera'}
CAT_INTL={
 'ai':'claude cohere cursor elevenlabs lovable minimax mistral.ai ollama opencode.ai replicate runwayml together.ai voltagent x.ai composio',
 'developer':'cal clickhouse expo hashicorp mintlify mongodb posthog raycast resend sanity sentry supabase vercel warp linear.app webflow framer zapier airtable',
 'design':'figma miro notion superhuman slack intercom clay',
 'finance':'binance coinbase kraken mastercard mercury revolut stripe wise nerdwallet',
 'commerce':'airbnb nike shopify starbucks uber pinterest mydealz jobright 1win',
 'media':'aljazeera spotify theverge wired meta',
 'hardware':'apple dell-1996 dji hp ibm nintendo-2001 nvidia oracle oura playstation sap vodafone',
 'mobility':'bmw bmw-m bugatti ferrari lamborghini renault spacex tesla'}
cat_of={s:k for k,v in CAT_INTL.items() for s in v.split()}
CAT_LABEL={'ai':'AI','developer':'개발자 도구','design':'협업·생산성','finance':'금융·결제','commerce':'커머스·서비스','media':'미디어·콘텐츠','hardware':'하드웨어·테크','mobility':'모빌리티','career':'커리어','community':'커뮤니티','content':'콘텐츠','delivery':'배달','education':'교육','etc':'기타','gov':'공공','messenger':'메신저','travel':'여행'}
items=[]
d=SRC+'/awesome-design-md/design-md'
for s in sorted(os.listdir(d)):
    f=f'{d}/{s}/DESIGN.md'
    if not os.path.exists(f): continue
    t=open(f,encoding='utf-8').read(); fm,body=front(t)
    desc=re.search(r'^description:\s*(.*)$',fm,re.M); desc=desc.group(1).strip().strip('"') if desc else ''
    slug='en-'+s.replace('.','-')
    shutil.copy(f,OUT+'md/'+slug+'.md')
    items.append({'slug':slug,'name':INTL_NAMES.get(s,s.replace('-',' ').title()),'region':'intl','category':cat_of.get(s,'etc'),
      'desc':desc[:220].rsplit(' ',1)[0]+('…' if len(desc)>220 else ''),'colors':pick(colors(fm)) or scan(t),'bytes':len(t.encode()),
      'source':f'https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/{s}','license':'MIT · VoltAgent/awesome-design-md'})
d=SRC+'/ko-design-md/services'
for fn in sorted(os.listdir(d)):
    if not fn.endswith('.md'): continue
    t=open(f'{d}/{fn}',encoding='utf-8').read(); fm,body=front(t)
    g=lambda k:(re.search(rf'^{k}:\s*"?(.*?)"?\s*$',fm,re.M) or [None,''])[1]
    m=re.search(r'## Brand & Style\s*\n+(.+?)\n\n',body,re.S); desc=re.sub(r'\s+',' ',m.group(1)) if m else ''
    desc=re.sub(r'[*`_]','',desc); desc=re.sub(r'\s*\[src:[^\]]*\](\[src:[^\]]*\])*','',desc); desc=desc[:140]+('…' if len(desc)>140 else '')
    t2=re.sub(r'^logo:.*\n','',t,count=1,flags=re.M)  # drop third-party logo url
    slug='ko-'+g('slug')
    open(OUT+'md/'+slug+'.md','w',encoding='utf-8').write(t2)
    items.append({'slug':slug,'name':g('name'),'region':'ko','category':g('category') or 'etc','desc':desc,'colors':pick(colors(fm)) or scan(t2),'bytes':len(t2.encode()),
      'updated':g('last_updated'),'source':f'https://github.com/CaesiumY/ko-design-md/blob/main/services/{fn}','license':'CC BY 4.0 · ko-design-md by ChangSik Yoon'})
cat={'generated':datetime.date.today().isoformat(),'categories':CAT_LABEL,'items':items}
json.dump(cat,open(OUT+'catalog.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
print(len(items),sum(1 for i in items if i['region']=='ko'),sum(1 for i in items if not i['colors']))
print([i['name'] for i in items if i['category']=='etc'])
