import { headerItems } from "../app/lib/definitions/const";
import { ItemsLinks } from "./Header";
 
 export default function HeaderDesktop() {
   return (
     <section className="hidden sm:flex justify-between text-base  ">
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
 
