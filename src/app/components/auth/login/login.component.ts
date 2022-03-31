import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private navigateService: NavigateService
  ) {}

  get user(): AbstractControl {
    return this.loginForm.get('user') as any;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password') as any;
  }

  ngOnInit(): void {}

  login() {
    console.log(this.loginForm);
    this.loginService
      .login(this.user.value, this.password.value)
      .pipe(take(1))
      .subscribe((data: boolean) => {
        if (data) this.navigateService.goPortfolio();
      });
  }
}
