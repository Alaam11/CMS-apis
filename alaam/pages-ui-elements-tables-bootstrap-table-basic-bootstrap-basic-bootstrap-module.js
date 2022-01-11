(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic table card start -->\r\n    <app-card [title]=\"'Basic table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table</code> inside table element</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Basic table card end -->\r\n    <!-- Inverse table card start -->\r\n    <app-card [title]=\"'Inverse table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-inverse</code> inside table element</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-inverse\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Inverse table card end -->\r\n    <!-- Hover table card start -->\r\n    <app-card [title]=\"'Hover table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">use class <code>table-hover</code> inside table element</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Hover table card end -->\r\n    <!-- Contextual classes table starts -->\r\n    <app-card [title]=\"'Contextual classes'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">For Make row Contextual add Contextual class like <code>.table-success</code> in <code> tr tag</code> and For cell add Contextual class in <code> td or th tag</code> . </span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr class=\"table-active\">\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr class=\"table-success\">\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">4</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"table-warning\">\r\n            <th scope=\"row\">5</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">6</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"table-danger\">\r\n            <th scope=\"row\">7</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">8</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"table-info\">\r\n            <th scope=\"row\">9</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Contextual classes table ends -->\r\n    <!-- Background Utilities table start -->\r\n    <app-card [title]=\"'Background Utilities'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\">\r\n      <span class=\"code-header\">Regular table background variants are not available with the inverse table, however, you may use <code>text or background utilities</code> to achieve similar styles.</span>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-inverse\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Username</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr class=\"bg-primary\">\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr class=\"bg-success\">\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">4</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"bg-warning\">\r\n            <th scope=\"row\">5</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">6</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"bg-danger\">\r\n            <th scope=\"row\">7</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">8</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          <tr class=\"bg-info\">\r\n            <th scope=\"row\">9</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Background Utilities table end -->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: BasicBootstrapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBootstrapRoutingModule", function() { return BasicBootstrapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-bootstrap.component */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.ts");




var routes = [
    {
        path: '',
        component: _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_3__["BasicBootstrapComponent"],
        data: {
            breadcrumb: 'Basic Table',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
            status: true
        }
    }
];
var BasicBootstrapRoutingModule = /** @class */ (function () {
    function BasicBootstrapRoutingModule() {
    }
    BasicBootstrapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicBootstrapRoutingModule);
    return BasicBootstrapRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL3RhYmxlcy9ib290c3RyYXAtdGFibGUvYmFzaWMtYm9vdHN0cmFwL2Jhc2ljLWJvb3RzdHJhcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BasicBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBootstrapComponent", function() { return BasicBootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicBootstrapComponent = /** @class */ (function () {
    function BasicBootstrapComponent() {
    }
    BasicBootstrapComponent.prototype.ngOnInit = function () {
    };
    BasicBootstrapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-bootstrap',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-bootstrap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-bootstrap.component.scss */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicBootstrapComponent);
    return BasicBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: BasicBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBootstrapModule", function() { return BasicBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-bootstrap-routing.module */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap-routing.module.ts");
/* harmony import */ var _basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-bootstrap.component */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var BasicBootstrapModule = /** @class */ (function () {
    function BasicBootstrapModule() {
    }
    BasicBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicBootstrapRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_bootstrap_component__WEBPACK_IMPORTED_MODULE_4__["BasicBootstrapComponent"]]
        })
    ], BasicBootstrapModule);
    return BasicBootstrapModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module.js.map