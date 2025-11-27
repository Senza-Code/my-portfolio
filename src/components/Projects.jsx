import React from "react";

const projects = [
  {
    emoji: "✨",
    title: "T’Cha: We’re Kinda Forever",
    tagline: "A spark for kids who learn differently and dream boldly.",
    note:
      "T’Cha is a learning journal that celebrates curiosity and belonging. It helps children explore what excites them and reminds us that design can be gentle and joyful.",
    quote: "“Built for the kid I was—and the millions still waiting to be seen.”",
  },
  {
    emoji: "😈",
    title: "Legally Bad: A UX Experiment",
    tagline: "When design misbehaves, it teaches better than any lecture.",
    note:
      "Created in two hours for a design challenge, Legally Bad breaks UX rules to show how interface choices shape trust and frustration. A playful critique of bad design done on purpose.",
    quote: "“Winner of Best Pitch—chaos with intent.”",
  },
  {
    emoji: "🦁",
    title: "LionLink: Building Community",
    tagline: "Because connection is the best design system.",
    note:
      "LionLink helps students find mentorship and collaboration through simple, trust-based matching. It reimagines access and belonging in digital spaces.",
    quote: "“A tribute to the networks that raised us.”",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-50 text-zinc-900">
      <h2 className="text-4xl font-semibold mb-12 text-center tracking-tight">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl shadow-sm border border-zinc-200 hover:shadow-lg transition-all duration-500 overflow-hidden"
          >
            <div className="p-6 text-center">
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-600">{p.tagline}</p>
            </div>

            <div className="absolute inset-0 bg-zinc-900/90 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
              <p className="text-sm leading-relaxed italic mb-4">{p.note}</p>
              <p className="text-xs text-zinc-400">{p.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
