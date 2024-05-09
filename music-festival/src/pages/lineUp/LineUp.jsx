import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import lineUp from "../../assets/GeneratedFestivalPoster.webp";

gsap.registerPlugin(useGSAP);

export default function LineUp() {
  const containerLeft = useRef(null);
  const heading = useRef(null);

  useGSAP(() => {
    gsap.from(containerLeft.current, {
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "5% 95%",
        end: "10% 70%",
        scrub: 1,
        markers: true,
      },
    });
    gsap.from(heading.current, {
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "5% 90%",
        end: "15% 70%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="flex flex-col h-screen overflow-x-hidden">
      <div
        ref={containerLeft}
        className="h-full w-1/2 rounded-br-full relative bg-[#75D8FF]"
      ></div>
      <div
        ref={heading}
        className="absolute flex flex-col items-center justify-center w-full mt-[100px]"
      >
        <h2 className="text-8xl sub-text">Line Up</h2>
        <img
          src={lineUp}
          alt="A fictional line up poster for MFE"
          className="min-w-[400px] w-1/4 mt-10 lg:w-1/2"
        />
      </div>
    </section>
  );
}
