import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomAPIService } from 'src/app/services/room-api.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent {

  constructor(public APIService: RoomAPIService, private router: Router) { }

  createRoom: FormGroup = new FormGroup({
    Room_Code: new FormControl(''),
    Accommodations_Category: new FormControl(''),
    RoomSize: new FormControl(''),
    WifiAvailability: new FormControl(''),
    AC: new FormControl(''),
    Room_Amenities: new FormControl(''),
    Sleeping_Bag: new FormControl(''),
    Single_Bed: new FormControl(''),
    Double_Bed: new FormControl(''),
    GuestSize: new FormControl('')
  })

  addingRoom() {
    console.log(this.createRoom.value);
    this.APIService.addData(this.createRoom.value).subscribe((values: any) => {
      this.router.navigateByUrl("/roomList");
    })
  }

}
