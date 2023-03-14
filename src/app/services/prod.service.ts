import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
    ar: Product[]=[
        {product:"milk", price:3},
        {product:"sugar", price:13},
        {product:"bread", price:10},
        {product:"honey", price:30}
    ]
    
    getAll=() =>{
        return this.ar;
    }
    
     getSingleProd= (id: number) =>{
        return this.ar[id];
    }
  constructor() { }
}
