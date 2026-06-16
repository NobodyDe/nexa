import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmailStep } from './auth-email-step';

describe('AuthEmailStep', () => {
  let component: AuthEmailStep;
  let fixture: ComponentFixture<AuthEmailStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmailStep],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
