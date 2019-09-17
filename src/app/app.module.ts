import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { Rutas } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CmcService } from './servicios/cmc.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { PagesComponent } from './pages/pages.component';
import { RutasHijas } from './pages/app.routes';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    NavbarComponent,
    RegistrarComponent,
    LoadingComponent,
    PagesComponent,
    BuscarComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Rutas,
    ReactiveFormsModule,
    // DEFINIENDO RUTAs en el forChild
    RutasHijas


  ],
  providers: [
    CmcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
