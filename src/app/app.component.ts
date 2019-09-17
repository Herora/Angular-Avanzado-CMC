import { Component, OnInit } from '@angular/core';
import { CmcService  } from './servicios/cmc.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cmc';
  login:boolean;
  token: string;

  
  constructor(private serv: CmcService){

  /*   console.log(localStorage.getItem("token")); */
  }
  
  ngOnInit() {
    this.token = localStorage.getItem("token");
    if(localStorage.getItem('token')){
      this.login=true;
    }
  }

}
