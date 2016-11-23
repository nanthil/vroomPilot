import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EquipmentComponent } from './EquipmentComponents/equipment.component';
import { EquipmentsComponent } from './EquipmentComponents/equipments.component';
import { RackComponent } from './Racks/rack.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule
    //DragulaModule
     ],
  declarations: [ 
    AppComponent, 
    EquipmentComponent,
    EquipmentsComponent,
    RackComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})

export class AppModule { }
