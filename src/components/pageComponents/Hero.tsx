import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="pt-[12rem] bg-[#d9d9d9]">
      <div className="container flex flex-col items-center justify-center h-full text-center gap-16">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-6xl">
            Your one-stop platform <br /> for all your educational needs.
          </h1>
          <p className="max-w-xl">
            Discover personalized companions, adaptive schedules, and real-time
            feedback for an unparalleled learning experience. Elevate your
            studies now!
          </p>
          <div className="flex gap-4">
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 rounded-md bg-[#00adb5] text-white shadow-lg flex flex-row items-center gap-x-1"
            >
              Get Started
            </motion.a>
            <motion.a
              href="https://app.omnistudy.io/login"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 rounded-md bg-[#34354a] text-white shadow-lg flex flex-row items-center gap-x-1"
            >
              Login
            </motion.a>
          </div>
        </div>
        <div className="shadow-lg rounded-t-2xl overflow-hidden">
          <img src={dashboard} alt="Omnistudy dashboard" />
        </div>
      </div>
    </section>
  );
}
