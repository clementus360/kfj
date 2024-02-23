import AddHouse from "./AddHouse";
import { fetchHouses } from "@/utils/data";
import { house } from "@/utils/types";
import { HouseCard } from "./houseCard";
import { Suspense } from "react";

export default async function Page() {

    const { houses, unsubscribe } = await fetchHouses()

    return (
        <section className="flex flex-col gap-8 px-8 lg:px-32 bg-slate-100 rounded-md py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    {houses.map((house,key) => <HouseCard key={key} {...house} /> )}
                </Suspense>
            </div>

        </section>
    );
}
