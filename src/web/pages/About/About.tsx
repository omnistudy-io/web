import "./index.css";
import Navbar from "../../layouts/nav/Navbar";
import Footer from "../../layouts/footer/Footer";
import AboutHero from "../../components/page_components/AboutHero/AboutHero";
import Overview from "../../components/page_components/Overview/Overview";
import Goals from "../../components/page_components/Goals/Goals";
import GoingForward from "../../components/page_components/GoingForward/GoingForward";
import Team from "../../components/page_components/Team/Team";

export default function About() {
  return (
    <div className="About">
      <Navbar />
      <AboutHero />
      <Overview />
      <Goals />
      <GoingForward />
      <Team />
      <Footer />
    </div>
  );
}
