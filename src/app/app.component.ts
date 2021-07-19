import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';
  subtitle = 'Todo lo que necesitas saber';
  cards =[
    {imagen: "/assets/images/australia.jpg",
    categoria: "Vuelos",
    titulo: "Australia",
    precio: 97997
  },
  {imagen: "/assets/images/melbourne.jpg",
    categoria: "Paseos",
    titulo: "Melbourne",
    precio: 22222
  },
  {imagen: "/assets/images/austin.jpg",
    categoria: "Alojamiento",
    titulo: "Austin",
    precio: 3333
  },
  {imagen: "/assets/images/cuba.jpg",
    categoria: "Alquiler Autos",
    titulo: "Cuba",
    precio: 44444
  }
  ]
}
