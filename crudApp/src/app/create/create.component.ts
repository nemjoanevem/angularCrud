import { Character } from './../dataObj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newCharacter : Character = new Character;

  constructor() { }

  createNewCharacter(){
    let count : any = 0;
    let fromStorage : any = JSON.parse(localStorage.getItem('data') || '{}') as Character;
    for(const key in fromStorage){
      if (fromStorage.hasOwnProperty(key)){
        count++;
        }
    }
    
    this.newCharacter.id = count+1;
    this.newCharacter.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.newCharacter.origin = (<HTMLInputElement>document.getElementById('origin')).value;
    this.newCharacter.gender = (<HTMLInputElement>document.getElementById('gender')).value;
    this.newCharacter.status = (<HTMLInputElement>document.getElementById('status')).value;
    this.newCharacter.img_url = "https://finalspaceapi.com/api/character/avatar/hue.jpg";

    localStorage.setItem("newCharacter", JSON.stringify(this.newCharacter));
  }

  ngOnInit(): void {
  }

}
