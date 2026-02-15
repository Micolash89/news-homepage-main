import Link from "next/link";
import { headerItems } from "../lib/definitions/const";
import { ItemsLinks } from "./Header";
import Image from "next/image";
 
 export default function HeaderDesktop() {
   return (
     <section className="hidden md:flex justify-between text-base items-center mb-10">
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

        <nav>
          <ul className="flex gap-10">
            {headerItems.map((e, index) => (
              <li key={index + "elements-items-header"}>
                <ItemsLinks {...e} />
              </li>
            ))}
          </ul>
        </nav>
      </section>

   )
 }
 
