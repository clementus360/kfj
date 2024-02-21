import { ad, adsData, car, carData, house, houseData } from "./types";

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { getFirestore, setDoc, query, where, collection, getDocs, doc, QueryDocumentSnapshot, DocumentData, deleteDoc, getDoc } from "firebase/firestore";

import uniqid from 'uniqid';
import { app } from "@/utils/firebase";
import { addCommasToPrice, formatCurrency, formatTimestamp } from "./helpers";

import emailjs from "@emailjs/browser"

export async function addHouse({
  cover,
  images,
  name,
  email,
  phone,
  propertyType,
  propertyStatus,
  bedrooms,
  bathrooms,
  sqFt,
  yearBuilt,
  address,
  price,
  description,
  features,
  date_added
}: houseData) {

  const houseId = uniqid()

  const storage = getStorage()
  const storageRef = ref(storage, `${houseId}.png`)

  const snapshot = await uploadBytes(storageRef, cover);
  const coverLink = await getDownloadURL(snapshot.ref);

  let imageList = []

  for (let i = 0; i < images.length; i++) {
    const storage = getStorage()
    const storageRef = ref(storage, `${houseId}-${i}.png`)

    const snapshot = await uploadBytes(storageRef, images[i]);
    const imageLink = await getDownloadURL(snapshot.ref);

    imageList.push(imageLink)
  }

  const db = getFirestore(app);

  await setDoc(doc(db, 'houses', houseId), {
    houseId,
    cover: coverLink,
    images: imageList,
    price,
    address,
    description,
    propertyType,
    propertyStatus,
    bedrooms,
    bathrooms,
    sqFt,
    yearBuilt,
    features,
    phone,
    name,
    email,
    date_added
  })
}

export async function fetchHouses(): Promise<house[]> {
  const db = getFirestore(app);
  const q = query(collection(db, "houses"));
  const querySnapshot = await getDocs(q);

  const houses: house[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
    const data = doc.data();
    return {
      houseId: doc.id,
      name: data.name,
      images: data.images,
      email: data.email,
      propertyType: data.propertyType,
      propertyStatus: data.propertyStatus,
      bedrooms: data.bedrooms,
      bathrooms: data.bathrooms,
      sqFt: data.sqFt,
      features: data.features,
      address: data.address,
      price: formatCurrency(data.price),
      cover: data.cover,
      description: data.description,
      date_added: formatTimestamp(data.date_added),
      yearBuilt: data.yearBuilt,
      phone: data.phone,
    };
  });

  return houses;
}

export async function fetchSingleHouse(id: string): Promise<house | null> {
  const db = getFirestore(app);
  const q = query(collection(db, "houses"), where("houseId", "==", id));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs.length === 0) {
    return null; // No matching document found
  }

  const houseData: DocumentData = querySnapshot.docs[0].data();

  const house: house = {
    houseId: querySnapshot.docs[0].id,
    name: houseData.name,
    email: houseData.email,
    propertyType: houseData.propertyType,
    propertyStatus: houseData.propertyStatus,
    bedrooms: houseData.bedrooms,
    bathrooms: houseData.bathrooms,
    sqFt: houseData.sqFt,
    features: houseData.features,
    address: houseData.address,
    price: addCommasToPrice(houseData.price),
    cover: houseData.cover,
    description: houseData.description,
    date_added: formatTimestamp(houseData.date_added),
    yearBuilt: houseData.yearBuilt,
    phone: houseData.phone,
    images: houseData.images
  };

  return house;
}

export async function addCar({
  cover,
  make,
  model,
  yearBuilt,
  trimLevel,
  mileage,
  price,
  description,
  email,
  phone,
  address,
  features,
  images,
  date_added
}: carData) {

  const carId = uniqid()

  const storage = getStorage()
  const storageRef = ref(storage, `${carId}.png`)

  const snapshot = await uploadBytes(storageRef, cover);
  const coverLink = await getDownloadURL(snapshot.ref);

  let imageList = []

  for (let i = 0; i < images.length; i++) {
    const storage = getStorage()
    const storageRef = ref(storage, `${carId}-${i}.png`)

    const snapshot = await uploadBytes(storageRef, images[i]);
    const imageLink = await getDownloadURL(snapshot.ref);

    imageList.push(imageLink)
  }

  const db = getFirestore(app);

  await setDoc(doc(db, 'cars', carId), {
    carId,
    cover: coverLink,
    make,
    model,
    yearBuilt,
    trimLevel,
    mileage,
    price,
    description,
    email,
    phone,
    address,
    features,
    images: imageList,
    date_added
  })
}

export async function fetchCars(): Promise<car[]> {
  const db = getFirestore(app);
  const q = query(collection(db, "cars"));
  const querySnapshot = await getDocs(q);

  const cars: car[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
    const data = doc.data();
    return {
      carId: doc.id,
      cover: data.cover,
      make: data.make,
      model: data.model,
      yearBuilt: data.yearBuilt,
      trimLevel: data.trimLevel,
      mileage: data.mileage,
      price: formatCurrency(data.price),
      description: data.description,
      email: data.email,
      phone: data.phone,
      address: data.address,
      features: data.features,
      images: data.images,
      date_added: formatTimestamp(data.date_added)
    };
  });

  return cars;
}

export async function fetchSingleCar(id: string): Promise<car | null> {
  const db = getFirestore(app);
  const q = query(collection(db, "cars"), where("carId", "==", id));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs.length === 0) {
    return null; // No matching document found
  }

  const carData: DocumentData = querySnapshot.docs[0].data();

  const car: car = {
    carId: querySnapshot.docs[0].id,
    cover: carData.cover,
    make: carData.make,
    model: carData.model,
    yearBuilt: carData.yearBuilt,
    trimLevel: carData.trimLevel,
    mileage: carData.mileage,
    price: formatCurrency(carData.price),
    description: carData.description,
    email: carData.email,
    phone: carData.phone,
    address: carData.address,
    features: carData.features,
    images: carData.images,
    date_added: formatTimestamp(carData.date_added)
  };

  return car;
}


export async function addAd(adData: adsData) {
  try {
      // Generate a unique ID for the ad
      const adId = uniqid();

      // Upload ad image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `${adId}.png`);
      await uploadBytes(storageRef, adData.ad);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Save ad data to Firestore
      const db = getFirestore();
      const adDocRef = doc(db, "ads", adId);
      await setDoc(adDocRef, {
          adId: adId,
          image: imageUrl,
          description: adData.description,
          date_added: adData.date_added,
      });

      console.log("Ad added successfully!");
  } catch (error) {
      console.error("Error adding ad:", error);
      throw error;
  }
}

export async function fetchAds(): Promise<ad[]> {
  try {
    const db = getFirestore();
    
    // Query the "ads" collection
    const q = query(collection(db, "ads"));
    
    // Get the documents in the collection
    const querySnapshot = await getDocs(q);

    // Map each document to the ad object
    const ads: ad[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      return {
        adId: doc.id,
        ad: data.image,
        description: data.description,
        date_added: data.date_added
      };
    });

    return ads;
  } catch (error) {
    console.error("Error fetching ads:", error);
    throw error;
  }
}



export async function deleteCar(carId: string) {
  try {
    const db = getFirestore();
    const carRef = doc(db, 'cars', carId);
    
    // Get car document data
    const carDocSnap = await getDoc(carRef);
    if (!carDocSnap.exists()) {
      throw new Error('Car document does not exist.');
    }

    const carData = carDocSnap.data();

    const storage = getStorage();

    // Delete cover from storage
    const coverImageRef = ref(storage, carData.cover);
    await deleteObject(coverImageRef);

    // Delete images from storage
    const images = carData.images || [];
    const promises = images.map(async (imageUrl: string) => {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    });
    await Promise.all(promises);

    // Delete car document from Firestore
    await deleteDoc(carRef);

    console.log('Car and associated images deleted successfully!');
  } catch (error) {
    console.error('Error deleting car and associated images:', error);
    throw error; // Optional: rethrow the error for handling at a higher level
  }
}

export async function deleteAd(adId: string) {
  try {
    const db = getFirestore();
    const adRef = doc(db, 'ads', adId);
    
    // Get ad document data
    const adDocSnap = await getDoc(adRef);
    if (!adDocSnap.exists()) {
      throw new Error('Ad document does not exist.');
    }

    const adData = adDocSnap.data();

    const storage = getStorage();

    // Delete image from storage
    const imageRef = ref(storage, adData.image);
    await deleteObject(imageRef);

    // Delete ad document from Firestore
    await deleteDoc(adRef);

    console.log('Ad and associated image deleted successfully!');
  } catch (error) {
    console.error('Error deleting ad and associated image:', error);
    throw error; // Optional: rethrow the error for handling at a higher level
  }
}

export async function deleteHouse(houseId: string) {
  try {
    const db = getFirestore();
    const houseRef = doc(db, 'houses', houseId);
    
    // Get house document data
    const houseDocSnap = await getDoc(houseRef);
    if (!houseDocSnap.exists()) {
      throw new Error('House document does not exist.');
    }

    const houseData = houseDocSnap.data();

    const storage = getStorage();

    // Delete cover from storage
    const coverImageRef = ref(storage, houseData.cover);
    await deleteObject(coverImageRef);

    // Delete images from storage
    const images = houseData.images || [];
    const promises = images.map(async (imageUrl: string) => {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    });
    await Promise.all(promises);

    // Delete house document from Firestore
    await deleteDoc(houseRef);

    console.log('House and associated images deleted successfully!');
  } catch (error) {
    console.error('Error deleting house and associated images:', error);
    throw error; // Optional: rethrow the error for handling at a higher level
  }
}