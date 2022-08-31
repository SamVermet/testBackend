import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Products} from "../products";
import {TypeService} from "../../groups/type.service";
import {Types} from "../../groups/types";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-productgroup',
  templateUrl: './productgroup.component.html',
  styleUrls: ['./productgroup.component.css']
})
export class ProductgroupComponent implements OnInit {
//form for adding new products
  addProdForm = this.formBuilder.group({
    'name': ['', [Validators.required, Validators.minLength(4)]],
    'price': ['', [Validators.required, Validators.minLength(2)]],
  })

  list: undefined | Products[];
  id: string;

  Type!: string;
  o: Types;

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  }


  ngOnInit(): void {
    this.list = [];
    this.get();

  }
//get all products within the selected group
  public get() {

    this.route.paramMap.subscribe((route) => {
      this.id = route.get('group')
      this.productService.getProductsByTypeId(this.id).subscribe((result) => {
        this.list = result;
        this.typeService.getType(this.id).subscribe((result) => {
          this.o = result;
        })
      })
    })
  }

//delete a product (using delete button)
  public delProduct(id: string, type: string) {
    this.productService.deleteProducts(id).subscribe();
    this.Type = type;
    this.get();
  }
// add a new product
  public add() {
    if (this.addProdForm.valid) {
      let Product = ({
        id: '',
        name: this.addProdForm.value.name,
        price: this.addProdForm.value.price,
        type: this.o.type,
        typeId: this.id,
        stores: []
      });
      this.productService.addProducts(Product).subscribe();
    }
    this.get();
  }

}
