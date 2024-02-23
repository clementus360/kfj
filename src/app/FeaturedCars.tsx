"use client"

import { car } from "@/utils/types";
import { fetchCars } from "@/utils/data";
import { FeaturedCarCarousel } from "./FeaturedCarCarousel";
import { Suspense, useState, useEffect } from "react";
import { Unsubscribe } from "firebase/firestore";

export function FeaturedCars() {

  const [cars, setCars] = useState<car[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
  
    const fetchData = async () => {
      try {
        const result = await fetchCars();
        setCars(result.cars);
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

  return (
    <section className="flex flex-col gap-8 px-8 py-16 lg:px-32">
      <div>
        <h2 className="text-2xl font-black">TOP VEHICLE PICKS</h2>
        <p className="text-sm text-slate-700 font-light w-10/12 lg:w-4/12">Browse through our curated collection of exquisite vehicles, crafted to elevate your driving experience and reflect your unique style and ambitions.</p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {cars && <FeaturedCarCarousel carList={cars} />}
      </Suspense>
    </section>
  );
}
