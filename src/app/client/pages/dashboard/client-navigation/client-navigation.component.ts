import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navigation',

  templateUrl: './client-navigation.component.html',
  styleUrls: ['./client-navigation.component.scss'],
})
export class ClientNavigationComponent {
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
    this.router.navigate(['client', route]);
  }
  returnHome() {
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.setItem('power-factory-client-token', '');
    this.router.navigate(['home']);
  }
}
