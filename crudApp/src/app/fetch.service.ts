/*import { Character } from './dataObj';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  characterUrl = 'https://finalspaceapi.com/api/v0/character';
  public characters: Character[] = [];
 

  constructor(private http: HttpClient) {
    
  }

  public fetchCharacters(): Observable<any> {
    return this.http.get(this.characterUrl);
  }

}


*/