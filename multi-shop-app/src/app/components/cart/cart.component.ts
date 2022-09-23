import { Component, OnInit } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // count:number = 1;
  shippingCost:number = 10;
  products = this.productsService.products
  cartLines:Array<CartLine> = []
  // cartLines  = this.cartService.cartLines;
  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    for (let index = 0; index < this.products.length; index++) {
      this.cartLines.push(new CartLine(this.products[index]));
    }
    // console.log(this.cartLines);
  }
  countMinus(index:number){
    if(this.cartLines[index].count == 1){}
    else{this.cartLines[index].count--;}
  }
  countPlus(index:number){
    this.cartLines[index].count++;
  }
  cartItemDelete(index:number){
    this.cartLines.splice(index,1);
  }
  getTotal():number{
    let sum:number = 0;
    for (let index = 0; index < this.cartLines.length; index++) {
      sum += this.cartLines[index].getTotal();
    }
    return sum;
  }
}
