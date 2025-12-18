import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#081b3a] via-[#0b2554] to-[#0e2f6e] text-white flex items-center justify-center">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_45%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col items-start text-left">
        <Reveal>
          <div className="flex flex-col items-start">
            
            {/* Badge */}
            <span className="inline-flex items-start gap-2 mb-8 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-sm font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              ✅ Complete Website Solutions for B2B Companies
            </span>


            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Get High Tickets Clients,
              <span className="block text-white mt-2">
                Without Increasing Ad spent
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
              Tired of “design agencies” that deliver pretty websites that don’t
              convert? We build websites that actually make you money—from
              strategy to design to fully-functional, SEO-optimized sites.
            </p>

            {/* Rating + Video Section */}
            <div className="flex flex-wrap items-start justify-center gap-6 mb-12">
              
              {/* Play Button Box */}
              <button className="w-16 h-16 rounded-2xl bg-[#1e2f58] border border-blue-400/30 flex items-center justify-center hover:scale-105 transition-transform group shadow-lg shadow-blue-900/20">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center pl-1 group-hover:bg-blue-400 transition-colors">
                   <svg className="w-4 h-4 text-[#0b2554]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </button>

              {/* Rating Box */}
              <div className="bg-[#132345] border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm shadow-xl flex flex-col items-start text-left">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                  EXCELLENT
                </p>
                <p className="text-sm font-semibold text-white mb-2">
                  We are rated 4.9 out of 5
                </p>
                <div className="flex items-start gap-3">
                   <div className="flex text-yellow-400 text-sm tracking-wide gap-0.5">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>
                   {/* Mini Avatars (Visual flare from screenshot) */}
                   <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-600 border border-[#132345]"></div>
                      <div className="w-5 h-5 rounded-full bg-yellow-500 border border-[#132345]"></div>
                      <div className="w-5 h-5 rounded-full bg-yellow-400 border border-[#132345]"></div>
                      <div className="w-5 h-5 rounded-full bg-slate-600 border border-[#132345] flex items-start justify-center text-[8px] text-white">+</div>
                   </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-start mt-2">
              
              {/* Primary Button Group */}
              <div className="flex flex-col w-full sm:w-auto">
                <a
                  href="#book"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 w-full sm:w-auto text-center"
                >
                  Free Website Performance Review
                </a>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-xs hidden sm:block">
                  We will review your current website for free and tell you if you
                  need to fix it or not.
                </p>
                
              </div>

              {/* Secondary Button */}
              <a
                href="#book"
                className="px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/5 transition-all text-white w-full sm:w-auto text-center h-fit whitespace-nowrap"
              >
                Book Call Directly
              </a>
              <p className="text-xs text-slate-400 mt-2 mb-2 leading-relaxed sm:hidden text-center">
                  We will review your current website for free and tell you if you
                  need to fix it or not.
                </p>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}