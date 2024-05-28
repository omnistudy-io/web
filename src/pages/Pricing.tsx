import React from "react";
import PlanCard from "../components/pageComponents/PlanCard";

export default function Pricing() {
  const plans = [
    {
      plan: "Basic",
      price: 0,
      features: [
        "Course & Assignment Planning",
        "Online Note Taker & Transcription",
      ],
    },
    {
      plan: "OmniStudy",
      price: 9.99,
      features: [
        "Course & Assignment Planning",
        "Online Note Taker & Transcription",
        "Question Generation",
      ],
    },
    {
      plan: "Advanced",
      price: 19.99,
      features: [
        "Course & Assignment Planning",
        "Online Note Taker & Transcription",
        "Question Generation",
        "Document Summarization",
      ],
    },
  ];

  return (
    <section className="pt-[12rem] pb-16">
      <div className="container flex flex-col gap-12">
        <h1 className="text-6xl text-center">
          Upgrade your study <br /> habits with OmniStudy.
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
