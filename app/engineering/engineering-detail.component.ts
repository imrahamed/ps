import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { EProduct } from './engineering';
import { EngineeringService } from './engineering.service';

@Component({
    templateUrl: 'app/engineering/engineering-detail.component.html'
})
export class EngineeringDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'College Detail';
    product: EProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: EngineeringService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let colCode = +params['colCode'];
                this.getProduct(colCode);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(colCode: number) {
        this._productService.getProduct(colCode).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/engineering']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
