import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/discography';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
  loaded=true;


  constructor(private staticDataService: StaticDataService) { }
  // albums:Album[]=this.staticDataService.albums;
  ngOnInit(): void {

  }

}
