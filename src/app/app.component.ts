import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from './services/login.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  private $unsubscribe: Subject<void> = new Subject<void>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService
      .loggedSubject()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((isLogged: boolean) => {
        $(document).ready(function () {
          if (isLogged) 
            $('.myIcon').show();
          else
            $('.myIcon').hide();
        });
    });
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

}
