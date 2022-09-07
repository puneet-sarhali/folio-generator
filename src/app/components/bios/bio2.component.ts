import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio2',
  template: `
    <div class="mb-8 relative text-secondary h-96 flex flex-col justify-center text-center">
      <h1 class="p-2 font-silkscreen block text-5xl font-bold">Thomas Shelby</h1>
      <h2 class="block">Front-end Developer</h2>
      <div
        class="absolute left-24 -right-24 mx-auto w-40 h-96 bg-gradient-to-br from-accent rotate-45 opacity-30 blur-lg"
      ></div>
      <div
        class="absolute -left-24 right-24 w-40 mx-auto h-96 bg-gradient-to-br from-accent2 rotate-45 opacity-30 blur-lg"
      ></div>
    </div>
  `,
  styles: [
  ]
})
export class Bio2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
