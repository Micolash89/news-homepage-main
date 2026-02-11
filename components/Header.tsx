import { headerItemsType } from "../app/lib/definitions/types";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="flex justify-end sm:block">
     
      <HeaderDesktop/>

      <HeaderMobile/>
    </header>
  );
}


export function ItemsLinks({title,name,href  }: headerItemsType) {
  return (
    <a
      href=""
      className="cursor-pointer capitalize text-dark-grayish-blue font-medium hover:text-primary-orange"
    >
      {" "}
      {title}{" "}
    </a>
  );
}