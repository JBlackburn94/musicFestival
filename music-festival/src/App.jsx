import "./App.css";
import HeaderMarquee from "./components/headerMarquee/HeaderMarquee";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Tickets from "./pages/tickets/Ticket";

function App() {
  return (
    <>
      <Navbar />
      <HeaderMarquee />
      <Hero />
      <Tickets />
    </>
  );
}

export default App;
