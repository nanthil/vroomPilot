import {Component} from '@angular/core'
import {EquipmentComponent} from './equipment.component'

@Component({
    selector: 'all-equipment',
    template: `
        <div *ngFor="let e of test">
            <single-equipment [equipment]="e">
            </single-equipment>
        </div>
    `
})
export class EquipmentsComponent{
    test = [
        {
            "height": 1,
            "width": 2,
            "imgUrl": "./app/EquipmentComponents/img/unnamed.jpg"
        },
        {
            "height": 2,
            "width": 2,
            "imgUrl": "./app/EquipmentComponents/img/unnamed.jpg"
        },
        {
            "height": 3,
            "width": 2,
            "imgUrl": "./app/EquipmentComponents/img/unnamed.jpg"
        }
    ]
    

}