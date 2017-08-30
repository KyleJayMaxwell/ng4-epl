import { Component, OnInit, Input } from '@angular/core';
import { TeamInfo } from './team-tile.model';

@Component({
  selector: 'app-team-tile',
  templateUrl: './team-tile.component.html',
  styleUrls: ['./team-tile.component.css']
})
export class TeamTileComponent implements OnInit {

  selectedTeam: TeamInfo;

  onSelect(team: TeamInfo): void {
    this.selectedTeam = team;
    console.log(this.selectedTeam);
  }
  @Input() teamData: TeamInfo;

  constructor() { }

  ngOnInit() {
  }

}
