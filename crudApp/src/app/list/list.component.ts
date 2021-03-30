import { Character } from './../dataObj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  items = Array();

  constructor() {}

  ngOnInit(): void {
    let fromStorage : any = JSON.parse(localStorage.getItem('data') || '{}') as Character;
    console.log(fromStorage);
    for(const key in fromStorage){
      if (fromStorage.hasOwnProperty(key)){
        this.items.push(fromStorage[key]);
        }
    }
  }
}
