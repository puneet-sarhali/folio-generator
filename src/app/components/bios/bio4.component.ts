import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio4',
  template: `
    <div
      class="h-[32rem] p-12 flex flex-col items-center justify-center relative m-16"
    >
      <h2 class="font-light text-sm text-secondary">Hi there, I'm</h2>
      <h1 class="font-extrabold text-8xl text-accent">Johnny Depp</h1>
      <h2 class="uppercase font-light text-sm text-secondary mt-4 tracking-wide">
        Front-end Developer
      </h2>
      <p class="uppercase font-light text-sm text-secondary tracking-wide">
        Based in BC, Canada
      </p>
      <div
        class="h-32 w-32 bg-gradient-to-bl from-accent absolute top-2/3 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full rotate-45 opacity-25"
      ></div>
      <div
        class="h-16 w-16 bg-gradient-to-bl from-accent absolute top-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg rotate-45 opacity-50"
      ></div>
      <div class="w-16 overflow-hidden inline-block absolute left-24 top-16">
        <div
          class="h-11 w-11 bg-gradient-to-bl from-accent2 rotate-45 transform origin-bottom-left"
        ></div>
      </div>
      <div class="w-16 overflow-hidden inline-block absolute top-80 right-24">
        <div
          class="h-5 w-5 bg-gradient-to-bl from-accent2 rotate-45 transform origin-bottom-left"
        ></div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Bio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
