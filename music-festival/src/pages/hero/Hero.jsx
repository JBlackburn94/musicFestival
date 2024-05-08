import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import heroVid from "../../assets/hero.mp4";
import bbc from "../../assets/bbc.webp";
import heineken from "../../assets/heineken.webp";
import twitch from "../../assets/twitch.webp";
import spotify from "../../assets/spotify.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
    gsap.to(containerLeft.current, {
      opacity: 0,
      ScrollTrigger: {
        trigger: containerLeft.current,
        start: "top center",
        end: "bottom center",
        markers: true,
      },
    });
  });

  return (
    <section className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-between lg:flex-row">
        <div
          ref={containerLeft}
          className="h-[550px] w-full lg:w-1/2 bg-[#75D8FF] rounded-br-full relative flex items-center justify-center flex-col"
        >
          <span ref={leftContent} className="overflow-hidden">
            <h1 className="sub-text text-[#04314D] text-5xl lg:text-8xl">
              MFE
            </h1>
            <h2 className="text-5xl font-black lg:text-8xl">Festival</h2>
            <h2 className="text-4xl font-bold text-center text-[#04314D]">
              2024
            </h2>
          </span>
        </div>
        <div
          className="flex flex-col items-center justify-center w-full mt-4 lg:w-1/2"
          ref={containerRight}
        >
          <video
            className="w-[300px] lg:w-[310px] rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
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
      <div className="mt-[86px] flex flex-col items-center justify-center">
        <h3 className="text-4xl font-black uppercase">Sponsors</h3>
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <img
            src={bbc}
            alt="An image of the BBC logo"
            className="min-w-[100px] max-w-[150px] m-4 h-auto"
          />
          <img
            src={heineken}
            alt="An image of the Heineken logo"
            className="min-w-[100px] max-w-[200px] m-4 h-auto"
          />
          <img
            src={twitch}
            alt="An image of the Twitch logo"
            className="min-w-[100px] max-w-[200px] m-4 h-auto"
          />
          <img
            src={spotify}
            alt="An image of the Spotify logo"
            className="min-w-[100px] max-w-[130px] m-4 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
