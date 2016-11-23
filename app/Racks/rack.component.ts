import {Component, Output} from '@angular/core'

@Component({
    selector: 'single-rack',
    template: `
      <div class="rack">
        <all-equipment [width]="rackWidth"></all-equipment>
      </div>`,
    styles: [
      `
        .rack {
            height: 875px;
            width: 100%;
            margin: 10px;
            background-image: url("./app/Racks/img/42uRack.png"); 
        }
     `
    ]

})
export class RackComponent{
    rackWidth = 235;
    rackName = "rack";
    // <div *ngFor="let element of range(6); let i=index">
    //   elements[i].name
    // </div>
    rackCount = 1

    constructor(){
      this.rackName = this.rackName + this.rackCount;
    }
}
