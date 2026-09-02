"use client";

import { type FormEvent, useState } from "react";
import Reveal from "@/components/animations/Reveal";
import Navbar from "@/components/layout/Navbar";

const directContacts = [
    {
        label: "Email",
        value: "pixveda1@gmail.com",
        href: "mailto:pixveda1@gmail.com",
        tone: "text-[var(--brand)]",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 7.5 12 13l8-5.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="3" />
            </svg>
        ),
    },
    {
        label: "Phone",
        value: "+91 9115161704",
        href: "tel:+919115161704",
        tone: "text-[#93c5fd]",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path
                    d="M5 4.75h3.25l1.35 4.12-2.02 1.61a14.4 14.4 0 0 0 5.94 5.94l1.61-2.02L19.25 15V18.25A1.75 1.75 0 0 1 17.5 20 14.5 14.5 0 0 1 3.99 6.5 1.75 1.75 0 0 1 5.75 4.75H5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        value: "Chat instantly",
        href: "https://wa.me/919115161704",
        tone: "text-[#60d669]",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path
                    d="M12 20a8 8 0 1 0-4.15-1.16L4 20l1.28-3.67A8 8 0 0 0 12 20Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.55 9.8c.2-.45.41-.46.6-.47h.5c.15 0 .4.06.61.52.2.46.68 1.6.74 1.72.06.12.1.27.02.44-.08.17-.12.27-.24.41-.12.14-.24.31-.34.42-.12.13-.24.27-.1.53.14.26.64 1.05 1.36 1.7.93.83 1.7 1.1 1.95 1.22.24.12.39.1.53-.06.14-.16.59-.68.75-.91.16-.23.32-.19.54-.12.23.08 1.44.68 1.69.8.25.13.41.19.47.3.06.1.06.61-.14 1.2-.2.59-1.16 1.15-1.6 1.2-.41.04-.93.07-1.5-.12-.34-.12-.77-.25-1.34-.49-2.36-.99-3.89-3.42-4-3.58-.1-.15-.95-1.26-.95-2.4 0-1.13.6-1.7.8-1.94Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "#",
        helper: "Add your Instagram URL",
    },
    {
        label: "LinkedIn",
        href: "#",
        helper: "Add your LinkedIn URL",
    },
];

const serviceOptions = [
    "Growth Strategy",
    "Performance Marketing",
    "SEO & Content",
    "Web Development",
    "CRO & Landing Pages",
    "Marketing Automation",
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: serviceOptions[0],
        message: "",
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = `PIXVEDA Inquiry - ${form.service}`;
        const body = [
            "Hi PIXVEDA Team,",
            "",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Company: ${form.company || "-"}`,
            `Service Needed: ${form.service}`,
            "",
            "Project Details:",
            form.message || "-",
            "",
            "Thanks",
        ].join("\n");

        window.location.href = `mailto:nityam1111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <Navbar />
            <section id="contact" className="section-padding py-16 pb-24 sm:py-24 sm:pb-28">
                <div className="container-width mx-auto max-w-7xl">
                    <Reveal className="relative overflow-hidden rounded-[2rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(7,11,18,0.96)] p-5 text-[#f8f1e6] shadow-[0_40px_100px_rgba(2,6,23,0.44)] sm:rounded-[2.5rem] sm:p-12 lg:p-16">
                        <div className="pointer-events-none absolute -right-[20%] -top-[20%] h-[600px] w-[600px] rounded-full bg-[#f6b645]/8 blur-[120px]" />
                        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#2563eb]/10 blur-[100px]" />

                        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                            <div className="flex flex-col">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                    <span className="h-2 w-2 rounded-full bg-[#f6b645]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f8f1e6]">
                                        Contact PIXVEDA
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-2xl font-[var(--font-display)] text-3xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                                    Direct contact. Clear details. Fast next step.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                                    Use the form for project inquiries or reach out instantly by email, call, or WhatsApp.
                                </p>

                                <div className="mt-8 grid gap-3">
                                    {directContacts.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target={item.label === "WhatsApp" ? "_blank" : undefined}
                                            rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                                            className="group flex items-center justify-between rounded-[1.3rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(246,182,69,0.18)] hover:bg-[rgba(255,255,255,0.05)]"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-[rgba(255,255,255,0.03)] ${item.tone}`}>
                                                    <span className="h-5 w-5">{item.icon}</span>
                                                </span>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                                                        {item.label}
                                                    </p>
                                                    <p className="mt-1 text-base font-medium text-[var(--foreground)]">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-1">
                                                {"->"}
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                                            Social Links
                                        </p>
                                        <p className="text-[10px] uppercase tracking-[0.16em] text-white/38">
                                            Add real URLs anytime
                                        </p>
                                    </div>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {socialLinks.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="rounded-[1.1rem] border border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-4 transition-colors duration-300 hover:border-[rgba(59,130,246,0.18)] hover:bg-[rgba(59,130,246,0.06)]"
                                            >
                                                <p className="text-sm font-semibold text-[var(--foreground)]">{item.label}</p>
                                                <p className="mt-1 text-xs leading-5 text-white/52">{item.helper}</p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[1.7rem] border border-white/8 bg-[rgba(4,8,14,0.78)] p-5 shadow-[0_24px_60px_rgba(2,6,23,0.3)] sm:p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                                            Inquiry Form
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                                            Tell us what you need.
                                        </h3>
                                    </div>
                                    <div className="hidden rounded-full border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#93c5fd] sm:block">
                                        Email Ready
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <label className="grid gap-2">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                                                Name
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                                                className="h-13 rounded-[1rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/28 focus:border-[rgba(246,182,69,0.22)]"
                                                placeholder="Your name"
                                            />
                                        </label>

                                        <label className="grid gap-2">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                                                Email
                                            </span>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                                                className="h-13 rounded-[1rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/28 focus:border-[rgba(246,182,69,0.22)]"
                                                placeholder="you@company.com"
                                            />
                                        </label>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
                                        <label className="grid gap-2">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                                                Company
                                            </span>
                                            <input
                                                type="text"
                                                value={form.company}
                                                onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                                                className="h-13 rounded-[1rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/28 focus:border-[rgba(246,182,69,0.22)]"
                                                placeholder="Company name"
                                            />
                                        </label>

                                        <label className="grid gap-2">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                                                Service
                                            </span>
                                            <select
                                                value={form.service}
                                                onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                                                className="h-13 rounded-[1rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[rgba(246,182,69,0.22)]"
                                            >
                                                {serviceOptions.map((option) => (
                                                    <option key={option} value={option} className="bg-[#0b1119]">
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>

                                    <label className="grid gap-2">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                                            Project Brief
                                        </span>
                                        <textarea
                                            required
                                            rows={6}
                                            value={form.message}
                                            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                                            className="rounded-[1rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-7 text-[var(--foreground)] outline-none transition-colors placeholder:text-white/28 focus:border-[rgba(246,182,69,0.22)]"
                                            placeholder="Tell us about the brand, the goal, and what you want PIXVEDA to build."
                                        />
                                    </label>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-xs leading-6 text-white/45">
                                            Submitting opens your email app with all details filled in.
                                        </p>
                                        <button
                                            type="submit"
                                            className="inline-flex h-13 items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-deep)] to-[var(--accent)] px-8 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-[0_12px_36px_rgba(37,99,235,0.32)]"
                                        >
                                            Send Inquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
