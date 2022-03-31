import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { 
    path: '',   redirectTo: '/login', pathMatch: 'full' 
  }, // redirect to `login`
  {
    path: 'login', component: LoginComponent, canActivate: [AnonymousGuard]
  },
  {
    path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
