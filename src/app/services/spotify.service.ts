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
      'Authorization': 'Bearer BQAI46A_-ZTD5owxb7es5X7Vo3Kf9vCkpinwLi3tfoy6TtU0pMh00tZRq0R_pd9_Cv6A1jDGMpHuNmLLlI8'
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


}
