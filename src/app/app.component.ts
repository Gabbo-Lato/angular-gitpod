import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gitpod';
  listaAnimali = [
    { id: 1, name: 'Cavallo' },
    { id: 2, name: 'Scimmia' },
    { id: 3, name: 'Papera' },
    { id: 4, name: 'Delfino' },
  ];
}
