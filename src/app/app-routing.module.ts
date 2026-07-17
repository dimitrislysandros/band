import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SongsComponent } from './components/songs/songs.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './components/photos/photos.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  // { path: 'events', component: EventsComponent },
  { path: '2Girls1CupAdmin', component: AdminFormComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
