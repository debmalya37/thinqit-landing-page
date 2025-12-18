import { useEffect, useRef } from "react";

export default function CalendlyCTA() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initCalendly = () => {
      if (!window.Calendly || !calendlyRef.current) return;

      // 🔥 Clear any previous instance
      calendlyRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/pranoti-thinqit-lv09/25min?hide_gdpr_banner=1",
        parentElement: calendlyRef.current,
      });
    };

    // ✅ Script already loaded
    if (window.Calendly) {
      initCalendly();
      return;
    }

    // ✅ Load script ONCE
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (isMounted) initCalendly();
      };
      document.body.appendChild(script);
    } else {
      // Script exists but Calendly not ready yet
      const interval = setInterval(() => {
        if (window.Calendly && isMounted) {
          initCalendly();
          clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="book"
      className="py-20 md:py-28 px-4 sm:px-6 bg-white border-t"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Book Your Free Strategy Call
        </h2>

        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          No sales pitch. No pressure.
          <br className="hidden sm:block" />
          We’ll review your website and show you exactly what’s blocking growth.
        </p>

        {/* Calendly Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
          <div
            ref={calendlyRef}
            className="w-full"
            style={{
              height: "900px",      // ✅ desktop
              minHeight: "780px",   // ✅ mobile fallback
            }}
          />
        </div>

        {/* Scarcity / Trust */}
        <p className="text-center text-sm text-slate-500 mt-6">
          ⚠️ Only 3 strategy slots left this week.
        </p>
      </div>
    </section>
  );
}
