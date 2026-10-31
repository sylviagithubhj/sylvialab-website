(function () {
  var $ = function (s) { return document.querySelector(s); };
  var text = '', cats = {};
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function toast(t) {
    var el = document.createElement('div'); el.className = 'toast'; el.textContent = t; el.setAttribute('role', 'status');
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 1600);
  }
  function copy(t, done) {
    var fb = function () {
      var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove();
      ok ? done() : toast('복사하지 못했어요. 원문 탭에서 직접 선택해 주세요.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, fb); else fb();
  }
  function slugify(s, used) {
    var b = s.toLowerCase().replace(/[^\w가-힣]+/g, '-').replace(/^-|-$/g, '') || 'sec', k = b, n = 2;
    while (used[k]) k = b + '-' + n++;
    used[k] = 1; return 'h-' + k;
  }

  function show(it) {
    document.title = it.name + ' DESIGN.md · SylviaLab';
    $('#c-name').textContent = it.name; $('#d-name').textContent = it.name;
    $('#d-desc').textContent = it.desc;
    $('#d-region').textContent = it.region === 'ko' ? '국내' : '해외'; $('#d-region').className = 'tag ' + it.region;
    $('#d-cat').textContent = cats[it.category] || it.category;
    $('#d-size').textContent = (it.basis ? '근거: ' + it.basis + ' · ' : '') + (it.bytes / 1024).toFixed(1) + ' KB';
    $('#d-pal').innerHTML = it.colors.map(function (c) { return '<button type="button" data-hex="' + c + '"><i style="background:' + c + '"></i>' + c + '</button>'; }).join('');
    $('#b-dl').href = 'md/' + it.slug + '.md';
    $('#b-dl').setAttribute('download', it.slug.replace(/^(ko|en)-/, '') + '-DESIGN.md');
    $('#b-src').href = it.source;
    $('#d-credit').innerHTML = '원본 · <a href="' + esc(it.source) + '" rel="noopener" target="_blank">' + esc(it.license) + '</a>';

    fetch('md/' + it.slug + '.md').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
      text = t;
      $('#p-raw').textContent = t;
      var m = t.match(/^---\n([\s\S]*?)\n---\n/), fm = m ? m[1] : '', body = m ? t.slice(m[0].length) : t;
      var html = window.marked ? marked.parse(body, { gfm: true }) : '<pre>' + esc(body) + '</pre>';
      if (window.DOMPurify) html = DOMPurify.sanitize(html);
      var head = fm ? '<details class="fm"><summary>토큰 (YAML 머리말) 펼치기</summary><pre><code>' + esc(fm) + '</code></pre></details>' : '';
      $('#p-doc').innerHTML = head + html;
      var used = {}, toc = '<p>목차</p>';
      document.querySelectorAll('#p-doc h2').forEach(function (h) { h.id = slugify(h.textContent, used); toc += '<a href="#' + it.slug + '" data-go="' + h.id + '">' + esc(h.textContent) + '</a>'; });
      $('#toc').innerHTML = toc;
    }).catch(function () { $('#p-doc').innerHTML = '<p>파일을 불러오지 못했어요. 새로고침해 주세요.</p>'; });
  }

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) { e.preventDefault(); var t = document.getElementById(go.dataset.go); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    var p = e.target.closest('#d-pal button');
    if (p) { copy(p.dataset.hex, function () { toast(p.dataset.hex + ' 복사했어요'); }); return; }
    if (e.target.closest('#b-copy')) {
      var b = $('#b-copy');
      if (!text) return;
      copy(text, function () { b.classList.add('done'); b.textContent = '복사됨 · AI 도구에 붙여 넣으세요'; setTimeout(function () { b.classList.remove('done'); b.textContent = 'DESIGN.md 전체 복사'; }, 2200); });
      return;
    }
    var tab = e.target.closest('[role="tab"]');
    if (tab) {
      var raw = tab.id === 't-raw';
      $('#t-doc').setAttribute('aria-selected', !raw); $('#t-raw').setAttribute('aria-selected', raw);
      $('#p-doc').hidden = raw; $('#p-raw').hidden = !raw; $('#toc').hidden = raw;
    }
  });

  function load() {
    var slug = (location.hash || '').slice(1);
    fetch('catalog.json').then(function (r) { return r.json(); }).then(function (data) {
      cats = data.categories;
      var it = data.items.filter(function (i) { return i.slug === slug; })[0];
      if (!it) { $('#d-name').textContent = '찾는 DESIGN.md가 없어요'; $('#p-doc').innerHTML = '<p><a href="./">전체 목록</a>에서 다시 골라 주세요.</p>'; return; }
      window.scrollTo(0, 0); show(it);
    });
  }
  window.addEventListener('hashchange', function () { if (/^#(ko|en)-/.test(location.hash)) load(); });
  load();
})();
