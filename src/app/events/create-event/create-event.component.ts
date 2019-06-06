import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  newEvent;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(formValue) {
    formValue.id=99;
    this.eventService.saveEvent(formValue);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
