import { UsersService } from '../service/users.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
        if (this.checkUserDataError()) {
            this.errorsMessage = 'At last one telephone number is required';
        } else {
            this.usersService.addUpdateUser(this.user);
            this.successMessage = 'User saved successfully!';
            this.updateUserListEmitter.emit();
            this.resetForm();
        }
    }

    public checkUserDataError() {
        let errors = 0;

        if (this.user.homePhone === undefined && this.user.cellPhone === undefined) {
            errors++;
        } else if (this.user.homePhone === '' && this.user.cellPhone === '') {
            errors++;
        }

        return errors;
    }
}
