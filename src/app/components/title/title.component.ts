import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  //title = "Titulo del h1";
  //subtitle = "Subtitulo del h1";

  @Input() title?: string;  // le digo que es opcional o se le da un valor predeterminado
  @Input() subtitle?: string;
  ngOnInit(): void {
  }

}
