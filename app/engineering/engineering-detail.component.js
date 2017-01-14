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
var router_1 = require("@angular/router");
var engineering_service_1 = require("./engineering.service");
var EngineeringDetailComponent = (function () {
    function EngineeringDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'College Detail';
    }
    EngineeringDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var colCode = +params['colCode'];
            _this.getProduct(colCode);
        });
    };
    EngineeringDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EngineeringDetailComponent.prototype.getProduct = function (colCode) {
        var _this = this;
        this._productService.getProduct(colCode).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    EngineeringDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/engineering']);
    };
    EngineeringDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return EngineeringDetailComponent;
}());
EngineeringDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/engineering/engineering-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        engineering_service_1.EngineeringService])
], EngineeringDetailComponent);
exports.EngineeringDetailComponent = EngineeringDetailComponent;
//# sourceMappingURL=engineering-detail.component.js.map