import {Component, OnInit} from '@angular/core';
import {Types} from "./types";
import {TypeService} from "./type.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  list: undefined | Types[];
  AddNew!: string;

  constructor(
    private typeService: TypeService
  ) {
  }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.typeService.getTypes().subscribe((result) => {
      this.list = result;
    })
  }

  public add() {
    if (this.AddNew != '') {
      let type = ({
        type: this.AddNew,
        id: ''
      });
      this.typeService.addTypes(type).subscribe();
    }
    document.getElementById(this.AddNew = '')
    this.get();
  }

}
