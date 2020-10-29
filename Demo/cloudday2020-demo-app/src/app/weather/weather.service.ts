import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { WeatherForecast } from './WeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private heroesUrl = environment.API + '/weather';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getWeather(): Observable<WeatherForecast[]> {
    return this.httpClient.get<WeatherForecast[]>(this.heroesUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(errorMessage);
  }
}
