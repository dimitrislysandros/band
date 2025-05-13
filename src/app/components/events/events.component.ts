import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/interfaces/event';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  gigs  :Gig[]=[];
  constructor(private staticDataService:StaticDataService) { }

  ngOnInit(): void {
    this.getGigs();
  }


  getGigs(){
    this.gigs=this.staticDataService.getGigs();
  }

}
