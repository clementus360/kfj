"use client"

import { addHouse } from "@/utils/data";
import { houseData } from "@/utils/types";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";

export function HouseForm({ toggleForm }: any) {
    const [cover, setCover] = useState<File | null>(null);
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false)
    const [success, setSuccess] = useState("")

    const handleCover = (e: ChangeEvent<HTMLInputElement>) => {
        setCover(e.target.files ? e.target.files[0] : null);
    };

    const handleImages = (e: { target: { files: any; }; }) => {
        const fileList = e.target.files;
        const imageList: any = Array.from(fileList);
        setImages(imageList);
    };

    const handleLocation = (e: { target: { value: SetStateAction<string>; }; }) => {
        setLocation(e.target.value);
    };

    const handlePhone = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPhone(e.target.value);
    };

    const handlePrice = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(e.target.value);
    };

    const handleDescription = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(e.target.value);
    };

    function uploadHouse() {
        setDisabled(!disabled)

        if (cover && location && price && description && phone) {


            const house: houseData = {
                location: location,
                price: price,
                cover_image: cover,
                images: images,
                description: description,
                date_added: Date.now(),
                phone: phone,
            };

            console.log(house)

            try {
                addHouse(house).then(() => {
                    setCover(null)
                    setDescription("")
                    setLocation("")
                    setImages([])
                    setPrice("")
                    setPhone("")
                    toggleForm()

                    setSuccess("Success")
                })
            } catch (err:any) {
                setError(err.message || "An error occurred");
                toggleForm()
            }
            
        } else {
            setError("Fill all fields")
        }

        setDisabled(!disabled)
    }

    return (
        <div className="fixed z-50 grid place-items-center left-0 top-0 w-screen h-screen bg-black bg-opacity-85">
            <form action={uploadHouse} className="flex flex-col gap-8 w-4/12 bg-white px-8 py-8 rounded-lg">
                <h1 className="text-2xl font-bold">Add House</h1>
                <div>
                    <p>Add Cover</p>
                    <input onChange={handleCover} type="file" accept="image/*" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                </div>
                <div>
                    <p>Add Images (Multiple)</p>
                    <input onChange={handleImages} type="file" accept="image/*" multiple className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                </div>
                <input onChange={handleLocation} value={location} type="text" name="location" placeholder="Enter location" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handlePhone} value={phone} type="text" name="phone" placeholder="Enter phone number" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <input onChange={handlePrice} value={price} type="text" name="price" placeholder="Enter price" className="h-8 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all" />
                <textarea onChange={handleDescription} value={description} name="description" placeholder="Enter description" className="h-16 px-2 border-b-2 focus:border-accent outline-none bg-transparent transition-all"></textarea>
                <div className="flex w-full justify-between">
                    <button disabled={disabled} onClick={toggleForm} className="bg-slate-600 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg">Cancel</button>
                    <button disabled={disabled} className="bg-blue-800 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg">Add House</button>
                </div>
            </form>

            {success &&
				<div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-lg">
					<h1 className="text-2xl text-green-600">Article uploaded successfully</h1>
				</div>
			}

			{error &&
				<div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-lg">
					<h1 className="text-2xl text-red-600">{error}</h1>
				</div>
			}
        </div>
    );
}
