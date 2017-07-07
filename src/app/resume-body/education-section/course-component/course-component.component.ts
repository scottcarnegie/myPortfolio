import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Course } from "../../../shared/course.model";

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})

export class CourseComponentComponent implements OnInit {

  @Input() course:Course;
  @ViewChild('downloadLink') downloadLink:ElementRef;
  
  constructor() { 
  }

  ngOnInit() {
  }

  showDocument(){
    this.downloadLink.nativeElement.click();
  }

}
