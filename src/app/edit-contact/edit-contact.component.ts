import { Component, OnInit } from '@angular/core';
import {Contact} from "../model/model.contact";
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number=1;
  contact:Contact = new Contact;
  id:number;

  constructor(private activeRoute:ActivatedRoute,private serviceContact:ContactsService) {

    //console.log(activeRoute.params['id']);
  }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params['id'];
   this.serviceContact.getContact(this.id).subscribe(data=>{
     this.contact=data;
     console.log(data);
   },err=>{
     console.log(err);

   });
  }

  updateContact(){
    this.serviceContact.getUpdateContact(this.contact).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

}
