import "./hero.css";
import heroVideo from "../../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-between w-full mt-20 lg:mt-10 lg:flex-row">
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-1/2 text-4xl font-black md:text-6xl lg:text-8xl">
          MFE Festival
        </h1>
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-t from-bright-turquoise-50 to-bright-turquoise-300 bg-clip-text">
          2024
        </h2>
      </div>
      <div className="flex items-center justify-center w-full mt-10 lg:mt-0 lg:w-1/2">
        <video muted autoPlay loop className="w-1/4 mr-4">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="relative w-1/4 text-5xl font-bold md:text-6xl text-bright-turquoise-400 right-10 lg:right-16">
          Get <br /> VIP <br /> Tickets <br /> Now.
        </h2>
      </div>
    </section>
  );
}
