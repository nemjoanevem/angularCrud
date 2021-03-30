import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApp';
  url = 'https://finalspaceapi.com/api/v0/character';
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then((data: any) => {
      
   
      for (const key in data){
        if (data.hasOwnProperty(key)){
          localStorage.setItem("data", JSON.stringify(data))
        }
      }

    });
  }
}
