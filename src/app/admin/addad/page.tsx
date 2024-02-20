"use client"

import { addAd } from "@/utils/data";
import { adsData } from "@/utils/types";
import { ChangeEvent, SetStateAction, useState } from "react";

export default function AdForm() {

    const [description, setDescription] = useState("");
    const [ad, setAd] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAd = (e: ChangeEvent<HTMLInputElement>) => {
        setAd(e.target.files ? e.target.files[0] : null);
    };

    const handleDescription = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(e.target.value);
    };

    function uploadAd() {
        setError("")
        setDisabled(() => true)

        if (
            ad &&
            description
        ) {
            const adInfo: adsData = {
                ad: ad,
                description: description,
                date_added: Date.now(),
            };

            console.log(adInfo);

            try {

                addAd(adInfo).then(() => {
                    setAd(null);
                    setDescription("");
                    setSuccess("Success");
                    setTimeout(() => {
                        setSuccess("")
                    }, 5000);
                });
            } catch (err: any) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        } else {
            setError("Fill all fields");
        }

        setDisabled(false);
    }

    return (
        <form action={uploadAd} className="flex flex-col gap-8 bg-white px-8 py-8 rounded-md">
            <h1 className="text-center text-4xl font-bold">ADD AD</h1>
            <div>
                <p>Add Cover</p>
                <input onChange={handleAd} type="file" accept="image/*" className="w-full h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
            </div>

            <textarea onChange={handleDescription} value={description} name="description" placeholder="Enter description" className="h-16 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"></textarea>

            <button disabled={disabled} className="bg-green-600 disabled:bg-slate-400 text-white px-4 py-2 rounded-md">Add Ad</button>

            {/* Loading overlay */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Success and error messages */}
            {success &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-green-600">Ad added successfully</h1>
                </div>
            }

            {error &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-red-600">{error}</h1>
                </div>
            }
        </form>
    )
}
