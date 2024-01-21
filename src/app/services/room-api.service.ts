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

  getAll(){
    return this.http.get(this.URL);
  }

  deleteById(id: any) {
    return this.http.delete(this.URL+ "/" + id);
  }

  updateData(room: rooms) {
    return this.http.put(this.URL+"/" + room.id, room);
  }

  getById(id: any) {
    return this.http.get(this.URL+ "/" + id)
  }
}
