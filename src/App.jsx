import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Services from "./components/Services";
import CalendlyCTA from "./components/CalendlyCTA";
import ThankYou from "./components/ThankYou";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ClientWork from "./components/ClientWork";
import SalesLetter from "./components/SalesLetter";
import Testimonials from "./components/Testimonials";
import MobileStickyCTA from "./components/MobileStickyCTA";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SalesLetter/>
              {/* <Letter /> */}
              <Services />
              <ClientWork />
              <Testimonials />
              <CalendlyCTA />
              <MobileStickyCTA />
              <WhatsAppFloat />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}
