"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Navbar from "@/components/layout/Navbar";

/* ------------------------------------------------------------------ */
/*  Shared animation variants                                          */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

const TAGS = ["Reels & Shorts", "YouTube Videos", "Ads & Promos", "Corporate Videos", "Subtitles", "Color Grading"];

function AnimatedHeadline() {
  const lines = ["Raw footage in.", "A video people", "watch till the end."];
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } };
  const word = { hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } } };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-balance font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[3.6rem]"
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.split(" ").map((w, wi) => (
            <span key={wi} className="mr-3 inline-block overflow-hidden">
              <motion.span
                variants={word}
                className={`inline-block ${li === 2 ? "bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

function LiveEditHUD() {
  const playheadRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !playheadRef.current) return;
    const tween = gsap.fromTo(
      playheadRef.current,
      { left: "2%" },
      { left: "96%", duration: 5.5, ease: "power1.inOut", repeat: -1, yoyo: true }
    );
    return () => { tween.kill(); };
  }, [reduceMotion]);

  const bars = Array.from({ length: 34 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="glass-panel w-full max-w-md rounded-2xl p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Editing live
        </span>
        <span className="font-mono text-[11px] text-ink-soft">reel_final_v4.mp4</span>
      </div>

      <div className="mb-4 flex h-8 items-end gap-[2px] overflow-hidden rounded-md bg-surface-soft px-2 py-1">
        {bars.map((_, i) => (
          <span
            key={i}
            className="w-full rounded-sm bg-gradient-to-t from-accent to-brand"
            style={{ height: `${18 + Math.abs(Math.sin(i * 0.9)) * 82}%`, opacity: 0.85 }}
          />
        ))}
      </div>

      <div className="relative h-9 rounded-md border border-border bg-surface-soft">
        <div className="absolute left-[2%] top-1.5 h-2.5 w-[20%] rounded-sm bg-brand/70" />
        <div className="absolute left-[26%] top-1.5 h-2.5 w-[16%] rounded-sm bg-brand/70" />
        <div className="absolute left-[46%] top-1.5 h-2.5 w-[30%] rounded-sm bg-accent/70" />
        <div className="absolute left-[80%] top-1.5 h-2.5 w-[18%] rounded-sm bg-brand/70" />
        {!reduceMotion && (
          <div ref={playheadRef} className="absolute top-0 h-full w-[2px] bg-foreground shadow-[0_0_8px_rgba(247,242,232,0.8)]" />
        )}
      </div>

      <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-soft">
        cut → color → captions → export <span className="text-brand">— ready in 2–6 days</span>
      </p>
    </motion.div>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion || !videoRef.current || !sectionRef.current) return;
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => { });
        else video.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <header id="top" ref={sectionRef} className="relative isolate overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-20">
        {!reduceMotion && !videoFailed ? (
          <video
            ref={videoRef}
            className="hero-video h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/android-chrome-512x512.png"
            onError={() => setVideoFailed(true)}
          >
            <source src="/video/video-editing.mp4" type="video/mp4" />
            <source src="/video/video-editing.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url(/hero-poster.jpg)" }} />
        )}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/40 to-background/85" />
      <div className="hero-grain pointer-events-none absolute inset-0 -z-10" />

      <div className="container-width section-padding relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow mb-6">
            Video editing, done for you
          </motion.span>

          <AnimatedHeadline />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 max-w-xl text-lg text-ink-soft"
          >
            Reels, YouTube videos, ads, or corporate films — we cut, color, and sound-design
            your footage into something people actually finish watching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold text-[#1a1102] shadow-[0_18px_40px_-14px_rgba(246,182,69,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[#ffc662]"
            >
              Get a free quote →
            </a>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              See what we edit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {TAGS.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-ink-soft">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <LiveEditHUD />
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  What we do                                                         */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  { label: "Cutting", desc: "Removing mistakes, silences, and boring parts" },
  { label: "Music", desc: "Background music and sound effects that fit the mood" },
  { label: "Text", desc: "Captions and subtitles so people can watch on mute" },
  { label: "Color", desc: "Making footage look bright, sharp, and consistent" },
];

function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding py-24 sm:py-32">
      <div className="container-width grid gap-16 lg:grid-cols-2 lg:items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}>
          <span className="eyebrow mb-6">In simple words</span>
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-[2.3rem]">
            You shoot the footage.
            <br />
            We turn it into a finished video.
          </h2>
          <p className="mt-6 text-ink-soft">
            Video editing means taking your raw clips — shot on a phone or a camera — and
            putting them together in the right order, cutting out the boring or unwanted parts,
            adding music, sound effects, text, and color, so the final video looks smooth and
            professional.
          </p>
          <p className="mt-4 text-ink-soft">
            You don&apos;t need to understand editing software or technical terms. Send us your
            footage (or the topic, if we&apos;re filming for you), tell us what the video is
            for, and we send back a video that&apos;s ready to post — on Instagram, YouTube,
            your website, or anywhere else.
          </p>
        </motion.div>

        <div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-4 text-sm text-ink-soft">
            What&apos;s included in every edit
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={i + 1}
                variants={fadeUp}
                className="glass-panel rounded-xl p-5"
              >
                <div className="font-mono text-xl font-semibold text-brand">{item.label}</div>
                <p className="mt-2 text-sm text-ink-soft">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Channels                                                            */
/* ------------------------------------------------------------------ */

const CHANNELS = [
  { title: "Reels & Shorts", desc: "Fast-paced, trend-aware edits for Instagram Reels, YouTube Shorts, and TikTok — made to stop the scroll in the first 2 seconds.", mark: "▲" },
  { title: "YouTube Videos", desc: "Long-form edits with proper pacing, clean cuts, and thumbnails — built to keep viewers watching longer, not just clicking away.", mark: "▶" },
  { title: "Ads & Promo Videos", desc: "Short, punchy edits for Meta and Google ad campaigns — built to explain your offer and get the click within seconds.", mark: "◆" },
  { title: "Corporate & Brand Videos", desc: "Clean, professional edits for company profiles, product demos, and internal training videos.", mark: "■" },
  { title: "Event & Interview Videos", desc: "Multi-camera edits for events, interviews, and testimonials — synced audio, clean cuts, no awkward jumps.", mark: "●" },
  { title: "Motion Graphics & Titles", desc: "Animated titles, lower-thirds, and simple graphics that make your video look polished, not homemade.", mark: "✦" },
];

function Channels() {
  return (
    <section className="section-padding border-t border-border bg-background-alt py-24 sm:py-32">
      <div className="container-width">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow mb-6">What we edit</span>
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-[2.3rem]">Every kind of video your business needs.</h2>
          <p className="mt-4 text-ink-soft">Whatever the platform, the goal stays the same — a video that holds attention and gets your message across clearly.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: (idx: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] } }),
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass-panel rounded-2xl p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-lg text-brand">{c.mark}</div>
              <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-ink-soft">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Portfolio                                                           */
/* ------------------------------------------------------------------ */

const PROJECTS = [
  { title: "Weekend Market Reel", tag: "Reel · 28s", thumb: "/portfolio/reel-market.jpg", preview: "/portfolio/reel-market-preview.mp4" },
  { title: "Founder Interview", tag: "YouTube · 9 min", thumb: "/portfolio/interview.jpg", preview: "/portfolio/interview-preview.mp4" },
  { title: "App Launch Ad", tag: "Meta Ad · 15s", thumb: "/portfolio/app-launch.jpg", preview: "/portfolio/app-launch-preview.mp4" },
  { title: "Factory Walkthrough", tag: "Corporate · 3 min", thumb: "/portfolio/factory.jpg", preview: "/portfolio/factory-preview.mp4" },
  { title: "Product Unboxing", tag: "Shorts · 34s", thumb: "/portfolio/unboxing.jpg", preview: "/portfolio/unboxing-preview.mp4" },
  { title: "Conference Highlight", tag: "Event · 2 min", thumb: "/portfolio/conference.jpg", preview: "/portfolio/conference-preview.mp4" },
];

const CLIENTS = ["Marigold Foods", "Nimbus Wear", "Kavya Interiors", "Bright Path Clinics", "Solstice Realty", "Verve Fitness", "Coral Bay Hotels", "Aster Analytics"];

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const x = useMotionValue(0);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(96, Math.max(4, raw)));
  }

  return (
    <div className="glass-panel overflow-hidden rounded-2xl p-3 sm:p-4">
      <div
        ref={containerRef}
        className="group relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-xl"
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return;
          updateFromClientX(e.clientX);
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/portfolio/before-after-edited.jpg)", backgroundColor: "#0d1420" }} />
        <div
          className="absolute inset-0 bg-cover bg-center grayscale contrast-75 brightness-75"
          style={{ backgroundImage: "url(/portfolio/before-after-raw.jpg)", backgroundColor: "#11151c", clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">Raw</div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">Edited</div>
        <div className="absolute top-0 bottom-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-foreground/80" style={{ left: `${pct}%` }}>
          <motion.div style={{ x }} className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background shadow-lg">
            <span className="font-mono text-xs text-ink-soft">↔</span>
          </motion.div>
        </div>
      </div>
      <p className="mt-3 px-1 text-center font-mono text-xs text-ink-soft">Drag to compare — same clip, before and after the edit</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => videoRef.current?.play().catch(() => { })}
      onHoverEnd={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border"
    >
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0" style={{ backgroundImage: `url(${project.thumb})`, backgroundColor: "#0d1420" }} />
      <video ref={videoRef} muted loop playsInline preload="none" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <source src={project.preview} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
        <span className="mt-1 block font-mono text-xs text-brand">{project.tag}</span>
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xs text-foreground opacity-0 transition-opacity group-hover:opacity-100">▶</div>
    </motion.div>
  );
}

function ClientMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !trackRef.current) return;
    const tween = gsap.to(trackRef.current, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
    return () => {
      tween.kill();
    };
  }, [reduceMotion]);

  const loopList = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div ref={trackRef} className="flex w-max gap-14 py-2">
        {loopList.map((name, i) => (
          <span key={`${name}-${i}`} className="whitespace-nowrap font-display text-lg font-semibold text-ink-soft/50">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-padding border-t border-border py-24 sm:py-32">
      <div className="container-width">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow mb-6">Recent work</span>
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-[2.3rem]">See the difference an edit makes.</h2>
          <p className="mt-4 text-ink-soft">A few recent projects, and the same clip before and after we get our hands on it.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <BeforeAfterSlider />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PROJECTS.slice(4).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div>
          <p className="mt-20 text-center font-mono text-xs uppercase tracking-widest text-ink-soft">Trusted by brands like</p>
          <ClientMarquee />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process                                                             */
/* ------------------------------------------------------------------ */

const STEPS = [
  { num: "01", title: "You send us the footage", desc: "Share your raw clips through Google Drive, WhatsApp, or any file-sharing link — along with what the video is for.", when: "Day 1" },
  { num: "02", title: "We plan the story", desc: "We watch everything first and decide the order, the message, and the mood — before making a single cut.", when: "Day 1–2" },
  { num: "03", title: "First edit (draft)", desc: "We cut, add music, and add text — then send you a draft version to watch and review.", when: "Day 2–4" },
  { num: "04", title: "Your feedback & changes", desc: "You tell us what to change — trim a part, swap the music, adjust the pace. We make the changes and send it back.", when: "Day 4–5" },
  { num: "05", title: "Final video, ready to post", desc: "Once you approve it, we export the video in the right size and quality for wherever you're posting it.", when: "Day 5–6" },
];

function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !trackRef.current || !fillRef.current) return;
    const tween = gsap.fromTo(
      fillRef.current,
      { height: "0%" },
      { height: "100%", ease: "none", scrollTrigger: { trigger: trackRef.current, start: "top 65%", end: "bottom 70%", scrub: 0.6 } }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduceMotion]);

  return (
    <section id="process" className="section-padding py-24 sm:py-32">
      <div className="container-width">
        <div className="mb-14 max-w-xl">
          <span className="eyebrow mb-6">How it works</span>
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-[2.3rem]">From raw footage to a finished video — step by step.</h2>
          <p className="mt-4 text-ink-soft">No technical back-and-forth. You send footage, we send updates, you approve the final cut.</p>
        </div>

        <div ref={trackRef} className="relative">
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-border sm:left-[13px]">
            <div ref={fillRef} className="w-full bg-gradient-to-b from-brand to-accent" style={{ height: reduceMotion ? "100%" : undefined }} />
          </div>

          <ul className="flex flex-col gap-10 sm:gap-12">
            {STEPS.map((step) => (
              <li key={step.num} className="relative pl-9 sm:pl-12">
                <span className="absolute left-0 top-1.5 h-[18px] w-[18px] rounded-full border-2 border-brand bg-background sm:h-[26px] sm:w-[26px]" />
                <div className="grid gap-2 sm:grid-cols-[1fr_140px] sm:items-start sm:gap-6">
                  <div>
                    <span className="mb-1 block font-mono text-xs text-brand">{step.num}</span>
                    <h3 className="mb-1.5 text-lg font-semibold sm:text-xl">{step.title}</h3>
                    <p className="max-w-lg text-sm text-ink-soft">{step.desc}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-soft sm:text-right">{step.when}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Results + FAQ                                                       */
/* ------------------------------------------------------------------ */

const STATS = [
  { num: "2–6 Days", label: "Typical turnaround time, depending on video length" },
  { num: "Unlimited", label: "Revision rounds until you're happy with the final cut" },
  { num: "Any Size", label: "Exported for Instagram, YouTube, ads, or your website" },
  { num: "You Own It", label: "Full rights to the final video and project files" },
];

const FAQS = [
  { q: "Do I need to shoot the video myself?", a: "No. You can send us footage shot on a phone, or ask us to help plan and shoot it too. Either way, we handle the editing." },
  { q: "What if I don't like the first draft?", a: "That's completely normal. We revise the edit based on your feedback until you're happy with the final version — at no extra cost." },
  { q: "How long does one video take?", a: "Short Reels usually take 2–3 days. Longer YouTube videos or ads can take 4–6 days, depending on how much footage there is." },
  { q: "Can you add subtitles in Hindi?", a: "Yes, we add subtitles in both English and Hindi, so your video reaches a wider audience and works even on mute." },
  { q: "What file formats will I get?", a: "You'll get the final video in MP4 format, sized correctly for wherever you're posting — Instagram, YouTube, or a website." },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-border py-6 first:border-t-0">
      <button onClick={onToggle} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-base font-semibold sm:text-lg">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="font-mono text-xl text-brand">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm text-ink-soft sm:text-[15px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultsAndFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <section id="results" className="section-padding py-24 sm:py-28">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel grid grid-cols-2 gap-8 rounded-3xl p-8 sm:p-12 lg:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-semibold text-brand sm:text-[1.75rem]">{s.num}</div>
                <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
              </div>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-xs italic text-ink-soft">
            Exact turnaround depends on footage length and complexity — confirmed with you before we start.
          </p>
        </div>
      </section>

      <section id="faq" className="section-padding border-t border-border bg-background-alt py-24 sm:py-32">
        <div className="container-width max-w-3xl">
          <div className="mb-12">
            <span className="eyebrow mb-6">Questions people usually ask</span>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-[2.3rem]">Before you send us your footage.</h2>
          </div>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                 */
/* ------------------------------------------------------------------ */



/* ------------------------------------------------------------------ */
/*  Exported page component — drop straight inside your layout's       */
/*  <main>. Nav and Footer are intentionally not included here.        */
/* ------------------------------------------------------------------ */

export default function VideoEditing() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Channels />
      <Portfolio />
      <Process />
      <ResultsAndFAQ />
    </main>
  );
}