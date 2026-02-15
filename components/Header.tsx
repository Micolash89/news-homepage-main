import Link from "next/link";
import { HeaderItemsType } from "../lib/definitions/types";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="">
      <HeaderDesktop />

      <HeaderMobile />
    </header>
  );
}

export function ItemsLinks({ title, name, href }: HeaderItemsType) {
  return (
    <Link
      href={href}
      className="ml-7 sm:ml-0 cursor-pointer capitalize text-very-dark-blue sm:text-dark-grayish-blue font-medium hover:text-primary-orange text-xl sm:text-base"
      title={name}
    >
      {" "}
      {title}{" "}
    </Link>
  );
}
