import { UsersService } from '../service/users.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Users } from '../model/users.model';
import { FormGroup, Validators, FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;
    errorsMessage: string;
    successMessage: string;

    @Input()
        user: Users;
    @Output()
        updateUserListEmitter: EventEmitter<string> = new EventEmitter();

    constructor(
        private usersService: UsersService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.criarFormGroup();
    }

    private criarFormGroup() {
        this.user = new Users();
        this.userForm = this.formBuilder.group({});
        this.userForm.addControl('name', new FormControl('', Validators.required));
        this.userForm.addControl('email', new FormControl('', Validators.required));
        this.userForm.addControl('homePhone', new FormControl('', null));
        this.userForm.addControl('cellPhone', new FormControl('', null));
        this.userForm.addControl('password', new FormControl('', Validators.required));
    }

    public resetForm() {
        this.user = new Users();
        this.errorsMessage = '';
        this.successMessage = '';
    }

    public clearSessionList() {
        this.usersService.clearUserList();
        this.updateUserListEmitter.emit();
    }

    public saveUser() {
        if (!this.checkUserDataError()) {
            this.usersService.addUpdateUser(this.user);
            this.successMessage = 'User saved successfully!';
            this.updateUserListEmitter.emit();
            this.resetForm();
        }
    }

    public checkUserDataError() {
        let errors = 0;
        this.errorsMessage = '';

        if (this.user.name === undefined || this.user.name === '') {
            errors++;
            this.errorsMessage = 'The name is required';
        }

        if (this.user.email === undefined || this.user.email === '') {
            errors++;
            this.errorsMessage = 'The email is required';
        }

        if (this.user.password === undefined || this.user.password === '') {
            errors++;
            this.errorsMessage = 'The password is required';
        }

        if (
            (this.user.homePhone === undefined || this.user.homePhone === '') &&
            (this.user.cellPhone === undefined || this.user.cellPhone === '')
        ) {
            errors++;
            this.errorsMessage = 'At least one telephone number is required';
        }

        return errors;
    }
}
