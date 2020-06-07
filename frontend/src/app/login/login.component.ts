import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public registerForm = new FormGroup({
    email: new FormControl('jeffrey@wenindoubt.com', [Validators.required, Validators.email]),
    password: new FormControl('12Never34!', [Validators.required]),
    confirmPassword: new FormControl('12Never34!', [Validators.required])
  });

  public constructor() {}

  /* Convenience getter to access form fields */
  public get rf(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  public async ngOnInit() {
    // await this.signUp();
    // await this.confirmSignUp();
  }

  public getErrorMessage(): string {
    if (this.rf.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.rf.email.hasError('email') ? 'Not a valid email' : '';
  }

  /* Tested this and registering a user works now */
  public async signUp(email: string, password: string) {
    try {
      const user = await Auth.signUp({
        username: email,
        password /* Not necessary to change */
      });
      console.log({ user });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  public async confirmSignUp() {
    try {
      await Auth.confirmSignUp('jeffrey@wenindoubt.com', '484214');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  public async signIn(email: string, password: string) {
    try {
      const user = await Auth.signIn(email, password);
      console.log('signed in: ', user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  public async onSubmit() {
    console.log('onSubmit Register Form', this.rf.value);
    await this.signIn(this.rf.email.value, this.rf.password.value);
  }
}
