import { headerItems } from "../app/lib/definitions/const";
import { ItemsLinks } from "./Header";
 
 export default function HeaderDesktop() {
   return (
     <section className="hidden md:flex justify-between text-base  ">
        <a href="" className="">
          w
          {/* <Image
          src="/assets/images/logo.svg"
          alt="logo W."
          fill
          className="object-cover "
           sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          /> */}
        </a>

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
 
