import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { NGXToastrService } from 'app/components/extra/toastr/toastr.service';
import { AlertifyService } from 'app/_services/alertify.service';
import { AuthService } from 'app/_services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [NGXToastrService]
})

export class LoginPageComponent implements OnInit {
    formLogin: FormGroup;
    user: any;

    @ViewChild('f', {static: false}) loginForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private authService: AuthService,
        private alertify: AlertifyService,
        private service: NGXToastrService) { }

    ngOnInit(): void {
        this.createLoginForm();
    }



    createLoginForm() {
        this.formLogin = this.fb.group({
            userName: ['', Validators.required],
            password: ['', [Validators.required]],
        }, );
    }

    // On submit button click
    onLoginUser() {
        console.log(this.formLogin.value);
        if (this.formLogin.valid == false) {
            this.alertify.error("Унесите волонтерски идентификатор и лозинку!");
            return;
        }
        this.user = Object.assign({}, this.formLogin.value);
        this.authService.login(this.user).subscribe(() => {
            this.alertify.success('Успешна пријава');
        }, error => {
            this.alertify.error("Неуспешна пријава");
        }, () => {
            this.router.navigate(['/']);
        });
    }
    // On Forgot password link click
    onForgotPassword() {
        this.service.typeInfoForgotPassword();
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }

    loggedIn() {
        return this.authService.loggedIn();
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    }
}
