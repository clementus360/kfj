"use client"

import { fetchAds } from "@/utils/data";
import { ad } from "@/utils/types";
import AdCarousel from "./AdsCarousel";

export default async function FeaturedAds() {

    let adList: Array<ad> = await fetchAds();


  return (
    <AdCarousel adList={adList} />
  )
}
