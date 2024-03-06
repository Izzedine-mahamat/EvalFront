import { Injectable } from '@angular/core';
import { ApiRequestService } from './utils/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private apiRequest: ApiRequestService) 
  { }

  getAllEvents() : any {
    return this.apiRequest.get('events');
  }
}
