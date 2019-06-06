import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared/model/event.session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit, OnChanges {  

  @Input() sessions: ISession[];
  @Input() sessionFilterBy: string;
  @Input() sessionSortBy: string;
  filteredSessions: ISession[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.sessions){
      this.filterSessions(this.sessionFilterBy);
      this.sessionSort(this.sessionSortBy);
    }
  }

  filterSessions(filterBy: string): void {
    if(filterBy === undefined || filterBy === ''){
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => session.level === filterBy);
    }
  }

  private sessionSort(sessionSortBy: string): void {
    if(sessionSortBy === "nameAsc") {
      this.filteredSessions = this.filteredSessions.sort(this.sortSessionByNameAsc);
    } else if(sessionSortBy === "votersDesc"){
      this.filteredSessions = this.filteredSessions.sort(this.sortSessionByVotersDesc);
    }
  }

  private sortSessionByNameAsc(session1: ISession, session2: ISession){
    if(session1.name > session2.name) return 1;
    if(session1.name === session2.name) return 0;
    return -1;
  }

  private sortSessionByVotersDesc(session1: ISession, session2: ISession){
    return session2.voters.length - session1.voters.length;
  }
}
