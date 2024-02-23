"use client"

import AddHouse from "./AddHouse";
import { fetchHouses } from "@/utils/data";
import { house } from "@/utils/types";
import { HouseCard } from "./houseCard";
import { Suspense, useEffect, useState } from "react";
import { Unsubscribe } from "firebase/firestore";

export default function Page() {

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

    return (
        <section className="flex flex-col gap-8 px-8 lg:px-32 bg-slate-100 rounded-md py-8">

            <AddHouse />

            <div className="flex justify-between gap-4 flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    {houses?.map((house: house, key) => <HouseCard key={key} {...house} />)}
                </Suspense>
            </div>

        </section>
    );
}
