"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { headerItems } from "@/lib/definitions/const";
import { ItemsLinks } from "./Header";
import Image from "next/image";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-16 items-center justify-between md:hidden mb-10">
        <Link href="/" className="">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            height={50}
            width={50}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="bg-cover "
          />
        </Link>

        <div className="flex  items-center ">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70 sm:w-87.5">
              <SheetHeader>
                <SheetTitle className="text-left"></SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-40 gap-3 h-full">
                {headerItems.map((e, index) => (
                  <div key={e.name + index}>
                    <ItemsLinks {...e} />
                  </div>
                ))}

                {/* <div className="border-t border-border my-4" /> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
