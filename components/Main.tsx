import { newItems } from "@/lib/definitions/const";
import NewComponent from "./NewComponent";
import AboutComponent from "./AboutComponent";

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
