(function () {
  var EMAIL = 'heejuk@mail.hongik.ac.kr';
  function track(name, props) {
    try { if (window.amplitude) window.amplitude.track(name, props || {}); } catch (e) {}
  }
  function lockScroll(on) { document.documentElement.style.overflow = on ? 'hidden' : ''; }

  function open(id, focusSel) {
    var el = document.getElementById(id);
    if (!el) return;
    el.hidden = false; lockScroll(true);
    var f = el.querySelector(focusSel || 'button, a, input');
    if (f) f.focus();
    track('overlay_open', { overlay: id });
  }
  function close(el) {
    el.hidden = true; lockScroll(false);
    var opener = document.querySelector('[data-open="' + el.id + '"]');
    if (opener) opener.focus();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open],[data-close],[data-expand],.chip,[data-track]');
    if (!t) return;
    if (t.hasAttribute('data-open')) { e.preventDefault(); open(t.getAttribute('data-open'), t.getAttribute('data-focus')); }
    else if (t.hasAttribute('data-close')) { e.preventDefault(); close(t.closest('.overlay')); }
    else if (t.hasAttribute('data-expand')) {
      e.preventDefault();
      var panel = document.getElementById(t.getAttribute('data-expand'));
      var openNow = panel.hidden;
      panel.hidden = !openNow;
      t.setAttribute('aria-expanded', openNow ? 'true' : 'false');
      var s = t.querySelector('.sign'); if (s) s.textContent = openNow ? '−' : '+';
    } else if (t.classList.contains('chip') && t.tagName === 'BUTTON') {
      var group = t.closest('[data-single]');
      if (group) group.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      var f = t.getAttribute('data-filter');
      if (f) document.querySelectorAll('[data-cat]').forEach(function (c) {
        c.hidden = !(f === 'all' || c.getAttribute('data-cat') === f);
      });
    }
    if (t.hasAttribute('data-track')) track(t.getAttribute('data-track'), { page: location.pathname });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.overlay').forEach(function (o) { if (!o.hidden) close(o); });
  });

  // bottom CTA bar: shows after the first screen, hides at the footer, can be closed on desktop
  var cta = document.querySelector('.sticky-cta');
  if (cta) {
    document.documentElement.classList.add('js');
    var closed = false;
    try { closed = sessionStorage.getItem('cta-closed:' + location.pathname) === '1'; } catch (e) {}
    var foot = document.querySelector('footer');
    var update = function () {
      if (closed) { cta.classList.remove('on'); return; }
      var room = document.documentElement.scrollHeight - window.innerHeight;
      var past = window.scrollY > Math.min(window.innerHeight * 0.6, room * 0.25);
      var nearFoot = foot && foot.getBoundingClientRect().top < window.innerHeight - 120;
      cta.classList.toggle('on', past && !nearFoot);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    var x = cta.querySelector('[data-cta-close]');
    if (x) x.addEventListener('click', function () {
      closed = true; update();
      try { sessionStorage.setItem('cta-closed:' + location.pathname, '1'); } catch (e) {}
      track('cta_close', { page: location.pathname });
    });
  }

  // single-choice cards (advisory)
  document.querySelectorAll('[role="radiogroup"]').forEach(function (g) {
    var opts = Array.prototype.slice.call(g.querySelectorAll('[role="radio"]'));
    function pick(o) {
      opts.forEach(function (x) { var on = x === o; x.setAttribute('aria-checked', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1; });
      track('advisory_need', { need: o.textContent.trim() });
    }
    opts.forEach(function (o, i) {
      o.addEventListener('click', function () { pick(o); });
      o.addEventListener('keydown', function (e) {
        var d = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
        if (!d) return; e.preventDefault();
        var n = opts[(i + d + opts.length) % opts.length]; n.focus(); pick(n);
      });
    });
  });

  // home program tabs
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      track('program_tab', { tab: tab.id });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = tabs[(i + d + tabs.length) % tabs.length];
        n.focus(); select(n);
      });
    });
  });

  // search
  var KO = document.documentElement.lang === 'ko';
  var PAGES = KO ? [
    ['AI 부트캠프', 'bootcamps.html', '부트캠프 · 3~4주', 'ai 부트캠프 프로덕트 전략 디자인 시스템 엔지니어링 토큰 figma mcp cursor claude code react next.js 기수 bootcamp'],
    ['AI 프로덕트 디자인 심화', 'ai-product-design.html', '부트캠프 · 4주', 'ai 프로덕트 디자인 심화 리서치 프로토타입 claude figma mcp cursor'],
    ['AI 워크숍', 'workshops.html', '워크숍 · 2시간', '워크숍 claude 바이브코딩 로컬라이제이션'],
    ['해외에서 읽히는 포트폴리오 부트캠프', 'career.html', '부트캠프 · 4주', '포트폴리오 커리어 해외 이력서 케이스 스터디 취업'],
    ['커리어 전략 컨설팅', 'advisory.html', '1:1 · 한 달', '컨설팅 커리어 전략 자문 멘토링 커리어 해외 귀국 한국 아이 진로 코칭'],
    ['DESIGN.md 모음', 'design-md/', '자료 · 104개', 'design md 디자인 시스템 토스 배민 stripe linear 색 타이포 프롬프트 claude cursor'],
    ['SKILL.md 키트', 'kit.html', '키트', 'skill md claude figma 한국 사용자 로컬라이제이션'],
    ['기업 교육', 'team.html', '기업 · 팀', '기업 교육 팀 워크숍 강연'],
    ['프로젝트 문의', 'contact.html', '문의', '프로젝트 문의 한국 시장 진출 ux 진단'],
    ['Sylvia 소개', 'about.html', '소개', 'Sylvia 소개 ibm kb 코빗 hri 연구'],
    ['글', 'writing.html', '글', '글 에세이 브런치']
  ] : [
    ['AI bootcamps', 'bootcamps.html', 'Bootcamp · 3–4 weeks', 'ai product strategy design systems engineering tokens figma mcp cursor claude code react next.js cohort'],
    ['AI Product Design bootcamp', 'ai-product-design.html', 'Bootcamp · 4 weeks', 'ai product design research prototype claude figma mcp cursor'],
    ['AI workshops', 'workshops.html', 'Workshop · 2 hours', 'workshop claude vibe coding localization'],
    ['Portfolio bootcamp for global roles', 'career.html', 'Bootcamp · 4 weeks', 'portfolio career global abroad resume case study'],
    ['Career strategy consulting', 'advisory.html', '1:1 · 1 month', 'consulting career strategy advisory mentoring career abroad moving back korea child coaching'],
    ['DESIGN.md library', '../design-md/', 'Resource · 104 files', 'design md design system stripe linear toss colors typography claude cursor'],
    ['SKILL.md kit', 'kit.html', 'Kit', 'skill md claude figma make korean users localization'],
    ['Team training', 'team.html', 'For companies', 'team company training workshop talk'],
    ['Project inquiry', 'contact.html', 'Contact', 'project inquiry korea market entry ux review contact'],
    ['About Sylvia', '../about.html', 'About', 'heeju kang about ibm kb korbit hri research'],
    ['Writing', '../writing.html', 'Writing', 'writing articles essays brunch']
  ];
  var input = document.getElementById('q');
  var list = document.getElementById('q-results');
  function render(v) {
    if (!list) return;
    v = (v || '').trim().toLowerCase();
    var hits = PAGES.filter(function (p) { return !v || (p[0] + ' ' + p[3]).toLowerCase().indexOf(v) > -1; });
    list.innerHTML = hits.length ? hits.map(function (p) {
      return '<a class="row" href="' + p[1] + '"><span>' + p[0] + '</span><small>' + p[2] + '</small></a>';
    }).join('') : '<p class="meta" style="padding:16px 0">' + (KO ? '찾는 결과가 없어요. “포트폴리오”, “바이브코딩”, “컨설팅”으로 찾아보세요.' : 'Nothing yet. Try “portfolio”, “vibe coding” or “consulting”.') + '</p>';
  }
  if (input) {
    input.addEventListener('input', function () { render(input.value); });
    render('');
    document.querySelectorAll('[data-q]').forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.getAttribute('data-q'); render(input.value); input.focus(); });
    });
  }

  // contact form → email draft
  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(location.search);
    var topic = params.get('topic');
    if (topic) {
      var chip = form.querySelector('.chip[data-value="' + topic + '"]');
      if (chip) chip.setAttribute('aria-pressed', 'true');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var picked = Array.prototype.map.call(form.querySelectorAll('.chip[aria-pressed="true"]'), function (c) { return c.textContent; }).join(', ');
      var d = new FormData(form);
      var body = (KO ? '이름: ' : 'Name: ') + (d.get('name') || '') + (KO ? '\n이메일: ' : '\nEmail: ') + (d.get('email') || '') + (KO ? '\n회사 / 나라: ' : '\nCompany / country: ') + (d.get('company') || '') + (KO ? '\n주제: ' : '\nTopic: ') + (picked || '-') + '\n\n' + (d.get('message') || '');
      track('contact_submit', { topic: picked });
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('[SylviaLab] ' + (picked || (KO ? '문의' : 'Inquiry'))) + '&body=' + encodeURIComponent(body);
      var done = document.getElementById('form-done'); if (done) done.hidden = false;
    });
  }
})();
