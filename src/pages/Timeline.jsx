import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const [expanded, setExpanded] = useState(null);
  const scroller = useRef(null);

  const items = [
    {
      year: "2010",
      title: "High School Graduate — South Africa",
      text: "Cared for my terminally ill grandmother. Learned empathy, patience, and the weight of timing.",
      image: "/images/timeline/2010.jpg",
      gradient: "from-rose-100 via-pink-50 to-amber-50",
    },
    {
      year: "2011",
      title: "Cashier — Makro Wholesale Store (Cape Town)",
      text: "After my grandmother’s passing, I supported myself. Long lines taught me rhythm and grace under pressure.",
      image: "",
      gradient: "from-amber-100 via-yellow-50 to-lime-100",
    },
    {
      year: "2012–2013",
      title: "Somatology — Cape Peninsula University of Technology",
      text: "Studied anatomy and wellness—my first formal study of systems and care.",
      image: "",
      gradient: "from-lime-100 via-emerald-50 to-green-100",
    },
    {
      year: "2014",
      title: "Medical Receptionist — Dr. Khan’s Office (Hout Bay)",
      text: "Balanced empathy with efficiency in a small medical practice.",
      image: "",
      gradient: "from-emerald-100 via-teal-50 to-cyan-50",
    },
    {
      year: "2015",
      title: "Substitute Teacher & Facilitator — Imizamo Yethu, Hout Bay",
      text: "Led youth workshops emphasizing collaboration and curiosity.",
      image: "",
      gradient: "from-sky-100 via-blue-50 to-indigo-50",
    },
    {
      year: "2016",
      title: "Administrative Assistant — Theatre on the Bay, Cape Town",
      text: "Discovered how timing, design, and emotion shape every experience worth remembering.",
      image: "",
      gradient: "from-cyan-100 via-teal-50 to-emerald-50",
    },
    {
      year: "2017",
      title: "Store Manager — This Shop Rox, Cape Town",
      text: "Managed staff and curated art for tourists; bridged commerce and storytelling.",
      image: "",
      gradient: "from-teal-100 via-green-50 to-lime-50",
    },
    {
      year: "2018–2020",
      title: "Au Pair & Learning Facilitator — Cultural Care Au Pair, CA",
      text: "Lived abroad, designing creative learning for children. Strengthened adaptability and cross-cultural communication.",
      image: "",
      gradient: "from-blue-100 via-indigo-50 to-sky-100",
    },
    {
      year: "2022",
      title: "Bioinformatics Research Intern — Stanford University",
      text: "Analyzed cancer biomarkers using Python and R. Learned how data and compassion can intersect.",
      image: "",
      gradient: "from-indigo-100 via-purple-50 to-violet-50",
    },
    {
      year: "2024",
      title: "Program Assistant — CUNY CARES, NYC",
      text: "Supported research and administration for the CARES initiative.",
      image: "",
      gradient: "from-violet-100 via-fuchsia-50 to-rose-50",
    },
    {
      year: "2024–Present",
      title: "Admin & Systems Support Assistant — Baruch College (CUNY)",
      text: "Streamlined HRIS workflows and improved accessibility through design-thinking and automation.",
      image: "",
      gradient: "from-purple-100 via-indigo-50 to-emerald-50",
    },
    {
      year: "2025–Present",
      title: "Events Assistant — Columbia University Alumni Relations",
      text: "Help create inclusive alumni programming that celebrates connection and belonging.",
      image: "",
      gradient: "from-emerald-100 via-lime-50 to-teal-50",
    },
  ];

  const nudge = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-emerald-50 text-stone-900">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">
            My Professional Journey
          </h1>
          <p className="text-sm text-emerald-700 mt-1">
            Scroll or swipe to explore — tap any card for details.
          </p>
        </header>

        <div className="flex justify-between mb-4">
          <button
            onClick={() => nudge(-1)}
            className="hidden sm:block px-3 py-2 border border-emerald-300 rounded-md hover:bg-emerald-100"
          >
            ←
          </button>
          <button
            onClick={() => nudge(1)}
            className="hidden sm:block px-3 py-2 border border-emerald-300 rounded-md hover:bg-emerald-100"
          >
            →
          </button>
        </div>

        <div
          ref={scroller}
          className="relative overflow-x-auto overflow-y-hidden pb-12 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-100 snap-x snap-mandatory"
        >
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-emerald-300" />
          <ul className="flex gap-10 md:gap-14 lg:gap-20 min-w-max px-4 md:px-6">
            {items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 flex flex-col items-center relative w-[260px]"
              >
                <div className="z-10 h-4 w-4 bg-emerald-600 rounded-full border-[3px] border-emerald-50" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    setExpanded(expanded === i ? null : i)
                  }
                  className={`relative mt-4 overflow-hidden rounded-xl shadow-md cursor-pointer transition-all ${
                    expanded === i ? "w-[280px]" : "w-[260px]"
                  }`}
                >
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${it.gradient} animate-gradient`}
                  ></div>

                  {/* Optional image overlay */}
                  {it.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-sm opacity-60"
                      style={{
                        backgroundImage: `url(${it.image})`,
                      }}
                    />
                  )}

                  {/* Content overlay */}
                  <div className="relative z-10 bg-white/70 backdrop-blur-sm border border-emerald-100 p-4 rounded-xl">
                    <h3 className="text-emerald-700 font-semibold text-sm">
                      {it.year}
                    </h3>
                    <p className="mt-1 font-medium text-[15px] leading-snug">
                      {it.title}
                    </p>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-sm text-stone-800 leading-relaxed"
                        >
                          {it.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
