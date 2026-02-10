import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between text-base">
      <a href="" className="">
        w
        {/* <Image
          src="/assets/images/logo.svg"
          alt="logo W."
          fill
          className="object-cover "
          
        /> */}
      </a>

      <nav>
        <ul className="flex gap-10">
          <li>
            <a href="" className="cursor-pointer capitalize text-dark-grayish-blue font-medium"> Home </a>
          </li>
          <li>
            <a href=""> New </a>
          </li>
          <li>
            <a href=""> Popular </a>
          </li>
          <li>
            <a href=""> Trending </a>
          </li>
          <li>
            <a href=""> Categories </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
