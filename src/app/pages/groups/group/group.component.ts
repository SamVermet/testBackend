import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TypeService} from "../type.service";
import {Types} from "../types";
import {ProductService} from "../../../product.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  id: null | string = null;
  // @ts-ignore
  o: Types

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route) => {
      this.id = route.get('group')
      this.typeService.getType(this.id).subscribe((result) => {
        this.o = result;
      })
    })
  }

  public edit() {
    let type = ({
      type: this.o.type,
      id: this.o.id
    });
    this.typeService.editType(this.o.id, type).subscribe();

  }

  public delete() {
    this.typeService.deleteTypes(this.o.id).subscribe();
    this.productService.deleteProductsByTypeId(this.o.id).subscribe();
  }
}
