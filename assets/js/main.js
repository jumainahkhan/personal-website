// Builds the page from SITE (assets/js/data.js) and POSTS (blog/posts.js),
// then runs the galaxy and the constellation.
(() => {
  const S = window.SITE, POSTS = window.POSTS || [];
  const $ = (s) => document.querySelector(s);
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat()) if (kid != null) el.append(kid.nodeType ? kid : document.createTextNode(kid));
    return el;
  };

  // ── Text content ────────────────────────────────────────────
  $("#tagline").textContent = S.tagline;
  S.about.forEach((p) => $("#aboutText").append(h("p", {}, p)));
  S.skills.forEach((s) => $("#skills").append(h("li", {}, s)));
  $("#langs").textContent = S.languages.join(" · ");
  const mail = $("#mail"); mail.textContent = S.links.email; mail.href = "mailto:" + S.links.email;
  $("#gh").href = S.links.github; $("#li").href = S.links.linkedin;
  $("#year").textContent = new Date().getFullYear();
  $("#copy").addEventListener("click", (e) => {
    const btn = e.currentTarget, done = (ok) => { btn.textContent = ok ? "Copied" : S.links.email; setTimeout(() => (btn.textContent = "Copy email"), 1600); };
    navigator.clipboard?.writeText(S.links.email).then(() => done(true), () => done(false)) ?? done(false);
  });

  // ── Journey constellation ──────────────────────────────────
  const sky = $("#sky"), J = S.journey, n = J.length;
  const pts = J.map((_, i) => {
    const t = n === 1 ? .5 : i / (n - 1);
    return [50 + t * 300, 320 - t * 230 + Math.sin(t * Math.PI * 2) * 40];
  });
  const line = document.createElementNS(NS, "polyline");
  line.setAttribute("points", pts.map((p) => p.join(",")).join(" "));
  Object.entries({ fill: "none", stroke: "#34245a", "stroke-width": 1.5, "stroke-dasharray": "4 6" }).forEach(([k, v]) => line.setAttribute(k, v));
  sky.append(line);
  const stars = J.map((e, i) => {
    const [x, y] = pts[i], g = document.createElementNS(NS, "g");
    g.setAttribute("class", "star"); g.setAttribute("tabindex", "0"); g.setAttribute("role", "button");
    g.setAttribute("aria-label", `${e.role}, ${e.org}, ${e.dates}`);
    g.innerHTML = `<circle class="halo" cx="${x}" cy="${y}" r="24"/>
      <path class="core" d="M${x} ${y - 13} L${x + 3} ${y - 3} L${x + 13} ${y} L${x + 3} ${y + 3} L${x} ${y + 13} L${x - 3} ${y + 3} L${x - 13} ${y} L${x - 3} ${y - 3}Z"/>
      <text x="${x}" y="${y + 38}" text-anchor="middle">${e.short}</text>`;
    const show = () => {
      stars.forEach((s) => s.classList.toggle("on", s === g));
      $("#detail").replaceChildren(h("h3", {}, e.role), h("p", { class: "meta" }, `${e.org} · ${e.dates} · ${e.where}`), h("ul", {}, e.points.map((p) => h("li", {}, p))));
    };
    g.addEventListener("mouseenter", show); g.addEventListener("focus", show); g.addEventListener("click", show);
    g.addEventListener("keydown", (ev) => (ev.key === "Enter" || ev.key === " ") && (ev.preventDefault(), show()));
    sky.append(g); g._show = show; return g;
  });
  (stars[n - 2] || stars[0])._show();

  // ── Projects ───────────────────────────────────────────────
  const hues = ["#7ef2e0", "#f2a7d8", "#c9b6f2", "#ffd59e", "#8fb8ff", "#b6f2a7", "#f2c9a7", "#a7d8f2"];
  const openShot = (src, alt) => {
    const box = h("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": alt, tabindex: "-1" }, h("img", { src, alt }), h("p", {}, alt));
    const last = document.activeElement, close = () => { box.remove(); removeEventListener("keydown", esc); last?.focus(); };
    const esc = (e) => e.key === "Escape" && close();
    box.addEventListener("click", close); addEventListener("keydown", esc);
    document.body.append(box); box.focus();
  };
  const initials = (name) => {
    const words = name.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
    return words.length > 1 ? words.slice(0, 2).map((w) => w[0].toUpperCase()).join("") : name.replace(/[^A-Za-z]/g, "").slice(0, 2);
  };
  const shot = (p) => {
    if (p.img) return h("button", { class: "shot", type: "button", "aria-label": "Enlarge screenshot of " + p.name, onclick: () => openShot(p.img, p.alt) },
      h("img", { src: p.img, alt: p.alt, loading: "lazy", decoding: "async" }), h("span", { class: "zoom" }, "enlarge"));
    const el = h("div", { class: "shot empty", "aria-hidden": "true" }, h("b", {}, initials(p.name)));
    for (let k = 0; k < 40; k++) el.append(h("i", { style: `left:${(k * 37) % 100}%;top:${(k * 53) % 100}%;opacity:${.2 + (k % 5) / 6}` }));
    return el;
  };
  const links = (p) => {
    const a = [];
    if (p.live) a.push(h("a", { href: p.live, target: "_blank", rel: "noopener" }, "Live site ↗"));
    if (p.code) a.push(h("a", { href: p.code, target: "_blank", rel: "noopener" }, "Code ↗"));
    return a.length ? h("div", { class: "plinks" }, a) : null;
  };
  let flip = false;
  S.projects.forEach((p, i) => {
    const cls = "planet" + (p.feature ? " feature" + ((flip = !flip) ? "" : " flip") : "");
    $("#planets").append(h("article", { class: cls, style: `--c:${hues[i % hues.length]}` }, shot(p),
      h("div", { class: "pbody" }, h("small", {}, `${p.tag} · ${p.when}`), h("h3", {}, p.name), h("p", {}, p.blurb),
        h("ul", { class: "stack", "aria-label": "Built with" }, p.stack.map((s) => h("li", {}, s))), links(p))));
  });
  if (S.more?.length) {
    $("#more").append(h("h3", { class: "mini" }, "Also built"),
      h("ul", {}, S.more.map((m) => h("li", {}, h("b", {}, m.name), h("span", {}, m.blurb), h("em", {}, m.when)))),
      h("a", { class: "gh", href: S.links.github, target: "_blank", rel: "noopener" }, "More on GitHub ↗"));
  }

  // ── Notes (only shown once there is at least one post) ─────
  const live = POSTS.filter((p) => !p.draft).sort((a, b) => b.date.localeCompare(a.date));
  if (live.length) {
    document.querySelectorAll("[data-needs-posts]").forEach((el) => (el.hidden = false));
    const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    live.forEach((p) => $("#posts").append(h("a", { href: `blog/post.html?p=${encodeURIComponent(p.slug)}` },
      h("div", {}, h("b", {}, p.title), p.summary ? h("p", {}, p.summary) : null), h("time", { datetime: p.date }, fmt(p.date)))));
  }

  // ── Galaxy ─────────────────────────────────────────────────
  const hero = $(".hero"), cv = $("#galaxy"), c = cv.getContext("2d");
  let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2), running = true;
  const size = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; c.setTransform(dpr, 0, 0, dpr, 0, 0); };
  size(); addEventListener("resize", size);
  const N = innerWidth < 600 ? 800 : 1400;
  const P = Array.from({ length: N }, (_, i) => { const r = Math.pow(Math.random(), .6); return { r, th: (i % 3) * 2.09 + r * 5 + (Math.random() - .5) * .6, s: Math.random() * 1.6 + .3, hue: Math.random() }; });
  const bg = Array.from({ length: 200 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() }));
  let mx = .5, my = .45, cx = .5, cy = .45, warp = 0, warpT = 0, t = 0;
  hero.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; });
  hero.addEventListener("pointerdown", (e) => { if (!e.target.closest("a")) warp = 1; });
  addEventListener("pointerup", () => (warp = 0)); addEventListener("pointercancel", () => (warp = 0));
  addEventListener("keydown", (e) => { if (e.code === "Space" && running && !e.target.closest("button, a, input, textarea, [role=button]")) { e.preventDefault(); warp = 1; } });
  addEventListener("keyup", (e) => { if (e.code === "Space") warp = 0; });
  function frame() {
    t++; warpT += (warp - warpT) * .05; cx += (mx - cx) * .03; cy += (my - cy) * .03;
    c.fillStyle = `rgba(18, 8, 31, ${.35 - warpT * .25})`; c.fillRect(0, 0, W, H);
    for (const b of bg) { c.fillStyle = `rgba(236,230,255,${.2 + .5 * Math.abs(Math.sin(t / 60 + b.s * 10))})`; c.fillRect(b.x * W, b.y * H, 1.2, 1.2); }
    const R = Math.min(W, H) * .42, ox = W * (.5 + (cx - .5) * .25), oy = H * (.42 + (cy - .5) * .2);
    for (const p of P) {
      if (!reduce) p.th += (.002 + .006 / (p.r + .15)) * (1 + warpT * 8);
      const x = ox + Math.cos(p.th) * p.r * R * 1.25, y = oy + Math.sin(p.th) * p.r * R * .55;
      const col = p.hue < .45 ? "126,242,224" : p.hue < .8 ? "201,182,242" : "242,167,216";
      c.fillStyle = `rgba(${col},${1 - p.r * .6})`; c.beginPath(); c.arc(x, y, p.s * (1 - p.r * .4), 0, 7); c.fill();
    }
    const core = c.createRadialGradient(ox, oy, 0, ox, oy, R * .3);
    core.addColorStop(0, "rgba(255,240,250,.6)"); core.addColorStop(1, "rgba(255,240,250,0)"); c.fillStyle = core; c.fillRect(ox - R, oy - R, R * 2, R * 2);
    if (running && !reduce) requestAnimationFrame(frame);
  }
  // Pause the galaxy while it's scrolled out of view.
  new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was && !reduce) requestAnimationFrame(frame); }).observe(hero);
  c.fillStyle = "#12081f"; c.fillRect(0, 0, W, H);
  if (reduce) { for (let k = 0; k < 4; k++) frame(); } else requestAnimationFrame(frame);
})();
