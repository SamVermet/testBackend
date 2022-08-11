import {Component, OnInit} from '@angular/core';
import {Products} from "./pages/productgroups/products";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-app';



  ngOnInit() {

  }


}

