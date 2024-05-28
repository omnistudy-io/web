import { Loader } from "lucide-react";
import { Card } from "../ui/Card";

export default function Why() {
  const reasonsTop = [
    {
      title: "Interactive Tools",
      description:
        "Engaging and interactive tools that make learning fun and more effective.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor and track progress to see improvements over time and adjust learning plans accordingly.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "24/7 Accessibility",
      description:
        "Available anytime, anywhere, allowing students to study and get help whenever they need it.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
  ];

  const reasonsBottom = [
    {
      title: "AI-Powered Learning",
      description:
        "Personalized study strategies tailored to each student’s unique learning style for maximum effectiveness.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Homework Assistance",
      description:
        "Instant, accurate help with homework across various subjects, ensuring students understand the material.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
  ];

  return (
    <section
      className="py-16 bg-[#f5f5f5] rounded-t-3xl"
      style={{ boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="container flex flex-col gap-16">
        <div className="flex">
          <h2 className="text-4xl basis-1/3">Why Omnistudy</h2>
          <p className="basis-2/3">
            At the heart of our mission is a dedication to revolutionizing the
            learning experience. We envision leveraging the power of technology
            to create unparalleled educational experiences that transcend
            traditional boundaries. Recognizing that learning is an
            ever-evolving journey, our platform is designed to facilitate
            effective and engaging education for everyone, anywhere.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {reasonsTop.map((reason, i) => (
              <Card
                key={i}
                className="bg-[#d9d9d9] p-4 flex flex-col h-[225px]"
              >
                {reason.icon}
                <div className="mt-auto">
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {reasonsBottom.map((reason, i) => (
              <Card
                key={i}
                className="bg-[#d9d9d9] p-4 flex flex-col h-[225px]"
              >
                {reason.icon}
                <div className="mt-auto">
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
