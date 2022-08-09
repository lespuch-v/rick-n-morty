import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickAndMory';
  isActive = true;

  handleClick($event: Event){
    console.log('Button was clicked!')
    console.log($event)
  }

  test($event: any){
    console.log('test')
  }

}
export function compute(num: number){
  if (num < 0) {
    return 0
  }

  return num + 1
}
export function greet(name:string):string {
  return 'Welcome ' + name
}
