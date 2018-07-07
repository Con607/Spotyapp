import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }


  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      // The token needs to be updated every hour by a backend server or manually to try the app
      'Authorization': 'Bearer BQD10RnpolpogsU0b0eSKUqUDpv1jRGiU3ccO8TnHYAv84YjUYErBLGWVGW4_Ox3hMjnL94gNaZPL6n_KWA'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
                  .pipe( map( data => data['albums'].items ));
  }


  getArtistas(termino:string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                  .pipe( map( data => data['artists'].items ));
  }

  getArtista(id:string) {

    return this.getQuery(`artists/${id}`);
                  // .pipe( map( data => data['artists'].items ));
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
                      .pipe( map( data => data['tracks'] ));
  }


}
