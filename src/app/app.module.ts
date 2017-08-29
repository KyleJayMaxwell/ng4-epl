import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamTileComponent } from './team-tile/team-tile.component';
import { AboutComponent } from './about/about.component';
import { TeamService } from './team.service';
import { TextLimitPipe } from './text-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    DashboardComponent,
    TeamTileComponent,
    AboutComponent,
    TextLimitPipe
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
