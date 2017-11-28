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
        responseType: 'text',
        params: new HttpParams().set('command', 'search').set('keyword', keyword),
        headers: new HttpHeaders().set('Accept', "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
      });
  }

  getDetails(woeid: string){
      return this.http.get("http://localhost/weather.php",  {
        responseType: 'text',
        params: new HttpParams().set('command', 'location').set('woeid', woeid)
      });
  }

}
