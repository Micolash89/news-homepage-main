"use client";

import { PrompsNewItemsType } from "@/lib/definitions/types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewComponent({
  title,
  description,
  href,
  cant,
  index,
}: PrompsNewItemsType) {
  const isLast = cant === index;

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 0.15 + index * 0.08 }}
    >
      <Link
        href={href}
        className="text-off-white hover:cursor-pointer group flex flex-col gap-2"
      >
        <h4 className="font-bold text-xl md:text-2xl group-hover:text-primary-orange transition-colors duration-200">
          {title}
        </h4>
        <p
          className={`text-base text-grayish-blue font-extralight leading-7 ${
            !isLast ? "border-b border-b-dark-grayish-blue pb-7" : ""
          }`}
        >
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
