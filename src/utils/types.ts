export interface house {
    houseId: string;
    location: string;
    price: string;
    cover: string;
    images: Array<string>;
    description: string;
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
    location: string;
    price: string;
    cover_image: File;
    images: Array<File>;
    description: string;
    date_added: number;
    phone: string;
}