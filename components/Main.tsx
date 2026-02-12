import Image from "next/image";

export default function Main() {
  return (
    <>
      <main>
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

        <section>
          <h3>New</h3>
          <div>
            <h4>Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <h4>The Downsides of AI Artistry</h4>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <h4>Is VC Funding Drying Up?</h4>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>

        <section>
          01 Reviving Retro PCs What happens when old PCs are given modern
          upgrades? 02 Top 10 Laptops of 2022 Our best picks for various needs
          and budgets. 03 The Growth of Gaming How the pandemic has sparked
          fresh opportunities.
        </section>
      </main>
    </>
  );
}
