import AddHouse from "./AddCar";
import { fetchCars } from "@/utils/data";
import { car } from "@/utils/types";
import { CarCard } from "./carCard";

export default async function Page() {

    let carList: Array<car> = await fetchCars();

    return (
        <section className="flex flex-col gap-8 px-32 bg-slate-100 rounded-md py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                {carList.map((car,key) => <CarCard key={key} {...car} /> )}
            </div>

        </section>
    );
}
