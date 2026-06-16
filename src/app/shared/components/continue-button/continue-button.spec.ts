import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueButton } from './continue-button';

describe('ContinueButton', () => {
  let component: ContinueButton;
  let fixture: ComponentFixture<ContinueButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ContinueButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
