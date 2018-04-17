import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from './../service/users.service';
import { Users } from './../model/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit, OnChanges {
  constructor(private usersService: UsersService) { }

  user: Users;

  @Input()
    users: Users;

  @Output()
    editUserEmitter: EventEmitter<string> = new EventEmitter();

  @Output()
    updateUserListEmitter: EventEmitter<string> = new EventEmitter();

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

  editUser(user) {
    this.editUserEmitter.emit(user);
  }

  deleteUser(user) {
    this.usersService.delUser(user);
    this.updateUserListEmitter.emit();
  }

}
