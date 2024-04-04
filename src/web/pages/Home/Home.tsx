import "./index.css";
import Navbar from "../../layouts/nav/Navbar";
import Footer from "../../layouts/footer/Footer";
import Hero from "../../components/page_components/Hero/Hero";
import HomeStat from "../../components/page_components/HomeStat/HomeStat";
import HomeMission from "../../components/page_components/HomeMission/HomeMission";
import HomeFeatured from "../../components/page_components/HomeFeatured/HomeFeatured";
import Testimonials from "../../components/page_components/Testimonials/Testimonials";
import Faq from "../../components/page_components/Faq/Faq";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <HomeStat />
      <HomeFeatured />
      <HomeMission />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
