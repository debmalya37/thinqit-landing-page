import { useSearchParams } from "react-router-dom";
import Reveal from "./Reveal";

export default function ThankYou() {
  const [params] = useSearchParams();
  const firstName = params.get("attendeeFirstName");

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-50">
      <Reveal>
        <div className="max-w-xl w-full bg-white border rounded-2xl shadow-lg p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Booking Confirmed!
          </h1>

          <p className="text-lg text-slate-700 mb-6">
            {firstName
              ? `Thanks ${firstName}, your strategy call is booked.`
              : "Your strategy call is booked."}
          </p>

          <p className="text-slate-600 mb-8">
            Check your email for the calendar invite and meeting link.
          </p>

          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Back to Home
          </a>
        </div>
      </Reveal>
    </section>
  );
}
