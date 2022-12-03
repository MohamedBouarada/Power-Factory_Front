import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarIcon:string="menu";
  constructor() { }

  ngOnInit(): void {
  }
  activateMenu(){
    
    const navLinks = document.querySelector(".navLinks")
    navLinks!.classList.toggle('mobile-menu')
    if(this.navbarIcon=="menu"){
      this.navbarIcon="close"
    }else{
      this.navbarIcon="menu";
    }
  }
}
