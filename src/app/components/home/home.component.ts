import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { JsonparserService } from '../../services/jsonparser.service';
import { Router } from '@angular/router';
import { Weather } from '../../models/weather';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router, private jsonParser:JsonparserService, private weather:Weather) {

  }

  has_loaded:boolean = false;

  cities:string[];

  all_weather:Weather[];

  ngOnInit() {
    this.has_loaded = false;
    this.all_weather = [];
    this.cities = ['istanbul', 'berlin', 'london', 'helsinki', 'dublin', 'vancouver'];

    this.cities.map(city => {
        this.weatherService.getWeather(city).subscribe((weathers) => {
            if(weathers){
                var array = this.jsonParser.parseJson(weathers, city);

                this.weatherService.getDetails(array[0].woeid).subscribe((weather_details) => {

                   if(weather_details!=undefined&&weather_details!=null&&weather_details!=""){
                       var todays_data = this.jsonParser.parseJsonConsolidatedToday(weather_details, array[0].woeid);

                       if(todays_data!=undefined&&todays_data!={}){
                          var weather = new Weather();

                          weather.title = array[0].title;
                          weather.temp = todays_data.the_temp;
                          weather.min_temp = todays_data.min_temp;
                          weather.max_temp = todays_data.max_temp;
                          weather.woeid = array[0].woeid;
                          weather.icon = "https://www.metaweather.com/static/img/weather/ico/" +todays_data.weather_state_abbr+".ico";

                          this.all_weather.unshift(weather);
                       }

                       this.has_loaded = true;
                   }
                });
            }

        });
    });
  }

  search(keyword){
    if(keyword.length>0){
      this.router.navigate(['/search', keyword]);
    }
    return false;
  }

  showWeather(i){
    this.router.navigate(['/weather', this.all_weather[i].woeid]);
    return false;
  }

}
