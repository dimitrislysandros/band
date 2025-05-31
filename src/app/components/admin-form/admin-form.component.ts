import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Gig } from 'src/app/interfaces/event';
import { Photo } from 'src/app/interfaces/photos';
import { FirestoreService } from 'src/app/services/firestore.service';
import { StaticDataService } from 'src/app/services/static-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
  
})
export class AdminFormComponent implements OnInit {
  
   gigs  :Gig[]=[];
  photos: Photo[]=[];
  // adminForm=NgForm;
 newGig: Gig = {
    id:crypto.subtle.generateKey.toString(),
    city: '',
    openningBand: '',
    date: '',
    time: '',
    venue: '',
    bookUrl: '',
    mapUrl: ''
  };


  constructor(private fireStoreService:FirestoreService, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.getEverything();
  }
  getEverything(){
    this.fireStoreService.getGigs().subscribe(data=> this.gigs=data);
    this.fireStoreService.getPhotos().subscribe(data=> this.photos=data);
  }


  addGig() {
    // Optional: validate fields here
    this.fireStoreService.addGig(this.newGig);
    // this.gigs.push({ ...this.newGig }); // push a copy of the newGig object
    // Clear the form
    this.newGig = {
      id:'',
      city: '',
      openningBand: '',
      date: '',
      time: '',
      venue: '',
      bookUrl: '',
      mapUrl: ''
    };
  }

  deleteGig(index: string) {
    this.fireStoreService.deleteGig(index);
  // this.gigs.splice(index, 1);
}

isNewGigValid(): boolean {
  const g = this.newGig;
  return !!(g.city && g.openningBand && g.date && g.time && g.venue && g.bookUrl && g.mapUrl);
}

saveEverything(){
//    this.http.post(`${environment.apiUrl}/save-gigs`, this.gigs).subscribe(
//   () => alert('Saved!'),
//   err => console.error('Failed to save gigs', err)
// );
//     this.http.post(`${environment.apiUrl}/save-photos`, this.photos).subscribe(
//   () => alert('Saved!'),
//   err => console.error('Failed to save gigs', err)
// );  
}

}
