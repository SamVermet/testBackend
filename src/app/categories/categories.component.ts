import {Component, OnInit} from '@angular/core';
import {Types} from "./types";
import {HttpErrorResponse} from "@angular/common/http";
import {TypeService} from "./type.service"
import {delay} from "rxjs";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public types: Types[] = [];
  newType: string = "";

  constructor(private typeService: TypeService) {
  }

  ngOnInit() {
    this.getTypes();
    console.log("0");
  }


  public getTypes(): void {
    this.typeService.getTypes().subscribe(
      (response: Types[]) => {
        this.types = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteTypes({id}: { id: any }): void {
    this.typeService.deleteTypes(id).subscribe();
    this.getTypes();
  }

  public togglePopOn() {
    // @ts-ignore
    document.getElementById("popupNew").classList.add("active");
  }

  public togglePopOff() {
    console.log("bam")
    // @ts-ignore
    document.getElementById("popupNew").classList.remove("active");
  }

  public addType() {

    let type = ({
      type: this.newType,
      id: ''
    });
    this.newType = '';
    this.typeService.addTypes(type).subscribe();
    this.togglePopOff();
    this.getTypes();
  }
}

