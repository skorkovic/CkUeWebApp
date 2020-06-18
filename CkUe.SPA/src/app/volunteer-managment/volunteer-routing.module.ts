import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { VolunteerCreateComponent } from './volunteer-create/volunteer-create.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profil',
        component: VolunteerProfileComponent,
        data: {
          title: 'Профил волонтера'
        }
      },
      {
        path: 'napravinovinalog',
        component: VolunteerCreateComponent,
        data: {
          title: 'Направи нови налог'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerRoutingModule { }
