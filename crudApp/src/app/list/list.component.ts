import { Character } from './../dataObj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  items = Array();
  tag : any = 0;
  prevId : any = 0;

  constructor() {}

  delete(id: any){

    const index = this.items.indexOf(this.items.find(x=> x.id === id));
    if (index != -1){
      this.items.splice(index, 1);
    }

    localStorage.removeItem('data');

    for (const key in this.items){
      if (this.items.hasOwnProperty(key)){
        localStorage.setItem("data", JSON.stringify(this.items))
      }
    }

  }
  ngOnInit(): void {
    let fromStorage : any = JSON.parse(localStorage.getItem('data') || '{}') as Character;
    for(const key in fromStorage){
      if (fromStorage.hasOwnProperty(key)){
        this.items.push(fromStorage[key]);
        }
    }
  }
}
