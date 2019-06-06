import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession } from '../../shared/model/event.session';
import { validateRestrictedWords } from '../../shared/customValidator/custom-reactive-validator';
import { IEvent } from '../../shared/model/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  @Output() sessionCreateCancelEvent = new EventEmitter<String>();
  @Output() addSesssionEvent = new EventEmitter<ISession>();
  @Input() currentEvent:IEvent;

  sessionFormGroup: FormGroup;
  sessionName: FormControl;
  sessionPresenter: FormControl;
  sessionDuration: FormControl;
  sessionLevel: FormControl;
  sessionAbstract: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.sessionName = new FormControl('', Validators.required);
    this.sessionPresenter = new FormControl('', Validators.required);
    this.sessionDuration = new FormControl('', Validators.required);
    this.sessionLevel = new FormControl('', Validators.required);
    this.sessionAbstract = new FormControl('', [Validators.required, 
                                                  Validators.maxLength(20),
                                                  validateRestrictedWords(['foo','bar'])]);

    this.sessionFormGroup = new FormGroup({
      sessionName: this.sessionName,
      sessionPresenter: this.sessionPresenter,
      sessionDuration: this.sessionDuration,
      sessionLevel: this.sessionLevel,
      sessionAbstract: this.sessionAbstract,
    }); 
  }

  cancel() {
    this.sessionCreateCancelEvent.emit("cancelAddSession");
  }

  saveSession(sessionFormValue){
    let session: ISession = {
      id: undefined,
      name: sessionFormValue.sessionName,
      presenter: sessionFormValue.sessionPresenter,
      duration: +sessionFormValue.sessionDuration,
      level: sessionFormValue.sessionLevel,
      abstract: sessionFormValue.sessionAbstract,
      voters: [],
      eventId:0
    };
    this.addSesssionEvent.emit(session);
  }

}
