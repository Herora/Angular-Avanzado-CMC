import {Routes, RouterModule} from '@angular/router';

import { UsuariosComponent } from '../componentes/usuarios/usuarios.component';
import { RegistrarComponent } from '../componentes/registrar/registrar.component';
import { BuscarComponent } from '../componentes/buscar/buscar.component';
import { PagesComponent } from './pages.component';

  const ROUTES: Routes = [
      {
        path: 'pages',
        component: PagesComponent,
        children: [
            {path: 'registrar', component: RegistrarComponent},
            {path: 'usuarios', component: UsuariosComponent},
            {path: 'buscar', component: BuscarComponent},

            { path: '',pathMatch: 'full', redirectTo: 'login'},
            { path: '*',pathMatch: 'full', redirectTo: 'login'},
        ]
    },
    ]


    export const RutasHijas = RouterModule.forChild(ROUTES);
