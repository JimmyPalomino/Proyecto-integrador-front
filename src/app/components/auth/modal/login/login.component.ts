import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  @Input()
  show: boolean = false;

  @Output() 
  showChange = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  get user(): AbstractControl {
    return this.loginForm.get('user') as any;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password') as any;
  }

  login() {
    console.log(this.loginForm);
    this.loginService
      .login(this.user.value, this.password.value)
      .pipe(take(1))
      .subscribe((data: boolean) => {
        console.log("datalogin " + data);
        if (data)
          this.closeModal();
      });
  }

  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
  }

}
