import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { VolunteerService } from '../../_services/volunteer.service';
import { validatePasswordConfirmMatchRegister } from '../validators/auth.validator';
import { AuthService } from 'app/_services/auth.service';
import { User } from 'app/_models/user';
import { AlertifyService } from 'app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-create',
  templateUrl: './volunteer-create.component.html',
  styleUrls: ['./volunteer-create.component.scss']
})
export class VolunteerCreateComponent implements OnInit {
  formAccount: FormGroup;

  private userId: string;
  private user: User;

  imagePreview = '';

  constructor(
    public userService: VolunteerService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private alertify: AlertifyService,
    ) {}

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.formAccount = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', ],
      livingPlace: ['', ],
      livingAddress: ['', ],
      schoolFaculty: ['', ],
      job: ['', ],
      birthPlace: ['', ],
      dateOfBirth: ['', ],
      volunteeringStartDate: ['', ],
      recommended: ['', ],
      uvn: ['', ],
      password: ['', [Validators.required, Validators.minLength(7)]],
      passwordConfirm: ['', [Validators.required, validatePasswordConfirmMatchRegister]],
      accessRights: [2, []]
    }, );
  }

  ngOnDestroy() {
    return;
  }

  onCreateUser(form: NgForm) {

    console.log(this.formAccount.get('passwordConfirm').errors);
    if (this.formAccount.invalid) {
      console.log('Uneta polja nisu ispravna');
      return;
    } else {
      this.user = Object.assign({}, this.formAccount.value);
      console.log(this.user);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Успешна регистрација');
      }, error => {
        this.alertify.error("Неуспешна регистрација");
      }, );
    }
  }
}
