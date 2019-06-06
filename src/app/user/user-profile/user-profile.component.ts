import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../../shared/service/authenticate.service';
import { IUser } from 'src/app/shared/model/IUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private router:Router, private authenticateService: AuthenticateService) { }

  ngOnInit() {
    let user: IUser = this.authenticateService.getCurrentUser();
    let firstName1 = new FormControl(!!user? user.firstName: "", Validators.required);
    let lastName1 = new FormControl(!!user? user.lastName: "", Validators.required);
    this.profileForm = new FormGroup({
      firstNameFormControl: firstName1,
      lastNameFormControl: lastName1
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  save(formValue): void {
    let formData = formValue.value;
    this.authenticateService.updateCurrentUser(formData.firstNameFormControl, formData.lastNameFormControl);
    this.router.navigate(['/events']);
  }

  isFirstNameValid(): boolean {
    return this.profileForm.controls.firstNameFormControl.valid || this.profileForm.controls.firstNameFormControl.untouched
  }

  isLastNameValid(): boolean {
    return this.profileForm.controls.lastNameFormControl.valid || this.profileForm.controls.lastNameFormControl.untouched
  }

}
