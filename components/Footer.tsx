"use client";

import { footerItemsType } from "@/lib/definitions/const";
import { PromptsItemsFooterType } from "@/lib/definitions/types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-5 text-xs text-dark-grayish-blue text-center"
    >
      <div>
        {"Challenge by "}
        <FooterLinks {...footerItemsType[0]} />
        {". Coded by "}
        <FooterLinks {...footerItemsType[1]} />
        {"."}
      </div>
    </motion.footer>
  );
}

export function FooterLinks({ title, url }: PromptsItemsFooterType) {
  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="capitalize hover:text-primary-orange text-very-dark-blue transition-colors duration-200"
    >
      {title}
    </Link>
  );
}
