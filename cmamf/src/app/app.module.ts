import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
