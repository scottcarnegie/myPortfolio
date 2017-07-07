import { Component, OnInit } from '@angular/core';
import { Profile } from "../shared/profile.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit() {
  }

}
