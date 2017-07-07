import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AcademicProgram } from "../../../shared/academicprogram.model";

@Component({
  selector: 'app-program-component',
  templateUrl: './program-component.component.html',
  styleUrls: ['./program-component.component.css']
})
export class ProgramComponentComponent implements OnInit {

  @Input() program:AcademicProgram;
  @ViewChild('downloadLink') downloadLink:ElementRef;
  
  constructor() { 
  }

  ngOnInit() {
  }

  showDocument(){
    this.downloadLink.nativeElement.click();
  }

}
