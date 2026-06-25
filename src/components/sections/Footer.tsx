import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

                    <div>
                        <h3 className="text-xl font-bold">
                            Samuel<span className="text-violet-400">.</span>
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Building scalable software, AI-powered products,
                            and business systems.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-400">

                        <a
                            href="https://github.com/Ayobami200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-violet-400"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/samuel-adejumo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-violet-400"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:[official.sadejumo@gmail.com]"
                            className="transition hover:text-violet-400"
                        >
                            Email
                        </a>

                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Samuel Adejumo. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}