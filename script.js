// ─────────────────────────────────────────────────────────────
// Tiny hash-based router + renderer. No build step, no framework.
// ─────────────────────────────────────────────────────────────

const app = document.getElementById('app');
document.getElementById('year').textContent = new Date().getFullYear();

const CRITTER_LINES = {
  home: ["hi. i live in the corner.", "nothing to report yet.", "the drawer says hello."],
  blog: ["so many pages.", "pick one, i dare you.", "i've read them all twice."],
  post: ["this one's a good one.", "i was there for this.", "reading over your shoulder."],
  about: ["that's them. that's the human.", "i vouch for this person."],
  notfound: ["wrong page. try again.", "this page ran off somewhere."]
};

function sayCritter(kind) {
  const bubble = document.getElementById('critterBubble');
  const lines = CRITTER_LINES[kind] || CRITTER_LINES.home;
  bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
  bubble.classList.add('show');
  clearTimeout(sayCritter._t);
  sayCritter._t = setTimeout(() => bubble.classList.remove('show'), 3200);
}
document.getElementById('critter').addEventListener('click', () => sayCritter(sayCritter._last || 'home'));

function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function sortedPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function entryCard(post) {
  return `
    <a class="entry-card" href="#/post/${post.id}" data-route>
      <div class="entry-meta">
        <span class="entry-date">${fmtDate(post.date)}</span>
        ${post.tags.map(t => `<span class="entry-tag">${t}</span>`).join('')}
      </div>
      <h3 class="entry-title">${post.title}</h3>
      <p class="entry-excerpt">${post.excerpt}</p>
    </a>
  `;
}

function renderHome() {
  const latest = sortedPosts().slice(0, 5);
  app.innerHTML = `
    <section class="hero">
      <span class="hero-eyebrow">welcome in —</span>
      <h1>Bits of <em>${SITE.heroWords[0]}</em>, unfiled thoughts,<br>
      and the odd word from <em>${SITE.heroWords[2]}</em>.</h1>
      <p>${SITE.tagline[0].toUpperCase() + SITE.tagline.slice(1)}. No particular order, no particular rules.</p>
    </section>
    <p class="section-label">Latest entries</p>
    <div class="entries">${latest.map(entryCard).join('')}</div>
  `;
  sayCritter('home');
  sayCritter._last = 'home';
}

function renderBlog() {
  app.innerHTML = `
    <p class="section-label">All entries</p>
    <div class="entries">${sortedPosts().map(entryCard).join('')}</div>
  `;
  sayCritter('blog');
  sayCritter._last = 'blog';
}

function renderPost(id) {
  const post = POSTS.find(p => p.id === id);
  if (!post) return renderNotFound();
  app.innerHTML = `
    <a class="back-link" href="#/blog" data-route>← back to all entries</a>
    <article>
      <header class="post-header">
        <span class="post-date">${fmtDate(post.date)}</span>
        <h1 class="post-title">${post.title}</h1>
        <div class="post-tags">${post.tags.map(t => `<span class="entry-tag">${t}</span>`).join('')}</div>
      </header>
      <div class="post-body">${post.body}</div>
    </article>
  `;
  sayCritter('post');
  sayCritter._last = 'post';
  window.scrollTo(0, 0);
}

function renderAbout() {
  app.innerHTML = `<section class="about-wrap"><h1>About</h1>${SITE.about}</section>`;
  sayCritter('about');
  sayCritter._last = 'about';
}

function renderNotFound() {
  app.innerHTML = `
    <div class="not-found">
      <p class="hand">hm, nothing here.</p>
      <a class="back-link" href="#/" data-route>← back home</a>
    </div>
  `;
  sayCritter('notfound');
  sayCritter._last = 'notfound';
}

function setActiveNav(route) {
  document.querySelectorAll('.site-nav a').forEach(a => a.classList.remove('active'));
  const map = { '': 0, 'blog': 1, 'about': 2 };
  const links = document.querySelectorAll('.site-nav a');
  if (route === '' && links[0]) links[0].classList.add('active');
  if (route === 'blog' && links[1]) links[1].classList.add('active');
  if (route === 'about' && links[2]) links[2].classList.add('active');
}

function router() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  document.title = SITE.name + ' — ' + SITE.tagline;

  if (parts.length === 0) { renderHome(); setActiveNav(''); return; }
  if (parts[0] === 'blog') { renderBlog(); setActiveNav('blog'); return; }
  if (parts[0] === 'about') { renderAbout(); setActiveNav('about'); return; }
  if (parts[0] === 'post' && parts[1]) { renderPost(decodeURIComponent(parts[1])); setActiveNav(''); return; }
  renderNotFound();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.brand-name').textContent = SITE.name;
  router();
});
