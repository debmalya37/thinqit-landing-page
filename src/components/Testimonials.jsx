import { motion } from "framer-motion";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Jatin Rawat",
    role: "Founder, EdSteps",
    image: "https://framerusercontent.com/images/PpD0LzNh42bC6MyJy8rJb0YQpo4.jpg?scale-down-to=512&width=640&height=640",
    content:
      "ThinQiT brought our vision for EdSteps to life — and then some. She understood our brand and purpose from day one, turned ideas into a clean, student-friendly design, and delivered a site that looks amazing and performs. Super professional, detail-oriented, and great to work with!",
  },
  {
    name: "Keshav Shinde",
    role: "Co-Founder, Inditronics",
    image: "/images/t1.jpg",
    content:
      "Pranoti is a talented Wix developer with a sharp eye for design. She was responsive, efficient, and great with feedback. Highly recommend her for anyone needing a reliable web expert!",
  },
  {
    name: "Rutuja",
    role: "Founder, TheSeriousPeople",
    image: "/images/rutuja.jpg",
    content:
      "ThinQiT and team have helped me with a creative website that matches my business vision and also developed it within the timeline.",
  },
  {
    name: "Arthur Tangaro",
    role: "Solar Energy Consultant",
    image: "/images/t2.jpg",
    content:
      "Pranoti was a fantastic remote collaborator — reliable, detail-oriented, and highly self-driven. She made the process smooth with her clear communication and strong work ethic. A true team player. Highly recommend!",
  },
  {
    name: "T. Jain",
    role: "Digital Consultant",
    image: "https://framerusercontent.com/images/ETgoVdeITLLIYCHTFNeVuZDMyQY.png?scale-down-to=512",
    content:
      "Working with ThinQiT felt like having an in-house team. They listened, understood our goals, and delivered a website that’s not only beautiful but also aligned perfectly with our brand. Super easy communication throughout!",
  },
  {
    name: "Vaibhav Harale",
    role: "Consultant, Abhyasiksha",
    image: "/images/t3.jpg",
    content:
      "The ThinQiT team supported us in designing and developing the Study Room app, delivering a smooth and efficient experience from start to finish.",
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