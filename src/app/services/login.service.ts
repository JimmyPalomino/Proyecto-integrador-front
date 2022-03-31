import { Injectable } from '@angular/core';
import { Observable, of, takeUntil } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly KEY_SAVE_SESSION: string = 'SESSION';

  constructor() {}

  //Modificar luego este metodo, cuerpo y encabezado
  public login(user: string, password: string): Observable<boolean> {
    if (user == 'pepe' && password == '1234') {
      localStorage.setItem(
        this.KEY_SAVE_SESSION,
        JSON.stringify({ user: user })
      );
      return of(true);
    } else {
      return of(false);
    }
  }

  public logout(): void {
    localStorage.setItem(this.KEY_SAVE_SESSION, '');
  }

  public isLogged(): boolean {
    const session: string | null = localStorage.getItem(this.KEY_SAVE_SESSION);
    return session != null && session != '';
  }
}
