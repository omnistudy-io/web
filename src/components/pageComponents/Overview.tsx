import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="py-16">
      <div className="container flex gap-4">
        <h2 className="text-4xl basis-1/3">What is Omnistudy</h2>
        <div className="flex flex-col gap-4 basis-2/3">
          <p>
            At the heart of our mission is a dedication to revolutionizing the
            learning experience. We envision leveraging the power of technology
            to create unparalleled educational experiences that transcend
            traditional boundaries. Recognizing that learning is an
            ever-evolving journey, our platform is designed to facilitate
            effective and engaging education for everyone, anywhere.
          </p>
          <p className="mb-4">
            As a critical part of the Google Student Developer Club at the
            University of Minnesota, we are committed to developing a platform
            that stand at the intersection of technology and education. The
            goals we hold are at the ethos of GSDC, aiming to deliver an
            unparalleled learning experience.
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
      </div>
    </section>
  );
}
