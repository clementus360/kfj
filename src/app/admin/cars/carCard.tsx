import { car } from "@/utils/types";

export function CarCard(car:car) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between shadow-lg rounded-md py-8 lg:py-0 lg:pr-8 overflow-hidden">
            <img src={car.cover} alt="test" className="w-60 bg-black" />

            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <img src="/icons/location.svg" alt="location" className="w-6" />
                    <p className="text-sm">{car.address.area}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/price.svg" alt="price" className="w-6" />
                    <p className="text-xl font-bold">{car.price} <span className="font-light text-sm">/RWF</span></p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/phone.svg" alt="price" className="w-6" />
                    <p className="text-xl font-regular">{car.phone}</p>
                </div>

            </div>

            <button className="px-6 py-2 rounded-md bg-red-600 text-white">Delete</button>
        </div>
    );
}
