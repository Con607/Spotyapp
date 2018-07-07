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
  error:boolean;
  errorMessage:string;

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
        }, ( errorService ) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = errorService.error.error.message;
          console.log(errorService);
          console.log(errorService.error.error.message);
        });

    this.loading = false;
  }

  getTopTracks(id:string) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    }, ( errorService ) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
      console.log(errorService);
      console.log(errorService.error.error.message);
    });
  }


}
