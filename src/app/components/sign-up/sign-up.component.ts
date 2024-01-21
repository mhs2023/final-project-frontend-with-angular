import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(public APIService: RestAPIService, private router: Router) { }

  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl("websiteVisitor")
  })

  CreateAccout(){
    console.log(this.signUpForm.value);

    this.APIService.addData(this.signUpForm.value).subscribe((values:any) => {
      alert("Congratulations !!! Account created successfully.")
      this.router.navigateByUrl("/home");
    })

    
  }

}
