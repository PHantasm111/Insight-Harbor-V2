"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "~/components/imageSlider";
import { AuroraBackground } from "~/components/ui/aurora-bg";
import { Cover } from "~/components/ui/cover";
import { images } from "~/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-sans font-bold dark:text-white text-center">
            Build Your <Cover>DataLake</Cover> to simplify your data management
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is Insight Harbor.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            onClick={() => {
              const element = document.getElementById("carousel");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            Find it out
          </button>
        </motion.div>
      </AuroraBackground>

      {/* Carousel */}
      <section id="carousel">
        <h1 className="text-3xl md:text-7xl font-sans font-bold dark:text-white text-center py-8">
          Key Features
        </h1>
        <div>
          <ImageSlider images={images} />
        </div>
      </section>


    </>
  );
}
