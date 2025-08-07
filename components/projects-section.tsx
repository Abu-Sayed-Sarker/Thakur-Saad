"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const defaultImage = `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

export function ProjectsSection() {
  const [showAllProject, setShowAllProject] = useState(false);
  const visibleProjects = showAllProject ? projects : projects.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-black  to-main-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-main-secondary to-teal-500 text-white border-0 mb-4">
            Our Work Sample
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful AI projects that have
            transformed businesses across various industries.
          </p>
        </div>

        <div className="space-y-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-black overflow-hidden w-full hover:shadow-xl transition-all duration-300 border border-gray-400/40 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:flex ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-5/12">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={project.image || defaultImage}
                      alt={project.title}
                      fill
                      className="object-cover object-top h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                <div className="lg:w-7/12 p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge
                      variant="outline"
                      className="border-main-secondary text-main-secondary-600 w-fit"
                    >
                      {project.category}
                    </Badge>

                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link  href={project.link} className={cn( "bg-gradient-to-r from-main-secondary to-teal-600 hover:from-main-secondary/70 hover:to-teal-700",  buttonVariants())}>
                        <ExternalLink className="h-4 md:block hidden w-4 mr-2" />
                        View Project
                      </Link>
                      <Button
                        variant="outline"
                        className="border-main-secondary text-main-secondary-600 hover:bg-main-secondary/20 dark:hover:bg-main-secondary/20 bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 md:block hidden" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-main-secondary text-main-secondary-600 hover:bg-main-secondary/20 dark:hover:bg-main-secondary/20 bg-transparent"
            onClick={() => setShowAllProject(!showAllProject)}
          >
            View All Projects
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
