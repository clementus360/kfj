import AddHouse from "./AddCar";
import { ItemCard } from "../ItemCard";

export default async function Page() {
    return (
        <section className="flex flex-col gap-8 px-32 bg-slate-100 rounded-lg py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                <ItemCard />
            </div>

        </section>
    );
}
