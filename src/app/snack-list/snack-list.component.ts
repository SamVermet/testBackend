import {Component, OnInit} from '@angular/core';
import {Products} from "../products";
import {ProductService} from "../product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

  public products: Products[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getSnacks();
  }

  public getSnacks(): void {
    this.productService.getSnacks().subscribe(
      (response: Products[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
