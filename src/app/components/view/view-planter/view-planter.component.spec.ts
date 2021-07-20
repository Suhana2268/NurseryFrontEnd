import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanterComponent } from './view-planter.component';

describe('ViewPlanterComponent', () => {
  let component: ViewPlanterComponent;
  let fixture: ComponentFixture<ViewPlanterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlanterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
