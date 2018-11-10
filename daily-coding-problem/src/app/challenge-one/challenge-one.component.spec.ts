import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOneComponent } from './challenge-one.component';

describe('ChallengeOneComponent', () => {
  let component: ChallengeOneComponent;
  let fixture: ComponentFixture<ChallengeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeOneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to handle the test m = [10, 15, 3, 7] and k = 17 to return true', () => {
    const m = [10, 15, 3, 7];
    const k = 17;
    expect(component.isAnyTwoNumbersAddToKBruteForce(m, k)).toBeTruthy();
  });
});
