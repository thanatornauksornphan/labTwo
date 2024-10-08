import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
