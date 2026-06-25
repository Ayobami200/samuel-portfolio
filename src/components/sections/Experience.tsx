import Container from "@/components/ui/Container";

const experiences = [
    {
        company: "Elephant Group Plc",
        role: "NYSC Intern - Data & Analytics",
        period: "December 2025 - Present",
        description:
            "Support supply chain and business operations through Microsoft Dynamics NAV, delivery order processing, invoice preparation, and operational workflow management.",
        highlights: [
            "Microsoft Dynamics NAV",
            "Delivery Operations",
            "Invoice Processing",
            "Business Workflows",
        ],
    },
    {
        company: "Sharp Courier Limited",
        role: "Quality Control Analyst",
        period: "September 2025 - December 2025",
        description:
            "Monitored logistics operations, ensured service quality standards, analyzed delivery performance, and contributed to operational process improvements.",
        highlights: [
            "Quality Assurance",
            "Logistics Operations",
            "Performance Monitoring",
            "Process Improvement",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32">
            <Container>
                <div className="mb-16">
                    <p className="mb-4 text-violet-400 font-medium">
                        Experience
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Professional Journey
                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-400">
                        Combining software engineering, data-driven thinking,
                        and real-world operational experience.
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.company}
                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {experience.company}
                                    </h3>

                                    <p className="mt-2 text-violet-400">
                                        {experience.role}
                                    </p>
                                </div>

                                <span className="text-slate-400">
                                    {experience.period}
                                </span>
                            </div>

                            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                                {experience.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {experience.highlights.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 px-4 py-2 text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}