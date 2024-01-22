import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteUser } from '../model/WebsiteUser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient, private router: Router) { }

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

  getAll(){
    return this.http.get(this.URL);
  }

  deleteById(id: any) {
    return this.http.delete(this.URL+ "/" + id);
  }

  isLogin() {

    let login = localStorage.getItem("isLogin");
    let role = localStorage.getItem("role");
    if (login !== "true") {
      this.router.navigateByUrl('/log-in');
    } else {
      if (role ==  "admin"){
        this.router.navigateByUrl('/create');
      }
    }
  }

  private messageSource: any = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {this.messageSource.next(message)}

  updateData(user: WebsiteUser) {
    return this.http.put(this.URL+"/" + user.id, user);
  }

  getById(id: any) {
    return this.http.get(this.URL+ "/" + id)
  }
}
