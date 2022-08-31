import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../../product.service";
import {Products} from "../../products";
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  editProdForm = this.formBuilder.group({
    'name': ['', [Validators.required, Validators.minLength(4)]],
    'price': ['', [Validators.required, Validators.minLength(2)]],
    'stores': this.formBuilder.array([])
  })
  // locationForm = this.formBuilder.group({
  //   'stores': this.formBuilder.array([
  //     this.formBuilder.control(null, Validators.required)
  //   ])
  // })
  id: string;
  o: Products;

  // Stores:[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route) => {
      this.id = route.get('product')
      this.productService.getProductsById(this.id).subscribe((result) => {
        this.o = result;
        this.editProdForm.get('name')?.patchValue(this.o.name);
        this.editProdForm.get('price')?.patchValue(this.o.price);
        (<FormArray>this.editProdForm.get('stores')).clear()
        this.o.stores.forEach((store) => {
          this.addStore(store)
        })
      })
    })
  }
//edit the selected product
  public edit() {
    if (this.editProdForm.valid) {
      let Product = ({
        id: this.o.id,
        name: this.editProdForm.value.name,
        price: this.editProdForm.value.price,
        type: this.o.type,
        typeId: this.o.typeId,
        stores: this.editProdForm.value.stores
      });
      this.productService.updateProducts(Product, this.o.id).subscribe();
      document.getElementById("saved").textContent = "Saved!";
    }

  }
//add a field for a new store in the array in the selected product
  addStore(value?: string) {
    (<FormArray>this.editProdForm.get('stores')).push(this.formBuilder.control(value, Validators.required));

    console.log(this.editProdForm.get('stores'))
    document.getElementById("saved").textContent = "";
  }
//reset the stores for the selected product
  delStore() {
    (<FormArray>this.editProdForm.get('stores')).clear();
    document.getElementById("saved").textContent = "";
  }
}

