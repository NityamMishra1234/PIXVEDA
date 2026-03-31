"use client";

import Reveal from "@/components/animations/Reveal";

const steps = [
  {
    title: "Diagnose the growth ceiling",
    description:
      "We audit positioning, funnel performance, channel mix, and conversion friction to see what is actually holding growth back.",
  },
  {
    title: "Design the market narrative",
    description:
      "We align messaging, creative direction, and offer architecture so every touchpoint sounds like the same confident company.",
  },
  {
    title: "Launch the momentum engine",
    description:
      "Campaigns, content, pages, and automation are deployed as one coordinated system instead of disconnected tactics.",
  },
  {
    title: "Optimize with accountability",
    description:
      "We track leading indicators, tighten performance, and keep the strategy moving toward pipeline, revenue, and retention goals.",
  },
];

export default function Process() {
  return (
    <section className="section-padding py-20 sm:py-24">
      <div className="container-width">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              A sharper process for teams that want growth without guesswork.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="glass-panel rounded-[1.8rem] p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
                Step 0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
