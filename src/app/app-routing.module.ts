import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentScreenComponent } from './components/consent-screen/consent-screen.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consent', component: ConsentScreenComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
