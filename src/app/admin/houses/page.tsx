import AddHouse from "./AddHouse";
import { fetchHouses } from "@/utils/data";
import { house, houseData } from "@/utils/types";
import { HouseCard } from "./houseCard";

export default async function Page() {

    let houseList: Array<house> = await fetchHouses();

    return (
        <section className="flex flex-col gap-8 px-8 lg:px-32 bg-slate-100 rounded-md py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                {houseList.map((house,key) => <HouseCard key={key} {...house} /> )}
            </div>

        </section>
    );
}
