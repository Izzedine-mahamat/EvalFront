import { Injectable } from '@angular/core';
import { ApiRequestService } from './utils/api-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private apiRequest: ApiRequestService) 
  { }

  getAllEvents() : any {
    return this.apiRequest.get('events');
  }

  AddEvent(event: any) : any {
    return this.apiRequest.post('events', event);
  }

  updateEvent(event: any, id: string): Observable<any> {
    return this.apiRequest.put(`events/${id}`, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.apiRequest.delete(`events/${id}`);
  }
}
