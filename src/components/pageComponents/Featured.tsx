import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/Carousel";
import { Loader } from "lucide-react";
import { Card } from "../ui/Card";

export default function Featured() {
  const features = [
    {
      title: "AI Listening",
      description:
        "Utilizes AI algorithms to record lectures and generate summary notes tailored to you.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Textbook Upload",
      description:
        "Enables users to upload full textbooks, from which AI engine can scan through.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Assignment Assistance",
      description:
        "Uses a data-driven approach to generate prompts and solutions for assignments",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Quiz Generator",
      description:
        "Automatically creates quizzes based on the notes and textbooks uploaded.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "Flashcard Creator",
      description:
        "Automatically generates digital flashcards based on the user's notes and textbooks.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
    {
      title: "AI Summaries",
      description: "Provides condensed summaries of chapters or lecture notes.",
      icon: (
        <Loader size={48} className="p-3.5 rounded-full border border-[#000]" />
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="container flex flex-col items-center gap-4">
        <h2 className="text-4xl text-center">
          Take a Look at <br /> Omnistudy's Features
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-4 px-8 py-2">
            {features.map((feature, i) => (
              <CarouselItem key={i} className="basis-1/3">
                <Card className="bg-[#f5f5f5] flex flex-col justify-between h-[300px] p-4">
                  {feature.icon}
                  <div className="flex flex-col">
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
