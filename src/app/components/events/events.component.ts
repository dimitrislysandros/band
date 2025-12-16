import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/interfaces/event';
import { StaticDataService } from 'src/app/services/static-data.service';
import { environment } from 'src/environments/environment';
import { FirestoreService } from '../../services/firestore.service';
import { UtilityService } from 'src/app/services/util.general';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  gigs  :Gig[]=[];
  constructor(private firestoreService:FirestoreService, private http: HttpClient, private utility:UtilityService) { }

  ngOnInit(): void {
    this.getGigs();
  }


  getGigs(){
    // this.http.get<Gig[]>(`${environment.apiUrl}/gigs`).subscribe(data => this.gigs = data);
    this.firestoreService.getGigs().subscribe(data=> this.gigs=data);
  }

  isAppleDevice(){
    return this.utility.isAppleDevice();
  }

  addToCalendarAuto(event: Gig) {
  if (this.isAppleDevice()) {
    const icsUrl = this.utility.generateICS(event);
    const icsContent = this.utility.generateICS(event);
     const blob = new Blob([icsContent], {
      type: 'text/calendar;charset=utf-8'
    });

    const url = URL.createObjectURL(blob);


    const a = document.createElement('a');
    a.href = url;
    a.download = this.utility.buildICSFilename(event);
    a.click();

    URL.revokeObjectURL(url);

    window.location.href = icsUrl;
  } else {
    const googleUrl = this.utility.addToCalendar(event, 'google');
    window.open(googleUrl, '_blank');
  }
}
}
