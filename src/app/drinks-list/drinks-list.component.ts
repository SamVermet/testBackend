import {Component, OnInit} from '@angular/core';
import {Products} from "../products";
import {ProductService} from "../product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.css']
})
export class DrinksListComponent implements OnInit {
  public products: Products[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getDrinks();
  }

  public getDrinks(): void {
    this.productService.getDrinks().subscribe(
      (response: Products[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
