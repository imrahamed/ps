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
    analytic: string = 'Overall Status';
    products: IProduct[];
    fillings: IProduct[];
    errorMessage: string;
    private sub: Subscription;
    overAll: boolean = false;
    fill: boolean = false;
    colname:string;
    pro:IProduct;
    

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }
     togglefull(): void {
        this.overAll = !this.overAll;
        this.fill=false;
    }
    togglefill(): void {
        this.fill = !this.fill;
        this.overAll=false;
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getStatus(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getFilling(colCode);
        });
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getProduct(colCode);
        });
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getStatus(colCode: number) {
        this._productService.getStatus(colCode).subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any>error);
            
    }
    getFilling(colCode: number){
        this._productService.getFilling(colCode).subscribe(
            fillings => this.fillings = fillings, 
            error => this.errorMessage = <any>error);
            
    }
     getProduct(colCode: number){
        this._productService.getProduct(colCode).subscribe(
            pro => this.pro = pro, 
            error => this.errorMessage = <any>error);
            console.log(this.pro)
    }

    onBack(): void {
        this._router.navigate(['/arts']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
