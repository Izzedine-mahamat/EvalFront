import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';
import { UpdateEventComponent } from '../update-event/update-event.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {

  displayedColumns: string[] = ['Title', 'Description', 'DateEvent', 'Location'];
  dataSource = new MatTableDataSource<any>();

  constructor(private events: EventsService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.events.getAllEvents().subscribe((events: any[]) => {
      this.dataSource.data = events;
    });
  }
  editEvent(eventData: any) {
    const dialogRef = this.dialog.open(UpdateEventComponent, {
      width: '350px', 
      data: eventData 
      
    });
    //console.log(eventData); 
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le modal a été fermé');
    });
  }

  deleteEvent(){
    console.log("Delete Event");
  }

  addEvent() {
    this.router.navigate(['/Addevents']);
  }
  

 
}
