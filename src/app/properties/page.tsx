import House from "./House";

// import { fetchHouses } from "@/utils/data";
import { house } from "@/utils/types";

import Search from "./Search";
import { Suspense } from "react";
import { fetchHouses } from "@/utils/data";
import { DocumentData } from "firebase/firestore";

export default async function Properties({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';
    let houseList: Array<house> = await fetchHouses()

    if (query) {
        houseList = houseList.filter((house) =>
            house.location.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <section className="absolute top-0 w-screen">
            <div className="flex items-end justify-center h-[80vh] lg:h-[50vh] bg-red-300">
                <div className="flex flex-col gap-8 px-8 py-8 lg:w-3/6 ">
                    <h1 className="font-bold text-6xl text-center">FIND A PERFECT DREAM HOUSE</h1>

                    <Search placeholder={"Location ex: Kigali, Kabeza, etc..."} />
                </div>
            </div>

            <div className="px-8 lg:px-32 py-16 w-full">
                <div className="flex flex-wrap justify-start gap-8 w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        {houseList?.map((house: house, key) => <House key={key} {...house} />)}
                    </Suspense>
                </div>
            </div>
        </section>
    );
}