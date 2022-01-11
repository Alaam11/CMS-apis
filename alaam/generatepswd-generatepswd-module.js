(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generatepswd-generatepswd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/generatepswd/generatepswd.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/generatepswd/generatepswd.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body text-center\">\r\n\r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <a [routerLink]=\"['/authentication/login']\">\r\n                    <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\" txt-primary\">{{message_title}}</h3>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-20\">\r\n              \r\n              <div class=\"row m-b-25 \">\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                     <h5 class=\" txt-primary email-verified\">{{message_body}}</h5>\r\n                </div>\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                  <form class=\"md-float-material\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div *ngIf=\"formFlag==true\">\r\n                        <div class=\"row\" >\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"group\">\r\n                                <div class=\"input-group input-tr-br-radius\">\r\n                                  <input type=\"password\" class=\"form-control\" placeholder=\"your password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.password.errors.required\">This field is required.</div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"group\">\r\n                              <div class=\"input-group input-tr-br-radius\">\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"conf_password\" [ngClass]=\"{ 'is-invalid': submitted && f.conf_password.errors }\">\r\n                                <div *ngIf=\"submitted && f.conf_password.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.conf_password.errors.required\">This field is required.</div>\r\n                                    <div *ngIf=\"f.conf_password.errors.confirmedValidator\">Password and Confirm Password must be match.</div>\r\n                                </div>\r\n                               \r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row m-t-20\">\r\n                          <div class=\"col-md-12\">\r\n                            <button [disabled]=\"loading\" class=\"btn allam-btn-green btn-md btn-block waves-effect text-center text-white m-b-2\">\r\n                              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                              SUBMIT\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </form>\r\n                  <hr>\r\n                   <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <p class=\"text-inverse text-center m-b-0\">Already verified?\r\n\r\n                             <a [routerLink]=\"['/authentication/login']\" class=\"text-right f-w-600 text-warning\"> Login</a>\r\n\r\n                            </p>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                </div>\r\n                \r\n              </div>\r\n                           \r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/generatepswd/generatepswd-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/generatepswd/generatepswd-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GeneratepswdRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratepswdRoutingModule", function() { return GeneratepswdRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generatepswd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatepswd.component */ "./src/app/pages/auth/generatepswd/generatepswd.component.ts");




var routes = [
    {
        path: '',
        component: _generatepswd_component__WEBPACK_IMPORTED_MODULE_3__["GeneratepswdComponent"],
        data: {
            title: 'Thank You'
        }
    }
];
var GeneratepswdRoutingModule = /** @class */ (function () {
    function GeneratepswdRoutingModule() {
    }
    GeneratepswdRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GeneratepswdRoutingModule);
    return GeneratepswdRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/generatepswd/generatepswd.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/generatepswd/generatepswd.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZ2VuZXJhdGVwc3dkL2dlbmVyYXRlcHN3ZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/auth/generatepswd/generatepswd.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/generatepswd/generatepswd.component.ts ***!
  \*******************************************************************/
/*! exports provided: GeneratepswdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratepswdComponent", function() { return GeneratepswdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _confirmed_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../confirmed.validator */ "./src/app/confirmed.validator.ts");






var GeneratepswdComponent = /** @class */ (function () {
    function GeneratepswdComponent(userService, route, router, fb) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.resetUser = {};
        this.formFlag = false;
    }
    GeneratepswdComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['userId'];
        this.id = atob(this.id); //decode base64
        this.verify(this.id);
        this.message_title = '';
        this.message_body = '';
        this.resetForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conf_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_5__["ConfirmedValidator"])('password', 'conf_password')
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    GeneratepswdComponent.prototype.verify = function (id) {
        var _this = this;
        this.userService.verifyCheckEmail(this.id)
            .subscribe(function (data) {
            if (data['status']) {
                _this.message_title = 'Congratulations';
                _this.message_body = 'Email verified..Please generate your password.';
                _this.formFlag = true;
            }
            else {
                _this.message_title = 'Oops';
                _this.message_body = 'Your email id is already verified or expired.';
                _this.formFlag = false;
            }
        }, function (error) {
            _this.message_title = 'Oops';
            _this.message_body = 'Something went wrong. please try again later';
            _this.formFlag = false;
        });
    };
    Object.defineProperty(GeneratepswdComponent.prototype, "f", {
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    GeneratepswdComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.resetUser.password = this.resetForm.value.password;
        this.resetUser.id = this.id;
        this.userService.generatePassword(this.resetUser)
            .subscribe(function (data) {
            if (data['status']) {
                _this.success = "Password generated successfully";
                _this.message_body = 'Password generated successfully';
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
    GeneratepswdComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    GeneratepswdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generatepswd',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generatepswd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/generatepswd/generatepswd.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./generatepswd.component.scss */ "./src/app/pages/auth/generatepswd/generatepswd.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], GeneratepswdComponent);
    return GeneratepswdComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/generatepswd/generatepswd.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/generatepswd/generatepswd.module.ts ***!
  \****************************************************************/
/*! exports provided: GeneratepswdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratepswdModule", function() { return GeneratepswdModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generatepswd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatepswd.component */ "./src/app/pages/auth/generatepswd/generatepswd.component.ts");
/* harmony import */ var _generatepswd_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generatepswd-routing.module */ "./src/app/pages/auth/generatepswd/generatepswd-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var GeneratepswdModule = /** @class */ (function () {
    function GeneratepswdModule() {
    }
    GeneratepswdModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generatepswd_routing_module__WEBPACK_IMPORTED_MODULE_4__["GeneratepswdRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_generatepswd_component__WEBPACK_IMPORTED_MODULE_3__["GeneratepswdComponent"]]
        })
    ], GeneratepswdModule);
    return GeneratepswdModule;
}());



/***/ })

}]);
//# sourceMappingURL=generatepswd-generatepswd-module.js.map