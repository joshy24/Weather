import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { JsonparserService } from '../../services/jsonparser.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router, private jsonParser:JsonparserService) {

  }

  has_loaded:boolean;

  cities:string[];

  all_weather:any[];

  ngOnInit() {
    this.has_loaded = false;
    this.all_weather = [];
    this.cities = ['istanbul', 'berlin', 'london', 'helsinki', 'dublin', 'vancouver'];

    this.cities.map(city => {
        this.weatherService.getWeather(city).subscribe((weathers) => {
            if(weathers){
                var array = this.jsonParser.parseJson(weathers, city);

                this.weatherService.getDetails(array[0].woeid).subscribe((weather_details) => {

                   var todays_data = this.jsonParser.parseJsonConsolidatedToday(weather_details, array[0].woeid);

                })
            }

        });
    })
  }

  ngAfterViewInit(){
      this.has_loaded = true;
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

interface City{

}
