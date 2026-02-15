import { PrompsTopItemsType } from "@/lib/definitions/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopComponent({
  title,
  description,
  href,
  img,
  index,
}: PrompsTopItemsType) {
  return (
    <Link href={href} className="flex gap-10">
      <div className="overflow-hidden max-w-[100] max-h-[200]">
        <Image
          src={img}
          height={230}
          width={190}
          alt="logo"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="bg-cover  md:block"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h5 className="text-3xl text-primary-red font-extrabold">0{index}</h5>
        <h4 className="text-base font-extrabold text-very-dark-blue">
          {title}
        </h4>
        <p className="text-sm text-grayish-blue font-semibold leading-6">
          {description}
        </p>
      </div>
    </Link>
  );
}
