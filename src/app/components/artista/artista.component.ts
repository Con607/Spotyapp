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
  loading:boolean;

  constructor( private activatedRoute:ActivatedRoute,
                private spotify:SpotifyService ) {
      this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.getArtista( params['id'] );
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
    this.loading = false;
  }

}
