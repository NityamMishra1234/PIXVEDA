"use client";

import Reveal from "@/components/animations/Reveal";

const faqs = [
  {
    question: "What makes PIXVEDA different from a typical marketing agency?",
    answer:
      "We blend premium brand thinking, revenue-focused web execution, and performance marketing into one operating system. The result is a sharper market signal and fewer disconnected vendors.",
  },
  {
    question: "Can PIXVEDA support early-stage startups as well as scaling teams?",
    answer:
      "Yes. We work best with teams that are ambitious and ready to invest in clarity, speed, and measurable growth. That can mean launching a category story or tightening a mature funnel.",
  },
  {
    question: "Do you only deliver campaigns, or also websites and conversion systems?",
    answer:
      "Both. We build the front-end experience, the supporting narrative, and the demand generation engine around it so the entire buyer journey feels coherent.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding py-20 sm:py-24">
      <div className="container-width grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#181511] sm:text-5xl">
            Questions founders usually ask before we start.
          </h2>
        </Reveal>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Reveal
              key={faq.question}
              className="glass-panel rounded-[1.75rem] p-6 sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#181511]">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[rgba(19,17,14,0.72)]">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
