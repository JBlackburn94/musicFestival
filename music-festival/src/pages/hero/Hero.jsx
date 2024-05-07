import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import heroVid from "../../assets/hero.mp4";
import sponsors from "../../assets/Group 6.webp";

export default function Hero() {
  const containerLeft = useRef(null);
  const leftContent = useRef(null);
  const containerRight = useRef(null);
  const rightContent = useRef(null);
  useGSAP(() => {
    gsap.from(containerLeft.current, {
      duration: 1,
      x: "-100%",
      opacity: 0,
    });
    gsap.from(leftContent.current, {
      duration: 1,
      opacity: 0,
      delay: 0.9,
    });
    gsap.from(containerRight.current, {
      duration: 1,
      opacity: 0,
      delay: 1.2,
      x: "100%",
    });
    gsap.from(rightContent.current, {
      duration: 1,
      opacity: 0,
      delay: 1.8,
    });
  });

  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-start justify-between">
        <div
          ref={containerLeft}
          className="h-[550px] w-1/2 bg-[#75D8FF] rounded-br-full relative flex items-center justify-center flex-col"
        >
          <span ref={leftContent} className="overflow-hidden">
            <h1 className="sub-text text-[#04314D] text-8xl">MFE</h1>
            <h2 className="font-black text-8xl">Festival</h2>
            <h2 className="text-4xl font-bold text-center text-[#04314D]">
              2024
            </h2>
          </span>
        </div>
        <div
          className="flex flex-col items-center justify-center w-1/2 mt-4"
          ref={containerRight}
        >
          <video className="w-[310px] rounded-lg" autoPlay loop muted>
            <source src={heroVid} />
          </video>
          <button
            className="absolute bg-[#75D8FF] p-5 text-2xl uppercase font-bold rounded-lg"
            ref={rightContent}
          >
            <a href="#">Tickets</a>
          </button>
        </div>
      </div>
      <div className="mt-[86px] mx-[225px]">
        <h3 className="text-4xl font-black uppercase">Sponsors</h3>
        <img
          src={sponsors}
          alt="An image of 4 sponsors, Heineken, BBC, Spotify and Twitch"
        />
      </div>
    </section>
  );
}
