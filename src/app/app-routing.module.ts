import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SongsComponent } from './components/songs/songs.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './components/photos/photos.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'listen', component: SongsComponent },
  { path: '2girls1CupAdmin', component: AdminFormComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
