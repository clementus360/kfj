"use client"

import { useParams } from "next/navigation";

export default function layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <div className="flex flex-col gap-8 w-8/12 m-auto py-8 ">
            <section className="flex w-8/12 m-auto shadow-lg justify-between items-center rounded-lg overflow-hidden">
                <a href="/admin/houses" className="w-full h-full"><button className={`w-full py-4 bg-white `}>Houses</button></a>
                <div className="w-[2px] h-12 bg-slate-400"></div>
                <a href="/admin/cars" className="w-full h-full"><button className={`w-full py-4`}>Cars</button></a>
            </section>


            <div>
                {children}
            </div>
        </div>
    )
}
