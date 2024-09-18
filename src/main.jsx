import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <h1>Bienvenido a la Barberia Huejutla</h1>
      <p>
        Somos la barberia numero 1 de Huejutla de Reyes Hidalgo, ofrecemos
        servicios de calidad.
      </p>
    </main>
    <Footer />
  </StrictMode>
);
