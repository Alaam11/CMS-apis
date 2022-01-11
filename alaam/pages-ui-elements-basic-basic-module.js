(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-elements-basic-basic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/basic/basic.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/basic/basic.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/pages/ui-elements/basic/basic-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ui-elements/basic/basic-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function() { return BasicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'button',
                loadChildren: function () { return __webpack_require__.e(/*! import() | button-button-module */ "button-button-module").then(__webpack_require__.bind(null, /*! ./button/button.module */ "./src/app/pages/ui-elements/basic/button/button.module.ts")).then(function (m) { return m.ButtonModule; }); }
            }, {
                path: 'typography',
                loadChildren: function () { return __webpack_require__.e(/*! import() | typography-typography-module */ "typography-typography-module").then(__webpack_require__.bind(null, /*! ./typography/typography.module */ "./src/app/pages/ui-elements/basic/typography/typography.module.ts")).then(function (m) { return m.TypographyModule; }); }
            }
        ]
    }
];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-elements/basic/basic.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui-elements/basic/basic.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL2Jhc2ljL2Jhc2ljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/ui-elements/basic/basic.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-elements/basic/basic.component.ts ***!
  \************************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/basic/basic.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic.component.scss */ "./src/app/pages/ui-elements/basic/basic.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-elements/basic/basic.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui-elements/basic/basic.module.ts ***!
  \*********************************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-routing.module */ "./src/app/pages/ui-elements/basic/basic-routing.module.ts");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic.component */ "./src/app/pages/ui-elements/basic/basic.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"]]
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ui-elements-basic-basic-module.js.map