import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent {

  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private dialogRef: MatDialogRef<UpdateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateEvent: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      let formattedDate = this.data.DateEvent.split('T')[0]; 

      if (formattedDate === '0001-01-01') {
        formattedDate = ''; 
      }
      this.eventForm.patchValue({
        title: this.data.Title,
        description: this.data.Description,
        dateEvent: formattedDate,
        location: this.data.Location,
      });
    }
  }
  
  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventId :any = this.data.Id; 
      const updatedEvent = this.eventForm.value;
      this.eventsService.updateEvent(updatedEvent, eventId).subscribe({
        next: (response : any) => {
          console.log('Événement mis à jour avec succès', response);
          this.dialogRef.close(true); 
        },
        error: (error: any) => {
          console.log('Erreur lors de la mise à jour de l\'événement');
        }
      });
    }
  }
  

  onCancel(): void {
    this.dialogRef.close();
  }
}


