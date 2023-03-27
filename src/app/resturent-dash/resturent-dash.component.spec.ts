import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentDashComponent } from './resturent-dash.component';

describe('ResturentDashComponent', () => {
  let component: ResturentDashComponent;
  let fixture: ComponentFixture<ResturentDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturentDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
