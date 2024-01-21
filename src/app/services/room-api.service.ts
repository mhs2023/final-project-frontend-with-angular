import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rooms } from '../model/rooms';


@Injectable({
  providedIn: 'root'
})
export class RoomAPIService {

  

  constructor(private http: HttpClient) { }

  private URL = "http://localhost:3500/rooms";

  httpOptions = {
    headers: new HttpHeaders(
      {'content-Type': 'application/json'

      }
    )
  }

  addData(room: rooms) {
    return this.http.post(this.URL, room)
  }
}
