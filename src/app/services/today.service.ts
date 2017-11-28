import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodayService {

  today:Date;
  string_date:string;

  constructor() {
     this.today = new Date();
     this.string_date = this.today.getFullYear() +"-"+(this.today.getMonth()+1)+"-"+this.today.getDate();
  }
  //2017-11-28
  getTodaysWeather(consolidated){
      var info = {};
      consolidated.forEach(data => {
          if(data.applicable_date == this.string_date){
              info = data;
          }
      });

      return info;
  }

  getDateWeekInWords(date_week){
      var date = new Date(date_week);

      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
      return days[date.getDay()];
  }

}
