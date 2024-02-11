import { car } from "@/utils/types";


export default function Car({carId, location, price, cover, date_added}: car) {

  return (
    <div className="flex flex-col gap-4 w-full lg:w-min lg:min-w-[360px] bg-slate-200 p-4 rounded-md shadow-lg">

        <img src={cover} alt="car name" className="bg-black w-full rounded-md aspect-video" />

        <div>
            <div className="flex gap-2 items-center">
                <img src="/icons/location.svg" alt="location" className="w-6" />
                <p className="text-sm">{location}</p>
            </div>

            <div className="flex gap-2 items-center">
                <img src="/icons/price.svg" alt="price" className="w-6" />
                <p className="text-xl font-bold">{price} <span className="font-light text-sm">/RWF</span></p>
            </div>

        </div>

        <a href={`/properties/${carId}`}><button className="bg-black hover:bg-slate-900 text-white rounded-lg w-full py-2 font-bold">More Info</button></a>

        <div>
          <p className="text-xs text-slate-400">{date_added?.toLocaleString()}</p>
        </div>
        
    </div>
  )
}
