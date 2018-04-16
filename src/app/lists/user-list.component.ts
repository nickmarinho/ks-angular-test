import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UsersService } from './../service/users.service';
import { Users } from './../model/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit, OnChanges {
  constructor(private usersService: UsersService) { }

  @Input()
    users: Users;

  ngOnInit() {
    this.users = JSON.parse(
      JSON.parse(
        this.usersService.getUsers()
      )
    );
  }

  ngOnChanges() {
    this.users = JSON.parse(
      JSON.parse(
        this.usersService.getUsers()
      )
    );
  }

  deleteUser(user) {
    this.usersService.delUser(user);
  }

}
