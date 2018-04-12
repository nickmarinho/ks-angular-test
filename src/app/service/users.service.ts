import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  /**
  * get user list
  */
  getUsers() {
    return this.http.get(`users.json`)
    .subscribe(
      data => {
        return data;
      }
    );
  }
}
