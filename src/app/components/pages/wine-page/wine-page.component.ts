import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-wine-page',
  templateUrl: './wine-page.component.html',
  styleUrls: ['./wine-page.component.css']
})
export class WinePageComponent implements OnInit {

wine!: Wine;
  constructor(activatedRoute: ActivatedRoute,
    wineService: WineService,
    private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=> {
        if(params.id)
        wineService.getWineById(params.id).subscribe(serverWine => {
          this.wine = serverWine;
        });
      })
     }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.wine);
    this.router.navigateByUrl('/cart-page');

  }
}
