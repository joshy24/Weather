import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router) {

  }

  cities:string[];

  all_weather = [{
    title: "London",
    location_type: "city",
    woeid: 44418,
    latt_long: "51.506321,-0.12714"
  }];

  ngOnInit() {
    this.weatherService.getWeather("london").subscribe((weathers) => {
        console.log(weathers);
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
