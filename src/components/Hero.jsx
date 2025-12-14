import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            ✓ Complete Website Solutions for B2B
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Your Website is Bleeding Money.
            <span className="block italic text-blue-600 mt-2">
              Let’s Fix That.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10">
            We build conversion-focused websites that turn visitors into
            qualified leads — not just “pretty pages”.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#book"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition"
            >
              Book Free Strategy Call
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-semibold border border-slate-300 hover:bg-slate-50 transition"
            >
              See How It Works
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
