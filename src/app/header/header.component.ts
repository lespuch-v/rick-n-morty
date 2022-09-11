import {Component, OnInit} from '@angular/core';
import {JoyrideService} from "ngx-joyride";
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shipLogo = 'assets/images/logo/ship.jpg'
  headerLogo = 'assets/images/logo/titleHeader.jpg'

  constructor(private joyrideService: JoyrideService, private router: Router) {
  }


  startTour() {
    this.joyrideService.startTour({
      steps: ["step1", "step2@about", "step3@about", "step4@search", 'step5@search'],
      themeColor: '#8d8d8d',
      showCounter: true,
      showPrevButton: true,
      customTexts: {
        prev: 'Back',
        next: 'Next',
        done: 'Done'
      },
    });

    this.joyrideService.closeTour();

  }

  ngOnInit() {
  }
}
