import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
    MY_SERVER = 'http://localhost:3500/products';
    constructor(private myServ: HttpClient){}
  
    getProducts(): Observable<Product[]> {
        return this.myServ.get<Product[]>(this.MY_SERVER)
      }

      addProduct(prd: Product):Observable<any>{
        return this.myServ.post<any>(this.MY_SERVER, prd)
      }

      delProd(id: number):Observable<any>
      {
        return this.myServ.delete<any>(this.MY_SERVER +"/"+ id)
      }
}
