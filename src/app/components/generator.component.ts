import { Component, OnInit } from '@angular/core';
import themeData from "../config/theme.json";


@Component({
  selector: 'app-generator',
  template: `
    <button class="btn" (click)="onGenerate()">Generate</button>
    <div class="bg-primary">
      <div class="max-w-[75rem] mx-auto">
        <app-header1 *ngIf="randHeader === 0"></app-header1>
        <app-header2 *ngIf="randHeader === 1"></app-header2>
        <app-bio1 *ngIf="randBio === 0"></app-bio1>
        <app-bio2 *ngIf="randBio === 1"></app-bio2>
        <app-bio3 *ngIf="randBio === 2"></app-bio3>
        <app-bio4 *ngIf="randBio === 3"></app-bio4>
        <app-skills1 *ngIf="randSkills === 0"></app-skills1>
        <app-project1></app-project1>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class GeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly numHeaders = 2;
  readonly numBios = 4;
  readonly numSkills = 1;
  randHeader = Math.floor(Math.random() * this.numHeaders);
  randBio = Math.floor(Math.random() * this.numBios);
  randSkills = Math.floor(Math.random() * this.numSkills);

  onJsonData(data: any) {
    console.log(data.value);
  }

  onGenerate() {
    this.changeTheme();
    this.changeFont();
    this.randHeader = Math.floor(Math.random() * this.numHeaders);
    this.randBio = Math.floor(Math.random() * this.numBios);
    this.randSkills = Math.floor(Math.random() * this.numSkills);
    console.log(this.randBio);
  }

  // changing themes
  changeTheme() {
    const randIndex = Math.floor(Math.random() * themeData.length);
    this.changeVar("--color-primary", themeData[randIndex]["--color-primary"]);
    this.changeVar(
      "--color-primary-light",
      themeData[randIndex]["--color-primary-light"]
    );
    this.changeVar(
      "--color-secondary",
      themeData[randIndex]["--color-secondary"]
    );
    this.changeVar("--color-accent", themeData[randIndex]["--color-accent"]);
    this.changeVar(
      "--color-accent-focus",
      themeData[randIndex]["--color-accent-focus"]
    );
    this.changeVar(
      "--color-accent-content",
      themeData[randIndex]["--color-accent-content"]
    );
    this.changeVar("--color-accent2", themeData[randIndex]["--color-accent2"]);
  }

  //change font family
  changeFont() {
    this.changeVar("--font-family-silkscreen", "Verdana");
  }

  // for changing css variable
  changeVar(from: string, to: string) {
    document.documentElement.style.setProperty(from, to);
  }

}
