import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeedComponent } from './view-seed.component';

describe('ViewSeedComponent', () => {
  let component: ViewSeedComponent;
  let fixture: ComponentFixture<ViewSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
