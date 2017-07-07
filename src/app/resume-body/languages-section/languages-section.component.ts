import { Component, OnInit } from '@angular/core';
import { Profile } from "../../shared/profile.model";

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent implements OnInit {

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

  getStyle(rateVal:number){
    var fSize; 
    var rateColor;

    fSize = rateVal*3 + 5;
    
    switch(rateVal){
      case 1:
        rateColor = '#ffAA99';
        break;
      case 2:
        rateColor = '#ffCC99';
        break;
      case 3:
        rateColor = '#ffDD99';
        break;
      case 4:
        rateColor = '#ffEE99';
        break;
      case 5:
        rateColor = '#ffFF99';
        break;
      case 6:
        rateColor = '#bfff99';
        break;
      case 7:
        rateColor = '#80ff99';
        break;
      case 8:
        rateColor = '#40ff99';
        break;
      case 9:
        rateColor = '#00ff99';
        break;
      case 10:
        rateColor = '#00ff99';
        break;  
    }
    

    var styleObj = 
      { 'font-size':fSize+'px',
        'line-height':'30px',
        'color':rateColor
      }
    return styleObj;
    
  }    

}
