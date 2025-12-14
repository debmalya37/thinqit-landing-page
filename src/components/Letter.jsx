import Reveal from "./Reveal";

export default function Letter() {
  return (
    <section className="py-20 px-6 border-t">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Is Your Website Costing You Clients?
          </h2>
        </Reveal>

        <Reveal>
          <div className="space-y-8 text-lg text-slate-700">
            <p><strong>Dear Business Owner,</strong></p>
            <p>Your website is costing you thousands every month.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Visitors leave without contacting you",
                "Slow load times kill trust",
                "Google can’t find you",
              ].map((text) => (
                <div
                  key={text}
                  className="p-6 rounded-2xl border bg-slate-50"
                >
                  {text}
                </div>
              ))}
            </div>

            <p className="italic text-slate-500">
              Your website should be a 24/7 sales machine. Right now, it’s broken.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
