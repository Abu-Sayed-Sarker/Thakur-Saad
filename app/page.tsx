"use client"

import { ClientsSection } from "@/components/clients-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      {/* <ClientsSection /> */}
      <WhyChooseUs />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
