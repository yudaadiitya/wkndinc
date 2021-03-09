import "./assets/styles/tailwind.css";
import Header from "./parts/Header";
import Hero from "./parts/Hero";
import Definition from "./parts/Definition";
import Pov from "./parts/Pov";
import Footer from "./parts/Footer";
import Help from "./parts/Help";
import Testimonial from "./parts/Testimonial";

function App() {
  return (
    <>
      <div className="bg-hero bg-center bg-pinky lg:bg-cover lg:h-732 h-667">
        <Header />
        <Hero />
      </div>
      <div className="bg-pinky h-627">
        <Definition />
        <Testimonial />
        <div className="bg-black">
          <Pov />
          <Help />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
