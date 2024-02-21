
import { car } from "@/utils/types";

import Search from "./Search";
import { Suspense } from "react";
import { fetchCars } from "@/utils/data";
import CarCard from "./Car";

export default async function Properties({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {

    const query = searchParams?.query || '';
    let carList: Array<car> = await fetchCars()

    if (query) {
        carList = carList.filter((car) =>
            car.address.area.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <section className="w-screen max-w-[1440px] m-auto">
            <div className={`relative flex items-end justify-center h-[80vh] lg:h-[50vh] bg-[url("https://firebasestorage.googleapis.com/v0/b/broker-14bcb.appspot.com/o/detailed-shot-car-wheels-tires.jpg?alt=media&token=e92ab2b1-b99d-4aac-83a5-71ecc1cb92e7")] bg-cover bg-bottom`}>
                <div className="relative z-20 flex flex-col gap-8 px-8 py-8 lg:w-3/6 ">
                    <h1 className="font-bold text-6xl text-center text-white">FIND YOUR DREAM CAR</h1>

                    <Search placeholder={"Location ex: Kigali, Kabeza, etc..."} />
                </div>

                <div className="absolute z-0 top-0 left-0 bg-gradient-to-t from-black to-transparent  h-full w-full"></div>
            </div>

            <div className="px-8 lg:px-32 py-16 w-full">
                <div className="flex flex-wrap justify-start gap-8 w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        {carList?.map((car: car, key) => <CarCard key={key} {...car} />)}
                    </Suspense>
                </div>
            </div>
        </section>
    );
}

