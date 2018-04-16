import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from './service/users.service';
import { Users } from './model/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private usersService: UsersService) { }

  users;

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

}
