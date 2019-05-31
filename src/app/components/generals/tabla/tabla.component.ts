import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() Agregados;
  constructor() { }

  Borrar = function()
  
  {
    this.Agregados.pop();
  };
  ngOnInit() {
  }

}
