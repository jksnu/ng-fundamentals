import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
    
}
