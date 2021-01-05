import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './personas/persona/persona.model';

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient,
              private loginService: LoginService
            ){}

  //Cargar personas
  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listadopersonas-83be1-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]){
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listadopersonas-83be1-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
    .subscribe(
      response => console.log("Resultado de guardar las Personas" + response),
      error => console.log("Error al guardar Personas: " + error)
    );
  }

  //Modificar persona
  modificarPersona(index: number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listadopersonas-83be1-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("resultado modificar Persona: " + response),
        error => console.log("Error en modificar la Persona: " + error)
      )
  }

  //Eliminar persona
  eliminarPersona(index: number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listadopersonas-83be1-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("resultado eliminar Persona: " + response),
        error => console.log("Error en eliminar la Persona: " + error)
      )
  }
}
