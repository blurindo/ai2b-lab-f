import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-f';

  constructor(
    private authService: AuthService,
  ) {
  }

  public canAccessUsers(): boolean {
    return this.authService.isAdmin();
  }

  public canAccessItems(): boolean {
    return this.authService.isAuthenticated();
  }

  public getUsername(): string | null {
    return this.authService.getUsername();
  }

  public logout(): void {
    this.authService.logout();
  }
}
