import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { NotificationService } from './services/notification/notification.service';
import { UserService } from './http/user/user.service';
import { AuthService } from './authentication/auth.service';
import { ApiService } from './http/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NotificationService,
    ApiService,
    UserService,
    AuthService
  ]
})
export class CoreModule { }