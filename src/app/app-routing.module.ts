import { LayoutComponent } from './pages/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: LayoutComponent,

  },
  {path: '**', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
