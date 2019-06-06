import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  canActivate (route: ActivatedRouteSnapshot): boolean {
    let isValueExist = !!this.eventService.getEvent(parseInt(route.params['id']));
    if(!isValueExist){
      this.router.navigate(['/error']);
    }
    return isValueExist;
  }
    
  constructor(private eventService: EventService, 
              private router:Router) { }
  
}
