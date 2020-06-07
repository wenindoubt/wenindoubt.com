import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hide = true;
  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor() {}

  /* Convenience getter to access form fields */
  public get rf(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  public async ngOnInit() {
    // await this.signUp();
    // await this.confirmSignUp();
    await this.signIn();
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
        password: password /* Not necessary to change */
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

  public async signIn() {
    try {
      const user = await Auth.signIn('jeffrey@wenindoubt.com', '12Never34!');
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  public async onSubmit() {
    console.log('onSubmit Register Form', this.rf.value);
    await this.signUp(this.rf.email.value, this.rf.password.value);
  }
}
