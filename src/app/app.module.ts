import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import {Route, RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {ContactsService} from "../services/contacts.service";
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const routes :Routes=[
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'newcontact', component:NewContactComponent},
  {path:'nouveaucontact', component:NouveauContactComponent},
  {path:'editcontact/:id', component:EditContactComponent},
  {path:'', redirectTo:'/contacts', pathMatch:'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
