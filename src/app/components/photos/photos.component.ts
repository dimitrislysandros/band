import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photos';
import { StaticDataService } from 'src/app/services/static-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-news',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  panelOpenState=false;
  constructor(private staticDataService:StaticDataService, private http: HttpClient) { }
  photos:Photo[]=[];
  isPhoneScreen:boolean=false;
  ngOnInit(): void {
    this.getPhotos();
 
    if(screen.width<=screen.height){
      this.isPhoneScreen=true;
    }
  }


  getPhotos(){
     this.http.get<Photo[]>(`${environment.apiUrl}/photos`).subscribe(data => this.photos = data);
  }
  
}
