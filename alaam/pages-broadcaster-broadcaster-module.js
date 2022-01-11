(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-broadcaster-broadcaster-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/add/add-broadcaster.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/add/add-broadcaster.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"txt-primary\">Add User </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n            <div class=\"group \">\r\n              <label>Register As</label>\r\n                  <select class=\"form-control\" disabled formControlName=\"register_as\" [ngClass]=\"{ 'is-invalid': submitted && f.register_as.errors }\">\r\n                      <option value=\"\">Register as</option>\r\n                      <option value=\"2\">Admin</option>\r\n                      <option value=\"4\">Teacher</option>\r\n                      <option value=\"6\">Teacher Supervisor</option>\r\n                      <option value=\"3\">Advertiser</option>\r\n                      <option value=\"9\" selected>Broadcaster</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.register_as.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.register_as.errors.required\">Please select role.</div>\r\n                    </div>\r\n              </div>\r\n           \r\n              <div class=\"group m-t-15\">\r\n                <label>First Name</label>\r\n                 <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"first_name\" [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\r\n                      <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.first_name.errors.required\">This field is required.</div>\r\n                      </div>\r\n               </div>\r\n               <div class=\"group m-t-15\">\r\n                <label>Last Name</label>\r\n                 <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"last_name\" [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\r\n                      <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.last_name.errors.required\">This field is required.</div>\r\n                      </div>\r\n               </div>\r\n          </div>\r\n\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             <div class=\"group\">\r\n                 <label>Email</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n\r\n                         <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\">This field is requird.</div>\r\n                             <div *ngIf=\"f.email.errors.email\">Invalid email id</div>\r\n                              <div *ngIf=\"f.email.errors.isEmailExist\">Email already exists  </div>\r\n                         </div>\r\n              </div>\r\n            <div class=\"group  m-t-15\">\r\n              <label>Mobile</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Mobile\" formControlName=\"mobile\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\">\r\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.mobile.errors.required\">This field is required.</div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"group m-t-15\">\r\n              <label>Country</label>\r\n                 <select class=\"form-control\" formControlName=\"country\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\r\n                        <option value=\"\">Country</option>\r\n                        <option *ngFor=\"let country of countryArr\" value=\"{{country.id}}\">{{country.name}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.country.errors.required\">This field is required.</div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row\">\r\n                      <div class=\"card-block col-sm-12 col-xs-12 col-md-12 \">          \r\n                        \r\n                        <div class=\"group \">\r\n                           <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                             <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                              Save\r\n                            </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n          \r\n          </div>\r\n\r\n          \r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/edit/edit-broadcaster.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/edit/edit-broadcaster.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"txt-primary\">Edit User </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n            <div class=\"group \">\r\n              <label>Register As</label>\r\n                  <!-- <select disabled=\"disabled\" class=\"form-control\" formControlName=\"register_as\" [ngClass]=\"{ 'is-invalid': submitted && f.register_as.errors }\">\r\n                      <option value=\"\">Register as</option>\r\n                      <option value=\"2\">Admin</option>\r\n                      <option value=\"4\">Teacher</option>\r\n                    </select> -->\r\n                    <input type=\"text\" [readonly]=\"true\" class=\"form-control\" formControlName=\"register_as\" [ngClass]=\"{ 'is-invalid': submitted && f.register_as.errors }\">\r\n                    <div *ngIf=\"submitted && f.register_as.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.register_as.errors.required\">Please select role.</div>\r\n                    </div>\r\n              </div>\r\n           \r\n              <div class=\"group m-t-15\">\r\n                <label>First Name</label>\r\n                 <input type=\"text\" placeholder=\"First Name\" class=\"form-control\" formControlName=\"first_name\" [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\r\n                      <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.first_name.errors.required\">This field is required.</div>\r\n                      </div>\r\n               </div>\r\n               <div class=\"group m-t-15\">\r\n                <label>Last Name</label>\r\n                 <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\" formControlName=\"last_name\" [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\r\n                      <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.last_name.errors.required\">This field is required.</div>\r\n                      </div>\r\n               </div>\r\n          </div>\r\n\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             <div class=\"group \">\r\n                 <label>Email</label>\r\n                  <input type=\"text\" [readonly]=\"true\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n\r\n                         <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\">This field is requird.</div>\r\n                             <div *ngIf=\"f.email.errors.email\">Invalid email id</div>\r\n                             \r\n                         </div>\r\n              </div>\r\n            <div class=\"group m-t-15\">\r\n              <label>Mobile</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Mobile\" formControlName=\"mobile\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\">\r\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.mobile.errors.required\">This field is required.</div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"group m-t-15\">\r\n              <label>Country</label>\r\n                 <select class=\"form-control\" formControlName=\"country\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\r\n                        <option value=\"\">Country</option>\r\n                         <option *ngFor=\"let country of countryArr\" value=\"{{country.id}}\">{{country.name}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.country.errors.required\">This field is required.</div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"card-block col-sm-12 col-xs-12 col-md-12 \">          \r\n                        <div class=\"group \">\r\n                           <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                             <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                              Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                     </div>\r\n\r\n              </div>\r\n          \r\n          </div>\r\n\r\n         \r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/list/list-broadcaster.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/list/list-broadcaster.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-broadcaster']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Broadcaster\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">User ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('email')\">Email<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'email', 'fa-sort-asc': (column == 'email' && isDesc), 'fa-sort-desc': (column == 'email' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('user_type')\">User Type<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'user_type', 'fa-sort-asc': (column == 'user_type' && isDesc), 'fa-sort-desc': (column == 'user_type' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('admin_verify')\">Admin Verify<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'admin_verify', 'fa-sort-asc': (column == 'admin_verify' && isDesc), 'fa-sort-desc': (column == 'admin_verify' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of users | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.first_name+' '+data.last_name | titlecase }}</td>\r\n  <td>{{ data.email }}</td>\r\n\t<td>{{ data.user_type }}</td>\r\n  <td>\r\n   <p *ngIf=\"data.admin_verify=='1'\">Yes</p>\r\n   <p *ngIf=\"data.admin_verify=='0'\">No</p>\r\n  </td>\r\n\t<td>\r\n\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-broadcaster', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/broadcaster/add/add-broadcaster.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/broadcaster/add/add-broadcaster.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb2FkY2FzdGVyL2FkZC9hZGQtYnJvYWRjYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/broadcaster/add/add-broadcaster.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/broadcaster/add/add-broadcaster.component.ts ***!
  \********************************************************************/
/*! exports provided: AddBroadcasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBroadcasterComponent", function() { return AddBroadcasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");







var AddBroadcasterComponent = /** @class */ (function () {
    function AddBroadcasterComponent(userService, router, alertService, fb, authenticationService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddBroadcasterComponent.prototype.ngOnInit = function () {
        this.nameLabel = 'Company Name';
        this.userForm = this.fb.group({
            register_as: ['9', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email], this.emailValidator.bind(this)],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            website: [''],
            user_avatar: [null],
        });
        this.getloginUserId();
        this.getCountry();
    };
    AddBroadcasterComponent.prototype.getCountry = function () {
        var _this = this;
        this.userService.getCountry().subscribe(function (res) {
            _this.countryArr = res['data'];
        });
    };
    AddBroadcasterComponent.prototype.getloginUserId = function () {
        this.loginUser = this.authenticationService.currentUserValue;
        this.loginUser = JSON.parse(this.loginUser);
        this.loginId = this.loginUser.user[0].id;
    };
    Object.defineProperty(AddBroadcasterComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddBroadcasterComponent.prototype.emailValidator = function () {
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
    AddBroadcasterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.userForm.value.created_by = this.loginId;
        this.loading = true;
        this.userService.addBroadcaster(this.userForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "User added successfully.");
                _this.router.navigate(['broadcaster']);
            }
            else {
                _this.alertService.pop('error', "Registration failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddBroadcasterComponent.prototype.cancelNewRole = function () {
        this.newRole = {};
    };
    AddBroadcasterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    AddBroadcasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broadcaster',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-broadcaster.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/add/add-broadcaster.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-broadcaster.component.scss */ "./src/app/pages/broadcaster/add/add-broadcaster.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AddBroadcasterComponent);
    return AddBroadcasterComponent;
}());



/***/ }),

/***/ "./src/app/pages/broadcaster/broadcaster-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/broadcaster/broadcaster-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BroadcasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcasterRoutingModule", function() { return BroadcasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_broadcaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-broadcaster.component */ "./src/app/pages/broadcaster/list/list-broadcaster.component.ts");
/* harmony import */ var _add_add_broadcaster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-broadcaster.component */ "./src/app/pages/broadcaster/add/add-broadcaster.component.ts");
/* harmony import */ var _edit_edit_broadcaster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-broadcaster.component */ "./src/app/pages/broadcaster/edit/edit-broadcaster.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_broadcaster_component__WEBPACK_IMPORTED_MODULE_3__["ListBroadcasterComponent"],
        data: {
            breadcrumb: 'broadcaster',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-broadcaster',
        component: _add_add_broadcaster_component__WEBPACK_IMPORTED_MODULE_4__["AddBroadcasterComponent"],
        data: {
            breadcrumb: 'Add Broadcaster',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add broadcaster',
            status: false
        }
    },
    {
        path: 'edit-broadcaster/:userId',
        component: _edit_edit_broadcaster_component__WEBPACK_IMPORTED_MODULE_5__["EditBroadcasterComponent"],
        data: {
            breadcrumb: 'Edit Broadcaster',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit Broadcaster',
            status: false
        }
    }
];
var BroadcasterRoutingModule = /** @class */ (function () {
    function BroadcasterRoutingModule() {
    }
    BroadcasterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BroadcasterRoutingModule);
    return BroadcasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/broadcaster/broadcaster.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/broadcaster/broadcaster.module.ts ***!
  \*********************************************************/
/*! exports provided: BroadcasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcasterModule", function() { return BroadcasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _broadcaster_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broadcaster-routing.module */ "./src/app/pages/broadcaster/broadcaster-routing.module.ts");
/* harmony import */ var _list_list_broadcaster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-broadcaster.component */ "./src/app/pages/broadcaster/list/list-broadcaster.component.ts");
/* harmony import */ var _add_add_broadcaster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-broadcaster.component */ "./src/app/pages/broadcaster/add/add-broadcaster.component.ts");
/* harmony import */ var _edit_edit_broadcaster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-broadcaster.component */ "./src/app/pages/broadcaster/edit/edit-broadcaster.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










//import { BrowserModule } from '@angular/platform-browser';



var BroadcasterModule = /** @class */ (function () {
    function BroadcasterModule() {
    }
    BroadcasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _broadcaster_routing_module__WEBPACK_IMPORTED_MODULE_3__["BroadcasterRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]
            ],
            declarations: [
                _list_list_broadcaster_component__WEBPACK_IMPORTED_MODULE_4__["ListBroadcasterComponent"],
                _add_add_broadcaster_component__WEBPACK_IMPORTED_MODULE_5__["AddBroadcasterComponent"],
                _edit_edit_broadcaster_component__WEBPACK_IMPORTED_MODULE_6__["EditBroadcasterComponent"]
            ]
        })
    ], BroadcasterModule);
    return BroadcasterModule;
}());



/***/ }),

/***/ "./src/app/pages/broadcaster/edit/edit-broadcaster.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/broadcaster/edit/edit-broadcaster.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb2FkY2FzdGVyL2VkaXQvZWRpdC1icm9hZGNhc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/broadcaster/edit/edit-broadcaster.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/broadcaster/edit/edit-broadcaster.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditBroadcasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBroadcasterComponent", function() { return EditBroadcasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EditBroadcasterComponent = /** @class */ (function () {
    function EditBroadcasterComponent(userService, router, activeAouter, alertService, fb, authenticationService) {
        this.userService = userService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.roleArr = {};
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditBroadcasterComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['userId'];
        this.getDetail(this.id);
        this.nameLabel = 'Company Name';
        this.userForm = this.fb.group({
            register_as: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: [''],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            website: [''],
            user_avatar: [null],
        });
        this.getloginUserId();
        this.getCountry();
    };
    EditBroadcasterComponent.prototype.getCountry = function () {
        var _this = this;
        this.userService.getCountry().subscribe(function (res) {
            _this.countryArr = res['data'];
        });
        this.roleArr = { '2': 'Admin', '3': 'Advertiser', '4': 'Teacher', '5': 'User', '6': 'Teacher Supervisor', '9': 'Broadcaster' };
    };
    EditBroadcasterComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.userService.userById(id).subscribe(function (user) {
            var userData = user['data'][0];
            _this.userForm.patchValue({
                register_as: _this.roleArr[userData.role_id],
                email: userData.email,
                first_name: userData.first_name,
                last_name: userData.last_name,
                country: userData.country,
                mobile: userData.phone_number,
            });
        });
    };
    EditBroadcasterComponent.prototype.getloginUserId = function () {
        this.loginUser = this.authenticationService.currentUserValue;
        this.loginUser = JSON.parse(this.loginUser);
        this.loginId = this.loginUser.user[0].id;
    };
    Object.defineProperty(EditBroadcasterComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditBroadcasterComponent.prototype.emailValidator = function () {
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
    EditBroadcasterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.userForm.value.created_by = this.loginId;
        this.loading = true;
        this.userService.updateUser(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "User updated successfully.");
                _this.router.navigate(['broadcaster']);
            }
            else {
                _this.alertService.pop('error', "update failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    EditBroadcasterComponent.prototype.cancelNewRole = function () {
        this.newRole = {};
    };
    EditBroadcasterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    EditBroadcasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broadcaster',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-broadcaster.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/edit/edit-broadcaster.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-broadcaster.component.scss */ "./src/app/pages/broadcaster/edit/edit-broadcaster.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], EditBroadcasterComponent);
    return EditBroadcasterComponent;
}());



/***/ }),

/***/ "./src/app/pages/broadcaster/list/list-broadcaster.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/broadcaster/list/list-broadcaster.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jyb2FkY2FzdGVyL2xpc3QvbGlzdC1icm9hZGNhc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/broadcaster/list/list-broadcaster.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/broadcaster/list/list-broadcaster.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListBroadcasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBroadcasterComponent", function() { return ListBroadcasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../pipes/orderBy"
var ListBroadcasterComponent = /** @class */ (function () {
    function ListBroadcasterComponent(userService, router, alertService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
        this.isDesc = false;
        this.column = 'id';
        this.term = "";
        this.alertService = alertService;
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
    }
    ListBroadcasterComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    ListBroadcasterComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListBroadcasterComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListBroadcasterComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getBroadcaster().subscribe(function (users) {
            _this.users = users['data'];
            _this.config.totalItems = users['data'].length;
        });
    };
    ListBroadcasterComponent.prototype.changeStatus = function (user) {
        var _this = this;
        console.log(user);
        if (user.status == "0") {
            user.status = "1";
        }
        else {
            user.status = "0";
        }
        this.userService.updateStatus(user, user.id)
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/users']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListBroadcasterComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListBroadcasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broadcaster',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-broadcaster.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcaster/list/list-broadcaster.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-broadcaster.component.scss */ "./src/app/pages/broadcaster/list/list-broadcaster.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListBroadcasterComponent);
    return ListBroadcasterComponent;
}());



/***/ }),

/***/ "./src/app/pipes/custom.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/custom.pipe.ts ***!
  \**************************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomPipe = /** @class */ (function () {
    function CustomPipe() {
    }
    CustomPipe.prototype.transform = function (items, filter, isAnd) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (isAnd) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (memo, keyName) {
                        return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        console.log(keyName);
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
                    });
                });
            }
        }
        else {
            return items;
        }
    };
    CustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'cFilter'
        })
    ], CustomPipe);
    return CustomPipe;
}());



/***/ }),

/***/ "./src/app/pipes/format-title.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/format-title.pipe.ts ***!
  \********************************************/
/*! exports provided: FormatTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTitlePipe", function() { return FormatTitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatTitlePipe = /** @class */ (function () {
    function FormatTitlePipe() {
    }
    FormatTitlePipe.prototype.transform = function (title) {
        var result = title.replace(/([A-Z])/g, ' $1');
        var finalResult = result.charAt(0)
            .toUpperCase() + result.slice(1);
        return finalResult;
    };
    FormatTitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatTitle'
        })
    ], FormatTitlePipe);
    return FormatTitlePipe;
}());



/***/ }),

/***/ "./src/app/pipes/format.ts":
/*!*********************************!*\
  !*** ./src/app/pipes/format.ts ***!
  \*********************************/
/*! exports provided: Format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Format", function() { return Format; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Format = /** @class */ (function () {
    function Format() {
    }
    //datePipe: DatePipe = new DatePipe();
    //decimalPipe: DecimalPipe = new DecimalPipe();
    Format.prototype.transform = function (input, args) {
        var format = '';
        var parsedFloat = 0;
        var pipeArgs = args.split(':');
        for (var i = 0; i < pipeArgs.length; i++) {
            pipeArgs[i] = pipeArgs[i].trim(' ');
        }
        switch (pipeArgs[0].toLowerCase()) {
            case 'text':
                return input;
            /*case 'decimal':
            case 'number':
              parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
              format = pipeArgs.length > 1 ? pipeArgs[1] : null;
              return this.decimalPipe.transform(parsedFloat, format);
            case 'percentage':
              parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
              format = pipeArgs.length > 1 ? pipeArgs[1] : null;
              return this.decimalPipe.transform(parsedFloat, format) + '%';*/
            /*case 'date':
            case 'datetime':
              var date = !isNaN(parseInt(input)) ? parseInt(input) : new Date(input);
              format = 'MMM d, y h:mm:ss a';
              if(pipeArgs.length > 1)
              {
                  format = '';
                  for(var i = 1; i < pipeArgs.length; i++){
                      format += pipeArgs[i];
                  }
              }
              return this.datePipe.transform(date, format);*/
            default:
                return input;
        }
    };
    Format = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'format'
        })
    ], Format);
    return Format;
}());



/***/ }),

/***/ "./src/app/pipes/orderBy.ts":
/*!**********************************!*\
  !*** ./src/app/pipes/orderBy.ts ***!
  \**********************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Example use
 *		Basic Array of single type: *ngFor="let todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="let todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="let todo of todoService.todos | orderBy : ['status', '-title']"
 */


var OrderBy = /** @class */ (function () {
    function OrderBy() {
        this.value = [];
    }
    OrderBy_1 = OrderBy;
    OrderBy._orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderBy.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        //make a copy of the input's reference
        this.value = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](input);
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc ? value.sort() : value.sort().reverse();
            }
            else {
                var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    return !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc
                        ? OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    var OrderBy_1;
    OrderBy = OrderBy_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderByy', pure: false })
    ], OrderBy);
    return OrderBy;
}());



/***/ }),

/***/ "./src/app/pipes/orderby.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderrByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderrByPipe", function() { return OrderrByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderrByPipe = /** @class */ (function () {
    function OrderrByPipe() {
    }
    OrderrByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    OrderrByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderBy' })
    ], OrderrByPipe);
    return OrderrByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderby.pipe */ "./src/app/pipes/orderby.pipe.ts");
/* harmony import */ var _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format-title.pipe */ "./src/app/pipes/format-title.pipe.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/pipes/format.ts");
/* harmony import */ var _orderBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderBy */ "./src/app/pipes/orderBy.ts");
/* harmony import */ var _custom_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.pipe */ "./src/app/pipes/custom.pipe.ts");
/* harmony import */ var _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sanitize-url.pipe */ "./src/app/pipes/sanitize-url.pipe.ts");








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderrByPipe"], _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"], _format__WEBPACK_IMPORTED_MODULE_4__["Format"], _orderBy__WEBPACK_IMPORTED_MODULE_5__["OrderBy"], _custom_pipe__WEBPACK_IMPORTED_MODULE_6__["CustomPipe"], _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizerUrlPipe"]],
            imports: [],
            exports: [_orderby_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderrByPipe"], _format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"], _format__WEBPACK_IMPORTED_MODULE_4__["Format"], _orderBy__WEBPACK_IMPORTED_MODULE_5__["OrderBy"], _custom_pipe__WEBPACK_IMPORTED_MODULE_6__["CustomPipe"], _sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SanitizerUrlPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/sanitize-url.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/sanitize-url.pipe.ts ***!
  \********************************************/
/*! exports provided: SanitizerUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizerUrlPipe", function() { return SanitizerUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizerUrlPipe = /** @class */ (function () {
    function SanitizerUrlPipe(sanitize) {
        this.sanitize = sanitize;
    }
    SanitizerUrlPipe.prototype.transform = function (value) {
        return this.sanitize.bypassSecurityTrustUrl(value);
    };
    SanitizerUrlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SanitizerUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sanitizerUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizerUrlPipe);
    return SanitizerUrlPipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-broadcaster-broadcaster-module.js.map