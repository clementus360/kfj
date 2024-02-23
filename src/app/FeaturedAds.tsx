import { fetchAds } from "@/utils/data";
import { ad } from "@/utils/types";
import AdCarousel from "./AdsCarousel";
import { Suspense } from "react";

export default async function FeaturedAds() {

  let adList: Array<ad> = await fetchAds();


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdCarousel adList={adList} />
    </Suspense>
  )
}
