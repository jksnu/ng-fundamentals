import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../shared/service/event.service';
import { IEvent } from '../../shared/model/event.model';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventList: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.eventList = this.route.snapshot.data['events'];
  }
  
}
