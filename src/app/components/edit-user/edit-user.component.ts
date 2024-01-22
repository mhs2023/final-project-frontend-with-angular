import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteUser } from 'src/app/model/WebsiteUser';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{

  constructor(public apiService: RestAPIService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getDataById(this.id);
  }

  id!: any;
  userData!: WebsiteUser;
  
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl("websiteVisitor")
  })

  getDataById(id: any) {
    this.apiService.getById(id).subscribe((values: any) => {
      this.userData = values;
      this.signUpForm.setValue(this.userData);
    })
  }
  
  
  CreateAccout() {

    this.apiService.updateData(this.signUpForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/userList');
    })
  }

}
