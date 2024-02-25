"use client"

import { fetchAds } from "@/utils/data";
import { ad } from "@/utils/types";
import AdCarousel from "./AdsCarousel";
import { Suspense, useEffect, useState } from "react";
import { Unsubscribe } from "firebase/firestore";

export default function FeaturedAds() {
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
    <section className="flex flex-col gap-8 px-8 py-16 lg:px-32">
      <div>
        <h2 className="text-2xl font-black">FEATURED ADS</h2>
        <p className="text-sm text-slate-700 font-light w-10/12 lg:w-4/12">Explore our featured ads showcasing exciting products and services tailored for you.</p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {ads && <AdCarousel adList={ads} />}
      </Suspense>
    </section>
  );
}
