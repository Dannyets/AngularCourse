import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToasterService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

declare let toastr;

@Component({
    templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
    events: IEvent[];

    constructor(private toastr: ToasterService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleTumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}
