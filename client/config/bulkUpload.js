import { collection, doc, setDoc } from "firebase/firestore";
import { restaurants,carouselImages, slots } from "../store/restaurants";
import { db } from "./firebaseConfig";

const carouselImagesData = restaurants;

const uploadData = async () => {
  try {
    for (let i = 0; i < carouselImagesData.length; i++) {
      const carouselImage = carouselImagesData[i];
      const docRef = doc(collection(db, "restaurants"), `restaurant_${i + 1}`);
      await setDoc(docRef, carouselImage);
    }
    console.log("data uploades");
  } catch (error) {
    console.log(error);
  }
};

export default uploadData;
