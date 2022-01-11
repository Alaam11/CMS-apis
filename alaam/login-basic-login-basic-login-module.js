(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-basic-login-basic-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/basic-login/basic-login.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/basic-login/basic-login.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login p-fixed d-flex text-center bg-primary1 common-img-bg1\">\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n            \r\n            <div class=\"auth-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                  <img src=\"assets/images/auth/allam.png\" alt=\"Allam\">\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"txt-primary text-center\">User Login </h3>\r\n                   <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n                </div>\r\n              </div>\r\n              <hr class=\" m-b-30\">\r\n              \r\n              <div class=\"group\">\r\n\r\n                <div class=\"input-group input-tr-br-radius\">\r\n\r\n                   <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"Email\" />\r\n                  <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-user-alt-7\"></i></span>\r\n\r\n                   <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"f.email.errors.email\">Invalid email id</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"group\">\r\n                  <div class=\"input-group input-tr-br-radius\">\r\n                   <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-lock\"></i></span>\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-sm-6 col-xs-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6 col-xs-12 forgot-phone text-right\">\r\n\r\n                  <a [routerLink]=\"['/authentication/forgotpassword']\" class=\"text-right f-w-600 text-inverse \"> Forgot Your Password?</a>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button [disabled]=\"loading\" class=\"btn allam-btn-green btn-md btn-block waves-effect text-center text-white m-b-10\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Login\r\n                </button>\r\n                \r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-md-12\">\r\n                  <p class=\"text-inverse text-center m-b-0\">Don't have an account? \r\n                  <a [routerLink]=\"['/authentication/registration']\" class=\"text-right f-w-600 text-warning\"> Sign Up</a></p>\r\n\r\n                  <!--<p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>-->\r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/login/basic-login/basic-login-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/login/basic-login/basic-login-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BasicLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginRoutingModule", function() { return BasicLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/pages/auth/login/basic-login/basic-login.component.ts");




var routes = [
    {
        path: '',
        component: _basic_login_component__WEBPACK_IMPORTED_MODULE_3__["BasicLoginComponent"],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = /** @class */ (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/basic-login/basic-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/login/basic-login/basic-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginComponent", function() { return BasicLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");





/*@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})*/
var BasicLoginComponent = /** @class */ (function () {
    function BasicLoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            //debugger;
            this.loginCUser = this.authenticationService.currentUserValue;
            this.loginCUser = JSON.parse(this.loginCUser);
            this.curr_role_id = this.loginCUser['user']['0']['role_id'];
            if (this.curr_role_id == 1) {
                this.router.navigate(['dashboard']); //super admin
            }
            else if (this.curr_role_id == 2) {
                this.router.navigate(['category']); //admin
            }
            else if (this.curr_role_id == 3) {
                this.router.navigate(['referendum']); //Advertiser
            }
            else if (this.curr_role_id == 4) {
                this.router.navigate(['study-exam']); //User
            }
            else if (this.curr_role_id == 6) {
                this.router.navigate(['teacher-supervisor']); //teacher-supervisor
            }
            else if (this.curr_role_id == 9) {
                this.router.navigate(['broadcasting']); //broadcaster
            }
            else {
                this.router.navigate(['/']); //Advertiser
            }
        }
    }
    BasicLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(BasicLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    BasicLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .subscribe(function (data) {
            if (data) {
                _this.loginUser = _this.authenticationService.currentUserValue;
                var user_role_id = _this.loginUser.user[0].role_id;
                if (user_role_id == 1) {
                    _this.router.navigate(['dashboard'])
                        .then(function () {
                        window.location.reload();
                    });
                    //super admin
                }
                else if (user_role_id == 2) {
                    _this.router.navigate(['category'])
                        .then(function () {
                        window.location.reload();
                    }); //admin
                }
                else if (user_role_id == 3) {
                    _this.router.navigate(['referendum'])
                        .then(function () {
                        window.location.reload();
                    }); //Advertiser
                }
                else if (user_role_id == 4) {
                    _this.router.navigate(['study-exam'])
                        .then(function () {
                        window.location.reload();
                    });
                    //Teacher
                }
                else if (user_role_id == 6) {
                    _this.router.navigate(['teacher-supervisor'])
                        .then(function () {
                        window.location.reload();
                    });
                    //Teacher supervisor
                }
                else if (user_role_id == 9) {
                    _this.router.navigate(['broadcasting'])
                        .then(function () {
                        window.location.reload();
                    });
                    //Broadcaster
                }
                else {
                    _this.router.navigate(['/']); //Advertiser
                }
            }
            else {
                _this.error = 'Email Id  or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    BasicLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    BasicLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/basic-login/basic-login.component.html")).default }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/basic-login/basic-login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/login/basic-login/basic-login.module.ts ***!
  \********************************************************************/
/*! exports provided: BasicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/pages/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-login-routing.module */ "./src/app/pages/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var BasicLoginModule = /** @class */ (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicLoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_basic_login_component__WEBPACK_IMPORTED_MODULE_3__["BasicLoginComponent"]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-basic-login-basic-login-module.js.map