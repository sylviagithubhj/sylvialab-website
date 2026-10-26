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

  // search
  var PAGES = [
    ['AI bootcamps', 'bootcamps.html', 'Bootcamp · 3–4 weeks', 'ai product design strategy vibe coding localization cohort'],
    ['AI Product Design bootcamp', 'ai-product-design.html', 'Bootcamp · 4 weeks', 'ai product design prototype claude figma'],
    ['AI workshops', 'workshops.html', 'Workshop · 2 hours', 'workshop claude vibe coding localization'],
    ['Portfolio bootcamp for global roles', 'career.html', 'Bootcamp · 4 weeks', 'portfolio career global abroad resume case study'],
    ['Korea ↔ Global career advisory', 'advisory.html', '1:1 · 1 month', 'advisory mentoring career abroad moving back korea child coaching'],
    ['SKILL.md kit', 'kit.html', 'Kit', 'skill md claude figma make korean users localization'],
    ['Team training', 'team.html', 'For companies', 'team company training workshop talk'],
    ['Project inquiry', 'contact.html', 'Contact', 'project inquiry korea market entry ux review contact'],
    ['About Heeju Kang', 'about.html', 'About', 'heeju kang about ibm kb korbit hri research'],
    ['Writing', 'writing.html', 'Writing', 'writing articles essays brunch']
  ];
  var input = document.getElementById('q');
  var list = document.getElementById('q-results');
  function render(v) {
    if (!list) return;
    v = (v || '').trim().toLowerCase();
    var hits = PAGES.filter(function (p) { return !v || (p[0] + ' ' + p[3]).toLowerCase().indexOf(v) > -1; });
    list.innerHTML = hits.length ? hits.map(function (p) {
      return '<a class="row" href="' + p[1] + '"><span>' + p[0] + '</span><small>' + p[2] + '</small></a>';
    }).join('') : '<p class="meta" style="padding:16px 0">Nothing yet. Try “portfolio”, “vibe coding” or “advisory”.</p>';
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
      var body = 'Name: ' + (d.get('name') || '') + '\nEmail: ' + (d.get('email') || '') + '\nCompany / country: ' + (d.get('company') || '') + '\nTopic: ' + (picked || '-') + '\n\n' + (d.get('message') || '');
      track('contact_submit', { topic: picked });
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('[SylviaLab] ' + (picked || 'Inquiry')) + '&body=' + encodeURIComponent(body);
      var done = document.getElementById('form-done'); if (done) done.hidden = false;
    });
  }
})();
