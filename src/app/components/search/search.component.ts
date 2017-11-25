import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  has_loaded:boolean;

  keyword:string;

  search_weather=[];

  constructor(private route: ActivatedRoute, private weatherService: WeatherServiceService, private location: Location, private router:Router) {

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
         console.log(weathers);
     });
  }

}
