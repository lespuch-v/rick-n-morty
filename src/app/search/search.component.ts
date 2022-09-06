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


  selectedStatus = ''
  selectedSpecies = ''
  selectedGender = ''

  apiData: any;
  results: any
  searchInput: string = "";
  errorMessage = '';
  showError = false;
  currentFilters = []

  constructor(private http: HttpClient) {
    // this.getCharacterData()
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  logData($event: any) {
    this.searchInput = $event.target.value
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}`
    this.getCharacterData()
  }

  getFilterStatus($event: any) {
    this.showError = false
    this.selectedStatus = $event.target.id
    if (this.searchInput.length === 0) {
      this.urlSearch = `https://rickandmortyapi.com/api/character/?status=${this.selectedStatus}&species=${this.selectedSpecies}&gender=${this.selectedGender}`
      this.getCharacterData()
    }
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}&status=${$event.target.id}&species=${this.selectedSpecies}&gender=${this.selectedGender}`
    this.getCharacterData()
  }

  getFilterSpecies($event: any) {
    this.showError = false
    this.selectedSpecies = $event.target.id
    if (this.searchInput.length === 0) {
      this.urlSearch = `https://rickandmortyapi.com/api/character/?species=${$event.target.id}&status=${this.selectedStatus}&gender=${this.selectedGender}`
    }
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}&status=${this.selectedStatus}&species=${$event.target.id}&gender=${this.selectedGender}`
    this.getCharacterData()
  }

  getFilterGender($event: any) {
    this.showError = false
    this.selectedGender = $event.target.id
    if (this.searchInput.length === 0) {
      this.urlSearch = `https://rickandmortyapi.com/api/character/?gender=${$event.target.id}&status=${this.selectedStatus}&species=${this.selectedSpecies}`
      console.log(this.urlSearch)
    }
    this.urlSearch = `https://rickandmortyapi.com/api/character/?name=${this.searchInput}&status=${this.selectedStatus}&species=${this.selectedSpecies}&gender=${$event.target.id}`
    this.getCharacterData()
  }

  getCharacterData() {
    this.http.get(this.urlSearch).subscribe(res => {
      this.apiData = res
      this.results = this.apiData.results
    }, (error) => {
      this.searchInput = ''
      this.urlSearch = ''
      this.results = null
      this.selectedGender = ''
      this.selectedStatus = ''
      this.selectedSpecies = ''
      this.errorMessage = error
      this.showError = true
      console.log(this.errorMessage)
    })
  }

  clearData() {
    this.searchInput = ''
    this.urlSearch = ''
    this.results = null
    this.selectedGender = ''
    this.selectedStatus = ''
    this.selectedSpecies = ''
    this.showError = false
  }

  // TODO: ADD FOOTER TO YOUR APP -- YOU ARE MISSING FOOTER
  // TODO: ADD CREAL DATA BUTTON INSTEAD OF GET DATA BUTTON!!!!!!!!!!
  // TODO: add footer to all section of tha pages
  // TODO: About page - works
}
