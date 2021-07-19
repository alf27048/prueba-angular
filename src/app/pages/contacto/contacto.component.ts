import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }
  title = "Seccion contacto";
  subtitle = "Contactanos";

  ngOnInit(): void {
  }

}
