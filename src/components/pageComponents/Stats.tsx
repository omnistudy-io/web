import React from "react";
import { Card } from "../ui/Card";
import outperforming from "../../assets/outperforming.svg";
import rapidlyGrowing from "../../assets/rapidlyGrowing.svg";
import satisfaction from "../../assets/satisfaction.svg";

export default function Stats() {
  const stats = [
    {
      title: "Outperforming",
      description:
        "Omnistudy surpasses Quizlet and Chegg in personalized learning, attracting users with tailored educational resources.",
      image: outperforming,
    },
    {
      title: "Rapidly Growing",
      description:
        "With over 10,000 monthly users Omnistudy continues to grow at rapids speeds in size and production.",
      image: rapidlyGrowing,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Omnistudy guarantees customer satisfaction with personalized services tailored to meet individual learning needs effectively.",
      image: satisfaction,
    },
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl">Your Personal Study Companion</h2>
        <div className="container grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-4 z-0">
              <Card className="overflow-hidden bg-[#f5f5f5] h-[250px]">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </Card>
              <div>
                <h3 className="font-bold mb-2">{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
