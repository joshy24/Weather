import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {

  constructor(private weatherService:WeatherServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getDetails(){
     const woeid = this.route.snapshot.paramMap.get('woeid');
     this.weatherService.getDetails(woeid).subscribe((weather) => {
         console.log(weather);
     });
  }

}
