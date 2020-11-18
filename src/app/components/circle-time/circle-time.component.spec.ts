import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTimeComponent } from './circle-time.component';

describe('CircleTimeComponent', () => {
  let component: CircleTimeComponent;
  let fixture: ComponentFixture<CircleTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
