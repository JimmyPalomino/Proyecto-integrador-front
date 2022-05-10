import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input()
  public candidate: Candidate = new Candidate();

  constructor() { }

  ngOnInit(): void {
  }

}
