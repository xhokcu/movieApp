// Firebase
import { db, auth } from '@/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Components
import { Alert } from 'react-native';
// Types
import {
  IRegistrationProps,
  ILoginProps,
} from '@src/types/IRRegistrationProps';

export async function registration({
  firstName,
  lastName,
  email,
  password,
}: IRegistrationProps) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const currentUser = userCredential.user;

    const userDocRef = doc(collection(db, 'users'), currentUser.uid);
    await setDoc(userDocRef, {
      email: currentUser.email,
      firstName,
      lastName,
    });
    Alert.alert('You registered successfully');
  } catch (err) {
    const message = (err as Error).message;
    Alert.alert('There is something wrong', message);
  }
}

export async function login({ email, password }: ILoginProps) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      console.log(res);
      Alert.alert('logged successfuly');
    }
  } catch (err) {
    const message = (err as Error).message;
    Alert.alert('There is something wrong', message);
  }
}

export async function signOut() {}
