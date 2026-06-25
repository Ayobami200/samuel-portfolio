import Container from "@/components/ui/Container";

const services = [
    "SaaS MVP Development",
    "Full Stack Web Applications",
    "Backend API Development",
    "AI Integrations",
    "Business Automation",
    "Dashboard & Analytics Systems",
];

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-20">
            <Container>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16">

                    <div className="max-w-3xl">

                        <p className="mb-4 font-medium text-violet-400">
                            Let's Work Together
                        </p>

                        <h2 className="text-4xl font-bold md:text-6xl">
                            Building the next great
                            <span className="text-violet-400">
                                {" "}software product
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            Whether you're launching a startup, automating
                            business operations, or building an AI-powered
                            solution, I can help turn your idea into a
                            scalable product.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2">

                        {services.map((service) => (
                            <div
                                key={service}
                                className="rounded-2xl border border-white/10 p-4"
                            >
                                ✓ {service}
                            </div>
                        ))}

                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=official.sadejumo@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-violet-600 px-8 py-4 font-medium transition hover:bg-violet-500"
                        >
                            Send Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/samuel-adejumo-2b2090271/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Baj77Gmp4R8qO%2BmDAcpBqTg%3D%3D"
                            target="_blank"
                            className="rounded-xl border border-white/10 px-8 py-4 font-medium transition hover:border-violet-400"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/Ayobami200"
                            target="_blank"
                            className="rounded-xl border border-white/10 px-8 py-4 font-medium transition hover:border-violet-400"
                        >
                            GitHub
                        </a>

                    </div>

                </div>

            </Container>
        </section>
    );
}