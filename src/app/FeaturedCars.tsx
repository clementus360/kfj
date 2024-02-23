"use client"

import { car } from "@/utils/types";
import { fetchCars } from "@/utils/data";
import { FeaturedCarCarousel } from "./FeaturedCarCarousel";

export async function FeaturedCars() {

  let carList: Array<car> = await fetchCars();

  return (
    <section className="flex flex-col gap-8 px-8 py-16 lg:px-32">
      <div>
        <h2 className="text-2xl font-black">TOP VEHICLE PICKS</h2>
        <p className="text-sm text-slate-700 font-light w-10/12 lg:w-4/12">Browse through our curated collection of exquisite vehicles, crafted to elevate your driving experience and reflect your unique style and ambitions.</p>
      </div>

      {carList && <FeaturedCarCarousel carList={carList} />}
    </section>
  );
}
