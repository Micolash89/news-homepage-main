import { newItems, topItems } from "@/lib/definitions/const";
import NewComponent from "./NewComponent";
import AboutComponent from "./AboutComponent";

import TopComponent from "./TopComponent";

export default function Main() {
  return (
    <>
      <main className="flex flex-col gap-10">
        <AboutComponent />

        <section className="p-5 bg-very-dark-blue ">
          <h3 className="capitalize text-3xl font-bold text-primary-orange mb-7">
            New
          </h3>
          <div className="flex flex-col gap-7">
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

        <section className="flex flex-col gap-7">
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
