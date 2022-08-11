import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../../product.service";
import {Products} from "../../products";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: null | string = null;
  // @ts-ignore
  o: Products

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route) => {
      this.id = route.get('product')
      this.productService.getProductsById(this.id).subscribe((result) => {
        this.o = result;
      })
    })
  }

  public edit() {
    let Product = ({
      id: this.o.id,
      name: this.o.name,
      price: this.o.price,
      type: this.o.type,
      typeId: this.o.typeId
    });
    this.productService.addProducts(Product).subscribe();

  }
}
