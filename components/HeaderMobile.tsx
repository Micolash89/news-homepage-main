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
import { motion } from "framer-motion";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-16 items-center justify-between md:hidden mb-10"
    >
      <Link href="/" aria-label="Home">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          height={50}
          width={50}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="bg-cover"
        />
      </Link>

      <div className="flex items-center">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-70 sm:w-87.5">
            <SheetHeader>
              <SheetTitle className="text-left"></SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-40 gap-6 h-full">
              {headerItems.map((e, index) => (
                <motion.div
                  key={e.name + index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.25 }}
                >
                  <ItemsLinks {...e} />
                </motion.div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
}
