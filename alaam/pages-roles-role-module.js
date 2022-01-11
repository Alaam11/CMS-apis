(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-roles-role-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/add/add-role.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/add/add-role.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 _ngcontent-oub-c3=\"\" class=\"text-right txt-primary\">Add Role </h3></div></div>\r\n    <hr />\r\n    <div class=\"card\">\r\n      <div class=\"row m-t-20\">\r\n        <div class=\"col-sm-6 col-xs-12 col-md-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-12 col-form-label\">Role Name </label>\r\n            <div class=\"col-sm-12\">\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Role name\" />\r\n\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">Role name is required</div>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n          </div>\r\n       </div>\r\n\r\n        <div class=\"col-sm-6 col-xs-12 col-md-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-12 col-form-label\">Description </label>\r\n            <div class=\"col-sm-12\">\r\n            <textarea formControlName=\"description\" class=\"form-control\"></textarea>\r\n            </div>\r\n            \r\n          </div>\r\n       </div>\r\n\r\n       <div class=\"col-xs-12 col-sm-12\">\r\n       <div class=\"dt-responsive\">\r\n        <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\r\n          <thead>\r\n          <tr role=\"row\">\r\n          <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 200;\">Assign Permission</th>\r\n          <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 150;\" aria-sort=\"descending\">Action</th>\r\n          </tr>\r\n\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let data of permissions\">\r\n             <td>{{data.name}}</td>\r\n             <td>\r\n                    <div class=\"checkbox-fade fade-in-primary m-0\">\r\n                      <label _ngcontent-iwp-c3=\"\">\r\n                        <input type=\"checkbox\" [value]=\"data.id\" (change)=\"onCheckboxChange($event)\" />\r\n                        <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      </label>\r\n                    </div>\r\n             </td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12 m-b-15\">\r\n      <div class=\"col-sm-6 col-xs-12 col-md-6\">  </div>\r\n        <!-- <button type=\"button\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel pull-right\" >\r\n              Save \r\n        </button> -->\r\n        <div class=\"col-sm-6 col-xs-12 col-md-6\">  \r\n          <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n             Save\r\n           </button>\r\n\r\n        </div>\r\n         \r\n      </div>\r\n    </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/edit/edit-role.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/edit/edit-role.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 _ngcontent-oub-c3=\"\" class=\"text-right txt-primary\">Edit Role </h3></div></div>\r\n    <hr />\r\n    <div class=\"card\">\r\n      <div class=\"row m-t-20\">\r\n        <div class=\"col-sm-6 col-xs-12 col-md-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-12 col-form-label\">Role Name </label>\r\n            <div class=\"col-sm-12\">\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Role name\" [(ngModel)]=\"editedRole.name\"/>\r\n\r\n                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">Role name is required</div>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n          </div>\r\n       </div>\r\n\r\n        <div class=\"col-sm-6 col-xs-12 col-md-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-12 col-form-label\">Description </label>\r\n            <div class=\"col-sm-12\">\r\n            <textarea formControlName=\"description\" class=\"form-control\" [(ngModel)]=\"editedRole.description\"></textarea>\r\n            </div>\r\n            \r\n          </div>\r\n       </div>\r\n\r\n       <div class=\"col-xs-12 col-sm-12\">\r\n       <div class=\"dt-responsive\">\r\n        <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\r\n          <thead>\r\n          <tr role=\"row\">\r\n          <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 200;\">Assign Permission</th>\r\n          <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 150;\" aria-sort=\"descending\">Action</th>\r\n          </tr>\r\n\r\n          </thead>\r\n          <tbody>\r\n\r\n\r\n          <tr *ngFor=\"let permission of permissions; let i = index\">\r\n             <td>{{permission.name}}</td>\r\n             <td>\r\n\r\n                    <div class=\"checkbox-fade fade-in-primary m-0\">\r\n                      <label _ngcontent-iwp-c3=\"\">\r\n                         <input type=\"checkbox\" [value]=\"permission.id\" [checked]=\"editedPermission[permission.id]\" (change)=\"onCheckboxChange($event)\"/> \r\n                        <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      </label>\r\n                    </div>\r\n             </td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12 m-b-15\">\r\n      <div class=\"col-sm-6col-xs-12 col-md-6 \"> </div>\r\n\r\n      <div class=\"col-sm-6col-xs-12 col-md-6 \"> \r\n        <!-- <button type=\"button\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel pull-right\" >\r\n              Save \r\n        </button> -->\r\n        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n           Save\r\n         </button>\r\n\r\n      </div>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/list/list-role.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/list/list-role.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-role']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Role\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 375px;\" aria-sort=\"descending\" (click)=\"sort('name')\">name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('description')\">Description<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'description', 'fa-sort-asc': (column == 'description' && isDesc), 'fa-sort-desc': (column == 'description' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of roles | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name }}</td>\r\n\t<td>{{ data.description }}</td>\r\n\t<td>\r\n\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n\t<a [routerLink]=\"['view-role', data.id]\" class=\"btn allam-btn btn-warning text-white\" title=\"View\"><i  class=\"icofont icofont-eye\" ></i></a>\r\n\r\n  <a [routerLink]=\"['edit-role', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/view/view-role.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/view/view-role.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-xs-12 col-sm-6 col-md-6 text-left\"> \r\n          <a [routerLink]=\"['/role']\" class=\"btn btn-warning\">\r\n            <i _ngcontent-gjf-c6=\"\" class=\"icofont icofont-arrow-left\"></i>  \r\n            Back\r\n          </a>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12 col-sm-6 col-md-6 \">\r\n    <div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n       <h3 class=\"text-right txt-primary\">Role({{viewRole.name}}) </h3>\r\n    </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<br>\r\n<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"row m-t-20\">\r\n       <div class=\"col-xs-12 col-sm-12\">\r\n       <div class=\"dt-responsive\">\r\n        <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n          <thead>\r\n          <tr role=\"row\">\r\n          <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 200;\">Permissions</th>\r\n          <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 150;\" aria-sort=\"descending\">#</th>\r\n          </tr>\r\n\r\n          </thead>\r\n          <tbody>\r\n\r\n\r\n          <tr *ngFor=\"let permission of permissions; let i = index\">\r\n             <td>{{permission.name}}</td>\r\n             <td>\r\n\r\n                    <div class=\"checkbox-fade fade-in-primary m-0\">\r\n                      <label _ngcontent-iwp-c3=\"\">\r\n                         <input type=\"checkbox\" [value]=\"permission.id\" [checked]=\"viewPermission[permission.id]\" (change)=\"onCheckboxChange($event)\"/> \r\n                        <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                      </label>\r\n                    </div>\r\n             </td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n    </div>\r\n  \r\n    </div>\r\n    </div>\r\n \r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/roles/add/add-role.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/roles/add/add-role.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL2FkZC9hZGQtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/roles/add/add-role.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/roles/add/add-role.component.ts ***!
  \*******************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(roleService, router, alertService, fb) {
        this.roleService = roleService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddRoleComponent.prototype.ngOnInit = function () {
        this.getAllPermission();
        this.roleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [],
            permissionArray: this.fb.array([])
        });
    };
    AddRoleComponent.prototype.onCheckboxChange = function (e) {
        var permissionArray = this.roleForm.get('permissionArray');
        if (e.target.checked) {
            permissionArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            permissionArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    permissionArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    AddRoleComponent.prototype.getAllPermission = function () {
        var _this = this;
        this.roleService.getAllPermission().subscribe(function (permissions) {
            _this.permissions = permissions['data'];
        });
    };
    Object.defineProperty(AddRoleComponent.prototype, "f", {
        get: function () { return this.roleForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.roleForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.roleForm.invalid) {
            return;
        }
        this.loading = true;
        this.roleService.createRole(this.roleForm.value)
            .subscribe(function (data) {
            console.log(data);
            if (data['status'] == 200) {
                _this.alertService.pop('success', data['msg']);
                _this.router.navigate(['/role']);
            }
            else if (data['status'] == 303) {
                _this.alertService.pop('error', data['msg']);
                _this.router.navigate(['/role']);
            }
            else {
                _this.alertService.pop('error', data['msg']);
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.pop("Something went wrong. Try again later.");
            _this.loading = false;
        });
    };
    AddRoleComponent.prototype.cancelNewRole = function () {
        this.newRole = {};
    };
    AddRoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/add/add-role.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-role.component.scss */ "./src/app/pages/roles/add/add-role.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddRoleComponent);
    return AddRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/edit/edit-role.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/roles/edit/edit-role.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL2VkaXQvZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/roles/edit/edit-role.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/roles/edit/edit-role.component.ts ***!
  \*********************************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditRoleComponent = /** @class */ (function () {
    function EditRoleComponent(roleService, router, alertService, fb, activeAouter) {
        this.roleService = roleService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.activeAouter = activeAouter;
        this.editedRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['roleId'];
        this.getDetail(this.id);
        this.getAllPermission();
        this.roleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [],
            permissionArray: this.fb.array([])
        });
    };
    EditRoleComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.roleService.getById(id).subscribe(function (roles) {
            _this.editedRole = roles['role'][0];
            //console.log(roles['permission']);
            //this.editedPermission = roles['permission'];    
            var mypermissionArray = [];
            var permissionArray = _this.roleForm.get('permissionArray');
            for (var index in roles['permission']) {
                mypermissionArray[roles['permission'][index]['permission_id']] = roles['permission'][index]['permission_id'];
                permissionArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](roles['permission'][index]['permission_id'].toString()));
            }
            _this.editedPermission = mypermissionArray;
        });
    };
    EditRoleComponent.prototype.onCheckboxChange = function (e) {
        var permissionArray = this.roleForm.get('permissionArray');
        if (e.target.checked) {
            permissionArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            permissionArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    permissionArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    EditRoleComponent.prototype.getAllPermission = function () {
        var _this = this;
        this.roleService.getAllPermission().subscribe(function (permissions) {
            _this.permissions = permissions['data'];
        });
    };
    Object.defineProperty(EditRoleComponent.prototype, "f", {
        get: function () { return this.roleForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.roleForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.roleForm.invalid) {
            return;
        }
        this.loading = true;
        this.roleService.updateRole(this.roleForm.value, this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data['status'] == 200) {
                _this.alertService.pop('success', data['msg']);
                _this.router.navigate(['/role']);
            }
            else if (data['status'] == 303) {
                _this.alertService.pop('success', 'Role Updated successfully');
                _this.router.navigate(['/role']);
            }
            else {
                _this.alertService.pop('error', data['msg']);
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.pop("Something went wrong. Try again later.");
            _this.loading = false;
        });
    };
    EditRoleComponent.prototype.cancelNewRole = function () {
        this.editedRole = {};
    };
    EditRoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/edit/edit-role.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-role.component.scss */ "./src/app/pages/roles/edit/edit-role.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/list/list-role.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/roles/list/list-role.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcm9sZXMvbGlzdC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xccm9sZXNcXGxpc3RcXGxpc3Qtcm9sZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcm9sZXMvbGlzdC9saXN0LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBNEMsV0FBQTtBQ0M1QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL2xpc3QvbGlzdC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7ZmxvYXQ6IGxlZnQ7fVxyXG5cclxuXHJcblxyXG4iLCJkaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/roles/list/list-role.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/roles/list/list-role.component.ts ***!
  \*********************************************************/
/*! exports provided: ListRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoleComponent", function() { return ListRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../pipes/orderBy"
var ListRoleComponent = /** @class */ (function () {
    function ListRoleComponent(roleService, router, alertService) {
        this.roleService = roleService;
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
    ListRoleComponent.prototype.ngOnInit = function () {
        this.getAllRole();
    };
    ListRoleComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListRoleComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListRoleComponent.prototype.getAllRole = function () {
        var _this = this;
        this.roleService.getAll().subscribe(function (roles) {
            _this.roles = roles['data'];
            _this.config.totalItems = roles['data'].length;
        });
    };
    ListRoleComponent.prototype.changeStatus = function (role) {
        var _this = this;
        console.log(role);
        if (role.status == "0") {
            role.status = "1";
        }
        else {
            role.status = "0";
        }
        this.roleService.updateStatus(role, role.id)
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/role']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('Role updated');
    };
    ListRoleComponent.prototype.deleteRole = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete " + name)) {
            this.roleService.delete(id).subscribe(function () {
                _this.alertService.pop('success', 'Role deleted successfully');
                _this.getAllRole();
            });
        }
    };
    ListRoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/list/list-role.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-role.component.scss */ "./src/app/pages/roles/list/list-role.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListRoleComponent);
    return ListRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/roles/role-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/roles/role-routing.module.ts ***!
  \****************************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-role.component */ "./src/app/pages/roles/list/list-role.component.ts");
/* harmony import */ var _add_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-role.component */ "./src/app/pages/roles/add/add-role.component.ts");
/* harmony import */ var _edit_edit_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-role.component */ "./src/app/pages/roles/edit/edit-role.component.ts");
/* harmony import */ var _view_view_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view-role.component */ "./src/app/pages/roles/view/view-role.component.ts");







var routes = [
    {
        path: '',
        component: _list_list_role_component__WEBPACK_IMPORTED_MODULE_3__["ListRoleComponent"],
        data: {
            breadcrumb: 'role',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-role',
        component: _add_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"],
        data: {
            breadcrumb: 'Add role',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add role',
            status: false
        }
    },
    {
        path: 'edit-role/:roleId',
        component: _edit_edit_role_component__WEBPACK_IMPORTED_MODULE_5__["EditRoleComponent"],
        data: {
            breadcrumb: 'Edit role',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit role',
            status: false
        }
    },
    {
        path: 'view-role/:roleId',
        component: _view_view_role_component__WEBPACK_IMPORTED_MODULE_6__["ViewRoleComponent"],
        data: {
            breadcrumb: 'View Role',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'View Role',
            status: false
        }
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/roles/role.module.ts":
/*!********************************************!*\
  !*** ./src/app/pages/roles/role.module.ts ***!
  \********************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/pages/roles/role-routing.module.ts");
/* harmony import */ var _list_list_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-role.component */ "./src/app/pages/roles/list/list-role.component.ts");
/* harmony import */ var _add_add_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-role.component */ "./src/app/pages/roles/add/add-role.component.ts");
/* harmony import */ var _edit_edit_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-role.component */ "./src/app/pages/roles/edit/edit-role.component.ts");
/* harmony import */ var _view_view_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view-role.component */ "./src/app/pages/roles/view/view-role.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");











//import { BrowserModule } from '@angular/platform-browser';



var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _role_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"]
            ],
            declarations: [
                _list_list_role_component__WEBPACK_IMPORTED_MODULE_4__["ListRoleComponent"],
                _add_add_role_component__WEBPACK_IMPORTED_MODULE_5__["AddRoleComponent"],
                _edit_edit_role_component__WEBPACK_IMPORTED_MODULE_6__["EditRoleComponent"],
                _view_view_role_component__WEBPACK_IMPORTED_MODULE_7__["ViewRoleComponent"]
            ]
        })
    ], RoleModule);
    return RoleModule;
}());



/***/ }),

/***/ "./src/app/pages/roles/view/view-role.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/roles/view/view-role.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGVzL3ZpZXcvdmlldy1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/roles/view/view-role.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/roles/view/view-role.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoleComponent", function() { return ViewRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ViewRoleComponent = /** @class */ (function () {
    function ViewRoleComponent(roleService, router, alertService, fb, activeAouter) {
        this.roleService = roleService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.activeAouter = activeAouter;
        this.viewRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ViewRoleComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['roleId'];
        this.getDetail(this.id);
        this.getAllPermission();
        this.roleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: [],
            permissionArray: this.fb.array([])
        });
    };
    ViewRoleComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.roleService.getById(id).subscribe(function (roles) {
            _this.viewRole = roles['role'][0];
            //console.log(roles['permission']);
            //this.viewPermission = roles['permission'];    
            var mypermissionArray = [];
            var permissionArray = _this.roleForm.get('permissionArray');
            for (var index in roles['permission']) {
                mypermissionArray[roles['permission'][index]['permission_id']] = roles['permission'][index]['permission_id'];
                permissionArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](roles['permission'][index]['permission_id'].toString()));
            }
            _this.viewPermission = mypermissionArray;
        });
    };
    ViewRoleComponent.prototype.onCheckboxChange = function (e) {
        var permissionArray = this.roleForm.get('permissionArray');
        if (e.target.checked) {
            permissionArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](e.target.value));
        }
        else {
            var i_1 = 0;
            permissionArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                    permissionArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    ViewRoleComponent.prototype.getAllPermission = function () {
        var _this = this;
        this.roleService.getAllPermission().subscribe(function (permissions) {
            _this.permissions = permissions['data'];
        });
    };
    Object.defineProperty(ViewRoleComponent.prototype, "f", {
        get: function () { return this.roleForm.controls; },
        enumerable: true,
        configurable: true
    });
    ViewRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.roleForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.roleForm.invalid) {
            return;
        }
        this.loading = true;
        this.roleService.updateRole(this.roleForm.value, this.id)
            .subscribe(function (data) {
            console.log(data);
            if (data['status'] == 200) {
                _this.alertService.pop('success', data['msg']);
                _this.router.navigate(['/role']);
            }
            else if (data['status'] == 303) {
                _this.alertService.pop('success', 'Role Updated successfully');
                _this.router.navigate(['/role']);
            }
            else {
                _this.alertService.pop('error', data['msg']);
                _this.loading = false;
            }
        }, function (error) {
            _this.alertService.pop("Something went wrong. Try again later.");
            _this.loading = false;
        });
    };
    ViewRoleComponent.prototype.cancelNewRole = function () {
        this.viewRole = {};
    };
    ViewRoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ViewRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/roles/view/view-role.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-role.component.scss */ "./src/app/pages/roles/view/view-role.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ViewRoleComponent);
    return ViewRoleComponent;
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
//# sourceMappingURL=pages-roles-role-module.js.map