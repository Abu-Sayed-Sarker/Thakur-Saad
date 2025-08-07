"use client";

import { teamData } from "@/data";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TeamSection() {
  return (
    <section id="team" className="relative z-10 border-t border-white/10 bg-black py-24">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {teamData.title}
          </h2>
          <p className="mt-4 text-gray-400">{teamData.subtitle}</p>
        </div>

        <Swiper
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 "
          spaceBetween={50}
          slidesPerView={3} 
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {teamData.members.map((member, index) => (
            <SwiperSlide
              key={index}
              className={`group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-main-secondary/50 hover:bg-white/10 $`}
              
            >
              <div className="text-center">
                <div className="relative mx-auto mb-4 size-36">
                  <Image
                    src={member.image }
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover object-top"
                                      />
                  
                </div>
                <h3 className="mb-1 font-bold">{member.name}</h3>
                <p className="mb-3 text-sm text-main-secondary">
                  {member.role}
                </p>
                {/* <div className="flex flex-wrap justify-center gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-main-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
