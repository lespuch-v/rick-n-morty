import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  urlSearch = 'https://rickandmortyapi.com/api/character/?name=rick'
  generalFilters = ['Status', 'Species', 'Gender']; // ? ? ?
  statusFilters = ['Alive', 'Dead', 'unknown'];
  speciesFilters = ['Human', 'Alien', 'Humanoid', 'Mythological', 'Unknown', 'Poopybutthole', 'Animal', 'Disease', 'Robot', 'Cronenberg'];
  genderFilters = ['female', 'male', 'genderless', 'unknown'];


  isStatusActive = false;
  selectedStatus = ''
  isSpeciesActive = false;
  selectedSpecies = ''
  isGenderActive = false;
  selectedGender = ''

  apiData: any;
  results: any
  searchInput: string = "";

  constructor(private http: HttpClient) {
    // this.getCharacterData()
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  // TODO: REFACTOR THIS CODE

  // Getting data from the input value and store the into searchInput
  logData($event: any) {
    this.searchInput = $event.target.value
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}`
    this.getCharacterData()
  }

  getFilterStatus($event: any) {
    this.isStatusActive = !this.isStatusActive
    this.selectedStatus = $event.target.id
    if (this.searchInput.length === 0) {
      if (this.isStatusActive || this.isGenderActive || this.isSpeciesActive) {
        this.urlSearch = `https://rickandmortyapi.com/api/character/?status=${$event.target.id}&species=${this.selectedSpecies}&gender=${this.selectedGender}`
        this.getCharacterData()
      }
    }
    this.urlSearch += `&status=${$event.target.id}`
    this.getCharacterData()
  }

  getFilterSpecies($event: any) {
    this.isSpeciesActive = !this.isSpeciesActive
    this.selectedSpecies = $event.target.id
    if (this.searchInput.length === 0) {
      if (this.isStatusActive || this.isGenderActive || this.isSpeciesActive) {
        this.urlSearch = `https://rickandmortyapi.com/api/character/?species=${$event.target.id}&status=${this.selectedStatus}&gender=${this.selectedGender}`
      }
    }
    this.urlSearch += `&species=${$event.target.id}`
    this.getCharacterData()
  }

  getFilterGender($event: any) {
    this.isGenderActive = !this.isGenderActive
    this.selectedGender = $event.target.id

    if (this.searchInput.length === 0) {
      if (this.isStatusActive || this.isGenderActive || this.isSpeciesActive) {
        this.urlSearch = `https://rickandmortyapi.com/api/character/?gender=${$event.target.id}&status=${this.selectedStatus}&species=${this.selectedSpecies}`
        console.log(this.urlSearch)
      }
    }
    this.urlSearch += `&gender=${$event.target.id}`
    this.getCharacterData()
  }

  getCharacterData() {
    this.http.get(this.urlSearch).subscribe(res => {
      this.apiData = res
      this.results = this.apiData.results
    });
  }

  clearData() {
    this.searchInput = ''
    this.urlSearch = ''
    this.results = null
    this.isGenderActive = false
    this.isStatusActive = false
    this.isSpeciesActive = false
    this.selectedGender = ''
    this.selectedStatus = ''
    this.selectedSpecies = ''
  }

  // TODO: ADD FOOTER TO YOUR APP -- YOU ARE MISSING FOOTER
  // TODO: ADD CREAL DATA BUTTON INSTEAD OF GET DATA BUTTON!!!!!!!!!!
}
