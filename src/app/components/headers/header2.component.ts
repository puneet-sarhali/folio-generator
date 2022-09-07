import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  template: `
    <div class="flex px-8">
      <a
        class="navbar-link !text-accent !font-bold !mr-auto !text-lg !justify-self-start"
        href="#"
      >TS</a
      >
      <div>
        <a class="navbar-link" href="#">About</a>
        <a class="navbar-link" href="#">Projects</a>
        <a class="navbar-link" href="#">Contact</a>
      </div>
      <div>
        <a class="navbar-link" href="#"
        ><img
          src="../../assets/github.png"
          alt="Github icon"
          width="24"
          height="24"
        /></a>
        <a class="navbar-link" href="#"
        ><img
          src="../../assets/linkedin.png"
          alt="linkedin icon"
          width="24"
          height="24"
        /></a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
