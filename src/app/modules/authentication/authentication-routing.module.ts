import { SignupComponent } from './partials/signup/signup.component';
import { LoginComponent } from './partials/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { PersonalInformationComponent } from './partials/signup/partials/personal-information/personal-information.component';
import { AddressInformationComponent } from './partials/signup/partials/address-information/address-information.component';
import { IdentityCardInformationComponent } from './partials/signup/partials/identity-card-information/identity-card-information.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'signup', component: SignupComponent },
      // { path: '***', redirectTo: 'login' },
      { path: 'personal', component: PersonalInformationComponent },
      { path: 'address', component: AddressInformationComponent },
      { path: 'identity', component: IdentityCardInformationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
