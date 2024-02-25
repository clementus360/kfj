"use client"

import { fetchAds } from "@/utils/data";
import { ad } from "@/utils/types";
import AddAd from "./AddAd";
import { AdCard } from "./adCard";
import { Suspense, useEffect, useState } from "react";
import { Unsubscribe } from "firebase/firestore";

export default function Page() {
    const [ads, setAds] = useState<ad[]>([]);

    useEffect(() => {
        let unsubscribe: Unsubscribe | undefined;
      
        const fetchData = async () => {
          try {
            const result = await fetchAds();
            setAds(result.ads);
            unsubscribe = result.unsubscribe;
          } catch (error) {
            console.error('Error fetching ads:', error);
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
            <AddAd />
            <div className="flex justify-between gap-4 flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    {ads.map((car, key) => <AdCard key={key} {...car} />)}
                </Suspense>
            </div>
        </section>
    );
}
