import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipObjectComponent } from './ship-object.component';

describe('ShipObjectComponent', () => {
  let component: ShipObjectComponent;
  let fixture: ComponentFixture<ShipObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
