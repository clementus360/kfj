import { fetchAds } from "@/utils/data";
import { ad } from "@/utils/types";
import AddAd from "./AddAd";
import { AdCard } from "./adCard";

export default async function Page() {

    let adList: Array<ad> = await fetchAds();

    return (
        <section className="flex flex-col gap-8 px-8 lg:px-32 bg-slate-100 rounded-md py-8">

            <AddAd />

            <div className="flex justify-between gap-4 flex-wrap">
                {adList.map((ad,key) => <AdCard key={key} {...ad} /> )}
            </div>

        </section>
    );
}
