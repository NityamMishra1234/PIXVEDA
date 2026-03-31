"use client";

import Reveal from "@/components/animations/Reveal";

const principles = [
  "Position first, tactics second",
  "Creative that earns trust quickly",
  "Every campaign tied to business outcomes",
  "A premium digital presence at every touchpoint",
];

export default function About() {
  return (
    <section id="about" className="section-padding py-20 sm:py-24">
      <div className="container-width grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="glass-panel rounded-[2.25rem] p-8 sm:p-10">
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            PIXVEDA exists to make growing brands look inevitable.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/72">
            We are a digital marketing startup with an enterprise mindset. That
            means clearer strategy, higher standards, stronger execution, and a
            consistent obsession with outcomes. We don&apos;t just run campaigns. We
            build the signal that makes a company feel trusted, memorable, and
            ready to scale.
          </p>
        </Reveal>

        <Reveal className="rounded-[2.25rem] border border-[rgba(246,182,69,0.16)] bg-[rgba(7,11,18,0.94)] p-8 text-[#f8f1e6] shadow-[0_24px_80px_rgba(2,6,23,0.34)] sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
            Operating Principles
          </p>
          <div className="mt-8 grid gap-4">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
