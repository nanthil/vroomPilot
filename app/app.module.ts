import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {EquipmentComponent} from './EquipmentComponents/equipment.component';
import {EquipmentsComponent} from './EquipmentComponents/equipments.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    EquipmentComponent,
    EquipmentsComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})

export class AppModule { }
