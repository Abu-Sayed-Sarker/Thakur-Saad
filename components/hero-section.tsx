"use client";

import arifulsPhoto from "@/assets/ariful-photo.png";
import { heroData } from "@/data";
import { motion } from "framer-motion";
import { Award, Clock, MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import { AnimatedBeam } from "./animated-beam";
import FramerSpotlight from "./framer-spotlight";

export function HeroSection() {
  return (
    <section
    id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgb(78, 215, 241, 0.3), transparent 50%), #000000",
      }}
    >
      <FramerSpotlight />

      {/* Animated Background */}
      <AnimatedBeam />

      {/* Content */}
      <div className="container relative z-[3] px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {heroData.title}
              </h1>
              <h2 className="text-2xl font-semibold text-main-secondary">
                {heroData.subtitle}
              </h2>
              <p className="max-w-2xl text-gray-400 sm:text-lg">
                {heroData.description}
              </p>
            </div>

            {/* Fiverr Stats */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 font-semibold">
                    {heroData.fiverr.rating}
                  </span>
                </div>
                <span className="text-gray-400">
                  ({heroData.fiverr.reviews} reviews)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {heroData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-main-secondary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Avg. response: {heroData.fiverr.responseTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{heroData.fiverr.orders}+ orders completed</span>
                </div>
              </div>
            </div>

            {/* <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-lg text-white hover:from-emerald-600 hover:to-teal-600">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-lg text-white hover:bg-white/10 bg-transparent"
              >
                View Portfolio
              </Button>
            </div> */}
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5  backdrop-blur-sm overflow-hidden">
                <div className="text-center">
                  <div className="relative mx-auto mb-6">
                    <Image
                      src={arifulsPhoto}
                      alt="Profile"
                      className="h-full w-full object-cover origin-top top-0 lg:h-[400px] lg:w-[400px]"  // Added larger size for desktop
                    />
                    {/* <div className="absolute -bottom-2 -right-2 rounded-full bg-emerald-500 p-2">
                      <Award className="h-4 w-4 text-white" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
