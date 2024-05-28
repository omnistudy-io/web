import { Card } from "../ui/Card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PlanCard(props: PlanCardProps) {
  return (
    <Card className="bg-[#f5f5f5] p-4 flex flex-col justify-between h-[500px]">
      <div className="flex flex-col">
        <h3 className="text-xl text-[#00adb5] font-bold mb-4">{props.plan}</h3>
        <span>pause or cancel anytime</span>
        <h2 className="text-4xl mb-6">
          ${props.price} <b className="text-base">/mo</b>
        </h2>
        <div className="flex flex-col gap-4">
          {props.features.map((feature, i) => (
            <div key={i} className="flex gap-2">
              <Check
                strokeWidth={3}
                className="w-[20px] h-[20px] border-[1.9px] border-[#00adb5] p-[.125rem] rounded-full text-[#00adb5]"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 px-6 rounded-md bg-[#00adb5] text-white shadow-lg flex flex-row justify-center"
        >
          Buy Now
        </motion.a>
        <Link
          to="/contact"
          className="text-sm text-[#868686] hover:text-[#00adb5] transition-all duration-300"
        >
          Questions?
        </Link>
      </div>
    </Card>
  );
}

type PlanCardProps = {
  plan: string;
  price: number;
  features: string[];
};
