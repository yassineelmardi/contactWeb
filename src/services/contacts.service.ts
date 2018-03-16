import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../app/model/model.contact";

@Injectable()
export class ContactsService {

  pageContacts:any;
  constructor(public http:Http) { }

  getContacts(cle:String,page:number,size:number){
  return this.http.get("http://localhost:8080/chercher?mc="+cle+"&page="+page+"&size="+size+"")
    .map(resp=>{
      return resp.json();
    })
  }

  getSaveContact(contact:Contact){
    console.log("save"+contact);
  return this.http.post("http://localhost:8080/saveContact",contact).map(resp=>{return resp.json()});
  }

  getContact(id:number){
    console.log("get"+id);
    return this.http.get("http://localhost:8080/contact/"+id).map(resp=>{return resp.json()});
  }

  getUpdateContact(contact:Contact){
    return this.http.put("http://localhost:8080/saveContact/"+contact.id,contact).map(resp=>{return resp.json()});
  }

  getDeleteContact(id:number){
    return this.http.delete("http://localhost:8080/deleteContact/"+id);
  }

}
