import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  angularLogo = '/assets/icons/angular.png'
  typescriptLogo = '/assets/icons/typescript.png'
  webstormLogo = '/assets/icons/webstorm.png'
  gitLogo = '/assets/icons/git.png'


  constructor() {
  }

  ngOnInit(): void {
  }

}
