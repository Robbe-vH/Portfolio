import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactForm } from './contact/contact.component';
import { ResumePagina } from './resume/resume.component';
import { SkillBalkje } from './resume/skillbalkjes/skillbalkje.component';
import { ResumeTabel } from './resume/tabel/tabel.component';
import { ContactService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumePagina,
    SkillBalkje,
    ContactForm,
    ResumeTabel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
