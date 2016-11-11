import {Component, Input, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'single-equipment',
    template: `
        <img class="equipment"
            [src]="equipmentImg"
            [style.width.px]="width" 
            [style.height.px]="height"/>
            
        
     `,
     styles: [`
        .equipment {
        }
     `]
})
//  [style.background-image]="backgroundImageStyle"
export class EquipmentComponent{
    //set imgUrl to imgUrl
    //set heigh width
    //imgUrl = './app/EquipmentComponents/img/unnamed.jpg'
    @Input() equipment: any;
    width = 0;
    height = 0;

    //set to any, because value cannot be string
    equipmentImg : any;
    
    //DomSanitizer allows us to set background image dynamically
    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        
        console.log(this.equipment.imgUrl);
        this.width = this.equipment.width * 50;
        this.height = this.equipment.height * 50;
        this.equipmentImg = this.equipment.imgUrl;

       
    }
}
