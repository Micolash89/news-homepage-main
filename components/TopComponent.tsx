"use client";

import { PrompsTopItemsType } from "@/lib/definitions/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TopComponent({
  title,
  description,
  href,
  img,
  index,
}: PrompsTopItemsType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
    >
      <Link href={href} className="flex gap-6 group">
        <div className="overflow-hidden w-[100] h-[130] shrink-0">
          <Image
            src={img}
            height={130}
            width={100}
            alt={title}
            sizes="100px"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between py-1">
          <span className="text-3xl text-primary-red font-extrabold">
            {`0${index}`}
          </span>
          <h4 className="text-base font-extrabold text-very-dark-blue group-hover:text-primary-red transition-colors duration-200">
            {title}
          </h4>
          <p className="text-sm text-dark-grayish-blue font-medium leading-6">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
