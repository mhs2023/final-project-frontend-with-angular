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
    this.somossaki = localStorage.getItem("isLogin");
    this.isAdmin = localStorage.getItem("role");
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
          this.authService.changeMessage(this.authList[index]);
        }
      }


      if (flag == true) {
        this.somossaki = localStorage.getItem("isLogin");
        this.isAdmin = localStorage.getItem("role");
        this.router.navigateByUrl('/createroom');
      } else {
        alert("Incorrect UserName Or Password!");
      }


    });
  }


  logStatus='';


  logOut() {

    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("isLogin");
    this.router.navigateByUrl('/home');
    this.isLogin();
  }
}
