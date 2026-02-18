"use client";

import { newItems, topItems } from "@/lib/definitions/const";
import NewComponent from "./NewComponent";
import AboutComponent from "./AboutComponent";
import TopComponent from "./TopComponent";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <main className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8">
      <AboutComponent />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-5 md:p-7 bg-very-dark-blue md:row-span-1 flex flex-col"
      >
        <h3 className="capitalize text-3xl md:text-4xl font-bold text-primary-orange mb-7">
          New
        </h3>
        <div className="flex flex-col gap-7 flex-1 justify-between">
          {newItems &&
            newItems.map((e, index) => (
              <NewComponent
                key={index + "new-item" + e.title}
                {...e}
                cant={newItems.length}
                index={index + 1}
              />
            ))}
        </div>
      </motion.section>

      <section className="flex flex-col gap-7 md:col-span-3 md:flex-row md:gap-8">
        {topItems &&
          topItems.length > 0 &&
          topItems.map((e, index) => (
            <div key={index + e.title} className="flex-1">
              <TopComponent {...e} index={index + 1} />
            </div>
          ))}
      </section>
    </main>
  );
}
