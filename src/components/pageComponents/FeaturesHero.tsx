import { motion } from "framer-motion";
import globe from "../../assets/globe.svg";

export default function FeaturesHero() {
  return (
    <section className="bg-[#d9d9d9] pt-[12rem] pb-16">
      <div className="container flex">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-6xl">
            Revolutionizing Education <br /> with Innovative Features
          </h1>
          <p className="mb-4">
            Cutting-Edge Features for Everyone's Enhanced <br /> Learning
            Experiences
          </p>
          <div className="w-[130px]">
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 rounded-md bg-[#00adb5] text-white shadow-lg flex flex-row items-center gap-x-1"
            >
              Get Started
            </motion.a>
          </div>
        </div>
        <img
          src={globe}
          alt="Omnistudy global"
          className="w-[500px] h-[350px] object-cover object-top ml-auto"
        />
      </div>
    </section>
  );
}
