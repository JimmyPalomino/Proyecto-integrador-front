import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesErrorComponent } from './components/form/messages-error/messages-error.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {ImageModule} from 'primeng/image';
import {AvatarModule} from 'primeng/avatar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SpinnerComponent } from './components/util/spinner/spinner.component';
import { HeaderComponent } from './components/portfolio/header/header.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { ExperienceComponent } from './components/portfolio/experience/experience.component';
import { EducationComponent } from './components/portfolio/education/education.component';
import { SkillsComponent } from './components/portfolio/skills/skills.component';
import { ProjectsComponent } from './components/portfolio/projects/projects.component';
import { LoginComponent } from './components/auth/modal/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    MessagesErrorComponent,
    LogoutComponent,
    SpinnerComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ProgressSpinnerModule,
    PanelModule,
    BrowserAnimationsModule,
    MenuModule,
    DialogModule,
    ToastModule,
    RippleModule,
    ImageModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
