import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'room', component: RoomsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'createroom', component: CreateRoomComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'roomList', component: RoomListComponent},
  {path: 'edit/:id', component: EditRoomComponent},
  {path: 'userList', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
