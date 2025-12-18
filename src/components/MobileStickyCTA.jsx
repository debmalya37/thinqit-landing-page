export default function MobileStickyCTA() {
  return (
    <>
      {/* Spacer so content isn't hidden behind CTA */}
      <div className="h-20 sm:hidden" />

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <div className="bg-[#0b2554]/95 backdrop-blur border-t border-white/10 px-4 py-3">
          <a
            href="#book"
            className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
          >
            Free Website Performance Review
          </a>

          {/* Micro trust text */}
          <p className="text-[11px] text-slate-300 text-center mt-2">
            No sales pitch • Takes 25 minutes
          </p>
        </div>
      </div>
    </>
  );
}
