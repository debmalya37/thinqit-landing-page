import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Services from "./components/Services";
import CalendlyCTA from "./components/CalendlyCTA";
import ThankYou from "./components/ThankYou";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ClientWork from "./components/ClientWork";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Letter />
              <Services />
              <ClientWork />
              <CalendlyCTA />
              <WhatsAppFloat />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}
