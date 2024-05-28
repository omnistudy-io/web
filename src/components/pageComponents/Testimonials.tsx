import React from "react";
import { Card } from "../ui/Card";
import { Quote, User } from "lucide-react";

export default function Testimonials() {
  const testimonialsTop = [
    {
      name: "Owen Kanzler",
      school: "University of Minnesota",
      testimonial:
        "OmniStudy transformed my academic experience! With its personalized approach, I studied smarter, not longer, achieving remarkable results. Truly a game-changer!",
    },
    {
      name: "Olivia Williams",
      school: "University of Minnesota",
      testimonial:
        "Impressed by OmniStudy's impact! The real-time feedback and tailored materials optimized my study routine, resulting in improved grades. A must-have for students!",
    },
  ];

  const testimonialsBottom = [
    {
      name: "Alex Rodriguez",
      school: "University of Minnesota",
      testimonial:
        "OmniStudy redefined how I approach studies. The adaptive earning recommendations enhanced my understanding, making studying effective and enjoyable. Thank you!",
    },
    {
      name: "Emily Thompson",
      school: "University of Minnesota",
      testimonial:
        "As a busy student, OmniStudy was a lifesaver! The virtual companion and personalized schedules made learning enjoyable and efficient. Highly recommend!",
    },
  ];

  return (
    <section className="py-16 bg-[#d9d9d9]">
      <div className="container flex flex-col gap-4">
        <div className="flex gap-4">
          {testimonialsTop.map((testimonial, i) => (
            <Card
              key={i}
              className="p-4 bg-[#fff] flex flex-col gap-4 max-w-lg"
            >
              <Quote />
              <p>{testimonial.testimonial}</p>
              <div className="flex justify-end gap-3">
                <div className="flex flex-col text-right text-sm justify-center">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-[#868686]">{testimonial.school}</p>
                </div>
                <User
                  size={48}
                  className="p-3.5 rounded-full bg-[#34354a] text-[#fff]"
                />
              </div>
            </Card>
          ))}
        </div>
        <div className="flex gap-4 ml-auto">
          {testimonialsBottom.map((testimonial, i) => (
            <Card
              key={i}
              className="p-4 bg-[#fff] flex flex-col gap-4 max-w-lg"
            >
              <Quote />
              <p>{testimonial.testimonial}</p>
              <div className="flex justify-end gap-3">
                <div className="flex flex-col text-right text-sm justify-center">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-[#868686]">{testimonial.school}</p>
                </div>
                <User
                  size={48}
                  className="p-3.5 rounded-full bg-[#34354a] text-[#fff]"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
