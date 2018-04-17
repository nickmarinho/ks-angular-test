import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersService } from './service/users.service';
import { UserFormComponent } from './forms/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './lists/user-list.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
