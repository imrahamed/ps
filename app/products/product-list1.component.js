"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product1_service_1 = require("./product1.service");
var ProductList1Component = (function () {
    function ProductList1Component(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Colleges List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ProductList1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductList1Component.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    return ProductList1Component;
}());
ProductList1Component = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-list1.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product1_service_1.ProductService1])
], ProductList1Component);
exports.ProductList1Component = ProductList1Component;
//# sourceMappingURL=product-list1.component.js.map