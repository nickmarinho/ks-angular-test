import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from './../service/users.service';
import { Users } from './../model/users.model';
import { DataTableModule } from 'angular-2-data-table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './user-list.component.css' ]
})
export class UserListComponent implements OnInit, OnChanges {
  constructor(private usersService: UsersService) { }

  users;
  usersCount: number;

  ngOnInit() {
    this.users = JSON.parse(
      JSON.parse(
        this.usersService.getUsers()
      )
    );

    this.usersCount = this.users.length;
  }

  ngOnChanges() {
    this.users = JSON.parse(
      JSON.parse(
        this.usersService.getUsers()
      )
    );

    this.usersCount = this.users.length;
  }

}
