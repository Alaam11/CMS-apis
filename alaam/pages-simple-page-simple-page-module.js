(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-simple-page-simple-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simple-page/simple-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simple-page/simple-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Hello card'\">\r\n      <p>\r\n        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r\n        enim ad minim veniam, quis nostrud exercitation ullamco laboris\r\n        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n        in reprehenderit in voluptate velit esse cillum dolore eu fugiat\r\n        nulla pariatur. Excepteur sint occaecat cupidatat non proident,\r\n        sunt in culpa qui officia deserunt mollit anim id est laborum.\"\r\n      </p>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/simple-page/simple-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SimplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function() { return SimplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/pages/simple-page/simple-page.component.ts");




var routes = [
    {
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"],
        data: {
            breadcrumb: 'Sample Page',
            icon: 'icofont icofont-file-document bg-c-pink',
            breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sample Page',
            status: true
        }
    }
];
var SimplePageRoutingModule = /** @class */ (function () {
    function SimplePageRoutingModule() {
    }
    SimplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SimplePageRoutingModule);
    return SimplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/simple-page/simple-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbXBsZS1wYWdlL3NpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/simple-page/simple-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function() { return SimplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimplePageComponent = /** @class */ (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
    };
    SimplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/simple-page/simple-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-page.component.scss */ "./src/app/pages/simple-page/simple-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimplePageComponent);
    return SimplePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/simple-page/simple-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page-routing.module */ "./src/app/pages/simple-page/simple-page-routing.module.ts");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/pages/simple-page/simple-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var SimplePageModule = /** @class */ (function () {
    function SimplePageModule() {
    }
    SimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimplePageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_4__["SimplePageComponent"]]
        })
    ], SimplePageModule);
    return SimplePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-simple-page-simple-page-module.js.map