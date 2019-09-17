import { Component } from '@angular/core';
import { CmcService } from '../../servicios/cmc.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: any;
  cedula: number;

  constructor(private servicios: CmcService, private router: ActivatedRoute, private routerRutas: Router ) {

    this.router.params.subscribe(params => {
      this.listUsuarios();
    });
  }

  listUsuarios() {
    this.servicios.listUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
        //console.log(usuarios);
      });
  }

  eliminarUsuario(cedula: number) {
    if(confirm("Deseas eliminar este usuario")){
    this.servicios.eliminarUsuario(cedula)
    .subscribe((res:any) =>{
      alert("Usuario eliminado")
      this.routerRutas.navigate(['/usuarios']),
        this.listUsuarios();
      }, error => {
        //console.error("HAY UN ERROR EN APLICACION", error)
      })
    }
  }

}
