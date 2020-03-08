import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerComponent } from './grocer.component';

describe('GrocerComponent', () => {
  let component: GrocerComponent;
  let fixture: ComponentFixture<GrocerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
