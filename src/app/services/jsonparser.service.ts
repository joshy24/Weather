import { Injectable } from '@angular/core';
import { TodayService } from './today.service';

@Injectable()
export class JsonparserService {

  constructor(private todayService:TodayService) {

  }

  parseJson(values, key){
       var first = values.split(key)[1];
       var second = JSON.parse(first);

       return second;
  }

  parseJsonConsolidatedToday(values, woeid){
       var first = values.split('https://www.metaweather.com/api/location/'+woeid)[1];
       var second = JSON.parse(first);

       var todays_data = this.todayService.getTodaysWeather(second.consolidated_weather);

       return todays_data;
  }

  parseJsonConsolidatedAll(values, woeid){
       var first = values.split('https://www.metaweather.com/api/location/'+woeid)[1];
       var second = JSON.parse(first);

       return second.consolidated_weather;
  }

}
