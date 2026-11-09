// Builds the page from SITE (assets/js/data.js) and POSTS (blog/posts.js).
(() => {
  const S = window.SITE, POSTS = window.POSTS || [];
  const $ = (s) => document.querySelector(s);
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat()) if (kid != null) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  };

  // Small inline icons (GitHub mark from GitHub's Octicons).
  const ICON = {
    github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    linkedin: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M13.6 0H2.4A2.4 2.4 0 0 0 0 2.4v11.2A2.4 2.4 0 0 0 2.4 16h11.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 13.6 0ZM4.9 13.4H2.6V6h2.3v7.4ZM3.7 5A1.35 1.35 0 1 1 3.7 2.3 1.35 1.35 0 0 1 3.7 5Zm9.7 8.4h-2.3V9.8c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9v3.7H6.2V6h2.2v1h.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4Z"/></svg>',
    mail: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m2 4 6 5 6-5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
    copy: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
    cal: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="3" width="12" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M2 7h12M5 1.5v3M11 1.5v3" stroke="currentColor" stroke-width="1.3"/></svg>',
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6.5 5.5v5l4-2.5Z" fill="currentColor"/></svg>',
    live: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2h5v5M14 2 7 9M12 9.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
    star: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="m8 1.2 2 4.3 4.6.5-3.4 3.2.9 4.6L8 11.5l-4.1 2.3.9-4.6L1.4 6l4.6-.5Z"/></svg>'
  };
  const icon = (name) => h("span", { html: ICON[name], style: "display:contents" });
  const ext = { target: "_blank", rel: "noopener" };

  // ── Hero ───────────────────────────────────────────────────
  $("#intro").textContent = S.intro;
  $("#where").textContent = S.location;
  $("#now").textContent = S.now;
  const socials = (primary) => [
    h("a", { class: "btn" + (primary ? " primary" : ""), href: "mailto:" + S.links.email }, icon("mail"), "Email me"),
    h("a", { class: "btn", href: S.links.github, ...ext }, icon("github"), "GitHub"),
    h("a", { class: "btn", href: S.links.linkedin, ...ext }, icon("linkedin"), "LinkedIn")
  ];
  $("#cta").append(...socials(true));
  const img = $("#photo");
  img.addEventListener("error", () => img.replaceWith(h("div", { class: "mono", role: "img", "aria-label": "Jumainah Khan" }, "JK")));
  img.src = S.photo;
  $("#caption").textContent = S.photoCaption || "";

  // ── About ──────────────────────────────────────────────────
  S.about.forEach((p) => $("#aboutText").append(h("p", {}, p)));
  S.skills.forEach((s) => $("#skills").append(h("li", {}, s)));
  $("#langs").textContent = S.languages.join(" · ");

  // ── Experience ─────────────────────────────────────────────
  S.experience.forEach((e) => $("#jobs").append(h("li", { class: "job" },
    h("div", { class: "when" }, e.dates),
    h("div", {}, h("h4", {}, e.role), h("p", { class: "org" }, e.org, h("span", {}, " · " + e.where)),
      e.points?.length ? h("ul", {}, e.points.map((p) => h("li", {}, p))) : null))));

  // ── Project cards ──────────────────────────────────────────
  const openShot = (src, alt) => {
    const last = document.activeElement;
    const box = h("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": alt, tabindex: "-1" }, h("img", { src, alt }), h("p", {}, alt));
    const close = () => { box.remove(); removeEventListener("keydown", esc); last?.focus(); };
    const esc = (e) => e.key === "Escape" && close();
    box.addEventListener("click", close); addEventListener("keydown", esc);
    document.body.append(box); box.focus();
  };
  const repoLabel = (url) => url.replace("https://github.com/", "");
  const card = (p) => {
    const top = p.img
      ? h("button", { class: "shot", type: "button", "aria-label": "Enlarge screenshot of " + p.name, onclick: () => openShot(p.img, p.alt) },
          h("img", { src: p.img, alt: p.alt, loading: "lazy", decoding: "async", width: 1200, height: 750 }))
      : h("div", { class: "shot plain", style: `--tone:${p.cover || "#2a1f4a"}`, "aria-hidden": "true" }, h("b", {}, p.name), p.sub ? h("span", {}, p.sub) : null);
    if (p.award) top.append(h("span", { class: "award" }, icon("star"), p.award));
    const foot = [];
    if (p.repo?.url) foot.push(h("a", { class: "chip repo", href: p.repo.url, ...ext, "aria-label": `Code for ${p.name} on GitHub` }, icon("github"), h("span", { class: "t" }, repoLabel(p.repo.url))));
    else if (p.repo?.private) foot.push(h("span", { class: "chip locked", title: "The code for this one is private" }, icon("lock"), "Private repo"));
    (p.links || []).forEach((l) => foot.push(h("a", { class: "chip", href: l.url, ...ext }, icon(l.kind === "video" ? "play" : "live"), l.label)));
    return h("article", { class: "card" }, top,
      h("div", { class: "cbody" },
        p.event ? h("div", { class: "event" }, icon("cal"), h("span", {}, p.event), h("em", {}, "· " + p.when)) : h("div", { class: "event" }, h("em", {}, p.when)),
        h("h4", {}, p.name),
        p.sub ? h("p", { class: "sub" }, p.sub) : null,
        p.challenge ? h("p", { class: "chal" }, p.challenge + " challenge") : null,
        h("p", { class: "blurb" }, p.blurb),
        h("ul", { class: "tags", "aria-label": "Built with" }, p.stack.map((s) => h("li", {}, s))),
        foot.length ? h("div", { class: "cfoot" }, foot) : null));
  };
  S.hackathons.forEach((p) => $("#hacks").append(card(p)));
  S.projects.forEach((p) => $("#projs").append(card(p)));
  S.earlier.forEach((e) => $("#earlier").append(h("li", {},
    e.img ? h("img", { class: "thumb", src: e.img, alt: "", loading: "lazy" }) : h("div", { class: "thumb none", "aria-hidden": "true" }, "{ }"),
    h("div", {}, h("b", {}, e.name), h("small", {}, e.when), h("p", {}, e.what)),
    e.url ? h("a", { class: "chip repo", href: e.url, ...ext, "aria-label": `Code for ${e.name} on GitHub` }, icon("github"), "Code") : h("span"))));

  // ── Writing (only shown once there is a post) ──────────────
  const live = POSTS.filter((p) => !p.draft).sort((a, b) => b.date.localeCompare(a.date));
  if (live.length) {
    document.querySelectorAll("[data-needs-posts]").forEach((el) => (el.hidden = false));
    const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    live.forEach((p) => $("#posts").append(h("a", { href: `blog/post.html?p=${encodeURIComponent(p.slug)}` },
      h("div", {}, h("b", {}, p.title), p.summary ? h("p", {}, p.summary) : null), h("time", { datetime: p.date }, fmt(p.date)))));
  }

  // ── Contact ────────────────────────────────────────────────
  const mail = $("#mail"); mail.textContent = S.links.email; mail.href = "mailto:" + S.links.email;
  const copyBtn = h("button", { class: "btn", type: "button" }, icon("copy"), h("span", {}, "Copy email"));
  copyBtn.addEventListener("click", () => {
    const label = copyBtn.querySelector("span"), done = (t) => { label.textContent = t; setTimeout(() => (label.textContent = "Copy email"), 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(S.links.email).then(() => done("Copied!"), () => done(S.links.email));
    else done(S.links.email);
  });
  $("#cta2").append(copyBtn, ...socials(false).slice(1));
  $("#year").textContent = new Date().getFullYear();

  // ── Top bar: border once scrolled, highlight the current section ──
  const bar = $(".topbar");
  const navLinks = [...document.querySelectorAll(".topbar nav a")];
  const onScroll = () => { bar.classList.toggle("scrolled", scrollY > 8); if (scrollY < 200) navLinks.forEach((a) => a.classList.remove("on")); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id], footer[id]").forEach((s) => spy.observe(s));
})();
