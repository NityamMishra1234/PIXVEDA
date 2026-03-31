"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="section-padding py-20 sm:py-24">
      <div className="container-width">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="eyebrow">What We Build</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
                Strategy, storytelling, and systems designed to grow digital-first brands.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
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
              className="glass-panel rounded-[1.5rem] p-0 sm:rounded-[2rem]"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.025] sm:rounded-[2rem] sm:p-8"
              >
                <div className="flex h-full flex-col">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                        {service.shortLabel}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[rgba(59,130,246,0.14)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#93c5fd]">
                      Enterprise
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:mt-5 sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-[rgba(246,182,69,0.14)] bg-white/5 px-3 py-2 text-xs font-semibold text-white/72 sm:px-4 sm:text-sm"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5">
                    <span className="text-sm font-semibold text-[var(--foreground)]">
                      Open service page
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.08)] text-[#93c5fd] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
