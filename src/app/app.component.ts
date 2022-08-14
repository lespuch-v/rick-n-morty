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


  dataNames: any[] = []

  // Create several buttons with ID and these button will represent filters
  // also create array with all the possible ID and filters and than you may render it with tructural directives
  // IDs will be stored in the ARRAY
  // If user clicks on the button filter will change and also URL

  apiData: any;
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
    this.http.get(this.urlSearch).subscribe((res) => {
      this.apiData = res;
      console.log(this.apiData)
      for (let i = 0; i < this.apiData.results.length; i++) {
        this.dataNames.push(this.apiData.results[i].name)
      }
    });
  }

}
