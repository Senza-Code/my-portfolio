import { Link } from "react-router-dom";

export default function LionLinkOverview() {
  return (
    <main className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page header */}
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Exhibit ACC-003
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">
            LionLink 🦁
          </h1>
          <p className="text-slate-700 max-w-2xl">
            A peer-to-peer academic support concept for Columbia students who
            need trusted study partners outside formal systems, especially
            first-years, international, and non-traditional students.
          </p>
        </header>

        {/* Exhibit card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-10">
          {/* Intro */}
        <section>
          <p className="text-slate-700 max-w-2xl">
            LionLink explores how students can find trusted study partners
            beyond formal tutoring centers and expensive private help. This
            exhibit walks through the concept, research, testing plans, and
            early flows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-medium text-slate-700 mb-2">
            Checkpoints
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              {
                id: 1,
                title: "Checkpoint 1",
                subtitle: "Concept & Risks",
                highlight: "Framing the problem and early risks",
              },
              {
                id: 2,
                title: "Checkpoint 2",
                subtitle: "Contextual Inquiry",
                highlight: "Interviews, journey map, and insights",
              },
              {
                id: 3,
                title: "Checkpoint 3",
                subtitle: "Concept Testing",
                highlight: "Smoke-and-mirrors experiments",
              },
              {
                id: 4,
                title: "Checkpoint 4",
                subtitle: "Flows & Screens",
                highlight: "Wireframes and key interactions",
              },
            ].map((cp) => (
            <Link
              key={cp.id}
              to={`/lionlink/checkpoint-${cp.id}`}
              className="min-w-[220px] md:min-w-[260px] rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:shadow-sm transition-all p-4 cursor-pointer block"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                ACC-003·0{cp.id}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {cp.title}
              </h3>
              <p className="text-sm text-slate-700">{cp.subtitle}</p>
              <p className="mt-2 text-xs text-slate-600">{cp.highlight}</p>
              <p className="mt-3 text-xs font-medium text-indigo-700">
                View checkpoint →
              </p>
            </Link>

            ))}
          </div>
        </section>
              


          {/* Checkpoint 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Checkpoint 1 – Concept & Risks
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Project recap
              </h3>
              <p className="text-slate-700 max-w-2xl">
                Our project, LionLink, began with a broad goal: helping
                Columbia students find study partners and peer tutors when
                formal support is limited, expensive, or hard to access. We were
                drawn to this problem because each team member had personally
                struggled to find academic and motivational support beyond
                tutoring centers or private help.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Target users & recruitment
              </h3>
              <p className="text-slate-700 max-w-2xl">
                We focused on Columbia students who want flexible, peer-to-peer
                support—especially first-years adjusting to rigorous courses,
                international students adapting to new norms, and
                underrepresented or non-traditional students who may lack
                strong networks. For contextual inquiry, we planned to recruit
                through flyers in high-traffic spaces, class GroupMe channels,
                and student organizations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Early risks & how we&apos;d address them
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>
                  <strong>Adoption:</strong> students might stay with informal
                  networks like GroupMe. We planned to ask what would make them
                  actually switch.
                </li>
                <li>
                  <strong>Quality:</strong> peer help could be inconsistent, so
                  we explored light rating and reputation cues.
                </li>
                <li>
                  <strong>Engagement:</strong> usage might drop after novelty;
                  we asked about incentives and rituals that keep people coming
                  back.
                </li>
                <li>
                  <strong>Equity:</strong> a few high-achievers could be
                  flooded with requests; we considered reciprocity systems to
                  spread load.
                </li>
              </ul>
            </div>
          </section>

          {/* Checkpoint 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Checkpoint 2 – Contextual Inquiry & Focus
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Refined problem & focus
              </h3>
              <p className="text-slate-700 max-w-2xl">
                After contextual inquiry, affinity diagramming, journey
                mapping, and storyboarding—with mentor feedback—we sharpened
                our problem statement: Columbia students lack accessible,
                trustworthy, low-pressure ways to connect academically outside
                formal systems. LionLink shifted from “find tutors” to a
                clearer focus on peer-to-peer matching and collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                What contextual inquiry revealed
              </h3>
              <p className="text-slate-700 max-w-2xl">
                Interviews with students like Sooraj (who wanted help but
                didn’t know how to reach out safely) and Isabella (independent
                but open to low-stakes structure) highlighted both fear of
                asking for help and reliance on existing networks. This pushed
                us to center first-years, international students, and
                underrepresented students in our design.
              </p>
              <p className="mt-2 text-slate-700">
                From these insights we defined three “hills”—core experiences
                LionLink must enable:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>
                  <strong>Ease of connection:</strong> quickly find peers in
                  the same course without awkward cold outreach.
                </li>
                <li>
                  <strong>Trust & safety:</strong> Columbia-verified logins and
                  shared etiquette reduce uncertainty about who you meet.
                </li>
                <li>
                  <strong>Sustained engagement:</strong> light incentives and a
                  sense of belonging keep students returning beyond a one-off
                  match.
                </li>
              </ul>
            </div>

            {/* Journey map visual */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Journey map snapshot
              </h3>
              <img
                src="/lionlink/JourneryMap.png"
                alt="LionLink journey map"
                className="w-full rounded-lg border border-slate-200"
              />
            </div>
          </section>

          {/* Checkpoint 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Checkpoint 3 – Concept Testing & Smoke-and-Mirrors
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Feedback & testing goals
              </h3>
              <p className="text-slate-700">
                Mentor feedback highlighted that our concept testing plan was
                too vague. We needed concrete ways to simulate LionLink with
                minimal code and observe real behavior around adoption, trust,
                and coordination—rather than just show polished screens.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Option 1: Google Form + manual matching
              </h3>
              <p className="text-slate-700">
                We designed a Google Form that mimicked “joining LionLink” by
                collecting UNI, school, courses, availability, study
                preferences, and concerns. We then manually matched students
                into pairs or trios and emailed them a “LionLink match” with
                partner details and coordination guidance, followed by a short
                survey on coordination ease, comfort, academic value, and
                likelihood to reuse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Option 2: “LionLink Beta” channel
              </h3>
              <p className="text-slate-700">
                A second concept created a closed Discord or GroupMe space
                branded as “LionLink Beta,” where we could post scripted,
                system-like messages (match notifications, nudges) and observe
                how often students coordinated, shared resources, and returned
                over a week. This probed motivation, norms, and group longevity
                without building the full platform.
              </p>
            </div>
          </section>

          {/* Checkpoint 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Checkpoint 4 – Low-Fidelity Flows & Key Screens
            </h2>

            <p className="text-slate-700">
              Building on our design goals and encouraging smoke-and-mirrors
              results, we translated LionLink into low-fidelity wireframes that
              map the core flow: signing in, discovering peers, and
              coordinating study sessions.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                1. Sign up & sign in
              </h3>
              <p className="text-slate-700">
                The entry screen lets students continue with their Columbia UNI
                or sign up with email, but the UNI option is visually
                prioritized. This reflects our findings that students want a
                Columbia-only, verified space for safety and trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                2. Home dashboard
              </h3>
              <p className="text-slate-700">
                After logging in, students see a personalized dashboard (for
                example, “Welcome back, Pearl!”) with two primary actions: Find
                Study Partners and Post Study Request. Below, an Upcoming Study
                Sessions list shows who they’re meeting, for which course,
                where, and when, and a My Courses area indicates how many
                potential partners exist for each class, making the community
                feel active.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                3. Matching & compatibility
              </h3>
              <p className="text-slate-700">
                Choosing a course reveals potential partners as cards with name,
                year, availability, and study style (such as “prefers slow
                pace, thorough review”), plus a prominent compatibility score
                like 85% or 93%. We made the score the focal point so students
                can quickly scan for high-fit matches instead of reading long
                profiles.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
