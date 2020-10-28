import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForecast = [{
    "date": "2018-05-06",
    "temperatureC": 1,
    "summary": "Freezing"
  },
  {
    "date": "2018-05-07",
    "temperatureC": 14,
    "summary": "Bracing"
  },
  {
    "date": "2018-05-08",
    "temperatureC": -13,
    "summary": "Freezing"
  },
  {
    "date": "2018-05-09",
    "temperatureC": -16,
    "summary": "Balmy"
  },
  {
    "date": "2018-05-10",
    "temperatureC": -2,
    "summary": "Chilly"
  }];

  constructor() { }

  ngOnInit(): void {
  }
}
