import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTellComponent } from './show-tell.component';

describe('ShowTellComponent', () => {
  let component: ShowTellComponent;
  let fixture: ComponentFixture<ShowTellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
