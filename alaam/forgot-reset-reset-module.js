(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-reset-reset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/reset/reset.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/reset/reset.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n     <!--  <div class=\"col-sm-12\"> -->\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\r\n            \r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Reset your password</h3>\r\n                   <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n                    <div *ngIf=\"success\" class=\"alert alert-success mt-3 mb-0\">{{success}}</div>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-30\">\r\n              \r\n              <div *ngIf=\"formFlag==true\">\r\n                <div class=\"row\" >\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"group\">\r\n                        <div class=\"input-group input-tr-br-radius\">\r\n                          <input type=\"password\" class=\"form-control\" placeholder=\"New password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">This field is required.</div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"group\">\r\n                      <div class=\"input-group input-tr-br-radius\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"conf_password\" [ngClass]=\"{ 'is-invalid': submitted && f.conf_password.errors }\">\r\n                        <div *ngIf=\"submitted && f.conf_password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.conf_password.errors.required\">This field is required.</div>\r\n                            <div *ngIf=\"f.conf_password.errors.confirmedValidator\">Password and Confirm Password must be match.</div>\r\n                        </div>\r\n                       \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-20\">\r\n                  <div class=\"col-md-12\">\r\n                    <button [disabled]=\"loading\" class=\"btn allam-btn-green btn-md btn-block waves-effect text-center text-white m-b-2\">\r\n                      <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                      SUBMIT\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <p class=\"text-inverse text-center m-b-0\">Already have an account?\r\n\r\n                   <a [routerLink]=\"['/authentication/login']\" class=\"text-right f-w-600 text-warning\"> Login</a>\r\n\r\n                  </p>\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n   <!--    </div> -->\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of -->\r\n</section>");

/***/ }),

/***/ "./src/app/pages/auth/forgot/reset/reset-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth/forgot/reset/reset-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetRoutingModule", function() { return ResetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.component */ "./src/app/pages/auth/forgot/reset/reset.component.ts");




var routes = [
    {
        path: '',
        component: _reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"],
        data: {
            title: 'Thank You'
        }
    }
];
var ResetRoutingModule = /** @class */ (function () {
    function ResetRoutingModule() {
    }
    ResetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ResetRoutingModule);
    return ResetRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot/reset/reset.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/forgot/reset/reset.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290L3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/forgot/reset/reset.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/forgot/reset/reset.component.ts ***!
  \************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _confirmed_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../confirmed.validator */ "./src/app/confirmed.validator.ts");






var ResetComponent = /** @class */ (function () {
    function ResetComponent(formBuilder, route, router, activeAouter, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.activeAouter = activeAouter;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.resetUser = {};
        this.formFlag = true;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['userId'];
        this.id = atob(this.id); //decode base64
        //this.reset(this.id);
        this.resetForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conf_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_5__["ConfirmedValidator"])('password', 'conf_password')
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ResetComponent.prototype, "f", {
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ResetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.resetUser.password = this.resetForm.value.password;
        this.resetUser.id = this.id;
        this.userService.resetPassword(this.resetUser)
            .subscribe(function (data) {
            if (data['status']) {
                _this.success = data['msg'];
                _this.error = '';
                _this.loading = false;
                _this.formFlag = false;
            }
            else {
                _this.error = data['msg'];
                _this.loading = false;
                _this.formFlag = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    ResetComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot/reset/reset.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.component.scss */ "./src/app/pages/auth/forgot/reset/reset.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot/reset/reset.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/forgot/reset/reset.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetModule", function() { return ResetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.component */ "./src/app/pages/auth/forgot/reset/reset.component.ts");
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-routing.module */ "./src/app/pages/auth/forgot/reset/reset-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ResetModule = /** @class */ (function () {
    function ResetModule() {
    }
    ResetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reset_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_reset_component__WEBPACK_IMPORTED_MODULE_3__["ResetComponent"]]
        })
    ], ResetModule);
    return ResetModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-reset-reset-module.js.map