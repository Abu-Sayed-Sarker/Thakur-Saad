"use client"

import { whyChooseUsData } from "@/data";
import { motion } from "framer-motion";
import { Clock, Heart, Trophy } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  heart: Heart,
  clock: Clock,
};

export function WhyChooseUs() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-24">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {whyChooseUsData.title}
          </h2>
          <p className="mt-4 text-gray-400">{whyChooseUsData.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whyChooseUsData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-main-secondary/20"
              >
                <IconComponent className="mb-4 h-12 w-12 text-main-secondary" />
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
