"use client"

import { useState } from "react";
import { HouseForm } from "./CarForm";

export default function AddCar() {

    const [isForm, setIsForm] = useState(false)

    function toggleForm() {
        setIsForm(!isForm)
    }

    return (
        <div className="flex w-full justify-between items-center border-b-[1px] border-black py-4 px-4">
            {isForm && <HouseForm toggleForm={toggleForm} />}
            <h2 className="font-bold text-xl">Cars List</h2>
            <button onClick={toggleForm} className="bg-blue-800 text-white px-4 py-2 rounded-md">Add Car</button>
        </div>
    );
}
