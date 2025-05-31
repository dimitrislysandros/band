import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/interfaces/event';
import { StaticDataService } from 'src/app/services/static-data.service';
import { environment } from 'src/environments/environment';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  gigs  :Gig[]=[];
  constructor(private firestoreService:FirestoreService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getGigs();
  }


  getGigs(){
    // this.http.get<Gig[]>(`${environment.apiUrl}/gigs`).subscribe(data => this.gigs = data);
    this.firestoreService.getGigs().subscribe(data=> this.gigs=data);
  }

}
