import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rooms } from 'src/app/model/rooms';
import { RoomAPIService } from 'src/app/services/room-api.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit{

  constructor(public apiService: RoomAPIService, private router: Router) { }
  ngOnInit(): void {
    this.getAllData();
  }

  roomList: rooms[] = [];

  getAllData() {
    this.apiService.getAll().subscribe((values: any) => {
      this.roomList = values;

    })
  }

  delete(id: any) {
    this.apiService.deleteById(id).subscribe((values: any) => {
      this.getAllData();
    })
  }
  
}
