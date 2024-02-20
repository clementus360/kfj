"use client"

import { addCar } from "@/utils/data";
import { makeOptions, modelOptions, trimLevelOptions } from "@/utils/helpers";
import { carData } from "@/utils/types";
import { ChangeEvent, SetStateAction, useState } from "react";

export default function CarForm() {
    const [cover, setCover] = useState<File | null>(null);
    const [images, setImages] = useState<File[]>([]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [trimLevel, setTrimLevel] = useState("");
    const [mileage, setMileage] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [addressArea, setAddressArea] = useState("");
    const [addressStreet, setAddressStreet] = useState("");
    const [features, setFeatures] = useState({
        gpsNavigation: false,
        bluetoothConnectivity: false,
        cruiseControl: false,
        heatedSeats: false,
        sunroof: false,
        alloyWheels: false,
        rearviewCamera: false,
        parkingSensors: false,
        adaptiveCruiseControl: false,
        laneDepartureWarning: false,
        blindSpotMonitoring: false,
        leatherSeats: false,
        entertainmentSystem: false,
        automaticHeadlights: false,
        rainSensingWipers: false,
    });
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [modelOptionsForSelectedMake, setModelOptionsForSelectedMake] = useState<string[]>([]);


    const handleCover = (e: ChangeEvent<HTMLInputElement>) => {
        setCover(e.target.files ? e.target.files[0] : null);
    };

    function handleImages(e: { target: { files: any } }) {
        const fileList = e.target.files;
        const imageList: any = Array.from(fileList);
        setImages(imageList);
    }

    const handleMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const make = e.target.value;
        setMake(make);
        setModel("");
        setModelOptionsForSelectedMake(modelOptions[make as keyof typeof modelOptions]);
    };

    const handleModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
    };

    const handleYearBuiltChange = (e: ChangeEvent<HTMLInputElement>) => {
        setYearBuilt(e.target.value);
    };

    const handleTrimLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTrimLevel(e.target.value);
    };

    const handleMileageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMileage(e.target.value);
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleAddressAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddressArea(e.target.value);
    };

    const handleAddressStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddressStreet(e.target.value);
    };

    const handleDescription = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(e.target.value);
    };

    const handleFeatureChange = (feature: string) => {
        if (feature in features) {
            setFeatures(prevFeatures => ({
                ...prevFeatures,
                [feature]: !prevFeatures[feature as keyof typeof features], // Assert feature as keyof typeof features
            }));
        }
    };

    function uploadCar() {
        setError("")
        setSuccess("")
        setDisabled(() => true)
        if (loading) return; // Prevent multiple clicks while loading
        setLoading(true);

        if (
            cover &&
            make &&
            model &&
            yearBuilt &&
            trimLevel &&
            mileage &&
            price &&
            description &&
            email &&
            phone &&
            addressArea &&
            addressStreet
        ) {
            setError("");
            const carData: carData = {
                cover: cover,
                make: make,
                model: model,
                yearBuilt: yearBuilt,
                trimLevel: trimLevel,
                mileage: mileage,
                price: price,
                description: description,
                email: email,
                phone: phone,
                address: {
                    area: addressArea,
                    street: addressStreet,
                },
                features: features,
                images: images,
                date_added: Date.now(),
            };

            try {
                addCar(carData).then(() => {
                    setSuccess("Success");
                    setCover(null);
                    setMake("");
                    setModel("");
                    setYearBuilt("");
                    setTrimLevel("");
                    setMileage("");
                    setPrice("");
                    setDescription("");
                    setEmail("");
                    setPhone("");
                    setAddressArea("");
                    setAddressStreet("");
                    setFeatures({
                        gpsNavigation: false,
                        bluetoothConnectivity: false,
                        cruiseControl: false,
                        heatedSeats: false,
                        sunroof: false,
                        alloyWheels: false,
                        rearviewCamera: false,
                        parkingSensors: false,
                        adaptiveCruiseControl: false,
                        laneDepartureWarning: false,
                        blindSpotMonitoring: false,
                        leatherSeats: false,
                        entertainmentSystem: false,
                        automaticHeadlights: false,
                        rainSensingWipers: false,
                    });
                    setTimeout(() => {
                        setSuccess("")
                    }, 5000);
                });
            } catch (err: any) {
                setError(err.message || "An error occurred");
                setDisabled(false);
            } finally {
                setLoading(false);
            }
        } else {
            setError("Fill all fields");
            setDisabled(false);
        }

        setDisabled(false);
    }


    return (
        <div className="w-full">
            <form action={uploadCar} className="flex flex-col gap-8 bg-white px-8 py-8 rounded-md">
                <h1 className="text-center text-4xl font-bold">ADD CAR</h1>
                <div>
                    <p>Add Cover</p>
                    <input onChange={handleCover} type="file" accept="image/*" className="w-full h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                </div>

                <div>
                    <p>Add Images</p>
                    <input
                        onChange={handleImages}
                        type="file"
                        accept="image/*"
                        multiple
                        className="w-full h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"
                    />
                </div>

                <div className="flex gap-8">

                    <div className="flex gap-4">
                        <label htmlFor="make">Make:</label>
                        <select id="make" value={make} onChange={handleMakeChange}>
                            <option value="">Select Make</option>
                            {makeOptions?.map(make => (
                                <option key={make} value={make}>{make}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <label htmlFor="model">Model:</label>
                        <select id="model" value={model} onChange={handleModelChange} disabled={!make}>
                            <option value="">Select Model</option>
                            {modelOptionsForSelectedMake?.map(model => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <select
                    value={trimLevel}
                    onChange={(e) => setTrimLevel(e.target.value)}
                    className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"
                >
                    <option value="">Select Trim Level</option>
                    {trimLevelOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <input onChange={handleYearBuiltChange} value={yearBuilt} type="text" name="yearBuilt" placeholder="Year Built" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleMileageChange} value={mileage} min={0} type="number" name="mileage" placeholder="Mileage" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handlePriceChange} value={price} type="text" name="price" placeholder="Price" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleEmailChange} value={email} type="email" name="email" placeholder="Your Email" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handlePhoneChange} value={phone} type="tel" name="phone" placeholder="Your Phone Number" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleAddressAreaChange} value={addressArea} type="text" name="addressArea" placeholder="Address Area" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleAddressStreetChange} value={addressStreet} type="text" name="addressStreet" placeholder="Address Street" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <textarea onChange={handleDescription} value={description} name="description" placeholder="Enter description" className="h-16 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"></textarea>

                {/* Additional input fields... */}
                {/* Checkboxes for features */}
                <div className="flex lg:grid lg:grid-cols-4 gap-2 justify-between flex-wrap">
                    {Object.entries(features).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={key}
                                checked={value} // Use value directly, it's already a boolean
                                onChange={() => handleFeatureChange(key)}
                                key={key} // Unique key for each checkbox
                            />
                            <label htmlFor={key}>{key}</label>
                        </div>
                    ))}
                </div>
                <button disabled={disabled} className="bg-green-600 disabled:bg-slate-400 text-white px-4 py-2 rounded-md">Add Car</button>

                {/* Loading overlay */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="spinner-border text-white" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </form>

            {/* Success and error messages */}
            {success &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-green-600">Car uploaded successfully</h1>
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
