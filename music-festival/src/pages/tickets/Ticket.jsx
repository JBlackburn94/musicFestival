export default function Tickets() {
  return (
    <section className="bg-[#B6E8FF] h-auto overflow-hidden">
      <div className="absolute z-10 flex flex-col items-center justify-center w-full h-screen lg:flex-row">
        <div className="w-[384px] h-[505px] my-5 lg:my-0 bg-[#04314D] rounded-lg mx-0 lg:mx-4"></div>
        <div className="w-[384px] h-[505px] my-5 lg:my-0 lg:h-[548px] bg-[#04314D] rounded-lg mx-0 lg:mx-4"></div>
        <div className="w-[384px] h-[505px] my-5 lg:my-0 bg-[#04314D] rounded-lg mx-0 lg:mx-4"></div>
      </div>
      <div className="bg-[#04314D] h-screen w-1/2 rounded-r-full opacity-30 relative z-0"></div>
    </section>
  );
}
