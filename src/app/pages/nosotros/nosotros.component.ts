import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  saludar () {
    alert("Oh, hiciste click!");
  }

  title = "Seccion nosotros";
  subtitle = "Quienes somos";
  mostrar = false;

  toggleInformation () {
    //investimos el estado de 
    this.mostrar =!this.mostrar;  // this: es una propiedad interna, es el mostrar del mismo archivo
  }

  ngOnInit(): void {
  }

}
