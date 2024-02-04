export default function House() {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-max lg:min-w-[360px] bg-slate-200 p-4 rounded-lg shadow-lg">
        
        <img src="/" alt="house name" className="bg-black w-full rounded-lg aspect-video" />

        <div>
            <div className="flex gap-2 items-center">
                <img src="/icons/location.svg" alt="location" className="w-6" />
                <p className="text-sm">Kabeza</p>
            </div>

            <div className="flex gap-2 items-center">
                <img src="/icons/price.svg" alt="price" className="w-6" />
                <p className="text-xl font-bold">200 Million <span className="font-light text-sm">/RWF</span></p>
            </div>
        </div>

        <button className="bg-black hover:bg-slate-900 text-white rounded-full py-2 font-bold">More Info</button>
        
    </div>
  )
}
