import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getById(1).pipe(take(1)).subscribe( (data: Candidate) => console.info(data.tipo),
    error => console.error(error)
    );
  }
}
