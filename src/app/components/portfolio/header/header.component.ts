import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Candidate } from 'src/app/classes/candidate';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayModal: boolean = false;
  
  @Input()
  public candidate: Candidate = new Candidate();

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  showModalLogin() {
    this.displayModal = true;
    console.log("this.displayModal=" +this.displayModal);
  }

  public logout() {
    this.loginService.logout();
  }

}
