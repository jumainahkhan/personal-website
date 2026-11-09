// ─────────────────────────────────────────────────────────────
//  Everything written on the site lives here. Edit this file to
//  update your bio, jobs or projects; the page builds itself from it.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Jumainah Khan",
  // Put your photo at assets/img/me.jpg (a square-ish crop works best).
  photo: "assets/img/me.jpg",
  photoCaption: "hi, that's me!",

  intro: "I'm a software engineer doing my Master's in Computer Science at the University of Geneva. I like building things that are useful the same week they're made, which is probably why I spend so many weekends at hackathons.",
  location: "Geneva, Switzerland",
  now: "MSc Computer Science, University of Geneva",

  about: [
    "I studied Computer Science in Bengaluru, then spent a year as a full-stack engineer at DISH Network. There I built Hexbin View, an analytics app that shows Boost Mobile's operations teams how their 5G network is doing across the US. It won me a Spot Award, and it taught me to care about the boring parts: data pipelines, APIs, and making numbers people can trust.",
    "In 2025 I moved to Geneva for my Master's, on the Excellence Master Fellowship. Since then I've done six hackathons, mostly building AI tools for real organisations like the ICRC, Equans and TPG.",
    "Outside of that I build small apps for my own life: a chore rota for my flat, and flashcards for my French, which is slowly getting better."
  ],
  skills: ["Python", "JavaScript / TypeScript", "React", "FastAPI", "Node.js", "AWS Lambda", "Supabase", "SQL & SPARQL", "Java", "C / C++", "Dart & Flutter", "TensorFlow"],
  languages: ["English", "Hindi", "Urdu", "French (learning!)"],

  links: {
    email: "jumainahkhan@gmail.com",
    github: "https://github.com/jumainahkhan",
    linkedin: "https://linkedin.com/in/jumainah-khan"
  },

  // Newest first.
  experience: [
    { role: "MSc Computer Science", org: "University of Geneva", dates: "Sep 2025 – now", where: "Geneva",
      points: ["Excellence Master Fellowship, Faculty of Sciences."] },
    { role: "Software Engineer (Full Stack)", org: "DISH Network Technologies", dates: "Jul 2024 – Aug 2025", where: "Bengaluru, India",
      points: ["Built Hexbin View, a full-stack network-analytics app for Boost Mobile, the 4th-largest US carrier, tracking 5G O-RAN signal quality (RSRP, RSRQ, SINR, voice quality).",
        "Designed a serverless backend on AWS Lambda and API Gateway to ingest large volumes of network telemetry.",
        "Built REST APIs connecting the analytics frontend to multiple upstream data sources.",
        "Won a company Spot Award (2025) for the project."] },
    { role: "Junior Developer Intern", org: "Zivaka LLP", dates: "Feb 2024 – Jun 2024", where: "Remote",
      points: ["Built mobile apps for client companies' employee-management workflows, with REST APIs in Node.js.", "Onboarded new interns on clean code and MVVM architecture."] },
    { role: "Software Developer Intern", org: "Revamph Corp.", dates: "Feb 2023 – Mar 2023", where: "Remote",
      points: ["Built a mobile app for the NAHEP IDP programme from scratch, with Firebase for real-time data and storage."] },
    { role: "BE (Honours), Computer Science and Engineering", org: "New Horizon College of Engineering", dates: "2020 – 2024", where: "Bengaluru, India",
      points: ["Board member of the Mobile Application Development Club."] }
  ],

  // ── Hackathons (newest first) ─────────────────────────────
  //  repo: { url } for a public repo, or { private: true }
  //  links: extra buttons, kind is "video" or "live"
  hackathons: [
    { name: "mutz", sub: "Research & expertise navigator", event: "Hack Apertus, Liebefeld", when: "Oct 2026", challenge: "Bern Economic Development Agency",
      img: "assets/img/projects/mutz.jpg", alt: "mutz showing ranked expert matches for a clinical study, each with its quote and source",
      repo: { url: "https://github.com/beSaif/mutz" }, links: [{ kind: "video", label: "Demo video", url: "https://youtu.be/5ywKrGxzQlk" }],
      stack: ["Apertus 70B", "Hybrid search", "Knowledge graph", "FastAPI"],
      blurb: "Helps companies moving to Bern find the right university experts. It crawls public pages into a knowledge graph, and every match shows the exact quote it rests on. 89% recall@10 on held-out questions." },
    { name: "Ctrl+Free", sub: "Tender pricing assistant", event: "Sprintd Hackathon, Zürich", when: "Oct 2026", challenge: "Equans Switzerland", award: "Honourable Mention",
      img: "assets/img/projects/ctrlfree.jpg", alt: "Ctrl+Free reviewing one tender line: the tender PDF on the left, the computed price on the right",
      repo: { url: "https://github.com/beSaif/ctrl-free" },
      stack: ["Python", "FastAPI", "React", "GPT-5.4"],
      blurb: "Turns a 202-page construction tender into a first price estimate. Code shortlists products, the model picks the match, and the maths stays deterministic: it reproduced all 22 of Equans' reference lines exactly." },
    { name: "Viva", sub: "Mock oral exams with AI professors", event: "{Tech: Europe} Agentic AI Hack, Zürich", when: "Oct 2026",
      cover: "#2a1f4a",
      repo: { url: "https://github.com/jumainahkhan/viva" },
      stack: ["Gemini", "Voice AI", "FastAPI", "React"],
      blurb: "Sit your oral exam out loud before the real one. Three AI professors read your lecture slides, question you by voice, agree on a grade on the Swiss 1–6 scale, and give you a revision plan." },
    { name: "win-win", sub: "Negotiation trainer", event: "Geneva Hackathon", when: "Sep 2026", challenge: "ICRC",
      img: "assets/img/projects/winwin.jpg", alt: "win-win: a trainee's briefing next to a live negotiation with two village representatives",
      repo: { private: true },
      stack: ["Python", "FastAPI", "React", "LLM agents"],
      blurb: "Field staff practise negotiations against an AI character that a supervisor scripts in plain language. The supervisor watches trainees live, steers the scene, and releases a debrief backed by evidence." },
    { name: "Visual Compliance Inspector", sub: "Checks factory work against the procedure", event: "Swiss AI Weeks, Agentic AI Hackathon", when: "Sep 2026", challenge: "HPE & NVIDIA",
      cover: "#16333a",
      repo: { url: "https://github.com/Swiss-ai-Weeks/compliance-inspector" },
      stack: ["NVIDIA Cosmos", "Video AI", "Python"],
      blurb: "Watches assembly footage and checks it against the written procedure: which steps were done, which were missed, and when. Built to run on local GPUs so the videos never leave the factory." },
    { name: "Flex Reallocation", sub: "When an on-demand bus breaks down", event: "Hackademia, University of Geneva", when: "Apr 2026", challenge: "TPG",
      img: "assets/img/projects/tpgflex.jpg", alt: "Pitch slide comparing three reallocation strategies: idle only, in-service rerouting and hybrid scoring",
      repo: { private: true },
      stack: ["Python", "Streamlit"],
      blurb: "When a TPG Flex vehicle breaks down mid-shift, who picks up its passengers? We compared reallocation strategies on three months of real Geneva transit data." }
  ],

  // ── Personal projects ─────────────────────────────────────
  projects: [
    { name: "Coloc", sub: "Chores, shared fairly", when: "Nov 2026",
      img: "assets/img/projects/coloc.jpg", alt: "Three phone screens from Coloc: the Geneva campus, the flat as a clay dollhouse, and the month's chores",
      repo: { private: true }, links: [{ kind: "live", label: "Try it", url: "https://coloc-flat.vercel.app" }],
      stack: ["React", "TypeScript", "Supabase", "PWA"],
      blurb: "A cozy app for flatmates. Every month it deals out the cleaning fairly and shows the flat as a little clay dollhouse that gathers dust bunnies until each room is done." },
    { name: "Board Grab", sub: "Download a whole Pinterest board", when: "Nov 2026",
      img: "assets/img/projects/boardgrab.jpg", alt: "Board Grab showing a Pinterest board's pins in a preview grid with a Download all button",
      repo: { url: "https://github.com/jumainahkhan/board-grab" }, links: [{ kind: "live", label: "Try it", url: "https://board-grab.onrender.com" }],
      stack: ["Python", "FastAPI"],
      blurb: "I wanted every image from my moodboard without installing a sketchy extension. Paste a board link, get one ZIP. Nothing is stored on the server." },
    { name: "Mon Vocabulaire", sub: "French flashcards", when: "Nov 2026",
      img: "assets/img/projects/vocabulaire.jpg", alt: "Mon Vocabulaire on a phone: progress ring, level, streak and a Study now button",
      repo: { url: "https://github.com/jumainahkhan/french-flashcards" }, links: [{ kind: "live", label: "Try it", url: "https://jumainahkhan.github.io/french-flashcards/" }],
      stack: ["JavaScript", "PWA"],
      blurb: "Flashcards and verb drills for my B1 French course, with simple spaced repetition. It installs to the home screen and works offline." }
  ],

  // Older or smaller things, shown as a short list.
  earlier: [
    { name: "Medica", when: "2022", what: "Flutter app that scans paper prescriptions and keeps a log of your medicines.", url: "https://github.com/jumainahkhan/Medica",
      img: "assets/img/projects/medica.jpg" },
    { name: "NL ↔ SPARQL", when: "2026", what: "University project translating plain English into SPARQL queries over DBpedia. I led development." },
    { name: "Login with Firebase", when: "2023", what: "Flutter sign-up flow with Firebase Auth, Firestore and file uploads.", url: "https://github.com/jumainahkhan/LogIn" }
  ]
};
