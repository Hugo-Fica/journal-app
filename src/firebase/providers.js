
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        return {
            ok: false,
            errorMessage,
        }

    }
}
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp)
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}