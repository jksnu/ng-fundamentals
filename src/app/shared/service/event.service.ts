import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from '../model/event.model';
import { ISession } from '../model/event.session';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor() { }

  updateEvent(session: ISession, event: IEvent) {
    session.id = Math.max(...this.events.map(event => event.id))+1;
    event.sessions.push(session);
  }

  searchSession(sessionTerm: string) {
    var sessions: ISession[] = [];
    this.events.forEach(event => {
      var values = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(sessionTerm.toLocaleLowerCase()) !== -1);
      sessions = sessions.concat(values);
    });
    return sessions;
  }    

  getEvents(): Observable<IEvent[]> {
    let subject: Subject<IEvent[]> = new Subject();
    setTimeout(() => {
      subject.next(this.events);
      subject.complete();
    }, 200);
    return subject;
  }

  saveEvent(eventData: IEvent) {
    this.events.push(eventData);
  }

  getEvent(id: number): IEvent {
    return this.events.find((event) => event.id === id);
  }

  private events: IEvent[] = [{
    id: 1,
    name: 'Angular Connect',
    date: new Date('9/26/2036'),
    time: '11:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT, Near South London Church Gate, Steet Number Two, Building: MyHome',
      city: 'London',
      country: 'England'
    },
    sessions:[
      {
        id: 1,
        name: 'Using angular 4 pipes',
        presenter: 'Jitendra Singh',
        duration: 1,
        level: 'Beginer',
        abstract: 'This is a beginer level course',
        voters: ['Rajesh', 'Ramesh'],
        eventId: 1
      },
      {
        id: 2,
        name: 'Using angular 4 pipes Intermediate level training',
        presenter: 'Jitendra Singh',
        duration: 1,
        level: 'Intermediate',
        abstract: 'This is a beginer level course',
        voters: [],
        eventId: 1
      },
      {
        id: 3,
        name: 'Using angular 4 pipes Advanced level training',
        presenter: 'Jitendra Singh',
        duration: 1,
        level: 'Advanced',
        abstract: 'This is a beginer level course',
        voters: ['Rajesh', 'Ramesh', 'Suresh'],
        eventId: 1
      },
      {
        id: 4,
        name: 'Using angular 4 pipes New Advanced level training',
        presenter: 'Jitendra Singh',
        duration: 1,
        level: 'Advanced',
        abstract: 'This is a beginer level course',
        voters: ['Rajesh', 'Ramesh', 'Suresh', 'Neha', 'Neha', 'Suresh'],
        eventId: 1
      }
    ]
  }, {
    id: 2,
    name: 'My Second Angular',
    date: new Date('9/26/2037'),
    time: '9:00 AM',
    price: 400.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT, Bengalore, Karnataka',
      city: 'London',
      country: 'England'
    },
    sessions:[
      {
        id: 2,
        name: 'Using angular 4 Services Advanced',
        presenter: 'Jitendra Singh',
        duration: 2,
        level: 'Novice',
        abstract: 'This is a Novice level course in Angular services',
        voters: ['Dinesh', 'Ramesh', 'Pan', 'Mark', 'Raja'],
        eventId: 2
      }
    ]
  }, {
    id: 3,
    name: 'My Third Angular',
    date: new Date('9/26/2046'),
    time: '10:00 AM',
    price: 100.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT, New Delhi, India',
      city: 'Delhi',
      country: 'India'
    },
    sessions:[
      {
        id: 3,
        name: 'Using angular 4 Interfaces',
        presenter: 'Jitendra Singh',
        duration: 3,
        level: 'Expert',
        abstract: 'This is a Expert level course on using Interface in Angular for strong typing',
        voters: ['Rajesh', 'Ramesh'],
        eventId: 3
      }
    ]
  }, {
    id: 4,
    name: 'My Fourth Angular',
    date: new Date('9/26/2021'),
    time: '10:00 AM',
    price: 304.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Rajarajeshwari Nagar, Jayanna Layout',
      city: 'Bangalore',
      country: 'India'
    },
    sessions:[
      {
        id: 4,
        name: 'Using angular 4 Routing',
        presenter: 'Jitendra Singh',
        duration: 4,
        level: 'Expert',
        abstract: 'This is a Expert level course on Angular Routing',
        voters: ['Toi', 'Wo', 'Mimo', 'Tag'],
        eventId: 4
      }
    ]
  }, {
    id: 5,
    name: 'My Fifth Angular',
    date: new Date('9/26/2032'),
    time: '10:00 AM',
    price: 587.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'JP Nagar, Near Global Village',
      city: 'Bangalore',
      country: 'India'
    },
    sessions:[
      {
        id: 5,
        name: 'Using angular 4 Template',
        presenter: 'Jitendra Singh',
        duration: 1,
        level: 'Beginer',
        abstract: 'This is a beginer level course on Angular template',
        voters: ['Jks', 'Suneel', 'Raju', 'Dinesh'],
        eventId: 5
      }
    ]
  }, {
    id: 6,
    name: 'My Sixth Angular',
    date: new Date('9/26/2021'),
    time: '10:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Banshankari, Near Hero Showroom',
      city: 'Bangalore, Karnataka',
      country: 'India'
    },
    sessions:[
      {
        id: 6,
        name: 'Using angular 4 Styles',
        presenter: 'Jitendra Singh',
        duration: 2,
        level: 'Beginer',
        abstract: 'This is a beginer level course on Angular Styling',
        voters: ['Rajesh', 'Ramesh'],
        eventId: 6
      }
    ]
  }, {
    id: 7,
    name: 'My Seventh Angular',
    date: new Date('9/26/2987'),
    time: '10:00 AM',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions:[
      {
        id: 7,
        name: 'Using angular 4 Modules',
        presenter: 'Jitendra Singh',
        duration: 3,
        level: 'Expert',
        abstract: 'This is a Expert level course on Angular Modules',
        voters: ['Rajesh'],
        eventId: 7
      }
    ]
  }];

}
