import { useEffect } from "react";
import Reveal from "./Reveal";

export default function CalendlyCTA() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existingScript) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="book" className="py-24 px-6 border-t bg-white">
      <div className="max-w-5xl mx-auto">
        {/* <Reveal> */}
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Book Your Free Strategy Call
          </h2>

          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            No sales pitch. No pressure.  
            We’ll review your website and show you exactly what’s blocking growth.
          </p>

          {/* Calendly Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pranoti-thinqit-lv09/25min?hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>

          {/* Trust text */}
          <p className="text-center text-sm text-slate-500 mt-6">
            🔒 Your information is safe. No spam. Ever.
          </p>
        {/* </Reveal> */}
      </div>
    </section>
  );
}
