import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  panelOpenState=false;
  constructor(private staticDataService:StaticDataService) { }
  news:News[]=[];
  imagesMob:string[] = [];
  images:string[] = [];
  ngOnInit(): void {
    this.getNews();
    this.getImages();
    this.getMobImages();
    if(screen.width<=screen.height){
      this.images=this.imagesMob;
    }
  }


  getNews(){
    this.news=this.staticDataService.getNews();
  }
  getImages(){
    this.images=this.staticDataService.getBanners();
  }
  getMobImages(){
    this.imagesMob=this.staticDataService.getMobileBanners();
  }
}
