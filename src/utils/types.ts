export interface house {
    houseId: string;
    name: string;
    email: string;
    propertyType: string;
    propertyStatus: string;
    bedrooms: string;
    bathrooms: string;
    sqFt: string;
    yearBuilt: string;
    address: { area: string; street: string; },
    price: string;
    description: string;
    features: {
        airConditioning: boolean;
        wifi: boolean;
        gym: boolean;
        laundry: boolean;
        fridge: boolean;
        tv: boolean;
        pool: boolean;
        lawn: boolean;
        shower: boolean;
    };
    cover: string;
    date_added: string;
    phone: string;
}

export interface car {
    carId: string;
    location: string;
    price: string;
    cover: string;
    images: Array<string>;
    description: string;
    date_added: string;
    phone: string;
}

export interface houseData {
    name: string;
    email: string;
    propertyType: string;
    propertyStatus: string;
    bedrooms: string;
    bathrooms: string;
    sqFt: string;
    yearBuilt: string;
    address: { area: string; street: string; },
    price: string;
    description: string;
    features: {
        airConditioning: boolean;
        wifi: boolean;
        gym: boolean;
        laundry: boolean;
        fridge: boolean;
        tv: boolean;
        pool: boolean;
        lawn: boolean;
        shower: boolean;
    };
    cover: File;
    date_added: number;
    phone: string;
}

export type Features = {
    airConditioning: boolean;
    wifi: boolean;
    gym: boolean;
    laundry: boolean;
    fridge: boolean;
    tv: boolean;
    pool: boolean;
    lawn: boolean;
    shower: boolean;
    // Add more features as needed
}


export interface carData {
    location: string;
    price: string;
    cover_image: File;
    images: Array<File>;
    description: string;
    date_added: number;
    phone: string;
}