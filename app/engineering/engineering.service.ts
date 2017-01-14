import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { EProduct } from './engineering';

@Injectable()
export class EngineeringService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<EProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <EProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(colCode: number): Observable<EProduct> {
        return this.getProducts()
            .map((products: EProduct[]) => products.find(p => p.colCode === colCode));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
