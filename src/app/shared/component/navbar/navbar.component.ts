import { Component, OnInit, Input } from '@angular/core';
import { AuthenticateService } from '../../service/authenticate.service';
import { ISession } from '../../model/event.session';
import { EventService } from '../../service/event.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchedSession: any[];
  
  constructor(private authenticateService: AuthenticateService,
              private eventService: EventService) { }

  ngOnInit() {
  }

  searchSession(sessionTerm: string): void {
    this.searchedSession = this.eventService.searchSession(sessionTerm);
    console.log(this.searchedSession);
  }

}
