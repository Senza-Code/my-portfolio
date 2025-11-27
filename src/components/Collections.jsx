const items = [
  {
    code: "ACC-001",
    title: "T’Cha: We’re Kinda Forever",
    summary:
      "Began as a printable journal; now expanding to a gentle digital tool. After d.school, it may become an EdTech Startup.",
    role: "Creator — Research & Design",
    year: "2025",
    link: "https://github.com/Senza-Code/tcha",
    tone: "bg-emerald-50",
  },
  {
    code: "ACC-002",
    title: "Legally Bad",
    summary:
      "A parody interface built in two hours that intentionally breaks UX rules (inverted cursor, dodging buttons). Winner of ‘Best Pitch’.",
    role: "Co-creator — Concept & Frontend",
    year: "2025",
    link: "https://github.com/Senza-Code/legally-bad",
    tone: "bg-amber-50",
  },
  {
    code: "ACC-003",
    title: "LionLink",
    summary:
      "A low-pressure peer connection concept for Columbia students. Focus: trust signals, matching by course/pace.",
    role: "Research Lead — UI Design",
    year: "2025",
    link: "https://github.com/Senza-Code/lionlink",
    tone: "bg-stone-50",
  },
];

function Placard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl clay-card ${item.tone}`}
      title="Open project"
    >
      <div className="p-5">
        <div className="flex items-center justify-between text-[11px] text-stone-500">
          <span>{item.code}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="h-crafted text-xl md:text-2xl mt-2 text-stone-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          {item.summary}
        </p>
        <div className="mt-3 text-xs text-stone-600">{item.role}</div>
        <div className="mt-4 inline-flex items-center text-sm text-emerald-800">
          View Exhibit
          <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </a>
  );
}

export default function Collections() {
  return (
    <section id="collections" className="relative z-10 py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Placard key={it.code} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
