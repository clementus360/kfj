"use client"

import { car } from "@/utils/types";

export default function CarCard({
  carId,
  cover,
  make,
  model,
  yearBuilt,
  trimLevel,
  mileage,
  price,
  description,
  email,
  phone,
  address,
  features,
  images,
  date_added 
}: car) {

  return (
    <div className="flex flex-col gap-2 w-full lg:w-min lg:min-w-[360px] bg-slate-200 p-4 rounded-md shadow-lg">

      <img src={cover} alt="house name" className="bg-black w-full rounded-md aspect-video" />

      <div className="flex gap-2 items-center">
        <p className="text-lg font-bold text-slate-600">{make} - {model}</p>
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
            <img src="/icons/mileage.svg" alt="bed" className="h-5" />
            <p className="font-normal text-sm">{mileage}</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="/icons/triml.svg" alt="bath" className="h-5" />
            <p className="font-normal text-sm">{trimLevel}</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src="/icons/manufacture.svg" alt="built" className="h-5" />
            <p className="font-normal text-sm">{yearBuilt}</p>
          </div>

        </div>

      </div>

      <a href={`/cars/${carId}`}><button className="bg-green-600 hover:bg-slate-900 text-white rounded-lg w-full py-2 font-bold">More Info</button></a>

      <div>
        <p className="text-sm text-slate-400">{date_added?.toLocaleString()}</p>
      </div>

    </div>
  )
}
