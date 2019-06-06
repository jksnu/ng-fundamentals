import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private currentUser: IUser;

  constructor() { }

  getCurrentUser(): IUser {
    return this.currentUser;
  }

  authenticate(userName: string, password: string): boolean {
    this.currentUser = {
      id:1,
      userName: userName,
      firstName: "Jitendra",
      lastName: "Singh"
    }
    return true;
  }

  updateCurrentUser(firstName: string, lastName: string): boolean {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    return true;
  }
}
