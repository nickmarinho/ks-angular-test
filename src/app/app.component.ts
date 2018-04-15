import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
import { Users } from './model/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './app.component.css']
})
export class AppComponent {
  constructor(private usersService: UsersService) { }

  users = this.usersService.getUsers();
  user = new Users();
}
