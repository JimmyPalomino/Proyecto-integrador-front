import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Candidate } from '../classes/candidate';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService extends HttpService<Candidate>{

  public getById(id: number): Observable<Candidate> {
    return this.getOne("/api/buscar-candidato/" + id);
  }
}
