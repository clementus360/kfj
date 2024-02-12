"use client"

import { addHouse } from "@/utils/data";
import { houseData } from "@/utils/types";
import { ChangeEvent, SetStateAction, useState } from "react";

enum Feature {
    AirConditioning = "airConditioning",
    Wifi = "wifi",
    Gym = "gym",
    Laundry = "laundry",
    Fridge = "fridge",
    TV = "tv",
    Pool = "pool",
    Lawn = "lawn",
    Shower = "shower",
    Kitchen = "kitchen"
    // Add more features as needed
}

export default function HouseForm() {
    const [cover, setCover] = useState<File | null>(null);
    const [images, setImages] = useState<File[]>([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [propertyStatus, setPropertyStatus] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [sqFt, setSqFt] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [addressArea, setAddressArea] = useState("");
    const [addressStreet, setAddressStreet] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState({
        airConditioning: false,
        wifi: false,
        gym: false,
        laundry: false,
        fridge: false,
        tv: false,
        pool: false,
        lawn: false,
        shower: false,
        // Add more features as needed
    });
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState("");

    const handleCover = (e: ChangeEvent<HTMLInputElement>) => {
        setCover(e.target.files ? e.target.files[0] : null);
    };

    function handleImages(e: { target: { files: any; }; }): void {
        const fileList = e.target.files;
        const imageList: any = Array.from(fileList);
        setImages(imageList);
    }

    const handlePrice = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handleBedrooms = (e: ChangeEvent<HTMLInputElement>) => {
        setBedrooms(e.target.value);
    };

    const handleBathrooms = (e: ChangeEvent<HTMLInputElement>) => {
        setBathrooms(e.target.value);
    };

    const handleSqFt = (e: ChangeEvent<HTMLInputElement>) => {
        setSqFt(e.target.value);
    };

    const handleYearBuilt = (e: ChangeEvent<HTMLInputElement>) => {
        setYearBuilt(e.target.value);
    };

    const handleAddressArea = (e: ChangeEvent<HTMLInputElement>) => {
        setAddressArea(e.target.value);
    };

    const handleAddressStreet = (e: ChangeEvent<HTMLInputElement>) => {
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

    function uploadHouse() {
        setError("")
        setDisabled(() => true)

        if (
            cover &&
            name &&
            email &&
            phone &&
            propertyType &&
            propertyStatus &&
            bedrooms &&
            bathrooms &&
            sqFt &&
            yearBuilt &&
            addressArea &&
            addressStreet &&
            price &&
            description
        ) {
            const house: houseData = {
                name: name,
                email: email,
                phone: phone,
                propertyType: propertyType,
                propertyStatus: propertyStatus,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                sqFt: sqFt,
                yearBuilt: yearBuilt,
                address: {
                    area: addressArea,
                    street: addressStreet,
                },
                price: price,
                description: description,
                features: features,
                cover: cover,
                images: images,
                date_added: Date.now(),
            };

            console.log(house);

            try {

                console.log(house)
                addHouse(house).then(() => {
                    setCover(null);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setPropertyType("");
                    setPropertyStatus("")
                    setBedrooms("");
                    setBathrooms("");
                    setSqFt("");
                    setYearBuilt("");
                    setAddressArea("");
                    setAddressStreet("");
                    setPrice("");
                    setDescription("");
                    setFeatures({
                        airConditioning: false,
                        wifi: false,
                        gym: false,
                        laundry: false,
                        fridge: false,
                        tv: false,
                        pool: false,
                        lawn: false,
                        shower: false,
                    });
                    setSuccess("Success");
                });
            } catch (err: any) {
                setError(err.message || "An error occurred");
            }
        } else {
            setError("Fill all fields");
        }

        setDisabled(false);
    }

    return (
        <div className="w-full">
            <form action={uploadHouse} className="flex flex-col gap-8 bg-white px-8 py-8 rounded-md">
                {/* Other input fields */}

                <h1 className="text-center text-4xl font-bold">ADD HOUSE</h1>
                <div>
                    <p>Add Cover</p>
                    <input onChange={handleCover} type="file" accept="image/*" className="w-full h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                </div>
                <div>
                    <p>Add Images</p>
                    <input onChange={handleImages} type="file" accept="image/*" multiple className="w-full h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                </div>
                <input onChange={handleNameChange} value={name} type="text" name="name" placeholder="Property Name" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleEmailChange} value={email} type="email" name="email" placeholder="Your Email" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handlePhoneChange} value={phone} type="tel" name="phone" placeholder="Your Phone Number" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all">
                    <option value="">Select Property Type</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Office">Office</option>
                    <option value="Shop">Shop</option>
                    <option value="Residential">Residential</option>
                    <option value="Appartment">Appartment</option>
                </select>
                <select value={propertyStatus} onChange={(e) => setPropertyStatus(e.target.value)} className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all">
                    <option value="">Select Property Status</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                </select>
                <input onChange={handlePrice} value={price} type="text" name="price" placeholder="Enter price" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleBedrooms} value={bedrooms} min={0} type="number" name="bedrooms" placeholder="Bedrooms" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleBathrooms} value={bathrooms} min={0} type="number" name="bathrooms" placeholder="Bathrooms" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleSqFt} value={sqFt} min={0} type="number" name="sqFt" placeholder="Sq Ft" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleYearBuilt} value={yearBuilt} min={0} type="number" name="yearBuilt" placeholder="Year Built" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleAddressArea} value={addressArea} type="text" name="addressArea" placeholder="Address Area" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handleAddressStreet} value={addressStreet} type="text" name="addressStreet" placeholder="Address Street" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                {/* Checkboxes for features */}

                <textarea onChange={handleDescription} value={description} name="description" placeholder="Enter description" className="h-16 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"></textarea>


                <div className="flex justify-between flex-wrap">
                    {Object.entries(features).map(([key, value]) => (
                        <div key={key}>
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
                <button disabled={disabled} className="bg-blue-800 disabled:bg-slate-400 text-white px-4 py-2 rounded-md">Add House</button>
            </form>

            {/* Success and error messages */}
            {success &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-green-600">House uploaded successfully</h1>
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
