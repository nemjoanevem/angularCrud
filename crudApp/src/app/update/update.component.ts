import { ListComponent } from './../list/list.component';
import { Character } from './../dataObj';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateItem : any = JSON.parse(localStorage.getItem('updateElement') || '{}') as Character;

  constructor() { }

  updateItemFunction(){
    this.updateItem.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.updateItem.origin = (<HTMLInputElement>document.getElementById('origin')).value;
    this.updateItem.gender = (<HTMLInputElement>document.getElementById('gender')).value;
    this.updateItem.status = (<HTMLInputElement>document.getElementById('status')).value;

    localStorage.setItem("updatedElement", JSON.stringify(this.updateItem));

    
  }

  ngOnInit(): void {
    
  }
}
