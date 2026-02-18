"use client";

import Link from "next/link";
import Image from "next/image";
import { headerItems } from "@/lib/definitions/const";
import { ItemsLinks } from "./Header";
import { motion } from "framer-motion";

export default function HeaderDesktop() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="hidden md:flex justify-between text-base items-center mb-10"
    >
      <Link href="/" aria-label="Home">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          height={50}
          width={50}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="bg-cover"
        />
      </Link>

      <nav aria-label="Main navigation">
        <ul className="flex gap-10">
          {headerItems.map((e, index) => (
            <li key={index + "elements-items-header"}>
              <ItemsLinks {...e} />
            </li>
          ))}
        </ul>
      </nav>
    </motion.section>
  );
}
