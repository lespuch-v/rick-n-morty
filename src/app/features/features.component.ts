import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  workInProgress = '/assets/icons/work.png'
  cogImage = '/assets/icons/cog.png'

  constructor() {
  }

  ngOnInit(): void {
  }

}
