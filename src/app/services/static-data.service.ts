import { Injectable, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photos';
import { Album } from '../interfaces/discography';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gig } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  photos:Photo[]=[];
  // [
  //   {
  //     url:'https://i.imgur.com/cekKgUS.jpeg',
  //     mobUrl: 'https://i.imgur.com/wfrU1Eb.jpeg',
  //     title:'OUT',
  //     text:'NOW',
  //     btnText:'LISTEN HERE'

  //   },
  //   {
  //     url:'https://i.imgur.com/vLPrGwf.jpeg',
  //     mobUrl: 'https://i.imgur.com/JjuWnv3.jpeg',
  //     title:'',
  //     text:'',
  //     btnText:''

  //   },{
  //     url:'https://i.imgur.com/Xa51yrY.jpeg',
  //     mobUrl: 'https://i.imgur.com/3BEgSkW.jpeg',
  //     title:'',
  //     text:'',
  //     btnText:''

  //   },
  //   {
  //     url:'https://i.imgur.com/2gJoe0l.jpeg',
  //     mobUrl:  'https://i.imgur.com/JLjIuPY.jpeg',
  //     title:'',
  //     text:'',
  //     btnText:'',
  //     btnURL:'http://distrokid.com/hyperfollow/jimmyli/sugarcanes--grapes-2/',

  //   }
  // ];

    gigs:Gig[]=
    [
      {
          city: 'Athens',
  openningBand:'Toyotomi',
  date: '22/10/25',
  time: '19:00',
    venue:'Astoria',
  bookUrl: 'string',
  mapUrl: 'string;'
      }
    ];
  // public albums:Album[]=[];

constructor(private http: HttpClient) { 

}



getData(url: string): Observable<any> {
    return this.http.get<any>(url);
}


  getPhotos() {
    return  this.http.get<Photo[]>('assets/photos.json').subscribe((data) => {
      this.photos = data;
    });
  }


  getGigs() {
        return this.gigs;
   
  }

}
