"use client";

import googleLogo from "@/assets/google_logo.png";
import { clientsData } from "@/data";
import Image from "next/image";

export function ClientsSection() {
  return (
    <section className="relative z-10  pb-16 py-5">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            {clientsData.title}
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-12">
            {[...clientsData.clients, ...clientsData.clients].map(
              (client, index) => (
                <div key={index} className="flex-shrink-0 flex items-center ">
                  <Image
                    src={googleLogo}
                    alt={client.name}
                    className="h-12 w-auto opacity-60 hover:opacity-100"
                  />
                  <p className="text-sm font-mono font-bold">Google</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
