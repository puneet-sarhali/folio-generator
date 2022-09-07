import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio1',
  template: `
    <div class="mb-8 relative text-secondary h-96 flex flex-col justify-center text-center">
      <h1 class="p-2 font-silkscreen block text-5xl font-bold">Thomas Shelby</h1>
      <h2 class="block">Front-end Developer</h2>
      <div
        class="absolute left-24 -right-24 mx-auto w-64 h-64 bg-accent blur-3xl rounded-full opacity-30"
      ></div>
      <div
        class="absolute -left-24 right-24 w-64 mx-auto h-64 bg-accent2 blur-3xl rounded-full opacity-30"
      ></div>
    </div>
  `,
  styles: [
  ]
})
export class Bio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
