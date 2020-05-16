import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  listaDisponibles = false;
  listaDesconectados = false;

  usuarios = [
    {
      id: 1,
      nombre: 'franklin',
      estado: 'disponible'
    }, {
      id: 2,
      nombre: 'miguel',
      estado: 'disponible'
    }, {
      id: 3,
      nombre: 'alondra',
      estado: 'desconectado'
    }, {
      id: 4,
      nombre: 'patricia',
      estado: 'disponible'
    }, {
      id: 5,
      nombre: 'maria',
      estado: 'disponible'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  dezplegarLista(estado) {
    // console.log(estado)
    if (estado == 'disponibles') {
      this.listaDesconectados = false;
      this.listaDisponibles = true;
    } else {
      if (estado == 'desconectados') {
        this.listaDisponibles = false;
        this.listaDesconectados = true;
      }
    }
  }

}
