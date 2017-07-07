import { Component, OnInit } from '@angular/core';
import { Profile } from "../../shared/profile.model";

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

}
