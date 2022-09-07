import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills1',
  template: `
    <div class="">
      <!-- <h2 class="section-heading">Skills & Tools</h2> -->
      <div class="flex justify-center">
        <div class="card">
          <h3 class="accent-heading mb-4">Languages</h3>
          <ul class="text-left">
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>C++</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div class="card">
          <h3 class="accent-heading mb-4">Technologies</h3>
          <ul class="text-left">
            <li>Angular</li>
            <li>Vue</li>
          </ul>
        </div>
        <div class="card">
          <h3 class="accent-heading mb-4">Tools</h3>
          <ul class="text-left">
            <li>Figma</li>
            <li>Abode XD</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Skills1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
