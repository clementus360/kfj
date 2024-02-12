import { house } from "@/utils/types";
import { fetchHouses } from "@/utils/data";
import { FeaturedHouseCarousel } from "./FeaturedHouseCarousel";

export async function FeaturedHouses() {

  let houseList: Array<house> = await fetchHouses();

  return (
    <section className="flex flex-col gap-8 px-8 py-16 lg:px-32">
      <div>
        <h2 className="text-2xl font-black">OUR FEATURED LISTINGS</h2>
        <p className="text-sm text-slate-700 font-light w-10/12 lg:w-4/12">Discover our featured listings and find the perfect home that matches your lifestyle and aspirations.</p>
      </div>

      {houseList && <FeaturedHouseCarousel houseList={houseList} />}
    </section>
  );
}
