"use client";

import Reveal from "@/components/animations/Reveal";

const services = [
  {
    title: "Performance Marketing",
    description:
      "Campaign systems across Meta, Google, LinkedIn, and emerging channels built for scalable CAC efficiency.",
    points: ["Media buying", "Creative iteration", "Attribution clarity"],
  },
  {
    title: "Brand & Content Strategy",
    description:
      "Messaging frameworks and content engines that help startups sound category-leading instead of interchangeable.",
    points: ["Brand narrative", "SEO content", "Thought leadership"],
  },
  {
    title: "Revenue-Focused Websites",
    description:
      "Premium web design and landing page architecture tuned for conversions, clarity, and trust at enterprise level.",
    points: ["CRO UX", "Fast frontends", "Offer clarity"],
  },
  {
    title: "Marketing Automation",
    description:
      "Lifecycle systems that connect leads, nurture sequences, CRM workflows, and retention campaigns into one machine.",
    points: ["Email flows", "Lead scoring", "CRM sync"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding py-20 sm:py-24">
      <div className="container-width">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">What We Build</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#181511] sm:text-5xl">
                Strategy, storytelling, and systems designed to grow digital-first brands.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[rgba(19,17,14,0.72)] sm:text-base sm:leading-8">
              PIXVEDA combines the sharpness of a growth team, the eye of a
              premium creative studio, and the discipline of a performance
              partner. Every engagement is built to make momentum visible.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <Reveal
              key={service.title}
              className="glass-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#181511] sm:text-2xl">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-[rgba(217,95,39,0.12)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8a2f14]">
                    Enterprise
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[rgba(19,17,14,0.72)] sm:mt-5 sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[rgba(19,17,14,0.08)] bg-white/70 px-3 py-2 text-xs font-semibold text-[rgba(19,17,14,0.72)] sm:px-4 sm:text-sm"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
