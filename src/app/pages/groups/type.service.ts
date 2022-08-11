import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Types} from "./types";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }


  public getTypes(): Observable<Types[]> {
    return this.http.get<Types[]>(`${this.apiServerUrl}/types/`);
  }

  public getType(id: null | string): Observable<Types> {
    return this.http.get<Types>(`${this.apiServerUrl}/types/${id}`);
  }

  public addTypes(type: Types): Observable<Types> {
    return this.http.post<Types>(`${this.apiServerUrl}/types`, type);
  }

  public editType(id: null | string, type: Types): Observable<Types> {
    return this.http.put<Types>(`${this.apiServerUrl}/types/${id}`, type);
  }

  public deleteTypes(id: string): Observable<Types> {
    return this.http.delete<Types>(`${this.apiServerUrl}/types/${id}`);
  }

}
