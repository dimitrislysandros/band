import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminFormComponent } from "./components/admin-form/admin-form.component";
import { EventsComponent } from "./components/events/events.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { PlaceholderComponent } from "./components/placeholder/placeholder.component";
import { SongsComponent } from "./components/songs/songs.component";
import { MaterialExampleModule } from "src/material.module";
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { FooterRightComponent } from './components/footer-right/footer-right.component';




@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    SongsComponent,
    PhotosComponent,
    EventsComponent,
    AdminFormComponent,
    NavbarLeftComponent,
    FooterRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // Animation,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
    // AngularFirestoreModule,
provideFirebaseApp(() => initializeApp(environment.firebase)),
provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
