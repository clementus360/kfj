import { car, house, houseData } from "./types";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore,setDoc, query, where, collection, getDocs, doc, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

import uniqid from 'uniqid';
import { app } from "@/utils/firebase";
import { formatCurrency, formatTimestamp } from "./helpers";

export async function addHouse({location, price, cover_image, images, description, date_added, phone}: houseData) {

  const houseId = uniqid()

	const storage = getStorage()
	const storageRef = ref(storage, `${houseId}.png`)

	const snapshot = await uploadBytes(storageRef, cover_image);
	const coverLink = await getDownloadURL(snapshot.ref);

  let imageList = []

  for (let i=0; i<images.length; i++) {
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
    price,
    location,
    description,
    date_added,
    phone,
		images: imageList,
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
          location: data.location,
          price: formatCurrency(data.price),
          cover: data.cover,
          images: data.images,
          description: data.description,
          date_added: formatTimestamp(data.date_added),
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
      location: houseData.location,
      price: formatCurrency(houseData.price),
      cover: houseData.cover,
      images: houseData.images,
      description: houseData.description,
      date_added: formatTimestamp(houseData.date_added),
      phone: houseData.phone,
  };

  return house;
}


export async function addCar({location, price, cover_image, images, description, date_added, phone}: houseData) {

  const carId = uniqid()

	const storage = getStorage()
	const storageRef = ref(storage, `${carId}.png`)

	const snapshot = await uploadBytes(storageRef, cover_image);
	const coverLink = await getDownloadURL(snapshot.ref);

  let imageList = []

  for (let i=0; i<images.length; i++) {
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
    price,
    location,
    description,
    date_added,
    phone,
		images: imageList,
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
          location: data.location,
          price: formatCurrency(data.price),
          cover: data.cover,
          images: data.images,
          description: data.description,
          date_added: formatTimestamp(data.date_added),
          phone: data.phone,
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
      location: carData.location,
      price: formatCurrency(carData.price),
      cover: carData.cover,
      images: carData.images,
      description: carData.description,
      date_added: formatTimestamp(carData.date_added),
      phone: carData.phone,
  };

  return car;
}

