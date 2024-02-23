import AddCar from "./AddCar";
import { fetchCars } from "@/utils/data";
import { CarCard } from "./carCard";
import { Suspense, useEffect, useState } from "react";
import { Unsubscribe } from "firebase/firestore";
import { car } from "@/utils/types";

export default async function Page() {

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
        <section className="flex flex-col gap-8 px-8 lg:px-32 bg-slate-100 rounded-md py-8">

            <AddCar />

            <div className="flex justify-between gap-4 flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    {cars.map((car, key) => <CarCard key={key} {...car} />)}
                </Suspense>
            </div>

        </section>
    );
}
