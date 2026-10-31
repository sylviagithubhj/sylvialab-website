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
CAT_LABEL={'ai':'AI','developer':'개발자 도구','design':'협업·생산성','finance':'금융·결제','commerce':'커머스·서비스','media':'미디어·콘텐츠','hardware':'하드웨어·테크','portal':'포털','proptech':'부동산','device':'기기·OS','mobility':'모빌리티','career':'커리어','community':'커뮤니티','content':'콘텐츠','delivery':'배달','education':'교육','etc':'기타','gov':'공공','messenger':'메신저','travel':'여행'}
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
KO_REPO='/home/claude/sylvialab-design-md'
KO_CAT={'toss':'finance','daangn':'community','wanted':'career','channeltalk':'developer','line':'messenger','samsung-oneui':'device','krds':'gov','baemin':'delivery','kakao':'messenger','naver':'portal','coupang':'commerce','musinsa':'commerce','kurly':'commerce','yanolja':'travel','ohou':'commerce','zigbang':'proptech','upbit':'finance','banksalad':'finance','ridi':'content','29cm':'commerce'}
for slug in sorted(os.listdir(KO_REPO+'/companies')):
    f=f'{KO_REPO}/companies/{slug}/DESIGN.md'
    if not os.path.exists(f): continue
    t=open(f,encoding='utf-8').read()
    name=re.match(r'#\s*(.+?)\s*디자인 시스템',t).group(1).strip()
    m=re.search(r'디자인 인상 한 줄:\s*(.+)',t); desc=re.sub(r'[*`]','',m.group(1)).strip() if m else ''
    sec=t.split('## 2.',1)[1].split('\n## 3.',1)[0] if '## 2.' in t else t
    cols=[]
    for line in sec.splitlines():
        h=HEX.search(line)
        if h and line.startswith('|') and '확인 필요' not in line and '확정 아님' not in line and h.group(0).lower() not in cols: cols.append(h.group(0).lower())
        if len(cols)==6: break
    basis=re.search(r'^> 근거:\s*(.+)$',t,re.M); basis=basis.group(1) if basis else ''
    out=f'ko-{slug}'
    open(OUT+'md/'+out+'.md','w',encoding='utf-8').write(t)
    items.append({'slug':out,'name':name,'region':'ko','category':KO_CAT.get(slug,'etc'),'desc':desc,'colors':cols,'bytes':len(t.encode()),
      'basis':'공개 문서' if basis.startswith('공개') else ('실측' if basis.startswith('관찰') else '공개 문서·실측'),
      'source':f'https://github.com/sylviagithubhj/sylvialab-design-md/blob/main/companies/{slug}/DESIGN.md','license':'CC BY 4.0 · SylviaLab DESIGN.md'})
cat={'generated':datetime.date.today().isoformat(),'categories':CAT_LABEL,'items':items}
json.dump(cat,open(OUT+'catalog.json','w',encoding='utf-8'),ensure_ascii=False,indent=0)
print(len(items),sum(1 for i in items if i['region']=='ko'),sum(1 for i in items if not i['colors']))
print([i['name'] for i in items if i['category']=='etc'])
