import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarViewComponent } from './cellar-view.component';

describe('CellarViewComponent', () => {
  let component: CellarViewComponent;
  let fixture: ComponentFixture<CellarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
