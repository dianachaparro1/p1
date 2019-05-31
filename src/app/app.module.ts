import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormularioComponent } from './components/generals/formulario/formulario.component';
import { HomeComponent } from './components/generals/home/home.component';
import { TablaComponent } from './components/generals/tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    FormularioComponent,
    HomeComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
