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
import { Wpl3Component } from './WPL3/wpl3/wpl3.component';
import { LogboekComponent } from './WPL3/wpl3/logboek/logboek.component';
import { OntwikkelingsgesprekkenComponent } from './WPL3/wpl3/ontwikkelingsgesprekken/ontwikkelingsgesprekken.component';
import { OpdrachtenComponent } from './WPL3/wpl3/opdrachten/opdrachten.component';
import { ReflectieComponent } from './WPL3/wpl3/reflectie/reflectie.component';
import { WPL4Component } from './WPL4/wpl4.component';
import { WPL4ReflectieComponent } from './WPL4/reflectie/reflectie.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumePagina,
    SkillBalkje,
    Projects,
    ContactForm,
    ResumeTabel,
    Wpl3Component,
    LogboekComponent,
    OntwikkelingsgesprekkenComponent,
    OpdrachtenComponent,
    ReflectieComponent,
    WPL4Component,
    WPL4ReflectieComponent
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
