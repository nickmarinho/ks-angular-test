import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users.model';
import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
    let obj;
    this.getUsers().subscribe(data => obj = data, error => console.log(error));
 }

  /**
  * get user list
  */
  public getUsers(): Observable<Users> {
    return this.http
      .get('users.json')
      .map((res: any) => res.json());
   }
}
