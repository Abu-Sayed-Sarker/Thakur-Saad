"use client"

import { testimonialsData } from "@/data";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-24">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {testimonialsData.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-main-secondary/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-main-secondary" />
              </div>
              <p className="mb-4 text-gray-300">{testimonial.text}</p>
              <div className="flex items-center space-x-3">
                {/* <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                /> */}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-main-secondary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
