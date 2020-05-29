import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';
// import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent},
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
