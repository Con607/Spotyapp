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
      'Authorization': 'Bearer BQCybFsRZMaW9QbBlfinnBwJ15G5snIl0j5ZvaOIbKxSgvVSdhio5l_7OqYzkcwMKtJQHRT5n912xXVl6ws'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
                  .pipe( map( data => data['albums'].items ));
  }


  getArtista(termino:string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                  .pipe( map( data => data['artists'].items ));
  }


}
