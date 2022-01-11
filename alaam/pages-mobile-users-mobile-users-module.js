(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mobile-users-mobile-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-users/list/list-mobile-users.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-users/list/list-mobile-users.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n\r\n    <div class=\"card\">\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"dt-responsive table-responsive11\">\r\n          <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\"> </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n                  <label>\r\n                    Search\r\n                    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('name')\"> Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', 'fa-sort-asc': (column == 'name' && isDesc), 'fa-sort-desc': (column == 'name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('email')\">Email<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'email', 'fa-sort-asc': (column == 'email' && isDesc), 'fa-sort-desc': (column == 'email' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('phone_number')\">Phone<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'phone_number', 'fa-sort-asc': (column == 'phone_number' && isDesc), 'fa-sort-desc': (column == 'phone_number' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('user_type')\">User Type<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'user_type', 'fa-sort-asc': (column == 'user_type' && isDesc), 'fa-sort-desc': (column == 'user_type' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n                        <th style=\"width: 30px;\">Actions</th>\r\n                    </thead>\r\n                    <tbody>\r\n\r\n\r\n                      <tr role=\"row\" *ngFor=\"let data of users | filter:term | orderBy: {property: column, direction: direction} | paginate: { itemsPerPage: config.itemsPerPage, currentPage: p } let index =index;\r\n             let isOdd=odd;\r\n             let isEven=even\"\r\n                          [class.odd]=\"isOdd\"\r\n                          [class.even]=\"isEven\">\r\n                        <td class=\"sorting_1\">{{ data.first_name+' '+data.last_name | titlecase }}</td>\r\n                        <td>{{ data.email }}</td>\r\n                        <td>{{ data.phone_number }}</td>\r\n                        <td>{{ data.user_type }}</td>\r\n                        <td>\r\n                          <button class=\"btn allam-btn-green text-white\" (click)=\"openPopup(data)\"> Preview </button>\r\n                        </td>\r\n                      </tr>\r\n\r\n                    </tbody>\r\n\r\n                  </table>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">\r\n                  Show Entries\r\n                  <label>\r\n                    <select [(ngModel)]=\"config.itemsPerPage\" name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control inpuitemsPerPaget-sm\">\r\n                      <option value=\"5\">5</option>\r\n                      <option value=\"10\">10</option>\r\n                      <option value=\"25\">25</option>\r\n                      <option value=\"50\">50</option>\r\n                      <option value=\"100\">100</option>\r\n                    </select>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <ul class=\"pagination\">\r\n                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- The Modal -->\r\n<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">User Details:</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n        <table class=\"table table-striped\">\r\n          <tr>\r\n            <td><label>User Name :</label> {{userDetail.username}} </td>\r\n            <td><label>Name :</label> {{userDetail.first_name + ' ' + userDetail.last_name}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Gender :</label> {{userDetail.gender}} </td>\r\n            <td><label>Email :</label> {{userDetail.email}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Mobile :</label> {{userDetail.phone_number}}</td>\r\n            <td><label>Country :</label> {{userDetail.country}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>City :</label> {{userDetail.city}} </td>\r\n            <td><label>Nationality :</label> {{userDetail.nationality}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Region :</label> {{userDetail.region}} </td>\r\n            <td><label>Education :</label> {{userDetail.education}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Age :</label> {{userDetail.age}} </td>\r\n            <td><label>School :</label> {{userDetail.school}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>University :</label> {{userDetail.university}} </td>\r\n            <td><label>Website :</label> {{userDetail.website}} </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/mobile-users/list/list-mobile-users.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/mobile-users/list/list-mobile-users.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n\n#autofill_filter label {\n  width: 300px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9iaWxlLXVzZXJzL2xpc3QvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXG1vYmlsZS11c2Vyc1xcbGlzdFxcbGlzdC1tb2JpbGUtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vYmlsZS11c2Vycy9saXN0L2xpc3QtbW9iaWxlLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQXdCLFlBQUE7RUFBYyxtQkFBQTtBQ0V0QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vYmlsZS11c2Vycy9saXN0L2xpc3QtbW9iaWxlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2F1dG9maWxsX2ZpbHRlciBsYWJlbCB7d2lkdGg6IDMwMHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuXHJcbiIsImRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jYXV0b2ZpbGxfZmlsdGVyIGxhYmVsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mobile-users/list/list-mobile-users.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/mobile-users/list/list-mobile-users.component.ts ***!
  \************************************************************************/
/*! exports provided: ListMobileUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMobileUsersComponent", function() { return ListMobileUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../pipes/orderBy"
var ListMobileUsersComponent = /** @class */ (function () {
    function ListMobileUsersComponent(userService, router, alertService) {
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
    ListMobileUsersComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    ListMobileUsersComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListMobileUsersComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListMobileUsersComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getMobileUsers().subscribe(function (users) {
            _this.users = users['data'];
            _this.config.totalItems = users['data'].length;
            debugger;
            _this.userDetail = _this.users[0];
        });
    };
    ListMobileUsersComponent.prototype.openPopup = function (detail) {
        debugger;
        this.showModal = true;
        this.userDetail = detail;
    };
    ListMobileUsersComponent.prototype.closePopup = function () {
        this.showModal = false;
        this.userDetail = this.users[0];
    };
    ListMobileUsersComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListMobileUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-mobile-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mobile-users/list/list-mobile-users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-mobile-users.component.scss */ "./src/app/pages/mobile-users/list/list-mobile-users.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListMobileUsersComponent);
    return ListMobileUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/mobile-users/mobile-users-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/mobile-users/mobile-users-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MobileUsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileUsersRoutingModule", function() { return MobileUsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_mobile_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-mobile-users.component */ "./src/app/pages/mobile-users/list/list-mobile-users.component.ts");




var routes = [
    {
        path: '',
        component: _list_list_mobile_users_component__WEBPACK_IMPORTED_MODULE_3__["ListMobileUsersComponent"],
        data: {
            breadcrumb: 'mobile-users',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var MobileUsersRoutingModule = /** @class */ (function () {
    function MobileUsersRoutingModule() {
    }
    MobileUsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MobileUsersRoutingModule);
    return MobileUsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/mobile-users/mobile-users.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mobile-users/mobile-users.module.ts ***!
  \***********************************************************/
/*! exports provided: MobileUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileUsersModule", function() { return MobileUsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mobile_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-users-routing.module */ "./src/app/pages/mobile-users/mobile-users-routing.module.ts");
/* harmony import */ var _list_list_mobile_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-mobile-users.component */ "./src/app/pages/mobile-users/list/list-mobile-users.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








//import { BrowserModule } from '@angular/platform-browser';



var MobileUsersModule = /** @class */ (function () {
    function MobileUsersModule() {
    }
    MobileUsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _mobile_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["MobileUsersRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
            ],
            declarations: [
                _list_list_mobile_users_component__WEBPACK_IMPORTED_MODULE_4__["ListMobileUsersComponent"]
            ]
        })
    ], MobileUsersModule);
    return MobileUsersModule;
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
//# sourceMappingURL=pages-mobile-users-mobile-users-module.js.map