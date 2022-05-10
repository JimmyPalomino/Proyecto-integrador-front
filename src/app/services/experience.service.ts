import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../classes/experience';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends HttpService<Experience> {

  public list(): Observable<Experience[]> {
    return this.getAll("/api/listado-experiencia");
  }

  public create(e: Experience): Observable<Experience>{
    return this.postOne("/api/crearExperiencia", e);
  }

  public edit(e: Experience): Observable<Experience>{
    return this.putOne("/api/actualizar-experiencia/" + e.id, e);
  }

  public deleteById(id: number): Observable<Experience> {
    return this.deleteOne("/api/eliminar-experiencia/" + id, {} as Experience);
  }

}
