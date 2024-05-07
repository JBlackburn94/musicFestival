import "./App.css";
import HeaderMarquee from "./components/headerMarquee/HeaderMarquee";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <HeaderMarquee />
      <Hero />
    </>
  );
}

export default App;
