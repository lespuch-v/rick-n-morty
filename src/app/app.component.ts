import {Component} from '@angular/core';
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
  urlSearch = 'https://rickandmortyapi.com/api/character/?name=rick'


  generalFilters = ['Status', 'Species', 'Gender'];
  statusFilters = ['Alive', 'Dead', 'unknown'];
  speciesFilters = ['Human', 'Alien', 'Humanoid', 'Mythological', 'Unknown', 'Poopybutthole', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'];
  genderFilters = ['female', 'male', 'genderless', 'unknown'];


  apiData: any;
  results: any
  searchInput: string = "";

  constructor(private http: HttpClient) {
    // this.getCharacterData()
  }

  // Getting data from the input value and store the into searchInput
  logData($event: any) {
    this.searchInput = $event.target.value
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}`
    console.log(this.urlSearch)
    this.getCharacterData()
  }

  getCharacterData() {
    this.http.get(this.urlSearch).subscribe(res => {
      this.apiData = res
      this.results = this.apiData.results
      console.log(this.apiData)
    });
  }

}
