import Marquee from "react-fast-marquee";

export default function HeaderMarquee() {
  return (
    <Marquee className="py-6 sub-text border-y-4 border-y-white" autoFill>
      <p className="mx-4">Low Ticket Warning!</p>
    </Marquee>
  );
}
