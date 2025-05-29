import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Album } from 'src/app/interfaces/discography';
import { StaticDataService } from 'src/app/services/static-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  html: any;

  albums:Album[]=[];

  constructor(private staticDataService: StaticDataService, protected sanitizer: DomSanitizer ) {

  }
  ngOnInit(): void {


    if(environment.apiUrl){

      this.staticDataService.getData("./assets/albums.json").subscribe((result)=> {
        console.log(result);
        this.albums=result;
      });
    }
else{

  this.staticDataService.getData("../../../assets/albums.json").subscribe((result)=> {
    console.log(result);
    this.albums=result;

  });

}
  }


  sanitize(url:string){
    var sanitized=this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return sanitized;
  }
}
