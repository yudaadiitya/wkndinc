import "./assets/styles/tailwind.css";
import navLogo from "./assets/images/bitmap_2.jpg";
import navLogo2 from "./assets/images/bitmap_2@2x.jpg";
import navLogo3 from "./assets/images/bitmap_2@3x.jpg";
import legoHero from "./assets/images/bitmap.png";
import legoHero2 from "./assets/images/bitmap@2x.png";
import legoHero3 from "./assets/images/bitmap@3x.png";
import legoSide from "./assets/images/group-4.png";
import legoSide2 from "./assets/images/group-4@2x.png";
import legoSide3 from "./assets/images/group-4@3x.png";

function App() {
  return (
    <>
      <div className="bg-hero bg-center bg-pinky lg:bg-cover lg:h-732 h-667">
        <div className="bg-white pl-6 h-17 lg:pl-213 flex items-center">
          <img
            className="float-left"
            src={navLogo}
            srcSet={`${navLogo2} 2x, ${navLogo3} 3x`}
            alt="nav logo"
          />
          <p className="header-text leading-4 ml-3.5">
            <span className="text-xs">Good Morning</span> <br />
            <span className="font-bold">Fellas</span>
          </p>
        </div>
        <div>
          <div className="pt-21 text-center">
            <p className="lg:text-xl text-mxl text-white font-black mb-5">
              WEEKEND FROM HOME
            </p>
            <p className="lg:text-md text-mmd font-semibold italic text-white mb-67">
              Stay active with a little workout.
            </p>
            <img
              className="absolute m-0 inline -ml-92 self-center"
              src={legoHero}
              srcSet={`${legoHero2} 2x, ${legoHero3} 3x`}
              alt="lego hero"
            />
            <div className="relative flex justify-center mt-272">
              <p className="text-mmd bg-white btn-hero shadow-pinky pt-4">
                Let's Go
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pinky h-627">
        <div className="flex justify-end lg:pt-36 pt-0">
          <img
            src={legoSide}
            srcSet={`${legoSide2} 2x, ${legoSide3} 3x`}
            alt="group-4"
          />
        </div>
      <div className="flex justify-center mb-10">
          <p className="lg:text-md text-mmd lg:tracking-tight tracking-wide font-medium lg:leading-8 text-right lg:px-374 px-8 lg:pt-0 pt-16">
            <span className="text-richBlue font-bold">Deffinition;&nbsp;</span>a practice or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
            <h1 className="text-white font-semibold italic lg:mt-30 mt-5">
              -weekend team
            </h1>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
