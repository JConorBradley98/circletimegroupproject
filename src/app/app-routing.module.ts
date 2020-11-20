
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircleTimeComponent, ConsentScreenComponent, LoginComponent } from './components';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consent', component: ConsentScreenComponent },
  { path: 'circle-time', component: CircleTimeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
4