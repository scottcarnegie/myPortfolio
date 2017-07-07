import { Component, OnInit, Input } from '@angular/core';
import { Job } from "../../../shared/job.model";
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations' 

@Component({
  selector: 'app-job-component',
  templateUrl: './job-component.component.html',
  styleUrls: ['./job-component.component.css'],
  animations:[
    trigger('dropDetails', [
      state('in',style({
      })),
      transition('void => *',[
        style({
        }),
        animate(1000)
      ]),
       transition('* => void',[
        style({
        }),
        animate(1000)
      ])
    ])
  ]
})
export class JobComponentComponent implements OnInit {

  @Input() job:Job;

  showRefInfo:boolean = false;
  detailsToggle:boolean = false;
  height:number = 0;

  constructor() { }

  ngOnInit() {
  }

  expandDetails(newHeight){
    console.log(newHeight);
    this.detailsToggle = true;
    this.height = newHeight;
  }

  hideDetails(){
    this.height = 0;
    this.detailsToggle = false;
  }

}
