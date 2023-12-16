import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  public username = '';
  public password = '';
  public error = '';

  constructor(
    private authService: AuthService,
  ) {
  }

  loginSubmit() {
    this.authService
      .login(this.username, this.password)
      .subscribe(response => {
        if (response && response.token) {
          this.error = '';
          this.username = '';
          this.password = '';
        } else {
          this.error = 'Failed to login. Please check your username and password.';
        }
      })
    ;
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
