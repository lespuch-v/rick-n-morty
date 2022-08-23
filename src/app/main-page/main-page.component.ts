import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  rickLogo = '/assets/images/logo/ricklogo.png'
  mainImage: string = '/assets/bg/1062176.jpg'
  netflixLogo: string = '/assets/images/logo/netflix.svg'
  hboLogo: string = '/assets/images/logo/HBO_Max_Logo.svg.png'
  fuckU: string = '/assets/images/logo/fuck-u-rick.png'
  mortyAndRick: string = '/assets/images/logo/mortyAndrick.png'
  netflixLogoBTN: string = '/assets/images/logo/netflix-logo.png'
  hboLogoBTN: string = '/assets/images/logo/hbo-logo.png'

  constructor() {
  }

  ngOnInit(): void {
  }

}
