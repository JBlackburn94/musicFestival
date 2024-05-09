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
      borderTopRightRadius: "100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "50% 95%",
        end: "70% 80%",
        scrub: 1,
        marekers: true,
      },
    });
    gsap.from(heading.current, {
      opacity: 0,
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
        className="h-full w-screen relative bg-[#75D8FF]"
      ></div>
      <div
        ref={heading}
        className="absolute flex flex-col items-center justify-center w-full mt-[100px]"
      >
        <h2 className="text-8xl sub-text">Line Up</h2>
        <img
          src={lineUp}
          alt="A fictional line up poster for MFE"
          className="min-w-[400px] w-1/4 mt-10 lg:w-[500px] max-h-[500px]"
        />
      </div>
    </section>
  );
}
