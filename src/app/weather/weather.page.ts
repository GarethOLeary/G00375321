import { Component } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
// local collection
  weather: any;
  icon: string;
  location: {
    city: string
  }



  constructor(private weatherService: WeatherService, private storage: Storage) { }

  ionViewWillEnter() {
   // whatever city is stored in local storage will show up on weather page
   // it will display weather of city picked or default galway
    this.storage.get('location').then((value) => {
      if (value != null) {
        this.location = JSON.parse(value);
      }
      else {
        this.location = {
          city: 'Galway'
        }
      }
      // callback function to retrive weather data
      this.weatherService.getWeather(this.location.city)
      // arrow function 
        .subscribe(data => {
          this.weather = data;
          // give it its values from the api using a json formatter 
          //assign local collection to values
          var temp = this.weather.main.temp;
          var icon = this.weather.weather[0].icon;
          console.log(icon);
        }
        );
    });


  }
}
