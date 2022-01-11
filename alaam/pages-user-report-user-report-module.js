(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-report-user-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-report/user-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-report/user-report.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <!-- {{filteredStudents | json}} -->\n            <div class=\"dt-responsive table-responsive11\" >\n                <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\">\n                            <div id=\"autofill_filter\" class=\"dataTables_filter\">\n                                <label class=\"example-input-wrapper\">\n                                    Date <br/> \n                                    <input placeholder=\"Choose Date\"\n                                        [(ngModel)]=\"created_at\" [max]=\"max\" (ngModelChange)=\"filterCatch('created_at', created_at)\"\n                                        [owlDateTimeTrigger]=\"dt1\" [owlDateTime]=\"dt1\">\n                                        <span class=\"example-trigger\" [owlDateTimeTrigger]=\"dt1\">\n                                            <i class=\"fas fa-calendar-alt\"></i>\n                                        </span>\n                                    <owl-date-time [showSecondsTimer]=\"'true'\" [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                                </label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\">\n                            <div id=\"autofill_filter\" class=\"dataTables_filter\">\n                                <label>Competition Type\n                                    <select #mySelect class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"filters.competitionType\" (change)=\"filterCatch( 'competitionType', filters.competitionType)\" required >\n                                         <option *ngFor=\"let option of competitionOption\" [value]=\"option.id\" [selected]=\"competitionOption==option.id\" >{{option.title}}</option>\n                                    </select>\n                                </label>\n                            </div>\n                            <button class=\"btn btn-primary\" *ngIf=\"competitionType\" (click)=\"removeFilter('competitionType')\">\n                                Clear\n                            </button>\n                        </div>\n                        \n                        <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\">\n                            <div id=\"autofill_filter\" class=\"dataTables_filter\">\n                                <label>Competition Name\n                                    <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.competitioName\"  (ngModelChange)=\"filterMatch('competitionId' , audienceFilter.competitioName)\" required >\n                                        <option value=\"\" [selected]=\"true\">--Select--</option>\n                                        <option *ngFor=\"let competition of competitionSelect\" [value]=\"competition.id\" [selected]=\"competitionSelect==competition.id\" >{{competition.compitition_name}}</option>\n                                   </select>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            \n            </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\">\n        <div id=\"autofill_filter\" class=\"dataTables_filter\">\n            <label>Action Type</label>\n            <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.action_flag\"  (change)=\"filterMatch('action_flag', audienceFilter.action_flag)\" required >\n                <option value=\"\" [selected]=\"true\">--Select--</option>\n                <option *ngFor=\"let option of actionOption\" [value]=\"option.id\" [selected]=\"actionOption==option.id\" >{{option.title}}</option>\n            </select> \n        </div>\n        <button class=\"btn btn-primary\" *ngIf=\"action_flag\" (click)=\"removeFilter('action_flag')\">\n            Clear\n        </button>\n    </div> --> \n    <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\" *ngIf=\"audienceFilter.action_flag == 0\"> \n        <div id=\"autofill_filter\" class=\"dataTables_filter\">\n            <label>Gender</label>\n            <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.action_value\"  (change)=\"filterMatch('action_value', audienceFilter.action_value)\" required >\n                <option *ngFor=\"let option of actionValueOption\" [value]=\"option.id\" [selected]=\"actionValueOption==option.id\" >{{option.title}}</option>\n            </select> \n        </div>\n        <button class=\"btn btn-primary\" *ngIf=\"action_value\" (click)=\"removeFilter('action_value')\">\n            Clear\n        </button>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\" *ngIf=\"audienceFilter.action_flag == 1\"> \n        <div id=\"autofill_filter\" class=\"dataTables_filter\">\n            <label>Age</label>\n            <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.action_value\"  (change)=\"filterMatch('action_value', audienceFilter.action_value)\" required >\n                <option value=\"6-16\">6-16</option>\n                <option value=\"17-27\" >17-27</option>\n                <option value=\"28-38\" >28-38</option>\n                <option value=\"39-49\" >39-49</option>\n                <option value=\"50-60\" >50-60</option>\n                <option value=\"61-71\" >61-71</option>\n                <option value=\"72-82\" >72-82</option>\n            </select> \n        </div>\n        <button class=\"btn btn-primary\" *ngIf=\"action_value\" (click)=\"removeFilter('action_value')\">\n            Clear\n        </button>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\" *ngIf=\"audienceFilter.action_flag == 2\"> \n        <div id=\"autofill_filter\" class=\"dataTables_filter\">\n            <label>Country</label>\n            <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.action_value\"  (change)=\"filterMatch('action_value', audienceFilter.action_value)\" required >\n                <option *ngFor=\"let option of countryData\" [value]=\"option.id\" [selected]=\"actionValueOption==option.id\" >{{option.name}}</option>\n            </select> \n        </div>\n        <button class=\"btn btn-primary\" *ngIf=\"action_value\" (click)=\"removeFilter('action_value')\">\n            Clear\n        </button>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 mb-3\" *ngIf=\"audienceFilter.action_flag == 3\"> \n        <div id=\"autofill_filter\" class=\"dataTables_filter\">\n            <label>Rank</label>\n            <select class=\"form-control select2\" style=\"width: 100%;\" [(ngModel)]=\"audienceFilter.rank\"  (change)=\"filterMatch('rank', audienceFilter.rank)\" required >\n                <option value=\"asc\">Ascending</option>\n                <option value=\"desc\" >Descending</option>\n            </select> \n        </div>\n        <button class=\"btn btn-primary\" *ngIf=\"rank\" (click)=\"removeFilter('rank')\">\n            Clear\n        </button>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-12\">\n    <div class=\"dt-responsive table-responsive\">\n    <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\n    <thead>\n    <tr role=\"row\">\n    <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th> -->\n\n    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('full_name')\">Full Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'full_name', 'fa-sort-asc': (column == 'full_name' && isDesc), 'fa-sort-desc': (column == 'full_name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('user_name')\">User Name<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'user_name', 'fa-sort-asc': (column == 'user_name' && isDesc), 'fa-sort-desc': (column == 'user_name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('country')\">Country<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'country', 'fa-sort-asc': (column == 'country' && isDesc), 'fa-sort-desc': (column == 'country' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('nationality')\">Nationality<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'nationality', 'fa-sort-asc': (column == 'nationality' && isDesc), 'fa-sort-desc': (column == 'nationality' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n\n    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('email')\">Email<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'email', 'fa-sort-asc': (column == 'email' && isDesc), 'fa-sort-desc': (column == 'email' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n\n    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('user_mobile')\">Phone Number<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'user_mobile', 'fa-sort-asc': (column == 'user_mobile' && isDesc), 'fa-sort-desc': (column == 'user_mobile' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n\n    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('rank')\">Rank<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'rank', 'fa-sort-asc': (column == 'rank' && isDesc), 'fa-sort-desc': (column == 'rank' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n\n    <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('end_time')\">End Time<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'end_time', 'fa-sort-asc': (column == 'end_time' && isDesc), 'fa-sort-desc': (column == 'end_time' && !isDesc) }\" aria-hidden=\"true\"> </i></th> -->\n\n    <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\n\n    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> </th> -->\n    </thead>\n    <tbody>\n\n\n    <tr role=\"row\" *ngFor=\"let data of dailyList | filter: term : term2 | orderBy: {property: column, direction: direction} | paginate : {\n        itemsPerPage: pageSize,\n        currentPage: page,\n        totalItems: count\n    }; let index =index;\n        let isOdd=odd;\n        let isEven=even\" \n\n        [class.odd]=\"isOdd\" \n        [class.even]=\"isEven\" > <!-- {{ data | json }} -->\n        <!-- <td class=\"\">{{ data.id }}</td> -->\n        <td class=\"sorting_1\">{{ data.full_name }} </td>\n        <td class=\"\">{{ data.user_name }}</td>\n        <td class=\"\">{{ data.country }}</td>\n        <td class=\"\">{{ data.nationality }}</td>\n        <td class=\"\">{{ data.user_email }}</td>\n        <td class=\"\">{{ data.user_mobile }}</td>\n        <td class=\"\">{{ data.rank }}</td>\n        <!--<td> {{ data.start_time }}   {{ data.total_times | date:\"HH:mm:ss\":setOffset}} </td> -->\n        <!-- <td>{{ data.end_time }}</td> -->\n    \n    </tr>\n\n    </tbody>\n\n    </table>\n    </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Show Entries\n        <label>\n        <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\n            <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\n                {{ size }}\n            </option>\n        </select>\n        </label>\n    </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6\">\n    <pagination-controls\n        previousLabel=\"Prev\"\n        nextLabel=\"Next\"\n        responsive=\"true\"\n        class=\"pagination\"\n        (pageChange)=\"handlePageChange($event)\"\n        ></pagination-controls>   \n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/user-report/user-report-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-report/user-report-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportRoutingModule", function() { return UserReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-report.component */ "./src/app/pages/user-report/user-report.component.ts");




var routes = [
    {
        path: '',
        component: _user_report_component__WEBPACK_IMPORTED_MODULE_3__["UserReportComponent"],
        data: {
            breadcrumb: 'UserReport',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var UserReportRoutingModule = /** @class */ (function () {
    function UserReportRoutingModule() {
    }
    UserReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserReportRoutingModule);
    return UserReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/user-report/user-report.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-report/user-report.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcmVwb3J0L3VzZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user-report/user-report.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user-report/user-report.component.ts ***!
  \************************************************************/
/*! exports provided: UserReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportComponent", function() { return UserReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/leaderboard.service */ "./src/app/services/leaderboard.service.ts");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var UserReportComponent = /** @class */ (function () {
    function UserReportComponent(router, activatedRoute, dataService, leaderboardService, alertService, datePipe, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.leaderboardService = leaderboardService;
        this.alertService = alertService;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dailyList = [];
        this.filteredStudents = [];
        this.countryData = [];
        // filter by value
        this.filters = { gender: "both", competitionType: "daily_competition", created_at: new Date() };
        this.audienceFilter = { gender: "both", competitionType: "daily_competition", created_at: new Date() };
        this.competitionSelect = [];
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 25, 50, 100];
        this.invalidMoment = new Date().toISOString();
        //public min = new Date(2021, 1, 3, 10, 30);
        this.min = new Date().toISOString();
        this.max = new Date();
        this.now = new Date();
        this.created_at = new Date();
        this.competitionOption = [{ "id": "daily_competition", "title": "Daily Competition" }, { "id": "special_competition", "title": "Special Competition" }, { "id": "league_competition", "title": "League Competition" }];
        this.actionOption = [{ "id": "0", "title": "Gender" }, { "id": "1", "title": "Age" }, { "id": "2", "title": "Country" }, { "id": "3", "title": "Rank" }];
        this.actionValueOption = [{ "id": "Both", "title": "Both" }, { "id": "Male", "title": "Male" }, { "id": "Female", "title": "Female" }];
    }
    ;
    UserReportComponent.prototype.ngOnInit = function () {
        this.term1 = '';
        this.term2 = '0';
        this.term = '';
        this.getTimeZone();
        this.getCountry();
        this.getCompetitionOption('daily_competition');
    };
    UserReportComponent.prototype.getTimeZone = function () {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        this.setOffset = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
        console.log(this.setOffset);
    };
    UserReportComponent.prototype.getCountry = function () {
        var _this = this;
        this.dataService.getCountry().subscribe(function (broadcaster) {
            _this.countryData = broadcaster.data;
            //console.log('broadcaster '+JSON.stringify(broadcaster));
        });
    };
    UserReportComponent.prototype.setFilters = function () {
        this.filteredStudents = lodash__WEBPACK_IMPORTED_MODULE_9__["filter"](this.competitionSelect, lodash__WEBPACK_IMPORTED_MODULE_9__["conforms"](this.filters));
    };
    UserReportComponent.prototype.filterCatch = function (property, value) {
        //this.filters[property] = i => i === value;
        //this.filters['action_value'] = '';
        this.filters[property] = value;
        if (property == 'competition_type') {
            this.audienceFilter = value;
        }
        console.log(this.filters);
        this.getCompetitionOption();
    };
    UserReportComponent.prototype.filterMatch = function (property, value) {
        //this.filters[property] = i => i === value;
        this.audienceFilter['action_value'] = '';
        this.audienceFilter[property] = value;
        console.log('audienceFilter', this.audienceFilter);
        this.leaderboard();
    };
    UserReportComponent.prototype.getCompetitionOption = function (competition_type) {
        var _this = this;
        if (competition_type === void 0) { competition_type = 'daily_competition'; }
        //console.log(competition_type);
        this.leaderboardService.getCompetitionName(this.filters).subscribe(function (data) {
            _this.competitionSelect = data.data;
            //console.log('broadcaster '+JSON.stringify(data));
            // //this.getSexOptions();
            // when we get all our data initialize the filter form
            // //this.initFilterForm();
        });
    };
    UserReportComponent.prototype.leaderboard = function () {
        var _this = this;
        //console.log(this.filters);
        this.leaderboardService.getLeaderboard(this.audienceFilter).subscribe(function (data) {
            _this.dailyList = data.data;
            //console.log('broadcaster '+JSON.stringify(data));
            if (data.success == false) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('', data.message, 'error');
                _this.getCompetitionOption();
            }
            // //this.getSexOptions();
            // when we get all our data initialize the filter form
            // //this.initFilterForm();
        }, function (err) { console.log('err', err); });
    };
    /// removes filter
    UserReportComponent.prototype.removeFilter = function (property) {
        delete this.filters[property];
        this[property] = null;
        this.getCompetitionOption();
    };
    /*    private getSexOptions() {
        // get all unique values from array of students
        this.sexOptions = Array.from(new Set(this.competitionSelect.map((student) => student.gender)));
      }
    
      private initFilterForm() {
        // initialize the form with empty strings, in html the 'All' option will be selected
        this.filterForm = this.formBuilder.group({
          sex: [''],
          category: [''],
          status: ['']
        });
        // init watch for any form changes
        this.watchFormChanges();
      }
     private watchFormChanges() {
        // this will fire on any filter changes and call the filtering method with the value of the form
        this.filterForm.valueChanges.subscribe((value: FilterFormValue) => this.filterStudents(value));
      }
    
      private filterStudents(value: FilterFormValue) {
        // again, this operation would be executed on the backend, but here you go
        // initialize a new array of all the students
        let filteredStudents: any = this.competitionSelect;
        if (value.sex) {
          // if filter for sex is set, simply filter for any student that has the same value for sex
          filteredStudents = filteredStudents.filter((student) => student.sex === value.sex);
        }
        if (value.category && !value.status) {
          // when category is set but status is not, filter for any student that has the category in any of its programs
          filteredStudents = filteredStudents.filter((student: Student) => {
            return student.programs
              .map((program: Program) => program.programCategory)
              .includes(value.category);
          });
        }
        if (!value.category && value.status) {
          // when status is set but category is not, filter for any student that has the status in any of its programs
          filteredStudents = filteredStudents.filter((student: Student) => {
            return student.programs
              .map((program: Program) => program.programStatus)
              .includes(value.status);
          });
        }
        if (value.category && value.status) {
          // when category and status is both set, filter for any student that has the status AND category in any of its programs
          filteredStudents = filteredStudents.filter((student: Student) => {
            return student.programs
              .filter((program: Program) => program.programCategory === value.category)
              .map((program: Program) => program.programStatus)
              .includes(value.status);
          });
        }
        // set the filtered students to display
        this.filteredStudents = filteredStudents;
      } */
    //custom search & pagination
    UserReportComponent.prototype.getRequestParams = function (searchText, page, pageSize) {
        var params = {};
        if (searchText) {
            params["searchText"] = searchText;
        }
        else {
            params["searchText"] = 0;
        }
        if (page) {
            params["page"] = page - 1;
        }
        if (pageSize) {
            params["size"] = pageSize;
        }
        return params;
    };
    UserReportComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        //this.getLeaderboard();
    };
    UserReportComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        //this.getLeaderboard();
    };
    UserReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_6__["DcService"] },
        { type: _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_5__["LeaderboardService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    UserReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-report',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-report/user-report.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-report.component.scss */ "./src/app/pages/user-report/user-report.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_dc_service__WEBPACK_IMPORTED_MODULE_6__["DcService"], _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_5__["LeaderboardService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UserReportComponent);
    return UserReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-report/user-report.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-report/user-report.module.ts ***!
  \*********************************************************/
/*! exports provided: UserReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportModule", function() { return UserReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-report-routing.module */ "./src/app/pages/user-report/user-report-routing.module.ts");
/* harmony import */ var _user_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-report.component */ "./src/app/pages/user-report/user-report.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _spinner_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spinner/loading.module */ "./src/app/pages/spinner/loading.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");












var UserReportModule = /** @class */ (function () {
    function UserReportModule() {
    }
    UserReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_report_component__WEBPACK_IMPORTED_MODULE_5__["UserReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _user_report_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserReportRoutingModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlNativeDateTimeModule"],
                _spinner_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
            ],
            providers: [_services_dc_service__WEBPACK_IMPORTED_MODULE_11__["DcService"]]
        })
    ], UserReportModule);
    return UserReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-report-user-report-module.js.map