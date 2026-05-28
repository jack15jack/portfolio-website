"use client"

export default function Page() {
    const projects = [
        {
            title: "RFSoC Digital System AXI Test Environment and RTL Conversion",
            description:
                "I am currently created a test environment for an RFSoC Digital System and a lightweight way to test the AXI4 protocols used in the system. I am also working to convert existing digital design from block diagram to RTL, allowing for better verification.",
            tech: ["Verilog", "SystemVerilog", "AXI4", "Vivado", "Verification", "Simulation"],
        },
        {
            title: "Digital Twin Stair Ascent Gait Analysis",
            description: 
                "As the leader of a 5 person team, I am designing sensor fusion system combining motion tracking and IMU data to analyze human gait biomechanics. I developed real-time visualization system in Unreal Engine for digital twin representation. I also implemented AI data processing pipeline to evaluate gait health metrics.",
            tech: ["Python", "Unreal Engine", "C++", "Sensors", "IMU", "AI/ML"],
        },
        {
            title: "Delta Engine API",
            description: 
                "I am currently developing an API that will ingest live market data, generate trading signals, simulate trade execution, track PnL, exposure, and risk, evaluate strategy performance, then backtest strategies on historical data.",
            tech: ["Python", "Docker", "Kubernetes", "PostgreSQL"],
        },
        {
            title: "RC FPV Submarine",
            description: 
                "I designed and built a remote-controlled submarine with real-time video and telemetry transmission. I also implemented object detection to identify obstructions.",
            tech: ["Arduino", "C++", "Python", "AI/ML"],
        },
        {
            title: "sUAS-based Radar Antenna Gimbal System",
            description:
                "I developed an embedded control system for antenna gimbal actuation and precise position control. I also designed 3D printed parts to protect antenna commponents.",
            tech: ["Arduino", "C++", "AutoCad", "Soldering", "MATLAB", "KiCad", "PCB Design"],
        },
        {
            title: "Backend API Modernization",
            description: 
                "I refactored a legacy VB backend into modern C# REST APIs. During this digital transformation, I migrated SQL queries to point to Azure Cloud Database.",
            tech: ["C#", "SQL", ".NET", "Git", "REST API", "Azure"],
        },
        {
            title: "Mass Email Sender",
            description: 
                "I developed a python-based application tool for bulk email delivery to multiple recipients.",
            tech: ["Python"],
        },
        {
            title: "Stardemon - RPG Video Game",
            description: 
                "I designed and developed a full-featured game with custom characters, combat systems, and progression mechanics.",
            tech: ["Unity", "C#"],
        },
    ];

    const skills = {
        Languages: [
            "C", 
            "C++", 
            "C#", 
            "Python", 
            "SystemVerilog", 
            "Verilog", 
            "VHDL", 
            "MATLAB", 
            "SQL", 
            "Java", 
            "JavaScript"
        ],
        Hardware: [
            "FPGA Design", 
            "AXI4", 
            "RTL Design", 
            "Verification", 
            "Embedded Systems", 
            "I2C",
            "SPI",
            "UART",
            "Arduino", 
            "STM32", 
            "Oscilloscope", 
            "Multimeter", 
            "Sensors",
        ],
        Tools:["Vivado", "Git", ".NET", "Unreal Engine", "Unity", "Azure", "Visual Studio", "LTSpice", "PSpice", "Quartus"],
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-400 selection:text-black">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 text-center">
            <div>
                <h1 className="text-xl font-bold tracking-wide">Jack Wilson</h1>
                <p className="text-sm text-zinc-400">
                Computer Engineer
                </p>
            </div>
            </div>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 lg:flex-row lg:items-center lg:justify-center text-center lg:text-left">
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
              FPGA Design and Verification • Embedded Systems • AI + Sensor Fusion • Backend Systems
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Building Reliable
              <span className="block text-cyan-400">
                Hardware & Software Systems
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              I design and build systems across the hardware-software stack,
              spanning FPGA and RTL design, embedded systems, simulation
              environments, and backend infrastructure. My focus is on
              creating reliable, testable, and performance-driven systems where
              hardware and software are tightly integrated and verifiable.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="https://github.com/jack15jack"
                target="_blank"
                className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jackwilson15751/"
                target="_blank"
                className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* TERMINAL CARD */}
          <div className="mt-16 w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl lg:mt-0 lg:ml-10 lg:-translate-y-6 lg:translate-x-6">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4 p-6 font-mono text-sm text-zinc-300">
              <p>
                <span className="text-cyan-400">$</span> initialize_engineer
              </p>
              <p className="text-zinc-500">
                Loading computer engineering environment...
              </p>

              <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
                <p className="text-green-400">✔ FPGA Development</p>
                <p className="text-green-400">✔ Embedded Systems</p>
                <p className="text-green-400">✔ Control Systems</p>
                <p className="text-green-400">✔ C/C++ Development</p>
                <p className="text-green-400">✔ Backend Software</p>
              </div>

              <p>
                <span className="text-cyan-400">$</span> status
              </p>
              <p className="text-cyan-300">
                Ready for engineering opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>
          <h2 className="mb-4 text-4xl font-black md:text-5xl">
            Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            FPGA verification, embedded systems, and software engineering projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/50 text-left"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                  Project {index + 1}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-500 transition group-hover:text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

              <p className="mb-6 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-xl border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-zinc-800 bg-zinc-900/40 text-center"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Technical Stack
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 justify-center">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-left"
              >
                <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl bg-zinc-800 px-4 py-2 text-sm text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mb-8 text-4xl font-black md:text-5xl">
              Engineering Focused
              <span className="block text-cyan-400">
                Problem Solving
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                My work focuses less on isolated projects and more on building
                integrated engineering systems across multiple domains.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-left">
            <div className="space-y-6">
              <p className="mb-2 text-sm uppercase tracking-wide text-cyan-400">
                Current Interests
              </p>
              <div className="flex flex-wrap gap-3">
                {["FPGA", "Embedded", "Backend Software", "Simulation"].map((item) => (
                  <span key={item} className="rounded-xl border border-zinc-700 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 font-mono text-sm">
                <p className="text-green-400">[PASS] AXI Transactions Verified</p>
                <p className="text-green-400">[PASS] System Simulation Complete</p>
                <p className="text-cyan-400">System Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-800 bg-zinc-900/40 text-center">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-4xl font-black md:text-6xl">Let’s Build Something Great</h2>
          <p className="mt-6 text-zinc-400">Open to FPGA, embedded, and backend software roles.</p>

          <div className="mt-8 flex justify-center gap-4">
            <a className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black" href="mailto:jackwilson15751@gmail.com">Email</a>
            <a className="rounded-2xl border border-zinc-700 px-6 py-3" href="https://github.com/jack15jack">GitHub</a>
            <a className="rounded-2xl border border-zinc-700 px-6 py-3" href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Jack Wilson • Built with Next.js & Tailwind CSS
      </footer>
    </div>
    );
}