import React from "react";
import { useNavigate, Link } from "react-router-dom";
import pearlImg from "../assets/pearl.jpg";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-emerald-50 text-stone-900">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="village-hills pointer-events-none" />
        <div className="village-weave pointer-events-none" />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-600" />
          <span className="text-sm font-medium text-stone-700">Portfolio</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-stone-700">
          <button onClick={() => navigate("/museum")} className="hover:text-emerald-800 transition">
            Museum
          </button>
          <Link to="/timeline" className="hover:text-emerald-800 transition">
            Resume
          </Link>
          <a href="mailto:ps3358@columbia.edu" className="hover:text-emerald-800 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-4 pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900">
              Molweni (Hello) Welcome!
            </h1>

            <p className="mt-4 text-stone-700 leading-relaxed">
              <strong>Think of this as a museum still under construction.</strong><br />
              The paint’s still drying, the sketches keep shifting, and the lessons keep unfolding.<br />
              Every unfinished piece reveals where I’ve been and gestures toward the work I hope to pursue at the d.school.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="chip">Community</li>
              <li className="chip">Craft</li>
              <li className="chip">Care</li>
              <li className="chip">Continuity</li>
            </ul>

            <div className="mt-8">
              <button
                onClick={() => navigate("/museum")}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-8 py-3 text-sm font-medium hover:bg-emerald-800 shadow-[0_8px_24px_rgba(16,185,129,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
              >
                Enter Museum →
              </button>
            </div>
          </div>

          {/* Right Portrait */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-amber-200/60 blur-[2px] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-emerald-200/50 blur-[1px] -z-10" />

            <div className="rounded-3xl border border-stone-200 shadow-[0_12px_30px_rgba(20,83,45,0.08)] bg-white/80 backdrop-blur overflow-hidden">
              <img
                src={pearlImg}
                alt="Portrait of Pearl Sikepe"
                className="w-full h-[420px] object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-sm text-stone-600 italic">
                  Pearl Sikepe — designer, researcher, and joyful learner.
                </p>
              </div>
            </div>
      
            <div className="absolute -top-3 right-10 w-24 h-6 village-weave rounded-md border border-stone-200 shadow-sm" />
          </div>
        </div>
      </section>
    </main>
  );
}
