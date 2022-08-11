import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Products} from "./pages/productgroups/products";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  // public getProductsByTypeId(typeId:string): Observable<Products[]> {
  //   return this.http.get<Products[]>(`${this.apiServerUrl}/products/${typeId}`);
  // }
  public getProductsByTypeId(typeId:null|string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiServerUrl}/products/${typeId}`);
  }

  public addProducts(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiServerUrl}/products`, product);
  }

  public updateProducts(product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiServerUrl}/products`, product);
  }

  public deleteProductsByTypeId(typeId: string): Observable<Products> {
    return this.http.delete<Products>(`${this.apiServerUrl}/products/${typeId}`);
  }
  public deleteProducts(productId: string): Observable<Products> {
    return this.http.delete<Products>(`${this.apiServerUrl}/products/delete/${productId}`);
  }

  getProductsById(id: string | null) : Observable<Products> {
    return this.http.get<Products>(`${this.apiServerUrl}/products/get/${id}`);
  }
}
