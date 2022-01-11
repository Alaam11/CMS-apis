(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teacher-supervisor-teacher-supervisor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/question/question.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/question/question.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"isSave\">\r\n  <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n          <div class=\"card-block\">\r\n            <div class=\"dt-responsive table-responsive11\">\r\n              <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                <div class=\"row m-b-10\">\r\n                  <div class=\"col-xs-12 col-sm-12 col-md-4 text-left\">\r\n                     <a [routerLink]=\"['teacher-supervisor']\" class=\"btn btn-warning text-white m-t-15\">\r\n                            <i class=\"icofont icofont-arrow-left\"></i>Back\r\n                      </a>\r\n                    </div>\r\n                  <div class=\"col-xs-12 col-sm-12 col-md-4\">\r\n                     <div> &nbsp; </div>\r\n                    <input type=\"search\" class=\"form-control\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-12 col-md-4 text-right\"> \r\n                     <label> \r\n                      <button class=\"btn btn-success m-t-15\" (click)=\"downloadItem()\" title=\"Download\" type=\"button\"><i class=\"icofont icofont-download\"></i></button>\r\n                         \r\n                      </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-12\">\r\n                    <div class=\"dt-responsive table-responsive\">\r\n                      <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                        <thead>\r\n                          <tr role=\"row\">\r\n                          <th>Level</th>\r\n                          <th>Answer</th>\r\n                          <th><span class=\"option-width\">Option D </span></th>\r\n                          <th><span class=\"option-width\">Option C </span></th>\r\n                          <th><span class=\"option-width\">Option B </span></th>\r\n                          <th><span class=\"option-width\">Option A </span></th>\r\n                          <th>Question Type</th>\r\n                          <th>Question </th>\r\n                          <th>Quant/Verbal </th>\r\n                         <!--  <th>Group </th>  -->\r\n                          <th>Lesson</th> \r\n                          <th>Subject</th> \r\n                          <th>Semester</th>\r\n                          <th>Class</th> \r\n                          <th>Quiz Sub Type</th>\r\n                          <th>Quiz Type</th>\r\n                          <th>Edit</th>  \r\n                          <th>Approve</th>\r\n                          <th>\r\n                            <span class=\"option-width\"><input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"selectedAll\">&nbsp;&nbsp;\r\n                            <button class=\"btn btn-warning\" (click)=\"approveItem()\" title=\"Approve\" type=\"button\">\r\n                            <i class=\"icofont icofont-check-circled\"></i></button> </span>\r\n                          </th>\r\n                         \r\n                         \r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr role=\"row\" *ngFor=\"let question of questionArr | filter: term | paginate : {\r\n                  itemsPerPage: pageSize,\r\n                  currentPage: page,\r\n                  totalItems: count\r\n                }; \">\r\n                               \r\n                                <td>{{ question.level_name }}</td>\r\n                                <td>{{ question.answer }}</td>\r\n                                <td>\r\n                                    <img *ngIf=\"question.option_type=='image' else opt4Else\" src=\"{{ s3_url}}{{question.option4}}\"/>\r\n                                    <ng-template #opt4Else>\r\n                                       {{ question.option4 }}\r\n                                   </ng-template>\r\n                                </td>\r\n                                <td>\r\n                                    <img *ngIf=\"question.option_type=='image' else opt3Else\" src=\"{{ s3_url}}{{question.option3}}\"/>\r\n                                    <ng-template #opt3Else>\r\n                                       {{ question.option3 }}\r\n                                   </ng-template>\r\n                                </td>\r\n                                <td>\r\n                                    <img *ngIf=\"question.option_type=='image' else opt2Else\" src=\"{{ s3_url}}{{question.option2}}\"/>\r\n                                    <ng-template #opt2Else>\r\n                                       {{ question.option2 }}\r\n                                   </ng-template>\r\n                                </td>\r\n                                 <td>\r\n                                    <img *ngIf=\"question.option_type=='image' else opt1Else\" src=\"{{ s3_url}}{{question.option1}}\"/>\r\n                                    <ng-template #opt1Else>\r\n                                       {{ question.option1 }}\r\n                                   </ng-template>\r\n                                </td>\r\n                                <td class=\"\">{{ question.question_type }} </td>\r\n                                <td *ngIf=\"question.question_type=='text_and_image'\">\r\n                                <img width=\"300\" height=\"200\" src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                                <br>\r\n                                 {{ question.question }}\r\n                                </td>\r\n                                <td *ngIf=\"question.question_type=='image'\">\r\n                                <img width=\"300\" height=\"200\" src=\"{{ s3_url}}{{question.question_image_url}}\"/>\r\n                                </td>\r\n                                <td *ngIf=\"question.question_type=='text' || question.question_type==null\">\r\n                                 {{ question.question }}\r\n                                </td>\r\n                                <td>{{ question.quant_verbal }}</td>\r\n                               <!--  <td>{{ question.group_name }}</td> -->\r\n                                <td>{{ question.lesson_name | titlecase}}</td>\r\n                                <td>{{ question.subject_name | titlecase}}</td>\r\n                                <td>{{ question.semester_name | titlecase}}</td>\r\n                                <td>{{ question.class_name | titlecase}}</td>\r\n                                <td>{{ question.sub_quiz_name | titlecase}}</td>\r\n                                <td>{{ question.quiz_type_name | titlecase}}</td>\r\n                                <td>\r\n                                  <button type=\"button\" class=\"btn allam-btn allam-btn-green text-white \" (click)=\"editItem(question)\"><i class=\"icofont icofont-ui-edit\"></i> </button>\r\n                                </td>\r\n                                <td class=\"\">\r\n                                    <button class=\"btn allam-btn btn-warning\" (click)=\"approveOneItem(question.id)\" title=\"Approve\" type=\"button\"><i class=\"icofont icofont-check-circled\"></i></button>\r\n                                </td>\r\n                                <td class=\"categories\">\r\n                                  <!-- <input type=\"checkbox\"  name=\"del_row\" [value]=\"question.id\" (change)=\"onCheckboxChange($event,question.id)\" >  -->\r\n                                   <input class=\"form-check-input\" type=\"checkbox\" value=\"{{question.id}}\" [(ngModel)]=\"question.selected\" (change)=\"checkIfAllSelected($event,question.id)\"> \r\n                                </td>\r\n                                \r\n                                \r\n                              </tr>\r\n                              <tr *ngIf=\"questionArr.length==0\">\r\n                                <td colspan=\"16\" align=\"center\">No Data found.</td>\r\n                              </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                  <div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n                  <label>\r\n                   <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n                      <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n                          {{ size }}\r\n                      </option>\r\n                    </select>\r\n                  </label>\r\n                  </div>\r\n                  </div>\r\n                  <div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                     <pagination-controls\r\n                      previousLabel=\"Prev\"\r\n                      nextLabel=\"Next\"\r\n                      responsive=\"true\"\r\n                      class=\"pagination\"\r\n                      (pageChange)=\"handlePageChange($event)\"\r\n                    ></pagination-controls> \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid single-curriculum\" *ngIf=\"isEditCurr\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12 single-curriculum-wrap\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12 pull-right\">\r\n                  <h4>Edit Curriculum Exam</h4>\r\n               </div>\r\n           </div>\r\n            <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n              <div class=\"row\">\r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label >Class</label>\r\n                      <select class=\"form-control\" formControlName=\"class\" [ngClass]=\"{ 'is-invalid': submitted && f.class.errors }\">\r\n                        <option value=\"\">Class</option>\r\n                        <option *ngFor=\"let option of masterArr.master_class\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      \r\n                      <span class=\"md-line\"></span>\r\n                      <div *ngIf=\"submitted && f.class.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.class.errors.required\">Class is required.</div>\r\n                        <div *ngIf=\"f.class.errors.pattern\">Accept numeric values only.</div>\r\n                      </div>\r\n                   </div>\r\n                </div> \r\n          \r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n\r\n                      <label>Chapter</label>\r\n                      \r\n                      <select class=\"form-control\" formControlName=\"chapter\" [ngClass]=\"{ 'is-invalid': submitted && f.chapter.errors }\">\r\n                        <option value=\"\">Chapter</option>\r\n                        <option *ngFor=\"let option of masterArr.master_chapter\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.chapter.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.chapter.errors.required\">Chapter is required.</div>\r\n                          <div *ngIf=\"f.chapter.errors.pattern\">Accept numeric values only.</div>\r\n                      </div>\r\n                   </div>\r\n                </div> \r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label>Subject</label>\r\n                     \r\n                      <select class=\"form-control\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\r\n                        <option value=\"\">Subject</option>\r\n                        <option *ngFor=\"let option of masterArr.master_subject\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.subject.errors.required\">Subject is required.</div>\r\n                        </div>\r\n                   </div>\r\n                </div> \r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label>Semester</label>\r\n                      \r\n                      <select class=\"form-control\" formControlName=\"semester\" [ngClass]=\"{ 'is-invalid': submitted && f.semester.errors }\">\r\n                        <option value=\"\">Semester</option>\r\n                        <option *ngFor=\"let option of masterArr.master_semester\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.semester.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.semester.errors.required\">Semester is required.</div>\r\n                          <div *ngIf=\"f.semester.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                   </div>\r\n                </div> \r\n          \r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label>Lesson</label>\r\n                      <select class=\"form-control\" formControlName=\"lesson\" [ngClass]=\"{ 'is-invalid': submitted && f.lesson.errors }\">\r\n                        <option value=\"\">Lesson</option>\r\n                        <option *ngFor=\"let option of masterArr.master_lesson\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.lesson.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lesson.errors.required\">Lesson is required.</div>\r\n                            <div *ngIf=\"f.lesson.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                        </div>\r\n                   </div>\r\n                </div> \r\n                 <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n                 <div class=\"group\">\r\n                  <label>Question Type</label>\r\n                  <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                        <option value=\"text\">Text</option>\r\n                        <option value=\"image\">Image</option>\r\n                        <option value=\"text_and_image\">Text and Image</option>\r\n                  </select>\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n               <div class=\"row\">&nbsp;</div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-8 \">\r\n                  <div class=\"row \">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                      <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                       </div>\r\n                        <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option1.value}}\"/>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'a'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option2.value}}\"/>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value.toLowerCase() == 'b'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                    <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option3.value}}\"/>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'c'\"> \r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option4.value}}\"/>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'd'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                      <label >Level</label>\r\n                       <div class=\"group\">\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                          <option value=\"\">Level</option>\r\n                          <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                            <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                      <label >Duration (In Seconds)</label>\r\n                       <div class=\"group\">\r\n                        <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                          <option value=\"\">Duration (In Seconds)</option>\r\n                          <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                        </select>\r\n                        \r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                            <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                      <label >Note</label>\r\n                      <div class=\"group\">\r\n\r\n                       <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                       <span class=\"md-line\"></span>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                  </div> \r\n                  \r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                      <div class=\"m-t-15\">\r\n                        <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                           <span *ngIf=\"this.idEdit\">Back</span>\r\n                        </button>\r\n                        \r\n                        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                           <span *ngIf=\"this.idEdit\">Update</span>\r\n                           \r\n                        </button>\r\n\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-4 \">\r\n                 <!--  <div class=\"editor-wrap\" id=\"my-node\" *ngIf=\"editData.save_type=='bulk'\"> \r\n                   <label>Question</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea> \r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                    </div>\r\n                  </div>\r\n                   <div class=\"editor-wrap\" id=\"my-node\" *ngIf=\"editData.save_type=='single'\"> \r\n                     <label>Question</label>\r\n                      <ckeditor [editor]=\"Editor\" [data]='question_value' [config]=\"config\" (blur)=\"onChange($event)\"></ckeditor>\r\n                      <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n                  </div> -->\r\n                <div class=\" \" *ngIf=\"question_type=='text'\">\r\n                <div class=\"editor-wrap\" id=\"my-node\"> \r\n                 <label>Question</label>\r\n                  \r\n                  <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea>\r\n                  <span class=\"md-line\"></span>\r\n                  <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here \">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question </label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" >\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here \">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question 1</label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" *ngIf=\"croppedImage!=s3_url\">\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                     <label>Question Text</label>\r\n                      <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" > </textarea>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n                 \r\n                </div>\r\n              </div>\r\n              <!--\r\n                 <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                    <div class=\"m-t-15\">\r\n                      <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                         Save and insert\r\n                      </button>\r\n                      </div>\r\n                     </div>\r\n                     \r\n              </div>\r\n              -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid single-curriculum\" *ngIf=\"isEditComp\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 single-curriculum-wrap\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12 pull-right\">\r\n                  <h4>Edit Competitive Exam</h4>\r\n               </div>\r\n           </div>\r\n            <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label>Quant/Verbal</label>\r\n                      <input class=\"form-control\" placeholder=\"Quant/Verbal\" type=\"text\" formControlName=\"quant_verbal\" formControlName=\"quant_verbal\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.quant_verbal.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.quant_verbal.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.quant_verbal.errors.required\">This field is required.</div>\r\n                      </div>\r\n                   </div>\r\n                </div> \r\n                <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                    <div class=\"group\">\r\n                      <label>Group</label>\r\n                      <select class=\"form-control\" formControlName=\"group\" [ngClass]=\"{ 'is-invalid': submitted && f.group.errors }\">\r\n                        <option value=\"\">Group</option>\r\n                        <option *ngFor=\"let option of masterArr.master_group\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                      <div *ngIf=\"submitted && f.group.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.group.errors.required\">Group is required.</div>\r\n                      </div>\r\n                   </div>\r\n                </div> \r\n                <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n                 <div class=\"group\">\r\n                  <label>Question Type</label>\r\n                  <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                        <option value=\"text\">Text</option>\r\n                        <option value=\"image\">Image</option>\r\n                        <option value=\"text_and_image\">Text and Image</option>\r\n                  </select>\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-8 \">\r\n                  <div class=\"row \">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                      <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option1.value}}\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'a'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                    <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option2.value}}\"/>\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value.toLowerCase() == 'b'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                    <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                      <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option3.value}}\"/>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'c'\"> \r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                      </div>\r\n                       <img *ngIf=\"option_type=='image'\" src=\"{{ s3_url}}{{f.option4.value}}\"/>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'd'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                      <label >Duration (In Seconds)</label>\r\n                       <div class=\"group\">\r\n                        <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                          <option value=\"\">Duration (In Seconds)</option>\r\n                          <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                        </select>\r\n                        \r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                            <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                      <label >Note</label>\r\n                      <div class=\"group\">\r\n\r\n                       <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                       <span class=\"md-line\"></span>\r\n                      </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                  </div> \r\n                  \r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                      <div class=\"m-t-15\">\r\n                        <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                           <span *ngIf=\"this.idEdit\">Back</span>\r\n                        </button>\r\n                        \r\n                        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                           <span *ngIf=\"this.idEdit\">Update</span>\r\n                           \r\n                        </button>\r\n\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-lg-4 \">\r\n                   <div class=\"editor-wrap\" id=\"my-node\" *ngIf=\"editData.save_type=='bulk'\"> \r\n                   <label>Question</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea> \r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                    </div>\r\n                  </div>\r\n                   <div class=\"editor-wrap\" id=\"my-node\" *ngIf=\"editData.save_type=='single'\"> \r\n                     <label>Question</label>\r\n                      <ckeditor [editor]=\"Editor\" [data]='question_value' [config]=\"config\" (blur)=\"onChange($event)\"></ckeditor>\r\n                      <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n                    </div>\r\n                </div> -->\r\n              <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                <div class=\"editor-wrap\" id=\"my-node\"> \r\n                 <label>Question</label>\r\n                  \r\n                  <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea>\r\n                  <span class=\"md-line\"></span>\r\n                  <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question </label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" >\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question </label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" *ngIf=\"croppedImage!=s3_url\">\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                     <label>Question Text</label>\r\n                      <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" > </textarea>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              </div>\r\n              <!--\r\n                 <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                    <div class=\"m-t-15\">\r\n                      <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                         Save and insert\r\n                      </button>\r\n                      </div>\r\n                     </div>\r\n                     \r\n              </div>\r\n              -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/teacher-supervisor.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/teacher-supervisor.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid dashboard\">\r\n  \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 Competitive-curriculum-exam-wrap\">\r\n      <div class=\"row justify-content-md-center\">\r\n\r\n      <div class=\"col-md-9\">\r\n\r\n        <div class=\"card\">\r\n        <h4>Select Teacher</h4>\r\n        \r\n        <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n              <div class=\" col-sm-12 col-xs-12 col-md-12 \">\r\n                       \r\n               <div class=\"group\">\r\n                  <select class=\"form-control\" formControlName=\"teacher\" [ngClass]=\"{ 'is-invalid': submitted && f.teacher.errors }\">\r\n                    <option value=\"\">Teacher</option>\r\n                    <option *ngFor=\"let option of teacherArr\" [value]=\"option.id\" >{{option.first_name+' '+option.last_name | titlecase }}</option>\r\n                  </select>\r\n                  <div *ngIf=\"submitted && f.teacher.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.teacher.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n           <div class=\"row\">&nbsp;</div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-xs-6 col-md-6\">\r\n                <div class=\"group\">\r\n                    <button  class=\"btn btn-block allam-btn-green text-white \">\r\n                            Next\r\n                    </button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/teacher-supervisor/question/question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/teacher-supervisor/question/question.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 200px;\n  max-height: 200px;\n}\n\n:host ::ng-deep .ck-editor {\n  width: 300px;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n.dataTables_filter > input {\n  width: 60%;\n}\n\n#autofill_info {\n  margin-top: 20px;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhY2hlci1zdXBlcnZpc29yL3F1ZXN0aW9uL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFx0ZWFjaGVyLXN1cGVydmlzb3JcXHF1ZXN0aW9uXFxxdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhY2hlci1zdXBlcnZpc29yL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUE2QixVQUFBO0FDRTdCOztBRERBO0VBQWlCLGdCQUFBO0VBQWtCLFdBQUE7QUNNbkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFjaGVyLXN1cGVydmlzb3IvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9ye1xyXG4gICAgd2lkdGg6IDMwMHB4OztcclxufVxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLmdyb3VwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNXB4O1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc19maWx0ZXIgPiBpbnB1dCB7IHdpZHRoOiA2MCU7fVxyXG4jYXV0b2ZpbGxfaW5mbyB7IG1hcmdpbi10b3A6IDIwcHg7IGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAuZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAwIDEycHggNXB4O1xufVxuXG4uZGF0YVRhYmxlc19maWx0ZXIgPiBpbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiNhdXRvZmlsbF9pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/teacher-supervisor/question/question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/teacher-supervisor/question/question.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");











var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(fb, activeAouter, router, alertService, curriculumSingleService, authenticationService, tsupervisorService) {
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
        this.masterArr = [];
        this.row_id = 1;
        this.isSave = true;
        this.isEdit = false;
        this.isEditCurr = false;
        this.isEditComp = false;
        this.idEdit = false;
        this.editData = [];
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].s3_url;
        this.local_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.durationOptions = ["05", "15", "25", "30", "60", "120"];
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        this.option_type = 'text';
        this.selectedAll = false;
        this.config = {
            fontSize: {
                options: [
                    9,
                    11,
                    13,
                    'default',
                    17,
                    19,
                    21
                ]
            },
            toolbar: [
                'heading',
                '|',
                'fontSize',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'MathType',
                'ChemType',
                'undo',
                'redo'
            ],
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
        this.question_value = "";
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.term = "";
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_image: [''],
            qui_type: [''],
            question_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option_type: [this.option_type],
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
            type: [''],
            duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            delArray: this.fb.array([])
        });
        this.teacher_id = (this.activeAouter.snapshot.params['teacher_id']); //atob
        console.log(this.teacher_id);
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        //this.getDraftQuestion();
        this.getPublishQuestion();
        this.getMasterData();
    };
    Object.defineProperty(QuestionComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
            //console.log( response.data);
        });
        console.log(this.masterArr);
    };
    QuestionComponent.prototype.getPublishQuestion = function () {
        var _this = this;
        var params = this.getRequestParams(this.term, this.page, this.pageSize);
        //console.log(params);
        this.tsupervisorService.getPublishQuestionNew(this.teacher_id, params).subscribe(function (response) {
            //console.log(response);
            _this.questionArr = response['data'];
            _this.count = response['count'];
        });
    };
    QuestionComponent.prototype.approveOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to approve?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, approve it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.tsupervisorService.approvePublishQuestion(item_id, _this.created_by, _this.editData).subscribe(function () {
                    self.getPublishQuestion();
                });
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Approved!', 'Your data has been approved.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    QuestionComponent.prototype.approveItem = function () {
        var _this = this;
        console.log(this.selectedItems);
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oh', 'No item selected to approve :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to approve?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, approve it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.selectedItems.forEach(function (value) {
                    self.questionArr.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.tsupervisorService.approvePublishQuestion(value, self.created_by, self.editData).subscribe(function () {
                                console.log('approved row');
                                self.getPublishQuestion();
                            });
                        }
                    });
                });
                _this.selectedAll = false;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Approved!', 'Your data has been approved.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    QuestionComponent.prototype.onCheckboxChange = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
    };
    QuestionComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    QuestionComponent.prototype.downloadItem = function () {
        var _this = this;
        this.router.navigate([]).then(function (result) { window.open('/authentication/studyexam-downlad/tsupervisor/1/' + _this.teacher_id, '_blank'); });
        ;
        //this.generatePDF();
    };
    QuestionComponent.prototype.editItem = function (event) {
        this.editData = event;
        console.log(this.editData);
        if (this.editData.quiz_type == 1) {
            this.isEditCurr = true;
            this.isEditComp = false;
        }
        else {
            this.isEditComp = true;
            this.isEditCurr = false;
        }
        this.isSave = false;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        //console.log('<<----------------');
        this.form.patchValue({
            save_type: this.editData.save_type,
            question: this.editData.question,
            option1: this.editData.option1,
            option2: this.editData.option2,
            option3: this.editData.option3,
            option4: this.editData.option4,
            answer: this.editData.answer,
            class: this.editData.class,
            quiz_sub_type: this.editData.quiz_sub_type,
            quiz_type: this.editData.quiz_type,
            chapter: this.editData.chapter,
            subject: this.editData.subject,
            semester: this.editData.semester,
            quant_verbal: this.editData.quant_verbal,
            group: this.editData.groups,
            lesson: this.editData.lesson,
            note: this.editData.note,
            level: this.editData.level,
            duration: this.convertTwoDigit(this.editData.duration),
            question_type: this.editData.question_type,
            option_type: this.editData.option_type,
            question_text: this.editData.question,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
            question_image: this.editData.question_image,
            type: this.editData.type
        });
        this.croppedImage = this.s3_url + this.editData.question_image_url;
        this.question_type = this.editData.question_type;
        this.option_type = this.editData.option_type;
    };
    QuestionComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        console.log(this.form.value);
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        if (this.form.value.question == '' && this.form.value.question_type != 'image') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        /*if(this.form.value.question_image=='' && (this.question_type=='image' || this.question_type=='text_and_image')){
           Swal.fire('','Please upload question.','error');
            return;
        }*/
        this.form.value.isFile = this.isFile;
        this.form.value.created_by = this.created_by;
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        console.log(this.form.value);
        console.log('---------->>>>>>>>');
        this.tsupervisorService.updateQuestionById(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question successfully updated');
                _this.getPublishQuestion();
                _this.idEdit = false;
                _this.isEditCurr = false;
                _this.isEditComp = false;
                _this.isProcessed = true;
                _this.isSave = true;
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            _this.submitted = false;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            _this.submitted = false;
        });
        /*if(this.form.value.save_type=='bulk'){
          this.tsupervisorService.updateQuestionById(this.form.value)
            .subscribe(
                data => {
                  if(data['status']==200){
                      this.alertService.pop('success', 'Question successfully updated');
                      this.getPublishQuestion();
                      this.idEdit=false;
                      this.isEditCurr=false;
                      this.isEditComp=false;
                      this.isProcessed=true;
                      this.isSave=true;
                    }
                    else
                    {
                      this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }

                    this.loading = false;
                    this.submitted=false

                    
                },
                error => {
                    this.alertService.pop('error', 'Something went wrong. Try again later.');
                    this.loading = false;
                    this.submitted=false

                });
        }
        else
        {
          this.form.value.question=this.question_value;
        
            this.tsupervisorService.updateQuestionByTsSingle(this.form.value)
              .subscribe(
                  data => {
                    if(data['status']==200){
                        this.alertService.pop('success', 'Question successfully updated');
                        this.getPublishQuestion();
                        this.idEdit=false;
                        this.isEditCurr=false;
                        this.isEditComp=false;
                        this.isProcessed=true;
                        this.isSave=true;
                      }
                      else
                      {
                        this.alertService.pop('error', 'Something went wrong. Try again later.');
                      }

                      this.loading = false;
                      this.submitted=false

                      
                  },
                  error => {
                      this.alertService.pop('error', 'Something went wrong. Try again later.');
                      this.loading = false;
                      this.submitted=false

                  });
        }
        */
    };
    QuestionComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isEditComp = false;
        this.isEditCurr = false;
        this.isSave = true;
    };
    QuestionComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.question_value = editor.getData();
        console.log('dsdsds');
        var html = $(".ck-content").html();
        this.question_value = html;
    };
    QuestionComponent.prototype.isOverflown = function (element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    };
    //custom search & pagination
    QuestionComponent.prototype.getRequestParams = function (searchText, page, pageSize) {
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
    QuestionComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getPublishQuestion();
    };
    QuestionComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getPublishQuestion();
    };
    QuestionComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.option_type = 'text';
        this.question_value = '';
        this.croppedImage = '';
        this.form.patchValue({
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        });
    };
    QuestionComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            var img = new Image();
            var name = event.target.files[0].name;
            var ext = name.substring(name.lastIndexOf('.') + 1);
            if (ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'png') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'File type should be jpeg, jpg or png format', 'error');
                return;
            }
            else {
                this.imageChangedEvent = event;
                this.showModal = true;
            }
        }
    };
    QuestionComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            question_image: this.croppedImage
        });
    };
    QuestionComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    QuestionComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    QuestionComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload image only', 'error');
    };
    QuestionComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    QuestionComponent.prototype.convertTwoDigit = function (n) {
        n = String(n);
        if (n.length == 1) {
            n = '0' + n;
        }
        return n;
    };
    QuestionComponent.prototype.selectAll = function () {
        this.selectedAll = !this.selectedAll;
        this.selectedItems = [];
        for (var i = 0; i < this.questionArr.length; i++) {
            this.questionArr[i].selected = this.selectedAll;
            //console.log(this.selectedAll)
            if (this.selectedAll == true) {
                this.selectedItems.push(this.questionArr[i].id);
            }
            else {
                this.selectedItems.splice(this.selectedItems.indexOf(this.questionArr[i].id), 1);
            }
        }
        //console.log(this.selectedItems)
    };
    QuestionComponent.prototype.checkIfAllSelected = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
        //console.log(this.selectedItems)
    };
    QuestionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__["TsupervisorService"] }
    ]; };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/question/question.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.scss */ "./src/app/pages/teacher-supervisor/question/question.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_9__["TsupervisorService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher-supervisor/teacher-supervisor-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/teacher-supervisor/teacher-supervisor-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TeacherSupervisorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherSupervisorRoutingModule", function() { return TeacherSupervisorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teacher_supervisor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-supervisor.component */ "./src/app/pages/teacher-supervisor/teacher-supervisor.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question/question.component */ "./src/app/pages/teacher-supervisor/question/question.component.ts");





var routes = [
    {
        path: '',
        component: _teacher_supervisor_component__WEBPACK_IMPORTED_MODULE_3__["TeacherSupervisorComponent"],
        data: {
            breadcrumb: 'General Competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'question/:teacher_id',
        component: _question_question_component__WEBPACK_IMPORTED_MODULE_4__["QuestionComponent"],
        data: {
            breadcrumb: 'Review Question',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var TeacherSupervisorRoutingModule = /** @class */ (function () {
    function TeacherSupervisorRoutingModule() {
    }
    TeacherSupervisorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeacherSupervisorRoutingModule);
    return TeacherSupervisorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/teacher-supervisor/teacher-supervisor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/teacher-supervisor/teacher-supervisor.component.ts ***!
  \**************************************************************************/
/*! exports provided: TeacherSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherSupervisorComponent", function() { return TeacherSupervisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var TeacherSupervisorComponent = /** @class */ (function () {
    function TeacherSupervisorComponent(fb, route, tsupervisorService, router, alertService, authenticationService) {
        this.fb = fb;
        this.route = route;
        this.tsupervisorService = tsupervisorService;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].s3_url;
        this.teacherArr = [];
        this.submitted = false;
        this.loading = false;
        this.questionArrr = [];
        this.form = this.fb.group({
            teacher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    TeacherSupervisorComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getAllTeacher();
    };
    TeacherSupervisorComponent.prototype.getAllTeacher = function () {
        var _this = this;
        this.tsupervisorService.getAllTeacher().subscribe(function (response) {
            _this.teacherArr = response['data'];
            console.log(_this.teacherArr);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    Object.defineProperty(TeacherSupervisorComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    TeacherSupervisorComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var teacher_id = this.form.value.teacher;
        var qUrl = '/teacher-supervisor/question/' + btoa(teacher_id);
        console.log(qUrl);
        console.log(teacher_id);
        this.router.navigate([qUrl]);
    };
    TeacherSupervisorComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__["TsupervisorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    TeacherSupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-supervisor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher-supervisor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher-supervisor/teacher-supervisor.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_2__["TsupervisorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], TeacherSupervisorComponent);
    return TeacherSupervisorComponent;
}());



/***/ }),

/***/ "./src/app/pages/teacher-supervisor/teacher-supervisor.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/teacher-supervisor/teacher-supervisor.module.ts ***!
  \***********************************************************************/
/*! exports provided: SafeHtmlPipe, TeacherSupervisorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherSupervisorModule", function() { return TeacherSupervisorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _teacher_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacher-supervisor-routing.module */ "./src/app/pages/teacher-supervisor/teacher-supervisor-routing.module.ts");
/* harmony import */ var _teacher_supervisor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacher-supervisor.component */ "./src/app/pages/teacher-supervisor/teacher-supervisor.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question/question.component */ "./src/app/pages/teacher-supervisor/question/question.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");






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

var TeacherSupervisorModule = /** @class */ (function () {
    function TeacherSupervisorModule() {
    }
    TeacherSupervisorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _teacher_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeacherSupervisorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperModule"]
            ],
            declarations: [
                _teacher_supervisor_component__WEBPACK_IMPORTED_MODULE_4__["TeacherSupervisorComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"],
                SafeHtmlPipe
            ]
        })
    ], TeacherSupervisorModule);
    return TeacherSupervisorModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teacher-supervisor-teacher-supervisor-module.js.map