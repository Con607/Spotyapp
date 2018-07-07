import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token;

  constructor( private http:HttpClient ) { }


  // refreshToken() {
  //   const url:string = 'https://accounts.spotify.com/api/token';
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  // 
  //   return this.token = this.http.post(url, {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'client_id': 'c638720dc5fc4537bd3776c4ff78672d',
  //     'client_secret': '6a8e4720f9b14059ac64e310fcdf5ff7',
  //     'grant_type': 'client_credentials'
  //   });
  // }


  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      // The token needs to be updated every hour by a backend server or manually to try the app
      'Authorization': 'Bearer BQDOBpcn8LQ1sI31G4TmVJKEpD2KXzhuGUZVY7f-GEji50FLBs7G2Xd19eC5aK5DBfyiuMyfu1m8eqETtv4'
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
