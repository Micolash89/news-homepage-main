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
import { headerItems } from "@/app/lib/definitions/const";
import { ItemsLinks } from "./Header";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-16 items-center justify-between md:hidden ">

      <span>W</span>

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
                {/* {headerItems.map((item, index) => (
                  <Link
                    key={item.href + index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-lg font-medium" title={item.title}>
                      {item.title}
                    </span>
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))} */}

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
