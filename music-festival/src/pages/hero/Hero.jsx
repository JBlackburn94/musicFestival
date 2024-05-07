import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import heroVid from "../../assets/hero.mp4";

export default function Hero() {
  const containerLeft = useRef(null);
  const leftContent = useRef(null);
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
      y: 100,
    });
    gsap.to(leftContent.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: leftContent.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });
  });

  return (
    <section className="flex flex-row items-start justify-between w-full h-screen">
      <div
        ref={containerLeft}
        className="h-[607px] w-1/2 bg-[#75D8FF] rounded-br-full relative flex items-center justify-center flex-col"
      >
        <span ref={leftContent} className="overflow-hidden">
          <h1 className="sub-text text-[#04314D] text-8xl">MFE</h1>
          <h2 className="font-black text-8xl">Festival</h2>
          <h2 className="text-4xl font-bold text-center">2024</h2>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 mt-4">
        <video className="w-[310px] rounded-lg" autoPlay loop muted>
          <source src={heroVid} />
        </video>
        <button className="absolute bg-[#75D8FF] p-4 text-xl uppercase font-bold rounded-lg top-[750px]">
          <a href="#">Tickets</a>
        </button>
      </div>
    </section>
  );
}
