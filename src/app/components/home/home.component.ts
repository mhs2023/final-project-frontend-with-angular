import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(public authService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isLogin();  
  }
}
