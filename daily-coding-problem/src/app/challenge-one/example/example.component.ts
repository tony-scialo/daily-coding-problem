import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input()
  k: number;

  @Input()
  m: number[];

  @Input()
  isTestValid: boolean;

  constructor() {}

  ngOnInit() {}
}
