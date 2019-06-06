import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../shared/model/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  getTimeClass(): string {
    if(this.event && this.event.time && this.event.time === '11:00 AM'){
      return "green bold";
    } 
    return "";
  }

  getPriceStyle(): object {
    if(this.event && this.event.price && this.event.price === 400.99){
      return {'color': '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
