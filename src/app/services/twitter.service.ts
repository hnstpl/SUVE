import { Observable, throwError } from "rxjs";
import { IHttpRequest } from "./../models/IHttpRequest";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TwitterService {
  constructor(public http: HttpClient) {}

  get<T>(url: string, options?: IHttpRequest): Observable<T> {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
