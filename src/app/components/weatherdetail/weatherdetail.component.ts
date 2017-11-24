import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'

@Component({
  selector: 'app-weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService) { }

  ngOnInit() {
  }

  getDetails(){
     const woeid = this.route.snapshot.paramMap.get('woeid');
     this.weatherService.getDetails(woeid).subscribe((weather) => {
         console.log(weathers);
     });
  }

}
