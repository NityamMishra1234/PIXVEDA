import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, servicesBySlug } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug.get(slug);

  if (!service) {
    return {
      title: "Service Not Found | PIXVEDA",
    };
  }

  return {
    title: `${service.title} | PIXVEDA`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesBySlug.get(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="page-shell pb-20 pt-32 sm:pt-40">
      <section className="section-padding">
        <div className="container-width">
          <div className="rounded-[2rem] border border-[rgba(246,182,69,0.16)] bg-[rgba(6,10,17,0.92)] p-7 shadow-[0_30px_80px_rgba(2,6,23,0.42)] sm:p-10 lg:p-14">
            <div className="max-w-4xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#93c5fd]">
                {service.shortLabel}
              </p>
              <h1 className="mt-5 font-[var(--font-display)] text-4xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                {service.summary}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-deep)] to-[var(--accent)] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start This Service
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(246,182,69,0.16)] bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors duration-300 hover:bg-white/8"
              >
                View All Services
              </Link>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                  Core Deliverables
                </p>
                <div className="mt-5 grid gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div
                      key={deliverable}
                      className="rounded-[1.2rem] border border-white/8 bg-[rgba(255,255,255,0.02)] p-4"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                        {deliverable}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[rgba(59,130,246,0.16)] bg-[linear-gradient(180deg,rgba(15,24,40,0.95),rgba(8,13,20,0.98))] p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                  What It Unlocks
                </p>
                <div className="mt-5 grid gap-4">
                  {service.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-4"
                    >
                      <p className="text-base leading-7 text-white/78">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="glass-panel rounded-[1.6rem] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                  {item.shortLabel}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
