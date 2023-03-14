import { Product } from '../models/product';

const ar: Product[]=[
    {product:"milk", price:3},
    {product:"sugar", price:13},
    {product:"bread", price:10},
    {product:"honey", price:30}
]

export const getAll=() =>{
    return ar;
}

export const getSingleProd= (id: number) =>{
    return ar[id];
}