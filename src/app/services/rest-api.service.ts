import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteUser } from '../model/WebsiteUser';


@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient) { }

  private URL = "http://localhost:3500/websiteUser";

  httpOptions = {
    headers: new HttpHeaders(
      {'content-Type': 'application/json'

      }
    )
  }

  addData(user: WebsiteUser) {
    return this.http.post(this.URL, user)
  }

}
