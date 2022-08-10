import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Types} from "./types";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getTypes(): Observable<Types[]> {
    console.log("getTypes");
    return this.http.get<Types[]>(`${this.apiServerUrl}/types`);
  }

  public addTypes(type: Types): Observable<Types> {
    return this.http.post<Types>(`${this.apiServerUrl}/types`, type);
  }

  public updateType(type: Types): Observable<Types> {
    return this.http.put<Types>(`${this.apiServerUrl}/types`, type);
  }

  public deleteTypes(typeId: string): Observable<Types> {
    console.log("delTypes");
    return this.http.delete<Types>(`${this.apiServerUrl}/types/${typeId}`);
  }

}
