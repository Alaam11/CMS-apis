(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-masterdata-masterdata-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/add/add-country.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/add/add-country.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add Country </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n          <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6\">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6  mt-0\">          \r\n              <div class=\"group \">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n          </div>\r\n\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/edit/edit-country.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/edit/edit-country.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit Country </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/list/list-country.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/list/list-country.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-country']\" class=\"btn allam-btn-green text-white  m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Country\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-country', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/add/add-district.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/add/add-district.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add School </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/edit/edit-district.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/edit/edit-district.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit District </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/list/list-district.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/list/list-district.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search \r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-district']\" class=\"btn allam-btn-green text-white  m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add District\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-district', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/add/add-quiz.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/add/add-quiz.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add School </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/edit/edit-quiz.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/edit/edit-quiz.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit Quiz </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/list/list-quiz.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/list/list-quiz.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\"> </div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search \r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<!-- <div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-quiz']\" class=\"btn btn-success m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Quiz\r\n        </a>\r\n</div> -->\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-quiz', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/add/add-school.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/add/add-school.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add School </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group  m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/edit/edit-school.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/edit/edit-school.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit School </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/list/list-school.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/list/list-school.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search \r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-school']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add School\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-school', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/add/add-subject.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/add/add-subject.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add Subject </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6\">\r\n            <div class=\"form-group  files color\">\r\n              \r\n                <label>Upload Icon </label>\r\n                  <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n             \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"preview\" >\r\n                <img [src]=\"croppedImage\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 mt-0\">          \r\n              <div class=\"group \">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/edit/edit-subject.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/edit/edit-subject.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit Subject </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"form-group  files color\">\r\n               \r\n                  <label>Upload Icon </label>\r\n                    <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"preview\" >\r\n                  <img [src]=\"croppedImage\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/list/list-subject.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/list/list-subject.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-subject']\" class=\"btn allam-btn-green text-white  m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Subject\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-subject', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/add/add-subquiz.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/add/add-subquiz.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add School </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit Sub Quiz </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group \">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/list/list-subquiz.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/list/list-subquiz.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\"> </div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search \r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<!-- <div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-sub-quiz']\" class=\"btn btn-success m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Sub Quiz\r\n        </a>\r\n</div> -->\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-sub-quiz', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/add/add-university.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/add/add-university.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"masterForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Add University </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n              <div class=\"group m-t-15\">\r\n                <label>Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group \">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n         </div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/edit/edit-university.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/edit/edit-university.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <form  [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Edit University </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"row justify-content-md-center\">\r\n            <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">\r\n             \r\n                <div class=\"group m-t-15\">\r\n                  <label>Name</label>\r\n                   <input type=\"text\" placeholder=\"Name\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.name.errors.required\">This field is required.</div>\r\n                        </div>\r\n                 </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row justify-content-md-center\">\r\n          <div class=\"card-block col-sm-6 col-xs-6 col-md-6 \">          \r\n              <div class=\"group\">\r\n                 <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm \"></span>\r\n                    Save\r\n                  </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/list/list-university.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/list/list-university.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n        <a [routerLink]=\"['add-university']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add University\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th>\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> Action</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of masterdata | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\" \r\n\r\n      [class.odd]=\"isOdd\" \r\n      [class.even]=\"isEven\" >\r\n\t<td class=\"\">{{ data.id }}</td>\r\n  <td class=\"sorting_1\">{{ data.name | titlecase }}</td>\r\n  <td>\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"roles\">\r\n  <a [routerLink]=\"['edit-university', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i  class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option value=\"5\">5</option>\r\n    <option value=\"10\">10</option>\r\n    <option value=\"25\">25</option>\r\n    <option value=\"50\">50</option>\r\n    <option value=\"100\">100</option>\r\n  </select> \r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n  <ul class=\"pagination\">  \r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>  \r\n  </ul>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/masterdata/country/add/add-country.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/country/add/add-country.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvY291bnRyeS9hZGQvYWRkLWNvdW50cnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/country/add/add-country.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/country/add/add-country.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCountryComponent", function() { return AddCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddCountryComponent = /** @class */ (function () {
    function AddCountryComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddCountryComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddCountryComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddCountryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addCountry(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/country']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddCountryComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/add/add-country.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-country.component.scss */ "./src/app/pages/masterdata/country/add/add-country.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddCountryComponent);
    return AddCountryComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/country/edit/edit-country.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/country/edit/edit-country.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvY291bnRyeS9lZGl0L2VkaXQtY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/country/edit/edit-country.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/country/edit/edit-country.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCountryComponent", function() { return EditCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditCountryComponent = /** @class */ (function () {
    function EditCountryComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditCountryComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditCountryComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.countryById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditCountryComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditCountryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateCountry(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/country']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditCountryComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/edit/edit-country.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-country.component.scss */ "./src/app/pages/masterdata/country/edit/edit-country.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditCountryComponent);
    return EditCountryComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/country/list/list-country.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/country/list/list-country.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvY291bnRyeS9saXN0L2xpc3QtY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/country/list/list-country.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/country/list/list-country.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCountryComponent", function() { return ListCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListCountryComponent = /** @class */ (function () {
    function ListCountryComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListCountryComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListCountryComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListCountryComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListCountryComponent.prototype.getAll = function () {
        var _this = this;
        this.masterdataService.getAll('country').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListCountryComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'country')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/country']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListCountryComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/country/list/list-country.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-country.component.scss */ "./src/app/pages/masterdata/country/list/list-country.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListCountryComponent);
    return ListCountryComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/district/add/add-district.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/add/add-district.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvZGlzdHJpY3QvYWRkL2FkZC1kaXN0cmljdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/district/add/add-district.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/add/add-district.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDistrictComponent", function() { return AddDistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddDistrictComponent = /** @class */ (function () {
    function AddDistrictComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddDistrictComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddDistrictComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddDistrictComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addDistrict(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/district']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddDistrictComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-district',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/add/add-district.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-district.component.scss */ "./src/app/pages/masterdata/district/add/add-district.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddDistrictComponent);
    return AddDistrictComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/district/edit/edit-district.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/edit/edit-district.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvZGlzdHJpY3QvZWRpdC9lZGl0LWRpc3RyaWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/masterdata/district/edit/edit-district.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/edit/edit-district.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDistrictComponent", function() { return EditDistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditDistrictComponent = /** @class */ (function () {
    function EditDistrictComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditDistrictComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditDistrictComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.districtById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditDistrictComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditDistrictComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateDistrict(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/district']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditDistrictComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-district',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/edit/edit-district.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-district.component.scss */ "./src/app/pages/masterdata/district/edit/edit-district.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditDistrictComponent);
    return EditDistrictComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/district/list/list-district.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/list/list-district.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvZGlzdHJpY3QvbGlzdC9saXN0LWRpc3RyaWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/masterdata/district/list/list-district.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/district/list/list-district.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListDistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDistrictComponent", function() { return ListDistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListDistrictComponent = /** @class */ (function () {
    function ListDistrictComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListDistrictComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListDistrictComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListDistrictComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListDistrictComponent.prototype.getAll = function () {
        var _this = this;
        this.masterdataService.getAll('district').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListDistrictComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'district')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/district']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListDistrictComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListDistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-district',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-district.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/district/list/list-district.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-district.component.scss */ "./src/app/pages/masterdata/district/list/list-district.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListDistrictComponent);
    return ListDistrictComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/masterdata-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/masterdata/masterdata-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MasterdataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterdataRoutingModule", function() { return MasterdataRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _school_list_list_school_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school/list/list-school.component */ "./src/app/pages/masterdata/school/list/list-school.component.ts");
/* harmony import */ var _school_add_add_school_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school/add/add-school.component */ "./src/app/pages/masterdata/school/add/add-school.component.ts");
/* harmony import */ var _school_edit_edit_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school/edit/edit-school.component */ "./src/app/pages/masterdata/school/edit/edit-school.component.ts");
/* harmony import */ var _university_list_list_university_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./university/list/list-university.component */ "./src/app/pages/masterdata/university/list/list-university.component.ts");
/* harmony import */ var _university_add_add_university_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./university/add/add-university.component */ "./src/app/pages/masterdata/university/add/add-university.component.ts");
/* harmony import */ var _university_edit_edit_university_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./university/edit/edit-university.component */ "./src/app/pages/masterdata/university/edit/edit-university.component.ts");
/* harmony import */ var _quiz_list_list_quiz_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz/list/list-quiz.component */ "./src/app/pages/masterdata/quiz/list/list-quiz.component.ts");
/* harmony import */ var _quiz_add_add_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz/add/add-quiz.component */ "./src/app/pages/masterdata/quiz/add/add-quiz.component.ts");
/* harmony import */ var _quiz_edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz/edit/edit-quiz.component */ "./src/app/pages/masterdata/quiz/edit/edit-quiz.component.ts");
/* harmony import */ var _subquiz_list_list_subquiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subquiz/list/list-subquiz.component */ "./src/app/pages/masterdata/subquiz/list/list-subquiz.component.ts");
/* harmony import */ var _subquiz_add_add_subquiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subquiz/add/add-subquiz.component */ "./src/app/pages/masterdata/subquiz/add/add-subquiz.component.ts");
/* harmony import */ var _subquiz_edit_edit_subquiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subquiz/edit/edit-subquiz.component */ "./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.ts");
/* harmony import */ var _subject_list_list_subject_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subject/list/list-subject.component */ "./src/app/pages/masterdata/subject/list/list-subject.component.ts");
/* harmony import */ var _subject_add_add_subject_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subject/add/add-subject.component */ "./src/app/pages/masterdata/subject/add/add-subject.component.ts");
/* harmony import */ var _subject_edit_edit_subject_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subject/edit/edit-subject.component */ "./src/app/pages/masterdata/subject/edit/edit-subject.component.ts");
/* harmony import */ var _district_list_list_district_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./district/list/list-district.component */ "./src/app/pages/masterdata/district/list/list-district.component.ts");
/* harmony import */ var _district_add_add_district_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./district/add/add-district.component */ "./src/app/pages/masterdata/district/add/add-district.component.ts");
/* harmony import */ var _district_edit_edit_district_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./district/edit/edit-district.component */ "./src/app/pages/masterdata/district/edit/edit-district.component.ts");
/* harmony import */ var _country_list_list_country_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./country/list/list-country.component */ "./src/app/pages/masterdata/country/list/list-country.component.ts");
/* harmony import */ var _country_add_add_country_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./country/add/add-country.component */ "./src/app/pages/masterdata/country/add/add-country.component.ts");
/* harmony import */ var _country_edit_edit_country_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./country/edit/edit-country.component */ "./src/app/pages/masterdata/country/edit/edit-country.component.ts");
























var routes = [
    {
        path: 'school',
        component: _school_list_list_school_component__WEBPACK_IMPORTED_MODULE_3__["ListSchoolComponent"],
        data: {
            breadcrumb: 'school',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'school/add-school',
        component: _school_add_add_school_component__WEBPACK_IMPORTED_MODULE_4__["AddSchoolComponent"],
        data: {
            breadcrumb: 'Add School',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add school',
            status: false
        }
    },
    {
        path: 'school/edit-school/:masterId',
        component: _school_edit_edit_school_component__WEBPACK_IMPORTED_MODULE_5__["EditSchoolComponent"],
        data: {
            breadcrumb: 'Edit School',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit school',
            status: false
        }
    },
    {
        path: 'university',
        component: _university_list_list_university_component__WEBPACK_IMPORTED_MODULE_6__["ListUniversityComponent"],
        data: {
            breadcrumb: 'university',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'university/add-university',
        component: _university_add_add_university_component__WEBPACK_IMPORTED_MODULE_7__["AddUniversityComponent"],
        data: {
            breadcrumb: 'Add University',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add University',
            status: false
        }
    },
    {
        path: 'university/edit-university/:masterId',
        component: _university_edit_edit_university_component__WEBPACK_IMPORTED_MODULE_8__["EditUniversityComponent"],
        data: {
            breadcrumb: 'Edit University',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit University',
            status: false
        }
    },
    {
        path: 'quiz',
        component: _quiz_list_list_quiz_component__WEBPACK_IMPORTED_MODULE_9__["ListQuizComponent"],
        data: {
            breadcrumb: 'quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'quiz/add-quiz',
        component: _quiz_add_add_quiz_component__WEBPACK_IMPORTED_MODULE_10__["AddQuizComponent"],
        data: {
            breadcrumb: 'Add Quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add Quiz',
            status: false
        }
    },
    {
        path: 'quiz/edit-quiz/:masterId',
        component: _quiz_edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_11__["EditQuizComponent"],
        data: {
            breadcrumb: 'Edit Quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit Quiz',
            status: false
        }
    },
    {
        path: 'sub-quiz',
        component: _subquiz_list_list_subquiz_component__WEBPACK_IMPORTED_MODULE_12__["ListSubquizComponent"],
        data: {
            breadcrumb: 'subquiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'sub-quiz/add-quiz',
        component: _subquiz_add_add_subquiz_component__WEBPACK_IMPORTED_MODULE_13__["AddSubquizComponent"],
        data: {
            breadcrumb: 'Add Sub Quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add Sub Quiz',
            status: false
        }
    },
    {
        path: 'sub-quiz/edit-sub-quiz/:masterId',
        component: _subquiz_edit_edit_subquiz_component__WEBPACK_IMPORTED_MODULE_14__["EditSubquizComponent"],
        data: {
            breadcrumb: 'Edit Sub Quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit Sub Quiz',
            status: false
        }
    },
    {
        path: 'subject',
        component: _subject_list_list_subject_component__WEBPACK_IMPORTED_MODULE_15__["ListSubjectComponent"],
        data: {
            breadcrumb: 'subject',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'subject/add-subject',
        component: _subject_add_add_subject_component__WEBPACK_IMPORTED_MODULE_16__["AddSubjectComponent"],
        data: {
            breadcrumb: 'Add Subject',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add Subject',
            status: false
        }
    },
    {
        path: 'subject/edit-subject/:masterId',
        component: _subject_edit_edit_subject_component__WEBPACK_IMPORTED_MODULE_17__["EditSubjectComponent"],
        data: {
            breadcrumb: 'Edit Subject',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit Subject',
            status: false
        }
    },
    {
        path: 'district',
        component: _district_list_list_district_component__WEBPACK_IMPORTED_MODULE_18__["ListDistrictComponent"],
        data: {
            breadcrumb: 'district',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'district/add-district',
        component: _district_add_add_district_component__WEBPACK_IMPORTED_MODULE_19__["AddDistrictComponent"],
        data: {
            breadcrumb: 'Add District',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add District',
            status: false
        }
    },
    {
        path: 'district/edit-district/:masterId',
        component: _district_edit_edit_district_component__WEBPACK_IMPORTED_MODULE_20__["EditDistrictComponent"],
        data: {
            breadcrumb: 'Edit District',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit District',
            status: false
        }
    },
    {
        path: 'country',
        component: _country_list_list_country_component__WEBPACK_IMPORTED_MODULE_21__["ListCountryComponent"],
        data: {
            breadcrumb: 'country',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'country/add-country',
        component: _country_add_add_country_component__WEBPACK_IMPORTED_MODULE_22__["AddCountryComponent"],
        data: {
            breadcrumb: 'Add Country',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add Country',
            status: false
        }
    },
    {
        path: 'country/edit-country/:masterId',
        component: _country_edit_edit_country_component__WEBPACK_IMPORTED_MODULE_23__["EditCountryComponent"],
        data: {
            breadcrumb: 'Edit Country',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit Country',
            status: false
        }
    },
];
var MasterdataRoutingModule = /** @class */ (function () {
    function MasterdataRoutingModule() {
    }
    MasterdataRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MasterdataRoutingModule);
    return MasterdataRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/masterdata.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/masterdata/masterdata.module.ts ***!
  \*******************************************************/
/*! exports provided: MasterdataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterdataModule", function() { return MasterdataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _masterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masterdata-routing.module */ "./src/app/pages/masterdata/masterdata-routing.module.ts");
/* harmony import */ var _school_list_list_school_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school/list/list-school.component */ "./src/app/pages/masterdata/school/list/list-school.component.ts");
/* harmony import */ var _school_add_add_school_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./school/add/add-school.component */ "./src/app/pages/masterdata/school/add/add-school.component.ts");
/* harmony import */ var _school_edit_edit_school_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./school/edit/edit-school.component */ "./src/app/pages/masterdata/school/edit/edit-school.component.ts");
/* harmony import */ var _university_list_list_university_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./university/list/list-university.component */ "./src/app/pages/masterdata/university/list/list-university.component.ts");
/* harmony import */ var _university_add_add_university_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./university/add/add-university.component */ "./src/app/pages/masterdata/university/add/add-university.component.ts");
/* harmony import */ var _university_edit_edit_university_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./university/edit/edit-university.component */ "./src/app/pages/masterdata/university/edit/edit-university.component.ts");
/* harmony import */ var _quiz_list_list_quiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quiz/list/list-quiz.component */ "./src/app/pages/masterdata/quiz/list/list-quiz.component.ts");
/* harmony import */ var _quiz_add_add_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/add/add-quiz.component */ "./src/app/pages/masterdata/quiz/add/add-quiz.component.ts");
/* harmony import */ var _quiz_edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz/edit/edit-quiz.component */ "./src/app/pages/masterdata/quiz/edit/edit-quiz.component.ts");
/* harmony import */ var _subquiz_list_list_subquiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subquiz/list/list-subquiz.component */ "./src/app/pages/masterdata/subquiz/list/list-subquiz.component.ts");
/* harmony import */ var _subquiz_add_add_subquiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subquiz/add/add-subquiz.component */ "./src/app/pages/masterdata/subquiz/add/add-subquiz.component.ts");
/* harmony import */ var _subquiz_edit_edit_subquiz_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subquiz/edit/edit-subquiz.component */ "./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.ts");
/* harmony import */ var _subject_list_list_subject_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subject/list/list-subject.component */ "./src/app/pages/masterdata/subject/list/list-subject.component.ts");
/* harmony import */ var _subject_add_add_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/add/add-subject.component */ "./src/app/pages/masterdata/subject/add/add-subject.component.ts");
/* harmony import */ var _subject_edit_edit_subject_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subject/edit/edit-subject.component */ "./src/app/pages/masterdata/subject/edit/edit-subject.component.ts");
/* harmony import */ var _district_list_list_district_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./district/list/list-district.component */ "./src/app/pages/masterdata/district/list/list-district.component.ts");
/* harmony import */ var _district_add_add_district_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./district/add/add-district.component */ "./src/app/pages/masterdata/district/add/add-district.component.ts");
/* harmony import */ var _district_edit_edit_district_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./district/edit/edit-district.component */ "./src/app/pages/masterdata/district/edit/edit-district.component.ts");
/* harmony import */ var _country_list_list_country_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./country/list/list-country.component */ "./src/app/pages/masterdata/country/list/list-country.component.ts");
/* harmony import */ var _country_add_add_country_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./country/add/add-country.component */ "./src/app/pages/masterdata/country/add/add-country.component.ts");
/* harmony import */ var _country_edit_edit_country_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./country/edit/edit-country.component */ "./src/app/pages/masterdata/country/edit/edit-country.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");




























//import { BrowserModule } from '@angular/platform-browser';




var MasterdataModule = /** @class */ (function () {
    function MasterdataModule() {
    }
    MasterdataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _masterdata_routing_module__WEBPACK_IMPORTED_MODULE_5__["MasterdataRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_27__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_29__["PipesModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_30__["ImageCropperModule"]
            ],
            declarations: [
                _school_list_list_school_component__WEBPACK_IMPORTED_MODULE_6__["ListSchoolComponent"],
                _school_add_add_school_component__WEBPACK_IMPORTED_MODULE_7__["AddSchoolComponent"],
                _school_edit_edit_school_component__WEBPACK_IMPORTED_MODULE_8__["EditSchoolComponent"],
                _university_list_list_university_component__WEBPACK_IMPORTED_MODULE_9__["ListUniversityComponent"],
                _university_add_add_university_component__WEBPACK_IMPORTED_MODULE_10__["AddUniversityComponent"],
                _university_edit_edit_university_component__WEBPACK_IMPORTED_MODULE_11__["EditUniversityComponent"],
                _quiz_list_list_quiz_component__WEBPACK_IMPORTED_MODULE_12__["ListQuizComponent"],
                _quiz_add_add_quiz_component__WEBPACK_IMPORTED_MODULE_13__["AddQuizComponent"],
                _quiz_edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_14__["EditQuizComponent"],
                _subquiz_list_list_subquiz_component__WEBPACK_IMPORTED_MODULE_15__["ListSubquizComponent"],
                _subquiz_add_add_subquiz_component__WEBPACK_IMPORTED_MODULE_16__["AddSubquizComponent"],
                _subquiz_edit_edit_subquiz_component__WEBPACK_IMPORTED_MODULE_17__["EditSubquizComponent"],
                _subject_list_list_subject_component__WEBPACK_IMPORTED_MODULE_18__["ListSubjectComponent"],
                _subject_add_add_subject_component__WEBPACK_IMPORTED_MODULE_19__["AddSubjectComponent"],
                _subject_edit_edit_subject_component__WEBPACK_IMPORTED_MODULE_20__["EditSubjectComponent"],
                _district_list_list_district_component__WEBPACK_IMPORTED_MODULE_21__["ListDistrictComponent"],
                _district_add_add_district_component__WEBPACK_IMPORTED_MODULE_22__["AddDistrictComponent"],
                _district_edit_edit_district_component__WEBPACK_IMPORTED_MODULE_23__["EditDistrictComponent"],
                _country_list_list_country_component__WEBPACK_IMPORTED_MODULE_24__["ListCountryComponent"],
                _country_add_add_country_component__WEBPACK_IMPORTED_MODULE_25__["AddCountryComponent"],
                _country_edit_edit_country_component__WEBPACK_IMPORTED_MODULE_26__["EditCountryComponent"]
            ]
        })
    ], MasterdataModule);
    return MasterdataModule;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/quiz/add/add-quiz.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/add/add-quiz.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvcXVpei9hZGQvYWRkLXF1aXouY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/quiz/add/add-quiz.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/add/add-quiz.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function() { return AddQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddQuizComponent = /** @class */ (function () {
    function AddQuizComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddQuizComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddQuizComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddQuizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addQuiz(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/quiz']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddQuizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/add/add-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-quiz.component.scss */ "./src/app/pages/masterdata/quiz/add/add-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddQuizComponent);
    return AddQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/quiz/edit/edit-quiz.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/edit/edit-quiz.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvcXVpei9lZGl0L2VkaXQtcXVpei5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/quiz/edit/edit-quiz.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/edit/edit-quiz.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuizComponent", function() { return EditQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditQuizComponent = /** @class */ (function () {
    function EditQuizComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditQuizComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditQuizComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.quizById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditQuizComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditQuizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateQuiz(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/quiz']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditQuizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/edit/edit-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-quiz.component.scss */ "./src/app/pages/masterdata/quiz/edit/edit-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditQuizComponent);
    return EditQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/quiz/list/list-quiz.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/list/list-quiz.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvcXVpei9saXN0L2xpc3QtcXVpei5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/quiz/list/list-quiz.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/masterdata/quiz/list/list-quiz.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuizComponent", function() { return ListQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListQuizComponent = /** @class */ (function () {
    function ListQuizComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListQuizComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListQuizComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListQuizComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListQuizComponent.prototype.getAll = function () {
        var _this = this;
        this.masterdataService.getAll('quiz').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListQuizComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'quiz')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/quiz']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListQuizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/quiz/list/list-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-quiz.component.scss */ "./src/app/pages/masterdata/quiz/list/list-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListQuizComponent);
    return ListQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/school/add/add-school.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/school/add/add-school.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc2Nob29sL2FkZC9hZGQtc2Nob29sLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/masterdata/school/add/add-school.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masterdata/school/add/add-school.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSchoolComponent", function() { return AddSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddSchoolComponent = /** @class */ (function () {
    function AddSchoolComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddSchoolComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddSchoolComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddSchoolComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addSchool(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/school']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddSchoolComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-school.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/add/add-school.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-school.component.scss */ "./src/app/pages/masterdata/school/add/add-school.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddSchoolComponent);
    return AddSchoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/school/edit/edit-school.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/school/edit/edit-school.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc2Nob29sL2VkaXQvZWRpdC1zY2hvb2wuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/school/edit/edit-school.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/school/edit/edit-school.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSchoolComponent", function() { return EditSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditSchoolComponent = /** @class */ (function () {
    function EditSchoolComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditSchoolComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditSchoolComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.schoolById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditSchoolComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditSchoolComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateSchool(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/school']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditSchoolComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-school.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/edit/edit-school.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-school.component.scss */ "./src/app/pages/masterdata/school/edit/edit-school.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditSchoolComponent);
    return EditSchoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/school/list/list-school.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/school/list/list-school.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc2Nob29sL2xpc3QvbGlzdC1zY2hvb2wuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/school/list/list-school.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/school/list/list-school.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSchoolComponent", function() { return ListSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListSchoolComponent = /** @class */ (function () {
    function ListSchoolComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListSchoolComponent.prototype.ngOnInit = function () {
        this.getAllSchool();
    };
    ListSchoolComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListSchoolComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListSchoolComponent.prototype.getAllSchool = function () {
        var _this = this;
        this.masterdataService.getAll('school').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListSchoolComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'school')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/school']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListSchoolComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-school.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/school/list/list-school.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-school.component.scss */ "./src/app/pages/masterdata/school/list/list-school.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListSchoolComponent);
    return ListSchoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subject/add/add-subject.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/add/add-subject.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files:before {\n  display: none;\n}\n\n.files input {\n  padding: 40px 35px 75px 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFzdGVyZGF0YS9zdWJqZWN0L2FkZC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcbWFzdGVyZGF0YVxcc3ViamVjdFxcYWRkXFxhZGQtc3ViamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFzdGVyZGF0YS9zdWJqZWN0L2FkZC9hZGQtc3ViamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFlLGFBQUE7QUNFZjs7QUREQTtFQUFjLDJCQUFBO0FDS2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXN0ZXJkYXRhL3N1YmplY3QvYWRkL2FkZC1zdWJqZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVzOmJlZm9yZSB7ZGlzcGxheTpub25lO31cclxuLmZpbGVzIGlucHV0IHtwYWRkaW5nOiA0MHB4IDM1cHggNzVweCAzMCU7fVxyXG5cclxuXHJcblxyXG4iLCIuZmlsZXM6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGVzIGlucHV0IHtcbiAgcGFkZGluZzogNDBweCAzNXB4IDc1cHggMzAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/subject/add/add-subject.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/add/add-subject.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function() { return AddSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddSubjectComponent = /** @class */ (function () {
    function AddSubjectComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.newSubject = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.percentDone = 0;
        this.showModal = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    AddSubjectComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            icon: [null]
        });
    };
    Object.defineProperty(AddSubjectComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddSubjectComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.masterForm.value); return;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        if (this.croppedImage == '') {
            // Swal.fire('','Please upload subject icon.','error');
            //return false
        }
        this.loading = true;
        this.masterdataService.addSubject(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/subject']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddSubjectComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
    };
    AddSubjectComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.masterForm.patchValue({
            icon: this.croppedImage
        });
    };
    AddSubjectComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    AddSubjectComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    AddSubjectComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    AddSubjectComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    AddSubjectComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-subject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/add/add-subject.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-subject.component.scss */ "./src/app/pages/masterdata/subject/add/add-subject.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddSubjectComponent);
    return AddSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subject/edit/edit-subject.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/edit/edit-subject.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files:before {\n  display: none;\n}\n\n.files input {\n  padding: 40px 35px 75px 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFzdGVyZGF0YS9zdWJqZWN0L2VkaXQvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXG1hc3RlcmRhdGFcXHN1YmplY3RcXGVkaXRcXGVkaXQtc3ViamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFzdGVyZGF0YS9zdWJqZWN0L2VkaXQvZWRpdC1zdWJqZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsYUFBQTtBQ0VmOztBRERBO0VBQWMsMkJBQUE7QUNLZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc3ViamVjdC9lZGl0L2VkaXQtc3ViamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlczpiZWZvcmUge2Rpc3BsYXk6bm9uZTt9XHJcbi5maWxlcyBpbnB1dCB7cGFkZGluZzogNDBweCAzNXB4IDc1cHggMzAlO31cclxuXHJcbiIsIi5maWxlczpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZXMgaW5wdXQge1xuICBwYWRkaW5nOiA0MHB4IDM1cHggNzVweCAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/masterdata/subject/edit/edit-subject.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/edit/edit-subject.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubjectComponent", function() { return EditSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");







var EditSubjectComponent = /** @class */ (function () {
    function EditSubjectComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].s3_url;
        this.submitted = false;
        this.error = '';
        this.isFile = false;
        this.showModal = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    EditSubjectComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            icon: [null],
            isFile: [this.isFile]
        });
    };
    EditSubjectComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.subjectById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
            _this.croppedImage = _this.s3_url + userData.icon;
        });
    };
    Object.defineProperty(EditSubjectComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditSubjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateSubject(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/subject']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditSubjectComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
        this.isFile = true;
    };
    EditSubjectComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.userForm.patchValue({
            icon: this.croppedImage,
            isFile: true
        });
        this.isFile = true;
    };
    EditSubjectComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    EditSubjectComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    EditSubjectComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    EditSubjectComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    EditSubjectComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-subject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/edit/edit-subject.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-subject.component.scss */ "./src/app/pages/masterdata/subject/edit/edit-subject.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditSubjectComponent);
    return EditSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subject/list/list-subject.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/list/list-subject.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc3ViamVjdC9saXN0L2xpc3Qtc3ViamVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/subject/list/list-subject.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subject/list/list-subject.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubjectComponent", function() { return ListSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListSubjectComponent = /** @class */ (function () {
    function ListSubjectComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListSubjectComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListSubjectComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListSubjectComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListSubjectComponent.prototype.getAll = function () {
        var _this = this;
        this.masterdataService.getAll('subject').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListSubjectComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'subject')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/subject']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListSubjectComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-subject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subject/list/list-subject.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-subject.component.scss */ "./src/app/pages/masterdata/subject/list/list-subject.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListSubjectComponent);
    return ListSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/add/add-subquiz.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/add/add-subquiz.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc3VicXVpei9hZGQvYWRkLXN1YnF1aXouY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/add/add-subquiz.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/add/add-subquiz.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddSubquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubquizComponent", function() { return AddSubquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddSubquizComponent = /** @class */ (function () {
    function AddSubquizComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddSubquizComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddSubquizComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddSubquizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addSubQuiz(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/sub-quiz']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddSubquizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddSubquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subquiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-subquiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/add/add-subquiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-subquiz.component.scss */ "./src/app/pages/masterdata/subquiz/add/add-subquiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddSubquizComponent);
    return AddSubquizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc3VicXVpei9lZGl0L2VkaXQtc3VicXVpei5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditSubquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubquizComponent", function() { return EditSubquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditSubquizComponent = /** @class */ (function () {
    function EditSubquizComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditSubquizComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditSubquizComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.subQuizById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditSubquizComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditSubquizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateSubQuiz(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/sub-quiz']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditSubquizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditSubquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subquiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-subquiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-subquiz.component.scss */ "./src/app/pages/masterdata/subquiz/edit/edit-subquiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditSubquizComponent);
    return EditSubquizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/list/list-subquiz.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/list/list-subquiz.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvc3VicXVpei9saXN0L2xpc3Qtc3VicXVpei5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/subquiz/list/list-subquiz.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masterdata/subquiz/list/list-subquiz.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListSubquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubquizComponent", function() { return ListSubquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListSubquizComponent = /** @class */ (function () {
    function ListSubquizComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListSubquizComponent.prototype.ngOnInit = function () {
        this.getAllSubQuiz();
    };
    ListSubquizComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListSubquizComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListSubquizComponent.prototype.getAllSubQuiz = function () {
        var _this = this;
        this.masterdataService.getAll('subquiz').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListSubquizComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'subquiz')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/sub-quiz']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListSubquizComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListSubquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subquiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-subquiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/subquiz/list/list-subquiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-subquiz.component.scss */ "./src/app/pages/masterdata/subquiz/list/list-subquiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListSubquizComponent);
    return ListSubquizComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/university/add/add-university.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/add/add-university.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvdW5pdmVyc2l0eS9hZGQvYWRkLXVuaXZlcnNpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/masterdata/university/add/add-university.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/add/add-university.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUniversityComponent", function() { return AddUniversityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddUniversityComponent = /** @class */ (function () {
    function AddUniversityComponent(masterdataService, router, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AddUniversityComponent.prototype.ngOnInit = function () {
        this.masterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AddUniversityComponent.prototype, "f", {
        get: function () { return this.masterForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddUniversityComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.masterForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.addUniversity(this.masterForm.value)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data added successfully.");
                _this.router.navigate(['masterdata/university']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
            }
            else {
                _this.alertService.pop('error', "failed. try again");
                _this.loading = false;
            }
        }, function (error) {
            _this.error = "Something went wrong. Try again later.";
            _this.loading = false;
        });
    };
    AddUniversityComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AddUniversityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-university',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-university.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/add/add-university.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-university.component.scss */ "./src/app/pages/masterdata/university/add/add-university.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddUniversityComponent);
    return AddUniversityComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/university/edit/edit-university.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/edit/edit-university.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvdW5pdmVyc2l0eS9lZGl0L2VkaXQtdW5pdmVyc2l0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/university/edit/edit-university.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/edit/edit-university.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditUniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUniversityComponent", function() { return EditUniversityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditUniversityComponent = /** @class */ (function () {
    function EditUniversityComponent(masterdataService, router, activeAouter, alertService, fb) {
        this.masterdataService = masterdataService;
        this.router = router;
        this.activeAouter = activeAouter;
        this.alertService = alertService;
        this.fb = fb;
        this.newRole = {};
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    EditUniversityComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['masterId'];
        console.log(this.id);
        this.getDetail(this.id);
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    EditUniversityComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.masterdataService.universityById(id).subscribe(function (response) {
            var userData = response['data'][0];
            _this.userForm.patchValue({
                name: userData.name,
            });
        });
    };
    Object.defineProperty(EditUniversityComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditUniversityComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.loading = true;
        this.masterdataService.updateUniversity(this.userForm.value, this.id)
            .subscribe(function (data) {
            if (data['status'] == '200') {
                _this.alertService.pop('success', "Data updated successfully.");
                _this.router.navigate(['masterdata/university']);
            }
            else if (data['status'] == '409') {
                _this.alertService.pop('error', "Data already exists.");
                _this.loading = false;
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
    EditUniversityComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    EditUniversityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-university',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-university.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/edit/edit-university.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-university.component.scss */ "./src/app/pages/masterdata/university/edit/edit-university.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditUniversityComponent);
    return EditUniversityComponent;
}());



/***/ }),

/***/ "./src/app/pages/masterdata/university/list/list-university.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/list/list-university.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hc3RlcmRhdGEvdW5pdmVyc2l0eS9saXN0L2xpc3QtdW5pdmVyc2l0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/masterdata/university/list/list-university.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masterdata/university/list/list-university.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListUniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUniversityComponent", function() { return ListUniversityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/masterdata.service */ "./src/app/services/masterdata.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../../pipes/orderBy"
var ListUniversityComponent = /** @class */ (function () {
    function ListUniversityComponent(masterdataService, router, alertService) {
        this.masterdataService = masterdataService;
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
    ListUniversityComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListUniversityComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListUniversityComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListUniversityComponent.prototype.getAll = function () {
        var _this = this;
        this.masterdataService.getAll('university').subscribe(function (response) {
            _this.masterdata = response['data'];
            _this.config.totalItems = response['data'].length;
        });
    };
    ListUniversityComponent.prototype.changeStatus = function (masterdata) {
        var _this = this;
        console.log(masterdata);
        if (masterdata.status == "0") {
            masterdata.status = "1";
        }
        else {
            masterdata.status = "0";
        }
        this.masterdataService.updateStatus(masterdata, 'university')
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Status updated successfully');
            _this.router.navigate(['/masterdata/university']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('user updated');
    };
    ListUniversityComponent.ctorParameters = function () { return [
        { type: _services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListUniversityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-university',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-university.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masterdata/university/list/list-university.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-university.component.scss */ "./src/app/pages/masterdata/university/list/list-university.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_masterdata_service__WEBPACK_IMPORTED_MODULE_2__["MasterdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListUniversityComponent);
    return ListUniversityComponent;
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



/***/ }),

/***/ "./src/app/services/masterdata.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/masterdata.service.ts ***!
  \************************************************/
/*! exports provided: MasterdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterdataService", function() { return MasterdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MasterdataService = /** @class */ (function () {
    function MasterdataService(http) {
        this.http = http;
    }
    MasterdataService.prototype.getAll = function (type) {
        if (type === void 0) { type = 'school'; }
        if (type == 'school') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_school');
        }
        else if (type == 'university') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_university');
        }
        else if (type == 'quiz') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_quiz');
        }
        else if (type == 'subquiz') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_sub_quiz');
        }
        else if (type == 'subject') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_subject');
        }
        else if (type == 'district') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_district');
        }
        else if (type == 'country') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/get_country');
        }
    };
    MasterdataService.prototype.updateStatus = function (masterdata, type) {
        if (type === void 0) { type = ''; }
        if (type == 'school') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_school_status', masterdata);
        }
        else if (type == 'university') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_university_status', masterdata);
        }
        else if (type == 'quiz') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_quiz_status', masterdata);
        }
        else if (type == 'subquiz') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_sub_quiz_status', masterdata);
        }
        else if (type == 'subject') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_subject_status', masterdata);
        }
        else if (type == 'district') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_district_status', masterdata);
        }
        else if (type == 'country') {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_country_status', masterdata);
        }
    };
    //school
    MasterdataService.prototype.addSchool = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_school', masterdata);
    };
    MasterdataService.prototype.schoolById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/school_by_id/' + id);
    };
    MasterdataService.prototype.updateSchool = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_school/' + id, masterdata);
    };
    //university
    MasterdataService.prototype.addUniversity = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_university', masterdata);
    };
    MasterdataService.prototype.universityById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/university_by_id/' + id);
    };
    MasterdataService.prototype.updateUniversity = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_university/' + id, masterdata);
    };
    //quiz
    MasterdataService.prototype.addQuiz = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_quiz', masterdata);
    };
    MasterdataService.prototype.quizById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/quiz_by_id/' + id);
    };
    MasterdataService.prototype.updateQuiz = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_quiz/' + id, masterdata);
    };
    //subquiz
    MasterdataService.prototype.addSubQuiz = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_sub_quiz', masterdata);
    };
    MasterdataService.prototype.subQuizById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/sub_quiz_by_id/' + id);
    };
    MasterdataService.prototype.updateSubQuiz = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_sub_quiz/' + id, masterdata);
    };
    //subject
    MasterdataService.prototype.addSubject = function (masterdata) {
        //console.log(masterdata);
        var formData = new FormData();
        formData.append("name", masterdata.name);
        formData.append("icon", masterdata.icon);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_subject', masterdata);
    };
    MasterdataService.prototype.subjectById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/subject_by_id/' + id);
    };
    MasterdataService.prototype.updateSubject = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_subject/' + id, masterdata);
    };
    //district
    MasterdataService.prototype.addDistrict = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_district', masterdata);
    };
    MasterdataService.prototype.districtById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/district_by_id/' + id);
    };
    MasterdataService.prototype.updateDistrict = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_district/' + id, masterdata);
    };
    //country
    MasterdataService.prototype.addCountry = function (masterdata) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/add_country', masterdata);
    };
    MasterdataService.prototype.countryById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/country_by_id/' + id);
    };
    MasterdataService.prototype.updateCountry = function (masterdata, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'masterdata/update_country/' + id, masterdata);
    };
    MasterdataService.prototype.delete = function (id) {
        //return this.http.delete(environment.apiUrl+'user/delete/' + id);
    };
    MasterdataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MasterdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MasterdataService);
    return MasterdataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-masterdata-masterdata-module.js.map