import { Wine } from "./wine";

export class CartItem{

  constructor(public wine: Wine){
  }
  quantity:number = 1;
  price: number = this.wine.price;
}
