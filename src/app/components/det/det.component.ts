import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-det',
    templateUrl: './det.component.html',
    styleUrls: ['./det.component.scss']
})
export class DetComponent {
    editFlag: boolean = false

    @Input() myProduct?: Product
    @Output() saveProd = new EventEmitter<Product>();
    setEdit() {
        this.editFlag = !this.editFlag;
    }
    update(product: string, price:number) {
        if(this.myProduct){
        this.saveProd.emit({id:this.myProduct.id,product,price})
        }
    }
}
