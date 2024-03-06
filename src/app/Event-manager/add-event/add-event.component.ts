import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {

  eventForm!: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateEvent: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.AddEvent(this.eventForm.value).subscribe({
        next: (response: any) => {
          console.log('Événement ajouté avec succès', response);
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'ajout de l\'événement', error);
        }
      });
    } else {
     
      console.error('Le formulaire n\'est pas valide');
    }
  }
  
}
