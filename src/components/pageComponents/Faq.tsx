import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordian";

export default function Faq() {
  const questions = [
    {
      question: "How do I set up my OmniStudy account?",
      answer:
        "Visit our website, click 'Sign Up,' and follow the simple steps to create your personalized account for a seamless start.",
    },
    {
      question: "Can I use OmniStudy for any subject?",
      answer:
        "Absolutely! OmniStudy caters to a wide range of subjects, tailoring its features to your unique learning style and academic needs.",
    },
    {
      question: "How does OmniStudy provide personalized study plans?",
      answer:
        "OmniStudy analyzes your learning style and preferences to curate customized study materials and schedules, maximizing your study efficiency.",
    },
    {
      question: "What kind of real-time feedback does OmniStudy offer?",
      answer:
        "OmniStudy provides instant feedback on your progress, highlighting strengths and areas for improvement. It adapts recommendations to enhance your learning journey continuously.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container flex gap-16">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-4xl">Fequently Asked Questions</h2>
          <p>
            Everything you need to know about OmniStudy. Can't find the answer
            you're looking for? Please,{" "}
            <a href="/contact" className="underline">
              get in touch.
            </a>
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="flex-1 flex flex-col gap-4"
        >
          {questions.map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{q.question}</AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
