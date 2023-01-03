import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ContactForm } from './contact/contact.component';
import { Projects } from './projects/projects.component';
import { ResumePagina } from './resume/resume.component';
import { SkillBalkje } from './resume/skillbalkjes/skillbalkje.component';
import { ResumeTabel } from './resume/tabel/tabel.component';
import { ContactService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumePagina,
    SkillBalkje,
    Projects,
    ContactForm,
    ResumeTabel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
