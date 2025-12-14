import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- 1. Container Component ---
function ScrollRevealParagraph({ children, className = "" }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // FINAL FIX: TIGHT BOTTOM ZONE
    // "start 0.95" = Start animating when the line is at the very bottom (5% up)
    // "start 0.85" = Finish animating when the line moves up just 10% more.
    // This narrow 10% window forces the line to finish BEFORE the next one starts.
    offset: ["start 0.95", "start 0.85"],
  });

  const renderWords = (text) => {
    const splitWords = text.split(" ");
    return splitWords.map((word, i) => {
      const start = i / splitWords.length;
      const end = start + 1 / splitWords.length;
      return (
        <Word key={i} progress={scrollYProgress} range={[start, end]}>
          {word}
        </Word>
      );
    });
  };

  return (
    <p ref={element} className={`flex flex-wrap leading-relaxed ${className}`}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (typeof child === "string") return renderWords(child);
            return (
              <span key={i} className="mr-1">
                {child}
              </span>
            );
          })
        : renderWords(children)}
    </p>
  );
}

// --- 2. Individual Word Component ---
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1.5 mt-0.5">
      <span className="absolute opacity-10 text-slate-400">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-slate-900">
        {children}
      </motion.span>
    </span>
  );
};

// --- 3. Mixed Content Helper ---
function MixedScrollReveal({ children, className = "" }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    // Apply the same tight offset
    offset: ["start 0.95", "start 0.85"],
  });

  return (
    <p ref={element} className={`flex flex-wrap leading-relaxed ${className}`}>
      {children.map((part, i) => {
        const start = i / children.length;
        const end = start + 1 / children.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className="mr-1.5 mt-0.5">
            {part}
          </motion.span>
        );
      })}
    </p>
  );
}

// --- MAIN COMPONENT ---
export default function SalesLetter() {
  const simpleReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-4 bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-6">
          <motion.h2
            variants={simpleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Is Your Website <span className="text-blue-600">Costing You Clients?</span>
          </motion.h2>

          <motion.div
            variants={simpleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium"
          >
            <p className="text-slate-500 mb-2">From The Desk Of ThinQiT...</p>
            <p className="text-red-600">
              This page will take 5 minutes to read and only 1 minute to make a decision.
            </p>
          </motion.div>
        </div>

        {/* CONTENT BODY */}
        {/* Space-y-12 provides enough gap for the tight offset to work cleanly */}
        <div className="space-y-12 text-lg md:text-xl text-slate-800 pb-20">
          
          <ScrollRevealParagraph className="font-bold text-slate-900 text-xl">
            Dear Business Owner, Let’s be honest.
          </ScrollRevealParagraph>

          <MixedScrollReveal>
            {[
              "Your", "website", "sucks.", "And", "it’s", "costing", "you",
              <strong key="s1" className="text-slate-900 font-extrabold mx-1">thousands of rupees</strong>,
              "every", "month."
            ]}
          </MixedScrollReveal>

          <ScrollRevealParagraph>
            Not because it’s ugly (though it might be).
          </ScrollRevealParagraph>

          <MixedScrollReveal>
            {[
              "But", "because", "it’s", "not", "doing", "the", "ONE", "job", "it’s", "supposed", "to", "do:",
              <strong key="s2" className="text-slate-900 font-extrabold mx-1">Turn visitors into paying clients.</strong>
            ]}
          </MixedScrollReveal>

          <ScrollRevealParagraph>
            Think about it...
          </ScrollRevealParagraph>

          {/* RED BOX */}
          <div className="bg-red-50 border-l-[6px] border-red-500 p-6 md:p-8 rounded-r-lg my-8">
            <div className="space-y-4 text-red-900 font-medium text-base md:text-lg leading-relaxed">
               <ScrollRevealParagraph>→ How many people visit your website and leave without contacting you?</ScrollRevealParagraph>
               <ScrollRevealParagraph>→ How many prospects go to your competitor’s site because yours loads too slowly?</ScrollRevealParagraph>
               <ScrollRevealParagraph>→ How many potential clients can’t even FIND you on Google?</ScrollRevealParagraph>
               <ScrollRevealParagraph>→ How many leads ghost you because your website doesn't explain what you actually do?</ScrollRevealParagraph>
            </div>
          </div>

          <ScrollRevealParagraph className="italic text-slate-400 text-base">
            *Checks phone nervously*
          </ScrollRevealParagraph>

          <ScrollRevealParagraph>
            Look, we get it.
          </ScrollRevealParagraph>

          <ScrollRevealParagraph>
            You’ve probably been burned before. Hired some “web designer” on Fiverr who gave you a template site. Or paid some fancy agency ₹3 lakhs for a website that looks pretty but converts like garbage.
          </ScrollRevealParagraph>

          <MixedScrollReveal>
            {[
              "Most", "web", "designers", "are", "just", "pushing", "pixels", "around.", 
              "They", "care", "about", "gradients", "and", "animations.",
              <strong key="s3" className="text-slate-900 font-extrabold mx-1">They don’t care if you make money.</strong>
            ]}
          </MixedScrollReveal>

          {/* BLUE BOX */}
          <div className="bg-slate-100 border border-slate-200 p-6 md:p-8 rounded-lg text-base md:text-lg text-slate-800 my-8">
             <div className="space-y-4">
                <ScrollRevealParagraph className="font-bold text-slate-900">Here’s what nobody tells you:</ScrollRevealParagraph>
                <ScrollRevealParagraph>Your website isn’t a brochure. It's not a digital business card. It's not "online presence."</ScrollRevealParagraph>
                <ScrollRevealParagraph className="font-bold text-slate-900">Your website is a 24/7 sales machine.</ScrollRevealParagraph>
                <ScrollRevealParagraph>And right now? Your sales machine is broken.</ScrollRevealParagraph>
             </div>
          </div>

          <ScrollRevealParagraph>
            But here’s the good news...
          </ScrollRevealParagraph>

          <ScrollRevealParagraph>
            You’re reading this right now because something isn’t working. Maybe your leads are thin. Maybe your conversion rate is garbage. Maybe you’re just tired of watching competitors win while you’re stuck with a website from 2015.
          </ScrollRevealParagraph>

          <ScrollRevealParagraph>
             Whatever it is for you...
          </ScrollRevealParagraph>

          <MixedScrollReveal className="text-center justify-center">
             {[
               "It", "all", "starts", "by", "choosing", "a", 
               <strong key="s4" className="text-blue-600 font-extrabold mx-1">NEW approach</strong>,
               "to", "your", "website", "below..."
             ]}
          </MixedScrollReveal>

        </div>
      </div>
    </section>
  );
}