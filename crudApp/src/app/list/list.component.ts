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
    this.saveItemsInLocalStorage();
  }

  ngOnInit(): void {
    let fromStorage : any = JSON.parse(localStorage.getItem('data') || '{}') as Character;
    for(const key in fromStorage){
      if (fromStorage.hasOwnProperty(key)){
        this.items.push(fromStorage[key]);
        }
    }

    const updatedItem: any = JSON.parse(localStorage.getItem('updatedElement') || '{}') as Character;
    const updatedItemId: any = updatedItem.id;

    const index = this.items.indexOf(this.items.find(x=> x.id === updatedItemId));
    if (index != -1){
      this.items[index] = updatedItem;
    }

    const newItem: any = JSON.parse(localStorage.getItem('newCharacter') || '{}') as Character;
    const newItemId: any = newItem.id;
    const i = this.items.indexOf(this.items.find(x=> x.id === newItemId));
    if (i === -1){
      this.items.push(newItem);
    }


    this.saveItemsInLocalStorage();

  }
  
  saveGivenElementInStorage(id: any, name : any){
    const index = this.items.indexOf(this.items.find(x=> x.id === id));
    if (index != -1){
        console.log(this.items[index]);
        localStorage.setItem(name, JSON.stringify(this.items[index]));
    }
  }


  saveItemsInLocalStorage(){
    for (const key in this.items){
      if (this.items.hasOwnProperty(key)){
        localStorage.setItem("data", JSON.stringify(this.items))
      }
    }
  }

}
