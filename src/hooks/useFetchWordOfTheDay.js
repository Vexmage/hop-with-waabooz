import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const useFetchWordOfTheDay = (date) => {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      const q = query(collection(db, "words"), where("date", "==", date));

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setWord(doc.data());
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, [date]);

  return { word, loading, error };
};

export default useFetchWordOfTheDay;
