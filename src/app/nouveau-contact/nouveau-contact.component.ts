import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactSevice:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){

    //console.log(dataForm);

    this.contactSevice.getSaveContact(dataForm).subscribe(data=>{
      console.log(data);

    });

  }

}
