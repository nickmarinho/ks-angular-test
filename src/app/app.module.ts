import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';
import { Http, Headers, ConnectionBackend, RequestOptions } from '@angular/http';
import { UserFormComponent } from './forms/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
