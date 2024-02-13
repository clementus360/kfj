import { fetchSingleHouse } from "@/utils/data"
import { house } from "@/utils/types"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { Suspense } from "react"

function ImageCard({ link }: { link: string }) {
  return (
    <img className="bg-black w-full h-full" src={link} alt={link} />
  )
}

export default async function HouseOverlay({ params }: { params: Params }) {

  const house: house | null = await fetchSingleHouse(params.id)

  return (
    <section className="flex flex-col gap-8  bg-opacity-80 w-10/12 m-auto pt-20">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full justify-between pt-40 lg:pt-12 pb-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-normal">{house?.name}</h1>
          <div className="flex gap-3 items-center">
            <img src="/icons/location.svg" alt="location" className="h-6" />
            <p className="text-lg text-slate-600">{house?.address.area}</p>
          </div>

          <div className="flex gap-8 text-sm">
            {house?.propertyStatus === 'sale' && <div className="text-white px-4 py-1 bg-green-500">For sale</div>}
            {house?.propertyStatus === 'rent' && <div className="text-white px-4 py-1 bg-green-500">For rent</div>}
          </div>
        </div>

        <div className="flex flex-col lg:items-end">
          <div className="flex gap-3 items-center">
            <p className="text-2xl lg:text-4xl font-bold">{house?.price} <span className="font-light text-sm lg:text-lg text-slate-600">/RWF</span></p>
          </div>

          <div className="flex gap-3 items-center">
            <p className="text-2xl lg:text-xl font-light text-slate-600">{house?.sqFt} <span className="font-light text-sm lg:text-lg">/SqFt</span></p>
          </div>
        </div>
      </div>

      <div className="relative w-full object-cover h-[60vw] lg:h-[30vw] overflow-hidden">
        <img src={house?.cover} alt="house" className="absolute top-0 left-0 w-full bg-black" />
      </div>

      <div className="flex flex-col gap-8 items-center">

        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Overview</h2>
            <p className="font-bold"> Property ID: <span className="font-normal">{house?.houseId}</span></p>
          </div>
          <hr />

          <div className="flex justify-between px-0 gap-8 lg:gap-0 lg:px-8 flex-wrap lg:flex-nowrap">

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/house.svg" alt="house" className="h-4" />
                <p className="font-bold">{house?.propertyType}</p>
              </div>

              <p className="text-sm text-slate-600">Property Type</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/bed.svg" alt="bed" className="h-4" />
                <p className="font-bold">{house?.bedrooms}</p>
              </div>

              <p className="text-sm text-slate-600">Bedrooms</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/bath.svg" alt="bath" className="h-4" />
                <p className="font-bold">{house?.bathrooms}</p>
              </div>

              <p className="text-sm text-slate-600">Bathrooms</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/area.svg" alt="area" className="h-4" />
                <p className="font-bold">{house?.sqFt} /SqFt</p>
              </div>

              <p className="text-sm text-slate-600">SqFt</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <img src="/icons/built.svg" alt="built" className="h-4" />
                <p className="font-bold">{house?.yearBuilt}</p>
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
          <p className="text-sm text-slate-600">{house?.description}</p>
        </div>

        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Address</h2>
          </div>
          <hr />
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Address:</p>
              <p> {house?.address.street}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Area:</p>
              <p> {house?.address.area}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Email:</p>
              <p> {house?.email}</p>
            </div>
            <div className="flex justify-betweenw-full border-b-[0.1px] border-slate-600 py-2">
              <p className="font-bold">Phone:</p>
              <p> {house?.phone}</p>
            </div>
          </div>
        </div>

        {house?.features &&
          <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-medium">Features</h2>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-8">
              <ul>
                {Object.entries(house.features).map(([feature, available]) => (
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

      {house?.images &&
        <div className="flex flex-col gap-4 bg-white rounded-md shadow-lg w-full py-8 px-4 lg:px-16">
          <div className="flex justify-between w-full">
            <h2 className="text-xl font-medium">Gallery</h2>
          </div>
          <hr />

          <div className="grid grid-cols-3 gap-4">
            {house?.images.map((image, key) => (
              <img key={key} src={image} alt="" />
            ))}
          </div>

        </div>}


    </section>
  )
}