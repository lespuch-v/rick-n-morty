import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlCharacters = 'https://rickandmortyapi.com/api/character';
  urlLocations = 'https://rickandmortyapi.com/api/location';
  urlEpisodes = 'https://rickandmortyapi.com/api/episode';

  activeFilterArray = [];

  // Create several buttons with ID and these button will represent filters
  // also create array with all the possible ID and filters and than you may render it with tructural directives
  // IDs will be stored in the ARRAY
  // If user clicks on the button filter will change and also URL

  apiData: any;


  getCharacterData() {
    this.http.get(this.urlCharacters).subscribe(res => {
      this.apiData = res;
    });
  }

  logData(){
    console.log(this.apiData)
  }


  constructor(private http: HttpClient) {
    this.getCharacterData()
  }

}
