import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';

const smallTextUrl =
  'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const bigTextUrl =
  'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

export type IEmployer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  description: string;
  limit: number;
};

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  constructor(private http: HttpClient) {}

  employers: IEmployer[] = [];

  getAll(): Observable<IEmployer[]> {
    return this.http
      .get<IEmployer[]>(smallTextUrl, {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(
        delay(200),
        retry(2),
        tap((employers) => (this.employers = employers))
      );
  }
}
