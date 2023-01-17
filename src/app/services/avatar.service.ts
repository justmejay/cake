import { Injectable, Input } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc, collection, addDoc, collectionData, deleteDoc, where } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { updateDoc, WhereFilterOp } from 'firebase/firestore';
import { cpuUsage } from 'process';
import { Observable } from 'rxjs';


export interface userData{
  //id is optional and not required
  uid?: string,
  firstName: string,
  lastName: string,
  email: string,
  seller: string
}

export interface Cake{
  //id is optional and not required
  id?: string,
  imageUrl: string,
  name: string,
  price: number
}

export interface Toppings{
  //id is optional and not required
  id?: string
 toppingsName: string,
 price: string

}

export interface Layers{
  //id is optional and not required
  id?: string
 layername: string,
 price: string

}

export interface Sizes{
  //id is optional and not required
  id?: string
 sizename: string,
 price: string

}




export interface Order{
  //id is optional and not required
  id?: string,
  userdetails: any,
  cakedetails: any,
  topdetails: any,
  layerdetails: any,
  sizedetails: any,
  message: any,
  total: any,
  status: any,
}


@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  @Input() id: any;
  cake: Cake = null;


  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
  ) {}

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef); 
  }



 async  addCakeData({name, price}){

  
      const imageUrl = "";
      const userDocRef = collection(this.firestore, `cakes/`);
      const cakepass = await addDoc(userDocRef, {name: name, price: price});

      return cakepass;

  }





  async  addToppings({topname, toprice}){

  
      const imageUrl = "";
      const userDocRef = collection(this.firestore, `toppings/`);
      const toppings = await addDoc(userDocRef, {toppingsName: topname, price: toprice});

      return toppings;

  }

  async getImageData(cameraFile: Photo, sid: string){
  const user = this.auth.currentUser;
  const path = `uploads/${sid}/cake.png`;
  const storageRef = ref(this.storage, path);


    await uploadString(storageRef, cameraFile.base64String, 'base64');

    const imageUrl = await getDownloadURL(storageRef);
    const userDocRef = doc(this.firestore, `cakes/${sid}`);
      updateDoc(userDocRef, {imageUrl});


  }


  getUserById():Observable<userData>{
    const user = this.auth.currentUser;
    const usersByIdRef = doc(this.firestore, `users/${user.uid}`);
    return docData(usersByIdRef) as Observable <userData>
  }

  getUserIDEdit(uid:any):Observable<userData>{
    const user = this.auth.currentUser;
    const userByIdRefE = doc(this.firestore, `users/${user.uid}`)
    return docData(userByIdRefE, {idField: 'uid'}) as Observable <userData>
  }

  updateProfile(profile:userData){
    const proRef = doc(this.firestore,`users/${profile.uid}`)
    return updateDoc(proRef, {firstName: profile.firstName, lastName: profile.lastName})
  }

  async uploadImage(cameraFile: Photo) {
    const user = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl = await getDownloadURL(storageRef);

      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        imageUrl,
      });
      return true;
    } catch (e) {
      return null;
    }
  }
  
  

  getCakeById(id:any):Observable<Cake>{
    const cakesByIdRef = doc(this.firestore, `cakes/${id}`)
    return docData(cakesByIdRef, {idField: 'id'}) as Observable <Cake>
  }

  getTopById(id:any):Observable<Toppings>{
    const cakesByIdRef = doc(this.firestore, `toppings/${id}`)
    return docData(cakesByIdRef, {idField: 'id'}) as Observable <Toppings>
  }
  

  

  getidselected(){
    this.getCakeById(this.id).subscribe(res => {
      console.log(res)
      this.cake = res
    })
  }
  
  async uploadImageCake(cameraFile: Photo, ids: string) {
    console.log(ids)
    const path = `cakes/${ids}/cake.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');

      const imageUrl = await getDownloadURL(storageRef);

      const userDocRef = doc(this.firestore, `cakes/${ids}`);
      await updateDoc(userDocRef, {
        imageUrl,
      });
      return true;
    } catch (e) {
      return null;
    }
  }

  addCake(cake:Cake){
    const cakeRef = collection(this.firestore, 'cakes')
    return addDoc (cakeRef, cake)
  }

  getCakes(): Observable<Cake[]>{
    const cakesRef = collection(this.firestore, 'cakes')
    return collectionData(cakesRef, {idField: 'id'}) as Observable<[Cake]>
  }


  


  getToppings(): Observable<Toppings[]>{
    const cakesRef = collection(this.firestore, 'toppings')
    return collectionData(cakesRef, {idField: 'id'}) as Observable<[Toppings]>
  }

  deleteTop(top: any){
    console.log(top)
    const cakeRef = doc(this.firestore, `toppings/${top}`)
    return deleteDoc(cakeRef)
  }

  deleteCake(cake: any){
    console.log(cake)
    const cakeRef = doc(this.firestore, `cakes/${cake.id}`)
    return deleteDoc(cakeRef)
  }

   updateCake(cake:Cake){
    const cakeRef = doc(this.firestore,`cakes/${cake.id}`)
    return updateDoc(cakeRef, {name: cake.name, price: cake.price})
  }

  getLayers(): Observable<Layers[]>{
    const layerRef = collection(this.firestore, 'layers')
    return collectionData(layerRef, {idField: 'id'}) as Observable<[Layers]>
  }

  getSizes(): Observable<Sizes[]>{
    const sizeRef = collection(this.firestore, 'sizes')
    return collectionData(sizeRef, {idField: 'id'}) as Observable<[Sizes]>
  }

  updatePriceLayer(layer:Layers){
    const cakeRef = doc(this.firestore,`layers/${layer.id}`)
    return updateDoc(cakeRef, {price: layer.price})
  }

  
  updatePriceSize(size:Sizes){
    const cakeRef = doc(this.firestore,`sizes/${size.id}`)
    return updateDoc(cakeRef, {price: size.price})
  }

  updateTop(toppings:Toppings){
    const cakeRef = doc(this.firestore,`toppings/${toppings.id}`)
    return updateDoc(cakeRef, {toppingsName: toppings.toppingsName, price: toppings.price })
  }


  getlayerById(id:any):Observable<Layers>{
    const cakesByIdRef = doc(this.firestore, `layers/${id}`)
    return docData(cakesByIdRef, {idField: 'id'}) as Observable <Layers>
  }
  getsizeById(id:any):Observable<Sizes>{
    const cakesByIdRef = doc(this.firestore, `sizes/${id}`)
    return docData(cakesByIdRef, {idField: 'id'}) as Observable <Sizes>
  }



  addOrder(order:Order){
    const user  = this.auth.currentUser
    const orderRef = collection(this.firestore, `orders`)
    const pass =  addDoc (orderRef, order)

    return pass;



  }

  
 

  getorders(): Observable<Order[]>{
    const cakesRef = collection(this.firestore, `orders`)
    return collectionData(cakesRef, {idField: 'id'}) as Observable<[Order]>
  }

  getordersg(): Observable<Order[]>{
    const user = this.auth.currentUser
    const cakesRef = collection(this.firestore, `users/${user.uid}/orders`)
    return collectionData(cakesRef, {idField: 'id'}) as Observable<[Order]>
  }

  getcompleted(id:any){

    const cakeRef = doc(this.firestore, `orders/${id}`)
    const comp = "Completed"
    return updateDoc (cakeRef, {status: comp } )
  }

  getaccepted(id:any){

    const cakeRef = doc(this.firestore, `orders/${id}`)
    const comp = "Accepted"
    return updateDoc (cakeRef, {status: comp } )
  }

  getdeclined(id:any){

    const cakeRef = doc(this.firestore, `orders/${id}`)
    const comp = "Declined"
    return updateDoc (cakeRef, {status: comp } )
  }

}
