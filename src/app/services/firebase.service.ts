import { Injectable } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestoreInstance = getFirestore();

  constructor() { }

  saveData(dogImages: string[], books: any[]) {
    const data = {
      dogImages: dogImages,
      books: books,
      timestamp: new Date()
    };
    const dogImagesCollection = collection(this.firestoreInstance, 'examenAppsMoviles');
    return addDoc(dogImagesCollection, data);
  }
}