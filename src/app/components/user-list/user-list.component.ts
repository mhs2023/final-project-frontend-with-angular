import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteUser } from 'src/app/model/WebsiteUser';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  constructor(public apiService: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  userList: WebsiteUser[] = [];


  getAllData() {
    this.apiService.getAll().subscribe((values: any) => {
      this.userList = values;

    })
  }

  delete(id: any) {
    this.apiService.deleteById(id).subscribe((values: any) => {
      this.getAllData();
    })
  }

}
