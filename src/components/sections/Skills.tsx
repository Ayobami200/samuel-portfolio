import Container from "@/components/ui/Container";

const skillGroups = [
    {
        title: "Software Engineering",
        skills: [
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
        ],
    },
    {
        title: "AI & Data",
        skills: [
            "Machine Learning",
            "Data Analysis",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "OpenAI API",
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Supabase",
            "Firebase",
            "Vercel",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-16 md:py-32"
        >
            <Container>
                <div className="mb-16 text-center">
                    <p className="mb-4 text-violet-400 font-medium">
                        Skills
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Technologies I Work With
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                        >
                            <h3 className="mb-6 text-xl font-semibold">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 px-4 py-2 text-sm"
                                    >
                                        {skill}
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