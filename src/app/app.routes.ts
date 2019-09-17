import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

  export const ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '',pathMatch: 'full', redirectTo: 'login'},
    { path: '*',pathMatch: 'full', redirectTo: 'login'},

    ]
    export  const Rutas = RouterModule.forRoot(ROUTES);
