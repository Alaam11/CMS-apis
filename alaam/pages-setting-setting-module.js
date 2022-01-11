(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Settings </h3>\r\n     </div></div>\r\n     <hr />\r\n\r\n   <div class=\"card \">\r\n    <div class=\"row justify-content-md-center\">\r\n      <div class=\"col-sm-6 col-sm-6 col-xs-12\">\r\n     <form class=\"md-float-material\" [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">  \r\n            <div class=\"row\" >\r\n              <div class=\"card-block col-md-12 pull-left\">\r\n                <h3>Change Password</h3>\r\n              </div>\r\n            \r\n              <div class=\"col-md-12\">\r\n                <div class=\"group m-b-20\">\r\n                    <div class=\"input-group input-tr-br-radius\">\r\n                      <input type=\"password\" class=\"form-control\" placeholder=\"New password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">This field is required.</div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n           \r\n              <div class=\"col-md-12\">\r\n                <div class=\"group m-b-20\">\r\n                  <div class=\"input-group input-tr-br-radius\">\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"conf_password\" [ngClass]=\"{ 'is-invalid': submitted && f.conf_password.errors }\">\r\n                    <div *ngIf=\"submitted && f.conf_password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.conf_password.errors.required\">This field is required.</div>\r\n                        <div *ngIf=\"f.conf_password.errors.confirmedValidator\">Password and Confirm Password must be match.</div>\r\n                    </div>\r\n                   \r\n                  </div>\r\n                </div>\r\n              </div>\r\n           \r\n                      \r\n           \r\n              <div class=\"col-md-12\">\r\n              \r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right m-b-20\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Save\r\n                  </button>\r\n                  \r\n              \r\n           </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/setting/setting-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/setting/setting-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/pages/setting/setting.component.ts");




var routes = [
    {
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"],
        data: {
            title: 'Thank You'
        }
    }
];
var SettingRoutingModule = /** @class */ (function () {
    function SettingRoutingModule() {
    }
    SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingRoutingModule);
    return SettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/setting/setting.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/setting/setting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/setting/setting.component.ts ***!
  \****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _confirmed_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirmed.validator */ "./src/app/confirmed.validator.ts");







var SettingComponent = /** @class */ (function () {
    function SettingComponent(userService, route, router, fb, alertService, authenticationService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.success = '';
        this.resetUser = {};
        this.formFlag = true;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.message_title = '';
        this.message_body = '';
        this.resetForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conf_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmedValidator"])('password', 'conf_password')
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.id = this.logUser['user'][0]['id'];
    };
    Object.defineProperty(SettingComponent.prototype, "f", {
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    SettingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.resetUser.password = this.resetForm.value.password;
        this.resetUser.id = this.id;
        this.userService.changePassword(this.resetUser)
            .subscribe(function (data) {
            if (data['status']) {
                _this.alertService.pop('success', 'Password changed successfully');
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', data['msg']);
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.scss */ "./src/app/pages/setting/setting.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/pages/setting/setting.component.ts");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/pages/setting/setting-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module.js.map