import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // MyApiKey = '9b92f423f89f77afc9b53f7969c300a0';

  city;

  constructor(private httpClient: HttpClient) {

  }
  // 
  // getting information from the api we used 
  // I also added the variable city to the url so I can later search a city of my choice
  getWeather(city): Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9b92f423f89f77afc9b53f7969c300a0');


  }
}
