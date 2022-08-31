import {Component, OnInit} from '@angular/core';
import {Types} from "../groups/types";
import {TypeService} from "../groups/type.service";


@Component({
  selector: 'app-productgroups',
  templateUrl: './productgroups.component.html',
  styleUrls: ['./productgroups.component.css']
})
export class ProductgroupsComponent implements OnInit {


  list: undefined | Types[];


  constructor(
    private typeService: TypeService
  ) {
  }

  ngOnInit(): void {
    this.list = [];
    this.get();
  }
//get list of groups
  public get() {
    this.typeService.getTypes().subscribe((result) => {
      this.list = result;

    })
  }
}
