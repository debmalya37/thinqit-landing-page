import Reveal from "./Reveal";

const projects = [
  { name: "Acciojet", tone: "bg-slate-100" , url: "http://Acciojet.com"},
  { name: "Inditronicsmedia", tone: "bg-slate-200", url: "http://Inditronicsmedia.com" },
  { name: "VijayAgencies", tone: "bg-slate-300", url: "https://www.vijayagenciesjpr.com/" },
  { name: "Fenice Energy", tone: "bg-slate-400 text-white" , url: "http://FeniceEnergy.com" },
];

export default function ClientWork() {
  return (
    <section className="py-24 px-6 bg-white border-t">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-blue-600 mb-3">
              BROWSE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Client Work
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real websites. Real results. Real businesses that trusted us to get it right.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div
                className={`h-48 rounded-2xl flex items-center justify-center text-sm font-medium ${project.tone} transition hover:-translate-y-1 hover:shadow-lg`}
              >
                {project.name}
              </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
