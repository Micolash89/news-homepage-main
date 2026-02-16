import {  PrompsNewItemsType } from "@/lib/definitions/types";
import Link from "next/link";

export default function NewComponent({
  title,
  description,
  href,
  cant,
  index,
}: PrompsNewItemsType) {
  return (
    <Link href={href} className="text-white hover:cursor-pointer group flex flex-col gap-2 ">
      <h4 className="font-bold text-xl md:text-2xl group-hover:text-primary-orange">{title}</h4>
      <p className={`text-base text-grayish-blue font-extralight border-b border-b-dark-grayish-blue leading-7 ${cant!==index ? "border-b pb-7 md:pb-12":" border-none pb-0"}`}>
        {description}
      </p>
    </Link>
  );
}
