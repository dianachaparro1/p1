import { Component, OnInit, Input } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  @Input() Agregados;
  
    Nombre=null;
    ApellidoPat=null;
    ApellidoMat=null;
    Sexo=null;
    Edad=null;
    Correo=null;
  
  Agregar = function()
  {
    if(this.Validacion() && this.ValidacionNombre(this.Nombre) && this.ValidacionNombre(this.ApellidoMat) && this.ValidacionNombre(this.ApellidoPat) && this.ValidacionEdad()&&this.ValidacionSexo())
    {
      this.Agregados.push({
        Nombre:this.Nombre,
        ApellidoPat:this.ApellidoPat,
        ApellidoMat:this.ApellidoMat,
        Correo:this.Correo,
        Sexo:this.Sexo,
        Edad:this.Edad,
        Icono:Math.round((Math.random() * (9 - 1) + 1 ))
      });
    };
  }

  

    Validacion = function()
    {
      var Filtro = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.([a-zA-Z0-9]{2,4})+$/;
      if (!Filtro.test(this.Correo))
      {
        alert('Ingresa un Correo');
        return false;
      };
      return true;
  
    };
  
    ValidacionSexo = function()
    {
      var Filtro = /[F]/g;
      var Filtro2 = /[M]/g;
 
      if (this.Sexo.match(Filtro)  == null || this.Sexo.match(Filtro2) != null)
      {
        alert('Ingresa un sexo');
        return false;
      };
      return true;
    };
  
  
    ValidacionEdad = function()
    {
      var Filtro = /^([0-9])+$/;
      if (!Filtro.test(this.Edad))
      {
       
              alert('Ingresa una Edad Valida');
            return false;
      };
      if(this.Edad.length<=2){
        
        return true;
            }
            else {
              alert('Ingresa una Edad Valida');
            return false;
          }
      
    };
  
    ValidacionNombre = function(param)
    {
      var Filtro = /^([a-zA-Z])+$/;
      if (!Filtro.test(param))
      {
        alert('Ingresa un Nombre Valido');
        return false;
      };
      return true;
    };
 
  constructor() {}
  

  ngOnInit() {
  }

}
