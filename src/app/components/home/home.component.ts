import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  errorMessage:string;

  constructor( private spotify:SpotifyService ) {

    this.error = false;

    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe( (data:any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
      console.log(errorService);
      console.log(errorService.error.error.message);
    });

  }


  ngOnInit() {
  }

  refreshToken(){
    this.spotify.refreshToken()
    .subscribe( res => {
      console.log(res);
    }), err => {
      console.log(err);
    };
  }

}
