import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';
import { Album } from '../interfaces/discography';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gig } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  news:News[]=[{
  newsid: '1',
  title: '"Forget", first single, is out!',
  text: "I am excited to announce the release of my first single, everywhere. Enjoy!",
  url: 'https://www.youtube.com/watch?v=amri7qrHFQY&ab_channel=JimmyLi',
  img: '/assets/meta/Cover.jpg',
  date: new Date('22/02/2022'),
  btnText: 'Listen Now!'
  },];


  bannerImages:string[]=['https://i.imgur.com/vLPrGwf.jpeg',
            'https://i.imgur.com/Xa51yrY.jpeg',
            'https://i.imgur.com/5IFiM0J.jpeg',
            'https://i.imgur.com/2gJoe0l.jpeg',];

  bannerImagesMobile:string[]=['https://i.imgur.com/JjuWnv3.jpeg',
            'https://i.imgur.com/3BEgSkW.jpeg',
            'https://i.imgur.com/AnYNLic.jpeg',
            'https://i.imgur.com/JLjIuPY.jpeg'];

    gigs:Gig[]=
    [
  //     {
  //         city: 'Athens',
  // openningBand:'Toyotomi',
  // date: '22/10/25',
  // time: '19:00',
  //   venue:'Astoria',
  // bookUrl: 'string',
  // mapUrl: 'string;'
  //     }
    ];
  // public albums:Album[]=[];

constructor(private http: HttpClient) { }



getData(url: string): Observable<any> {
    return this.http.get<any>(url);
}


  getNews() {
    return this.news;
  }

  getBanners(){
    return this.bannerImages;
  
  }

  getMobileBanners(){
    return this.bannerImagesMobile
  }

  getAlbums() {
    // return this.albums;
  }


  getGigs() {
        return this.gigs;
   
  }
}
