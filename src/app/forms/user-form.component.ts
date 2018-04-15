import { UsersService } from '../service/users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    constructor(
        private usersService: UsersService,
        private formBuilder: FormBuilder
    ) { }

    user: Users;
    userForm: FormGroup;

    ngOnInit() {
        this.criarFormGroup();
    }

    private criarFormGroup() {
        this.userForm = this.formBuilder.group({});
        this.userForm.addControl('name', new FormControl('', null));
        this.userForm.addControl('email', new FormControl('', null));
        this.userForm.addControl('homePhone', new FormControl('', null));
        this.userForm.addControl('cellPhone', new FormControl('', null));
        this.userForm.addControl('password', new FormControl('', null));
    }

    public resetForm() {
        this.user = new Users();
    }

    public saveUser() {
        this.usersService.addUpdateUser(this.user);
    }
}
