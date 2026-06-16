import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginStep } from './auth-login-step';

describe('AuthLoginStep', () => {
  let component: AuthLoginStep;
  let fixture: ComponentFixture<AuthLoginStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginStep],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
