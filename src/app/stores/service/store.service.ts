import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Info} from '../models/info';
import {AppUrl} from '../../urls/app-url';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ProductsStore} from '../models/products-store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) {
  }

  getProductsInStore(): Observable<ProductsStore[] | Info> {
    return this.http.get<ProductsStore[] | Info>(`${AppUrl.BASE_URL}Product/In/Stock`)
      .pipe(map(res => {
          if ('info' in res) {
            return res;
          } else {
            return res;
          }
        }),
        catchError(this.handleError));
  }

  editAmountsInStore(productId: string, amountInMagazine: number, amountMax: number): Observable<Info> {
    return this.http.post<Info>(`${AppUrl.BASE_URL}Product/In/Stock/Update/Quantity`,
      {
        productId,
        amountInMagazine,
        amountMax
      })
      .pipe(map(res => {
          return res;
        }),
        catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
