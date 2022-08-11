import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Products} from "../products";
import {TypeService} from "../../groups/type.service";
import {Types} from "../../groups/types";

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.css']
})
export class ProductgroupComponent implements OnInit {


  list: undefined | Products[];
  id: null | string = null;
  AddNewName: string = '';
  AddNewPrice: string = '';
  Type!: string;
  // @ts-ignore
  o: Types

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.list = [];
    this.get();
    this.typeService.getType(this.id).subscribe((result) => {
      this.o = result;
    });
  }

  public get() {

    this.route.paramMap.subscribe((route) => {
      this.id = route.get('group')
      this.productService.getProductsByTypeId(this.id).subscribe((result) => {
        this.list = result;
      })
    })
  }


  public delProduct(id: string, type: string) {
    this.productService.deleteProducts(id).subscribe();
    this.Type = type;
    this.get();
  }

  public add() {
    if (this.AddNewName != '' && this.AddNewPrice != '') {
      let Product = ({
        id: '',
        name: this.AddNewName,
        price: this.AddNewPrice,
        type: this.o.type,
        typeId: this.id
      });
      this.productService.addProducts(Product).subscribe();
      document.getElementById(this.AddNewPrice = '')
      document.getElementById(this.AddNewName = '')
    }
    this.get();
  }
}
