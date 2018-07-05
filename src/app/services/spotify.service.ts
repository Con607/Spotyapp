import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBxIBRvssu610CPdeK76kOF0EpSXMQwljoUhjiETk8XU9odZ1Hm_Ckkc-06_j299mgAJaJatfnnCc93gF0'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }


}
