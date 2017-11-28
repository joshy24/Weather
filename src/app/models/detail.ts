import { Injectable } from '@angular/core';

@Injectable()
export class Detail {
    temp: number;
    min_temp: number;
    max_temp: number;
    icon: string;
    day: string;
    date: string;
}
