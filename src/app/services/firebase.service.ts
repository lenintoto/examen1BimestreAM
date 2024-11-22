import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  saveData(data: any) {
    //const firestoreInstance = getFirestore(this.firestore);
    //return firestoreInstance.collection('miprimeraapp').add(data);
  }
} 