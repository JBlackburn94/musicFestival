import { useState, useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

export default function Nav() {
  const navContent = useRef();
  const [open, setOpen] = useState();
  const handleNav = () => {
    setOpen(!open);
  };

  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Tickets",
      url: "/",
    },
    {
      id: 3,
      title: "Line Up",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
  ];

  return (
    <nav className="overflow-hidden">
      <div className="items-center justify-end hidden lg:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="p-4 mx-4 my-4 uppercase text-bright-turquoise-50 hover:bg-bright-turquoise-300 hover:text-bright-turquoise-950"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div onClick={handleNav} className="absolute z-10 block p-4 lg:hidden">
        {open ? (
          <FaTimes className="text-3xl text-bright-turquoise-950" />
        ) : (
          <FaBars className="text-3xl text-bright-turquoise-300" />
        )}
      </div>
      {open && (
        <div
          className="relative z-0 block w-full h-screen lg:hidden bg-bright-turquoise-300"
          ref={navContent}
        >
          <div className="absolute flex flex-col text-5xl font-black uppercase lg:text-8xl bottom-2 left-2 text-bright-turquoise-950">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="my-4 text-bright-turquoise-950"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
