import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BagaComponent } from './components/baga/baga.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WagaComponent } from './components/waga/waga.component';

const routes: Routes = [
    
    {path: 'contact',
    component: ContactComponent, children:[
        {path:"waga",component:WagaComponent},
        {path:"baga",component:BagaComponent},
        { path: ':id', component: ProductDetailsComponent }
      ]},
    {path:"help" , component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
