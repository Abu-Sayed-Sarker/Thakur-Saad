"use client"

import { Button } from "@/components/ui/button";
import { servicesData } from "@/data";
import { motion } from "framer-motion";
import {
  Bot,
  Code,
  MessageCircle,
  Plug,
  Settings,
  Smartphone,
} from "lucide-react";

const iconMap = {
  code: Code,
  bot: Bot,
  smartphone: Smartphone,
  plug: Plug,
  settings: Settings,
  "message-circle": MessageCircle,
};

export function ServicesSection() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-24">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {servicesData.title}
          </h2>
          <p className="mt-4 text-xl text-main-secondary">
            {servicesData.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            {servicesData.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-main-secondary/50 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-main-secondary to-teal-500">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-gray-400">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-mainscoborder-main-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <Button className="w-full bg-gradient-to-r from-main-secondary to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
                  Get Started
                </Button> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
