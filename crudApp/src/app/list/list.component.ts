import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: FetchService ) { }

  ngOnInit(): void {
    if (this.service.characters.length === 0){
      this.service.fetchCharacters().subscribe(
        next => console.log("next"), /*(data: any)=> this.service.characters = data.results,*/
        error => console.log("hiba"),
        () => console.log("sikerült")
        );
    }
  }

}
