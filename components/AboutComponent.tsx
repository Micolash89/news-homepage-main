import Image from 'next/image'

export default function AboutComponent() {
  return (
      <section className="flex flex-col gap-5">
          <div>
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

          <div className="flex flex-col gap-3">
            <h2 className="font-extrabold text-5xl">
              The Bright Future of Web 3.0?
            </h2>
            <div className="flex flex-col gap-7">
              <p className="text-dark-grayish-blue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="hover:cursor-pointer uppercase text-md bg-primary-red max-w-50 py-4 font-extrabold tracking-[3]">
                Read more
              </button>
            </div>
          </div>
        </section>
  )
}
