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
    {imagen: "/assets/images/patoruzito.jpg",
    categoria: "Vuelos",
    titulo: "Australia",
    precio: 97997
  },
  {imagen: "/assets/images/patoruzito.jpg",
    categoria: "Paseos",
    titulo: "Melbourne",
    precio: 22222
  },
  {imagen: "/assets/images/patoruzito.jpg",
    categoria: "Alojamiento",
    titulo: "Austin",
    precio: 3333
  },
  {imagen: "/assets/images/patoruzito.jpg",
    categoria: "Alquiler Autos",
    titulo: "Medelin",
    precio: 44444
  }
  ]
}
