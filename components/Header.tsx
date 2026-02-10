import Image from "next/image";
import React from "react";
import { PrompsItemLinks } from "../app/lib/definitions/types";
import { headerItems } from "../app/lib/definitions/const";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header>
     
      <HeaderDesktop/>

      <HeaderMobile/>
    </header>
  );
}


export function ItemsLinks({ item }: PrompsItemLinks) {
  return (
    <a
      href=""
      className="cursor-pointer capitalize text-dark-grayish-blue font-medium hover:text-primary-orange"
    >
      {" "}
      {item}{" "}
    </a>
  );
}