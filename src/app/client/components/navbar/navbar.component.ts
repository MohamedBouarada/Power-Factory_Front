import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../store/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
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
  isAdminLogged:boolean=false;
  isClientLogged:boolean=false;
  badge:number=0
  constructor(private router: Router,private orderService:OrderService) {}

  ngOnInit(): void {
    if(localStorage.getItem('power-factory-client-token').length>0){
      this.isClientLogged=true;
    }
    
    else if(localStorage.getItem('power-factory-admin-token').length>0){
      this.isAdminLogged=true;
    }
    else{
      this.isAdminLogged=false;
      this.isClientLogged=false;
    }

    this.orderService.bucketListSubject.subscribe({
      next:data=>this.badge=data.length
    })
  }
  activateMenu() {
    // const navLinks = document.querySelector('.navLinks');
    // navLinks!.classList.toggle('mobile-menu');
    this.isMobile = true;
    if (this.navbarIcon == 'menu') {
      this.navbarIcon = 'close';
    } else {
      this.navbarIcon = 'menu';
      this.isMobile = false;
    }
  }

  hideMenu() {
    // const link = document.querySelector('.navLinks');
    // link!.classList.remove("mobile-menu")
    this.isMobile = false;
    this.navbarIcon = 'menu';
  }

  scrollToContact() {
    this.hideMenu();
    const element = document.getElementById('contact');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
  onClickLogin() {
    this.isMobile = false;
    this.navbarIcon = 'menu';
    this.router.navigate(['/signup']);
  }
  goToDashboard(){
    if(this.isClientLogged){
      this.router.navigate(['client','1'])
    }
    else{
      this.router.navigate(['admin','1'])
    }
  }
}
