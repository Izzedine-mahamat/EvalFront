import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventComponent } from './Event-manager/list-event/list-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component:ListEventComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
