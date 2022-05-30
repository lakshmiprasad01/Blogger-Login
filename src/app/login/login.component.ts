import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  isSubmitted  =  false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fB: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm  =  this.fB.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
