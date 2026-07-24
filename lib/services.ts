export type Service = {
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  summary: string;
  points: string[];
  deliverables: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortLabel: "Paid Media",
    description:
      "Campaign systems across Meta, Google, LinkedIn, and emerging channels built for scalable CAC efficiency.",
    summary:
      "We build paid acquisition systems that turn media spend into qualified pipeline with better message-market fit, cleaner attribution, and creative that keeps compounding.",
    points: ["Meta & Google ads", "Creative iteration", "Attribution clarity"],
    deliverables: [
      "Channel strategy and budget architecture",
      "Paid social and search campaign builds",
      "Creative testing roadmap and reporting cadences",
    ],
    outcomes: [
      "Lower wasted spend across key channels",
      "Stronger cost-per-lead and cost-per-SQL efficiency",
      "More predictable growth forecasting",
    ],
  },
  {
    slug: "seo-content-systems",
    title: "SEO & Content Systems",
    shortLabel: "SEO",
    description:
      "Search-led content ecosystems that increase discoverability, authority, and inbound demand over time.",
    summary:
      "We create SEO systems that help ambitious brands rank for intent-rich searches, publish with consistency, and turn organic visibility into serious demand.",
    points: ["Search strategy", "Topic clusters", "Content workflows"],
    deliverables: [
      "Keyword and search-intent mapping",
      "Topic cluster planning with editorial direction",
      "On-page SEO recommendations and content ops systems",
    ],
    outcomes: [
      "Higher organic visibility for commercial terms",
      "Better inbound traffic quality",
      "A content engine the team can scale confidently",
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    shortLabel: "Video",
    description:
      "High-conviction video editing for reels, ads, YouTube content, and branded stories that keep viewers watching.",
    summary:
      "We turn raw footage into polished, high-retention videos with sharp pacing, motion graphics, captions, and color that feel premium on every platform.",
    points: ["Reels & Shorts", "YouTube editing", "Motion graphics"],
    deliverables: [
      "Story-first edit structure and pacing",
      "Color grading, sound design, and captions",
      "Platform-ready exports for social and web",
    ],
    outcomes: [
      "Higher completion rates and watch time",
      "Sharper brand presentation across video channels",
      "Faster content publishing without sacrificing quality",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortLabel: "Web Dev",
    description:
      "Premium websites and landing pages built to look enterprise-level, load fast, and convert decisively.",
    summary:
      "We design and develop high-conviction web experiences that make a brand feel premium from the first scroll while keeping performance, responsiveness, and conversion in focus.",
    points: ["Premium UI systems", "Fast frontends", "Responsive builds"],
    deliverables: [
      "Conversion-focused site architecture",
      "High-performance frontend implementation",
      "Component systems for growth pages and launches",
    ],
    outcomes: [
      "Stronger first-impression trust",
      "Better conversion rates across core pages",
      "A site that supports enterprise positioning",
    ],
  },
  {
    slug: "brand-content-strategy",
    title: "Brand & Content Strategy",
    shortLabel: "Brand",
    description:
      "Messaging frameworks and content engines that help startups sound category-leading instead of interchangeable.",
    summary:
      "We sharpen the narrative, offer language, and content direction so every touchpoint sounds like the same confident company instead of disconnected marketing tactics.",
    points: ["Brand narrative", "Offer clarity", "Thought leadership"],
    deliverables: [
      "Positioning and messaging frameworks",
      "Offer refinement for sales and campaign alignment",
      "Content pillars for organic, paid, and owned channels",
    ],
    outcomes: [
      "A clearer, stronger market message",
      "Higher trust in buyer conversations",
      "Better consistency across campaigns and website copy",
    ],
  },
  {
    slug: "Graphic-design",
    title: "Designs that make your brand",
    shortLabel: "Graphics",
    description:
      "Sharper page structures, testing plans, and conversion UX designed to move more visitors into qualified action.",
    summary:
      "We optimize the high-intent parts of your funnel so landing pages, offers, and page flows reduce hesitation and create more sales-ready conversions.",
    points: ["Landing page UX", "Offer testing", "Conversion flows"],
    deliverables: [
      "Landing page strategy and wireframing",
      "Conversion friction audits and testing hypotheses",
      "Offer structure recommendations and CTA hierarchy",
    ],
    outcomes: [
      "Higher visitor-to-lead conversion rates",
      "Clearer page journeys for buyers",
      "Faster learning loops from structured testing",
    ],
  },
];

export const servicesBySlug = new Map(services.map((service) => [service.slug, service]));
