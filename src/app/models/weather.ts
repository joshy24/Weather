import { Injectable } from '@angular/core';

@Injectable()
export class Weather {
    title: string;
    temp: number;
    min_temp: number;
    max_temp: number;
    icon: string;
    woeid:string;
}
