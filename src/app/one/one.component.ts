import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
fullName : string = 'Bini Babu';
  constructor() { }

  ngOnInit(): void {
  }

}
