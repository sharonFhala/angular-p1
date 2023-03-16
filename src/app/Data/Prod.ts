import { Product } from '../models/product';

const ar: Product[]=[
    {id: 1, product:"milk", price:3},
    {id: 2, product:"sugar", price:13},
    {id:3, product:"bread", price:10},
    {id:4, product:"honey", price:30}
]

export const getAll=() =>{
    return ar;
}

export const getSingleProd= (id: number) =>{
    return ar[id];
}