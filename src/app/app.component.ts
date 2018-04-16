import { Component } from '@angular/core';
import { Users } from './model/users.model';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private usersService: UsersService) { }

  users: Users;

  updateUserList(users) {
    this.users = JSON.parse(
      JSON.parse(
        this.usersService.getUsers()
      )
    );
  }
}
