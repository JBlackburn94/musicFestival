import { motion } from "framer-motion";
import { useState } from "react";

export default function Hamburger() {
  const [active, setActive] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Tickets",
      link: "/tickets",
    },
    {
      id: 3,
      name: "Lineup",
      link: "/lineup",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div>
      <div className="relative z-20">
        <motion.button
          onClick={() => setActive((pv) => !pv)}
          className="relative w-20 h-20 transition-colors rounded-full bg-white/0 hover:bg-[#04314D]/40"
          animate={active ? "open" : "closed"}
          initial={false}
        >
          <motion.span
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            className="absolute w-10 h-1 bg-[#d9f1fd]"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            className="absolute w-10 h-1 bg-[#d9f1fd]"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{
              left: "calc(50% + 10px)",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            className="absolute w-5 h-1 bg-[#d9f1fd]"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "50%", "50%"],
                left: "50%",
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "35%"],
                left: "calc(50% + 10px)",
              },
            }}
          ></motion.span>
        </motion.button>
      </div>
      {active && (
        <motion.div
          className="z-10 absolute top-0 left-0 w-1/2 h-full bg-[#75D8FF] flex items-center justify-center font-bold text-center uppercase"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul>
            {links.map((link) => (
              <li key={link.id} className="mb-8">
                <motion.a
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.2 + link.id * 0.2 }}
                  href={link.link}
                  className="text-white text-[30px] hover:text-[#B6E8FF]"
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
}
