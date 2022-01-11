(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-study-exam-question-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/bulk-competitive.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/bulk-competitive.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid single-curriculum\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 single-curriculum-wrap\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"m-b-0\">Competitive exam</h4>\r\n          <h5 class=\"pre_title\">({{pre_quiz_title}})</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isSave\">\r\n        <div class=\"col-md-12 \">\r\n          <form class=\"md-float-material\" [formGroup]=\"formVar\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row file-upload\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"group\">\r\n                  Upload xlsx file\r\n                </div>\r\n                <div class=\"group\">\r\n                  <input #variable  accept=\".xlsx\" (change)=\"fileChangeXlsx($event, variable)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\">\r\n                </div>\r\n                <div class=\"group\">\r\n                  <a href=\"assets/file/se_competitive_format.xlsx\">  Sample Quiz\r\n                  <img class=\"img-fluid\" width=\"20\" height=\"18\" alt=\" \" src=\"assets/images/sample-quiz.jpg\"> </a>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"group\">\r\n                  Upload image Zip file\r\n                </div>\r\n                <div class=\"group\">\r\n                  <input #variable1 accept=\".zip\" (change)=\"fileChangeZip($event, variable1)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\">\r\n                </div>\r\n\r\n                <div class=\"group do-u-have-img\">\r\n                    Do you have image? <input type=\"checkbox\" formControlName=\"existImage\" value=\"Yes\" (change)=\"eventCheck($event)\"> Yes\r\n\r\n                  </div>\r\n                <div class=\"group\">\r\n                  <div class=\"col-md-12\">\r\n                    <!-- Progress Bar --> \r\n                    <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n                        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                          [style.width.%]=\"percentDone\">\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- spinnner element is defined with id loading -->\r\n                  <div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n                      <div class=\"spinner-border\" role=\"status\"> \r\n                          <span class=\"sr-only\" id=\"loading\"></span> \r\n                      </div> \r\n                  </div>\r\n                  \r\n                  <button type=\"button\" class=\"btn allam-btn-green text-white\" (click)=\"upload()\" id=\"btnUpload\"><span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span> Upload</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        \r\n        \r\n          <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n          <div *ngIf=\"isError\" class=\"bulk_table_fullw\">\r\n            <h5 class=\"mt-4\">Following data is having errors:</h5>\r\n            <div class=\"col-sm-12 col-xs-12 col-md-12 table-responsive p-0\">\r\n              <div class=\"publish-table-wrap mt-0\">\r\n               \r\n                  <table width=\"100%\" class=\"table table-striped table-bordered nowrap dataTable\" border=\"1\">\r\n                    <thead>\r\n                      <tr>\r\n                       \r\n                        <th>Question</th>\r\n                       <!--  <th>Question File Url</th> -->\r\n                        <th>Answer</th>\r\n                        <th>option A</th>\r\n                        <th>option B</th>\r\n                        <th>option C</th>\r\n                        <th>Option D</th>\r\n                        <th>Level</th>\r\n                        \r\n                        <th>Remarks</th>\r\n                        \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of errorData\">\r\n                        \r\n                        <td width=\"10%\">{{ item.question }}</td>\r\n                        <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                        <td width=\"10%\">{{ item.answer }}</td>\r\n                        <td width=\"10%\">{{ item.option1 }}</td>\r\n                        <td width=\"10%\">{{ item.option2 }}</td>\r\n                         <td width=\"10%\">{{ item.option3 }}</td>\r\n                        <td width=\"10%\">{{ item.option4 }}</td>\r\n                        <td width=\"10%\">{{ item.level }}</td>\r\n                       \r\n                        <td [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isProcessed\" class=\"bulk_table_fullw\">\r\n            <div class=\"card-block col-sm-12 col-xs-12 col-md-12 p-0\">\r\n              \r\n                  <button class=\"btn allam-btn btn-success mt-3 mb-3\" (click)=\"downloadItem()\" title=\"Download\" type=\"button\"><i class=\"icofont icofont-download\"></i></button>\r\n               \r\n                    <div class=\"publish-table-wrap table-responsive mt-0 pt-0\">\r\n                      <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                        <thead>\r\n                          <tr>\r\n                           <!--  <th>Level</th> -->\r\n                            <th>Answer</th>\r\n                            <th><span class=\"option-width\">Option D </span></th>\r\n                            <th><span class=\"option-width\">Option C </span></th>\r\n                            <th><span class=\"option-width\">Option B </span></th>\r\n                            <th><span class=\"option-width\">Option A </span></th>\r\n                            <th>Question Type</th>\r\n                            <th>Question </th>\r\n                            <th>Quant/Verbal </th>\r\n                            <th>Group </th>\r\n                            <th>Quiz type</th>\r\n                            <th>Quiz sub type</th>\r\n                            <th>Duation</th>\r\n                            <th>Edit </th>\r\n                            <th>Delete </th>\r\n                            <th><span class=\"option-width\"><input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"selectedAll\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button> </span>\r\n                            \r\n                            </th>\r\n                           \r\n                           <!--  <th>Image URL</th> -->\r\n                            \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of questionArr\">  \r\n                          <!--   <td class=\"\">{{ item.level }}</td> -->\r\n                            <td class=\"\">{{ item.answer }}</td>\r\n                            <td class=\"\">{{ item.option4 }}</td>\r\n                            <td class=\"\">{{ item.option3 }}</td>\r\n                            <td class=\"\">{{ item.option2 }}</td>\r\n                            <td class=\"\">{{ item.option1 }}</td>\r\n                            <td class=\"\">{{ item.question_type }} </td>\r\n                            <td *ngIf=\"item.question_type=='text_and_image'\">\r\n                            <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n                            <br>\r\n                             {{ item.question }}\r\n                            </td>\r\n                            <td *ngIf=\"item.question_type=='image'\">\r\n                            <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n                            </td>\r\n                            <td *ngIf=\"item.question_type=='text' || item.question_type==null\">\r\n                             {{ item.question }}\r\n                            </td>\r\n                            <td class=\"\">{{ item.quant_verbal }}</td>\r\n                            <td class=\"\">{{ item.groups }}</td>\r\n                            <td class=\"\">{{ item.quiz_type_name }}</td>\r\n                            <td class=\"\">{{ item.quiz_sub_type_name }}</td>\r\n                            <td class=\"\">{{ item.duration }}</td>\r\n                          <!--  <td class=\"\"> <span class=\"img-url-break\">{{ item.question_image_url }} </span> </td> -->\r\n                            <td><button type=\"button\" class=\"btn allam-btn allam-btn-green text-white\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button>\r\n                            </td>\r\n                            <td class=\"\">\r\n                              <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                            </td>\r\n                            <td class=\"categories\"><!-- <input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" > -->\r\n                              <input class=\"form-check-input\" type=\"checkbox\" value=\"{{item.question}}\" [(ngModel)]=\"item.selected\" (change)=\"checkIfAllSelected($event,item.id)\">\r\n                            </td>\r\n                            \r\n                             \r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                        <div class=\"m-t-15\">\r\n                            <button (click)=\"reUpload()\" class=\"btn allam-btn-green text-white round-border \">\r\n                              Cancel\r\n                            </button> &nbsp; \r\n                            <!-- <button (click)=\"onSubmitData()\" class=\"btn allam-btn-green text-white round-border \">\r\n                              Publish\r\n                            </button> -->\r\n                            <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border\"  (click)=\"publish()\">\r\n                              <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                               Publish\r\n                            </button>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                    </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isEdit\">\r\n        <div class=\"col-md-12\">\r\n          <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n            <div class=\"row\">\r\n              <!-- <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label >Class</label>\r\n                    <select class=\"form-control\" formControlName=\"class\" [ngClass]=\"{ 'is-invalid': submitted && f.class.errors }\">\r\n                      <option value=\"\">Class</option>\r\n                      <option *ngFor=\"let option of masterArr.master_class\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    \r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.class.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.class.errors.required\">Class is required.</div>\r\n                      <div *ngIf=\"f.class.errors.pattern\">Accept numeric values only.</div>\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Quiz Sub Type</label>\r\n                    \r\n                    <select class=\"form-control\" formControlName=\"quiz_sub_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_sub_type.errors }\">\r\n                      <option value=\"\">Quiz Sub Type</option>\r\n                      <option *ngFor=\"let option of masterArr.master_sub_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.quiz_sub_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.quiz_sub_type.errors.required\">Quiz sub type is required.</div>\r\n                   </div>\r\n                 </div>\r\n              </div> \r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Quiz Type</label>\r\n                    \r\n                    <select class=\"form-control\" formControlName=\"quiz_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_type.errors }\">\r\n                      <option value=\"\">QuizType</option>\r\n                      <option *ngFor=\"let option of masterArr.master_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.quiz_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.quiz_type.errors.required\">Quiz type is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div>  -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n            \r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Quant/Verbal</label>\r\n                    <input class=\"form-control\" placeholder=\"Quant/Verbal\" type=\"text\" formControlName=\"quant_verbal\" formControlName=\"quant_verbal\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.quant_verbal.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.quant_verbal.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.quant_verbal.errors.required\">This field is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Group</label>\r\n                    <select class=\"form-control\" formControlName=\"group\" [ngClass]=\"{ 'is-invalid': submitted && f.group.errors }\">\r\n                      <option value=\"\">Group</option>\r\n                      <option *ngFor=\"let option of masterArr.master_group\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.group.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.group.errors.required\">Group is required.</div>\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n              <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n               <div class=\"group\">\r\n                <label>Question Type</label>\r\n                <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                      <option value=\"text\">Text</option>\r\n                      <option value=\"image\">Image</option>\r\n                      <option value=\"text_and_image\">Text and Image</option>\r\n                </select>\r\n                <span class=\"md-line\"></span>\r\n                 <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n              <!-- <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Lesson</label>\r\n                    <select class=\"form-control\" formControlName=\"lesson\" [ngClass]=\"{ 'is-invalid': submitted && f.lesson.errors }\">\r\n                      <option value=\"\">Lesson</option>\r\n                      <option *ngFor=\"let option of masterArr.master_lesson\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.lesson.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.lesson.errors.required\">Lesson is required.</div>\r\n                          <div *ngIf=\"f.lesson.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                 </div>\r\n              </div>  -->\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 \">\r\n                <div class=\"row \">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                  \r\n                  <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                  <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                    <label class=\"radio-box\">\r\n                      <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'a'\">\r\n                      <span class=\"checkmark\"></span>\r\n                    </label>\r\n                   </div>\r\n                </div>\r\n                <div class=\"row m-t-15\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                  <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                    <label class=\"radio-box\">\r\n                      <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value.toLowerCase() == 'b'\">\r\n                      <span class=\"checkmark\"></span>\r\n                    </label>\r\n                   </div>\r\n                </div>\r\n                <div class=\"row m-t-15\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                  <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                    <label class=\"radio-box\">\r\n                      <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'c'\"> \r\n                      <span class=\"checkmark\"></span>\r\n                    </label>\r\n                   </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-15\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                  \r\n                  <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                    <label class=\"radio-box\">\r\n                      <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'd'\">\r\n                      <span class=\"checkmark\"></span>\r\n                    </label>\r\n                   </div>\r\n                </div>\r\n              <!--   <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                    <label >Level</label>\r\n                     <div class=\"group\">\r\n                      \r\n                      <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                        <option value=\"\">Level</option>\r\n                        <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                          <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div> -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                    <label >Duration (In Seconds)</label>\r\n                     <div class=\"group\">\r\n                      <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                        <option value=\"\">Duration (In Seconds)</option>\r\n                        <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                      </select>\r\n                      \r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                          <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                    <label >Note</label>\r\n                    <div class=\"group\">\r\n\r\n                     <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                     <span class=\"md-line\"></span>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div> \r\n                \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                    <div class=\"m-t-15\">\r\n                      <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                         <span *ngIf=\"this.idEdit\">Back</span>\r\n                      </button>\r\n                      \r\n                      <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                         <span *ngIf=\"this.idEdit\">Update</span>\r\n                         \r\n                      </button>\r\n\r\n                    </div>\r\n                    \r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                </div>\r\n              </div>\r\n               <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                <div class=\"editor-wrap\" id=\"my-node\"> \r\n                 <label>Question</label>\r\n                  \r\n                  <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea>\r\n                  <span class=\"md-line\"></span>\r\n                  <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n               <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n             <div class=\"form-group  files color m-t-15\">\r\n                <div class=\" m-t-15\">\r\n                  <label>Upload Question </label>\r\n                    <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                  <img [src]=\"croppedImage\" />\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n             <div class=\"form-group  files color m-t-15\">\r\n                <div class=\" m-t-15\">\r\n                  <label>Upload Question </label>\r\n                    <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                  <img [src]=\"croppedImage\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"editor-wrap\" id=\"my-node\"> \r\n                 <label>Question Text</label>\r\n                  <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" > </textarea>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n              \r\n            </div>\r\n            <!--\r\n               <div class=\"row\">\r\n                <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                  <div class=\"m-t-15\">\r\n                    <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                      <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                       Save and insert\r\n                    </button>\r\n                    </div>\r\n                   </div>\r\n                   \r\n            </div>\r\n            -->\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/single-competitive.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/single-competitive.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid single-curriculum\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 single-curriculum-wrap\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 quiz-title-wrap\">\r\n          <h4 class=\"main-title\">Competitive exam</h4>\r\n          <h5 class=\"pre_title\">({{pre_quiz_title}})</h5>\r\n        </div>\r\n        </div>\r\n        <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n         <!--  <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                 <select class=\"form-control\" formControlName=\"class\" [ngClass]=\"{ 'is-invalid': submitted && f.class.errors }\">\r\n                  <option value=\"\">Class</option>\r\n                  <option *ngFor=\"let option of masterArr.master_class\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n                <span class=\"md-line\"></span>\r\n                <div *ngIf=\"submitted && f.class.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.class.errors.required\">Class is required.</div>\r\n                  <div *ngIf=\"f.class.errors.pattern\">Accept numeric values only.</div>\r\n                </div>\r\n             </div>\r\n          </div>  -->\r\n          \r\n         <!--  <div class=\" col-sm-4 col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Quiz Sub Type</label>\r\n                <select class=\"form-control\" formControlName=\"quiz_sub_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_sub_type.errors }\">\r\n                  <option value=\"\">Quiz Sub Type</option>\r\n                  <option *ngFor=\"let option of masterArr.master_sub_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                </select>\r\n                <span class=\"md-line\"></span>\r\n                <div *ngIf=\"submitted && f.quiz_sub_type.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quiz_sub_type.errors.required\">Quiz sub type is required.</div>\r\n               </div>\r\n             </div>\r\n          </div> \r\n           <div class=\" col-sm-4 col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Quiz Type</label>\r\n                 <select class=\"form-control\" formControlName=\"quiz_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_type.errors }\">\r\n                  <option value=\"\">Quiz Type</option>\r\n                  <option *ngFor=\"let option of masterArr.master_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                </select>\r\n                <span class=\"md-line\"></span>\r\n                <div *ngIf=\"submitted && f.quiz_type.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quiz_type.errors.required\">Quiz type is required.</div>\r\n                </div>\r\n             </div>\r\n          </div>  -->\r\n       </div>\r\n\r\n       <div class=\"row\">\r\n        \r\n        <!-- <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n              <label>Chapter</label>\r\n              <select class=\"form-control\" formControlName=\"chapter\" [ngClass]=\"{ 'is-invalid': submitted && f.chapter.errors }\">\r\n                  <option value=\"\">Chapter</option>\r\n                  <option *ngFor=\"let option of masterArr.master_chapter\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n\r\n              <span class=\"md-line\"></span>\r\n              <div *ngIf=\"submitted && f.chapter.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.chapter.errors.required\">Chapter is required.</div>\r\n                  <div *ngIf=\"f.chapter.errors.pattern\">Accept numeric values only.</div>\r\n\r\n              </div>\r\n           </div>\r\n        </div> --> \r\n        \r\n         <!-- <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n              <label>Semester</label>\r\n              <select class=\"form-control\" formControlName=\"semester\" [ngClass]=\"{ 'is-invalid': submitted && f.semester.errors }\">\r\n                <option value=\"\">Semester</option>\r\n                <option *ngFor=\"let option of masterArr.master_semester\" [value]=\"option.id\" >{{option.name}}</option>\r\n              </select>\r\n              <span class=\"md-line\"></span>\r\n              <div *ngIf=\"submitted && f.semester.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.semester.errors.required\">Semester is required.</div>\r\n                  <div *ngIf=\"f.semester.errors.pattern\">Accept numeric values only.</div>\r\n\r\n              </div>\r\n           </div>\r\n         </div> --> \r\n     </div>\r\n     <div class=\"row\">\r\n       <!--  <div class=\" col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n              <label>Subject</label>\r\n               <select class=\"form-control\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\r\n                  <option value=\"\">Subject</option>\r\n                  <option *ngFor=\"let option of masterArr.master_subject\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n              <span class=\"md-line\"></span>\r\n              <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.subject.errors.required\">Subject is required.</div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n      <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Quant/Verbal</label>\r\n            <input class=\"form-control\" placeholder=\"Quant/Verbal\" type=\"text\" formControlName=\"quant_verbal\" formControlName=\"quant_verbal\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.quant_verbal.errors }\">\r\n            <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.quant_verbal.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quant_verbal.errors.required\">This field is required.</div>\r\n            </div>\r\n         </div>\r\n      </div> \r\n       <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Group</label>\r\n             <select class=\"form-control\" formControlName=\"group\" [ngClass]=\"{ 'is-invalid': submitted && f.group.errors }\">\r\n                  <option value=\"\">Group</option>\r\n                  <option *ngFor=\"let option of masterArr.master_group\" [value]=\"option.id\" >{{option.name}}</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.group.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.group.errors.required\">Group is required.</div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-sm-2 col-sm-2 col-md-2\">\r\n          <div class=\"group\">\r\n            <label>Language</label>\r\n            <select class=\"form-control\" (change)=\"lgChanged($event.target.value)\" formControlName=\"language\" [ngClass]=\"{ 'is-invalid': submitted && f.language.errors }\">\r\n                  <option value=\"arabic\">Arabic</option>\r\n                  <option value=\"english\">English</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.language.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.language.errors.required\">Question Type is required.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div> \r\n       <div class=\"col-sm-2 col-sm-2 col-md-2\">\r\n           <div class=\"group\">\r\n            <label>Question Type</label>\r\n            <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                  <option value=\"text\">text</option>\r\n                  <option value=\"image\">image</option>\r\n                  <option value=\"text_and_image\">Text and Image</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.question_type.errors.required\">Question type is required.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n       <!-- <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Lesson</label>\r\n             <select class=\"form-control\" formControlName=\"lesson\" [ngClass]=\"{ 'is-invalid': submitted && f.lesson.errors }\">\r\n                  <option value=\"\">Lesson</option>\r\n                  <option *ngFor=\"let option of masterArr.master_lesson\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n\r\n            <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.lesson.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.lesson.errors.required\">Lession is required.</div>\r\n                  <div *ngIf=\"f.lesson.errors.pattern\">Accept numeric values only.</div>\r\n            </div>\r\n         </div>\r\n       </div>  -->\r\n   </div>\r\n\r\n   <div class=\"row\">\r\n    \r\n    <div class=\"col-lg-8 \"> \r\n      <div class=\"row \">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n        <ckeditor [editor]=\"Editor\" [data]='optiona_value' [config]=\"config\" (blur)=\"onChangeA($event)\" class=\"q_opton optiona\"></ckeditor>\r\n        <!-- <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\"> -->\r\n\r\n        <span class=\"md-line\"></span>\r\n          <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n           </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" checked>\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n      <div class=\"row m-t-15\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n        <ckeditor [editor]=\"Editor\" [data]='optionb_value' [config]=\"config\" (blur)=\"onChangeB($event)\" class=\"q_opton optionb\"></ckeditor>\r\n        <!-- <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\"> -->\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n           </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n      <div class=\"row m-t-15\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n        <ckeditor [editor]=\"Editor\" [data]='optionc_value' [config]=\"config\" (blur)=\"onChangeC($event)\" class=\"q_opton optionc\"></ckeditor>\r\n        <!-- <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\"> -->\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\"> \r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n      <div class=\"row m-t-15\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n        <ckeditor [editor]=\"Editor\" [data]='optiond_value' [config]=\"config\" (blur)=\"onChangeD($event)\" class=\"q_opton optiond\"></ckeditor>\r\n        <!-- <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\"> -->\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n          </div>           \r\n\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n          <div class=\"group\">\r\n             <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                  <option value=\"\">Level</option>\r\n                  <option *ngFor=\"let option of masterArr.master_level\" [value]=\"option.id\" >{{option.name}}</option>\r\n            </select>\r\n\r\n            <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n            </div>\r\n          </div>\r\n        </div>  -->\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n    </div> \r\n    <div class=\"row\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n           <div class=\"group\">\r\n            <label>Duration(in seconds)</label>\r\n            <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                  <option value=\"\">Duration(in seconds)</option>\r\n                  <option value=\"05\">05</option>\r\n                  <option value=\"15\">15</option>\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"30\">30</option>\r\n                  <option value=\"60\">60</option>\r\n                  <option value=\"120\">120</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.duration.errors.required\">Duration is required.</div>\r\n                <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div> \r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\r\n    </div> \r\n    \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n     <div class=\"group\">\r\n      <label>Note</label>\r\n       <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n       <span class=\"md-line\"></span>\r\n    </div>\r\n  </div> \r\n  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\r\n  </div> \r\n\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12 col-md-10\">\r\n      <div class=\"m-t-15\">\r\n        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n           <span *ngIf=\"this.idEdit\">Update</span>\r\n           <span *ngIf=\"this.idEdit==false\">Save and insert</span>\r\n        </button>\r\n        </div>\r\n       </div>\r\n       <div class=\"col-md-2\"> </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    \r\n      <div class=\"col-md-4\" *ngIf=\"question_type=='text'\">\r\n        <div class=\"editor-wrap\" id=\"my-node\"> \r\n         <label>Question</label>\r\n          <ckeditor [editor]=\"Editor\" [config]=\"config\" [data]='question_value' (blur)=\"onChange($event)\" class=\"question\"></ckeditor>\r\n        <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n         <div class=\"form-group  files color m-t-15\">\r\n            <div class=\" m-t-15\">\r\n              <label>Upload Question </label>\r\n                <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"preview\" >\r\n              <img [src]=\"croppedImage\" />\r\n            </div>\r\n          </div>\r\n      </div>\r\n       <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n       <div class=\"form-group  files color m-t-15\">\r\n          <div class=\" m-t-15\">\r\n            <label>Upload Question </label>\r\n              <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"preview\" >\r\n            <img [src]=\"croppedImage\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"editor-wrap\" id=\"my-node\"> \r\n           <label>Question Text</label>\r\n            <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n     \r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card-block col-sm-6 col-sm-6 col-md-6\">\r\n         \r\n     </div> \r\n\r\n     <div class=\"card-block col-sm-6 col-sm-6 col-md-6\">\r\n    \r\n </div> \r\n \r\n   </div>\r\n\r\n</form>   \r\n\r\n\r\n  <div class=\"row\" *ngIf=\"gridview\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"download-icon\">\r\n        <button class=\"btn allam-btn btn-success\" (click)=\"downloadItem()\" title=\"Download\" type=\"button\"><i class=\"icofont icofont-download\"></i></button>\r\n      </div>\r\n      <div class=\"publish-table-wrap m-b-0 table-responsive\"> \r\n        <table class=\"table table-striped table-bordered \" id=\"\" >\r\n        <thead>\r\n          <tr>\r\n            <th>Answer</th>\r\n            <th><span class=\"option-width\">Option D </span></th>\r\n            <th><span class=\"option-width\">Option C </span></th>\r\n            <th><span class=\"option-width\">option B </span></th>\r\n            <th><span class=\"option-width\">option A</span> </th>\r\n            <th>Question </th>\r\n            <th>Quant/Verbal </th>\r\n            <th>Group </th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n            <th>\r\n              <button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\">\r\n              <i class=\"icofont icofont-ui-delete\"></i></button> \r\n            </th>\r\n          </tr>\r\n         </thead>\r\n          <tbody>\r\n            <tr class=\"even ng-star-inserted\" *ngFor=\"let question of questionArr\">\r\n                <td class=\"\">{{ question.answer }}</td>\r\n                <td class=\"\"  [innerHTML]=\"question.option4 | safeHtml\"></td>\r\n                <td class=\"\"  [innerHTML]=\"question.option3 | safeHtml\"></td>\r\n                <td class=\"\"  [innerHTML]=\"question.option2 | safeHtml\"></td>\r\n                <td class=\"\"  [innerHTML]=\"question.option1 | safeHtml\"></td>\r\n                <td class=\"\">\r\n                  <div *ngIf=\"question.qui_type=='text'\" [innerHTML]=\"question.question | safeHtml\"></div>\r\n                  <div *ngIf=\"question.qui_type=='image'\">\r\n                    <img src=\"{{s3_url+question.question_image_url}}\">\r\n                  </div>\r\n                  <div *ngIf=\"question.qui_type=='text_and_image'\">\r\n                    <img src=\"{{s3_url+question.question_image_url}}\">\r\n                    <br>{{question.question}}\r\n                  </div>\r\n                </td>\r\n                <td class=\"\">{{ question.quant_verbal }}</td>\r\n                <td class=\"\">{{ question.groups }}</td>\r\n                <td class=\"\">\r\n                  <button class=\"btn allam-btn allam-btn-green text-white\" (click)=\"editItem(question)\" title=\"Edit\" type=\"button\"><i class=\"icofont icofont-ui-edit\"></i></button>\r\n                </td>\r\n                <td class=\"\">\r\n                  <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(question.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                </td>\r\n                <td class=\"categories\">\r\n                   <input type=\"checkbox\"  name=\"del_row\" [value]=\"question.id\" (change)=\"onCheckboxChange($event,question.id)\" >  \r\n                </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n          </table>\r\n\r\n\r\n         \r\n      </div>\r\n   </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"gridview\">\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n      <div class=\"m-t-15 fl-left\">\r\n         <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border m-r-10 \"  (click)=\"publish()\">\r\n          <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n           Publish\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/bulk-curriculum.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/bulk-curriculum.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid single-curriculum\">\r\n \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 single-curriculum-wrap\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Curriculum Exam</h4>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isSave\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12\">\r\n            <form class=\"md-float-material\" [formGroup]=\"formVar\" novalidate (ngSubmit)=\"onSubmit()\">\r\n\r\n              <div class=\"row file-upload\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                  Upload xlsx file\r\n                </div>\r\n                  <div class=\"group\">\r\n                    <input #variable accept=\".xlsx\" (change)=\"fileChangeXlsx($event, variable)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\">\r\n                  </div>\r\n                  <div class=\"group\">\r\n                    <a href=\"assets/file/se_curriculum_format.xlsx\"> \r\n                      Sample Quiz\r\n                    <img class=\"img-fluid\" width=\"20\" height=\"18\" alt=\" \" src=\"assets/images/sample-quiz.jpg\"> </a>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"group\">\r\n                  Upload image Zip file\r\n                </div>\r\n                  <div class=\"group\">\r\n                    <input #variable1 accept=\".zip\" (change)=\"fileChangeZip($event, variable1)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\">\r\n                  </div>\r\n\r\n                  <div class=\"group do-u-have-img\">\r\n                    Do you have image? <input type=\"checkbox\" formControlName=\"existImage\" value=\"Yes\" (change)=\"eventCheck($event)\"> Yes\r\n\r\n                  </div>\r\n                  <div class=\"group\">\r\n                    <div class=\"col-md-12\">\r\n                      <!-- Progress Bar --> \r\n                      <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n                          <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                            [style.width.%]=\"percentDone\">\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- spinnner element is defined with id loading -->\r\n                      <div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n                          <div class=\"spinner-border\" role=\"status\"> \r\n                              <span class=\"sr-only\" id=\"loading\"></span> \r\n                          </div> \r\n                      </div>\r\n                    \r\n                     <button type=\"button\" class=\"btn allam-btn-green text-white\" (click)=\"upload()\" id=\"btnUpload\"><span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span> Upload</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div *ngIf=\"isError\" class=\"bulk_table_fullw table-responsive\">\r\n              <div class=\"publish-table-wrap \">\r\n                <h1>Following data is having errors:</h1>\r\n                  <table width=\"100%\" class=\"table table-striped table-bordered nowrap dataTable\" border=\"1\">\r\n                    <thead>\r\n                      <tr>\r\n                        \r\n                        <th width=\"10%\">Question</th>\r\n                        <!-- <th width=\"10%\">Question File Url</th> -->\r\n                        <th width=\"10%\">Answer</th>\r\n                        <th width=\"10%\">Option A</th>\r\n                        <th width=\"10%\">Option B</th>\r\n                        <th width=\"10%\">Option C</th>\r\n                        <th width=\"10%\">Option D</th>\r\n                        <th width=\"10%\">Level</th>\r\n                        <th width=\"10%\">Notes</th>\r\n                        <th width=\"10%\">Remarks</th>\r\n                        \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of errorData\">\r\n                        \r\n                        <td width=\"10%\">{{ item.question }}</td>\r\n                        <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                        <td width=\"10%\">{{ item.answer }}</td>\r\n                        <td width=\"10%\">{{ item.option1 }}</td>\r\n                        <td width=\"10%\">{{ item.option2 }}</td>\r\n                        <td width=\"10%\">{{ item.option3 }}</td>\r\n                        <td width=\"10%\">{{ item.option4 }}</td>\r\n                        <td width=\"10%\">{{ item.level }}</td>\r\n                        <td width=\"10%\">{{ item.notes }}</td>\r\n                        <td [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n              </div>\r\n            \r\n          </div>\r\n          <div *ngIf=\"isProcessed\" class=\"bulk_table_fullw\">\r\n           \r\n              <button class=\"btn allam-btn btn-success mt-3 mb-3\" (click)=\"downloadItem()\" title=\"Download\" type=\"button\"><i class=\"icofont icofont-download\"></i></button>\r\n           \r\n                    <div class=\"publish-table-wrap table-responsive mt-0 pt-0\">\r\n                      <table id=\"autofill\" class=\"table table-striped table-bordered table-sm dataTable no-footer\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>Level</th>\r\n                            <th>Answer</th>\r\n                            <th><span class=\"option-width\">Option D </span></th>\r\n                            <th><span class=\"option-width\">Option C </span></th>\r\n                            <th><span class=\"option-width\">Option B </span></th>\r\n                            <th><span class=\"option-width\">Option A </span></th>\r\n                            <th>Question Type</th>\r\n                            <th>Question </th>\r\n                            <!-- <th>Quant/Verbal </th>\r\n                            <th>Group </th> -->\r\n                            <th>Quiz type</th>\r\n                            <!-- <th>Quiz sub type</th> -->\r\n                            <th>Duration</th>\r\n                          <!--   <th>Image URL</th> -->\r\n                          <th>Edit </th>\r\n                          <th>Delete </th>\r\n                          <th><span class=\"option-width\"><input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"selectedAll\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button> </span>\r\n                          </th>\r\n                            \r\n                           \r\n                            \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of questionArr\">\r\n                            \r\n                            \r\n                            <td class=\"\">{{ item.level }}</td>\r\n                            <td class=\"\">{{ item.answer }}</td>\r\n                            <td class=\"\">{{ item.option4 }}</td>\r\n                            <td class=\"\">{{ item.option3 }} </td>\r\n                            <td class=\"\">{{ item.option2 }} </td>\r\n                            <td class=\"\">{{ item.option1 }} </td>\r\n                            <td class=\"\">{{ item.question_type }} </td>\r\n                            <td *ngIf=\"item.question_type=='text_and_image'\">\r\n                            <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n                            <br>\r\n                             {{ item.question }}\r\n                            </td>\r\n                            <td *ngIf=\"item.question_type=='image'\">\r\n                            <img width=\"300\" height=\"200\" src=\"{{ local_api_url}}{{item.question_image}}\"/>\r\n                            </td>\r\n                            <td *ngIf=\"item.question_type=='text' || item.question_type==null\">\r\n                             {{ item.question }}\r\n                            </td>\r\n                            <td class=\"\">{{ item.quiz_type_name }}</td>\r\n                            <td class=\"\">{{ item.duration }}</td>\r\n                            <td><button type=\"button\" class=\"btn allam-btn allam-btn-green text-white\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button></td>\r\n                            <td class=\"\">\r\n                              <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                            </td>\r\n                            <td class=\"categories\"><!-- <input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" > -->\r\n                              \r\n                              <input class=\"form-check-input\" type=\"checkbox\" value=\"{{item.question}}\" [(ngModel)]=\"item.selected\" (change)=\"checkIfAllSelected($event,item.id)\">\r\n                            </td>\r\n                           \r\n                           \r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                        \r\n                            <button (click)=\"reUpload()\" class=\"btn allam-btn-green text-white round-border \">\r\n                              Cancel\r\n                            </button> &nbsp; \r\n                            <!-- <button (click)=\"onSubmitData()\" class=\"btn allam-btn-green text-white round-border \">\r\n                              Publish\r\n                            </button> -->\r\n                            <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border\"  (click)=\"publish()\">\r\n                            <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                               Publish\r\n                            </button>\r\n                       \r\n                        \r\n                      </div>\r\n                    </div>\r\n                  \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isEdit\">\r\n        <div class=\"col-md-12\">\r\n          <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n            <div class=\"row\">\r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\"> \r\n                    <label>Class</label>\r\n                    <select class=\"form-control\" formControlName=\"class\" [ngClass]=\"{ 'is-invalid': submitted && f.class.errors }\">\r\n                      <option value=\"\">Class</option>\r\n                      <option *ngFor=\"let option of masterArr.master_class\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    \r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.class.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.class.errors.required\">Class is required.</div>\r\n                      <div *ngIf=\"f.class.errors.pattern\">Accept numeric values only.</div>\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n              \r\n               <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n\r\n                    <label>Chapter</label>\r\n                    <select class=\"form-control\" formControlName=\"chapter\" [ngClass]=\"{ 'is-invalid': submitted && f.chapter.errors }\">\r\n                      <option value=\"\">Chapter</option>\r\n                      <option *ngFor=\"let option of masterArr.master_chapter\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.chapter.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.chapter.errors.required\">Chapter is required.</div>\r\n                        <div *ngIf=\"f.chapter.errors.pattern\">Accept numeric values only.</div>\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Subject</label>\r\n                    \r\n                    <select class=\"form-control\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\r\n                      <option value=\"\">Subject</option>\r\n                      <option *ngFor=\"let option of masterArr.master_subject\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.subject.errors.required\">Subject is required.</div>\r\n                      </div>\r\n                 </div>\r\n              </div> \r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n             \r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                  <div class=\"group\">\r\n                    <label>Semester</label>\r\n                    <select class=\"form-control\" formControlName=\"semester\" [ngClass]=\"{ 'is-invalid': submitted && f.semester.errors }\">\r\n                      <option value=\"\">Semester</option>\r\n                      <option *ngFor=\"let option of masterArr.master_semester\" [value]=\"option.id\" >{{option.name}}</option>\r\n                    </select>\r\n                    \r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.semester.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.semester.errors.required\">Semester is required.</div>\r\n                        <div *ngIf=\"f.semester.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                    </div>\r\n                 </div>\r\n              </div> \r\n\r\n              <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                <div class=\"group\">\r\n                  <label>Lesson</label>\r\n                  \r\n                  <select class=\"form-control\" formControlName=\"lesson\" [ngClass]=\"{ 'is-invalid': submitted && f.lesson.errors }\">\r\n                    <option value=\"\">Lesson</option>\r\n                    <option *ngFor=\"let option of masterArr.master_lesson\" [value]=\"option.id\" >{{option.name}}</option>\r\n                  </select>\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.lesson.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.lesson.errors.required\">Lession is required.</div>\r\n                        <div *ngIf=\"f.lesson.errors.pattern\">Accept numeric values only.</div>\r\n                    </div>\r\n               </div>\r\n            </div> \r\n          <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n           <div class=\"group\">\r\n            <label>Question Type</label>\r\n            <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                  <option value=\"text\">Text</option>\r\n                  <option value=\"image\">Image</option>\r\n                  <option value=\"text_and_image\">Text and Image</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.question_type.errors.required\">question_type is required.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n            </div>\r\n   \r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8 \">\r\n                <div class=\"row \">\r\n                   <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                        <label class=\"radio-box\">\r\n                           <input type=\"radio\"  name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'a'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                </div>\r\n                <div class=\"row m-t-15\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\"  name=\"answer\" value=\"b\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'b'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                </div>\r\n                <div class=\"row m-t-15\">\r\n                 <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                  <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                  <span class=\"md-line\"></span>\r\n                   <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                    <label class=\"radio-box\">\r\n                      <input type=\"radio\"  name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'c'\">\r\n                      <span class=\"checkmark\"></span>\r\n                    </label>\r\n                   </div>\r\n                </div>\r\n\r\n                <div class=\"row m-t-15\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                     <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                      <label class=\"radio-box\">\r\n                        <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value.toLowerCase() == 'd'\">\r\n                        <span class=\"checkmark\"></span>\r\n                      </label>\r\n                     </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                     <div class=\"group\">\r\n                      <label>Level</label>\r\n                      <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                        <option value=\"\">Level</option>\r\n                        <option *ngFor=\"let option of masterArr.master_level\" [value]=\"option.id\" >{{option.name}}</option>\r\n                      </select>\r\n                      \r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                          <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div> \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                     <div class=\"group\">\r\n                      <label>Duration (In Seconds)</label>\r\n                      <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                        <option value=\"\">Duration (In Seconds)</option>\r\n                        <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                      </select>\r\n                      \r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                          <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div> \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                    <div class=\"group\">\r\n                      <label>Note</label>\r\n                     <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                     <span class=\"md-line\"></span>\r\n                    </div>\r\n                  </div> \r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                </div> \r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                    <div class=\"m-t-15\">\r\n                      <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                         <span *ngIf=\"this.idEdit\">Back</span>\r\n                      </button>\r\n                      \r\n                      <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                         <span *ngIf=\"this.idEdit\">Update</span>\r\n                         \r\n                      </button>\r\n\r\n                    </div>\r\n                    \r\n                  </div>\r\n                  <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                <div class=\"editor-wrap\" id=\"my-node\"> \r\n                 <label>Question</label>\r\n                  \r\n                  <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea>\r\n                  <span class=\"md-line\"></span>\r\n                  <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n               <div class=\"form-group  files color m-t-15\">\r\n                  <div class=\" m-t-15\">\r\n                    <label>Upload Question </label>\r\n                      <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                    <img [src]=\"croppedImage\" />\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n               <div class=\"form-group  files color m-t-15\">\r\n                  <div class=\" m-t-15\">\r\n                    <label>Upload Question </label>\r\n                      <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                    <img [src]=\"croppedImage\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"editor-wrap\" id=\"my-node\"> \r\n                   <label>Question Text</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" > </textarea>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            </div>\r\n            \r\n          </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/single-curriculum.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/single-curriculum.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid single-curriculum\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 single-curriculum-wrap\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Curriculum Exam</h4>\r\n        </div>\r\n        </div>\r\n        <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n         \r\n           <!-- <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Quiz Sub Type</label>\r\n                <select class=\"form-control\" formControlName=\"quiz_sub_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_sub_type.errors }\">\r\n                  <option value=\"\">Quiz Sub Type</option>\r\n                  <option *ngFor=\"let option of masterArr.master_sub_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                </select>\r\n\r\n                <span class=\"md-line\"></span>\r\n                 <div *ngIf=\"submitted && f.quiz_sub_type.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quiz_sub_type.errors.required\">Quiz sub type is required.</div>\r\n               </div>\r\n             </div>\r\n          </div> \r\n           <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Quiz Type</label>\r\n                <select class=\"form-control\" formControlName=\"quiz_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_type.errors }\">\r\n                  <option value=\"\">Quiz Type</option>\r\n                  <option *ngFor=\"let option of masterArr.master_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                </select>\r\n\r\n                <span class=\"md-line\"></span>\r\n                 <div *ngIf=\"submitted && f.quiz_type.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quiz_type.errors.required\">Quiz type is required.</div>\r\n                </div>\r\n             </div>\r\n          </div>  -->\r\n       </div>\r\n\r\n       <div class=\"row\">\r\n         <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <label>Class</label>\r\n              <div class=\"group\">\r\n                <select class=\"form-control\" formControlName=\"class\" [ngClass]=\"{ 'is-invalid': submitted && f.class.errors }\">\r\n                  <option value=\"\">Class</option>\r\n                  <option *ngFor=\"let option of masterArr.master_class\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n              \r\n                <span class=\"md-line\"></span>\r\n                <div *ngIf=\"submitted && f.class.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.class.errors.required\">Class is required.</div>\r\n                  <div *ngIf=\"f.class.errors.pattern\">Accept numeric values only.</div>\r\n                </div>\r\n             </div>\r\n          </div> \r\n        <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n\r\n              <label>Chapter</label>\r\n              <select class=\"form-control\" formControlName=\"chapter\" [ngClass]=\"{ 'is-invalid': submitted && f.chapter.errors }\">\r\n                  <option value=\"\">Chapter</option>\r\n                  <option *ngFor=\"let option of masterArr.master_chapter\" [value]=\"option.id\" >{{option.name}}</option>\r\n              </select>\r\n\r\n              <span class=\"md-line\"></span>\r\n               <div *ngIf=\"submitted && f.chapter.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.chapter.errors.required\">Chapter is required.</div>\r\n                  <div *ngIf=\"f.chapter.errors.pattern\">Accept numeric values only.</div>\r\n              </div>\r\n           </div>\r\n        </div> \r\n         <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n            <label>Subject</label>\r\n             <select class=\"form-control\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\r\n                  <option value=\"\">Subject</option>\r\n                  <option *ngFor=\"let option of masterArr.master_subject\" [value]=\"option.id\" >{{option.name}}</option>\r\n              </select>\r\n              <span class=\"md-line\"></span>\r\n               <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.subject.errors.required\">Subject is required.</div>\r\n                </div>\r\n           </div>\r\n        </div> \r\n         \r\n     </div>\r\n     <div class=\"row\">\r\n      <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n            <div class=\"group\">\r\n              <label>Semester</label>\r\n              <select class=\"form-control\" formControlName=\"semester\" [ngClass]=\"{ 'is-invalid': submitted && f.semester.errors }\">\r\n                <option value=\"\">Semester</option>\r\n                <option *ngFor=\"let option of masterArr.master_semester\" [value]=\"option.id\" >{{option.name}}</option>\r\n                <option value=\"3\">Both(1 & 2)</option>\r\n              </select>\r\n              <span class=\"md-line\"></span>\r\n               <div *ngIf=\"submitted && f.semester.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.semester.errors.required\">Semester is required.</div>\r\n                  <div *ngIf=\"f.semester.errors.pattern\">Accept numeric values only.</div>\r\n\r\n              </div>\r\n           </div>\r\n        </div> \r\n          <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Lesson</label>\r\n              <select class=\"form-control\" formControlName=\"lesson\" [ngClass]=\"{ 'is-invalid': submitted && f.lesson.errors }\">\r\n                  <option value=\"\">Lesson</option>\r\n                  <option *ngFor=\"let option of masterArr.master_lesson\" [value]=\"option.id\" >{{option.name}}</option>\r\n               </select>\r\n\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.lesson.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.lesson.errors.required\">Lession is required.</div>\r\n                  <div *ngIf=\"f.lesson.errors.pattern\">Accept numeric values only.</div>\r\n\r\n              </div>\r\n         </div>\r\n      </div> \r\n        <div class=\"col-sm-2 col-sm-2 col-md-2\">\r\n          <div class=\"group\">\r\n            <label>Language</label>\r\n            <select class=\"form-control\" (change)=\"lgChanged($event.target.value)\" formControlName=\"language\" [ngClass]=\"{ 'is-invalid': submitted && f.language.errors }\">\r\n                  <option value=\"arabic\">Arabic</option>\r\n                  <option value=\"english\">English</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.language.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.language.errors.required\">Question Type is required.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-sm-2 col-md-2\">\r\n           <div class=\"group\">\r\n            <label>Question Type</label>\r\n            <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                  <option value=\"text\">Text</option>\r\n                  <option value=\"image\">Image</option>\r\n                  <option value=\"text_and_image\">Text and Image</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n     <!--  <div class=\" col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Quant/Verbal</label>\r\n            <input class=\"form-control\" placeholder=\"Quant/Verbal\" type=\"text\" formControlName=\"quant_verbal\" formControlName=\"quant_verbal\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.quant_verbal.errors }\">\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.quant_verbal.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.quant_verbal.errors.required\">This field is required.</div>\r\n            </div>\r\n         </div>\r\n      </div>  -->\r\n      <!--  <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n          <div class=\"group\">\r\n            <label>Group</label>\r\n            <select class=\"form-control\" formControlName=\"group\" [ngClass]=\"{ 'is-invalid': submitted && f.group.errors }\">\r\n                  <option value=\"\">Group</option>\r\n                  <option *ngFor=\"let option of masterArr.master_group\" [value]=\"option.id\" >{{option.name}}</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.group.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.group.errors.required\">Group is required.</div>\r\n            </div>\r\n         </div>\r\n      </div>  -->\r\n      \r\n   </div>\r\n   <div class=\"row\">\r\n    \r\n   </div>\r\n\r\n   <div class=\"row\">\r\n\r\n    <div class=\"col-lg-8 \">\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n        <label>Option A</label>\r\n        <ckeditor [editor]=\"Editor\" [data]='optiona_value' [config]=\"config\" (blur)=\"onChangeA($event)\" class=\"q_opton optiona\"></ckeditor>\r\n\r\n        <!-- <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\"> -->\r\n        <span class=\"md-line\"></span>\r\n          <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n           </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" checked>\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n           \r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n        <label>Option B</label>\r\n        <ckeditor [editor]=\"Editor\" [data]='optionb_value' [config]=\"config\" (blur)=\"onChangeB($event)\" class=\"q_opton optionb\"></ckeditor>\r\n        <!-- <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\"> -->\r\n\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n           </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n      <!--   <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\"> -->\r\n      <label>Option C</label>\r\n      <ckeditor [editor]=\"Editor\" [data]='optionc_value' [config]=\"config\" (blur)=\"onChangeC($event)\" class=\"q_opton optionc\"></ckeditor>\r\n\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\"> \r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n        <label>Option D</label>\r\n        <ckeditor [editor]=\"Editor\" [data]='optiond_value' [config]=\"config\" (blur)=\"onChangeD($event)\" class=\"q_opton optiond\"></ckeditor>\r\n       <!--  <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\"> -->\r\n        <span class=\"md-line\"></span>\r\n         <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n          <label class=\"radio-box\">\r\n            <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n           <div class=\"group\">\r\n            <label>Level</label>\r\n            <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                  <option value=\"\">Level</option>\r\n                  <option *ngFor=\"let option of masterArr.master_level\" [value]=\"option.id\" >{{option.name}}</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div> \r\n    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\r\n</div> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n           <div class=\"group\">\r\n            <label>Duration(in seconds)</label>\r\n            \r\n            <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                  <option value=\"\">Duration(in seconds)</option>\r\n                  <option value=\"05\">05</option>\r\n                  <option value=\"15\">15</option>\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"30\">30</option>\r\n                  <option value=\"60\">60</option>\r\n                  <option value=\"120\">120</option>\r\n            </select>\r\n            <span class=\"md-line\"></span>\r\n             <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.duration.errors.required\">Duration is required.</div>\r\n                <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n            </div>\r\n          </div>\r\n        </div> \r\n      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\r\n    </div> \r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n<div class=\"group\">\r\n  <label>Note</label>\r\n  \r\n <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n <span class=\"md-line\"></span>\r\n</div>\r\n</div> \r\n<div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\r\n</div> \r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n    <div class=\"m-t-15\">\r\n      <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n         <span *ngIf=\"this.idEdit\">Update</span>\r\n         <span *ngIf=\"this.idEdit==false\">Save and insert</span>\r\n      </button>\r\n      </div>\r\n     </div>\r\n\r\n     <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n     \r\n</div>\r\n\r\n  </div>\r\n\r\n    <div class=\"col-lg-4\" *ngIf=\"question_type=='text'\">\r\n      <div class=\"editor-wrap\" id=\"my-node\"> \r\n       <label>Question</label>\r\n        <ckeditor [editor]=\"Editor\" [data]='question_value' [config]=\"config\" (blur)=\"onChange($event)\" class=\"question\"></ckeditor>\r\n        <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n      </div>\r\n    </div>\r\n     <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n       <div class=\"form-group  files color m-t-15\">\r\n          <div class=\" m-t-15\">\r\n            <label>Upload Question </label>\r\n              <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"preview\" >\r\n            <img [src]=\"croppedImage\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n       <div class=\"form-group  files color m-t-15\">\r\n          <div class=\" m-t-15\">\r\n            <label>Upload Question </label>\r\n              <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"preview\" >\r\n            <img [src]=\"croppedImage\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"editor-wrap\" id=\"my-node\"> \r\n           <label>Question Text</label>\r\n            <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n<!--\r\n   <div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n      <div class=\"m-t-15\">\r\n        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n           Save and insert\r\n        </button>\r\n        </div>\r\n       </div>\r\n       \r\n</div>\r\n-->\r\n\r\n</form>   \r\n\r\n\r\n  <div class=\"row\" *ngIf=\"gridview\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"download-icon\">\r\n        <button class=\"btn allam-btn btn-success\" (click)=\"downloadItem()\" title=\"Download\" type=\"button\"><i class=\"icofont icofont-download\"></i></button>\r\n      </div>\r\n      <div class=\"publish-table-wrap  table-responsive\" id=\"tableDiv\"> \r\n        <table class=\"table table-striped table-bordered \" id=\"contentToConvert\" >\r\n        <thead>\r\n          <tr>\r\n            <th>Semester</th>\r\n            <th>Level</th>\r\n            <th>Answer</th>\r\n            <th><span class=\"option-width\">Option D </span></th>\r\n            <th><span class=\"option-width\">Option C </span></th>\r\n            <th><span class=\"option-width\">Option B </span></th>\r\n            <th><span class=\"option-width\">Option A </span></th>\r\n            <th>Question Type</th>\r\n            <th>Question </th>\r\n            <th>Duration </th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n            <th>\r\n              <button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\">\r\n              <i class=\"icofont icofont-ui-delete\"></i></button> \r\n            </th>\r\n          <!--   <th>Group </th>  -->           \r\n          </tr>\r\n         </thead>\r\n          <tbody>\r\n            <tr class=\"even ng-star-inserted\" *ngFor=\"let question of questionArr\">\r\n                \r\n                <td>\r\n                  <p *ngIf=\"question.semester==3 else semElse\">\r\n                    Both(1 & 2)\r\n                  </p>\r\n                  <ng-template #semElse>\r\n                      {{ question.semester }}\r\n                    </ng-template>\r\n                </td>\r\n                \r\n                <td class=\"\">{{ question.level }}</td>\r\n                <td class=\"\">{{ question.answer }}</td>\r\n                <td [innerHTML]=\"question.option4 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option3 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option2 | safeHtml\"></td>\r\n                <td [innerHTML]=\"question.option1 | safeHtml\"></td>\r\n                <td class=\"\">{{ question.qui_type }}</td>\r\n                <td class=\"\">\r\n                  <div *ngIf=\"question.qui_type=='text'\" [innerHTML]=\"question.question | safeHtml\"></div>\r\n                   <div *ngIf=\"question.qui_type=='image'\">\r\n                    <img style=\"width: 400px;\" src=\"{{s3_url+question.question_image_url}}\">\r\n                   </div>\r\n                   <div *ngIf=\"question.qui_type=='text_and_image'\">\r\n                    <img style=\"width: 400px;\"  src=\"{{s3_url+question.question_image_url}}\">\r\n                    <br>{{question.question}}\r\n                   </div>\r\n                   \r\n                </td>\r\n                <td class=\"\">{{ question.duration }}</td>\r\n                <td class=\"\">\r\n                  <button class=\"btn allam-btn allam-btn-green text-white \" (click)=\"editItem(question)\" title=\"Edit\" type=\"button\"><i class=\"icofont icofont-ui-edit\"></i></button>\r\n                </td>\r\n                <td class=\"\">\r\n                  <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(question.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                </td>\r\n                <td class=\"categories\">\r\n                   <input type=\"checkbox\"  name=\"del_row\" [value]=\"question.id\" (change)=\"onCheckboxChange($event,question.id)\" >  \r\n                </td>\r\n\r\n               <!--  <td class=\"\">{{ question.groups }}</td> -->\r\n                \r\n            </tr>\r\n          </tbody>\r\n\r\n          </table>\r\n\r\n\r\n      </div>\r\n   </div>\r\n  </div>\r\n  \r\n   <div class=\"row\" *ngIf=\"gridview\">\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n      <div class=\"m-t-15\">\r\n         <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border m-r-10 \"  (click)=\"publish()\">\r\n          <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n           Publish\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/dashboard.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/dashboard.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid dashboard\">\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 Competitive-exam-wrap\">\r\n    <div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n\r\n\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-block-small\">\r\n        <a [routerLink]=\"['/study-exam/create']\">\r\n          <!--<i class=\"ti-files bg-c-blue card1-icon\"></i>-->\r\n          <span class=\"text-c-blue f-w-600\">+</span>\r\n          <h4>Create New <br>Study Exam </h4>\r\n      </a>\r\n       \r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\" *ngFor=\"let item of quizData\">\r\n    <div class=\"card widget-card-1 mt-0\">\r\n      <div class=\"card-block-small p-0\">\r\n        <i class=\"ti-book bg-c-pink card1-icon\"></i>\r\n        <h5 class=\"mt-5\">{{ item.quiz_title }}</h5>\r\n        <span class=\"text-c-pink\">Create on {{ item.created_at | date: 'dd/MM/yyyy' }} </span>\r\n        <p class=\"published\">(Published)</p>\r\n       <!--  <div>\r\n          Total Quiz: 12\r\n        </div>\r\n        <div>Total Participant: 120</div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"col-md-6 col-xl-3\" *ngFor=\"let item of quizDraftData\">\r\n    <div class=\"card widget-card-1 mt-0\">\r\n      <!-- <a target=\"_blank\" *ngIf=\"item.save_type =='single' \" [routerLink]=\"['/study-exam/competitive-single/'+baseEncode(item.id)]\">\r\n        <div class=\"card-block-small p-0\">\r\n          <i class=\"ti-book bg-c-pink card1-icon\"></i>\r\n          <h4 class=\"mt-5\">{{ item.quiz_title }}</h4>\r\n          <span class=\"text-c-pink\">Create on {{ item.created_at | date: 'dd/MM/yyyy' }} </span>\r\n          <p class=\"draft\">(Draft)</p>\r\n\r\n        </div>\r\n      </a> *ngIf=\"item.save_type =='bulk' \" -->\r\n      <a target=\"_blank\" [routerLink]=\"['/study-exam/create/'+baseEncode(item.id)]\">\r\n        <div class=\"card-block-small p-0\">\r\n          <i class=\"ti-book bg-c-pink card1-icon\"></i>\r\n          <h4 class=\"mt-5\">{{ item.quiz_title }}</h4>\r\n          <span class=\"text-c-pink\">Create on {{ item.created_at | date: 'dd/MM/yyyy' }} </span>\r\n          <p class=\"draft\">(Draft)</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n   </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/studyexam.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/studyexam.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid dashboard\">\r\n  \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 Competitive-curriculum-exam-wrap\">\r\n      <div class=\"row justify-content-md-center\">\r\n\r\n      <div class=\"col-md-9\">\r\n\r\n        <div class=\"card\">\r\n        <h4 *ngIf=\"!isEdit\">Create New Study Exam  </h4>\r\n        <h4 *ngIf=\"isEdit\">Edit Study Exam  </h4>\r\n        <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n              <div class=\" col-sm-12 col-xs-12 col-md-12 \">\r\n                       \r\n               <div class=\"group\">\r\n                  <select class=\"form-control\" formControlName=\"quiz_type\" (change)=\"examType($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_type.errors }\">\r\n                    <option value=\"\">Quiz Type</option>\r\n                    <option *ngFor=\"let option of masterArr.master_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"group competitive-exam-drpdown\" *ngIf=\"isCompt\">\r\n                  <select class=\"form-control\" formControlName=\"quiz_sub_type\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_sub_type.errors }\">\r\n                    <option value=\"\">Quiz Sub Type</option>\r\n                    <option *ngFor=\"let option of masterArr.master_sub_quiz\" [value]=\"option.id\" >{{option.name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"submitted && f.quiz_sub_type.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.quiz_sub_type.errors.required\">This field is required.</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-sm-12 col-xs-12 col-md-12 scientific-achievement\">\r\n                <div class=\"row\" *ngIf=\"isCompt\">\r\n                  <div class=\"col-sm-12 col-xs-12 col-md-12 \"> \r\n                    <div class=\"group\">\r\n                      <input type=\"text\" class=\"form-control \" placeholder=\"Quiz title\" formControlName=\"quiz_title\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_title.errors }\">\r\n                      <div *ngIf=\"submitted && f.quiz_title.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.quiz_title.errors.required\">This field is required.</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"group \">\r\n                      <textarea class=\"form-control \" cols=\"5\" name=\"description\" placeholder=\"Description\r\n                      \" rows=\"3\" formControlName=\"quiz_description\" [ngClass]=\"{ 'is-invalid': submitted && f.quiz_description.errors }\"></textarea>\r\n                      <div *ngIf=\"submitted && f.quiz_description.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.quiz_description.errors.required\">This field is required.</div>\r\n                      </div>\r\n                    </div>\r\n                     <!-- <div class=\"group\">\r\n                        <image-cropper \r\n                        [imageChangedEvent]=\"imageChangedEvent\" \r\n                        [maintainAspectRatio]=\"true\" \r\n                        [aspectRatio]=\"1 / 1\"\r\n                        [resizeToWidth]=\"200\" \r\n                        format=\"png\" \r\n                        (imageCropped)=\"imageCropped($event)\" \r\n                        (imageLoaded)=\"imageLoaded()\"\r\n                        (cropperReady)=\"cropperReady()\" \r\n                        (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n                      </div> -->\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-md-12 \">\r\n                    <!-- <div class=\"iconupload\">\r\n\r\n                     <input #variable type=\"file\" class=\"form-control customupload\" title=\"Icon Upload\" (change)=\"uploadFile($event, variable)\" accept=\"image/x-png,image/jpeg\">  \r\n                    </div>\r\n                     <div class=\"upload-jpgpng\">Please upload png, jpg or JPEG files, Image should be 200 x 200 size</div>\r\n                   \r\n                    <div class=\"form-group preview-wrap\">\r\n                        <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                          <img [src]=\"preview\" [alt]=\"\" height=\"200\" >\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"form-group sexam files color m-t-15\">\r\n                      <div class=\"m-t-15\">\r\n                       <input #variable type=\"file\" class=\"form-control customupload\" title=\"Icon Upload\"  (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\">  \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" >\r\n                        <img [src]=\"croppedImage\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                 \r\n                 </div>\r\n               \r\n                 <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-md-8\"> \r\n                    <div class=\"group radio-wrap\"> \r\n                      <label class=\"\">\r\n                        SINGLE UPLOAD\r\n                        <input type=\"radio\" checked name=\"upload_type\" value=\"single\" formControlName=\"upload_type\" [checked]=\"form.get('upload_type').value == 'single'\">\r\n                      </label>\r\n                      <label class=\"\">\r\n                        BULK UPLOAD\r\n                        <input type=\"radio\" name=\"upload_type\" value=\"bulk\" formControlName=\"upload_type\" [checked]=\"form.get('upload_type').value == 'bulk'\">\r\n                      </label>\r\n                     </div>\r\n\r\n\r\n                  <div class=\"col-sm-12 col-xs-12 col-md-12 scientific-achievement\">\r\n                    \r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-md-8 pl-0\"> \r\n                        \r\n                        <div class=\"group\" *ngIf=\"!isEdit || !isCompt\">\r\n                          <button  class=\"btn btn-block allam-btn-green text-white \">\r\n                            Next\r\n                          </button>\r\n                        </div>\r\n\r\n                         <div class=\"group\" *ngIf=\"isEdit && isCompt\">\r\n                          <button class=\"btn btn-block btn-warning text-white study-skip\">\r\n                            Skip\r\n                          </button>\r\n                          <button class=\"btn btn-block allam-btn-green text-white study-edit\">\r\n                            Edit & Next\r\n                          </button>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-md-4\"> </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/study-exam/competitive/bulk-competitive.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/study-exam/competitive/bulk-competitive.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  display: block;\n  overflow-x: auto;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n.single-curriculum-wrap h4 {\n  margin-bottom: 10px;\n}\n\n.single-curriculum-wrap h5 {\n  margin-bottom: 15px;\n  font-size: 16px !important;\n  color: #FFB64D;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  max-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jb21wZXRpdGl2ZS9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcc3R1ZHktZXhhbVxcY29tcGV0aXRpdmVcXGJ1bGstY29tcGV0aXRpdmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWR5LWV4YW0vY29tcGV0aXRpdmUvYnVsay1jb21wZXRpdGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUE2QixtQkFBQTtBQ0M3Qjs7QURBQTtFQUE2QixtQkFBQTtFQUFxQiwwQkFBQTtFQUEwQixjQUFBO0FDTTVFOztBRExBO0VBQTZDLGlCQUFBO0FDUzdDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jb21wZXRpdGl2ZS9idWxrLWNvbXBldGl0aXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLmdyb3VwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNXB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCBoNCB7IG1hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCBoNSB7IG1hcmdpbi1ib3R0b206IDE1cHg7IGZvbnQtc2l6ZToxNnB4IWltcG9ydGFudDsgY29sb3I6I0ZGQjY0RDt9XHJcbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5wdWJsaXNoLXRhYmxlLXdyYXAge21heC1oZWlnaHQ6IDQwMHB4O31cclxuXHJcblxyXG4iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAuZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAwIDEycHggNXB4O1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIGg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZCNjREO1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAucHVibGlzaC10YWJsZS13cmFwIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/study-exam/competitive/bulk-competitive.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/study-exam/competitive/bulk-competitive.component.ts ***!
  \****************************************************************************/
/*! exports provided: BulkCompetitiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkCompetitiveComponent", function() { return BulkCompetitiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/studyexam/question.service */ "./src/app/services/studyexam/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");













var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
var BulkCompetitiveComponent = /** @class */ (function () {
    function BulkCompetitiveComponent(fb, route, router, http, questionService, pocquestionService, alertService, authenticationService, curriculumSingleService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.questionService = questionService;
        this.pocquestionService = pocquestionService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.curriculumSingleService = curriculumSingleService;
        this.title = 'angular Curriculum Bulk';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].s3_url;
        this.local_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.questionArr = [];
        this.isProcessed = false;
        this.percentDone = 0;
        this.isEdit = false;
        this.idEdit = false;
        this.editData = [];
        this.isSave = true;
        this.loading2 = false;
        this.submitted2 = false;
        this.checkBox = 'false';
        this.quizArr = [];
        this.selectedItems = [];
        this.masterArr = [];
        this.selectedAll = false;
        this.question_value = "";
        this.classOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        this.semesterOptions = ["1", "2"];
        this.groupOptions = ["1", "2", "3"];
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.lessonOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        this.chapterOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        this.durationOptions = ["05", "15", "25", "30", "60", "120"];
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.formVar = this.fb.group({
            excelFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zipFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            existImage: ['']
        });
    }
    BulkCompetitiveComponent.prototype.reset = function () {
        // We will clear the value of the input  
        // field using the reference variable. 
        this.InputVar.nativeElement.value = "";
    };
    BulkCompetitiveComponent.prototype.ngOnInit = function () {
        this.quiz_temp_id = (this.route.snapshot.params['quiz_temp_id']); //atob
        //console.log(this.quiz_temp_id);
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_image: [''],
            edit_question_image: [''],
            question_type: [''],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answer: [''],
            class: [''],
            quiz_sub_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quiz_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            chapter: [''],
            subject: [''],
            semester: [''],
            quant_verbal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            group: [''],
            lesson: [''],
            note: [''],
            level: [''],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getDraftQuestion();
        //check draft quiz
        this.getDraftQuiz();
        // Get all master data
        this.getMasterData();
        this.resultGridList = this.questionService.dataArray;
        //console.log('resultGridList ' +JSON.stringify(this.resultGridList));
    };
    Object.defineProperty(BulkCompetitiveComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    BulkCompetitiveComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        //console.log(this.masterArr);
    };
    BulkCompetitiveComponent.prototype.getDraftQuiz = function () {
        var _this = this;
        this.pocquestionService.getDraftQuizByUser(this.created_by, this.quiz_temp_id).subscribe(function (response) {
            _this.quizArr = response;
            if (_this.quizArr.length == 0) {
                _this.router.navigate(['/study-exam/create']);
            }
            _this.pre_quiz_title = _this.quizArr[0].quiz_title;
        });
    };
    BulkCompetitiveComponent.prototype.getDraftQuestion = function (user_id) {
        var _this = this;
        if (user_id === void 0) { user_id = 0; }
        this.pocquestionService.getDraftQuestionCompetitiveByUser(this.created_by, this.quiz_temp_id)
            .subscribe(function (response) {
            _this.questionArr = response;
            //this.isProcessed = true;
            //console.log(Object.keys(this.questionArr).length);
            if (Object.keys(_this.questionArr).length != 0) {
                _this.isProcessed = true;
            }
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    /*editItem(event)
    {
      this.editData = event;
      this.isEdit   = true;
      this.isSave   = false;
      this.idEdit   = this.editData.id;
      this.router.navigate(['/study-exam/create/'+btoa(this.idEdit)]);
    }*/
    BulkCompetitiveComponent.prototype.downloadItem = function () {
        var _this = this;
        this.router.navigate([]).then(function (result) { window.open('/authentication/studyexam-downlad/teacher/4/' + _this.quiz_temp_id, '_blank'); });
        ;
        //this.generatePDF();
    };
    BulkCompetitiveComponent.prototype.editItem = function (event) {
        this.editData = event;
        this.isEdit = true;
        this.isSave = false;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        //console.log('---------------->>');
        //console.log(this.question_value);
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        //console.log('<<----------------');
        this.form.patchValue({
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
            question_type: this.editData.qui_type,
            question_text: this.editData.question,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
            question_image: this.editData.question_image,
        });
        this.croppedImage = this.local_api_url + this.editData.question_image;
        this.question_type = this.editData.qui_type;
        this.preview = apiUrl + this.editData.question_image_url;
    };
    BulkCompetitiveComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isSave = true;
    };
    BulkCompetitiveComponent.prototype.fileChangeXlsx = function (element, variable) {
        //var pattern="^.+\.(xlsx|xls|csv)$";
        //var pattern="^.+\.(xlsx)$";
        var file = element.target.files[0];
        //console.log('type', file.type);
        //console.log('accept', element.target.accept);
        //console.log(element.target.files[0].name);
        var name = element.target.files[0].name;
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() == 'xlsx') {
            if (typeof (this.uploadedFiles) == "undefined") {
                this.uploadedFiles = new Array();
                this.uploadedFiles.push(element.target.files[0]);
            }
            else {
                this.uploadedFiles.push(element.target.files[0]);
            }
        }
        else {
            variable.value = null;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'File type should be xlsx', 'error');
            return;
        }
        /*if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          //this.form.reset();
          element.value = "";
          variable.value = null;
          Swal.fire('','File type should be xlsx','error');
          return;
        }else{
        
          if (typeof (this.uploadedFiles) == "undefined") {
            this.uploadedFiles = new Array<File>();
            this.uploadedFiles.push(element.target.files[0]);
          }
          else {
            this.uploadedFiles.push(element.target.files[0]);
          }
          //console.log(this.uploadedFiles);
        }*/
    };
    BulkCompetitiveComponent.prototype.fileChangeZip = function (element, variable1) {
        var file = element.target.files[0];
        console.log('type', file.type);
        var name = element.target.files[0].name;
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() == 'zip') {
            if (typeof (this.uploadedFiles) == "undefined") {
                this.uploadedFiles = new Array();
                this.uploadedFiles.push(element.target.files[0]);
            }
            else {
                this.uploadedFiles.push(element.target.files[0]);
            }
        }
        else {
            variable1.value = null;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'File type should be zip', 'error');
            return;
        }
    };
    BulkCompetitiveComponent.prototype.eventCheck = function (event) {
        this.checkBox = event.target.checked;
        console.log(event.target.checked); //<--- Check with this
    };
    BulkCompetitiveComponent.prototype.upload = function () {
        var _this = this;
        this.showLoader();
        //debugger;
        this.loading2 = true;
        if (typeof (this.uploadedFiles) == "undefined" || this.uploadedFiles.length == 0) {
            this.isError = false;
            this.isProcessed = false;
            this.errorData = null;
            //this.alertService.pop('error', "Excel file or zip file not selected.");
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Excel file or zip file not selected.', 'error');
            this.hideLoader();
            this.loading2 = false;
            return;
        }
        //console.log('fileChange');
        //console.log(this.uploadedFiles);
        //console.log('End fileChange');
        var formData = new FormData();
        formData.append("existImage", this.checkBox);
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl + 'cms-study-exam/api/curr_upload/2', formData, { reportProgress: true, observe: "events" })
            .subscribe(function (response) {
            switch (response.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(response.loaded / response.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                    //console.log('response.body.message '+ response.body.message);
                    console.log('Upload successfully ', response.body);
                    if (response.body.error_code == 0) {
                        //this.errorData = response["data"];
                        _this.fileData = response.body["data"];
                        //console.log(this.fileData);
                        _this.saveTemp(); // Here call function for save data in temp table
                        _this.reset(); // Reset selected file with input tag file type
                        _this.isError = false;
                        _this.isProcessed = true;
                        _this.loading2 = false;
                        _this.alertService.pop('success', 'Study data upload successfully!');
                        _this.hideLoader();
                        _this.uploadedFiles = new Array();
                    }
                    else if (response.body.error_code == 1) {
                        _this.isError = false;
                        _this.isProcessed = false;
                        _this.loading2 = false;
                        _this.errorData = response.body["data"];
                        _this.errorCode = response.body["error_code"];
                        _this.errorDesc = response.body["err_desc"];
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', response.body.err_desc, 'error');
                        //this.alertService.pop('error', response.body.err_desc);
                        _this.reset(); // Reset selected file with input tag file type
                        _this.uploadedFiles = new Array();
                        _this.formVar.reset();
                    }
                    else if (response.body.error_code == 2) {
                        _this.isError = true;
                        _this.isProcessed = false;
                        _this.loading2 = false;
                        _this.errorData = response.body["data"];
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', response.body.err_desc, 'error');
                        //this.alertService.pop('error', response.body.err_desc);
                        _this.uploadedFiles = new Array();
                        _this.formVar.reset();
                    }
                    _this.percentDone = false;
            }
            _this.hideLoader();
            //console.log('response receved is ', response);
            //console.log('HttpEventType -- '+JSON.stringify(HttpEventType));
        }, function (error) {
            //this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            _this.reset(); // Reset selected file with input tag file type
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Oh', 'Something went wrong. Try again later. :)', 'error');
            //this.router.navigate(['/study-exam']);
        });
    };
    BulkCompetitiveComponent.prototype.saveTemp = function () {
        var _this = this;
        this.pocquestionService.addBulkQuestionCompetitiveTemp(this.fileData, this.created_by, this.quiz_temp_id)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.getDraftQuestion(); //Show all temp data 
                _this.alertService.pop('success', 'Question added successfully in temp');
                //setTimeout(()=>this.router.navigate(['/study-exam']), 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    // Function is defined 
    BulkCompetitiveComponent.prototype.hideLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'none';
    };
    BulkCompetitiveComponent.prototype.showLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'block';
    };
    /*  onCheckboxChange(event,val) {
         if(event.target.checked ) {
             this.selectedItems.push(val);
         }
          else {
           this.selectedItems.splice(this.selectedItems.indexOf(val),1);
         }
 
     } */
    BulkCompetitiveComponent.prototype.selectAll = function () {
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
    BulkCompetitiveComponent.prototype.checkIfAllSelected = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
        //console.log(this.selectedItems)
    };
    BulkCompetitiveComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.pocquestionService.deleteDraftQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    self.getDraftQuestion();
                    //self.questionArr.splice(self.questionArr.indexOf(item_id),1);
                });
                if (self.questionArr.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    BulkCompetitiveComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                /*this.selectedItems.forEach(function (value) {
                     self.fileData.forEach(function(arrItem){
                        if (value == arrItem.question) {
                            self.fileData.splice(self.fileData.indexOf(arrItem),1);
                        }
                     });
                });*/
                _this.selectedItems.forEach(function (value) {
                    self.questionArr.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.questionArr.splice(self.questionArr.indexOf(arrItem), 1);
                            self.pocquestionService.deleteDraftQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.questionArr.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    BulkCompetitiveComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        if (this.question_value == '' && this.form.value.question_type != 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question == '' && this.form.value.question_type == 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        if (this.form.value.question == '' && this.form.value.question_type == 'text_and_image') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        //this.gridview=true;
        //this.form.value.q_id=this.row_id;
        // this.row_id=this.row_id+1;
        //this.form.value.question=this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.isFile = this.isFile;
        //this.questionArr.push(this.form.value);
        //console.log(this.form.value);
        //this.form.reset();
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        //console.log(this.form.value);
        console.log('---------->>>>>>>>');
        this.pocquestionService.updateQuestionCompetitiveDraft(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question successfully updated in draft');
                _this.getDraftQuestion();
                //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                _this.idEdit = false;
                _this.isEdit = false;
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
    };
    BulkCompetitiveComponent.prototype.publish = function () {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: '',
            text: 'Are you sure want to publish?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                //////////publish call///
                _this.submitted2 = true;
                _this.loading2 = true;
                //console.log(this.questionArr);
                _this.pocquestionService.saveCompetitiveQuiz(_this.questionArr, _this.quiz_temp_id)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1000);
                    }
                    else {
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }
                    _this.loading2 = false;
                }, function (error) {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    _this.loading2 = false;
                });
                //////////end////////////
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.DismissReason.cancel) {
                //cancel
            }
        });
    };
    BulkCompetitiveComponent.prototype.reUpload = function () {
        this.router.navigate(['/study-exam/create']);
    };
    BulkCompetitiveComponent.prototype.onSubmitData = function () {
        var _this = this;
        this.submitted = true;
        /*if(this.form.value.status){
        this.form.value.status="1";
        }
        else{
        this.form.value.status="0"
        }*/
        //this.form.value.question=this.value;
        this.loading = true;
        this.pocquestionService.addBulkQuestionCompetitive(this.fileData, this.resultGridList)
            .subscribe(function (data) {
            if (data['error_code'] == 0) {
                _this.alertService.pop('success', 'Question added successfully');
                setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1500);
            }
            else if (data['error_code'] == 2) {
                _this.alertService.pop('error', 'Quiz data not selected, First of all you have to fill quiz related data.');
                // setTimeout(()=>this.router.navigate(['/study-exam']), 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    BulkCompetitiveComponent.prototype.convertTwoDigit = function (n) {
        n = String(n);
        if (n.length == 1) {
            n = '0' + n;
        }
        return n;
    };
    BulkCompetitiveComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.question_value = '';
        this.croppedImage = '';
        this.form.patchValue({
            question: ''
        });
    };
    BulkCompetitiveComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            var img = new Image();
            var name = event.target.files[0].name;
            var ext = name.substring(name.lastIndexOf('.') + 1);
            if (ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'png') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'File type should be jpeg, jpg or png format', 'error');
                return;
            }
            else {
                this.imageChangedEvent = event;
                this.showModal = true;
            }
        }
    };
    BulkCompetitiveComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            edit_question_image: this.croppedImage
        });
    };
    BulkCompetitiveComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    BulkCompetitiveComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    BulkCompetitiveComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload image only', 'error');
    };
    BulkCompetitiveComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    BulkCompetitiveComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
        { type: _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__["PocquestionService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumSingleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('variable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BulkCompetitiveComponent.prototype, "InputVar", void 0);
    BulkCompetitiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-competitive',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bulk-competitive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/bulk-competitive.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bulk-competitive.component.scss */ "./src/app/pages/study-exam/competitive/bulk-competitive.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_5__["PocquestionService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"], _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_11__["CurriculumSingleService"]])
    ], BulkCompetitiveComponent);
    return BulkCompetitiveComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/competitive/single-competitive.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/study-exam/competitive/single-competitive.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ck-editor__editable_inline {\n  min-height: 200px;\n  max-height: 200px;\n}\n\n:host ::ng-deep .ck-editor__editable_inline p {\n  font-size: 18px;\n}\n\n:host ::ng-deep .ck-editor {\n  width: 300px;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n.publish-table-wrap.m-b-0 {\n  margin-bottom: 0px;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  max-height: 500px;\n}\n\n:host ::ng-deep .q_opton .ck-editor__editable_inline {\n  min-height: 40px;\n  max-height: 40px;\n}\n\n:host ::ng-deep .ltr-txt .ck-editor__editable_inline {\n  text-align: left;\n  direction: ltr;\n}\n\n:host ::ng-deep .rtl-txt .ck-editor__editable_inline {\n  text-align: right;\n  direction: rtl;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  padding: 0px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jb21wZXRpdGl2ZS9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcc3R1ZHktZXhhbVxcY29tcGV0aXRpdmVcXHNpbmdsZS1jb21wZXRpdGl2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jb21wZXRpdGl2ZS9zaW5nbGUtY29tcGV0aXRpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQTRCLGtCQUFBO0FDRTVCOztBRERBO0VBQTZDLGlCQUFBO0FDSzdDOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksZ0JBQUE7RUFDSCxjQUFBO0FDTUQ7O0FESkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUE2QyxtQkFBQTtBQ1E3QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWR5LWV4YW0vY29tcGV0aXRpdmUvc2luZ2xlLWNvbXBldGl0aXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHAge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9ye1xyXG4gICAgd2lkdGg6IDMwMHB4OztcclxufVxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLmdyb3VwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNXB4O1xyXG59XHJcblxyXG4ucHVibGlzaC10YWJsZS13cmFwLm0tYi0wIHsgbWFyZ2luLWJvdHRvbTogMHB4O31cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7bWF4LWhlaWdodDogNTAwcHg7fVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5xX29wdG9uIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5sdHItdHh0IC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucnRsLXR4dCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7cGFkZGluZzogMHB4IDAgMTVweDt9XHJcblxyXG5cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvciB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLmdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgcGFkZGluZzogMCAxMnB4IDVweDtcbn1cblxuLnB1Ymxpc2gtdGFibGUtd3JhcC5tLWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnFfb3B0b24gLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5sdHItdHh0IC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJ0bC10eHQgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAucHVibGlzaC10YWJsZS13cmFwIHtcbiAgcGFkZGluZzogMHB4IDAgMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/study-exam/competitive/single-competitive.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/study-exam/competitive/single-competitive.component.ts ***!
  \******************************************************************************/
/*! exports provided: SingleCompetitiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCompetitiveComponent", function() { return SingleCompetitiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/studyexam/competitive-single.service */ "./src/app/services/studyexam/competitive-single.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");










var SingleCompetitiveComponent = /** @class */ (function () {
    function SingleCompetitiveComponent(fb, activeAouter, router, alertService, competitiveSingleService, authenticationService) {
        this.fb = fb;
        this.activeAouter = activeAouter;
        this.router = router;
        this.alertService = alertService;
        this.competitiveSingleService = competitiveSingleService;
        this.authenticationService = authenticationService;
        this.title = 'angularckeditor';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].s3_url;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.selectedItems = [];
        this.loading = false;
        this.submitted = false;
        this.loading2 = false;
        this.submitted2 = false;
        this.gridview = false;
        this.error = '';
        this.questionArr = [];
        this.quizArr = [];
        this.row_id = 1;
        this.isEdit = false;
        this.idEdit = false;
        this.editData = [];
        this.masterArr = [];
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        this.question_value = "";
        this.optiona_value = "";
        this.optionb_value = "";
        this.optionc_value = "";
        this.optiond_value = "";
        this.default_font_size = 'font-size:18px';
        this.language = 'arabic';
        this.config = {
            fontSize: {
                options: [
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18
                ]
            },
            toolbar: [
                'heading',
                '|',
                'fontSize',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                //'imageUpload',
                //'blockQuote',
                //'insertTable',
                //'mediaEmbed',
                'MathType',
                'ChemType',
                'undo',
                'redo'
            ],
            contentsLangDirection: 'rtl',
            contentsLanguage: 'ar',
            language: 'ar'
        };
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    SingleCompetitiveComponent.prototype.ngOnInit = function () {
        this.quiz_temp_id = (this.activeAouter.snapshot.params['quiz_temp_id']); //atob
        console.log(this.quiz_temp_id);
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_type: [this.question_type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            language: [this.language],
            option1: [''],
            option2: [''],
            option3: [''],
            option4: [''],
            answer: [''],
            class: [''],
            quiz_sub_type: [''],
            quiz_type: [''],
            chapter: [''],
            subject: [''],
            semester: [''],
            quant_verbal: [''],
            group: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lesson: [''],
            note: [''],
            level: [''],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        //check draft quiz
        this.getDraftQuiz();
        this.getDraftQuestion();
        this.getMasterData();
    };
    SingleCompetitiveComponent.prototype.getMasterData = function () {
        var _this = this;
        this.competitiveSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        console.log(this.masterArr);
    };
    SingleCompetitiveComponent.prototype.getDraftQuestion = function (user_id) {
        var _this = this;
        if (user_id === void 0) { user_id = 0; }
        this.competitiveSingleService.getDraftQuestionByUser(this.created_by, this.quiz_temp_id).subscribe(function (response) {
            _this.questionArr = response;
            if (_this.questionArr.length > 0) {
                _this.gridview = true;
            }
        });
    };
    SingleCompetitiveComponent.prototype.getDraftQuiz = function () {
        var _this = this;
        this.competitiveSingleService.getDraftQuizByUser(this.created_by, this.quiz_temp_id).subscribe(function (response) {
            _this.quizArr = response;
            if (_this.quizArr.length == 0) {
                _this.router.navigate(['/study-exam/create']);
            }
            _this.pre_quiz_title = _this.quizArr[0].quiz_title;
            _this.quiz_type_id = _this.quizArr[0].quiz_type;
            _this.quiz_sub_type_id = _this.quizArr[0].quiz_sub_type;
            _this.form.patchValue({
                quiz_type: _this.quiz_type_id,
                quiz_sub_type: _this.quiz_sub_type_id,
            });
        });
    };
    Object.defineProperty(SingleCompetitiveComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    SingleCompetitiveComponent.prototype.onSubmit = function () {
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
        if (this.question_type == 'text') {
            if (this.question_value == '' || this.question_value == '<p><br data-cke-filler="true"></p>') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
                return;
            }
            //var qSize=this.isOverflown($(".ck-content")[0]);
            var qSize = this.isOverflown($(".question").find("div.ck-content")[0]);
            if (qSize) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Question maximum request length exceeded ', 'error');
                return;
            }
        }
        if (this.croppedImage == '' && this.question_type != 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question_text == '' && this.form.value.question_type == 'text_and_image') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        if (this.optiona_value == '' || this.optiona_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option A.', 'error');
            return;
        }
        if (this.optionb_value == '' || this.optionb_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option B.', 'error');
            return;
        }
        if (this.optionc_value == '' || this.optionc_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option C.', 'error');
            return;
        }
        if (this.optiond_value == '' || this.optiond_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option D.', 'error');
            return;
        }
        this.gridview = true;
        this.form.value.isFile = this.isFile;
        this.form.value.created_by = this.created_by;
        this.form.value.quiz_temp_id = this.quiz_temp_id;
        this.form.value.question = this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.option1 = this.optiona_value;
        this.form.value.option2 = this.optionb_value;
        this.form.value.option3 = this.optionc_value;
        this.form.value.option4 = this.optiond_value;
        //this.questionArr.push(this.form.value)
        //this.form.reset();
        //this.submitted=false
        this.loading = true;
        if (this.idEdit && this.isEdit) {
            /////update in temp////
            this.form.value.id = this.idEdit;
            console.log(this.form.value);
            console.log('---------->>>>>>>>');
            this.competitiveSingleService.updateQuestionInDraft(this.form.value)
                .subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.alertService.pop('success', 'Question successfully saved in draft');
                    _this.getDraftQuestion();
                    //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                    _this.idEdit = false;
                    _this.isEdit = false;
                }
                else {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                }
                _this.croppedImage = '';
                _this.loading = false;
                _this.submitted = false;
            }, function (error) {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
                _this.loading = false;
                _this.submitted = false;
            });
        }
        else {
            /////save in temp////
            this.competitiveSingleService.saveQuestionInDraft(this.form.value)
                .subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.alertService.pop('success', 'Question successfully saved in draft');
                    _this.getDraftQuestion();
                    //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                }
                else {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                }
                _this.croppedImage = '';
                _this.loading = false;
                _this.submitted = false;
            }, function (error) {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
                _this.loading = false;
                _this.submitted = false;
            });
        }
    };
    SingleCompetitiveComponent.prototype.publish = function () {
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '',
            text: 'Are you sure want to publish?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                //////////publish call///
                _this.submitted2 = true;
                _this.loading2 = true;
                _this.competitiveSingleService.saveQuiz(_this.questionArr, _this.quiz_temp_id)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1000);
                    }
                    else {
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }
                    _this.loading2 = false;
                }, function (error) {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    _this.loading2 = false;
                });
                //////////end////////////
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //cancel
            }
        });
    };
    SingleCompetitiveComponent.prototype.publish_ = function () {
        var _this = this;
        console.log(this.questionArr);
        this.submitted2 = true;
        this.loading2 = true;
        this.competitiveSingleService.saveQuiz(this.questionArr, this.quiz_temp_id)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question added successfully');
                setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1000);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading2 = false;
            //this.router.navigate(['/study-exam/curriculum-single']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading2 = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    SingleCompetitiveComponent.prototype.downloadItem = function () {
        var _this = this;
        this.router.navigate([]).then(function (result) { window.open('/authentication/studyexam-downlad/teacher/3/' + _this.quiz_temp_id, '_blank'); });
        ;
        //this.generatePDF();
    };
    SingleCompetitiveComponent.prototype.editItem = function (event) {
        this.isFile = false;
        this.editData = event;
        this.isEdit = true;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        console.log('---------------->>');
        console.log(this.question_value);
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        console.log('<<----------------');
        this.form.patchValue({
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
            duration: this.editData.duration,
            question_type: this.editData.qui_type,
            question_text: this.editData.question,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
        });
        this.croppedImage = this.s3_url + this.editData.question_image_url;
        this.question_type = this.editData.qui_type;
        window.scroll(0, 0);
    };
    SingleCompetitiveComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.competitiveSingleService.deleteDraftQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    self.getDraftQuestion();
                });
                if (self.questionArr.length == 0) {
                    _this.gridview = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    SingleCompetitiveComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.selectedItems.forEach(function (value) {
                    self.questionArr.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.questionArr.splice(self.questionArr.indexOf(arrItem), 1);
                            self.competitiveSingleService.deleteDraftQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.questionArr.length == 0) {
                    _this.gridview = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    SingleCompetitiveComponent.prototype.onCheckboxChange = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
    };
    SingleCompetitiveComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.question_value = editor.getData();
        //var html =$(".ck-content").html();
        var html = $(".question").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.question_value = html;
    };
    SingleCompetitiveComponent.prototype.onChangeA = function (_a) {
        var editor = _a.editor;
        this.optiona_value = editor.getData();
        var html = $(".optiona").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optiona_value = html;
        console.log('editor change event Option A' + html);
    };
    SingleCompetitiveComponent.prototype.onChangeB = function (_a) {
        var editor = _a.editor;
        this.optionb_value = editor.getData();
        var html = $(".optionb").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optionb_value = html;
        console.log('editor change event Option B' + html);
    };
    SingleCompetitiveComponent.prototype.onChangeC = function (_a) {
        var editor = _a.editor;
        this.optionc_value = editor.getData();
        var html = $(".optionc").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optionc_value = html;
        console.log('editor change event Option C' + html);
    };
    SingleCompetitiveComponent.prototype.onChangeD = function (_a) {
        var editor = _a.editor;
        this.optiond_value = editor.getData();
        var html = $(".optiond").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optiond_value = html;
        console.log('editor change event Option D' + html);
    };
    SingleCompetitiveComponent.prototype.isOverflown = function (element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    };
    SingleCompetitiveComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.question_value = '';
        this.croppedImage = '';
        this.form.patchValue({
            question_text: '',
        });
    };
    SingleCompetitiveComponent.prototype.lgChanged = function (element) {
        this.language = element;
        if (element == 'english') {
            $(".q_opton,.question").removeClass("rtl-txt");
            $(".q_opton,.question").addClass("ltr-txt");
            //update editor config
            this.config.contentsLangDirection = 'ltr';
            this.config.contentsLanguage = 'en';
            this.config.language = 'en';
        }
        else {
            $(".q_opton,.question").removeClass("ltr-txt");
            $(".q_opton,.question").addClass("rtl-txt");
            //update editor config
            this.config.contentsLangDirection = 'rtl';
            this.config.contentsLanguage = 'ar';
            this.config.language = 'ar';
        }
    };
    SingleCompetitiveComponent.prototype.fileChangeEvent = function (event) {
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
    SingleCompetitiveComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            question_image: this.croppedImage
        });
    };
    SingleCompetitiveComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    SingleCompetitiveComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    SingleCompetitiveComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload image only', 'error');
    };
    SingleCompetitiveComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    SingleCompetitiveComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__["CompetitiveSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
    ]; };
    SingleCompetitiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-competitive',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-competitive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/competitive/single-competitive.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-competitive.component.scss */ "./src/app/pages/study-exam/competitive/single-competitive.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__["CompetitiveSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], SingleCompetitiveComponent);
    return SingleCompetitiveComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/curriculum/bulk-curriculum.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/study-exam/curriculum/bulk-curriculum.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  display: block;\n  overflow-x: auto;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  max-height: 400px;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n.publish-table-wrap.m-b-0 {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jdXJyaWN1bHVtL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxzdHVkeS1leGFtXFxjdXJyaWN1bHVtXFxidWxrLWN1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWR5LWV4YW0vY3VycmljdWx1bS9idWxrLWN1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUE2QyxpQkFBQTtBQ0U3Qzs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFBNEIsa0JBQUE7QUNLNUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkeS1leGFtL2N1cnJpY3VsdW0vYnVsay1jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAucHVibGlzaC10YWJsZS13cmFwIHttYXgtaGVpZ2h0OiA0MDBweDt9XHJcblxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAuZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDAgMTJweCA1cHg7XHJcbn1cclxuLnB1Ymxpc2gtdGFibGUtd3JhcC5tLWItMCB7IG1hcmdpbi1ib3R0b206IDBweDt9IiwiLnRhYmxlLXJlc3BvbnNpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAuZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAwIDEycHggNXB4O1xufVxuXG4ucHVibGlzaC10YWJsZS13cmFwLm0tYi0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/study-exam/curriculum/bulk-curriculum.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/study-exam/curriculum/bulk-curriculum.component.ts ***!
  \**************************************************************************/
/*! exports provided: BulkCurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkCurriculumComponent", function() { return BulkCurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");












var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
var BulkCurriculumComponent = /** @class */ (function () {
    function BulkCurriculumComponent(fb, route, router, http, pocquestionService, alertService, authenticationService, curriculumSingleService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.pocquestionService = pocquestionService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.curriculumSingleService = curriculumSingleService;
        this.title = 'angular Curriculum Bulk';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].s3_url;
        this.local_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.questionArr = [];
        this.isProcessed = false;
        this.percentDone = 0;
        this.masterArr = [];
        this.isEdit = false;
        this.idEdit = false;
        this.editData = [];
        this.isSave = true;
        this.loading2 = false;
        this.submitted2 = false;
        this.checkBox = 'false';
        this.selectedItems = [];
        this.question_value = "";
        this.selectedAll = false;
        /*private classOptions: string[] = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
        private semesterOptions: string[] = ["1", "2"];
        private groupOptions: string[] = ["1", "2", "3"];
        
        private lessonOptions: string[] = ["1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
        private chapterOptions: string[] = ["1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];*/
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.durationOptions = ["05", "15", "25", "30", "60", "120"];
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.formVar = this.fb.group({
            excelFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            existImage: ['']
        });
    }
    BulkCurriculumComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_image: [''],
            edit_question_image: [''],
            question_type: [''],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            answer: [''],
            class: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            quiz_sub_type: [''],
            quiz_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            chapter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            semester: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            quant_verbal: [''],
            group: [''],
            lesson: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            note: [''],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getDraftQuestion();
        this.getMasterData();
    };
    Object.defineProperty(BulkCurriculumComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    BulkCurriculumComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        //console.log(this.masterArr);
    };
    BulkCurriculumComponent.prototype.getDraftQuestion = function (user_id) {
        var _this = this;
        if (user_id === void 0) { user_id = 0; }
        this.pocquestionService.getDraftQuestionByUser(this.created_by)
            .subscribe(function (response) {
            _this.questionArr = response;
            //this.isProcessed = true;
            //console.log(Object.keys(this.questionArr).length);
            if (Object.keys(_this.questionArr).length != 0) {
                _this.isProcessed = true;
            }
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    BulkCurriculumComponent.prototype.downloadItem = function () {
        this.router.navigate([]).then(function (result) { window.open('/authentication/studyexam-downlad/teacher/2/0', '_blank'); });
        ;
        //this.generatePDF();
    };
    BulkCurriculumComponent.prototype.editItem = function (event) {
        this.editData = event;
        this.isEdit = true;
        this.isSave = false;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        console.log('---------------->>');
        console.log(this.question_value);
        this.form.patchValue({
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
            question_type: this.editData.qui_type,
            question_text: this.editData.question,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
            question_image: this.editData.question_image,
        });
        this.croppedImage = this.local_api_url + this.editData.question_image;
        this.question_type = this.editData.qui_type;
        this.preview = apiUrl + this.editData.question_image_url;
    };
    BulkCurriculumComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isSave = true;
    };
    BulkCurriculumComponent.prototype.fileChangeXlsx = function (element, variable) {
        //var pattern="^.+\.(xlsx|xls|csv)$";
        //var pattern="^.+\.(xlsx)$";
        var file = element.target.files[0];
        //console.log('type', file.type);
        //console.log('accept', element.target.accept);
        //console.log(element.target.files[0].name);
        var name = element.target.files[0].name;
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() == 'xlsx') {
            if (typeof (this.uploadedFiles) == "undefined") {
                this.uploadedFiles = new Array();
                this.uploadedFiles.push(element.target.files[0]);
            }
            else {
                this.uploadedFiles.push(element.target.files[0]);
            }
        }
        else {
            variable.value = null;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'File type should be xlsx', 'error');
            return;
        }
        /*if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          //this.form.reset();
          element.value = "";
          variable.value = null;
          Swal.fire('','File type should be xlsx','error');
          return;
        }else{
        
          if (typeof (this.uploadedFiles) == "undefined") {
            this.uploadedFiles = new Array<File>();
            this.uploadedFiles.push(element.target.files[0]);
          }
          else {
            this.uploadedFiles.push(element.target.files[0]);
          }
          //console.log(this.uploadedFiles);
        }*/
    };
    BulkCurriculumComponent.prototype.fileChangeZip = function (element, variable1) {
        var file = element.target.files[0];
        console.log('type', file.type);
        var name = element.target.files[0].name;
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() == 'zip') {
            if (typeof (this.uploadedFiles) == "undefined") {
                this.uploadedFiles = new Array();
                this.uploadedFiles.push(element.target.files[0]);
            }
            else {
                this.uploadedFiles.push(element.target.files[0]);
            }
        }
        else {
            variable1.value = null;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'File type should be zip', 'error');
            return;
        }
    };
    // Image Preview
    BulkCurriculumComponent.prototype.uploadQuestionImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({
            question_image_url: file
        });
        this.form.get('question_image_url').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    BulkCurriculumComponent.prototype.eventCheck = function (event) {
        this.checkBox = event.target.checked;
        console.log(event.target.checked); //<--- Check with this
    };
    BulkCurriculumComponent.prototype.upload = function () {
        var _this = this;
        this.showLoader();
        this.loading2 = true;
        console.log('-bf');
        console.log(this.uploadedFiles);
        if (typeof (this.uploadedFiles) == "undefined" || this.uploadedFiles.length == 0) {
            this.isError = false;
            this.isProcessed = false;
            this.errorData = null;
            //this.alertService.pop('error', "Excel file or zip file not selected.");
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Excel file or zip file not selected.', 'error');
            this.hideLoader();
            this.loading2 = false;
            return;
        }
        var formData = new FormData();
        formData.append("existImage", this.checkBox);
        //console.log('this.checkBox ', this.checkBox)
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //console.log('formData '+JSON.stringify(formData));
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl + 'cms-study-exam/api/curr_upload/1', formData, { reportProgress: true, observe: "events" })
            .subscribe(function (response) {
            switch (response.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(response.loaded / response.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response:
                    //console.log('response.body.message '+ response.body.message);
                    console.log('Upload successfully ', response.body);
                    if (response.body.error_code == 0) {
                        //this.errorData = response["data"];
                        _this.uploadedFiles = [];
                        _this.fileData = response.body["data"];
                        //this.fileData['created_by'] = this.created_by; 
                        //this.fileData.unshift({'created_by' : this.created_by});
                        //this.fileData.push({'created_by' : this.created_by});
                        console.log(_this.fileData);
                        _this.saveTemp(); // Here call function for save data in temp table
                        _this.isError = false;
                        _this.isProcessed = true;
                        _this.loading2 = false;
                        _this.alertService.pop('success', 'Study data upload successfully!');
                        _this.hideLoader();
                        _this.uploadedFiles = new Array();
                    }
                    else if (response.body.error_code == 1) {
                        _this.isError = false;
                        _this.isProcessed = false;
                        _this.loading2 = false;
                        _this.errorData = response.body["data"];
                        _this.errorCode = response.body["error_code"];
                        _this.errorDesc = response.body["err_desc"];
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', response.body.err_desc, 'error');
                        //this.alertService.pop('error', response.body.err_desc);
                        _this.uploadedFiles = new Array();
                        _this.formVar.reset();
                    }
                    else if (response.body.error_code == 2) {
                        _this.uploadedFiles = [];
                        _this.isError = true;
                        _this.isProcessed = false;
                        _this.loading2 = false;
                        _this.errorData = response.body["data"];
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', response.body.err_desc, 'error');
                        _this.uploadedFiles = new Array();
                        _this.formVar.reset();
                    }
                    _this.loading2 = false;
                    _this.percentDone = false;
            }
            _this.hideLoader();
            //console.log('response receved is ', response);
            //console.log('HttpEventType -- '+JSON.stringify(HttpEventType));
        });
    };
    BulkCurriculumComponent.prototype.saveTemp = function () {
        var _this = this;
        this.pocquestionService.addBulkQuestionTemp(this.fileData, this.created_by)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.getDraftQuestion(); //Show all temp data 
                _this.alertService.pop('success', 'Question added successfully in temp');
                //setTimeout(()=>this.router.navigate(['/study-exam']), 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    // Function is defined 
    BulkCurriculumComponent.prototype.hideLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'none';
    };
    BulkCurriculumComponent.prototype.showLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'block';
    };
    /* onCheckboxChange(event,val) {
        if(event.target.checked ) {
            this.selectedItems.push(val);
        }
         else {
          this.selectedItems.splice(this.selectedItems.indexOf(val),1);
        }
  
    } */
    BulkCurriculumComponent.prototype.selectAll = function () {
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
    BulkCurriculumComponent.prototype.checkIfAllSelected = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
        //console.log(this.selectedItems)
    };
    BulkCurriculumComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.pocquestionService.deleteDraftQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    self.getDraftQuestion();
                    //self.questionArr.splice(self.questionArr.indexOf(item_id),1);
                });
                if (self.questionArr.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    BulkCurriculumComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                /*this.selectedItems.forEach(function (value) {
                     self.fileData.forEach(function(arrItem){
                        if (value == arrItem.question) {
                            self.fileData.splice(self.fileData.indexOf(arrItem),1);
                        }
                     });
                });*/
                _this.selectedItems.forEach(function (value) {
                    self.questionArr.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.questionArr.splice(self.questionArr.indexOf(arrItem), 1);
                            self.pocquestionService.deleteDraftQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.questionArr.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    BulkCurriculumComponent.prototype.reUpload = function () {
        this.router.navigate(['/study-exam/create']);
    };
    /*removeQuiz(quiz) {
        if(confirm("Are you sure to delete: "+quiz.question)) {
            this.fileData.splice(this.fileData.indexOf(quiz), 1);
            this.alertService.pop('success', 'Study data deleted successfully!');
        }
    }*/
    BulkCurriculumComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        if (this.question_value == '' && this.form.value.question_type != 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question == '' && this.form.value.question_type == 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        if (this.form.value.question == '' && this.form.value.question_type == 'text_and_image') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        //this.gridview=true;
        //this.form.value.q_id=this.row_id;
        // this.row_id=this.row_id+1;
        //this.form.value.question=this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.isFile = this.isFile;
        //this.questionArr.push(this.form.value);
        //console.log(this.form.value);
        //this.form.reset();
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        //console.log(this.form.value);
        //console.log('---------->>>>>>>>')  
        this.pocquestionService.updateQuestionInDraft(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question successfully updated in draft');
                _this.getDraftQuestion();
                //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                _this.idEdit = false;
                _this.isEdit = false;
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
    };
    BulkCurriculumComponent.prototype.publish = function () {
        var _this = this;
        console.log(this.questionArr);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '',
            text: 'Are you sure want to publish?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                //////////publish call///
                _this.submitted2 = true;
                _this.loading2 = true;
                //console.log(this.questionArr);
                _this.pocquestionService.saveQuiz(_this.questionArr)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1000);
                    }
                    else {
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }
                    _this.loading2 = false;
                }, function (error) {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    _this.loading2 = false;
                });
                //////////end////////////
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //cancel
            }
        });
    };
    BulkCurriculumComponent.prototype.onSubmitData = function () {
        var _this = this;
        this.submitted = true;
        /*if(this.form.value.status){
        this.form.value.status="1";
        }
        else{
        this.form.value.status="0"
        }*/
        //this.form.value.question=this.value;
        this.loading = true;
        this.pocquestionService.addBulkQuestion(this.fileData)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question added successfully');
                setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/study-exam']);
        });
    };
    BulkCurriculumComponent.prototype.convertTwoDigit = function (n) {
        n = String(n);
        if (n.length == 1) {
            n = '0' + n;
        }
        return n;
    };
    BulkCurriculumComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.question_value = '';
        this.croppedImage = '';
        this.form.patchValue({
            question: ''
        });
    };
    BulkCurriculumComponent.prototype.fileChangeEvent = function (event) {
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
    BulkCurriculumComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            edit_question_image: this.croppedImage
        });
    };
    BulkCurriculumComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    BulkCurriculumComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    BulkCurriculumComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload image only', 'error');
    };
    BulkCurriculumComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    BulkCurriculumComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__["PocquestionService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__["CurriculumSingleService"] }
    ]; };
    BulkCurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-curriculum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bulk-curriculum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/bulk-curriculum.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bulk-curriculum.component.scss */ "./src/app/pages/study-exam/curriculum/bulk-curriculum.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_4__["PocquestionService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"], _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__["CurriculumSingleService"]])
    ], BulkCurriculumComponent);
    return BulkCurriculumComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/curriculum/single-curriculum.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/study-exam/curriculum/single-curriculum.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .question .ck-editor__editable_inline {\n  min-height: 200px;\n  max-height: 200px;\n}\n\n:host ::ng-deep .ck-editor__editable_inline p {\n  font-size: 18px;\n}\n\n:host ::ng-deep .ck-editor {\n  width: 300px;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n.publish-table-wrap.m-b-0 {\n  margin-bottom: 0px;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  max-height: 400px;\n}\n\n:host ::ng-deep .q_opton .ck-editor__editable_inline {\n  min-height: 40px;\n  max-height: 40px;\n}\n\n:host ::ng-deep .ltr-txt .ck-editor__editable_inline {\n  text-align: left;\n  direction: ltr;\n}\n\n:host ::ng-deep .rtl-txt .ck-editor__editable_inline {\n  text-align: right;\n  direction: rtl;\n}\n\n.single-curriculum-wrap .publish-table-wrap {\n  padding: 0px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jdXJyaWN1bHVtL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxzdHVkeS1leGFtXFxjdXJyaWN1bHVtXFxzaW5nbGUtY3VycmljdWx1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3R1ZHktZXhhbS9jdXJyaWN1bHVtL3NpbmdsZS1jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURJQTtFQUE0QixrQkFBQTtBQ0E1Qjs7QURDQTtFQUE2QyxpQkFBQTtBQ0c3Qzs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0gsY0FBQTtBQ0lEOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDS0o7O0FEREE7RUFBNkMsbUJBQUE7QUNLN0MiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkeS1leGFtL2N1cnJpY3VsdW0vc2luZ2xlLWN1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnF1ZXN0aW9uIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHAge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcntcclxuICAgIHdpZHRoOiAzMDBweDs7XHJcbn1cclxuXHJcbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5ncm91cCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhcmQtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMCAxMnB4IDVweDtcclxufVxyXG5cclxuXHJcbi5wdWJsaXNoLXRhYmxlLXdyYXAubS1iLTAgeyBtYXJnaW4tYm90dG9tOiAwcHg7fVxyXG4uc2luZ2xlLWN1cnJpY3VsdW0td3JhcCAucHVibGlzaC10YWJsZS13cmFwIHttYXgtaGVpZ2h0OiA0MDBweDt9XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnFfb3B0b24gLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmx0ci10eHQgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblx0ZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5ydGwtdHh0IC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7cGFkZGluZzogMHB4IDAgMTVweDt9XHJcblxyXG5cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5xdWVzdGlvbiAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3Ige1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDAgMTJweCA1cHg7XG59XG5cbi5wdWJsaXNoLXRhYmxlLXdyYXAubS1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5wdWJsaXNoLXRhYmxlLXdyYXAge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5xX29wdG9uIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubHRyLXR4dCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ydGwtdHh0IC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLnB1Ymxpc2gtdGFibGUtd3JhcCB7XG4gIHBhZGRpbmc6IDBweCAwIDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/study-exam/curriculum/single-curriculum.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/study-exam/curriculum/single-curriculum.component.ts ***!
  \****************************************************************************/
/*! exports provided: SingleCurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCurriculumComponent", function() { return SingleCurriculumComponent; });
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");










var SingleCurriculumComponent = /** @class */ (function () {
    function SingleCurriculumComponent(fb, route, router, alertService, curriculumSingleService, authenticationService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.curriculumSingleService = curriculumSingleService;
        this.authenticationService = authenticationService;
        this.title = 'angularckeditor';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].s3_url;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.selectedItems = [];
        this.loading = false;
        this.submitted = false;
        this.loading2 = false;
        this.submitted2 = false;
        this.gridview = false;
        this.error = '';
        this.questionArr = [];
        this.masterArr = [];
        this.row_id = 1;
        this.isEdit = false;
        this.idEdit = false;
        this.editData = [];
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        this.language = 'arabic';
        this.config = {
            fontSize: {
                options: [
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18
                ]
            },
            toolbar: [
                'heading',
                '|',
                'fontSize',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                //'subscript', 
                //'superscript',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                //'imageUpload',
                //'blockQuote',
                //'insertTable',
                //'mediaEmbed',
                'MathType',
                'ChemType',
                'undo',
                'redo',
            ],
            contentsLangDirection: 'rtl',
            contentsLanguage: 'ar',
            language: 'ar'
        };
        this.question_value = "";
        this.optiona_value = "";
        this.optionb_value = "";
        this.optionc_value = "";
        this.optiond_value = "";
        this.default_font_size = 'font-size:18px';
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    SingleCurriculumComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_type: [this.question_type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            language: [this.language],
            option1: [''],
            option2: [''],
            option3: [''],
            option4: [''],
            answer: [''],
            class: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            quiz_sub_type: [''],
            quiz_type: ['1'],
            chapter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            semester: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            quant_verbal: [''],
            group: [''],
            lesson: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            note: [''],
            level: [''],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getDraftQuestion();
        this.getMasterData();
    };
    Object.defineProperty(SingleCurriculumComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    SingleCurriculumComponent.prototype.getDraftQuestion = function (user_id) {
        var _this = this;
        if (user_id === void 0) { user_id = 0; }
        this.curriculumSingleService.getDraftQuestionByUser(this.created_by).subscribe(function (response) {
            _this.questionArr = response;
            if (_this.questionArr.length > 0) {
                _this.gridview = true;
            }
        });
    };
    SingleCurriculumComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        console.log(this.masterArr);
    };
    SingleCurriculumComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.question_type == 'text') {
            if (this.question_value == '' || this.question_value == '<p><br data-cke-filler="true"></p>') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
                return;
            }
            //var qSize=this.isOverflown($(".ck-content")[0]);
            var qSize = this.isOverflown($(".question").find("div.ck-content")[0]);
            if (qSize) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Question maximum request length exceeded ', 'error');
                return;
            }
        }
        if (this.croppedImage == '' && this.question_type != 'text') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question_text == '' && this.form.value.question_type == 'text_and_image') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        if (this.optiona_value == '' || this.optiona_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option A.', 'error');
            return;
        }
        if (this.optionb_value == '' || this.optionb_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option B.', 'error');
            return;
        }
        if (this.optionc_value == '' || this.optionc_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option C.', 'error');
            return;
        }
        if (this.optiond_value == '' || this.optiond_value == '<p><br data-cke-filler="true"></p>') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please write option D.', 'error');
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        this.form.value.isFile = this.isFile;
        this.gridview = true;
        //this.form.value.q_id=this.row_id;
        // this.row_id=this.row_id+1;
        this.form.value.question = this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.option1 = this.optiona_value;
        this.form.value.option2 = this.optionb_value;
        this.form.value.option3 = this.optionc_value;
        this.form.value.option4 = this.optiond_value;
        console.log(this.form.value);
        //this.questionArr.push(this.form.value);
        //this.form.reset();
        this.loading = true;
        if (this.idEdit && this.isEdit) {
            /////update in temp////
            this.form.value.id = this.idEdit;
            console.log(this.form.value);
            console.log('---------->>>>>>>>');
            this.curriculumSingleService.updateQuestionInDraft(this.form.value)
                .subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.alertService.pop('success', 'Question successfully saved in draft');
                    _this.getDraftQuestion();
                    //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                    _this.idEdit = false;
                    _this.isEdit = false;
                }
                else {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                }
                _this.croppedImage = '';
                _this.loading = false;
                _this.submitted = false;
            }, function (error) {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
                _this.loading = false;
                _this.submitted = false;
            });
        }
        else {
            /////save in temp////
            this.curriculumSingleService.saveQuestionInDraft(this.form.value)
                .subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.alertService.pop('success', 'Question successfully saved in draft');
                    _this.getDraftQuestion();
                    //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                }
                else {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                }
                _this.croppedImage = '';
                _this.loading = false;
                _this.submitted = false;
            }, function (error) {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
                _this.loading = false;
                _this.submitted = false;
            });
        }
        /////////////////////
    };
    SingleCurriculumComponent.prototype.publish = function () {
        // console.log(this.questionArr); return ;
        var _this = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: '',
            text: 'Are you sure want to publish?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                //////////publish call///
                _this.submitted2 = true;
                _this.loading2 = true;
                _this.curriculumSingleService.saveQuiz(_this.questionArr)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/study-exam']); }, 1000);
                    }
                    else {
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }
                    _this.loading2 = false;
                }, function (error) {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    _this.loading2 = false;
                });
                //////////end////////////
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //cancel
            }
        });
    };
    SingleCurriculumComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                self.curriculumSingleService.deleteDraftQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    self.getDraftQuestion();
                });
                if (self.questionArr.length == 0) {
                    _this.gridview = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    SingleCurriculumComponent.prototype.downloadItem = function () {
        this.router.navigate([]).then(function (result) { window.open('/authentication/studyexam-downlad/teacher/1/0', '_blank'); });
        ;
        //this.generatePDF();
    };
    SingleCurriculumComponent.prototype.generatePDF = function () {
        var doc = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: "a4"
        });
        var res = doc.autoTableHtmlToJson(document.getElementById("contentToConvert"), false);
        doc.autoTable(res.columns, res.rows);
        doc.save("table.pdf");
    };
    SingleCurriculumComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.selectedItems.forEach(function (value) {
                    self.questionArr.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.questionArr.splice(self.questionArr.indexOf(arrItem), 1);
                            self.curriculumSingleService.deleteDraftQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.questionArr.length == 0) {
                    _this.gridview = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    SingleCurriculumComponent.prototype.editItem = function (event) {
        this.isFile = false;
        this.editData = event;
        this.isEdit = true;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        this.form.value.option1 = this.optiona_value;
        this.form.value.option2 = this.optionb_value;
        this.form.value.option3 = this.optionc_value;
        this.form.value.option4 = this.optiond_value;
        console.log('---------------->>');
        console.log(this.question_value);
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        console.log('<<----------------');
        this.form.patchValue({
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
            duration: this.editData.duration,
            question_type: this.editData.qui_type,
            question_text: this.editData.question,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
        });
        this.croppedImage = this.s3_url + this.editData.question_image_url;
        this.question_type = this.editData.qui_type;
        window.scroll(0, 0);
    };
    SingleCurriculumComponent.prototype.onCheckboxChange = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
    };
    SingleCurriculumComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.question_value = editor.getData();
        console.log('editor change event');
        //var html =$(".ck-content").html();
        var html = $(".question").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.question_value = html;
    };
    SingleCurriculumComponent.prototype.onChangeA = function (_a) {
        var editor = _a.editor;
        this.optiona_value = editor.getData();
        var html = $(".optiona").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optiona_value = html;
        console.log('editor change event Option A' + html);
    };
    SingleCurriculumComponent.prototype.onChangeB = function (_a) {
        var editor = _a.editor;
        this.optionb_value = editor.getData();
        var html = $(".optionb").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optionb_value = html;
        console.log('editor change event Option B' + html);
    };
    SingleCurriculumComponent.prototype.onChangeC = function (_a) {
        var editor = _a.editor;
        this.optionc_value = editor.getData();
        var html = $(".optionc").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optionc_value = html;
        console.log('editor change event Option C' + html);
    };
    SingleCurriculumComponent.prototype.onChangeD = function (_a) {
        var editor = _a.editor;
        this.optiond_value = editor.getData();
        var html = $(".optiond").find("div.ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.optiond_value = html;
        console.log('editor change event Option D' + html);
    };
    SingleCurriculumComponent.prototype.isOverflown = function (element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    };
    SingleCurriculumComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.question_value = '';
        this.croppedImage = '';
        this.form.patchValue({
            question_text: '',
        });
    };
    SingleCurriculumComponent.prototype.lgChanged = function (element) {
        this.language = element;
        if (element == 'english') {
            $(".q_opton,.question").removeClass("rtl-txt");
            $(".q_opton,.question").addClass("ltr-txt");
            //update editor config
            this.config.contentsLangDirection = 'ltr';
            this.config.contentsLanguage = 'en';
            this.config.language = 'en';
        }
        else {
            $(".q_opton,.question").removeClass("ltr-txt");
            $(".q_opton,.question").addClass("rtl-txt");
            //update editor config
            this.config.contentsLangDirection = 'rtl';
            this.config.contentsLanguage = 'ar';
            this.config.language = 'ar';
        }
    };
    SingleCurriculumComponent.prototype.fileChangeEvent = function (event) {
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
    SingleCurriculumComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            question_image: this.croppedImage
        });
    };
    SingleCurriculumComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    SingleCurriculumComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    SingleCurriculumComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please upload image only', 'error');
    };
    SingleCurriculumComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    SingleCurriculumComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    SingleCurriculumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-curriculum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-curriculum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/curriculum/single-curriculum.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-curriculum.component.scss */ "./src/app/pages/study-exam/curriculum/single-curriculum.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_5__["CurriculumSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], SingleCurriculumComponent);
    return SingleCurriculumComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/study-exam/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/studyexam/question.service */ "./src/app/services/studyexam/question.service.ts");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(pocquestionService, questionService, router, alertService, authenticationService) {
        this.pocquestionService = pocquestionService;
        this.questionService = questionService;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
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
    DashboardComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.showCompetitive();
    };
    DashboardComponent.prototype.showCompetitive = function () {
        var _this = this;
        this.pocquestionService.getQuizByUser(this.created_by)
            .subscribe(function (data) {
            _this.quizData = data['quiz'];
            _this.quizDraftData = data['draft_quiz'];
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            //this.router.navigate(['/question']);
        });
    };
    DashboardComponent.prototype.baseEncode = function (id) {
        return btoa(id);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"] },
        { type: _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/dashboard.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"],
            _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/question-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/study-exam/question-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: QuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRoutingModule", function() { return QuestionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _studyexam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studyexam.component */ "./src/app/pages/study-exam/studyexam.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/study-exam/dashboard.component.ts");
/* harmony import */ var _competitive_single_competitive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competitive/single-competitive.component */ "./src/app/pages/study-exam/competitive/single-competitive.component.ts");
/* harmony import */ var _curriculum_single_curriculum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curriculum/single-curriculum.component */ "./src/app/pages/study-exam/curriculum/single-curriculum.component.ts");
/* harmony import */ var _competitive_bulk_competitive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competitive/bulk-competitive.component */ "./src/app/pages/study-exam/competitive/bulk-competitive.component.ts");
/* harmony import */ var _curriculum_bulk_curriculum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./curriculum/bulk-curriculum.component */ "./src/app/pages/study-exam/curriculum/bulk-curriculum.component.ts");









var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'create',
        component: _studyexam_component__WEBPACK_IMPORTED_MODULE_3__["StudyexamComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'create/:quiz_temp_id',
        component: _studyexam_component__WEBPACK_IMPORTED_MODULE_3__["StudyexamComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'curriculum-single',
        component: _curriculum_single_curriculum_component__WEBPACK_IMPORTED_MODULE_6__["SingleCurriculumComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'competitive-single-old',
        component: _competitive_single_competitive_component__WEBPACK_IMPORTED_MODULE_5__["SingleCompetitiveComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'competitive-single/:quiz_temp_id',
        component: _competitive_single_competitive_component__WEBPACK_IMPORTED_MODULE_5__["SingleCompetitiveComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'curriculum-bulk',
        component: _curriculum_bulk_curriculum_component__WEBPACK_IMPORTED_MODULE_8__["BulkCurriculumComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'curriculum-bulk/:quiz_temp_id',
        component: _curriculum_bulk_curriculum_component__WEBPACK_IMPORTED_MODULE_8__["BulkCurriculumComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'competitive-bulk',
        component: _competitive_bulk_competitive_component__WEBPACK_IMPORTED_MODULE_7__["BulkCompetitiveComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'competitive-bulk/:quiz_temp_id',
        component: _competitive_bulk_competitive_component__WEBPACK_IMPORTED_MODULE_7__["BulkCompetitiveComponent"],
        data: {
            breadcrumb: 'Study Exam',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var QuestionRoutingModule = /** @class */ (function () {
    function QuestionRoutingModule() {
    }
    QuestionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QuestionRoutingModule);
    return QuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/question.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/study-exam/question.module.ts ***!
  \*****************************************************/
/*! exports provided: SafeHtmlPipe, QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-routing.module */ "./src/app/pages/study-exam/question-routing.module.ts");
/* harmony import */ var _studyexam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./studyexam.component */ "./src/app/pages/study-exam/studyexam.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/study-exam/dashboard.component.ts");
/* harmony import */ var _competitive_single_competitive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./competitive/single-competitive.component */ "./src/app/pages/study-exam/competitive/single-competitive.component.ts");
/* harmony import */ var _curriculum_single_curriculum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./curriculum/single-curriculum.component */ "./src/app/pages/study-exam/curriculum/single-curriculum.component.ts");
/* harmony import */ var _competitive_bulk_competitive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./competitive/bulk-competitive.component */ "./src/app/pages/study-exam/competitive/bulk-competitive.component.ts");
/* harmony import */ var _curriculum_bulk_curriculum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curriculum/bulk-curriculum.component */ "./src/app/pages/study-exam/curriculum/bulk-curriculum.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");










//import { BrowserModule } from '@angular/platform-browser';









var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _question_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_16__["ImageCropperModule"]
            ],
            declarations: [
                _studyexam_component__WEBPACK_IMPORTED_MODULE_4__["StudyexamComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _competitive_single_competitive_component__WEBPACK_IMPORTED_MODULE_6__["SingleCompetitiveComponent"],
                _curriculum_single_curriculum_component__WEBPACK_IMPORTED_MODULE_7__["SingleCurriculumComponent"],
                _competitive_bulk_competitive_component__WEBPACK_IMPORTED_MODULE_8__["BulkCompetitiveComponent"],
                _curriculum_bulk_curriculum_component__WEBPACK_IMPORTED_MODULE_9__["BulkCurriculumComponent"],
                SafeHtmlPipe
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/pages/study-exam/studyexam.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/study-exam/studyexam.component.ts ***!
  \*********************************************************/
/*! exports provided: StudyexamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyexamComponent", function() { return StudyexamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/studyexam/question.service */ "./src/app/services/studyexam/question.service.ts");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/studyexam/competitive-single.service */ "./src/app/services/studyexam/competitive-single.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");












var StudyexamComponent = /** @class */ (function () {
    function StudyexamComponent(fb, route, pocquestionService, questionService, router, alertService, competitiveSingleService, authenticationService, curriculumSingleService) {
        this.fb = fb;
        this.route = route;
        this.pocquestionService = pocquestionService;
        this.questionService = questionService;
        this.router = router;
        this.alertService = alertService;
        this.competitiveSingleService = competitiveSingleService;
        this.authenticationService = authenticationService;
        this.curriculumSingleService = curriculumSingleService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].s3_url;
        this.quizArr = [];
        this.editData = [];
        this.isEdit = false;
        this.isFile = false;
        this.submitted = false;
        this.loading = false;
        this.isDesc = false;
        this.column = 'id';
        this.isCompt = false;
        this.showModal = false;
        this.fileData = null;
        //@Output() public found = new EventEmitter<any>();
        this.found = [];
        this.masterArr = [];
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.form = this.fb.group({
            upload_type: ['single'],
            quiz_type: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quiz_sub_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quiz_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quiz_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quiz_icon: [null],
        });
    }
    StudyexamComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.getMasterData(); // Get master data from DB
        this.quiz_temp_id = (this.route.snapshot.params['quiz_temp_id']); //atob
        //console.log(this.quiz_temp_id);
        if (this.quiz_temp_id) {
            this.getDraftQuiz(this.quiz_temp_id);
            this.isEdit = true;
        }
    };
    Object.defineProperty(StudyexamComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    StudyexamComponent.prototype.getMasterData = function () {
        var _this = this;
        this.curriculumSingleService.getMasterData().subscribe(function (response) {
            _this.masterArr = response['data'];
        });
        console.log(this.masterArr);
    };
    StudyexamComponent.prototype.getDraftQuiz = function (quiz_id) {
        var _this = this;
        this.pocquestionService.getDraftQuizByUser(this.created_by, quiz_id).subscribe(function (response) {
            _this.editData = response[0];
            if (_this.editData.length == 0) {
                _this.router.navigate(['/study-exam/create']);
            }
            //console.log(response[0]);
            console.log('<<----------------');
            _this.isCompt = true; // Here true for show hidden form of Study competitive
            _this.form.patchValue({
                upload_type: _this.editData.save_type,
                quiz_type: _this.editData.quiz_type,
                quiz_sub_type: _this.editData.quiz_sub_type,
                quiz_title: _this.editData.quiz_title,
                quiz_description: _this.editData.quiz_description,
                quiz_icon: [null],
            });
            _this.preview = _this.s3_url + _this.editData.quiz_icon_url;
            _this.croppedImage = _this.preview;
        });
    };
    StudyexamComponent.prototype.uploadFile = function (event, variable) {
        var _this = this;
        this.preview = '';
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            var img_1 = new Image();
            var name = event.target.files[0].name;
            var ext = name.substring(name.lastIndexOf('.') + 1);
            if (ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'png') {
                console.log('ext check');
                variable.value = null;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'File type should be jpeg, jpg or png format', 'error');
                return;
            }
            img_1.src = window.URL.createObjectURL(file_1);
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                setTimeout(function () {
                    var width = img_1.naturalWidth;
                    var height = img_1.naturalHeight;
                    window.URL.revokeObjectURL(img_1.src);
                    console.log(width + '*' + height);
                    if (width !== 200 && height !== 200) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Image should be 200 x 200 size.', 'error');
                        variable.value = null;
                    }
                    else {
                        _this.form.patchValue({
                            quiz_icon: file_1
                        });
                        _this.form.get('quiz_icon').updateValueAndValidity();
                        _this.preview = reader.result;
                    }
                }, 1000);
            };
        }
    };
    StudyexamComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.value.quiz_type == '') {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please select quiz type.', 'error');
            return;
        }
        if (this.form.value.quiz_type == '1') { // 1 => Curriculum Exam
            this.isCompt = false;
            if (this.form.value.upload_type == 'single') {
                this.router.navigate(['/study-exam/curriculum-single']);
            }
            else {
                this.router.navigate(['/study-exam/curriculum-bulk']);
            }
        }
        if (this.form.value.quiz_type == '2') { // 2 => Competitive Exam
            this.submitted = true;
            if (this.form.invalid) {
                return;
            }
            /* if(this.form.value.quiz_icon==null){
                Swal.fire('','Please upload quiz icon.','error');
                return;
            } */
            this.isCompt = true;
            /* Add image start*/
            var saveDataArr = [];
            saveDataArr = this.form.value;
            console.log(saveDataArr);
            saveDataArr['isFile'] = this.isFile;
            console.log(saveDataArr);
            if (this.quiz_temp_id) {
                saveDataArr['quiz_temp_id'] = this.quiz_temp_id;
                this.getUpdateDraftQuiz(this.quiz_temp_id, saveDataArr);
                return;
            }
            this.competitiveSingleService.saveQuizImageNew(saveDataArr).subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.quiz_icon_str = data['quiz_icon'];
                    _this.submitted = true;
                    if (_this.form.invalid) {
                        return;
                    }
                    //////save in temp/////
                    _this.submitted = true;
                    _this.loading = true;
                    // Check quiz icon is upload return blank 
                    if (_this.quiz_icon_str == "") {
                        _this.quiz_icon_str = "default/default_quiz_icon.png";
                    }
                    _this.form.value.created_by = _this.created_by;
                    _this.found = _this.form.value;
                    _this.found['quiz_icon_url'] = _this.quiz_icon_str;
                    //console.log(this.found);
                    _this.competitiveSingleService.saveQuizInTemp(_this.found)
                        .subscribe(function (data) {
                        if (data['status'] == 200) {
                            if (_this.form.value.upload_type == 'single') {
                                var signal_url = '/study-exam/competitive-single/' + btoa(data['temp_quiz_id']);
                                _this.router.navigate([signal_url]);
                            }
                            else {
                                var bulk_url = '/study-exam/competitive-bulk/' + btoa(data['temp_quiz_id']);
                                _this.router.navigate([bulk_url]);
                            }
                        }
                        else {
                            _this.router.navigate(['/study-exam/create']);
                            _this.alertService.pop('error', 'Something went wrong. Try again later.');
                        }
                        _this.loading = false;
                    }, function (error) {
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                        _this.loading = false;
                        _this.router.navigate(['/study-exam/create']);
                    });
                    // }else{
                    //    this.found = this.form.value;
                    //    //this.found['fileData'] = this.fileData;
                    //    this.found['quiz_icon_url'] = this.quiz_icon_str;
                    //    //console.log('this.found '+JSON.stringify(this.found));
                    //    this.questionService.insertData(this.found);
                    //    this.found = [];
                    //    this.router.navigate(['/study-exam/competitive-bulk']);
                    // }
                    //this.found = this.form.value;
                }
            }, function (err) { return console.log(err); });
            /* End here */
        }
        //console.log(this.form.value)
    };
    StudyexamComponent.prototype.getUpdateDraftQuiz = function (quiz_temp_id, formData) {
        var _this = this;
        console.log(formData);
        console.log('---------->>>>>>>>');
        this.competitiveSingleService.updateQuizImageNew(formData).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.quiz_icon_str = data['quiz_icon'];
                //if(this.form.value.upload_type=='single'){
                //this.router.navigate(['/study-exam/competitive-single']);
                _this.submitted = true;
                if (_this.form.invalid) {
                    return;
                }
                //////save in temp/////
                _this.submitted = true;
                _this.loading = true;
                _this.form.value.created_by = _this.created_by;
                _this.found = _this.form.value;
                _this.found['quiz_icon_url'] = _this.quiz_icon_str;
                // console.log(this.found);
                _this.competitiveSingleService.updateQuizInTemp(_this.found, quiz_temp_id)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        if (_this.form.value.upload_type == 'single') {
                            var signal_url = '/study-exam/competitive-single/' + quiz_temp_id;
                            _this.router.navigate([signal_url]);
                        }
                        else {
                            var bulk_url = '/study-exam/competitive-bulk/' + quiz_temp_id;
                            _this.router.navigate([bulk_url]);
                        }
                    }
                    else {
                        _this.router.navigate(['/study-exam/create']);
                        _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    }
                    _this.loading = false;
                }, function (error) {
                    _this.alertService.pop('error', 'Something went wrong. Try again later.');
                    _this.loading = false;
                    _this.router.navigate(['/study-exam/create']);
                });
            }
        }, function (err) { return console.log(err); });
    };
    StudyexamComponent.prototype.examType = function () {
        if (this.form.value.quiz_type == '2') {
            this.isCompt = true;
        }
        else {
            this.isCompt = false;
        }
    };
    StudyexamComponent.prototype.fileChangeEvent = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            var img = new Image();
            var name = event.target.files[0].name;
            var ext = name.substring(name.lastIndexOf('.') + 1);
            if (ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'png') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'File type should be jpeg, jpg or png format', 'error');
                return;
            }
            else {
                this.imageChangedEvent = event;
                this.showModal = true;
                this.isFile = true;
            }
        }
    };
    StudyexamComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.form.patchValue({
            quiz_icon: this.croppedImage
        });
    };
    StudyexamComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    StudyexamComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    StudyexamComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload image only', 'error');
    };
    StudyexamComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    StudyexamComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"] },
        { type: _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__["CompetitiveSingleService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__["CurriculumSingleService"] }
    ]; };
    StudyexamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studyexam',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studyexam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/study-exam/studyexam.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_3__["PocquestionService"],
            _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_5__["CompetitiveSingleService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_10__["CurriculumSingleService"]])
    ], StudyexamComponent);
    return StudyexamComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-study-exam-question-module.js.map