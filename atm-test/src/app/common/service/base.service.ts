import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface HeaderPairs {
  key: string,
  value: string
}

@Injectable()
export class BaseService {
  constructor(protected http: HttpClient) {}

  private getUrlApi() {
    return 'api'; // should be config in environment file.
  }

  protected getData(path?: string): Observable<any> {
    let options = this.getHeaders();
    return this.http.get(`${this.getUrlApi()}/${path}`, options).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => this.getError(err))
    );
  }

  protected postData(
    path?: string,
    body?: any,
    headersPairs?: HeaderPairs[]
  ): Observable<any> {
    let options = this.getHeaders(headersPairs);
    return this.http.post(`${this.getUrlApi()}/${path}`, body, options).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => this.getError(err))
    );
  }

  protected putData(
    path?: string,
    body?: any,
    headersPairs?: HeaderPairs[]
  ): Observable<any> {
    let options = this.getHeaders(headersPairs);
    return this.http.put(`${this.getUrlApi()}/${path}`, body, options).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => this.getError(err))
    );
  }

  protected delete(path?: string, headersPairs?: HeaderPairs[]) {
    let options = this.getHeaders(headersPairs);
    return this.http.delete(`${this.getUrlApi()}/${path}`, options).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => this.getError(err))
    );
  }

  // Should be defined interface for handling error. I didn't have enough time for handling this.
  getError(err?: any) {
    if (err.error.code === 102 || err.error.code === 107) {
      localStorage.removeItem('token');
      location.reload();
    }

    return throwError({ http_status: err.status, errors: err.error });
  }

  private getHeaders(headersPairs?: HeaderPairs[]) {
    const httpOptions = {
      headers: new HttpHeaders(),
    };

    httpOptions.headers = httpOptions.headers.set(
      'Content-Type',
      'application/json'
    );

    if (headersPairs) {
      headersPairs.forEach((element: any) => {
        httpOptions.headers = httpOptions.headers.set(
          element.key,
          element.value
        );
      });
    }
    return httpOptions;
  }
}