import Container from "@/components/ui/Container";

export default function About() {
    return (
        <section
            id="about"
            className="py-16 md:py-32"
        >
            <Container>
                <div className="grid gap-16 lg:grid-cols-2">

                    <div>
                        <p className="mb-4 text-violet-400 font-medium">
                            About Me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Turning ideas into scalable software products.
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-slate-400">
                            I'm Samuel Adejumo, a Full Stack Developer and AI
                            Product Builder with a background in Mathematics
                            & Computer Science.

                            My journey began with data science and analytics,
                            where I developed a strong foundation in problem
                            solving and data-driven thinking.

                            Today, I design and build web applications,
                            backend systems, AI-powered tools, and business
                            software that help organizations improve
                            efficiency, automate workflows, and scale their
                            operations.

                            Beyond development, I'm actively building startup
                            products and exploring the future of AI-driven
                            business solutions.
                        </p>
                    </div>

                </div>
            </Container>
        </section>
    );
}