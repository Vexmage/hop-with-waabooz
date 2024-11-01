import { db } from '../firebase';  
import { getDocs, collection, query, where } from 'firebase/firestore'; 


export const fetchWordOfTheDay = async () => {
    // Get the current day of the week (1 = Monday, 7 = Sunday)
    const dayOfWeek = new Date().getDay() === 0 ? 7 : new Date().getDay();
  
    console.log("Fetching word for day of the week:", dayOfWeek);
  
    // Query Firestore for the word with this dayOfWeek
    const q = query(collection(db, "words"), where("dayOfWeek", "==", dayOfWeek.toString()));
    const querySnapshot = await getDocs(q);
  
    if (querySnapshot.empty) {
      console.log("No word found for today’s day of the week");
      return null;
    }
  
    const word = [];
    querySnapshot.forEach((doc) => word.push(doc.data()));
    console.log("Fetched word data:", word[0]);
    return word[0];
  };