import { Component, OnInit }  from '@angular/core';

import {EProduct } from './engineering';
import { EngineeringService } from './engineering.service';

@Component({
    templateUrl: 'app/engineering/engineering-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class EngineeringListComponent implements OnInit {
    pageTitle: string = 'Colleges List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products:EProduct[];

    constructor(private _productService: EngineeringService) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
