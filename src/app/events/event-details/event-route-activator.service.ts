import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService,
                private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventId = +route.params['id'];
        const eventExists = !!this.eventService.getEvent(eventId);

        if(!eventExists){
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}