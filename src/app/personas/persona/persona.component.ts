import { Component, Input, OnInit } from "@angular/core";
import { PersonasService } from "../personas.service";
import { Persona } from "./persona.model";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
