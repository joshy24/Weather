import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherServiceService } from '../../services/weather-service.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  keyword:string;

  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService, private location: Location) {

  }

  ngOnInit() {
     this.getWeather();
  }

  getWeather(){
     const word = this.route.snapshot.paramMap.get('keyword');
     this.keyword = word;
     
     this.weatherService.getWeather(this.keyword).subscribe((weathers) => {
         console.log(weathers);
     });
  }

}
