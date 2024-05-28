import React from "react";
import { Card } from "../ui/Card";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      name: "Jamison Grudem",
      role: "founder/CEO",
      linkedIn: "https://www.linkedin.com/in/jamisongrudem/",
    },
    {
      name: "Owen Kanzler",
      role: "co-founder/CMTO",
      linkedIn: "https://www.linkedin.com/in/owen-kanzler-b332a2279/",
    },
  ];

  return (
    <section className="py-16">
      <div className="container flex flex-col gap-12">
        <h2 className="text-4xl text-center">
          Meet the Omnistudy team, <br /> masters of innovation and excellence.
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {teamMembers.map((member, i) => (
            <Card
              key={i}
              className="bg-[#000] h-[350px] flex items-end justify-between p-4"
            >
              <div className="p-4 bg-[#fff] rounded-lg">
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-[#868686]">{member.role}</p>
                </div>
              </div>
              <Link to={member.linkedIn}>
                <div className="p-4 bg-[#fff] rounded-lg hover:bg-[#00adb5] hover:text-[#fff] transition-all duration-300">
                  <Linkedin size={16} />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
