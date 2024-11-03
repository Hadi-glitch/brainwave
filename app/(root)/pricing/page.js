"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useAppContext } from "@/app/context/AppContext";
import Checkout from "@/components/Checkout";

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const { userId } = useAppContext();
  const isLoggedIn = !!userId;

  const renderButton = (plan, index) => {
    if (index === 0) {
      if (isLoggedIn) {
        return (
          <Button
            className="w-full py-3 bg-gray-400 text-white cursor-not-allowed"
            disabled
          >
            Current Plan
          </Button>
        );
      }
      return (
        <Link href="/sign-up">
          <Button className="w-full py-3 bg-purple-600 text-white hover:bg-purple-700">
            {plan.buttonLabel}
          </Button>
        </Link>
      );
    }

    if (index === 1) {
      return (
        <Checkout plan={"Pro"} amount={15} credits={1500} buyerId={userId} />
      );
    }

    return (
      <Link href={plan.buttonLabel === "Get Started" ? "/sign-up" : "#"}>
        <Button
          className={`w-full py-3 ${
            plan.popular
              ? "bg-white text-purple-600 hover:bg-gray-100"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {plan.buttonLabel}
        </Button>
      </Link>
    );
  };

  return (
    <section className="py-20 mt-20 h-[92vh]" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-n-1 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-n-3 max-w-2xl mx-auto">
            Find the perfect plan to unleash the full power of AI with
            Brainwave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative p-8 rounded-2xl transition-all duration-300 ease-in-out ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-xl"
                  : "bg-n-15 text-white shadow-md hover:shadow-xl"
              } ${hoveredPlan === index ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span className="text-xl ml-2">/{plan.period}</span>
                )}
              </div>
              <p
                className={`mb-6 ${
                  plan.popular ? "text-gray-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-green-500" />
                    <span>{feature.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.info}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
              {renderButton(plan, index)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
