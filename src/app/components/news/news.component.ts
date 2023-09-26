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
  images = ['https://i.imgur.com/aq77J1V.jpg',
            'https://i.imgur.com/AZOPxav.jpg',
            'https://i.imgur.com/53YSehF.jpg',
            'https://i.imgur.com/fgZnaKl.jpg'
          ];
  ngOnInit(): void {
    this.getNews();
  }


  getNews(){
    this.news=this.staticDataService.getNews();
  }
}
