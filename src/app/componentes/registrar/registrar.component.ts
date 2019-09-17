import { Component, OnInit } from '@angular/core';
import { CmcService } from '../../servicios/cmc.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { Directive, Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  user: FormGroup;

  constructor(private servicios: CmcService, private router: Router) { }

  ngOnInit() {

    this.user = new FormGroup({
      cedula: new FormControl('', [Validators.required, Validators.pattern("/^[0-9]+$/")]),
      celular: new FormControl(''),
      direccion: new FormControl(''),
      email: new FormControl(''),
      nombre: new FormControl(''),
    })

  }

  registrar(): void {
    this.servicios.registrarUsuario(this.user.get("cedula").value, this.user.get("celular").value, this.user.get("direccion").value, this.user.get("email").value, this.user.get("nombre").value)
      .subscribe((data: any) => {
        alert("Usuario registrado")
        this.router.navigate(['/pages/usuarios'])
      });
  }


}
