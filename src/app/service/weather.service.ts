import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey='01229a1dbfmsh71238078fb59b49p161a08jsnbcc3593496ef';
  private apiUrl='https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http: HttpClient) { }

  searchWeatherByCity(city: string): Observable<any>{
    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host", "the-weather-api.p.rapidapi.com");

    const options = {headers};
    return this.http.get(`${this.apiUrl}/${city}`, options);

  }
}
