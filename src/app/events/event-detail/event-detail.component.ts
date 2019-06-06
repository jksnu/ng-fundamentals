import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/service/event.service'; 
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../../shared/model/event.session';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event: any;
  isAddSessionEnabled: boolean = false;
  filterValue: String = "";
  sortBy: String = "nameAsc";
  route: any;

  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.event = this.eventService.getEvent(parseInt(this.activatedRoute.snapshot.params['id']));
    this.activatedRoute.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.isAddSessionEnabled = false;
    });
    
  }

  addSession(): void{
    this.isAddSessionEnabled = true;
  }

  handleSessionCreateCancel(): void{
    this.isAddSessionEnabled = false;
  }

  addNewSession(session: ISession): void{
    this.eventService.updateEvent(session, this.event);
    this.isAddSessionEnabled = false;
  }

  sessionFilter(filterValue: string): void {
    this.filterValue = filterValue;
  }

  sessionSort(sortBy: string): void {
    this.sortBy = sortBy;
  }

}
