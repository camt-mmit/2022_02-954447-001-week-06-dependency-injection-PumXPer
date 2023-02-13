import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplaySectionPageComponent } from './example-display-section-page.component';

describe('ExampleDisplaySectionPageComponent', () => {
  let component: ExampleDisplaySectionPageComponent;
  let fixture: ComponentFixture<ExampleDisplaySectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleDisplaySectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDisplaySectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
