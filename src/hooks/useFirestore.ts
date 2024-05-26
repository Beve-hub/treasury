import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

interface Image {
    createdAt: string,  // Use string to represent date initially
    imageUrl: string,
}

const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe: () => void;
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: Image[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        const imageUrl = data.imageUrl;
                        const createdAt = data.createdAt.toDate().toISOString(); // Convert to ISO string
                        images.push({ imageUrl, createdAt });
                    });
                    setDocs(images);
                    setIsLoading(false);
                });
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        getData();

        return () => unsubscribe && unsubscribe();
    }, [collectionName]);

    return { docs, isLoading };
}

export default useFirestore;
