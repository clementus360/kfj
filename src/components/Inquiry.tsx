"use client"

import React, { ChangeEvent, FormEvent, useState, useRef } from "react";
import { locations } from "@/utils/helpers";

import emailjs from "@emailjs/browser"

import { FormData } from "@/utils/types";

async function sendInquiry(formData: HTMLFormElement) {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey)

    if (!serviceId || !templateId || !publicKey) {
        throw new Error("One or more required environment variables are not defined.");
    }

    await emailjs.sendForm(serviceId, templateId, formData, publicKey);
}

export default function InquiryForm() {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        inquiryType: "",
        occupation: "",
        name: "",
        email: "",
        phone: "",
        location: "",
        propertyType: "",
        maxPrice: "",
        minSize: "",
        bedrooms: "",
        bathrooms: "",
        consent: false,
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isChecked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? isChecked : value,
        }));
    };

    function validateFormData(formData: FormData) {
        const {
            inquiryType,
            occupation,
            name,
            email,
            phone,
            location,
            propertyType,
            maxPrice,
            minSize,
            bedrooms,
            bathrooms,
            consent
        } = formData;

        if (!inquiryType || !occupation || !name || !email || !phone || !location || !propertyType || !maxPrice || !minSize || !bedrooms || !bathrooms || !consent) {
            return false; // Return false if any required field is empty
        }

        return true; // Return true if all required fields are filled
    }

    const handleSubmit = (e: FormEvent) => {
        setError("")
        setSuccess("")
        e.preventDefault();
        if (validateFormData(formData) && form.current) {

            try {
                sendInquiry(form.current).then(() => {
                    setSuccess("Inquiry sent successfully")

                    setTimeout(() => {
                        setSuccess("")
                    }, 5000);

                    setFormData({
                        inquiryType: "",
                        occupation: "",
                        name: "",
                        email: "",
                        phone: "",
                        location: "",
                        propertyType: "",
                        maxPrice: "",
                        minSize: "",
                        bedrooms: "",
                        bathrooms: "",
                        consent: false,
                    })
                })
            } catch (err: any) {
                setError(err)
            }
            // Here you can proceed with submitting the form data
        } else {
            setError("Fill out all fields")
        }
    };

    return (
        <div className="flex flex-col gap-4 p-8 w-full bg-white rounded-md shadow-lg">

            <div>
                <h2 className="text-4xl font-bold">Real Estate Inquiry Form</h2>
                <p>Submit your enquiry to Willy Investment Group</p>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Inquiry Type</p>
                    <select
                        name="inquiryType"
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="">Select</option>
                        <option value="purchase">Purchase</option>
                        <option value="rent">Rent</option>
                        <option value="evaluation">Evaluation</option>
                        <option value="sell">Sell</option>
                        <option value="mortgage">Mortgage</option>
                        <option value="miss">Miss</option>
                        <option value="visit">Visit</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold">Information</p>
                    <input
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        id="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />

                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Location</p>
                    <select
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="">Select</option>
                        {Object.values(locations).map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Property</p>
                    <input
                        type="text"
                        name="propertyType"
                        id="propertyType"
                        placeholder="Property Type"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        id="maxPrice"
                        placeholder="Max Price"
                        value={formData.maxPrice}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <div className="flex items-center w-full gap-4 justify-between">
                        <input
                            type="number"
                            name="minSize"
                            id="minSize"
                            placeholder="Min Size /SqFt"
                            value={formData.minSize}
                            onChange={handleInputChange}
                            className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <input
                            type="number"
                            name="bedrooms"
                            placeholder="Bedrooms"
                            id="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <input
                            type="number"
                            name="bathrooms"
                            placeholder="Bathrooms"
                            id="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        I consent to the terms and conditions
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={!formData.consent}
                        className="px-4 py-2 text-white bg-green-600 rounded-md disabled:bg-gray-400"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Success and error messages */}
            {success &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-green-600">Inquiry Sent successfully</h1>
                </div>
            }

            {error &&
                <div className="fixed z-50 flex justify-center m-auto bottom-0 left-0 w-screen p-4 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-2xl text-red-600">{error}</h1>
                </div>
            }
        </div>
    );
};
