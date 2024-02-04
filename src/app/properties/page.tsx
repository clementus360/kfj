import House from "./House";

export default function Properties() {
    return (
        <section className="absolute top-0 w-screen">
            <div className="flex items-end justify-center h-[80vh] lg:h-[50vh] bg-red-300">
                <div className="flex flex-col gap-8 px-8 py-8 lg:w-3/6 ">
                    <h1 className="font-bold text-6xl text-center">FIND A PERFECT DREAM HOUSE</h1>

                    <div className="flex flex-col items-center lg:flex-row gap-4 w-full">
                        <input type="text" name="search" className="px-4 py-2 w-full rounded-lg" placeholder="Location ex: Kigali, Kabeza, etc..." id="house-search" />
                        <button className="text-white font-bold py-2 px-4 rounded-lg w-full lg:w-max bg-black hover:bg-slate-900">Search</button>
                    </div>
                </div>
            </div>

            <div className="px-8 lg:px-32 py-16 w-full">
                <div className="flex flex-wrap justify-between gap-8 w-full">
                    <House />
                    <House />
                    <House />
                    <House />
                </div>
            </div>
        </section>
    );
}