import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityChartComponent } from './ability-chart.component';

describe('AbilityChartComponent', () => {
  let component: AbilityChartComponent;
  let fixture: ComponentFixture<AbilityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
