import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uid:any

  
  
  constructor(private auth: Auth, private firestore: Firestore) {
    this.uid = this.auth.currentUser.uid
  }

  async register({ email, password, fname, lname }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const userget = this.auth.currentUser;
      const imageUrl = ""
      const creds = "false"
      const userDocRef = doc(this.firestore, `users/${userget.uid}`);
      await setDoc(userDocRef, {email,imageUrl,firstName: fname, lastName: lname, seller: creds, uid: userget.uid });
      
      return user;
      return userDocRef;
    } catch (e) {
      return null;
    }
  }


  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
