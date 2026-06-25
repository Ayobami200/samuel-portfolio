import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-[70%] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <Container>
        <div className="grid min-h-[90vh] items-center gap-8 lg:grid-cols-[1fr_1fr]">

          {/* LEFT SIDE */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
              <span className="text-sm font-medium text-violet-300">
                ✨ Full Stack Developer & AI Product Builder
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
              Building{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-200 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              Software for
              <br />
              Modern Businesses
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              I design and develop scalable web applications,
              AI-powered products, and business software that help
              organizations automate workflows, streamline
              operations, and unlock growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-violet-600 px-8 py-4 font-medium transition hover:bg-violet-500"
              >
                View Projects
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-12">
              <div>
                <h3 className="text-3xl font-bold">
                  Full Stack
                </h3>

                <p className="mt-2 text-slate-400">
                  Web Development
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  AI
                </h3>

                <p className="mt-2 text-slate-400">
                  Product Builder
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Data
                </h3>

                <p className="mt-2 text-slate-400">
                  Science Background
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">

            {/* Portrait Glow */}
            <div className="absolute h-[650px] w-[650px] rounded-full bg-violet-500/10 blur-3xl" />

            {/* Image Container */}
            <div className="relative h-[850px] w-full max-w-[650px]">

              <Image
                src="/images/samuel-hero.png"
                alt="Samuel Adejumo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-top"
              />
              {/* Floating Skill Tags */}

              <div className="absolute left-0 top-24 rounded-xl border border-white/10 bg-[#0d1224]/90 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  FastAPI
                </span>
              </div>

              <div className="absolute right-0 top-40 rounded-xl border border-white/10 bg-[#0d1224]/90 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  Next.js
                </span>
              </div>

              <div className="absolute bottom-44 left-0 rounded-xl border border-white/10 bg-[#0d1224]/90 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  AI Integration
                </span>
              </div>

              <div className="absolute bottom-24 right-8 rounded-xl border border-white/10 bg-[#0d1224]/90 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  PostgreSQL
                </span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}