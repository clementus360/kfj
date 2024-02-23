import House from "./House";
import { house } from "@/utils/types";

import Search from "./Search";
import { Suspense } from "react";
import { fetchHouses } from "@/utils/data";

export default async function Properties({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';
    
    let { houses, unsubscribe } = await fetchHouses()

    if (query) {
        houses = houses.filter((house) =>
            house.address.area.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <section className="w-screen max-w-[1440px] m-auto">
            <div className={`relative flex items-end justify-center h-[80vh] lg:h-[50vh] bg-[url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/2150799631-2.jpg?alt=media&token=9af859ed-ca9c-4dcd-9a09-2ba0e62ec113")] bg-cover`}>
                <div className="relative z-20 flex flex-col gap-8 px-8 py-8 lg:w-3/6 ">
                    <h1 className="font-extrabold text-6xl text-center text-white">FIND THE PERFECT DREAM HOUSE</h1>

                    <Search placeholder={"Location ex: Kigali, Kabeza, etc..."} />
                </div>
                <div className="absolute z-0 top-0 left-0 bg-gradient-to-t from-black to-transparent  h-full w-full">

                </div>
            </div>

            <div className="px-8 lg:px-32 py-16 w-full">
                <div className="flex flex-wrap justify-start gap-8 w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        {houses?.map((house: house, key) => <House key={key} {...house} />)}
                    </Suspense>
                </div>
            </div>
        </section>
    );
}