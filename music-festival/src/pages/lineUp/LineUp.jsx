import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function LineUp() {
  const containerRight = useRef(null);
  const containerLeft = useRef(null);
  const heading = useRef(null);

  useGSAP(() => {
    gsap.from(containerRight.current, {
      opacity: 0,
      x: "100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "60% 90%",
        end: "60% 60%",
        scrub: 1,
      },
    });
    gsap.from(containerLeft.current, {
      opacity: 0,
      x: "-100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "60% 90%",
        end: "60% 60%",
        scrub: 1,
      },
    });
    gsap.from(heading.current, {
      opacity: 0,
      y: "-100%",
      scrollTrigger: {
        trigger: containerLeft.current,
        start: "60% 90%",
        end: "60% 60%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="flex flex-col h-screen overflow-x-hidden">
      <div
        ref={containerLeft}
        className="h-1/2 w-1/2 rounded-br-full relative bg-[#75D8FF]"
      ></div>
      <div
        ref={heading}
        className="absolute flex items-center justify-center w-full mt-[100px]"
      >
        <h2 className="text-8xl sub-text">Line Up</h2>
      </div>
      <div
        ref={containerRight}
        className="h-1/2 w-1/2 bottom-0 sticky left-[100%] rounded-tl-full bg-[#75D8FF]"
      ></div>
    </section>
  );
}
