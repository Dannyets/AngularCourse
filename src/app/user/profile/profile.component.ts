import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05c65, padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webket-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :-ms-input-placeholder { color: #999 }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {
    const { firstName, lastName } = this.authService.currentUser;

    this.firstNameControl = new FormControl(firstName);
    this.lastNameControl = new FormControl(lastName);

    this.profileForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl
    });
  }

  saveProfile(formValues) {
    const { firstName, lastName } = formValues;

    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(firstName, lastName);
      this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  shouldDisplayError(formControlName) {
    console.log(this[formControlName + 'Control']);

    const res = this[formControlName + 'Control'].invalid &&
           this[formControlName + 'Control'].touched;

    console.log('Should display error?', res);

    return res;
  }
}
