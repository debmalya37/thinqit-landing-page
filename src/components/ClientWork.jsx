import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const projects = [

  {

    name: "Acciojet",

    url: "http://Acciojet.com",

    category: "E-Commerce / CRO",

    image: "/images/acciojet.png",

    objective: "The old site was cluttered, had poor mobile UX, and confused buyers with too much text.",

    conclusion: "We implemented a clean mobile-first design with visual swatches. Result: Higher add-to-cart rates.",

    color: "bg-[#F3ECE4]",

  },

  {

    name: "Inditronics Media",

    url: "http://Inditronicsmedia.com",

    category: "SaaS Dashboard",

    image: "/images/4.png",

    objective: "The legacy platform looked outdated and lacked data visualization clarity.",

    conclusion: "Redesigned into a sleek dark-mode SaaS dashboard. Expanded to 5+ countries with 5x growth.",

    color: "bg-[#030b2e]",

  },

  {

    name: "Fenice Energy",

    url: "https://feniceenergy.com/",

    category: "Solar / Green Tech",

    image: "/images/2.png",

    // Objective: Solar is a high-trust purchase. Users need to understand savings (ROI) before contacting.

    objective: "Homeowners were dropping off because they couldn't easily understand the ROI or technical benefits of solar adoption.",

    // Conclusion: Simplifying the complex data into a visual story leads to more inquiries.

    conclusion: "Built a high-trust, educational funnel with interactive calculators. Result: 300% increase in qualified installation leads.",

    color: "bg-[#F0EBE3]",

  },

  {

    name: "Vijay Agencies",

    url: "https://www.vijayagenciesjpr.com/",

    category: "B2B Wholesale / HORECA",

    image: "/images/3.png",

    // Objective: They have 1000+ products (cleaning, housekeeping). Offline catalogs are slow and hard to search.

    objective: "A massive offline inventory of 1,000+ hotel supplies made it impossible for clients to browse or request quotes efficiently.",

    // Conclusion: Digitizing the catalog allows for 24/7 access and automated quote generation.

    conclusion: "Digitized their entire catalog into a searchable bulk-order platform. Result: Automated quote requests and streamlined B2B sales.",

    color: "bg-[#EFDECD]",

  },

];

export default function ClientWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
  };

  const swipe = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-24 px-4 md:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-blue-600 mb-3 uppercase">
              Transformation Gallery
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Real Client Success Stories
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              See exactly how we transform outdated websites into high-converting assets.
            </p>
          </div>
        </Reveal>

        {/* SLIDER CONTAINER */}
        {/* FIX: Increased min-h on mobile to 900px to prevent text overlap */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden min-h-[900px] md:min-h-[580px]">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex flex-col md:flex-row h-full"
            >
              
              {/* LEFT: IMAGE SHOWCASE */}
              {/* FIX: Reduced mobile height to 35% so text has room */}
              <div className={`w-full md:w-[60%] h-[35%] md:h-full relative flex items-center justify-center p-6 md:p-12 ${currentProject.color} transition-colors duration-500`}>
                
                {/* Browser Frame */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full max-w-xs md:max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200/50"
                >
                  <div className="h-6 md:h-8 bg-slate-100 border-b border-slate-200 flex items-center gap-2 px-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400/80" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400/80" />
                    <div className="ml-4 flex-1 h-3 md:h-4 bg-white rounded-full border border-slate-200" />
                  </div>

                  <div className="relative aspect-video bg-white w-full group">
                    <img
                      src={currentProject.image}
                      alt={currentProject.name}
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </motion.div>

              </div>

              {/* RIGHT: CONTENT SIDE */}
              {/* FIX: Increased mobile height to 65% and added overflow-y-auto for safety */}
              <div className="w-full md:w-[40%] h-[65%] md:h-full bg-white border-l border-slate-100 overflow-y-auto">
                <div className="p-6 md:p-12 flex flex-col justify-center min-h-full">
                  
                  {/* Meta */}
                  <div className="mb-4 md:mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-wider border border-blue-100">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
                    {currentProject.name}
                  </h3>

                  {/* COMPARISON BLOCKS */}
                  <div className="space-y-4 md:space-y-6">
                    
                    {/* Problem */}
                    <div className="relative pl-4 border-l-2 border-red-200">
                      <h4 className="text-xs font-bold text-red-500 mb-1 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"/> Problem
                      </h4>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        {currentProject.objective}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="relative pl-4 border-l-2 border-emerald-500 bg-emerald-50/30 py-3 pr-3 rounded-r-lg">
                      <h4 className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wide flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/> Result
                      </h4>
                      <p className="text-slate-800 text-sm md:text-base font-medium leading-relaxed">
                        {currentProject.conclusion}
                      </p>
                    </div>

                  </div>

                  {/* CTA */}
                  <div className="mt-6 md:mt-8 pt-6 border-t border-slate-100">
                      <a 
                          href={currentProject.url} 
                          target="_blank"
                          rel="noreferrer" 
                          className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group text-sm md:text-base"
                      >
                          Visit Live Website
                          <span className="bg-slate-100 text-slate-600 rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-xs">
                              ↗
                          </span>
                      </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          {/* FIX: Positioned on the Image section for mobile so it doesn't cover text */}
          <div className="absolute top-[32%] md:top-auto md:bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 z-20 flex gap-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200 shadow-lg">
            <button
              onClick={() => swipe(-1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
            >
              ←
            </button>
            <div className="h-10 w-[1px] bg-slate-200"></div>
            <button
              onClick={() => swipe(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-100 active:scale-95 transition-all"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}