import { Component, OnInit } from '@angular/core';
import { Profile } from "../../shared/profile.model";

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

}
