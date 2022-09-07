import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './components/headers/header1.component';
import { GeneratorComponent } from './components/generator.component';
import { Header2Component } from './components/headers/header2.component';
import { Bio1Component } from './components/bios/bio1.component';
import { Bio2Component } from './components/bios/bio2.component';
import { Bio3Component } from './components/bios/bio3.component';
import { Bio4Component } from './components/bios/bio4.component';
import { Projects1Component } from './components/projects/projects1.component';
import { Projects2Component } from './components/projects/projects2.component';
import { Skills1Component } from './components/skills/skills1.component';
import { Skills2Component } from './components/skills/skills2.component';
import { InfoFormComponent } from './components/info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    GeneratorComponent,
    Header2Component,
    Bio1Component,
    Bio2Component,
    Bio3Component,
    Bio4Component,
    Projects1Component,
    Projects2Component,
    Skills1Component,
    Skills2Component,
    InfoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
