import AddHouse from "./AddHouse"

function HouseCard() {
    return (
        <div className="flex gap-4 w-full items-center justify-between shadow-lg rounded-lg pr-8 overflow-hidden">
            <img src="/" alt="test" className="w-60 bg-black" />

            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <img src="/icons/location.svg" alt="location" className="w-6" />
                    <p className="text-sm">location</p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/price.svg" alt="price" className="w-6" />
                    <p className="text-xl font-bold">price <span className="font-light text-sm">/RWF</span></p>
                </div>

                <div className="flex gap-2 items-center">
                    <img src="/icons/phone.svg" alt="price" className="w-6" />
                    <p className="text-xl font-regular">phone</p>
                </div>

            </div>

            <button className="px-6 py-2 rounded-lg bg-red-600 text-white">Delete</button>
        </div>
    )
}

export default function page() {
    return (
        <div className="flex flex-col gap-8 w-8/12 m-auto py-8 ">
            <section className="flex w-8/12 m-auto shadow-lg justify-between items-center rounded-lg overflow-hidden">
                <button className="w-full py-4 bg-white">Houses</button>
                <div className="w-[2px] h-12 bg-slate-400"></div>
                <button className="w-full py-4">Cars</button>
            </section>

            <section className="flex flex-col gap-8 px-32 bg-slate-100 rounded-lg py-8">

                <AddHouse />

                <div className="flex justify-between gap-4 flex-wrap">
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                </div>

            </section>
        </div>
    )
}
