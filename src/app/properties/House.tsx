import { house } from "@/utils/types";


export default function House({ houseId, cover,
  name,
  email,
  phone,
  propertyType,
  propertyStatus,
  bedrooms,
  bathrooms,
  sqFt,
  yearBuilt,
  address,
  price,
  description,
  date_added }: house) {

  return (
    <div className="flex flex-col gap-2 w-full lg:w-min lg:min-w-[360px] bg-slate-200 p-4 rounded-md shadow-lg">

      <img src={cover} alt="house name" className="bg-black w-full rounded-md aspect-video" />

      <div className="flex gap-2 items-center">
          <p className="text-lg font-bold text-slate-600">{propertyType}</p>
        </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <img src="/icons/location.svg" alt="location" className="w-6" />
          <p className="text-sm">{address.area}</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/icons/price.svg" alt="price" className="w-6" />
          <p className="text-xl font-bold">{price} <span className="font-light text-sm">/RWF</span></p>
        </div>

        <div className="flex justify-between w-full">

          <div className="flex gap-2 items-center">
            <img src="/icons/bedl.svg" alt="bed" className="h-5" />
            <p className="font-normal text-sm">{bedrooms}</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="/icons/bathl.svg" alt="bath" className="h-5" />
            <p className="font-normal text-sm">{bathrooms}</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="/icons/areal.svg" alt="area" className="h-5" />
            <p className="font-normal text-sm">{sqFt} /SqFt</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="/icons/builtl.svg" alt="built" className="h-5" />
            <p className="font-normal text-sm">{yearBuilt}</p>
          </div>

        </div>

      </div>

      <a href={`/properties/${houseId}`}><button className="bg-green-600 hover:bg-slate-900 text-white rounded-lg w-full py-2 font-bold">More Info</button></a>

      <div>
        <p className="text-sm text-slate-400">{date_added?.toLocaleString()}</p>
      </div>

    </div>
  )
}
