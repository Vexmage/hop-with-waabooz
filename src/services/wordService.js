import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const fetchWordOfTheDay = async (date) => {
  console.log("Fetching word for date:", date);  // Log the date
  const q = query(collection(db, 'words'), where('date', '==', date));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No word found for this date");
    return null;
  }

  const word = [];
  querySnapshot.forEach((doc) => word.push(doc.data()));
  console.log("Fetched word:", word[0]);  // Log the word data
  return word[0];
};
