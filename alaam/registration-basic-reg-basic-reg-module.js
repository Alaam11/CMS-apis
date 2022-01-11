(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-basic-reg-basic-reg-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <!-- starts -->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n     <!--  <div class=\"col-sm-12\"> -->\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\r\n            \r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign Up. It is fast and easy.</h3>\r\n                   <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-30\">\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <div class=\"group\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <select class=\"form-control\" formControlName=\"register_as\" [ngClass]=\"{ 'is-invalid': submitted && f.register_as.errors }\" (change)=\"onChange($event.target.value)\">\r\n                        <option value=\"\">Register as</option>\r\n                        <option value=\"2\">Admin</option>\r\n                        <option value=\"3\">Advertiser</option>\r\n                      </select>\r\n\r\n                      <div *ngIf=\"submitted && f.register_as.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.register_as.errors.required\">Please select role.</div>\r\n                      </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                      <div class=\"input-group input-tr-br-radius\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n\r\n                         <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\">This field is requird.</div>\r\n                             <div *ngIf=\"f.email.errors.email\">Invalid email id</div>\r\n                              <div *ngIf=\"f.email.errors.isEmailExist\">Email already exists  </div>\r\n                         </div>\r\n\r\n                         \r\n                      </div>\r\n                     \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"{{nameLabel}}\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                      <div class=\"input-group input-tr-br-radius\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Mobile\" formControlName=\"mobile\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\">\r\n                        <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.mobile.errors.required\">This field is required.</div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\"> \r\n                  <div class=\"group\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <input type=\"text\" formControlName=\"website\" class=\"form-control\" placeholder=\"Website\">\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                      <div class=\"input-group input-tr-br-radius\">\r\n                        <input type=\"file\" class=\"form-control\" title=\"Comapny Logo\" (change)=\"uploadFile($event)\">\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <select class=\"form-control\" formControlName=\"country\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\r\n                        <option value=\"\">Country</option>\r\n                        <option value=\"UAE\">UAE</option>\r\n                        <option value=\"QATAR\">QATAR</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.country.errors.required\">This field is required.</div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                      <div class=\"input-group input-tr-br-radius\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.password.errors.required\">This field is required.</div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"conf_password\" [ngClass]=\"{ 'is-invalid': submitted && f.conf_password.errors }\">\r\n                      <div *ngIf=\"submitted && f.conf_password.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.conf_password.errors.required\">This field is required.</div>\r\n                          <div *ngIf=\"f.conf_password.errors.confirmedValidator\">Password and Confirm Password must be match.</div>\r\n                      </div>\r\n                     \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-20\">\r\n                <div class=\"col-md-12\">\r\n                  <button [disabled]=\"loading\" class=\"btn allam-btn-green btn-md btn-block waves-effect text-center text-white m-b-2\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    SUBMIT\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <p class=\"text-inverse text-center m-b-0\">Already have an account?\r\n\r\n                   <a [routerLink]=\"['/authentication/login']\" class=\"text-right f-w-600 text-warning\"> Login</a>\r\n\r\n                  </p>\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n   <!--    </div> -->\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of -->\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegRoutingModule", function() { return BasicRegRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts");




var routes = [
    {
        path: '',
        component: _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"],
        data: {
            title: 'Simple Registration'
        }
    }
];
var BasicRegRoutingModule = /** @class */ (function () {
    function BasicRegRoutingModule() {
    }
    BasicRegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicRegRoutingModule);
    return BasicRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0cmF0aW9uL2Jhc2ljLXJlZy9iYXNpYy1yZWcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegComponent", function() { return BasicRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _confirmed_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../confirmed.validator */ "./src/app/confirmed.validator.ts");






var BasicRegComponent = /** @class */ (function () {
    function BasicRegComponent(formBuilder, route, router, userService, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['dashboard']);
        }
    }
    BasicRegComponent.prototype.ngOnInit = function () {
        this.nameLabel = 'Company Name';
        this.regForm = this.formBuilder.group({
            register_as: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email], this.emailValidator.bind(this)],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            website: [''],
            user_avatar: [null],
            conf_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_5__["ConfirmedValidator"])('password', 'conf_password')
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(BasicRegComponent.prototype, "f", {
        get: function () { return this.regForm.controls; },
        enumerable: true,
        configurable: true
    });
    BasicRegComponent.prototype.emailValidator = function () {
        var _this = this;
        console.log(this.f.email.value);
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.userService.isEmaiIDExist(_this.f.email.value)
                    .subscribe(function (res) {
                    console.log(res['status']);
                    if (res['status'] == true) {
                        resolve({ 'isEmailExist': true });
                    }
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
        });
        return q;
    };
    BasicRegComponent.prototype.onChange = function (regAs) {
        if (regAs == 2) {
            this.nameLabel = 'Name';
        }
        else {
            this.nameLabel = 'Company Name';
        }
    };
    BasicRegComponent.prototype.uploadFile = function (event) {
        var file = event.target.files[0];
        this.regForm.patchValue({
            user_avatar: file
        });
        this.regForm.get('user_avatar').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            //this.preview = reader.result as string;
        };
        reader.readAsDataURL(file);
    };
    BasicRegComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.regForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.signup(this.regForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.router.navigate(['authentication/thanks']);
            }
            else {
                _this.error = 'Registration failed. try again';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    BasicRegComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    BasicRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-reg',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-reg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/registration/basic-reg/basic-reg.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-reg.component.scss */ "./src/app/pages/auth/registration/basic-reg/basic-reg.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], BasicRegComponent);
    return BasicRegComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/registration/basic-reg/basic-reg.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/registration/basic-reg/basic-reg.module.ts ***!
  \***********************************************************************/
/*! exports provided: BasicRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegModule", function() { return BasicRegModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-reg.component */ "./src/app/pages/auth/registration/basic-reg/basic-reg.component.ts");
/* harmony import */ var _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-reg-routing.module */ "./src/app/pages/auth/registration/basic-reg/basic-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var BasicRegModule = /** @class */ (function () {
    function BasicRegModule() {
    }
    BasicRegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicRegRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_basic_reg_component__WEBPACK_IMPORTED_MODULE_3__["BasicRegComponent"]]
        })
    ], BasicRegModule);
    return BasicRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=registration-basic-reg-basic-reg-module.js.map