import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage  {
  city:string;
  constructor(private storage:Storage) {
    // if city is not entered the default will be galway 
    this.storage.get('location').then((value) =>{
      if(value!=null){
        //transfroming string into object
        let location = JSON.parse(value);
        this.city=location.city;
      }
      else{
        this.city='Galway';
      }
        });
   }

  
saveForm(){
  let location = {
    city:this.city
  }
  console.log(location); // saves to storage
 this.storage.set('location',JSON.stringify(location)); // saves and returns string
 
}

}
