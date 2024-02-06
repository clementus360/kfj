import { house } from "@/utils/types";

export function ItemCard(house:house) {
    return (
        <div className="flex gap-4 w-full items-center justify-between shadow-lg rounded-lg pr-8 overflow-hidden">
            <img src={house.cover} alt="test" className="w-60 bg-black" />

            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <img src="/icons/location.svg" alt="location" className="w-6" />
                    <p className="text-sm">{house.location}</p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/price.svg" alt="price" className="w-6" />
                    <p className="text-xl font-bold">{house.price} <span className="font-light text-sm">/RWF</span></p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/phone.svg" alt="price" className="w-6" />
                    <p className="text-xl font-regular">{house.phone}</p>
                </div>

            </div>

            <button className="px-6 py-2 rounded-lg bg-red-600 text-white">Delete</button>
        </div>
    );
}
