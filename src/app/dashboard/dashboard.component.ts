import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { TeamService } from '../team.service';

import { TeamInfo } from '../team-tile/team-tile.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private teamService:TeamService) { }

  private englishTeams:TeamInfo[];

  ngOnInit() {
    this.englishTeams = this.teamService.getEnglishStream();
  }

}
