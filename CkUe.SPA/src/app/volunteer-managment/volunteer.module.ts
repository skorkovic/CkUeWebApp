import { NgModule } from '@angular/core';
import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { VolunteerCreateComponent } from './volunteer-create/volunteer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { AlertifyService } from 'app/_services/alertify.service';
import { AuthService } from 'app/_services/auth.service';
import { UserService } from 'app/_services/user.service';
import { AdminService } from 'app/_services/admin.service';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    imports: [
        VolunteerRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        FileUploadModule
    ],
    declarations: [
        VolunteerProfileComponent,
        VolunteerCreateComponent,
        PhotoEditorComponent
    ],
    providers: [
        AuthService,
        UserService,
        AdminService
    ]

})
export class VolunteerModule { }
