import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {group} from "@angular/animations";

@Component({
  selector: 'app-info-form',
  template: `
    <form [formGroup]="infoForm">
      <label for="fullName">Full Name: </label>
      <input class="bg-neutral-300" id="fullName" type="text" formControlName=fullName>
      <div formGroupName="skills">
        <label for="languages">Languages: </label>
        <input class="bg-neutral-300" id="languages" type="text" formControlName=languages>
      </div>
    </form>
  `,
  styles: [
  ]
})
export class InfoFormComponent implements OnInit {
  infoForm = this.fb.group({
    fullName: [''],
    position: [''],
    skills: this.fb.group({
      languages: [''],
      technologies: [''],
      tools: ['']
    }),
    projects: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.infoForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }


}
