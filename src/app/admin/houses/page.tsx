import AddHouse from "./AddHouse";
import { fetchHouses } from "@/utils/data";
import { ItemCard } from "../ItemCard";
import { house } from "@/utils/types";

export default async function Page() {

    let houseList: Array<house> = await fetchHouses();

    return (
        <section className="flex flex-col gap-8 px-32 bg-slate-100 rounded-lg py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                {houseList.map((house,key) => <ItemCard {...house} /> )}
            </div>

        </section>
    );
}
