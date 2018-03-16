import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  cle:String="";
  currentPage:number=1;
  size:number=5;
  pages:Array<number>;

  constructor( private http:Http, private contactsService:ContactsService,private router:Router) { }

  ngOnInit() {
  // this.chercher();
  }

  chercher(){
    this.contactsService.getContacts(this.cle,this.currentPage, this.size)
      .subscribe(data=>{
        console.log(data);
        this.pages=new Array(data.totalPages);
        this.pageContacts=data;
      }),err=>{
      console.log(err);
    }

  }

  goPage(i:number){
    this.currentPage=i;
    this.chercher();
  }

  onEditContact(id:number){
    //console.log(id);
    this.router.navigate(['editcontact',id]);//il va faire une redirection avec comme parrametre ID
  }
  onDeleteContact(id:number){
    console.log(id);
  this.contactsService.getDeleteContact(id).subscribe(data=>{
    console.log(data);
  })
  }
}
