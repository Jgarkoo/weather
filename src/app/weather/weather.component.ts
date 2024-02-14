import { Component} from '@angular/core';
import { MyService } from '../service/my.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  {
  city! : string;
  weatherData: any;

  constructor(private service: MyService){}

  getWeather(){
    this.service.getWeather(this.city).subscribe(data =>{
      this.weatherData = data;
      console.log(data);
      
    });
  }
}
