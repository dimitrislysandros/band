import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photos';
import { StaticDataService } from 'src/app/services/static-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  panelOpenState=false;
  constructor(private fireStoreService:FirestoreService, private http: HttpClient) { }
  photos:Photo[]=[];
  isPhoneScreen:boolean=false;
  ngOnInit(): void {
    if(screen.width<=screen.height){
      this.isPhoneScreen=true;
    }
    this.getPhotos();
 
   
  }


  getPhotos(){
    
    this.fireStoreService.getPhotos().subscribe(data=> this.photos=data);
    
  }
  
}
