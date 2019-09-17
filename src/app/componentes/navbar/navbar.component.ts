import { Component } from '@angular/core';
import { CmcService } from 'src/app/servicios/cmc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private servicios:CmcService,private router: ActivatedRoute) {
   }

  logout() {
    this.servicios.logout();
  }
}
