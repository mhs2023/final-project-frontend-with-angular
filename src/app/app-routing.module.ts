import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'room', component: RoomsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'createroom', component: CreateRoomComponent},
  {path: 'signUp', component: SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
