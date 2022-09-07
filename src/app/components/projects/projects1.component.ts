import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  template: `
    <div class="grid grid-cols-2 text-left">
      <div
        class="m-8 shadow-2xl text-secondary rounded-lg bg-primary-light relative overflow-visible"
      >
        <img
          class="rounded-t-lg shadow-2xl object-cover h-64 w-full"
          src="../../assets/bg-project-1.jpeg"
          alt=""
        />
        <div class="p-8">
          <h3 class="text-secondary text-3xl z-10 mb-2">Portfolio Generator</h3>
          <ul class="flex space-x-2 text-sm font-extrabold mb-8 text-accent">
            <li>Vue JS</li>
            <li>Tailwind CSS</li>
          </ul>
          <p>
            Combining different headers, buttons, heros etc to generator a web
            developer Portfolio.
          </p>
          <div class="flex space-x-2 mt-8">
            <a href="#"
            ><img
              src="../../assets/github.png"
              alt="Github icon"
              width="24"
              height="24"
            /></a>
            <a href="#"
            ><img
              src="../../assets/linkedin.png"
              alt="linkedin icon"
              width="24"
              height="24"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="m-8 shadow-2xl text-secondary rounded-lg bg-primary-light relative overflow-visible"
      >
        <img
          class="rounded-t-lg shadow-2xl h-64 w-full object-cover"
          src="../../assets/bg-project-2.jpeg"
          alt=""
        />
        <div class="p-8">
          <h3 class="text-secondary text-3xl z-10 mb-2">Portfolio Generator</h3>
          <ul class="flex space-x-2 text-sm font-extrabold mb-8 text-accent">
            <li>Vue JS</li>
            <li>Tailwind CSS</li>
          </ul>
          <p>
            Combining different headers, buttons, heros etc to generator a web
            developer Portfolio.
          </p>
          <div class="flex space-x-2 mt-8">
            <a href="#"
            ><img
              src="../../assets/github.png"
              alt="Github icon"
              width="24"
              height="24"
            /></a>
            <a href="#"
            ><img
              src="../../assets/linkedin.png"
              alt="linkedin icon"
              width="24"
              height="24"
            /></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Projects1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
