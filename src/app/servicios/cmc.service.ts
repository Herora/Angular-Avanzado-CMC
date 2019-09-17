import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmcService  {

  public token: any;

  httpOptions : { headers; observe; }= {
    headers : new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.getToken(),
    }),
    observe: 'response'
  };

  constructor(private http: HttpClient, private router: Router ){}

  getToken() {
    if(this.token = localStorage.getItem("token"))
    {
      return this.token;
    }else{
      alert("Por favor inica sesion.")
      return this.router.navigate(['/login']);
    }
  }

  getQuery(query: string){
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.getToken()
        });
    const url = `https://prubascmc.herokuapp.com/${query}`;
    return this.http.get(url,{headers});
  }

  // SERVICIOS

  login(password:string, usuario: string) : any{
      let data = `password=${password}&usuario=${usuario}`;
     return this.http.post(`https://prubascmc.herokuapp.com/aut`,data , this.httpOptions);
  }

  listUsuarios(){
    return this.getQuery(`usuario`);
  }

  listUsuario(cedula:number){
    return this.getQuery(`usuario/${cedula}`);
  }

  registrarUsuario(cedula:number,celular:number,direccion:string,email:string,nombre:string){
    let data = `cedula=${cedula}&celular=${celular}&direccion=${direccion}&email=${email}&nombre=${nombre}`;
    const url = `https://prubascmc.herokuapp.com/usuario`;
    return  this.http.post(url,data,this.httpOptions)
  }

  eliminarUsuario(cedula:number){
    const url = `/usuario/${cedula}`
        return this.http.delete(url,this.httpOptions)
    }

  logout() {
    this.token = null;
    localStorage.clear();
    location.href ="/login";
  }

}
