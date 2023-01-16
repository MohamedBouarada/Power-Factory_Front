import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset >= element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
