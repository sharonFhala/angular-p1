import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/prod.service';

@Component({
  selector: 'app-waga',
  templateUrl: './waga.component.html',
  styleUrls: ['./waga.component.scss']
})
export class WagaComponent implements OnInit {

    products :Product[]=[]; 

    constructor(private prdSrv:ProdService){        
      }
  
      ngOnInit(): void {
        //this.prdSrv.getProducts().subscribe(res => this.getProducts())
        this.getProducts();
      }

      getProducts()
      {
        this.prdSrv.getProducts().subscribe(res => this.products=res);
      }

      addProduct(prod: Product)
      {
        this.prdSrv.addProduct(prod).subscribe(res => this.getProducts())
      }

      add(product:string,price:number)
    {
        this.addProduct({product,price})
    }

    delProd(id: number =0)
    {
        this.prdSrv.delProd(id).subscribe(res => this.getProducts())
    }

}
