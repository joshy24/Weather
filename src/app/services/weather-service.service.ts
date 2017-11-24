import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherServiceService {

  constructor(private http: HttpClient) {
      console.log("data service connected");
  }

  getWeather(keyword: string){
      return this.http.get("http://localhost/weather.php",  {
        params: new HttpParams().set('command', 'search').set('keyword', keyword);
      });
  }

  getWeather(woeid: number){
      return this.http.get("http://localhost/weather.php",  {
        params: new HttpParams().set('command', 'location').set('woeid', woeid);
      });
  }

}
