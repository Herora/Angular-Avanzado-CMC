import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { ROUTES } from '../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from '../componentes/usuarios/usuarios.component';
import { CmcService } from '../servicios/cmc.service';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { RegistrarComponent } from '../componentes/registrar/registrar.component';
import { LoadingComponent } from '../componentes/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    NavbarComponent,
    RegistrarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // DEFINIENDO RUTAs en el forRoot
    RouterModule.forRoot( ROUTES, { useHash: false } ),
  ],
  providers: [
    CmcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
