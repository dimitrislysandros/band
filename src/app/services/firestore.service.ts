import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getPhotos(): Observable<any[]> {
    const photosRef = collection(this.firestore, 'photos');
    return collectionData(photosRef, { idField: 'id' }) as Observable<any[]>;
  }
  getGigs(): Observable<any[]> {
    const gigsRef = collection(this.firestore, 'gigs');
    return collectionData(gigsRef, { idField: 'id' }) as Observable<any[]>;
  }

  addGig(gig: any) {
    const gigsRef = collection(this.firestore, 'gigs');
    return addDoc(gigsRef, gig);
  }

  updateGig(id: string, gig: any) {
    const gigDoc = doc(this.firestore, `gigs/${id}`);
    return updateDoc(gigDoc, gig);
  }

  deleteGig(id: string) {
    const gigDoc = doc(this.firestore, `gigs/${id}`);
    return deleteDoc(gigDoc);
  }
}
