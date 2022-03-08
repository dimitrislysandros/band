import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

const routes: Routes = [
  { path: '', component: PlaceholderComponent },
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'players',
  //       component: MemberListComponent,
  //       resolve: { users: MemberListResolver }
  //     },
  //     {
  //       path: 'players/:id',
  //       component: MemberDetailComponent,
  //       resolve: { user: MemberDetailResolver }
  //     },
  //     {
  //       path: 'player/edit',
  //       component: MemberEditComponent,
  //       resolve: { user: MemberEditResolver }
  //     },
  //     { path: 'messages', component: MessagesComponent },
  //     { path: 'lists', component: ListsComponent },
  //     {
  //       path: 'events',
  //       component: EventsComponent,
  //       resolve: { events: EventListResolver }
  //     },
  //     {
  //       path: 'events/:id',
  //       component: EventDetailComponent,
  //       resolve: { event: EventDetailResolver }
  //     },
  //     {
  //       path: 'places',
  //       component: PlaceListComponent,
  //       resolve: { places: PlaceListResolver }
  //     },
  //     {
  //       path: 'places/:id',
  //       component: PlaceDetailComponent,
  //       resolve: { place: PlaceDetailResolver }
  //     }
  //   ]
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
