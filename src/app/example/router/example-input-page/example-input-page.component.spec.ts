import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputPageComponent } from './example-input-page.component';

describe('ExampleInputPageComponent', () => {
  let component: ExampleInputPageComponent;
  let fixture: ComponentFixture<ExampleInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleInputPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
