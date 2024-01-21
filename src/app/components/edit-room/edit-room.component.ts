import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { rooms } from 'src/app/model/rooms';
import { RoomAPIService } from 'src/app/services/room-api.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit{


  constructor(public apiService: RoomAPIService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getDataById(this.id);
  }

  id!: any;
  roomsData!: rooms;

  createRoom: FormGroup = new FormGroup({
    id: new FormControl(''),
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

  getDataById(id: any) {
    this.apiService.getById(id).subscribe((values: any) => {
      this.roomsData = values;
      this.createRoom.setValue(this.roomsData);
    })
  }
  
  
  onSub() {

    this.apiService.updateData(this.createRoom.value).subscribe((res: any) => {
      this.router.navigateByUrl('/roomList');
    })
  }
}
