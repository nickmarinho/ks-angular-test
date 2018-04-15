import { Injectable } from '@angular/core';
import { Users } from '../model/users.model';

@Injectable()
export class UsersService {
  constructor() { }

  public getUsers() {
    return sessionStorage.getItem('users') ? sessionStorage.getItem('users') : [];
   }

   public addUpdateUser (user) {
    return sessionStorage.setItem('users', user);
  }

  public delUser(user) {
    sessionStorage.removeItem(user);
  }

}
