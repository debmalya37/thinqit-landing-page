import { useEffect, useState } from "react";
// import Reveal from "./Reveal"; 

export default function CalendlyCTA() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Since the script is now in index.html, we just need to ensure the widget
    // initializes correctly if the user navigates here.
    // This event listener waits for the iframe to actually render.
    const checkForWidget = setInterval(() => {
      const widgetIframe = document.querySelector(".calendly-inline-widget iframe");
      if (widgetIframe) {
        setIsLoaded(true);
        clearInterval(checkForWidget);
      }
    }, 500);

    // Safety fallback: Stop checking after 5 seconds
    setTimeout(() => clearInterval(checkForWidget), 5000);
    
    return () => clearInterval(checkForWidget);
  }, []);

  return (
    <section id="book" className="py-24 px-6 border-t bg-white">
      <div className="max-w-5xl mx-auto">
        {/* <Reveal> */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Book Your Free Strategy Call
          </h2>

          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            No sales pitch. No pressure.  
            We’ll review your website and show you exactly what’s blocking growth.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden relative min-h-[720px]">
            
            {/* LOADING SPINNER (Visible until iframe loads) */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-400 font-medium">Loading calendar...</p>
                </div>
              </div>
            )}

            {/* Calendly Widget */}
            <div
              className="calendly-inline-widget relative z-10"
              data-url="https://calendly.com/pranoti-thinqit-lv09/25min?hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            ⚠️Only 3 Slots Left.
          </p>
        {/* </Reveal> */}
      </div>
    </section>
  );
}