import { motion } from "framer-motion";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Aditya Verma",
    role: "Founder, TechFlow",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "We were struggling to convert traffic. ThinQiT completely overhauled our landing page and our conversion rate doubled in 2 weeks. Insane ROI.",
  },
  {
    name: "Sarah Jenkins",
    role: "CMO, Bloom SaaS",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "The design team is next level. They didn't just make it look pretty; they understood our customer psychology. Highly recommended.",
  },
  {
    name: "Rajiv Mehta",
    role: "Director, Urban Scale",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    content:
      "Professional, fast, and no-nonsense. The code quality is top-notch and the site loads instantly. Best agency experience I've had.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Creativ",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "I was skeptical about the 'high ticket' promise, but the rebranding helped us close a $50k deal within a month of launch.",
  },
  {
    name: "David Chen",
    role: "Product Lead, Apex",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "Finally, an agency that understands B2B. No fluff, just results. The SEO strategy they implemented is already paying off.",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Luma Health",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content:
      "Their mobile-first approach changed everything for us. Our bounce rate dropped by 40% immediately after the redesign.",
  },
];

// Duplicate data to create a seamless loop
const marqueeData = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#051235] overflow-hidden relative">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        <Reveal>
          <div className="text-center">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Real Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Trusted by Founders <br /> Who Scale
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here is what industry leaders are saying about working with us.
            </p>
          </div>
        </Reveal>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full space-y-8">
        
        {/* Gradient Masks for Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 z-20 bg-gradient-to-r from-[#051235] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 z-20 bg-gradient-to-l from-[#051235] to-transparent pointer-events-none" />

        {/* Row 1: Moving Left */}
        <Marquee direction="left" speed={40}>
          {marqueeData.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} item={item} />
          ))}
        </Marquee>

        {/* Row 2: Moving Right */}
        <Marquee direction="right" speed={40}>
          {marqueeData.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} item={item} />
          ))}
        </Marquee>
        
      </div>
    </section>
  );
}

/* --- Helper Components --- */

const Marquee = ({ children, direction = "left", speed = 25 }) => {
  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        className="flex gap-6 pl-6"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }} // Ensures container fits all cards
      >
        {children}
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
      
      {/* Stars */}
      <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
        {"★★★★★"}
      </div>

      {/* Content */}
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
        "{item.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full border border-white/20 object-cover"
        />
        <div>
          <h4 className="text-white font-bold text-sm">{item.name}</h4>
          <p className="text-slate-500 text-xs">{item.role}</p>
        </div>
      </div>
    </div>
  );
};