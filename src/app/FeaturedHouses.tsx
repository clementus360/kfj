"use client"

import { fetchHouses } from "@/utils/data";
import { FeaturedHouseCarousel } from "./FeaturedHouseCarousel";
import { Suspense, useEffect, useState } from "react";
import { house } from "@/utils/types";
import { Unsubscribe } from "firebase/firestore";

export function FeaturedHouses() {

  const [houses, setHouses] = useState<house[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
  
    const fetchData = async () => {
      try {
        const result = await fetchHouses();
        setHouses(result.houses);
        unsubscribe = result.unsubscribe;
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };
  
    fetchData();
  
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // let { houses, unsubscribe } = await fetchHouses()

  return (
    <section className="flex flex-col gap-8 px-8 py-16 lg:px-32">
      <div>
        <h2 className="text-2xl font-black">OUR FEATURED LISTINGS</h2>
        <p className="text-sm text-slate-700 font-light w-10/12 lg:w-4/12">Discover our featured listings and find the perfect home that matches your lifestyle and aspirations.</p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {houses && <FeaturedHouseCarousel houseList={houses} />}
      </Suspense>
    </section>
  );
}
