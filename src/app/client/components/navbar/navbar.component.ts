import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset >= element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  navbarIcon: string = 'menu';
  constructor() {}

  ngOnInit(): void {}
  activateMenu() {
    const navLinks = document.querySelector('.navLinks');
    navLinks!.classList.toggle('mobile-menu');
    if (this.navbarIcon == 'menu') {
      this.navbarIcon = 'close';
    } else {
      this.navbarIcon = 'menu';
    }
  }
}
