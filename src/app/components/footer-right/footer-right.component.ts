import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-right',
  templateUrl: './footer-right.component.html',
  styleUrls: ['./footer-right.component.scss']
})
export class FooterRightComponent implements OnInit {
urls = {
    spotify:'https://open.spotify.com/artist/2i8mfaUGxOjEhbYBfBExgI?si=dx_5zHnPQY6_u44Ahm8HIQ',
    youtube:'https://www.youtube.com/channel/UCz2Nk9-tdoRRMHD8vlqu2Qg',
    apple:'https://music.apple.com/us/artist/jimmy-li/1247695157',
    instagram:'https://www.instagram.com/jimmy.li.music/',
    itunes:'https://music.apple.com/gr/artist/jimmy-li/1247695157',
    deezer:'https://www.deezer.com/us/artist/78864562',
    soundcloud:'https://soundcloud.com/user-191606160',
    bandcamp:'jimmyli.bandcamp.com'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
