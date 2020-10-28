import { Component, OnInit } from '@angular/core';

import { WeatherService } from "./weather.service";
import { WeatherForecast } from './WeatherForecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForecast: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.retrieveWeatherForecast();
  }

  retrieveWeatherForecast() {
    return this.weatherService.getWeather().subscribe((data: WeatherForecast[]) => {
      this.weatherForecast = data;
    });
  }
}
