/* SylviaLab — interactions */
(function () {
  'use strict';

  /* ── 설정: 폼을 실제 서비스(Formspree, 스티비 등)에 연결할 때 주소만 넣으면 돼요 ── */
  var CONFIG = {
    leadEndpoint: '',     // 무료 자료 신청 (이메일 수집) POST 주소
    contactEndpoint: '',  // 문의 폼 POST 주소
    clubEndpoint: '',     // 리턴 클럽 가입 신청 POST 주소
    fellowEndpoint: '',   // 리턴 펠로십 지원서 POST 주소
    email: 'heejuk@mail.hongik.ac.kr'
  };

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 로봇 눈: 마우스를 따라봄 */
  var pupils = document.querySelectorAll('.pupil');
  if (pupils.length && !reduce) {
    var raf = null;
    window.addEventListener('mousemove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var x = Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1));
        var y = Math.max(-1, Math.min(1, (e.clientY / window.innerHeight) * 2 - 1));
        var t = 'translate(' + (x * 22).toFixed(1) + 'px,' + (y * 16).toFixed(1) + 'px)';
        pupils.forEach(function (p) { p.style.transform = t; });
      });
    }, { passive: true });
  }

  /* 대상 데이터 */
  var AUD = [
    {
      q: '사람이 편하게 느끼는 로봇, 동작과 인터페이스를 어떻게 정하죠?',
      out: '사용 시나리오, 사람과 로봇의 역할 분담, 인터랙션 프로토타입과 평가 계획',
      cta: '시그니처 과정 보기', href: 'hri.html',
      checks: ['로봇 동작을 정할 때 사용자 반응은 나중에 본다', '화면 UX는 해봤지만 몸이 있는 기기는 처음이다', '사용자 평가 기준이 ‘불편하지 않다’ 수준이다', '사람과 로봇의 역할 분담을 문서로 정한 적이 없다', '시연 때는 괜찮은데 현장에서는 사람들이 피한다']
    },
    {
      q: '우리 현장 어디에 AI와 로봇을 먼저 붙여야 할까요?',
      out: '적용 과제 정의서, 파일럿 범위, 효과 측정 기준, 현장 적용 계획',
      cta: '도입 교육 보기', href: 'ops.html',
      checks: ['도입 목표는 있는데 첫 과제를 못 정했다', '데이터가 충분한지 판단이 안 선다', '파일럿을 어디까지 하면 성공인지 기준이 없다', '현장 직원들이 거부할까 걱정된다', '기술팀과 경영진이 서로 다른 말을 한다']
    },
    {
      q: 'AI 수업, 기술 설명 말고 실습과 성과로 만들려면?',
      out: '한 학기 교안, 바로 쓰는 실습 자료, 과제 평가 기준표',
      cta: 'AI 수업 만들기 보기', href: 'edu.html',
      checks: ['AI 수업을 맡았는데 쓸 만한 교안이 없다', '기술 설명은 되는데 실습으로 바꾸기 어렵다', '내 노하우가 AI 때문에 덜 쓸모 있어질까 걱정된다', '생성형 AI 과제의 평가 기준을 못 정했다', '학기마다 도구가 바뀌어 교안을 다시 쓴다']
    }
  ];

  var aud = 0;
  var checked = [];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function renderAudience() {
    var a = AUD[aud];
    $$('[data-aud]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.getAttribute('data-aud')) === aud));
    });
    var q = $('#ans-q'), out = $('#ans-out'), cta = $('#ans-cta'), box = $('#answer');
    if (q) {
      q.textContent = a.q; out.textContent = a.out;
      cta.textContent = a.cta + ' →'; cta.href = a.href;
      if (box && !reduce) { box.classList.remove('pop'); void box.offsetWidth; box.classList.add('pop'); }
    }
    renderChecks();
  }

  function renderChecks() {
    var list = $('#check-list');
    if (!list) return;
    var a = AUD[aud];
    list.innerHTML = '';
    a.checks.forEach(function (text, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'check';
      var on = checked.indexOf(i) >= 0;
      b.setAttribute('aria-pressed', String(on));
      var box = document.createElement('span'); box.className = 'box'; box.setAttribute('aria-hidden', 'true'); box.textContent = on ? '✓' : '';
      b.appendChild(box); b.appendChild(document.createTextNode(text));
      b.addEventListener('click', function () {
        var k = checked.indexOf(i);
        if (k >= 0) checked.splice(k, 1); else checked.push(i);
        renderChecks();
      });
      list.appendChild(b);
    });
    var n = checked.length, v = $('#verdict'), go = $('#verdict-cta');
    v.textContent = n >= 3 ? n + '개 해당돼요. 지금 시작하기 좋은 때예요.' : (n > 0 ? n + '개 체크했어요. 해당되는 걸 더 눌러보세요.' : '오른쪽에서 해당되는 걸 눌러보세요.');
    v.classList.toggle('ok', n >= 3);
    if (go) { go.hidden = n < 3; go.textContent = a.cta; go.href = a.href; }
  }

  $$('[data-aud]').forEach(function (b) {
    b.addEventListener('click', function () {
      aud = Number(b.getAttribute('data-aud')); checked = []; renderAudience();
    });
  });
  if ($('#check-list')) renderAudience();

  /* 기록 필터 */
  $$('[data-filter]').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      $$('[data-filter]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('.feed .row').forEach(function (r) { r.hidden = !(f === '전체' || r.getAttribute('data-type') === f); });
    });
  });

  /* 폼 */
  function submit(endpoint, data, mailSubject, mailBody) {
    if (endpoint) {
      return fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error('send failed'); });
    }
    window.location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(mailBody);
    return Promise.resolve();
  }

  $$('form[data-lead]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var email = form.querySelector('input[type=email]').value.trim();
      var what = form.getAttribute('data-subject') || 'Physical AI 한 장 지도';
      track('lead_submit', { source: form.getAttribute('data-lead') });
      submit(CONFIG.leadEndpoint, { email: email, source: form.getAttribute('data-lead') },
        '[신청] ' + what, '이 주소로 ' + what + '을(를) 받고 싶어요: ' + email)
        .then(function () { form.hidden = true; var d = form.nextElementSibling; if (d) d.hidden = false; })
        .catch(function () { alert('전송에 실패했어요. ' + CONFIG.email + ' 로 메일 주세요.'); });
    });
  });

  var cf = $('#contact-form');
  if (cf) {
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cf.reportValidity()) return;
      var d = {};
      new FormData(cf).forEach(function (v, k) { d[k] = v; });
      var body = '이름: ' + d.name + '\n회사·기관: ' + (d.org || '') + '\n이메일: ' + d.email + '\n문의 유형: ' + d.type + '\n\n' + d.message;
      submit(CONFIG.contactEndpoint, d, '[문의] ' + d.type + ' · ' + d.name, body)
        .then(function () { cf.hidden = true; $('#contact-done').hidden = false; })
        .catch(function () { alert('전송에 실패했어요. ' + CONFIG.email + ' 로 메일 주세요.'); });
    });
  }

  /* 리턴 클럽 가입 */
  var club = $('#club-form');
  if (club) {
    club.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!club.reportValidity()) return;
      var d = {};
      new FormData(club).forEach(function (v, k) { d[k] = v; });
      d.source = (location.search.match(/[?&]utm_source=([^&]+)/) || [])[1] || 'direct';
      track('club_join_submit', { when: d.when, role: d.role, stage: d.stage, priority: d.priority, source: d.source });
      var body = '이름: ' + d.name + '\n이메일: ' + d.email + '\n어디서: ' + d.from + '\n귀국 시기: ' + d.when + '\n하는 일: ' + d.role + '\n지금 상태: ' + d.stage + '\n더 중요한 것: ' + d.priority + '\n\n' + (d.question || '');
      submit(CONFIG.clubEndpoint, d, '[리턴 클럽 가입] ' + d.name, body)
        .then(function () { club.hidden = true; $('#club-done').hidden = false; })
        .catch(function () { alert('전송에 실패했어요. ' + CONFIG.email + ' 로 메일 주세요.'); });
    });
  }

  /* 리턴 펠로십 지원 */
  var fellow = $('#fellow-form');
  if (fellow) {
    fellow.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!fellow.reportValidity()) return;
      var d = {};
      new FormData(fellow).forEach(function (v, k) { d[k] = v; });
      d.source = (location.search.match(/[?&]utm_source=([^&]+)/) || [])[1] || 'direct';
      track('fellowship_apply_submit', { stage: d.stage, priority: d.priority, source: d.source });
      var body = '이름: ' + d.name + '\n이메일: ' + d.email + '\n링크: ' + (d.link || '') + '\n\n해외 경험:\n' + d.abroad + '\n\n6주 뒤 목표:\n' + d.goal + '\n\n준비 단계: ' + d.stage + '\n더 중요한 것: ' + d.priority + '\n\n나눌 수 있는 것:\n' + (d.give || '');
      submit(CONFIG.fellowEndpoint, d, '[리턴 펠로십 1기 지원] ' + d.name, body)
        .then(function () { fellow.hidden = true; $('#fellow-done').hidden = false; })
        .catch(function () { alert('전송에 실패했어요. ' + CONFIG.email + ' 로 메일 주세요.'); });
    });
  }

  /* MVP 측정: data-track 이 붙은 링크·버튼을 누르면 Amplitude 이벤트로 기록 (Amplitude가 있을 때만) */
  function track(name, props) {
    try { if (window.amplitude && window.amplitude.track) window.amplitude.track(name, props || {}); } catch (e) { /* no-op */ }
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-track]');
    if (el) track(el.getAttribute('data-track'), { page: location.pathname, href: el.getAttribute('href') || '' });
  });
  var pageEvent = document.body.getAttribute('data-page-event');
  if (pageEvent) track(pageEvent, { path: location.pathname, search: location.search });

  /* ?type= 으로 들어오면 문의 유형 미리 선택 */
  var m = location.search.match(/[?&]type=([^&]+)/);
  var sel = $('#c-type');
  if (m && sel) {
    var want = decodeURIComponent(m[1]);
    $$('option', sel).forEach(function (o) { if (o.value === want) sel.value = want; });
  }
})();
