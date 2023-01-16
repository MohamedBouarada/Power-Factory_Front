import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isMobile:boolean=false
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   let element = document.querySelector('.navbar') as HTMLElement;
  //   if (window.pageYOffset >= element.clientHeight) {
  //     element.classList.add('navbar-inverse');
  //   } else {
  //     element.classList.remove('navbar-inverse');
  //   }
  // }
  navbarIcon: string = 'menu';
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
  activateMenu() {
    // const navLinks = document.querySelector('.navLinks');
    // navLinks!.classList.toggle('mobile-menu');
    this.isMobile=true;
    if (this.navbarIcon == 'menu') {
      this.navbarIcon = 'close';
    } else {
      this.navbarIcon = 'menu';
      this.isMobile=false;
    }
  }

  hideMenu(){
    // const link = document.querySelector('.navLinks');
    // link!.classList.remove("mobile-menu")
    this.isMobile=false;
    this.navbarIcon = 'menu';
  }

  
  onClickLogin() {
    this.isMobile=false;
    this.navbarIcon = 'menu';
    this.router.navigate(['/signup']);
  }
}
