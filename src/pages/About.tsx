import React from "react";
import AboutHero from "../components/pageComponents/AboutHero";
import Companies from "../components/pageComponents/Companies";
import Goals from "../components/pageComponents/Goals";
import GoingForward from "../components/pageComponents/GoingForward";
import Overview from "../components/pageComponents/Overview";
import Team from "../components/pageComponents/Team";

export default function About() {
  return (
    <>
      <AboutHero />
      <Companies />
      <Overview />
      <Goals />
      <GoingForward />
      <Team />
    </>
  );
}
