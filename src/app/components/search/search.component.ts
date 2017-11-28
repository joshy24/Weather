import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherServiceService } from '../../services/weather-service.service'
import { JsonparserService } from '../../services/jsonparser.service';
import { Router } from '@angular/router';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  has_loaded:boolean;

  keyword:string;

  all_weather:Weather[];

  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService, private location: Location, private router:Router, private jsonParser:JsonparserService, private weather:Weather) {

  }

  search(word){
    if(word.length>0){
      this.has_loaded = false;
      this.keyword = word;
      this.router.navigate(['/search', word]);
    }
    return false;
  }

  ngOnInit() {
     setTimeout(this.has_loaded);
     this.getWeather();
  }

  ngAfterViewInit(){
      this.has_loaded = true;
  }

  getWeather(){
     const word = this.route.snapshot.paramMap.get('keyword');
     this.keyword = word;

     this.weatherService.getWeather(this.keyword).subscribe((weathers) => {

       if(weathers){
           var array = this.jsonParser.parseJson(weathers, this.keyword);

           this.weatherService.getDetails(array[0].woeid).subscribe((weather_details) => {
               var todays_data = this.jsonParser.parseJsonConsolidatedToday(weather_details, array[0].woeid);

               var weather = new Weather();

               weather.title = array[0].title;
               weather.temp = todays_data.the_temp;
               weather.min_temp = todays_data.min_temp;
               weather.max_temp = todays_data.max_temp;
               weather.woeid = array[0].woeid;
               weather.icon = "https://www.metaweather.com/static/img/weather/ico/" +todays_data.weather_state_abbr+".ico";

               this.all_weather.unshift(weather);
           });
       }
     });
  }

}
