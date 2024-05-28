import React from "react";
import { Card } from "../ui/Card";

export default function Goals() {
  const goals = [
    {
      title: "Empowering Efficient Learning",
      description:
        "OmniStudy's core objective is to empower students through personalized study tools, adaptive schedules, and real-time feedback. By fostering a smarter approach to learning, our goal is to streamline the educational experience, maximizing efficiency and ensuring academic success.",
    },
    {
      title: "Fostering Academic Confidence",
      description:
        "At OmniStudy, we aim to go beyond traditional methods. Our innovative features and adaptive learning strategies are designed to not only improve academic results but also to cultivate a profound sense of mastery and confidence in students. We are committed to empowering students on their educational journey.",
    },
    {
      title: "Enhancing Work-Life Balance",
      description:
        "OmniStudy prioritizes balance, aiming to reduce study time while maintaining academic success. We empower students to pursue personal interests and a well-rounded lifestyle, fostering an environment where they thrive academically and holistically.",
    },
  ];

  return (
    <section
      className="py-16 bg-[#f5f5f5] rounded-t-3xl"
      style={{ boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="container flex flex-col gap-12">
        <h2 className="text-4xl text-center">Our Goals For the Future</h2>
        <div className="grid grid-cols-3 gap-4">
          {goals.map((goal, i) => (
            <div key={i} className="flex flex-col gap-4 z-0">
              <Card className="overflow-hidden bg-[#d9d9d9] h-[250px]"></Card>
              <div>
                <h3 className="font-bold mb-2">{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
