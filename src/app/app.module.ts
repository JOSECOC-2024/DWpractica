import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../enviroments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CharacterComponent } from './dbz/components/character/character.component';
import { EstudianteModule } from './estudiante/estudiante.module';
import { VistaComponent } from './catalogo/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
    CharacterComponent,
    VistaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EstudianteModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Aquí inicializas Firebase
    AngularFireDatabaseModule, // Aquí habilitas el uso de la base de datos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
