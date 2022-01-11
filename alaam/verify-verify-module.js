(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify/verify.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify/verify.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body text-center\">\r\n\r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\" txt-primary\">{{message_title}}</h3>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-20\">\r\n              \r\n              \r\n              <div class=\"row m-b-25 \">\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                   {{message_body}}\r\n                </div>\r\n                \r\n              </div>\r\n                           \r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/verify/verify-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/verify/verify-routing.module.ts ***!
  \************************************************************/
/*! exports provided: VerifyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyRoutingModule", function() { return VerifyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.component */ "./src/app/pages/auth/verify/verify.component.ts");




var routes = [
    {
        path: '',
        component: _verify_component__WEBPACK_IMPORTED_MODULE_3__["VerifyComponent"],
        data: {
            title: 'Thank You'
        }
    }
];
var VerifyRoutingModule = /** @class */ (function () {
    function VerifyRoutingModule() {
    }
    VerifyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VerifyRoutingModule);
    return VerifyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/verify/verify.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/verify/verify.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/auth/verify/verify.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/verify/verify.component.ts ***!
  \*******************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(userService, activeAouter, router) {
        this.userService = userService;
        this.activeAouter = activeAouter;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['userId'];
        this.id = atob(this.id); //decode base64
        this.verify(this.id);
        this.message_title = '';
        this.message_body = '';
    };
    VerifyComponent.prototype.verify = function (id) {
        var _this = this;
        this.userService.verifyEmail(this.id)
            .subscribe(function (data) {
            if (data['status']) {
                _this.message_title = 'Congratulations';
                _this.message_body = 'You have successfully verified the email address.';
            }
            else {
                _this.message_title = 'Oops';
                _this.message_body = 'Your email id is already verified or expired.';
            }
        }, function (error) {
            _this.message_title = 'Oops';
            _this.message_body = 'Something went wrong. please try again later';
        });
    };
    VerifyComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify/verify.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify.component.scss */ "./src/app/pages/auth/verify/verify.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/verify/verify.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/verify/verify.module.ts ***!
  \****************************************************/
/*! exports provided: VerifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyModule", function() { return VerifyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _verify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.component */ "./src/app/pages/auth/verify/verify.component.ts");
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-routing.module */ "./src/app/pages/auth/verify/verify-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var VerifyModule = /** @class */ (function () {
    function VerifyModule() {
    }
    VerifyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _verify_routing_module__WEBPACK_IMPORTED_MODULE_4__["VerifyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_verify_component__WEBPACK_IMPORTED_MODULE_3__["VerifyComponent"]]
        })
    ], VerifyModule);
    return VerifyModule;
}());



/***/ })

}]);
//# sourceMappingURL=verify-verify-module.js.map