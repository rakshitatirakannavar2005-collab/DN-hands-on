import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmrntForm } from './enrollmrnt-form';

describe('EnrollmrntForm', () => {
  let component: EnrollmrntForm;
  let fixture: ComponentFixture<EnrollmrntForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmrntForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmrntForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
