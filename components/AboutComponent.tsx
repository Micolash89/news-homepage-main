import Image from "next/image";
import Link from "next/link";


export default function AboutComponent() {
  return (
    <section className="flex flex-col gap-5 md:col-span-2 md:row-span-1 ">
      <div className="">
        <Image
          src={"/assets/images/image-web-3-mobile.jpg"}
          height={20}
          width={20}
          alt="logo"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="bg-cover w-full h-full md:hidden"
        />
        <Image
          src={"/assets/images/image-web-3-desktop.jpg"}
          height={20}
          width={20}
          alt="logo"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="bg-cover w-full h-full hidden md:block"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:py-5">
        <h2 className="font-extrabold text-5xl md:text-7xl md:min-w-1/2 self-center">
          The Bright Future of Web 3.0?
        </h2>
        <div className="flex flex-col gap-7 md:gap-0 md:justify-between">
          <p className="text-dark-grayish-blue font-medium md:text-lg leading-8">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Link href={"#"} className="hover:cursor-pointer hover:bg-very-dark-blue hover:text-white uppercase text-md text-center bg-primary-red max-w-50 py-4 font-extrabold tracking-[3] ">
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
