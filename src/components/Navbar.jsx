import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/museum" className="text-xl font-semibold text-indigo-600 tracking-tight">
          Pearl Sikepe
        </Link>
        <div className="space-x-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-indigo-600">Landing</Link>
          <button onClick={() => scrollTo("collections")} className="hover:text-indigo-600">Collections</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-indigo-600">Contact</button>
        </div>
      </div>
    </nav>
  );
}
