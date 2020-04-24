import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  long:number;
  lat:number;
  constructor(private geolocation:Geolocation) { }

  locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // reads and displays long and lat
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
  }

}
