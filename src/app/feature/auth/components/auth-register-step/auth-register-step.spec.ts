import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterStep } from './auth-register-step';

describe('AuthRegisterStep', () => {
  let component: AuthRegisterStep;
  let fixture: ComponentFixture<AuthRegisterStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRegisterStep],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthRegisterStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
