"use client"

import { deleteAd } from "@/utils/data";

import { ad } from "@/utils/types";

import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export function AdCard(ad: ad) {

    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");

    const handleDelete = async () => {
        setError("");
        setDisabled(true);

        const confirmDelete = window.confirm("Are you sure you want to delete this ad?");
        if (confirmDelete) {
            if (loading) return; // Prevent multiple clicks while loading
            setLoading(true);

            try {
                await deleteAd(ad.adId);
                setSuccess("ad deleted successfully!");
                setDisabled(false);
            } catch (error) {
                setError("Error deleting ad");
                setDisabled(false);
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between shadow-lg rounded-md py-8 lg:py-0 lg:pr-8 overflow-hidden">

            {/* Loading overlay */}
            {loading && (
                <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
                    <PulseLoader
                        color={color}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
            
            <a href={`/properties/${ad.adId}`}><img src={ad.ad} alt="test" className="w-60 bg-black" /></a>

            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <img src="/icons/location.svg" alt="location" className="w-6" />
                    <p className="text-sm">{ad.description}</p>
                </div>

            </div>

            <button disabled={disabled} onClick={handleDelete} className="px-6 py-2 rounded-md bg-red-600 text-white">Delete</button>

            {/* Success and error messages */}
            {success &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-green-600">Ad deleted successfully</h1>
                </div>
            }

            {error &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-red-600">{error}</h1>
                </div>
            }
        </div>
    );
}
