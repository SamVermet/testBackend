import {Component, forwardRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../type.service";
import {Types} from "../types";
import {ProductService} from "../../../product.service";
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  FormBuilder,
  Form,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import {Validator} from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  editForm = this.formBuilder.group({
    'type': ['', [Validators.required, Validators.minLength(4)]],
  });
  id: null | string = null;

  o: Types;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route) => {
      this.id = route.get('group')
      this.typeService.getType(this.id).subscribe((result) => {
        this.o = result;
        this.editForm.get('type')?.patchValue(this.o.type);
      })
    })
  }

  public edit() {
    if (this.editForm.valid) {

      const {value: values} = this.editForm;
      console.log(values)
      let type = {
        id: this.o?.id,
        type: this.editForm.value.type
      };
      if (this.o?.id)

        this.typeService.editType(this.o.id, type).subscribe();
    }

  }

  public delete() {
    this.typeService.deleteTypes(this.o.id).subscribe();
    this.productService.deleteProductsByTypeId(this.o.id).subscribe();
  }

  // public setupForm() {
  //   this.editForm = this.formBuilder.group({
  //     group: ['', [Validators.required, Validators.minLength(4)]],
  //   });
  // }
}
