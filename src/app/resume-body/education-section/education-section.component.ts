import { Component, OnInit } from '@angular/core';
import { Profile } from "../../shared/profile.model";

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

}
