import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  urls = {
    spotify:'https://open.spotify.com/artist/2i8mfaUGxOjEhbYBfBExgI?si=dx_5zHnPQY6_u44Ahm8HIQ',
    youtube:'https://www.youtube.com/channel/UCz2Nk9-tdoRRMHD8vlqu2Qg',
    apple:'https://music.apple.com/us/artist/jimmy-li/1247695157',
    instagram:'https://www.instagram.com/jimmy.li.music/',
    itunes:'https://music.apple.com/gr/artist/jimmy-li/1247695157',
    deezer:'https://www.deezer.com/us/artist/78864562',
    soundcloud:'https://soundcloud.com/user-191606160'
  };




  constructor() { }

  ngOnInit(): void {
  }

}
