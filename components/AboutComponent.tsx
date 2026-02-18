"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-5 md:col-span-2 md:row-span-1"
    >
      <div className="overflow-hidden">
        <Image
          src="/assets/images/image-web-3-mobile.jpg"
          height={300}
          width={600}
          alt="Colorful 3D geometric shapes representing Web 3.0"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="w-full h-full object-cover md:hidden"
          priority
        />
        <Image
          src="/assets/images/image-web-3-desktop.jpg"
          height={300}
          width={800}
          alt="Colorful 3D geometric shapes representing Web 3.0"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="w-full h-full object-cover hidden md:block"
          priority
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:py-5">
        <h2 className="font-extrabold text-5xl md:text-7xl md:min-w-1/2 self-center text-very-dark-blue text-balance">
          The Bright Future of Web 3.0?
        </h2>
        <div className="flex flex-col gap-7 md:gap-0 md:justify-between">
          <p className="text-dark-grayish-blue font-medium md:text-lg leading-8">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#"
              className="inline-block hover:bg-very-dark-blue hover:text-off-white uppercase text-md text-center bg-primary-red text-off-white max-w-50 py-4 px-8 font-extrabold tracking-[3px] transition-colors duration-200"
            >
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
