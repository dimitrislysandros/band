import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';
import { Album } from '../interfaces/discography';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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



  // public albums:Album[]=[];

constructor(private http: HttpClient) { }



getData(url: string): Observable<any> {
    return this.http.get<any>(url);
}


  getNews() {
    return this.news;
  }

  getAlbums() {
    // return this.albums;
  }
}
