import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Strategic Design (Figma)",
    desc: "Forget pretty designs. We design for conversion. Every button, every headline, every color is chosen to guide your visitors toward one thing: Taking action.",
  },
  {
    number: "02",
    title: "Copywriting That Sells",
    desc: "Words matter. We write copy that speaks directly to your customer's pain points. No corporate jargon. No fluff. Just clear, persuasive messaging that converts.",
  },
  {
    number: "03",
    title: "Development (Code or No-Code)",
    desc: "Whether custom code or platforms like Webflow/Framer, we build fast, secure, scalable websites. Your site will load in under 2 seconds and work flawlessly on every device.",
  },
  {
    number: "04",
    title: "SEO That Actually Works",
    desc: "Built-in SEO from day one. Proper structure, meta tags, schema markup, speed optimization. We make sure Google can find you—and rank you higher than your competitors.",
  },
  {
    number: "05",
    title: "Mobile-First Approach",
    desc: "Over 60% of B2B research happens on mobile. Your site will look perfect and work flawlessly whether someone’s on an iPhone, Android, or desktop.",
  },
  {
    number: "06",
    title: "Post-Launch Support",
    desc: "We don’t ghost you after launch. Training, updates, analytics tracking, ongoing optimization—we’re in this for your long-term success.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#051235]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-4">
              How can we help you?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Impress Your <br className="hidden md:block" /> Clients and VC
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              We don't just "make websites." We build revenue-generating machines that work while you sleep.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Reveal key={service.number}>
              <div className="bg-white rounded-xl p-8 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                
                {/* Number */}
                <div className="text-6xl font-bold text-blue-100 mb-6">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}