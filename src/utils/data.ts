import { car, carData, house, houseData } from "./types";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, setDoc, query, where, collection, getDocs, doc, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

import uniqid from 'uniqid';
import { app } from "@/utils/firebase";
import { addCommasToPrice, formatCurrency, formatTimestamp } from "./helpers";

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



// for (let i = 0; i < images.length; i++) {
//   const storage = getStorage()
//   const storageRef = ref(storage, `${carId}-${i}.png`)

//   const snapshot = await uploadBytes(storageRef, images[i]);
//   const imageLink = await getDownloadURL(snapshot.ref);

//   imageList.push(imageLink)
// }