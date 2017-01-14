import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Status';
    products: IProduct[];
    errorMessage: string;
    private sub: Subscription;
    colname:string;
    

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getStatus(colCode);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getStatus(colCode: number) {
        this._productService.getStatus(colCode).subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any>error);
            console.log(this.products)
            
    }

    onBack(): void {
        this._router.navigate(['/arts']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
