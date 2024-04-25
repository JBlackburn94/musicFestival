import Marquee from "react-fast-marquee";
import "./banner.css";

export default function Banner() {
  return (
    <div className="mt-16 md:mt-0 bg-bright-turquoise-400 text-bright-turquoise-900 hover:bg-bright-turquoise-200">
      <Marquee pauseOnHover>
        <a href="#" className="flex p-4">
          <p className="mx-4 tracking-wider">
            buy MFE 2023 leftover merch here!
          </p>
          <p className="mx-4 tracking-wider">
            buy MFE 2023 leftover merch here!
          </p>
          <p className="mx-4 tracking-wider">
            buy MFE 2023 leftover merch here!
          </p>
          <p className="mx-4 tracking-wider">
            buy MFE 2023 leftover merch here!
          </p>
          <p className="mx-4 tracking-wider">
            buy MFE 2023 leftover merch here!
          </p>
        </a>
      </Marquee>
    </div>
  );
}
