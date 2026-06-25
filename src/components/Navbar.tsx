import Container from "@/components/ui/Container";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <a href="#" className="group">
            <h1 className="text-3xl font-black tracking-tight">
              Samuel
              <span className="text-violet-400 transition-colors duration-300 group-hover:text-violet-300">
                .
              </span>
            </h1>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  group
                  relative
                  text-sm
                  font-medium
                  tracking-wide
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    bg-violet-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <a
              href="#contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-purple-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-violet-500/30
              "
            >
              Hire Me
            </a>

          </div>
        </div>
      </Container>
    </nav>
  );
}