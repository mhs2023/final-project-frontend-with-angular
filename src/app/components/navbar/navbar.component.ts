import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(public authService: RestAPIService, private router: Router) { }

  somossaki = localStorage.getItem("isLogin");
  isAdmin = localStorage.getItem("role");
  
  ngOnInit(): void {
    this.isLogin();
    
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  isLogin() {

    let login = localStorage.getItem("isLogin");
    if (login !== "true") {
      this.router.navigateByUrl('/home');
    } 
  }

  authList: any[] = [];

  login() {

    this.authService.getAll().subscribe((values: any) => {
      this.authList = values;

      let flag = false;

      for (let index = 0; index < this.authList.length; index++) {
        if (this.loginForm.value.email == this.authList[index].email && this.loginForm.value.password == this.authList[index].password) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("email", this.authList[index].email);
          localStorage.setItem("role", this.authList[index].role);
          flag = true;
        }
      }


      if (flag == true) {
        this.router.navigateByUrl('/createroom');
      } else {
        alert("Incorrect UserName Or Password!");
      }


    });
  }
}
