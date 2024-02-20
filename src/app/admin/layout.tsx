"use client"

import { usePathname } from "next/navigation";

export default function layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const path = usePathname()

    return (
        <div className="flex flex-col gap-8 w-full  lg:w-8/12 m-auto pt-32 ">

            {path &&
                <section className="flex w-full lg:w-8/12 m-auto shadow-lg justify-between items-center rounded-md overflow-hidden">
                    <a href="/admin/houses" className="w-full h-full"><button className={`transition-all w-full py-4 ${path==="/admin/houses"? '':'bg-white'}`}>Houses</button></a>
                    <div className="w-[2px] h-12 bg-slate-400"></div>
                    <a href="/admin/cars" className="w-full h-full"><button className={`transition-all w-full py-4 ${path==="/admin/cars"? '':'bg-white'}`}>Cars</button></a>
                    <div className="w-[2px] h-12 bg-slate-400"></div>
                    <a href="/admin/ads" className="w-full h-full"><button className={`transition-all w-full py-4 ${path==="/admin/ads"? '':'bg-white'}`}>Ads</button></a>
                </section>
            }


            <div>
                {children}
            </div>
            
        </div>
    )
}
