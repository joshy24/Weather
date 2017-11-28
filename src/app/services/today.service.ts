import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TodayService {

  constructor() { }
  //2017-11-28
  getTodaysWeather(consolidated){
      var today = new Date();
      var string_date = today.getFullYear() +"-"+(today.getMonth()+1)+"-"+today.getDate();

      return consolidated.forEach(data => {
          if(data.applicable_date == string_date){
              
              return data;
          }
      })
  }
}
