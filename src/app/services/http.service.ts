import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IHttpRequest } from "./../models/IHttpRequest";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
