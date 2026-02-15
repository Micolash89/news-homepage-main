import { footerItemsType } from "@/lib/definitions/const";
import { PromptsItemsFooterType } from "@/lib/definitions/types";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-5 text-xs text-dark-grayish-blue text-center">
      <div>
        Challenge by{" "}
        <FooterLinks {...footerItemsType[0]} />. Coded by{" "}
        <FooterLinks {...footerItemsType[1]} />.
      </div>
    </footer>
  );
}

export function FooterLinks({ title, url }: PromptsItemsFooterType) {
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank" className="capitalize hover:text-primary-orange text-very-dark-blue">
      {title}
    </Link>
  );
}
