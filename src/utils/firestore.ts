import { db } from '../firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

interface UserData {
  items: { id: string; name: string; price: number; accumulated: number }[];
  amount: number;
  currency: string;
  period: string;
  userInputNumber: number;
  totalAmount: number;
}

export const saveUserData = async (user: User, data: UserData) => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  try {
    await setDoc(userRef, data, { merge: true });
  } catch (error) {
    console.error('Error saving user data', error);
  }
};

export const getUserData = async (user: User): Promise<UserData | null> => {
  if (!user) return null;

  const userRef = doc(db, 'users', user.uid);
  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data() as UserData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data', error);
    return null;
  }
};
