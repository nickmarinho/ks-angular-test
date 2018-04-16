import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersService } from './service/users.service';
import { UserFormComponent } from './forms/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './lists/user-list.component';
import { DataTableModule } from 'angular-2-data-table';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  exports: [],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
