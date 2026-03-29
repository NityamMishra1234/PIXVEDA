"use client";

import Reveal from "@/components/animations/Reveal";

const highlights = [
  {
    stat: "3.4x",
    title: "More qualified pipeline",
    copy: "Paid acquisition and landing page redesign combined into a tighter conversion loop.",
  },
  {
    stat: "61%",
    title: "Lower cost per SQL",
    copy: "Audience refinement and creative iteration removed wasted spend while improving lead quality.",
  },
  {
    stat: "5 weeks",
    title: "To launch a full growth system",
    copy: "Positioning, page design, campaign structure, and automation shipped as one coordinated release.",
  },
];

export default function Results() {
  return (
    <section className="section-padding py-20 sm:py-24">
      <div className="container-width grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="rounded-[2.2rem] border border-[rgba(19,17,14,0.08)] bg-[#f6b645] p-8 text-[#181511] shadow-[0_24px_70px_rgba(217,95,39,0.15)] sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em]">
            Proof of Thinking
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Enterprise-level polish means nothing if it does not move the numbers.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(24,21,17,0.8)]">
            PIXVEDA is built for outcomes. We care about visibility, yes, but only
            if it becomes trust, pipeline, and demand. Good marketing should feel
            premium and perform like a machine.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {highlights.map((item) => (
            <Reveal
              key={item.title}
              className="glass-panel rounded-[1.9rem] p-7 sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-5xl font-semibold tracking-[-0.05em] text-[#181511]">
                    {item.stat}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#181511]">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-[rgba(19,17,14,0.72)]">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
