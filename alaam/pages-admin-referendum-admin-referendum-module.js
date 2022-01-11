(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-referendum-admin-referendum-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/admin-referendum.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/admin-referendum.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3 class=\"text-right txt-primary\">Admin referendum </h3></div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <section>\r\n          <div class=\"form-check form-check-inline\">\r\n            <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"surveyType\" id=\"surveyType-1\" (change)=\"handleTypeChange($event)\" [(ngModel)]=\"surveyType\" value=\"0\"  > All         \r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n  \r\n          <div class=\"form-check form-check-inline\">\r\n            <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"surveyType\" id=\"surveyType-2\" (change)=\"handleTypeChange($event)\" [(ngModel)]=\"surveyType\" value=\"1\" > Public\r\n              <span class=\"checkmark\"></span>   \r\n            </label>\r\n          </div>\r\n  \r\n          <div class=\"form-check form-check-inline\">\r\n            <label class=\"radio-box\">\r\n              <input type=\"radio\" name=\"surveyType\" id=\"surveyType-3\" (change)=\"handleTypeChange($event)\" [(ngModel)]=\"surveyType\" value=\"2\" > Private\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n        </section>\r\n        <div class=\"dt-responsive table-responsive11\">\r\n          <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n            <div class=\"sv_main sv_frame sv_default_css\">\r\n              <div class=\"sv_custom_header\"></div>\r\n              <div class=\"sv_container\">\r\n                <div class=\"sv_body\">\r\n                  <div id=\"surveys-list\" class=\"surveys-list\">\r\n                    <table class=\"table table-striped\">\r\n                      <thead>\r\n                        <th style=\"width:20%;\">Actions</th>\r\n                        <th style=\"width:40%;\">Advertiser Name</th>\r\n                        <th style=\"width:40%;\">Referendum Title</th>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let survey of filteredSurveys\">                         \r\n                          <td style=\"width:20%; text-align: right;\"> \r\n                            <a class=\"btn allam-btn allam-btn-green text-white\" (click)=\"openPreview(survey.id, survey.IsApproved)\"\r\n                              >Preview</a>\r\n                            <a *ngIf=\"!survey.IsApproved\"\r\n                              class=\"btn allam-btn allam-btn-green text-white\" style=\"width: 83px;\" (click)=\"changeStatus(survey.id)\"\r\n                              >Approve</a>\r\n                            <a *ngIf=\"survey.IsApproved\"\r\n                            class=\"btn allam-btn btn-warning text-white\" (click)=\"changeStatus(survey.id)\"\r\n                            >Un-Approve</a> \r\n                          </td>\r\n                          <td style=\"width:40%;\">{{survey.advertiser}}</td>\r\n                          <td style=\"width:40%;\">{{survey.name}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/preview-referendum.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/preview-referendum.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\" id=\"survey-viewer-container\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\">\r\n      <div class=\"col-md-12\">\r\n      <h3 class=\"text-left txt-primary\" style=\"float: left;\"><span *ngIf=\"userType=='admin'\">Admin </span>Referendum Preview</h3>\r\n      <div *ngIf=\"userType=='admin'\" style=\"float: right; position: relative;\">\r\n        <a class=\"btn allam-btn btn-warning text-white\" (click)=\"goBack()\"\r\n        > Back</a>&nbsp;\r\n      <a *ngIf=\"!isApprove\"\r\n        class=\"btn allam-btn allam-btn-green text-white\" (click)=\"changeStatus()\"\r\n        >Approve</a>\r\n      <a *ngIf=\"isApprove\"\r\n      class=\"btn allam-btn btn-warning text-white\" (click)=\"changeStatus()\"\r\n      >Un-Approve</a> \r\n      </div>\r\n      <div *ngIf=\"userType!='admin'\" style=\"float: right; position: relative;\">\r\n        <a class=\"btn allam-btn btn-warning text-white\" (click)=\"goAdvertiserBack()\"\r\n        > Back</a>&nbsp;\r\n      </div>\r\n    </div></div>\r\n    <hr />\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"dt-responsive table-responsive11\">\r\n          <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n            <!-- survey create wrap-->\r\n            <div class=\"sv_main sv_frame \">\r\n              <h2 class=\" \"> {{surveyName }}</h2>\r\n              <div class=\"sv_container\">\r\n               \r\n                <div class=\"sv_body\" style=\"border-top: 0px;\">\r\n                  <preview-survey [json]=\"json\"></preview-survey>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/admin-referendum/admin-referendum-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin-referendum/admin-referendum-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminReferendumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReferendumRoutingModule", function() { return AdminReferendumRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_referendum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-referendum.component */ "./src/app/pages/admin-referendum/admin-referendum.component.ts");
/* harmony import */ var _preview_referendum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview-referendum.component */ "./src/app/pages/admin-referendum/preview-referendum.component.ts");





var routes = [
    {
        path: '',
        component: _admin_referendum_component__WEBPACK_IMPORTED_MODULE_3__["AdminReferendumComponent"],
        data: {
            title: 'Admin Referendum Component',
            breadcrumb: 'Admin Referendum',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'preview/:id/:status/:usertype',
        component: _preview_referendum_component__WEBPACK_IMPORTED_MODULE_4__["PreviewReferendumComponent"],
        data: {
            title: 'Preview Referendum Component',
            breadcrumb: 'Preview Admin Referendum',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var AdminReferendumRoutingModule = /** @class */ (function () {
    function AdminReferendumRoutingModule() {
    }
    AdminReferendumRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminReferendumRoutingModule);
    return AdminReferendumRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-referendum/admin-referendum.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-referendum/admin-referendum.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#surveys-list td a:first-child {\n  margin-left: 10px;\n}\n\n.row.allam-wrap .checkmark {\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcmVmZXJlbmR1bS9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW4tcmVmZXJlbmR1bVxcYWRtaW4tcmVmZXJlbmR1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4tcmVmZXJlbmR1bS9hZG1pbi1yZWZlcmVuZHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlDLGlCQUFBO0FDRWpDOztBRERBO0VBQTRCLG1CQUFBO0FDSzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tcmVmZXJlbmR1bS9hZG1pbi1yZWZlcmVuZHVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1cnZleXMtbGlzdCB0ZCBhOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDEwcHg7fVxyXG4ucm93LmFsbGFtLXdyYXAgLmNoZWNrbWFyayB7dG9wOjBweCFpbXBvcnRhbnQ7fVxyXG5cclxuXHJcblxyXG4iLCIjc3VydmV5cy1saXN0IHRkIGE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJvdy5hbGxhbS13cmFwIC5jaGVja21hcmsge1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/admin-referendum/admin-referendum.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-referendum/admin-referendum.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminReferendumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReferendumComponent", function() { return AdminReferendumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var AdminReferendumComponent = /** @class */ (function () {
    function AdminReferendumComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.availableSurveys = [];
        this.filteredSurveys = [];
        this.openPreview = function (id, status) {
            this.router.navigate(['/admin-referendum/preview/' + id + '/' + status + '/admin']);
        };
        this.changeStatus = function (id) {
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", apiUrl + "survay/changeSurveyStatus?accessKey=" + this.accessKey + "&id=" + id);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                var result = xhr.response ? JSON.parse(xhr.response) : null;
                self.loadSurveys();
            };
            xhr.send();
        };
        this.loadSurveys = function () {
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", apiUrl + "survay/getAdminSurveys?accessKey=" + this.accessKey);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                var result = xhr.response ? JSON.parse(xhr.response) : {};
                self.availableSurveys = self.filteredSurveys =
                    Object.keys(result).map(function (key) {
                        return {
                            id: key,
                            name: result[key].name || "",
                            advertiser: result[key].username || "",
                            IsApproved: result[key].is_approved || false,
                            is_public: result[key].is_public || false,
                            survey: result[key].json || result[key]
                        };
                    });
            };
            xhr.send();
        };
        this.surveyType = "0";
    }
    AdminReferendumComponent.prototype.ngOnInit = function () {
        this.loadSurveys();
    };
    AdminReferendumComponent.prototype.handleTypeChange = function (evt) {
        var target = evt.target;
        debugger;
        if (target.value == "0") {
            this.filteredSurveys = this.availableSurveys;
        }
        else if (target.value == "1") {
            this.filteredSurveys = this.availableSurveys.filter(function (survey) { return survey.is_public == true; });
        }
        else {
            this.filteredSurveys = this.availableSurveys.filter(function (survey) { return survey.is_public == false; });
        }
    };
    AdminReferendumComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    AdminReferendumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-referendum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-referendum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/admin-referendum.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-referendum.component.scss */ "./src/app/pages/admin-referendum/admin-referendum.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], AdminReferendumComponent);
    return AdminReferendumComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-referendum/admin-referendum.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin-referendum/admin-referendum.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminReferendumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReferendumModule", function() { return AdminReferendumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_referendum_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-referendum-routing.module */ "./src/app/pages/admin-referendum/admin-referendum-routing.module.ts");
/* harmony import */ var _admin_referendum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-referendum.component */ "./src/app/pages/admin-referendum/admin-referendum.component.ts");
/* harmony import */ var _preview_referendum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-referendum.component */ "./src/app/pages/admin-referendum/preview-referendum.component.ts");
/* harmony import */ var _preview_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview-survey.component */ "./src/app/pages/admin-referendum/preview-survey.component.ts");








var AdminReferendumModule = /** @class */ (function () {
    function AdminReferendumModule() {
    }
    AdminReferendumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_referendum_component__WEBPACK_IMPORTED_MODULE_5__["AdminReferendumComponent"], _preview_referendum_component__WEBPACK_IMPORTED_MODULE_6__["PreviewReferendumComponent"], _preview_survey_component__WEBPACK_IMPORTED_MODULE_7__["PreviewSurveyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_referendum_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminReferendumRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], AdminReferendumModule);
    return AdminReferendumModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-referendum/preview-referendum.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin-referendum/preview-referendum.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sv_main.sv_frame .sv_container {\n  max-width: 100% !important;\n  padding: 0 !important;\n}\n\n#survey-viewer-container {\n  margin-top: 15px;\n  direction: rtl;\n}\n\n#survey-viewer-container .sv_main.sv_default_css .sv_body {\n  border-top: 0px !important;\n}\n\nh2 {\n  padding: 15px 15px;\n  margin-bottom: 0px;\n  color: #4d4d4d;\n  font-size: 28px !important;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcmVmZXJlbmR1bS9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW4tcmVmZXJlbmR1bVxccHJldmlldy1yZWZlcmVuZHVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1yZWZlcmVuZHVtL3ByZXZpZXctcmVmZXJlbmR1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQywwQkFBQTtFQUEyQixxQkFBQTtBQ0c1RDs7QURGQTtFQUEyQixnQkFBQTtFQUFpQixjQUFBO0FDTzVDOztBRE5BO0VBQTRELDBCQUFBO0FDVTVEOztBRFBBO0VBQ0ksa0JBQUE7RUFBb0Isa0JBQUE7RUFDcEIsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXJlZmVyZW5kdW0vcHJldmlldy1yZWZlcmVuZHVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2X21haW4uc3ZfZnJhbWUgLnN2X2NvbnRhaW5lciB7bWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDsgcGFkZGluZzogMCFpbXBvcnRhbnQ7fVxyXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgeyBtYXJnaW4tdG9wOjE1cHg7IGRpcmVjdGlvbjogcnRsO31cclxuI3N1cnZleS12aWV3ZXItY29udGFpbmVyIC5zdl9tYWluLnN2X2RlZmF1bHRfY3NzIC5zdl9ib2R5IHsgYm9yZGVyLXRvcDogMHB4IWltcG9ydGFudDsgfVxyXG5cclxuXHJcbmgyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDsgbWFyZ2luLWJvdHRvbTogMHB4OyAgXHJcbiAgICBjb2xvcjogIzRkNGQ0ZDtcclxuICAgIGZvbnQtc2l6ZTogMjhweCFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnN2X21haW4uc3ZfZnJhbWUgLnN2X2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbiNzdXJ2ZXktdmlld2VyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgLnN2X21haW4uc3ZfZGVmYXVsdF9jc3MgLnN2X2JvZHkge1xuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin-referendum/preview-referendum.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-referendum/preview-referendum.component.ts ***!
  \************************************************************************/
/*! exports provided: PreviewReferendumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewReferendumComponent", function() { return PreviewReferendumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var PreviewReferendumComponent = /** @class */ (function () {
    function PreviewReferendumComponent(router, activeroute, alertService) {
        this.router = router;
        this.activeroute = activeroute;
        this.alertService = alertService;
        this.availableSurveys = [];
        this.accessKey = "";
        this.json = "{}";
        this.surveyId = 0;
        this.surveyName = "";
        this.userType = "";
        this.isApprove = false;
        this.goBack = function (id) {
            this.router.navigate(['/admin-referendum']);
        };
        this.goAdvertiserBack = function (id) {
            this.router.navigate(['/referendum']);
        };
        this.changeStatus = function () {
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", apiUrl + "survay/changeSurveyStatus?accessKey=" + this.accessKey + "&id=" + this.surveyId);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function () {
                var result = xhr.response ? JSON.parse(xhr.response) : null;
                self.isApprove = !self.isApprove;
            };
            xhr.send();
        };
    }
    PreviewReferendumComponent.prototype.ngOnInit = function () {
        this.surveyId = this.activeroute.snapshot.params['id'];
        this.isApprove = (this.activeroute.snapshot.params['status'] == "true");
        this.userType = this.activeroute.snapshot.params['usertype'];
        this.getSurvey(this.surveyId);
        this.getSurveyName(this.surveyId);
    };
    PreviewReferendumComponent.prototype.getSurveyName = function (surveyId) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl + "survay/getSurveyName?surveyId=" + this.surveyId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : {};
            //console.log(result);
            self.surveyName = result[0];
        };
        xhr.send();
    };
    PreviewReferendumComponent.prototype.getSurvey = function (surveyId) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl + "survay/getSurvey?surveyId=" + this.surveyId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : {};
            self.json = result;
        };
        xhr.send();
    };
    PreviewReferendumComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    PreviewReferendumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'preview-referendum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-referendum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-referendum/preview-referendum.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-referendum.component.scss */ "./src/app/pages/admin-referendum/preview-referendum.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], PreviewReferendumComponent);
    return PreviewReferendumComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-referendum/preview-survey.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-referendum/preview-survey.component.ts ***!
  \********************************************************************/
/*! exports provided: PreviewSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewSurveyComponent", function() { return PreviewSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__);




surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jquerybarrating"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jqueryuidatepicker"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
survey_angular__WEBPACK_IMPORTED_MODULE_2__["StylesManager"].applyTheme("default");
var PreviewSurveyComponent = /** @class */ (function () {
    function PreviewSurveyComponent() {
    }
    Object.defineProperty(PreviewSurveyComponent.prototype, "json", {
        get: function () {
            return this._json;
        },
        set: function (value) {
            this._json = value;
            if (typeof (value) == "object" && Object.keys(value).length > 0) {
                this.surveyView();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    PreviewSurveyComponent.prototype.ngOnInit = function () {
    };
    PreviewSurveyComponent.prototype.surveyView = function () {
        var _this = this;
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](this.json);
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement("button");
            btn.className = "btn btn-info btn-xs";
            btn.innerHTML = "More Info";
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector("h5");
            var span = document.createElement("span");
            span.innerHTML = "  ";
            header.appendChild(span);
            header.appendChild(btn);
        });
        surveyModel.onComplete.add(function (result, options) {
            _this.result = result.data;
        });
        surveyModel.mode = 'display';
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render("surveyElement", { model: surveyModel });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewSurveyComponent.prototype, "_json", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], PreviewSurveyComponent.prototype, "json", null);
    PreviewSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: "preview-survey",
            template: "<div class=\"survey-container contentcontainer codecontainer\">\n    <div id=\"surveyElement\"></div>\n  </div>",
        })
    ], PreviewSurveyComponent);
    return PreviewSurveyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-referendum-admin-referendum-module.js.map