import { Injectable } from '@angular/core';
import { Users } from '../model/users.model';

@Injectable()
export class UsersService {
  constructor() { }

  public getUsers() {
    return JSON.stringify(sessionStorage.getItem('users'));
  }

  public addUpdateUser (user) {
    const users = JSON.parse(sessionStorage.getItem('users')) ? JSON.parse(sessionStorage.getItem('users')) : [];
    let i = users.length;

    while (i--) {
      if (user.email.indexOf(users[i].email) !== -1) {
        users.splice(i, 1);
      }
    }

    users.push(user);
    sessionStorage.removeItem('user');

    return sessionStorage.setItem('users', JSON.stringify(users));
  }

  public delUser(user) {
    const users = JSON.parse(sessionStorage.getItem('users')) ? JSON.parse(sessionStorage.getItem('users')) : [];
    let i = users.length;

    while (i--) {
      if (user.email.indexOf(users[i].email) !== -1) {
        users.splice(i, 1);
      }
    }

    sessionStorage.removeItem('user');

    return sessionStorage.setItem('users', JSON.stringify(users));
  }

  public clearUserList() {
    sessionStorage.clear();
  }

}
