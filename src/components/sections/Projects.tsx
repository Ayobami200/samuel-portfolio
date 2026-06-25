"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const screenshots = [
    "/images/projects/realmile/overview.png",
    "/images/projects/realmile/parcels.png",
    "/images/projects/realmile/riders.png",
    "/images/projects/realmile/partners.png",
];

const otherProjects = [
    {
        title: "Smart Expense Tracker",
        description:
            "A full-stack personal finance application featuring budgeting, expense tracking, analytics dashboards, transaction management, and financial insights.",
        tech: ["FastAPI", "PostgreSQL", "React", "Python"],
    },
    {
        title: "Logistics Analytics Dashboard",
        description:
            "Operational reporting and analytics dashboards designed to provide visibility into logistics performance, delivery operations, and business insights.",
        tech: ["Python", "Pandas", "Power BI", "Analytics"],
    },
];

export default function Projects() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % screenshots.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="py-16 md:py-32">
            <Container>
                <div className="mb-16">
                    <p className="mb-4 font-medium text-violet-400">
                        Featured Work
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Projects & Case Studies
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-400">
                        A selection of software products, business systems,
                        and intelligent applications I have designed and built.
                    </p>
                </div>

                {/* Featured Project */}

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

                    {/* Screenshot Slider */}

                    <div className="relative overflow-hidden bg-black/20">

                        <div className="relative aspect-[16/9] w-full">

                            {screenshots.map((image, index) => (
                                <Image
                                    key={image}
                                    src={image}
                                    alt={`RealMile Screenshot ${index + 1}`}
                                    fill
                                    sizes="100vw"
                                    className={`absolute object-contain transition-all duration-1000 ease-in-out ${index === currentImage
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-8 opacity-0"
                                        }`}
                                />
                            ))}

                        </div>

                        {/* Navigation Dots */}

                        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
                            {screenshots.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${index === currentImage
                                        ? "bg-violet-400"
                                        : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Content */}

                    <div className="p-10 md:p-14">

                        <div className="mb-6 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                            <span className="text-sm text-violet-300">
                                Logistics Management Platform
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold md:text-4xl">
                            RealMile Logistics Platform
                        </h3>

                        <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                            Designed and developed a centralized logistics
                            management platform that streamlines parcel
                            operations, rider coordination, partner management,
                            delivery tracking, and operational oversight.
                        </p>

                        <div className="mt-10 grid gap-8 md:grid-cols-2">

                            <div>
                                <h4 className="mb-3 text-xl font-semibold">
                                    Challenge
                                </h4>

                                <p className="text-slate-400">
                                    Logistics operations suffered from fragmented
                                    workflows, manual tracking processes, and
                                    limited visibility across deliveries and rider
                                    performance.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-3 text-xl font-semibold">
                                    Solution
                                </h4>

                                <p className="text-slate-400">
                                    Built a centralized platform that provides
                                    real-time visibility into operations while
                                    enabling efficient parcel management,
                                    coordination, and reporting.
                                </p>
                            </div>

                        </div>

                        <div className="mt-12">
                            <h4 className="mb-5 text-xl font-semibold">
                                Key Features
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {[
                                    "Parcel Tracking",
                                    "Admin Dashboard",
                                    "Partner Management",
                                    "Rider Coordination",
                                    "Operational Analytics",
                                    "Role-Based Access",
                                    "Search & Filtering",
                                    "Delivery Monitoring",
                                ].map((feature) => (
                                    <span
                                        key={feature}
                                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                                    >
                                        {feature}
                                    </span>
                                ))}

                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="mb-5 text-xl font-semibold">
                                Tech Stack
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                {[
                                    "Next.js",
                                    "FastAPI",
                                    "PostgreSQL",
                                    "TypeScript",
                                    "Tailwind CSS",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>

                {/* Other Projects */}

                <div className="mt-20">
                    <h3 className="mb-8 text-3xl font-bold">
                        Other Projects
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">

                        {otherProjects.map((project) => (
                            <div
                                key={project.title}
                                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-500/30
                  hover:bg-white/[0.05]
                "
                            >
                                <h4 className="mb-4 text-2xl font-semibold">
                                    {project.title}
                                </h4>

                                <p className="mb-6 leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </Container>
        </section>
    );
}