(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-study-exam-question-se-question-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-dashboard.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-dashboard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid dashboard\">\r\n  \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 Competitive-curriculum-exam-wrap\">\r\n      <div class=\"row justify-content-md-center\">\r\n\r\n      <div class=\"col-md-9\">\r\n\r\n        <div class=\"card\">\r\n        <h4>Quiz Type</h4>\r\n        \r\n        <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n              <div class=\" col-sm-12 col-xs-12 col-md-12 \">\r\n                       \r\n               <div class=\"group\">\r\n                  <select class=\"form-control\" formControlName=\"quiz_type\" (change)=\"examType($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_type.errors }\">\r\n                    <option value=\"\">Quiz Type</option>\r\n                    <option *ngFor=\"let option of masterArr.master_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                  </select>\r\n                   <div *ngIf=\"submitted && f.quiz_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.quiz_type.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n           <div class=\"row\">&nbsp;</div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-6 col-md-6\">\r\n                <div class=\"group\">\r\n                    <button  class=\"btn btn-block allam-btn-green text-white \">\r\n                            Next\r\n                    </button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-question.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-question.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"isSave\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"dt-responsive table-responsive11\">\r\n          <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\" [style.display]=\"typeId==1 ? 'block' : 'none'\">\r\n            <div class=\"row\">\r\n\r\n              \r\n              <div class=\"col-xs-12 col-sm-12 col-md-4\">\r\n                <label>\r\n                  &nbsp;\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4 text-left\">\r\n               \r\n                <label class=\"frtrd-rtl\"> Select Teacher </label>\r\n                <select class=\"form-control\" [(ngModel)]=\"term2\"  (change)=\"changedTeacher($event.target.value)\">\r\n                  <option value=\"\">Select Teacher</option>\r\n                  <option *ngFor=\"let option of teacherArr\" [value]=\"option.id\">{{option.first_name+' '+option.last_name | titlecase }}</option>\r\n                </select>\r\n              \r\n\r\n              </div>\r\n              \r\n\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                <label class=\"frtrd-rtl\"> Search </label>\r\n                <input type=\"search\" class=\"form-control\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\">\r\n                <div>&nbsp;</div>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>Level</th>\r\n                        <th>Answer</th>\r\n                        <th><span class=\"option-width\">Option D </span></th>\r\n                        <th><span class=\"option-width\">Option C </span></th>\r\n                        <th><span class=\"option-width\">Option B </span></th>\r\n                        <th><span class=\"option-width\">Option A </span></th>\r\n                        <th>Question Type</th>\r\n                        <th>Question </th>\r\n                       <!--  <th>Quant/Verbal </th> -->\r\n                        <!--  <th>Group </th>  -->\r\n                        <th>Lesson</th>\r\n                        <th>Subject</th>\r\n                        <th>Semester</th>\r\n                        <th>Class</th>\r\n                       <!--  <th>Quiz Sub Type</th>\r\n                        <th>Quiz Type</th> -->\r\n                        <th>Teacher</th>\r\n                        <th>Approved By</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let question of questionArr | filter: term | orderBy: {property: column, direction: direction} | paginate : {\r\n                  itemsPerPage: pageSize,\r\n                  currentPage: page,\r\n                  totalItems: count\r\n                };\" >\r\n                        <td>{{ question.level_name }}</td>\r\n                        <td>{{ question.answer }}</td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt4Else\" src=\"{{ s3_url}}{{question.option4}}\"/>\r\n                            <ng-template #opt4Else>\r\n                               {{ question.option4 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt3Else\" src=\"{{ s3_url}}{{question.option3}}\"/>\r\n                            <ng-template #opt3Else>\r\n                               {{ question.option3 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt2Else\" src=\"{{ s3_url}}{{question.option2}}\"/>\r\n                            <ng-template #opt2Else>\r\n                               {{ question.option2 }}\r\n                           </ng-template>\r\n                        </td>\r\n                         <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt1Else\" src=\"{{ s3_url}}{{question.option1}}\"/>\r\n                            <ng-template #opt1Else>\r\n                               {{ question.option1 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>{{question.question_type}}</td>\r\n                        <td *ngIf=\"question.question_type=='text_and_image'\">\r\n                          <img src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                          <br>\r\n                           {{ question.question }}\r\n                        </td>\r\n                        <td *ngIf=\"question.question_type=='image'\">\r\n                          <img src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                        </td>\r\n                        <td *ngIf=\"question.question_type=='text' || question.question_type==null\">\r\n                           {{ question.question }}\r\n                        </td>\r\n                       <!--  <td>{{ question.quant_verbal }}</td> -->\r\n                        <!--  <td>{{ question.group_name }}</td> -->\r\n                        <td>{{ question.lesson_name | titlecase}}</td>\r\n                        <td>{{ question.subject_name | titlecase}}</td>\r\n                        <td>{{ question.semester_name | titlecase}}</td>\r\n                        <td>{{ question.class_name | titlecase}}</td>\r\n                       <!--  <td>{{ question.sub_quiz_name | titlecase}}</td>\r\n                        <td>{{ question.quiz_type_name | titlecase}}</td> -->\r\n                        <td>\r\n                          <a href=\"javascript:void(0);\" (click)=\"openPopup(question.created_by)\">{{ question.t_name | titlecase}}</a>\r\n                        </td>\r\n                        <td>\r\n                          <a href=\"javascript:void(0);\" (click)=\"openPopup(question.modified_by)\">{{ question.ts_name | titlecase}}</a>\r\n                        </td>\r\n                         <td>\r\n                           <a (click)=\"deleteQuestion(question.id)\" class=\"btn allam-btn btn-warning text-white\" title=\"Delete\" href=\"javascript:void(0);\"><i class=\"icofont icofont-close\"></i></a>\r\n                         </td>\r\n\r\n                      </tr>\r\n                      <tr *ngIf=\"questionArr.length == 0\">\r\n                        <td colspan=\"15\" class=\"no-data-available\">No data!</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">\r\n                  Show Entries\r\n                  <label>\r\n                    <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n                      <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n                          {{ size }}\r\n                      </option>\r\n                    </select>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <pagination-controls\r\n                previousLabel=\"Prev\"\r\n                nextLabel=\"Next\"\r\n                responsive=\"true\"\r\n                class=\"pagination\"\r\n                (pageChange)=\"handlePageChange($event)\"\r\n              ></pagination-controls>   \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\" [style.display]=\"typeId==2 ? 'block' : 'none'\">\r\n            <div class=\"row\" [style.display]=\"showQuestion ? 'block' : 'none'\">\r\n\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4 text-left\">\r\n                <div> &nbsp; </div>\r\n                <div style=\" \">\r\n                  <a class=\"btn allam-btn btn-warning text-white\" (click)=\"goBack()\"> \r\n                    <i _ngcontent-gjf-c6=\"\" class=\"icofont icofont-arrow-left\"></i>\r\n                    Back</a>&nbsp;\r\n                  <a *ngIf=\"!isApprove\"\r\n                     class=\"btn allam-btn allam-btn-green text-white\" (click)=\"approve(quizid, 0)\">Approve</a>\r\n                  <a *ngIf=\"isApprove\"\r\n                     class=\"btn allam-btn allam-btn-green  text-white\" (click)=\"approve(quizid, 1)\">UnApprove</a>\r\n                </div>\r\n              </div>\r\n              \r\n\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4 text-left\">\r\n                <label class=\"frtrd-rtl\"> Select Teacher </label>\r\n                <select class=\"form-control\" [(ngModel)]=\"term2\"  (change)=\"changedTeacher($event.target.value)\">\r\n                  <option value=\"\">Select Teacher</option>\r\n                  <option *ngFor=\"let option of teacherArr\" [value]=\"option.id\">{{option.first_name+' '+option.last_name | titlecase }}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-4 col-md-4\">\r\n                <label class=\"frtrd-rtl\"> Search </label>\r\n                <input type=\"search\" class=\"form-control\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\">\r\n                <div>&nbsp;</div>\r\n              </div>\r\n             \r\n            </div>\r\n            <div class=\"row\" [style.display]=\"!showQuestion ? 'block' : 'none'\">\r\n              \r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 mt-3 mb-3\">\r\n                  <a class=\"btn allam-btn btn-warning text-white\" (click)=\"goDashboard()\"> <i class=\"icofont icofont-arrow-left\"></i> Back</a>\r\n                </div>\r\n             \r\n              \r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" style=\"width:100%;\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th width=\"25%\"> </th>\r\n                        <th width=\"25%\">Quiz Description</th>\r\n                        <th width=\"25%\">Teacher</th>\r\n                        <th width=\"25%\">Quiz Title</th>\r\n                       <!--  <th>Quiz Icon</th> -->\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let quiz of quizArr\">\r\n                        <td style=\"text-align:left;\">\r\n                          <a class=\"btn btn-out allam-btn allam-btn-green text-white\" (click)=\"preview(quiz.id, quiz.status)\"><i class=\"icofont icofont-match-review\"> </i> View Question</a>&nbsp;&nbsp;\r\n                          <a class=\"btn btn-out allam-btn allam-btn-green text-white\" style=\"width:90px;\" *ngIf=\"!quiz.status\" (click)=\"approve(quiz.id, quiz.status)\"><i class=\"icofont icofont-edit\"> </i> Approve</a>\r\n                          <a class=\"btn btn-out allam-btn btn-warning text-white\" *ngIf=\"quiz.status\" (click)=\"approve(quiz.id, quiz.status)\"><i class=\"icofont icofont-edit\"> </i> UnApprove</a>\r\n                        </td>\r\n                        <td>{{ quiz.quiz_description }}</td>\r\n                        <td>\r\n                          {{ quiz.teacher_fname + ' '+ quiz.teacher_lname  | titlecase}}\r\n                        </td>\r\n                        \r\n                        <td>{{ quiz.quiz_title }}</td>\r\n                      <!--   <td *ngIf=\"quiz.quiz_icon_url!=''\">\r\n                          <img src=\"{{ s3_url}}{{quiz.quiz_icon_url}}\"/>\r\n                        </td> -->\r\n                      </tr>\r\n                      <tr *ngIf=\"quizArr.length == 0\">\r\n                        <td colspan=\"5\" align=\"center\" class=\"no-data-available\">No data!</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\"  [style.display]=\"showQuestion ? 'block' : 'none'\">\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                      <!--   <th>Level</th> -->\r\n                        <th>Answer</th>\r\n                        <th><span class=\"option-width\">Option D </span></th>\r\n                        <th><span class=\"option-width\">Option C </span></th>\r\n                        <th><span class=\"option-width\">Option B </span></th>\r\n                        <th><span class=\"option-width\">Option A </span></th>\r\n                        <th>Question Type</th>\r\n                         <th>Question </th>\r\n                        <th>Quant/Verbal </th>\r\n                         <th>Group </th> \r\n                        <!-- <th>Lesson</th>\r\n                        <th>Subject</th>\r\n                        <th>Semester</th>\r\n                        <th>Class</th> -->\r\n                        <th>Quiz Sub Type</th>\r\n                        <th>Quiz Type</th>\r\n                        <th>Teacher</th>\r\n                        <th>Approved By</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let question of questionArr1 | filter: term\">\r\n                       <!--  <td>{{ question.level_name }}</td> -->\r\n                        <td>{{ question.answer }}</td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt4Else\" src=\"{{ s3_url}}{{question.option4}}\"/>\r\n                            <ng-template #opt4Else>\r\n                               {{ question.option4 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt3Else\" src=\"{{ s3_url}}{{question.option3}}\"/>\r\n                            <ng-template #opt3Else>\r\n                               {{ question.option3 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt2Else\" src=\"{{ s3_url}}{{question.option2}}\"/>\r\n                            <ng-template #opt2Else>\r\n                               {{ question.option2 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <img *ngIf=\"question.option_type=='image' else opt1Else\" src=\"{{ s3_url}}{{question.option1}}\"/>\r\n                            <ng-template #opt1Else>\r\n                               {{ question.option1 }}\r\n                           </ng-template>\r\n                        </td>\r\n                        <td>{{question.question_type}}</td>\r\n                        <td *ngIf=\"question.question_type=='text_and_image'\">\r\n                          <img src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                          <br>\r\n                           {{ question.question }}\r\n                        </td>\r\n                        <td *ngIf=\"question.question_type=='image'\">\r\n                          <img src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                        </td>\r\n                        <td *ngIf=\"question.question_type=='text' || question.question_type==null\">\r\n                           {{ question.question }}\r\n                        </td>\r\n                        <td>{{ question.quant_verbal }}</td>\r\n                         <td>{{ question.groups }}</td>\r\n                       <!--  <td>{{ question.lesson_name | titlecase}}</td>\r\n                        <td>{{ question.subject_name | titlecase}}</td>\r\n                        <td>{{ question.semester_name | titlecase}}</td>\r\n                        <td>{{ question.class_name | titlecase}}</td> -->\r\n                        <td>{{ question.sub_quiz_name | titlecase}}</td>\r\n                        <td>{{ question.quiz_type_name | titlecase}}</td>\r\n                        <td>\r\n                          <a href=\"javascript:void(0);\" (click)=\"openPopup(question.created_by)\">{{ question.t_name | titlecase}}</a>\r\n                        </td>\r\n                        <td>\r\n                          <a href=\"javascript:void(0);\" (click)=\"openPopup(question.modified_by)\">{{ question.ts_name | titlecase}}</a>\r\n                        </td>\r\n                         <td>\r\n                           <a (click)=\"deleteQuestion(question.id)\" class=\"btn allam-btn btn-warning text-white\" title=\"Delete\" href=\"javascript:void(0);\"><i class=\"icofont icofont-close\"></i></a>\r\n                         </td>\r\n\r\n                      </tr>\r\n                      <tr *ngIf=\"questionArr1.length == 0\">\r\n                        <td colspan=\"14\" align=\"center\" class=\"no-data-available\">No data!</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- The Modal -->\r\n<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{userHeading}}:</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n        <table class=\"table table-striped\">\r\n          <tr>\r\n            <td><label>Name :</label> {{userName}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Email :</label> {{userEmail}} </td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Mobile :</label> {{userMobile}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Country :</label> {{userCountry}} </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/study-exam-question/se-dashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/study-exam-question/se-dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: SeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeDashboardComponent", function() { return SeDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");









var SeDashboardComponent = /** @class */ (function () {
    function SeDashboardComponent(fb, route, tsupervisorService, curriculumSingleService, router, alertService, authenticationService) {
        this.fb = fb;
        this.route = route;
        this.tsupervisorService = tsupervisorService;
        this.curriculumSingleService = curriculumSingleService;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].s3_url;
        this.teacherArr = [];
        this.submitted = false;
        this.loading = false;
        this.isCompt = false;
        this.questionArrr = [];
        this.masterArr = [];
        this.form = this.fb.group({
            quiz_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    SeDashboardComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getAllTeacher();
        this.getMasterData();
    };
    SeDashboardComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        console.log(this.masterArr);
    };
    SeDashboardComponent.prototype.getAllTeacher = function () {
        var _this = this;
        this.tsupervisorService.getAllTeacher().subscribe(function (response) {
            _this.teacherArr = response['data'];
            console.log(_this.teacherArr);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    Object.defineProperty(SeDashboardComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    SeDashboardComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var quiz_type = this.form.value.quiz_type;
        var qUrl = '/study-exam-question/type/' + btoa(quiz_type);
        console.log(qUrl);
        console.log(quiz_type);
        this.router.navigate([qUrl]);
    };
    SeDashboardComponent.prototype.examType = function () {
        if (this.form.value.quiz_type == '2') {
            this.isCompt = true;
        }
        else {
            this.isCompt = false;
        }
    };
    SeDashboardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__["TsupervisorService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumSingleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    SeDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-se-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./se-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-dashboard.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__["TsupervisorService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumSingleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], SeDashboardComponent);
    return SeDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam-question/se-question-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/study-exam-question/se-question-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SeQuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeQuestionRoutingModule", function() { return SeQuestionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _se_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./se-question.component */ "./src/app/pages/study-exam-question/se-question.component.ts");
/* harmony import */ var _se_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./se-dashboard.component */ "./src/app/pages/study-exam-question/se-dashboard.component.ts");





var routes = [
    {
        path: '',
        component: _se_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SeDashboardComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'type/:quiz_type',
        component: _se_question_component__WEBPACK_IMPORTED_MODULE_3__["SeQuestionComponent"],
        data: {
            breadcrumb: 'Study Exam Question Type',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var SeQuestionRoutingModule = /** @class */ (function () {
    function SeQuestionRoutingModule() {
    }
    SeQuestionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SeQuestionRoutingModule);
    return SeQuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/study-exam-question/se-question.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/study-exam-question/se-question.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 200px;\n  max-height: 200px;\n}\n\n:host ::ng-deep .ck-editor {\n  width: 300px;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.dataTables_filter > input {\n  width: 60%;\n}\n\n#autofill_info {\n  margin-top: 20px;\n}\n\nul.pagination {\n  float: right;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS1xdWVzdGlvbi9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcc3R1ZHktZXhhbS1xdWVzdGlvblxcc2UtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWR5LWV4YW0tcXVlc3Rpb24vc2UtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFBNkIsVUFBQTtBQ0U3Qjs7QUREQTtFQUFpQixnQkFBQTtBQ0tqQjs7QURKQTtFQUFlLFlBQUE7QUNRZjs7QUROQTtFQUE0QyxXQUFBO0FDVTVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS1xdWVzdGlvbi9zZS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3J7XHJcbiAgICB3aWR0aDogMzAwcHg7O1xyXG59XHJcblxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAuZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX2ZpbHRlciA+IGlucHV0IHsgd2lkdGg6IDYwJTt9XHJcbiNhdXRvZmlsbF9pbmZvIHsgbWFyZ2luLXRvcDogMjBweDsgfVxyXG51bC5wYWdpbmF0aW9uIHtmbG9hdDpyaWdodDt9XHJcblxyXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge2Zsb2F0OiBsZWZ0O31cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3Ige1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0YVRhYmxlc19maWx0ZXIgPiBpbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiNhdXRvZmlsbF9pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudWwucGFnaW5hdGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/study-exam-question/se-question.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/study-exam-question/se-question.component.ts ***!
  \********************************************************************/
/*! exports provided: SeQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeQuestionComponent", function() { return SeQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");











var SeQuestionComponent = /** @class */ (function () {
    function SeQuestionComponent(fb, activeAouter, router, alertService, curriculumSingleService, authenticationService, tsupervisorService) {
        this.fb = fb;
        this.activeAouter = activeAouter;
        this.router = router;
        this.alertService = alertService;
        this.curriculumSingleService = curriculumSingleService;
        this.authenticationService = authenticationService;
        this.tsupervisorService = tsupervisorService;
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 25, 50, 100];
        this.title = 'angularckeditor';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.selectedItems = [];
        this.loading = false;
        this.submitted = false;
        this.loading2 = false;
        this.submitted2 = false;
        this.gridview = false;
        this.isProcessed = false;
        this.error = '';
        this.questionArr = [];
        this.questionArr1 = [];
        this.quizArr = [];
        this.masterArr = [];
        this.row_id = 1;
        this.isSave = true;
        this.isEdit = false;
        this.isEditCurr = false;
        this.isEditComp = false;
        this.idEdit = false;
        this.showQuestion = false;
        this.isApprove = 0;
        this.quizid = 0;
        this.editData = [];
        this.teacherArr = [];
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].s3_url;
        this.durationOptions = ["05", "10", "20", "30"];
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
        this.question_value = "";
        this.goBack = function () {
            this.showQuestion = false;
        };
        this.goDashboard = function () {
            this.router.navigate(['/study-exam-question']);
        };
        this.term = "";
        this.term2 = "";
    }
    SeQuestionComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            question: [''],
            save_type: [''],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answer: [''],
            class: [''],
            quiz_sub_type: [''],
            quiz_type: [''],
            chapter: [''],
            subject: [''],
            semester: [''],
            quant_verbal: [''],
            group: [''],
            lesson: [''],
            note: [''],
            level: [''],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delArray: this.fb.array([])
        });
        //  this.teacher_id = ( this.activeAouter.snapshot.params['teacher_id']); 
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.typeId = this.activeAouter.snapshot.params['quiz_type'];
        this.typeId = atob(this.typeId);
        this.getPublishQuiz();
        this.getPublishQuestion();
        //this.getMasterData();
        this.getAllTeacher();
    };
    Object.defineProperty(SeQuestionComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    SeQuestionComponent.prototype.getAllTeacher = function () {
        var _this = this;
        this.tsupervisorService.getAllTeacher().subscribe(function (response) {
            _this.teacherArr = response['data'];
            console.log(_this.teacherArr);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    SeQuestionComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
            //console.log( response.data);
        });
        console.log(this.masterArr);
    };
    SeQuestionComponent.prototype.getPublishQuiz = function () {
        var _this = this;
        this.tsupervisorService.getActiveQuiz().subscribe(function (response) {
            _this.quizArr = response;
        });
    };
    SeQuestionComponent.prototype.getPublishQuestion = function () {
        var _this = this;
        var params = this.getRequestParams(this.term2, this.term, this.page, this.pageSize);
        console.log(params);
        this.tsupervisorService.getActiveQuestionNew(params).subscribe(function (response) {
            console.log('ssssss--');
            _this.questionArr1 = response;
            _this.questionArr = response;
            //console.log(this.questionArr1);
        });
    };
    SeQuestionComponent.prototype.preview = function (quizid, status) {
        this.showQuestion = true;
        this.quizid = quizid;
        console.log(this.quizid + 'id----');
        this.isApprove = status;
        this.getPublishQuestion();
    };
    SeQuestionComponent.prototype.approve = function (quizid, status) {
        var _this = this;
        this.quizid = quizid;
        //debugger;
        var quiz = {
            "quiz_id": quizid + '',
            "status": status + '',
            "modified_by": "1"
        };
        var resArr = [];
        var params = this.getRequestParams(this.term2, this.term, this.page, this.pageSize);
        this.tsupervisorService.getActiveQuestionNew(params).subscribe(function (response) {
            resArr = response;
            console.log(resArr.length);
            if (resArr.length < 5) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please add more than 5 questions.', 'error');
                return;
            }
            _this.tsupervisorService.updateQuizStatus(quiz).subscribe(function (response) {
                _this.isApprove = 1 - _this.isApprove;
                _this.getPublishQuiz();
            });
        });
    };
    SeQuestionComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    SeQuestionComponent.prototype.openPopup = function (user_id) {
        var _this = this;
        this.showModal = true;
        this.tsupervisorService.getUserByID(user_id).subscribe(function (response) {
            _this.userHeading = response[0].role_name + ' Details';
            _this.userTitle = '';
            _this.userName = response[0].first_name + ' ' + response[0].last_name;
            _this.userEmail = response[0].email;
            _this.userMobile = response[0].phone_number;
            _this.userCountry = response[0].country;
        });
    };
    SeQuestionComponent.prototype.closePopup = function () {
        this.showModal = false;
        this.userHeading = '';
        this.userTitle = '';
        this.userName = '';
        this.userEmail = '';
        this.userMobile = '';
        this.userCountry = '';
    };
    //custom search & pagination
    SeQuestionComponent.prototype.getRequestParams = function (teacherText, searchText, page, pageSize) {
        var params = {};
        if (searchText) {
            params["searchText"] = searchText;
        }
        else {
            params["searchText"] = 0;
        }
        if (teacherText) {
            params["teacherText"] = teacherText;
        }
        else {
            params["teacherText"] = 0;
        }
        this.typeId == 2 ? params['type'] = 'competitive' : params['type'] = 'curriculum';
        if (page) {
            params["page"] = page - 1;
        }
        params['quiz_id'] = this.quizid;
        if (pageSize) {
            params["size"] = pageSize;
        }
        return params;
    };
    SeQuestionComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        //this.getPublishQuestion();
    };
    SeQuestionComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        //this.getPublishQuestion();
    };
    SeQuestionComponent.prototype.changedTeacher = function (teacher_search) {
        this.term = "";
        this.page = 1;
        this.getPublishQuestion();
    };
    SeQuestionComponent.prototype.deleteQuestion = function (question_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.tsupervisorService.deletePublishQuestion(question_id, _this.created_by, _this.editData).subscribe(function () {
                    self.getPublishQuestion();
                });
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Question has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    SeQuestionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__["TsupervisorService"] }
    ]; };
    SeQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-se-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./se-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam-question/se-question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./se-question.component.scss */ "./src/app/pages/study-exam-question/se-question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__["TsupervisorService"]])
    ], SeQuestionComponent);
    return SeQuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam-question/se-question.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/study-exam-question/se-question.module.ts ***!
  \*****************************************************************/
/*! exports provided: SafeHtmlPipe, SeQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeQuestionModule", function() { return SeQuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _se_question_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./se-question-routing.module */ "./src/app/pages/study-exam-question/se-question-routing.module.ts");
/* harmony import */ var _se_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./se-question.component */ "./src/app/pages/study-exam-question/se-question.component.ts");
/* harmony import */ var _se_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./se-dashboard.component */ "./src/app/pages/study-exam-question/se-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






//import { BrowserModule } from '@angular/platform-browser';








var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var SeQuestionModule = /** @class */ (function () {
    function SeQuestionModule() {
    }
    SeQuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _se_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["SeQuestionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"]
            ],
            declarations: [
                _se_question_component__WEBPACK_IMPORTED_MODULE_4__["SeQuestionComponent"],
                _se_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["SeDashboardComponent"],
                SafeHtmlPipe
            ]
        })
    ], SeQuestionModule);
    return SeQuestionModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-study-exam-question-se-question-module.js.map