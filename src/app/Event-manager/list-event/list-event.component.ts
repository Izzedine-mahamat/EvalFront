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

  deleteEvent(eventId: string) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet événement ?");
    if (confirmation) {
      this.events.deleteEvent(eventId).subscribe({
        next: () => {
          console.log('Événement supprimé avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de l\'événement', error);
        }
      });
    }
  }
  

  addEvent() {
    this.router.navigate(['/Addevents']);
  }
  

 
}
