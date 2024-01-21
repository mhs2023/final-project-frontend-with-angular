import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from './services/rest-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public apiService: RestAPIService, private router: Router) { }
  
  title = 'hotel-management-system';

  somossaki = localStorage.getItem("isLogin");

}
