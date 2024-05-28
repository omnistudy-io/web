import React from "react";
import Companies from "../components/pageComponents/Companies";
import Faq from "../components/pageComponents/Faq";
import Hero from "../components/pageComponents/Hero";
import Stats from "../components/pageComponents/Stats";
import Testimonials from "../components/pageComponents/Testimonials";
import Why from "../components/pageComponents/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Stats />
      <Why />
      <Testimonials />
      <Faq />
    </>
  );
}
