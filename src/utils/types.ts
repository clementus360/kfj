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
    images: string[];
    cover: string;
    date_added: string;
    phone: string;
}

export interface car {
    carId: string;
    cover: string;
    make: string;
    model: string;
    yearBuilt: string;
    trimLevel: string;
    mileage: string;
    price: string;
    description: string;
    email: string;
    phone: string;
    address: { area: string; street: string; };
    features: {
        gpsNavigation: boolean;
        bluetoothConnectivity: boolean;
        cruiseControl: boolean;
        heatedSeats: boolean;
        sunroof: boolean;
        alloyWheels: boolean;
        rearviewCamera: boolean;
        parkingSensors: boolean;
        adaptiveCruiseControl: boolean;
        laneDepartureWarning: boolean;
        blindSpotMonitoring: boolean;
        leatherSeats: boolean;
        entertainmentSystem: boolean;
        automaticHeadlights: boolean;
        rainSensingWipers: boolean;
    };
    images: string[];
    date_added: string;
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
    address: { area: string; street: string; };
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
    images: File[];
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
    cover: File;
    make: string;
    model: string;
    yearBuilt: string;
    trimLevel: string;
    mileage: string;
    price: string;
    description: string;
    email: string;
    phone: string;
    address: { area: string; street: string; };
    features: {
        gpsNavigation: boolean;
        bluetoothConnectivity: boolean;
        cruiseControl: boolean;
        heatedSeats: boolean;
        sunroof: boolean;
        alloyWheels: boolean;
        rearviewCamera: boolean;
        parkingSensors: boolean;
        adaptiveCruiseControl: boolean;
        laneDepartureWarning: boolean;
        blindSpotMonitoring: boolean;
        leatherSeats: boolean;
        entertainmentSystem: boolean;
        automaticHeadlights: boolean;
        rainSensingWipers: boolean;
    };
    images: File[];
    date_added: number;
}

export interface ad {
    adId: string;
    description: string;
    ad: string;
    date_added: string;
}

export interface adsData {
    description: string;
    ad: File;
    date_added: number;
}

export interface FormData {
    inquiryType: any;
    occupation: any;
    name: any;
    email: any;
    phone: any;
    location: any;
    propertyType: any;
    maxPrice: any;
    minSize: any;
    bedrooms: any;
    bathrooms: any;
    consent: any;
}