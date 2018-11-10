import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-one',
  templateUrl: './challenge-one.component.html',
  styleUrls: ['./challenge-one.component.css']
})
export class ChallengeOneComponent implements OnInit {
  k = 17;
  test1 = [10, 15, 3, 7];
  isTest1Valid: boolean;

  test2 = [11, 15, 3, 7];
  isTest2Valid: boolean;

  constructor() {}

  ngOnInit() {
    this.isTest1Valid = this.isAnyTwoNumbersAddToKBruteForce(
      this.test1,
      this.k
    );

    this.isTest2Valid = this.isAnyTwoNumbersAddToKBruteForce(
      this.test2,
      this.k
    );
  }

  isAnyTwoNumbersAddToKBruteForce(numbers: number[], k: number): boolean {
    for (let x = 0; x < numbers.length; x++) {
      for (let y = 1; y < numbers.length; y++) {
        if (numbers[x] + numbers[y] === k) {
          return true;
        }
      }
    }

    return false;
  }

  isAnyTwoNumbersAddToKUsingSet(m: number[], k: number): boolean {
    const s = new Set();

    for (let x = 0; x < m.length; x++) {
      if (s.has(k - m[x])) {
        return true;
      } else {
        s.add(m[x]);
      }
    }

    return false;
  }
}
