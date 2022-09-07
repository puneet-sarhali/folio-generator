import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio3',
  template: `
    <div
      class="h-[32rem] p-12 flex flex-col items-center justify-center relative m-16"
    >
      <h2 class="font-thin text-sm text-secondary">Hi there, I'm</h2>
      <h1 class="font-extrabold text-8xl text-accent">Ada Thorne.</h1>
      <h2 class="uppercase font-thin text-sm text-secondary">
        Front-end Developer
      </h2>
      <p class="uppercase font-thin text-sm text-secondary">
        Based in BC, Canada
      </p>
      <div
        class="h-96 w-96 bg-gradient-to-bl from-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg rotate-45 opacity-40"
      ></div>
    </div>
  `,
  styles: [
  ]
})
export class Bio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
