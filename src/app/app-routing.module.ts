import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherdetailComponent } from './components/weatherdetail/weatherdetail.component';

const routes: Routes = [
   //{path: '', redirectTo: '/#', pathMatch: 'full'},
   {path: '', component: HomeComponent},
   {path: 'search/:keyword', component: SearchComponent},
   {path: 'weather/:woeid', component: WeatherdetailComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
