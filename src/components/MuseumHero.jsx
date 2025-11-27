import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2010",
    title: "High School Graduate, South Africa",
    text: "Completed secondary education with a focus on social sciences and leadership.",
    image: "/timeline/2010.jpg",
    side: "top",
  },
  {
    year: "2011",
    title: "Cashier — Makro Wholesale Store, Cape Town",
    text: "Developed first lessons in customer empathy and workflow design.",
    image: "/timeline/2011.jpg",
    side: "bottom",
  },
  {
    year: "2012–2013",
    title: "Somatology Studies — Cape Peninsula University of Technology",
    text: "Explored wellness, anatomy, and care—early training in human systems.",
    image: "/timeline/2012.jpg",
    side: "top",
  },
  {
    year: "2014",
    title: "Receptionist — Medical Office, Cape Town",
    text: "Balanced empathy and efficiency in patient support.",
    image: "/timeline/2014.jpg",
    side: "bottom",
  },
  {
    year: "2015",
    title: "Substitute Teacher & Facilitator — Community Education Programs, Cape Town",
    text: "Led youth workshops emphasizing collaboration and curiosity.",
    image: "/timeline/2015.jpg",
    side: "top",
  },
  {
    year: "2016",
    title: "Administrative Assistant — Theatre on the Bay, Cape Town",
    text: "Coordinated front-of-house operations and scheduling; learned how timing and presentation shape experience design.",
    image: "/timeline/2016.jpg",
    side: "bottom",
  },
  {
    year: "2017",
    title: "Store Manager — This Shop Rox, Cape Town",
    text: "Managed inventory, staff, and customer experience in a tourist hub; bridged commerce and storytelling in South African art retail.",
    image: "/timeline/2017.jpg",
    side: "top",
  },
  {
    year: "2018–2020",
    title: "Au Pair & Learning Facilitator — Cultural Care Au Pair, Atherton, CA",
    text: "Designed daily routines fostering creative learning in children and strengthened adaptability and cultural communication skills.",
    image: "/timeline/2018.jpg",
    side: "bottom",
  },
  {
    year: "2022",
    title: "Bioinformatics Research Intern — Stanford University, CA",
    text: "Conducted Python/R-based computational analysis of cancer biomarkers; contributed to a machine-learning model predicting patient prognosis.",
    image: "/timeline/2022.jpg",
    side: "top",
  },
  {
    year: "2024",
    title: "Program Assistant — CUNY CARES, NYC",
    text: "Supported administrative and research functions for the CARES initiative; documented confidential records and coordinated cross-campus operations.",
    image: "/timeline/2024a.jpg",
    side: "bottom",
  },
  {
    year: "2024–Present",
    title: "Admin & Systems Support Assistant — Baruch College (CUNY), NY",
    text: "Streamlined HRIS workflows using design-thinking and automation; improved accessibility and data transparency for HR staff.",
    image: "/timeline/2024b.jpg",
    side: "top",
  },
  {
    year: "2025–Present",
    title: "Events Assistant — Columbia University Alumni Relations, NY",
    text: "Support programming for recent graduate engagement; strengthen belonging through inclusive alumni events.",
    image: "/timeline/2025.jpg",
    side: "bottom",
  },
];

export default function MuseumTimeline() {
  return (
    <div className="min-h-screen bg-[#faf5ef] flex flex-col items-center py-20">
      <h1 className="text-4xl md:text-5xl font-serif text-[#402d1c] mb-4">
        My Professional Journey
      </h1>
      <h2 className="uppercase tracking-widest text-sm text-[#a27b5c] mb-12">
        From Empathy to Innovation
      </h2>

      <div className="relative flex overflow-x-auto scrollbar-hide px-12 space-x-24 pb-16">
        {/* Central Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#b8502a]"></div>

        {timelineData.map((item, i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* Connector Dot */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="z-10 h-5 w-5 bg-[#b8502a] rounded-full border-[3px] border-[#faf5ef]"
            ></motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, y: item.side === "top" ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute w-72 bg-white shadow-lg rounded-lg p-4 border border-[#e5d6c3] ${
                item.side === "top"
                  ? "bottom-[140%] origin-bottom"
                  : "top-[140%] origin-top"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h3 className="text-[#b8502a] font-semibold text-lg">
                {item.year}
              </h3>
              <p className="text-[#402d1c] font-serif text-sm leading-snug">
                {item.title}
              </p>
              <p className="text-[#7b5c3a] text-xs mt-1">{item.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
