import { newItems, topItems } from "@/lib/definitions/const";
import NewComponent from "./NewComponent";
import AboutComponent from "./AboutComponent";

import TopComponent from "./TopComponent";

export default function Main() {
  return (
    <>
      <main className="flex flex-col gap-10 md:grid grid-cols-3 grid-rows-1 ">
        <AboutComponent />

        <section className="p-5 md:p-7 bg-very-dark-blue md:row-span-1 md:h-[620]">
          <h3 className="capitalize text-3xl md:text-5xl font-bold text-primary-orange mb-7 ">
            New
          </h3>
          <div className="flex flex-col gap-7 md:gap-0 md:justify-between md:h-[450]">
            {newItems &&
              newItems.map((e, index) => (
                <div key={index + "new-item" + e.title}>
                  <NewComponent
                    {...e}
                    cant={newItems.length}
                    index={index + 1}
                  />
                </div>
              ))}
          </div>
        </section>

        <section className="flex flex-col gap-7 md:col-span-3 md:flex-row">
          {topItems &&
            topItems.length > 0 &&
            topItems.map((e, index) => (
              <div key={index + e.title}>
                <TopComponent {...e} index={index + 1} />
              </div>
            ))}
        </section>
      </main>
    </>
  );
}
