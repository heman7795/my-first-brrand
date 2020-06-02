import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturecatogeriesComponent } from './featurecatogeries.component';

describe('FeaturecatogeriesComponent', () => {
  let component: FeaturecatogeriesComponent;
  let fixture: ComponentFixture<FeaturecatogeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturecatogeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturecatogeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
