(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thanks-thanks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/thanks/thanks.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/thanks/thanks.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body text-center\">\r\n\r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\" txt-primary\">Thank You</h3>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-20\">\r\n              \r\n              \r\n              <div class=\"row m-b-25 \">\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                 \r\n                   Your request has been submitted. Please check your mail in sometime to get the login link.\r\n                \r\n                </div>\r\n                \r\n              </div>\r\n                           \r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/thanks/thanks-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/thanks/thanks-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ThanksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksRoutingModule", function() { return ThanksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _thanks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks.component */ "./src/app/pages/auth/thanks/thanks.component.ts");




var routes = [
    {
        path: '',
        component: _thanks_component__WEBPACK_IMPORTED_MODULE_3__["ThanksComponent"],
        data: {
            title: 'Thank You'
        }
    }
];
var ThanksRoutingModule = /** @class */ (function () {
    function ThanksRoutingModule() {
    }
    ThanksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThanksRoutingModule);
    return ThanksRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/thanks/thanks.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/thanks/thanks.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdGhhbmtzL3RoYW5rcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/auth/thanks/thanks.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/thanks/thanks.component.ts ***!
  \*******************************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThanksComponent = /** @class */ (function () {
    function ThanksComponent() {
    }
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-forgot',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thanks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/thanks/thanks.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thanks.component.scss */ "./src/app/pages/auth/thanks/thanks.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/thanks/thanks.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/thanks/thanks.module.ts ***!
  \****************************************************/
/*! exports provided: ThanksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksModule", function() { return ThanksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thanks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks.component */ "./src/app/pages/auth/thanks/thanks.component.ts");
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thanks-routing.module */ "./src/app/pages/auth/thanks/thanks-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var ThanksModule = /** @class */ (function () {
    function ThanksModule() {
    }
    ThanksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _thanks_routing_module__WEBPACK_IMPORTED_MODULE_4__["ThanksRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_thanks_component__WEBPACK_IMPORTED_MODULE_3__["ThanksComponent"]]
        })
    ], ThanksModule);
    return ThanksModule;
}());



/***/ })

}]);
//# sourceMappingURL=thanks-thanks-module.js.map