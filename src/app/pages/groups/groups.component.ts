import {Component, OnInit} from '@angular/core';
import {Types} from "./types";
import {TypeService} from "./type.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  addForm = this.formBuilder.group({
    groups: ['', [Validators.required, Validators.minLength(4)]],
  })
  list: undefined | Types[];

  constructor(
    private typeService: TypeService,
  private formBuilder: FormBuilder,
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
    if (this.addForm.valid) {
      let type = {
        type: this.addForm.value.groups,
        id: ''
      };
      this.typeService.addTypes(type).subscribe();

    }
    this.get();

  }

}
