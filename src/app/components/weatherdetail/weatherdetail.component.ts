import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JsonparserService } from '../../services/jsonparser.service';
import { Detail } from '../../models/detail';
import { Location } from '@angular/common';
import { TodayService } from '../../services/today.service';

@Component({
  selector: 'app-weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {
  has_loaded:boolean = false;

  all_weather:Detail[];

  title:string;

  constructor(private weatherService:WeatherServiceService, private router:Router, private route: ActivatedRoute, private jsonParser:JsonparserService, private todayService:TodayService, private location: Location) { }

  ngOnInit() {
    this.title = "";
    this.all_weather = [];
    this.getDetails();
  }

  getDetails(){
     const woeid = this.route.snapshot.paramMap.get('woeid');
     this.weatherService.getDetails(woeid).subscribe((weather_details) => {

         var all_data = this.jsonParser.parseJsonConsolidatedAll(weather_details, woeid);
         this.title = all_data.title;

         all_data.consolidated_weather.forEach(consolidated => {
              var detail = new Detail();

              detail.temp = consolidated.the_temp;
              detail.min_temp = consolidated.min_temp;
              detail.max_temp = consolidated.max_temp;
              detail.icon = "https://www.metaweather.com/static/img/weather/ico/" +consolidated.weather_state_abbr+".ico";
              detail.day = this.todayService.getDateWeekInWords(consolidated.applicable_date);
              detail.date = consolidated.applicable_date;

              this.all_weather.push(detail);

              this.has_loaded = true;
         });

     });
  }

  back(){
      this.location.back();
  }

}
