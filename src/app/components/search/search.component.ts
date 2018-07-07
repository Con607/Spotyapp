import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading:boolean;
  error:boolean;
  errorMessage:string;

  constructor( private spotify:SpotifyService ) { }

  ngOnInit() {
  }

  buscar(termino:string) {
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino)
                  .subscribe( (data:any) => {
                    console.log(data);
                    this.artistas = data;
                  }, ( errorService ) => {
                    this.loading = false;
                    this.error = true;
                    this.errorMessage = errorService.error.error.message;
                    console.log(errorService);
                    console.log(errorService.error.error.message);
                  });
    this.loading = false;
  }

}
