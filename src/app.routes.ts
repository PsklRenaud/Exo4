import{Routes} from '@angular/router';
import {SignupComponent} from './app/signup/signup.component';
import {UserProfileComponent} from './app/user-profile/user-profile.component';

const ROUTES: Routes = [
    { path: '', component : UserProfileComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserProfileComponent },
  ];
  {useHash: true}
  export { ROUTES };