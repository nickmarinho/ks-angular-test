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
    users.push(user);

    return sessionStorage.setItem('users', JSON.stringify(users));
  }

  public delUser(user) {
    const users = JSON.parse(sessionStorage.getItem('users')) ? JSON.parse(sessionStorage.getItem('users')) : [];
    const index: number = users.indexOf(user);

    if (index !== -1) {
      users.splice(index, 1);
    }

    sessionStorage.removeItem('user');

    return sessionStorage.setItem('users', JSON.stringify(users));
  }

  public clearUserList() {
    sessionStorage.clear();
  }

}
