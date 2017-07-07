import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input('skillname') skillName:string;
  @Input('skilllevel') skillLevel:number;
  barStyle:object;

  constructor() { 
  }

  getBarStyle(){
      this.barStyle = {
        "width": this.skillLevel+'%'
      };
      return this.barStyle;
  }

  ngOnInit() {
  }

}
