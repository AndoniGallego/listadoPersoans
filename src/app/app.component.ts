import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: "AIzaSyB5SdW7HOEw5uCZPt47JnM21-FE4N7nMtc",
      authDomain: "listadopersonas-83be1.firebaseapp.com",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
