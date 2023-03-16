import { Component, OnInit } from '@angular/core';
import { getAll, getSingleProd } from 'src/app/Data/Prod';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/prod.service';
 


@Component({
  selector: 'app-baga',
  templateUrl: './baga.component.html',
  styleUrls: ['./baga.component.scss']
})
export class BagaComponent  {

    

    constructor(private prdSr :ProdService){}
//   ar: Product[]= this.prodSrv.getAll();
//   singleProd: Product = this.prodSrv.getSingleProd(1);
//   ngOnInit(): void {
//  }

}
