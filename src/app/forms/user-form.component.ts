import { UsersService } from '../service/users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    user: Users;
    userForm: FormGroup;
    errorsMessage: string;
    successMessage: string;

    constructor(
        private usersService: UsersService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.criarFormGroup();
    }

    private criarFormGroup() {
        this.userForm = this.formBuilder.group({});
        this.userForm.addControl('name', new FormControl('', Validators.required));
        this.userForm.addControl('email', new FormControl('', Validators.required));
        this.userForm.addControl('homePhone', new FormControl('', null));
        this.userForm.addControl('cellPhone', new FormControl('', null));
        this.userForm.addControl('password', new FormControl('', Validators.required));
    }

    public resetForm() {
        this.user = new Users();
    }

    public saveUser() {
        if (this.user.homePhone === '' && this.user.cellPhone === '') {
            this.errorsMessage = 'At last one telephone number is required';
        } else {
            this.usersService.addUpdateUser(this.user);
            this.successMessage = 'User saved successfully!';
        }
    }
}
