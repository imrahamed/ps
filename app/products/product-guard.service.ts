import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let colCode = +route.url[1].path;
        if (isNaN(colCode) || colCode < 1) {
            alert('Invalid product Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
