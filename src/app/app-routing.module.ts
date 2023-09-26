import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SongsComponent } from './components/songs/songs.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'listen', component: SongsComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
