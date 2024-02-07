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
      <section className="absolute top-0 flex flex-col gap-8  bg-opacity-80 w-full ">
       
        <img src={car?.cover} alt="car" className="bg-black w-full h-[30vw]"/>

        <div className="flex flex-col gap-2 items-center">
          <p>{car?.description}</p>

          <div className="flex gap-8">

              <div className="flex gap-3 items-center">
                  <img src="/icons/price.svg" alt="price" className="h-6" />
                  <p className="text-xl font-bold">{car?.price} <span className="font-light text-lg">/RWF</span></p>
              </div>

              <div className="flex gap-3 items-center">
                  <img src="/icons/location.svg" alt="location" className="h-6" />
                  <p className="text-lg">{car?.location}</p>
              </div>

              <div className="flex gap-3 items-center">
                  <img src="/icons/phone.svg" alt="price" className="h-5" />
                  <p className="text-lg">{car?.phone}</p>
              </div>
              
          </div>

        </div>

        <div className="grid grid-cols-3 gap-8 px-32">
          <Suspense fallback={<div>Loading...</div>}>
            {car?.images?.map((image,key) => (
              <ImageCard key={key} link={image} />
            ))}
          </Suspense>
        </div>
      </section>
    )
  }