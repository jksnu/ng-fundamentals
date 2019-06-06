import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../shared/service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mouseoverLogin:boolean = false;

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm): void {
    this.authenticateService.authenticate(loginForm.value.userName, loginForm.value.password);
    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

}
