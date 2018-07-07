import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;

  constructor( private activatedRoute:ActivatedRoute,
                private spotify:SpotifyService ) {
      this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.getArtista( params['id'] );
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista( id:string ){
    this.loading = true;
    this.spotify.getArtista( id ).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
        });

    // this.spotify.getTopTracks(id).subscribe( songs => {
    //   console.log(songs);
    //   this.songs = songs['tracks'];
    // });

    this.loading = false;
  }

  getTopTracks(id:string) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }


}
