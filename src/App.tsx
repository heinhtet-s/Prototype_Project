import About from "./components/About";
import Challenge from "./components/Challenge";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WebsiteProbleSection from "./components/WebsiteProbleSection";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence>
      <div>
        <Header />
        <HeroSection />
        <About />
        <Challenge />
        <WebsiteProbleSection />
        <Footer />
      </div>
    </AnimatePresence>
  );
};
export default App;
