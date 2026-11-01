// ─────────────────────────────────────────────────────────────
//  All the words on the site live here. Edit this file to update
//  your bio, jobs or projects; the page rebuilds itself from it.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: "Jumainah Khan",
  tagline: "Software engineer in Geneva, pulling ideas out of the dark and turning them into things that work.",

  about: [
    "I'm a software engineer doing my Master's in Computer Science at the University of Geneva, on the Excellence Master Fellowship.",
    "Before Geneva, I was a full-stack engineer at DISH Network Technologies in Bengaluru. I built Hexbin View, an analytics app that gives Boost Mobile's operations teams a view of 5G signal quality across the US, and it earned me a Spot Award.",
    "These days I'm into AI tools that do useful, concrete things, and I enter a lot of hackathons. Outside of class I build small apps for my own life: a chore rota for my flat, a habit tracker, and flashcards for my French."
  ],
  skills: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "FastAPI", "AWS Lambda", "Supabase", "SQL / SPARQL", "Java", "C / C++", "Dart", "TensorFlow"],
  languages: ["English", "Hindi", "Urdu", "French (learning)"],

  links: {
    email: "jumainah.khan@gmail.com",
    github: "https://github.com/jumainahkhan",
    linkedin: "https://linkedin.com/in/jumainah-khan"
  },

  // Oldest first: each one becomes a star in the constellation.
  journey: [
    { short: "Revamph", org: "Revamph Corp.", role: "Software Developer Intern", dates: "Feb 2023 – Mar 2023", where: "Remote",
      points: ["Built a mobile app for the NAHEP IDP programme from scratch.", "Integrated Firebase for real-time data and cloud storage."] },
    { short: "Zivaka", org: "Zivaka LLP", role: "Junior Developer Intern", dates: "Feb 2024 – Jun 2024", where: "Remote",
      points: ["Built mobile apps for client companies' employee-management workflows.", "Wrote REST APIs in Node.js to connect the apps to backend services.", "Onboarded new interns on clean code and MVVM architecture."] },
    { short: "DISH", org: "DISH Network Technologies", role: "Software Engineer (Full Stack)", dates: "Jul 2024 – Aug 2025", where: "Bengaluru, India",
      points: ["Built Hexbin View, a full-stack network-analytics app for Boost Mobile, the 4th-largest US carrier, tracking 5G O-RAN signal quality (RSRP, RSRQ, SINR, voice quality).",
        "Designed a serverless backend on AWS Lambda and API Gateway to ingest large volumes of network telemetry.",
        "Built REST APIs connecting the analytics frontend to multiple upstream data sources.",
        "Won a company Spot Award (2025) for the project."] },
    { short: "UNIGE", org: "University of Geneva", role: "MSc Computer Science", dates: "Sep 2025 – now", where: "Geneva",
      points: ["Excellence Master Fellowship, Faculty of Sciences.", "Before this: BE (Honours) in Computer Science and Engineering, New Horizon College of Engineering, Bengaluru (2020 – 2024)."] }
  ],

  // feature: true → shown large at the top. img is optional.
  projects: [
    { name: "Ctrl+Free", tag: "Hackathon · Honourable Mention", when: "Oct 2026", feature: true,
      stack: ["Python", "FastAPI", "React", "GPT-5.4"],
      img: "assets/img/projects/ctrlfree.jpg", alt: "Ctrl+Free reviewing one tender line: the tender PDF on the left, the computed price on the right",
      code: "https://github.com/beSaif/ctrl-free",
      blurb: "An AI assistant that turns a 202-page construction tender into a first price estimate for Equans Switzerland. Code shortlists catalogue products, GPT-5.4 picks the match, and deterministic pricing reproduced all 22 of Equans' verified reference lines exactly." },
    { name: "Coloc", tag: "Side project", when: "Nov 2026", feature: true,
      stack: ["React", "TypeScript", "Supabase", "PWA"],
      img: "assets/img/projects/coloc.jpg", alt: "Three phone screens from Coloc: the Geneva campus, the flat as a clay dollhouse, and the month's chores with the kitchen done",
      live: "https://coloc-flat.vercel.app",
      blurb: "Chores, shared fairly. Every month Coloc deals out the cleaning so flatmates each do their share, and shows the flat as an isometric clay dollhouse that gathers dust bunnies until each room is done. No account needed, in French and English." },
    { name: "Viva", tag: "Hackathon · {Tech: Europe} Zürich", when: "Oct 2026",
      stack: ["Gemini", "FastAPI", "React", "Voice AI"],
      code: "https://github.com/jumainahkhan/viva",
      blurb: "Sit your oral exam out loud before the real one. Three AI professor agents read your lecture slides, question you by voice, agree on a grade on the Swiss 1–6 scale, and hand you a revision plan." },
    { name: "tpgFlex Reallocation", tag: "Hackathon · Hackademia", when: "Apr 2026",
      stack: ["Python", "Streamlit"],
      img: "assets/img/projects/tpgflex.jpg", alt: "Pitch slide comparing three reallocation strategies: idle only, in-service rerouting and hybrid scoring",
      blurb: "When an on-demand TPG vehicle breaks down, who picks up its passengers? We compared three reallocation strategies on three months of real Geneva transit data." },
    { name: "Board Grab", tag: "Side project", when: "Nov 2026",
      stack: ["FastAPI", "gallery-dl"],
      img: "assets/img/projects/boardgrab.jpg", alt: "Board Grab showing a Pinterest board's pins in a preview grid with a Download all button",
      live: "https://board-grab.onrender.com", code: "https://github.com/jumainahkhan/board-grab",
      blurb: "Paste a Pinterest board link and download every image as one ZIP. No extension, nothing stored on the server." },
    { name: "Mon Vocabulaire", tag: "Side project", when: "Nov 2026",
      stack: ["JavaScript", "PWA"],
      img: "assets/img/projects/vocabulaire.jpg", alt: "Mon Vocabulaire on a phone: progress ring, level, streak and a Study now button",
      live: "https://jumainahkhan.github.io/french-flashcards/", code: "https://github.com/jumainahkhan/french-flashcards",
      blurb: "French flashcards with simple spaced repetition and verb conjugation practice, built for my B1 course. Works offline from the home screen." },
    { name: "Visual Compliance Inspector", tag: "Hackathon · Swiss AI Weeks", when: "Sep 2026",
      stack: ["NVIDIA Cosmos", "Video AI", "Python"],
      code: "https://github.com/Swiss-ai-Weeks/compliance-inspector",
      blurb: "Watches factory footage and checks it against the written procedure: which steps were done, which were missed, and when." },
    { name: "Hobby Tracker", tag: "Side project", when: "Sep 2026",
      stack: ["Next.js", "Postgres", "Web Push"],
      blurb: "A habit tracker shaped like a small pixel-art room. Each habit is an object you tap, and a little companion reacts to how the day is going." }
  ],

  // Smaller projects, listed under the cards.
  more: [
    { name: "ICRC Negotiation Simulator", when: "Sep 2026", blurb: "Practise checkpoint negotiations against a gradable AI avatar (Geneva hackathon)." },
    { name: "NL ↔ SPARQL", when: "May 2026", blurb: "Translates plain English into SPARQL queries over DBpedia. I led development." }
  ]
};
