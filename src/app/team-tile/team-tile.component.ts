import { Component, OnInit, Input } from '@angular/core';
import { TeamInfo } from './team-tile.model';

@Component({
  selector: 'app-team-tile',
  templateUrl: './team-tile.component.html',
  styleUrls: ['./team-tile.component.css']
})
export class TeamTileComponent implements OnInit {

  @Input() teamData: TeamInfo;

  constructor() { }

  ngOnInit() {
  }

}
