import Hamburger from "../hamburgerMenu/Hamburger";

export default function Navbar() {
  return (
    <nav className="px-[30px] py-[15px] md:py-[30px] md:px-[60px] text-[#B6E8FF]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[40px] font-black sub-text">MFE</h1>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
}
