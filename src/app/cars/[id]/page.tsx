import { fetchSingleCar } from "@/utils/data"
import { car } from "@/utils/types"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { Suspense } from "react"

function ImageCard({link}: {link: string}) {
  return (
    <img className="bg-black w-full h-full" src={link} alt={link} />
  )
}

export default async function CarOverlay({params}:{params: Params}) {

    const car: car | null = await fetchSingleCar(params.id)

    return (
      <section className="flex flex-col gap-8  bg-opacity-80 w-10/12 m-auto pt-20">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full justify-between pt-40 lg:pt-12 pb-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-normal">{car?.make} - {car?.model}</h1>
          <div className="flex gap-3 items-center">
            <img src="/icons/location.svg" alt="location" className="h-6" />
            <p className="text-lg text-slate-600">{car?.address.area}</p>
          </div>

        </div>

        <div className="flex flex-col lg:items-end">
          <div className="flex gap-3 items-center">
            <p className="text-2xl lg:text-4xl font-bold">{car?.price} <span className="font-light text-sm lg:text-lg text-slate-600">/RWF</span></p>
          </div>

          <div className="flex gap-3 items-center">
            <p className="text-2xl lg:text-xl font-light text-slate-600">{car?.mileage} <span className="font-light text-sm lg:text-lg">L/100Km</span></p>
          </div>
        </div>
      </div>

      <div className="relative w-full object-cover flex items-center h-[60vw] lg:h-[30vw] overflow-hidden">
        <img src={car?.cover} alt="car" className="w-full top-0 left-0 bg-black" />
      </div>

      <div className="flex flex-col gap-8 items-center">

        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="font-bold"> Property ID: <span className="font-normal">{car?.carId}</span></p>
          </div>
          <hr />

          <div className="flex justify-between px-0 gap-8 lg:gap-0 lg:px-8 flex-wrap lg:flex-nowrap">

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/car.svg" alt="car" className="h-4" />
                <p className="font-bold">{car?.make}</p>
              </div>

              <p className="text-sm text-slate-600">Make</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/mode.svg" alt="mode" className="h-6" />
                <p className="font-bold">{car?.model}</p>
              </div>

              <p className="text-sm text-slate-600">Model</p>
            </div>

            <div>
              <div className="flex gap-2 items-center justify-center">
                <img src="/icons/trim.svg" alt="trim" className="h-6" />
                <p className="font-bold">{car?.trimLevel}</p>
              </div>

              <p className="text-sm text-slate-600">Trim Level</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/mileage.svg" alt="mileage" className="h-4" />
                <p className="font-bold">{car?.mileage} L/100Km</p>
              </div>

              <p className="text-sm text-slate-600">Mileage</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/built.svg" alt="built" className="h-4" />
                <p className="font-bold">{car?.yearBuilt}</p>
              </div>

              <p className="text-sm text-slate-600">Year Built</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Description</h2>
          </div>
          <hr />
          <p className="text-sm text-slate-600">{car?.description}</p>
        </div>

        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Address</h2>
          </div>
          <hr />
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Address:</p>
              <p> {car?.address.street}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Area:</p>
              <p> {car?.address.area}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Email:</p>
              <p> {car?.email}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Phone:</p>
              <p> {car?.phone}</p>
            </div>
          </div>
        </div>

        {car?.features && 
        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Features</h2>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-8">
          <ul>
                {Object.entries(car.features).map(([feature, available]) => (
                    available && 
                    <div key={feature} className="flex gap-2 items-center">
                      <img src="/icons/check.svg" alt="check" className="h-4" />
                      <li key={feature}>{feature}</li>
                    </div>
                ))}
            </ul>
          </div>
        </div>
        }

      </div>
    </section>
    )
  }