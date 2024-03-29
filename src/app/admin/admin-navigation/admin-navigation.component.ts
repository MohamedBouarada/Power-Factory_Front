import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',

  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss'],
})
export class AdminNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly router: Router
  ) {}

  navigateToRoute(route: string) {
      if(route=="5"){
      this.router.navigate(['']);

      }else{
      this.router.navigate(['admin', route]);

      }

  }

  logout() {
    localStorage.setItem('power-factory-admin-token' , '')
    this.router.navigate([''])
  }
}
