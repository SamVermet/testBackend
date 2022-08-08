import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Products} from "./products";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getDrinks(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/products/drink`);
  }

  public getSnacks(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/products/snack`);
  }

  public addProducts(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiServerUrl}/products`, product);
  }

  public updateProducts(product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiServerUrl}/products`, product);
  }

  public deleteProducts(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/${productId}`);
  }
}
