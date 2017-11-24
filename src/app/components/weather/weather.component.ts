import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

})
export class WeatherComponent implements OnInit {
  @Input() weather;
  constructor() { }

  ngOnInit() {
  }

}
