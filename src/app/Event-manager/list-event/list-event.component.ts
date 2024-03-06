import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {

  displayedColumns: string[] = ['Title', 'Description', 'DateEvent', 'Location'];
  dataSource = new MatTableDataSource<any>();

  constructor(private events: EventsService, private router: Router) {}

  ngOnInit() {
    this.events.getAllEvents().subscribe((events: any[]) => {
      this.dataSource.data = events;
    });
  }
  editEvent(){
    console.log("Edit Event");
  }

  deleteEvent(){
    console.log("Delete Event");
  }

  addEvent() {
    this.router.navigate(['/Addevents']);
  }
  

 
}
