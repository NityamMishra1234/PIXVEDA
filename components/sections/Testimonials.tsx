"use client";

import Reveal from "@/components/animations/Reveal";

const testimonials = [
  {
    quote:
      "PIXVEDA gave us more than campaigns. They gave us a market presence that finally matched the ambition of the company.",
    name: "Aarav Menon",
    role: "Founder, NovaStack",
  },
  {
    quote:
      "The difference was obvious in two weeks. Better creative, better pages, better conversations with buyers, and far more confidence in the funnel.",
    name: "Sana Kapoor",
    role: "Growth Lead, OrbitPath",
  },
  {
    quote:
      "They operate like a strategic partner, not a vendor. Every piece of work feels aligned to revenue and brand quality at the same time.",
    name: "Ritika Shah",
    role: "CMO, Lattice Forge",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding py-20 sm:py-24">
      <div className="container-width">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">What Partners Feel</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#181511] sm:text-5xl">
              Trusted by teams that need marketing to feel premium and perform seriously.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal
              key={item.name}
              className="glass-panel rounded-[2rem] p-7 sm:p-8"
            >
              <p className="text-base leading-8 text-[rgba(19,17,14,0.78)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-[rgba(19,17,14,0.08)] pt-5">
                <p className="text-lg font-semibold tracking-[-0.03em] text-[#181511]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[rgba(19,17,14,0.62)]">
                  {item.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
