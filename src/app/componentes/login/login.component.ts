import { Component } from '@angular/core';
import { CmcService } from '../../servicios/cmc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  password:string=("*q123456");
  usuario:string=("CMC");
  loading:boolean;

  constructor(private servicios:CmcService,private router: Router ) {
    this.loading = false;
  }

  login(){
    this.loading=true;
    this.servicios.login(this.password, this.usuario).subscribe((res: any) => {
       let key = 'token';
       localStorage.setItem(key, res.headers.get('Authorization'));
       this.loading = false;
      this.router.navigate(["/pages/usuarios"]);
      },
      error => {
        this.loading = true;
        alert("Error valores incorrectos")
        location.reload()
      }
    );
  }
}
