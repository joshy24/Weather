import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherServiceService {

  constructor(private http: HttpClient) {
      console.log("data service connected");
  }

  getWeather(keyword: string){
      return this.http.get("weather.php",  {
        params: new HttpParams().set('keyword', keyword),
        headers: new HttpHeaders().set('Method', 'search'),
      });
  }

}
