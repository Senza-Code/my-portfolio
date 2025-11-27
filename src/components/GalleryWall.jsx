import React from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    code: "ACC-001",
    title: "T’Cha: We’re Kinda Forever ✨",
    summary:
      "A learning discovery platform for children often overlooked by traditional systems. Started as a printable journal; now expanding to a gentle digital tool.",
    role: "Creator, Research & Design",
    year: "2025",
    link: "https://github.com/Senza-Code/tcha",
    tone: "bg-amber-50",
  },
  {
    code: "ACC-002",
    title: "Legally Bad 😈",
    summary:
      "A cheeky interface built in two hours that intentionally breaks UX rules (dodging buttons, weird cursor). Winner of ‘Best Pitch’.",
    role: "Co-creator, Concept & Frontend",
    year: "2025",
    link: "https://senza-code.github.io/legally-bad/",
    tone: "bg-rose-50",
  },
  {
    code: "ACC-003",
    title: "LionLink 🦁",
    summary:
      "An early concept for a peer-connection tool helping Columbia students find and connect with others at their pace and shared course interests.",
    role: "Research Lead, UI Design",
    year: "2025",
    link: "/lionlink",
    tone: "bg-indigo-50",
  },
];

function Placard({ item }) {
  return (
    <a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`group block rounded-2xl border border-slate-200 hover:shadow-md transition-shadow ${item.tone}`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>{item.code}</span>
          <span>{item.year}</span>
        </div>
        <h3 className="text-xl md:text-2xl mt-2 text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.summary}</p>
        <div className="mt-3 text-xs text-slate-600">{item.role}</div>
        <div className="mt-4 inline-flex items-center text-sm text-indigo-700">
          View Exhibit →
        </div>
      </div>
    </a>
  );
}

export default function GalleryWall() {
  const navigate = useNavigate();
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl md:text-4xl text-slate-900">Collections</h2>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Exhibits 001–003</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Placard key={it.code} item={it} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
