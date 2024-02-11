"use client"

import React, { ChangeEvent, FormEvent, useState } from "react";
import { locations } from "@/utils/helpers";

export default function InquiryForm() {
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


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isChecked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? isChecked : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col gap-4 p-8 w-full bg-white rounded-md shadow-lg">

            <div>
                <h2 className="text-4xl font-bold">Real Estate Inquiry Form</h2>
                <p>Submit your enquiry to Willy Investment Group</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>
    );
};
