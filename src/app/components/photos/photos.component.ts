import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photos';
import { StaticDataService } from 'src/app/services/static-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  panelOpenState=false;
  constructor(private fireStoreService:FirestoreService, private http: HttpClient, private sanitizer: DomSanitizer) { 
    const url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  photos:Photo[]=[];
  isPhoneScreen:boolean=false;
  videoUrl: SafeResourceUrl='';
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
