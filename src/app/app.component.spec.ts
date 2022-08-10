import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from "@angular/platform-browser";

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment number', () => {
    component.number = 0;
    component.increment()
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.alert-heading'))
    let el: HTMLElement = de.nativeElement

    expect(el.innerText).toBe('1');
  })
});
