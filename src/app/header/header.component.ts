import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shipLogo = '/assets/images/logo/ship.jpg'
  headerLogo = '/assets/images/logo/titleHeader.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
