(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-competition-general-competition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/add/add-gc.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/add/add-gc.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid single-curriculum\">\r\n \r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 single-curriculum-wrap\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4>General Competition</h4>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" (click)=\"uploadType('single')\" data-toggle=\"tab\" href=\"#single\">Single Upload</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"uploadType('bulk')\" data-toggle=\"tab\" href=\"#bulk\">Bulk Upload</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"tab-content\">\r\n        <div id=\"bulk\" class=\"container tab-pane active\" *ngIf=\"isBulk\">\r\n          <div class=\"row\" *ngIf=\"isSave\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-12\">\r\n                <form class=\"md-float-material\" [formGroup]=\"formVar\" novalidate (ngSubmit)=\"onSubmit()\">\r\n\r\n                  <div class=\"row file-upload\">\r\n                     <div class=\"card-block col-sm-6 col-sm-6 col-md-6\">\r\n                      <div class=\"group\">\r\n\r\n                        <label>Heading</label>\r\n                        <select class=\"form-control\" formControlName=\"heading\" [ngClass]=\"{ 'is-invalid': submitted && fv.heading.errors }\" (change)=\"changedHeading($event.target.value)\">\r\n                          <option value=\"\">Heading</option>\r\n                          <option *ngFor=\"let option of headingArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && fv.heading.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fv.heading.errors.required\">heading is required.</div>\r\n                            <div *ngIf=\"fv.heading.errors.pattern\">Accept numeric values only.</div>\r\n                        </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"card-block col-sm-6 col-sm-6 col-md-6\">\r\n                      <div class=\"group\">\r\n                        <label>Category</label>\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && fv.category.errors }\">\r\n                          <option value=\"\">Category</option>\r\n                          <option *ngFor=\"let option of categoryArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && fv.category.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"fv.category.errors.required\">Category is required.</div>\r\n                          </div>\r\n                     </div>\r\n                  </div> \r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"group\">\r\n                      Upload xlsx file\r\n                    </div>\r\n                      <div class=\"group\">\r\n                        <input #variable accept=\".xlsx\" (change)=\"fileChangeXlsx($event, variable)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\">\r\n                      </div>\r\n                      <div class=\"group\">\r\n                        <a href=\"assets/file/gc_format.xlsx\"> \r\n                          Sample Quiz\r\n                        <img class=\"img-fluid\" width=\"20\" height=\"18\" alt=\" \" src=\"assets/images/sample-quiz.jpg\"> </a>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"group\">\r\n                      Upload image/video Zip file\r\n                    </div>\r\n                      <div class=\"group\">\r\n                        <input #variable1 accept=\".zip\" (change)=\"fileChangeZip($event, variable1)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\">\r\n                      </div>\r\n\r\n                      <div class=\"group do-u-have-img\">\r\n                        Do you have image/video? <input type=\"checkbox\" formControlName=\"existImage\" value=\"Yes\" (change)=\"eventCheck($event)\"> Yes\r\n\r\n                      </div>\r\n                      <div class=\"group\">\r\n                        <div class=\"col-md-12\">\r\n                          <!-- Progress Bar --> \r\n                          <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n                              <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                                [style.width.%]=\"percentDone\">\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- spinnner element is defined with id loading -->\r\n                          <div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n                              <div class=\"spinner-border\" role=\"status\"> \r\n                                  <span class=\"sr-only\" id=\"loading\"></span> \r\n                              </div> \r\n                          </div>\r\n                        \r\n                         <button type=\"button\" class=\"btn allam-btn-green text-white\" (click)=\"upload()\" id=\"btnUpload\"><span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span> Upload</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div *ngIf=\"isError\" class=\"bulk_table_fullw\">\r\n                <div class=\"card-block col-sm-12 col-xs-12 col-md-12\">\r\n                  <div class=\"publish-table-wrap table-responsive\">\r\n                    <h1>Following data is having errors:</h1>\r\n                      <table width=\"100%\" class=\"table table-striped table-bordered nowrap dataTable\" border=\"1\">\r\n                        <thead>\r\n                          <tr>\r\n                            \r\n                            <th width=\"10%\">Question</th>\r\n                            <!-- <th width=\"10%\">Question File Url</th> -->\r\n                            <th width=\"10%\">Answer</th>\r\n                            <th width=\"10%\">Option A</th>\r\n                            <th width=\"10%\">Option B</th>\r\n                            <th width=\"10%\">Option C</th>\r\n                            <th width=\"10%\">Option D</th>\r\n                            <th width=\"10%\">Level</th>\r\n                            <th width=\"10%\">Notes</th>\r\n                            <th width=\"10%\">Remarks</th>\r\n                            \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of errorData\">\r\n                            \r\n                            <td width=\"10%\">{{ item.question }}</td>\r\n                            <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                            <td width=\"10%\">{{ item.answer }}</td>\r\n                            <td width=\"10%\">{{ item.option1 }}</td>\r\n                            <td width=\"10%\">{{ item.option2 }}</td>\r\n                            <td width=\"10%\">{{ item.option3 }}</td>\r\n                            <td width=\"10%\">{{ item.option4 }}</td>\r\n                            <td width=\"10%\">{{ item.level }}</td>\r\n                            <td width=\"10%\">{{ item.notes }}</td>\r\n                            <td [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"isProcessed && questionArr.length >0\" class=\"bulk_table_fullw\">\r\n                      <div class=\"card-block col-sm-12 col-xs-12 col-md-12\">\r\n                        <div class=\"publish-table-wrap table-responsive\">\r\n                          <table id=\"autofill\" class=\"table table-striped table-bordered table-sm dataTable no-footer\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th>Level</th>\r\n                                <th>Answer</th>\r\n                                <th><span class=\"option-width\">Option D </span></th>\r\n                                <th><span class=\"option-width\">Option C </span></th>\r\n                                <th><span class=\"option-width\">Option B </span></th>\r\n                                <th><span class=\"option-width\">Option A </span></th>\r\n                                <th>Question Type </th>\r\n                                <th>Question </th>\r\n                                <th>Duration</th>\r\n                                <th>Heading</th>\r\n                                <th>Category</th>\r\n                                <th>Edit </th>\r\n                                <th>Delete </th>\r\n                                <th><button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button> <!-- <button (click)=\"deleteFoodSelected()\">DeleteSelectedFood</button> --></th>\r\n\r\n                                <!--  <th>Image/Video URL</th> -->\r\n                                \r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let item of questionArr\">\r\n                                <td class=\"\">{{ item.level }}</td>\r\n                                <td class=\"\">{{ item.answer }}</td>\r\n                                <td class=\"\">{{ item.option4 }}</td>\r\n                                <td class=\"\">{{ item.option3 }} </td>\r\n                                <td class=\"\">{{ item.option2 }} </td>\r\n                                <td class=\"\">{{ item.option1 }} </td>\r\n                                <td class=\"\">{{ item.file_type }}</td> \r\n                                <td>\r\n                                  <div *ngIf=\"item.qui_type=='text'\">\r\n                                    {{item.question}}\r\n                                  </div>\r\n                                    <div  *ngIf=\"item.qui_type=='image'\">\r\n                                      <img style=\"width: 400px;height: 300px\" src=\"{{local_api_url+item.question_image}}\">\r\n                                    </div>\r\n                                    <div *ngIf=\"item.qui_type=='text_and_image'\">\r\n                                      <img style=\"width: 400px;height: 300px\" src=\"{{local_api_url+item.question_image}}\">\r\n                                      <br>{{item.question}}\r\n                                    </div>\r\n                                    <div *ngIf=\"item.qui_type=='video'\">\r\n                                      <video *ngIf=\"item.question_image=='live'\" style=\"width:285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                          <source src=\"{{s3_url+item.question_image_url}}\" type=\"video/mp4\" />\r\n                                          Browser not supported\r\n                                      </video>\r\n                                       <video *ngIf=\"item.question_image!='live'\" style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                          <source src=\"{{local_api_url+item.question_image}}\" type=\"video/mp4\" />\r\n                                          Browser not supported\r\n                                      </video>\r\n                                    </div>\r\n                                    <div *ngIf=\"item.qui_type=='text_and_video'\">\r\n                                      <video *ngIf=\"item.question_image=='live'\" style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                          <source src=\"{{s3_url+item.question_image_url}}\" type=\"video/mp4\" />\r\n                                          Browser not supported\r\n                                      </video>\r\n                                       <video *ngIf=\"item.question_image!='live'\" style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                          <source src=\"{{local_api_url+item.question_image}}\" type=\"video/mp4\" />\r\n                                          Browser not supported\r\n                                      </video>\r\n                                      <br>{{item.question}}\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"\">{{ item.duration }}</td>\r\n                                <td class=\"\">{{ item.header_name }}</td>\r\n                                <td class=\"\">{{ item.category_name }}</td>\r\n                                <td><button type=\"button\" class=\"btn allam-btn btn-success\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button></td>\r\n                                <td class=\"\">\r\n                                  <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id,'bulk')\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                                </td>\r\n                                <td class=\"categories\"><input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" >\r\n                                 <!--  <input #{{item.id}} [(ngModel)]=\"item.selected\" type=\"checkbox\"> -->\r\n                                </td>\r\n\r\n                               <!--  <td> <span class=\"img-url-break\"> {{ item.question_image_url }}</span></td> -->\r\n\r\n                                \r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                            <div class=\"m-t-15\">\r\n                                <button (click)=\"reUpload()\" class=\"btn btn-warning text-white round-border \" style=\"margin-right: 5px;\">\r\n                                  Cancel\r\n                                </button> \r\n                                <!-- <button (click)=\"onSubmitData()\" class=\"btn allam-btn-green text-white round-border \">\r\n                                  Publish\r\n                                </button> -->\r\n                                <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border\"  (click)=\"publish()\">\r\n                                <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                   Publish\r\n                                </button>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"isEdit\">\r\n            <div class=\"col-md-12\">\r\n              <form class=\"md-float-material\" [formGroup]=\"form\" enctype=\"multipart/form-data\" (ngSubmit)=\"onUpdateTemp()\">\r\n                <div class=\"row\">\r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n\r\n                        <label>Heading</label>\r\n                        <select class=\"form-control\" formControlName=\"heading\" [ngClass]=\"{ 'is-invalid': submitted && f.heading.errors }\" (change)=\"changedHeading($event.target.value)\">\r\n                          <option value=\"\">Heading</option>\r\n                          <option *ngFor=\"let option of headingArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.heading.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.heading.errors.required\">heading is required.</div>\r\n                            <div *ngIf=\"f.heading.errors.pattern\">Accept numeric values only.</div>\r\n                        </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n                        <label>Category</label>\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                          <option value=\"\">Category</option>\r\n                          <option *ngFor=\"let option of categoryArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.category.errors.required\">Category is required.</div>\r\n                          </div>\r\n                     </div>\r\n                  </div> \r\n                   <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n                     <div class=\"group\">\r\n                      <label>Question Type</label>\r\n                      <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                          <option value=\"text\">Text</option>\r\n                          <option value=\"image\">Image</option>\r\n                          <option value=\"text_and_image\">Text and Image</option>\r\n                          <option value=\"video\">Video</option>\r\n                          <option value=\"text_and_video\">Text and Video</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n           \r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8 \">\r\n                    <div class=\"row \">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'a'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value == 'b'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'c'\"> \r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'd'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Level</label>\r\n                          <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                            <option value=\"\">Level</option>\r\n                            <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                              <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Duration (In Seconds)</label>\r\n                          <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                            <option value=\"\">Duration (In Seconds)</option>\r\n                            <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                              <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"group\">\r\n                          <label>Note</label>\r\n                         <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                         <span class=\"md-line\"></span>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"m-t-15\">\r\n                          <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                             <span *ngIf=\"this.idEdit\">Back</span>\r\n                          </button>\r\n                          \r\n                          <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                             <span *ngIf=\"this.idEdit\">Update</span>\r\n                             \r\n                          </button>\r\n\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                  <div class=\"editor-wrap\" id=\"my-node\"> \r\n                   <label>Question</label>\r\n                    \r\n                    <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"> </textarea>\r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.question.errors.required\">Question is required.</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question </label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n                 <div class=\"form-group  files color m-t-15\">\r\n                    <div class=\" m-t-15\">\r\n                      <label>Upload Question </label>\r\n                        <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"preview\" *ngIf=\"croppedImage!=local_api_url\">\r\n                      <img [src]=\"croppedImage\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                     <label>Question Text</label>\r\n                      <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                 <div *ngIf=\"question_type=='video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                          <source src=\"{{croppedImage}}\" type=\"video/mp4\" />\r\n                          Browser not supported\r\n                      </video>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='text_and_video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                          <source src=\"{{croppedImage}}\" type=\"video/mp4\" />\r\n                          Browser not supported\r\n                      </video>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"editor-wrap\" id=\"my-node\"> \r\n                       <label>Question Text</label>\r\n                        <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"single\" class=\"container tab-pane active\" *ngIf=\"isSingle\">\r\n          <div class=\"row\" *ngIf=\"isSave\">\r\n            <div class=\"col-md-12\">\r\n              <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onSaveSingleTemp()\" enctype=\"multipart/form-data\">\r\n                <div class=\"row\">\r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n\r\n                        <label>Heading</label>\r\n                        <select class=\"form-control\" formControlName=\"heading\" [ngClass]=\"{ 'is-invalid': submitted && f.heading.errors }\" (change)=\"changedHeading($event.target.value)\">\r\n                          <option value=\"\">Heading</option>\r\n                          <option *ngFor=\"let option of headingArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.heading.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.heading.errors.required\">heading is required.</div>\r\n                            <div *ngIf=\"f.heading.errors.pattern\">Accept numeric values only.</div>\r\n                        </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n                        <label>Category</label>\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                          <option value=\"\">Category</option>\r\n                          <option *ngFor=\"let option of categoryArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.category.errors.required\">Category is required.</div>\r\n                          </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n                     <div class=\"group\">\r\n                      <label>Question Type</label>\r\n                      <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                          <option value=\"text\">Text</option>\r\n                          <option value=\"image\">Image</option>\r\n                          <option value=\"text_and_image\">Text and Image</option>\r\n                          <option value=\"video\">Video</option>\r\n                          <option value=\"text_and_video\">Text and Video</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n           \r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8 \">\r\n                    <div class=\"row \">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'a'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value == 'b'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'c'\"> \r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'd'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Level</label>\r\n                          <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                            <option value=\"\">Level</option>\r\n                            <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                              <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Duration (In Seconds)</label>\r\n                          <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                            <option value=\"\">Duration (In Seconds)</option>\r\n                            <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                              <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"group\">\r\n                          <label>Note</label>\r\n                         <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                         <span class=\"md-line\"></span>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"m-t-15\">\r\n                          <button [routerLink]=\"['/general-competition']\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                             <span>Back</span>\r\n                          </button>\r\n                          \r\n                          <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                             <span>Save</span>\r\n                             \r\n                          </button>\r\n\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                     <label>Question</label>\r\n                      <ckeditor [editor]=\"Editor\" [data]='question_value' [config]=\"config\" (blur)=\"onChange($event)\"></ckeditor>\r\n                      <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n                    <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" >\r\n                        <img [src]=\"croppedImage\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" >\r\n                        <img [src]=\"croppedImage\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"editor-wrap\" id=\"my-node\"> \r\n                       <label>Question Text</label>\r\n                        <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='text_and_video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"editor-wrap\" id=\"my-node\"> \r\n                       <label>Question Text</label>\r\n                        <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n             <div class=\"row\">\r\n              <div *ngIf=\"isProcessed && questionArr.length >0\" class=\"bulk_table_fullw\">\r\n                  <div class=\"card-block col-sm-12 col-xs-12 col-md-12\">\r\n                    <div class=\"publish-table-wrap table-responsive\">\r\n                      <table id=\"autofill\" class=\"table table-striped table-bordered table-sm dataTable no-footer\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>Level</th>\r\n                            <th>Answer</th>\r\n                            <th><span class=\"option-width\">Option D </span></th>\r\n                            <th><span class=\"option-width\">Option C </span></th>\r\n                            <th><span class=\"option-width\">Option B </span></th>\r\n                            <th><span class=\"option-width\">Option A </span></th>\r\n                            <th>Question </th>\r\n                            <th>Question Type </th>\r\n                            <th>Duration</th>\r\n                            <th>Heading</th>\r\n                            <th>Category</th>                           \r\n                            <th>Edit </th>\r\n                            <th>Delete </th>\r\n                            <th><button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button> <!-- <button (click)=\"deleteFoodSelected()\">DeleteSelectedFood</button> --></th>\r\n                           <!--  <th>Image URL</th> -->\r\n                            \r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of questionArr\">\r\n                            <td>{{ item.level }}</td>\r\n                            <td>{{ item.answer }}</td>\r\n                            <td>{{ item.option4 }}</td>\r\n                            <td>{{ item.option3 }} </td>\r\n                            <td>{{ item.option2 }} </td>\r\n                            <td>{{ item.option1 }} </td>\r\n                            <td>\r\n                              <div *ngIf=\"item.qui_type=='text'\" [innerHTML]=\"item.question | safeHtml\"></div>\r\n                              <div *ngIf=\"item.qui_type=='image'\">\r\n                                <img src=\"{{s3_url+item.question_image_url}}\">\r\n                              </div>\r\n                              <div *ngIf=\"item.qui_type=='text_and_image'\">\r\n                                <img src=\"{{s3_url+item.question_image_url}}\">\r\n                                <br>{{item.question}}\r\n                              </div>\r\n                              <div *ngIf=\"item.qui_type=='video'\">\r\n                                <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                    <source src=\"{{s3_url+item.question_image_url}}\" type=\"video/mp4\" />\r\n                                    Browser not supported\r\n                                </video>\r\n                              </div>\r\n                              <div *ngIf=\"item.qui_type=='text_and_video'\">\r\n                                <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                                    <source src=\"{{s3_url+item.question_image_url}}\" type=\"video/mp4\" />\r\n                                    Browser not supported\r\n                                </video>\r\n                                <br>{{item.question}}\r\n                              </div>\r\n                            </td>\r\n                            <td>{{ item.file_type }}</td>\r\n                            <td>{{ item.duration }}</td>\r\n                            <td>{{ item.category_name }}</td>\r\n                            <td>{{ item.header_name }}</td>\r\n                            <td><button type=\"button\" class=\"btn allam-btn btn-success\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button></td>\r\n                            <td class=\"\">\r\n                              <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id,'single')\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                            </td>\r\n                             <td class=\"categories\"><input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" >\r\n                             <!--  <input #{{item.id}} [(ngModel)]=\"item.selected\" type=\"checkbox\"> -->\r\n                            </td>\r\n\r\n\r\n                           <!--  <td> <span class=\"img-url-break\"> {{ item.question_image_url }}</span></td> -->\r\n\r\n                            \r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                        <div class=\"m-t-15\">\r\n                            <button (click)=\"reUpload()\" class=\"btn btn-warning text-white round-border \" style=\"margin-right: 5px;\">\r\n                              Cancel\r\n                            </button> \r\n                            <!-- <button (click)=\"onSubmitData()\" class=\"btn allam-btn-green text-white round-border \">\r\n                              Publish\r\n                            </button> -->\r\n                            <button [disabled]=\"loading2\" class=\"btn allam-btn-green text-white round-border\"  (click)=\"publishSingle()\">\r\n                            <span *ngIf=\"loading2\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                               Publish\r\n                            </button>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"isEdit\">\r\n            <div class=\"col-md-12\">\r\n              <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateSingleTemp()\">\r\n                <div class=\"row\">\r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n\r\n                        <label>Heading</label>\r\n                        <select class=\"form-control\" formControlName=\"heading\" [ngClass]=\"{ 'is-invalid': submitted && f.heading.errors }\" (change)=\"changedHeading($event.target.value)\">\r\n                          <option value=\"\">Heading</option>\r\n                          <option *ngFor=\"let option of headingArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.heading.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.heading.errors.required\">heading is required.</div>\r\n                            <div *ngIf=\"f.heading.errors.pattern\">Accept numeric values only.</div>\r\n                        </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"card-block col-sm-4 col-sm-4 col-md-4\">\r\n                      <div class=\"group\">\r\n                        <label>Category</label>\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"category\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                          <option value=\"\">Category</option>\r\n                          <option *ngFor=\"let option of categoryArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                         <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.category.errors.required\">Category is required.</div>\r\n                          </div>\r\n                     </div>\r\n                  </div> \r\n                  <div class=\"col-sm-4 col-sm-4 col-md-4\">\r\n                     <div class=\"group\">\r\n                      <label>Question Type</label>\r\n                      <select class=\"form-control\" (change)=\"qtChanged($event.target.value)\" formControlName=\"question_type\" [ngClass]=\"{ 'is-invalid': submitted && f.question_type.errors }\">\r\n                          <option value=\"text\">Text</option>\r\n                          <option value=\"image\">Image</option>\r\n                          <option value=\"text_and_image\">Text and Image</option>\r\n                          <option value=\"video\">Video</option>\r\n                          <option value=\"text_and_video\">Text and Video</option>\r\n                      </select>\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.question_type.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.question_type.errors.required\">Question Type is required.</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n           \r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8 \">\r\n                    <div class=\"row \">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option1.errors.required\">Option A is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'a'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option2.errors.required\">Option B is required.</div>\r\n                         </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value == 'b'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n                      <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option3.errors.required\">Option C is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'c'\"> \r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"row m-t-15\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                      \r\n                      <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\">\r\n                      <span class=\"md-line\"></span>\r\n                       <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.option4.errors.required\">Option D is required.</div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                          <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'd'\">\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Level</label>\r\n                          <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && f.level.errors }\">\r\n                            <option value=\"\">Level</option>\r\n                            <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.level.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.level.errors.required\">Level is required.</div>\r\n                              <div *ngIf=\"f.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                         <div class=\"group\">\r\n                          <label>Duration (In Seconds)</label>\r\n                          <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\">\r\n                            <option value=\"\">Duration (In Seconds)</option>\r\n                            <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                          </select>\r\n                          \r\n                          <span class=\"md-line\"></span>\r\n                           <div *ngIf=\"submitted && f.duration.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.duration.errors.required\">Question time is required.</div>\r\n                              <div *ngIf=\"f.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"group\">\r\n                          <label>Note</label>\r\n                         <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                         <span class=\"md-line\"></span>\r\n                        </div>\r\n                      </div> \r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"m-t-15\">\r\n                          <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn btn-warning text-white round-border m-r-10 create_cancel\">\r\n                             <span *ngIf=\"this.idEdit\">Back</span>\r\n                          </button>\r\n                          \r\n                          <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                             <span *ngIf=\"this.idEdit\">Update</span>\r\n                             \r\n                          </button>\r\n\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-4 \" *ngIf=\"question_type=='text'\">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                     <label>Question</label>\r\n                      <ckeditor [editor]=\"Editor\" [data]='question_value' [config]=\"config\" (blur)=\"onChange($event)\"></ckeditor>\r\n                      <div class=\"question_note\">Note: your question should be in the limit of the text editor height and width. NO SCROLL BAR should be displayed as this will be out of the limit of the question maximum length.</div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='image'\" class=\"remove-txt-here col-md-4\">\r\n                    <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" >\r\n                        <img [src]=\"croppedImage\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='text_and_image'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/jpeg\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" >\r\n                        <img [src]=\"croppedImage\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"editor-wrap\" id=\"my-node\"> \r\n                       <label>Question Text</label>\r\n                        <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"video_preview\" *ngIf=\"croppedImage!=''\">\r\n                         <video  style=\"width: 285px;height: 170px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                            <source src=\"{{croppedImage}}\" type=\"video/mp4\" />Browser not supported\r\n                         </video>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"question_type=='text_and_video'\" class=\"remove-txt-here col-md-4\">\r\n                   <div class=\"form-group  files color m-t-15\">\r\n                      <div class=\" m-t-15\">\r\n                        <label>Upload Question </label>\r\n                          <input type=\"file\" (change)=\"uploadVideo($event)\" class=\"form-control\" accept=\"video/mp4,video/x-m4v,video/*\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"video_preview\" *ngIf=\"croppedImage!=''\">\r\n                       <video style=\"width: 285px;height: 170px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n                          <source src=\"{{croppedImage}}\" type=\"video/mp4\" />Browser not supported\r\n                         </video>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"editor-wrap\" id=\"my-node\"> \r\n                       <label>Question Text</label>\r\n                        <textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question_text\" maxlength=\"70\" > </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n     </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"3 / 2\"\r\n          [resizeToWidth]=\"600\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/general-competition.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/general-competition.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n        <div class=\"row subc-gc\">\r\n          <div class=\"card-block col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Heading</label>\r\n                <select class=\"form-control\" (change)=\"changedHeading($event.target.value)\" [(ngModel)]=\"term1\">\r\n                  <option value=\"\">Heading</option>\r\n                  <option *ngFor=\"let option of headingArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                </select>\r\n             </div>\r\n          </div> \r\n          <div class=\"card-block col-sm-4 col-md-4\">\r\n              <div class=\"group\">\r\n                <label>Category</label>\r\n              \r\n                <select  (change)=\"changedCategory()\" class=\"form-control\"  [(ngModel)]=\"term2\">\r\n                  <option value=\"0\">Category</option>\r\n                  <option *ngFor=\"let option of categoryArr\" [value]=\"option.id\" >{{option.title}}</option>\r\n                </select>\r\n             </div>\r\n          </div> \r\n\r\n        <!--   <div class=\"card-block col-xs-3 col-sm-3 col-md-3\">\r\n            <div class=\"group\">\r\n                <label>Question: \r\n                  <input type=\"search\" class=\"form-control\" placeholder=\"Question\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n                </label>\r\n            </div>\r\n          </div> -->\r\n\r\n      <div class=\"card-block col-sm-4 col-md-4\" *ngIf=\"role_id==2\"> \r\n              \r\n              <a [routerLink]=\"['add']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n                  <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Question\r\n              </a>\r\n      </div>\r\n\r\n      </div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n  <div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n    <th>Level</th>\r\n    <th>Answer</th>\r\n    <th><span class=\"option-width\">Option D </span></th>\r\n    <th><span class=\"option-width\">Option C </span></th>\r\n    <th><span class=\"option-width\">Option B </span></th>\r\n    <th><span class=\"option-width\">Option A </span></th>\r\n    <th>Question Type </th>\r\n    <th>Question </th>\r\n    <th>Duration</th>\r\n    <th>Category</th>\r\n    <th>Heading</th>\r\n    <th  *ngIf=\"role_id==1\">Action</th>\r\n    <th  *ngIf=\"role_id==2\">Status</th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of questionArr | cFilter:{header_id: term1, category_id:term2} : false | paginate : {\r\n                  itemsPerPage: pageSize,\r\n                  currentPage: page,\r\n                  totalItems: count\r\n                }; \">\r\n\r\n    <td>{{ data.level }}</td>\r\n    <td>{{ data.answer }}</td>\r\n    <td>{{ data.option4 }}</td>\r\n    <td>{{ data.option3 }} </td>\r\n    <td>{{ data.option2 }} </td>\r\n    <td>{{ data.option1 }} </td>\r\n    <td>{{ data.file_type }}</td>\r\n   <!--  <td>{{ data.question }}</td>\r\n    <td><a target=\"_blank\" href=\"{{s3_url+data.question_image_url}}\">{{ s3_url+data.question_image_url }}</a></td> -->\r\n    <td>\r\n      <div *ngIf=\"data.file_type=='text'\">\r\n        {{data.question}}\r\n      </div>\r\n        <div *ngIf=\"data.file_type=='image'\">\r\n          <img src=\"{{s3_url+data.question_image_url}}\">\r\n        </div>\r\n        <div *ngIf=\"data.file_type=='text_and_image'\">\r\n          <img src=\"{{s3_url+data.question_image_url}}\">\r\n          <br>{{data.question}}\r\n        </div>\r\n        <div *ngIf=\"data.file_type=='video'\">\r\n          <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n              <source src=\"{{s3_url+data.question_image_url}}\" type=\"video/mp4\" />\r\n              Browser not supported\r\n          </video>\r\n        </div>\r\n        <div *ngIf=\"data.file_type=='text_and_video'\">\r\n          <video style=\"width: 285px;height: 200px;\" controls (click)=\"toggleVideo()\" id=\"videoPlayer\">\r\n              <source src=\"{{s3_url+data.question_image_url}}\" type=\"video/mp4\" />\r\n              Browser not supported\r\n          </video>\r\n          <br>{{data.question}}\r\n        </div>\r\n    </td>\r\n    <td>{{ data.duration }}</td>\r\n    <td>{{ data.category_name }}</td>\r\n    <td>{{ data.header_name }}</td>\r\n  <td *ngIf=\"role_id==1\">\r\n\r\n  <button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn\" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n  <button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn\" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n  </td>\r\n  <td *ngIf=\"role_id!=1\">\r\n  <p *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn\"> Pending </p>\r\n  <p *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn\">Approved </p>\r\n  </td>\r\n\r\n</tr>\r\n<tr *ngIf=\"questionArr.length==0\">\r\n  <td colspan=\"13\" align=\"center\">No Data found.</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 m-t-20\">\r\n<div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n        {{ size }}\r\n    </option>\r\n  </select>\r\n</label>\r\n</div>\r\n</div>\r\n\r\n<div  class=\"col-xs-12 col-sm-12 col-md-6\">\r\n   <pagination-controls\r\n      previousLabel=\"Prev\"\r\n      nextLabel=\"Next\"\r\n      responsive=\"true\"\r\n      class=\"pagination\"\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n<style>\r\n.pagination { float: right;}\r\ndiv.dataTables_wrapper div.dataTables_info {float: left;}\r\n.subc-gc { }\r\n\r\n\r\n</style>");

/***/ }),

/***/ "./src/app/pages/general-competition/add/add-gc.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/general-competition/add/add-gc.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  display: block;\n  width: 912px;\n  overflow-x: auto;\n}\n\n.single-curriculum-wrap .group label {\n  display: block;\n}\n\n.card-block {\n  padding: 0 12px 5px;\n}\n\n:host ::ng-deep .ck-editor__editable_inline {\n  min-height: 200px;\n  max-height: 200px;\n}\n\n:host ::ng-deep .ck-editor__editable_inline p {\n  font-size: 18px;\n}\n\n:host ::ng-deep .ck-editor {\n  width: 300px;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n  width: 100%;\n  margin-bottom: 15px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1jb21wZXRpdGlvbi9hZGQvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGdlbmVyYWwtY29tcGV0aXRpb25cXGFkZFxcYWRkLWdjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nZW5lcmFsLWNvbXBldGl0aW9uL2FkZC9hZGQtZ2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1jb21wZXRpdGlvbi9hZGQvYWRkLWdjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTEycHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnNpbmdsZS1jdXJyaWN1bHVtLXdyYXAgLmdyb3VwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAwIDEycHggNXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUgcCB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3J7XHJcbiAgICB3aWR0aDogMzAwcHg7O1xyXG59XHJcblxyXG4ubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4iLCIudGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTEycHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5zaW5nbGUtY3VycmljdWx1bS13cmFwIC5ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDAgMTJweCA1cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3Ige1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/general-competition/add/add-gc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/general-competition/add/add-gc.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddGcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGcComponent", function() { return AddGcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_gc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/gc.service */ "./src/app/services/gc.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");












var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
var AddGcComponent = /** @class */ (function () {
    function AddGcComponent(fb, route, router, http, gcService, alertService, authenticationService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.gcService = gcService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.title = 'GC Bulk';
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].s3_url;
        this.local_api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.questionArr = [];
        this.headingArr = [];
        this.categoryArr = [];
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
        this.isSingle = true;
        this.isBulk = false;
        this.question_type = 'text';
        this.showModal = false;
        this.isFile = false;
        this.isVideo = false;
        this.default_font_size = 'font-size:18px';
        this.selectedItems = [];
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
            ]
        };
        this.question_value = "";
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.durationOptions = ["05", "15", "25", "30", "60", "120"];
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.formVar = this.fb.group({
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            excelFile: [null],
            zipFile: [null],
            existImage: ['']
        });
    }
    AddGcComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            question: [''],
            question_text: [''],
            question_image_url: [''],
            question_image: [''],
            qui_type: [''],
            question_type: [this.question_type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            video: [null],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answer: [''],
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            note: [''],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getDraftQuestion('single');
        this.getMasterData();
        this.getHeading();
    };
    Object.defineProperty(AddGcComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddGcComponent.prototype, "fv", {
        get: function () { return this.formVar.controls; },
        enumerable: true,
        configurable: true
    });
    AddGcComponent.prototype.getMasterData = function () {
        this.masterArr = [];
    };
    AddGcComponent.prototype.getDraftQuestion = function (type) {
        var _this = this;
        if (type === void 0) { type = 'bulk'; }
        this.gcService.getDraftQuestionByUser(this.created_by, type)
            .subscribe(function (response) {
            _this.questionArr = response;
            if (Object.keys(_this.questionArr).length != 0) {
                _this.isProcessed = true;
            }
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
        });
    };
    AddGcComponent.prototype.getHeading = function () {
        var _this = this;
        this.gcService.getHeading()
            .subscribe(function (response) {
            _this.headingArr = response;
        }, function (error) {
            //
        });
    };
    AddGcComponent.prototype.getCategoryByHeading = function (heading_id) {
        var _this = this;
        this.gcService.getCategoryByHeading(heading_id)
            .subscribe(function (response) {
            _this.categoryArr = response;
        }, function (error) {
            //
        });
    };
    AddGcComponent.prototype.editItem = function (event) {
        this.isFile = false;
        this.isVideo = false;
        this.editData = event;
        this.isEdit = true;
        this.isSave = false;
        this.idEdit = this.editData.id;
        this.question_value = this.editData.question;
        console.log('---------------->>');
        console.log(this.question_value);
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        //console.log('<<----------------');
        //console.log(JSON.stringify(this.editData));
        this.getCategoryByHeading(this.editData.header_id);
        this.form.patchValue({
            question: this.editData.question,
            option1: this.editData.option1,
            option2: this.editData.option2,
            option3: this.editData.option3,
            option4: this.editData.option4,
            answer: this.editData.answer,
            heading: this.editData.header_id,
            category: this.editData.category_id,
            note: this.editData.note,
            level: this.editData.level,
            duration: this.editData.duration,
            question_text: this.editData.question,
            question_type: this.editData.qui_type,
            qui_type: this.editData.qui_type,
            question_image_url: this.editData.question_image_url,
            question_image: this.editData.question_image,
        });
        if (this.editData.type == 'bulk') {
            if (this.editData.question_image == 'live') {
                this.croppedImage = this.s3_url + this.editData.question_image_url;
            }
            else {
                this.croppedImage = this.local_api_url + this.editData.question_image;
            }
        }
        else {
            this.croppedImage = this.s3_url + this.editData.question_image_url;
        }
        this.question_type = this.editData.qui_type;
        /*let image = this.editData.question_image_url;
        let reader = new FileReader();
        reader.addEventListener("load",
          () => {
              this.preview = reader.result as string;
          },
          false);

        if (image) { console.log(image.type)
          if (image.type !== "application/pdf")
            reader.readAsDataURL(image);
        }

        this.preview = apiUrl+this.editData.question_image_url;
        console.log(this.preview)*/
    };
    AddGcComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isSave = true;
    };
    AddGcComponent.prototype.fileChangeXlsx = function (element, variable) {
        //var pattern="^.+\.(xlsx|xls|csv)$";
        //var pattern="^.+\.(xlsx)$";
        var file = element.target.files[0];
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
    };
    AddGcComponent.prototype.fileChangeZip = function (element, variable1) {
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
    // Image Preview
    AddGcComponent.prototype.uploadQuestionImage = function (event) {
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
    AddGcComponent.prototype.eventCheck = function (event) {
        this.checkBox = event.target.checked;
        console.log(event.target.checked); //<--- Check with this
    };
    AddGcComponent.prototype.upload = function () {
        var _this = this;
        this.submitted = true;
        if (this.formVar.invalid) {
            return;
        }
        this.showLoader();
        this.loading2 = true;
        if (typeof (this.uploadedFiles) == "undefined") {
            this.isError = false;
            this.isProcessed = false;
            this.errorData = null;
            this.loading2 = false;
            //this.alertService.pop('error', "Excel file or zip file not selected.");
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Excel file or zip file not selected.', 'error');
            this.hideLoader();
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
        this.http.post(apiUrl + 'gc/api/upload', formData, { reportProgress: true, observe: "events" })
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
                        _this.alertService.pop('success', 'Data upload successfully!');
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
        });
    };
    AddGcComponent.prototype.saveTemp = function () {
        var _this = this;
        var _heading = this.formVar.value.heading;
        var _category = this.formVar.value.category;
        console.log(_heading);
        console.log(_category);
        this.gcService.addBulkQuestionTemp(this.fileData, this.created_by, _heading, _category)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.getDraftQuestion('bulk'); //Show all temp data 
                _this.alertService.pop('success', 'Question added successfully in temp');
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
        });
    };
    AddGcComponent.prototype.hideLoader = function () {
        document.getElementById('loading-s').style.display = 'none';
    };
    AddGcComponent.prototype.showLoader = function () {
        document.getElementById('loading-s').style.display = 'block';
    };
    AddGcComponent.prototype.onCheckboxChange = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
    };
    AddGcComponent.prototype.deleteFoodSelected = function () {
        this.selectedItems = this.questionArr.filter(function (_) { return _.selected; });
        for (var food in this.selectedItems) {
            /* this.foodService.RemoveFood(this.selectedItems[food].Id)
              .subscribe(data =>{
               console.log(data)
              }
              )  */
        }
    };
    AddGcComponent.prototype.deleteOneItem = function (item_id, type) {
        var _this = this;
        if (type === void 0) { type = 'bulk'; }
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
                self.gcService.deleteDraftQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    self.getDraftQuestion(type);
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
    AddGcComponent.prototype.deletItem = function () {
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
                            self.gcService.deleteDraftQuestion(value).subscribe(function () {
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
    AddGcComponent.prototype.reUpload = function () {
        this.router.navigate(['/general-competition']);
    };
    AddGcComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        if (this.question_type == 'text') {
            if (this.form.value.question == '') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
                return;
            }
        }
        if (this.croppedImage == '' && (this.question_type == 'image' || this.question_type == 'text_and_image')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.video == '' && (this.question_type == 'video' || this.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question_text == '' && (this.form.value.question_type == 'text_and_image' || this.form.value.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        this.form.value.created_by = this.created_by;
        this.form.value.created_by = this.created_by;
        this.form.value.video_file = this.form.value.video;
        this.form.value.isFile = this.isFile;
        this.form.value.isVideo = this.isVideo;
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        //console.log(this.form.value);
        //console.log('---------->>>>>>>>')  
        this.gcService.updateQuestionInDraft(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question successfully updated');
                _this.getDraftQuestion('bulk');
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
    AddGcComponent.prototype.publish = function () {
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
                _this.gcService.publishQuestion(_this.questionArr)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/general-competition']); }, 1000);
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
    AddGcComponent.prototype.onSubmitData = function () {
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
        this.gcService.addBulkQuestion(this.fileData)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question added successfully');
                setTimeout(function () { return _this.router.navigate(['/general-competition']); }, 1500);
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
            //this.router.navigate(['/general-competition']);
        });
    };
    AddGcComponent.prototype.changedHeading = function (heading_id) {
        this.getCategoryByHeading(heading_id);
        console.log(heading_id);
    };
    AddGcComponent.prototype.uploadType = function (upload_type) {
        if (upload_type == 'single') {
            this.isBulk = false;
            this.isSingle = true;
            this.getDraftQuestion('single');
            this.submitted = false;
        }
        else {
            this.isBulk = true;
            this.isSingle = false;
            this.getDraftQuestion('bulk');
        }
        this.croppedImage = '';
        this.question_value = '';
        this.isFile = false;
        this.isVideo = false;
        this.question_type = "text";
        this.form.patchValue({
            question_type: 'text',
        });
        this.goBack();
    };
    AddGcComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.question_value = editor.getData();
        console.log('dsdsds');
        var html = $(".ck-content").html();
        html = html.replace("<p>", "<p style='" + this.default_font_size + "'>");
        this.question_value = html;
    };
    AddGcComponent.prototype.isOverflown = function (element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    };
    AddGcComponent.prototype.onSaveSingleTemp = function () {
        var _this = this;
        //console.log(this.form.value); return ;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.question_type == 'text') {
            if (this.question_value == '' || this.question_value == '<p><br data-cke-filler="true"></p>') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
                return;
            }
            var qSize = this.isOverflown($(".ck-content")[0]);
            if (qSize) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Question maximum request length exceeded ', 'error');
                return;
            }
        }
        if (this.croppedImage == '' && (this.question_type == 'image' || this.question_type == 'text_and_image')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.video == '' && (this.question_type == 'video' || this.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question_text == '' && (this.form.value.question_type == 'text_and_image' || this.form.value.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        this.form.value.question = this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.video_file = this.form.value.video;
        console.log('---video print comp');
        console.log(this.form.value);
        this.loading = true;
        this.gcService.addSingleQuestionTemp(this.form.value, this.created_by)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.getDraftQuestion('single'); //Show all temp data 
                _this.alertService.pop('success', 'Question added successfully in temp');
            }
            else {
                _this.alertService.pop('error', 'Something went wrong. Try again later.');
            }
            _this.loading = false;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
            _this.loading = false;
        });
    };
    // Image Video
    AddGcComponent.prototype.uploadVideo = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.isVideo = true;
        this.form.patchValue({
            video: file
        });
        this.form.get('video').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AddGcComponent.prototype.onUpdateSingleTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        if (this.question_type == 'text') {
            if (this.question_value == '' || this.question_value == '<p><br data-cke-filler="true"></p>') {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
                return;
            }
            var qSize = this.isOverflown($(".ck-content")[0]);
            if (qSize) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Question maximum request length exceeded ', 'error');
                return;
            }
        }
        if (this.croppedImage == '' && (this.question_type == 'image' || this.question_type == 'text_and_image')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if ((this.form.value.video == '' || this.form.value.video == null) && (this.question_type == 'video' || this.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload question.', 'error');
            return;
        }
        if (this.form.value.question_text == '' && (this.form.value.question_type == 'text_and_image' || this.form.value.question_type == 'text_and_video')) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please write question.', 'error');
            return;
        }
        //console.log(this.form.value);return;
        this.form.value.question = this.question_value;
        this.form.value.created_by = this.created_by;
        this.form.value.video_file = this.form.value.video;
        this.form.value.isFile = this.isFile;
        this.form.value.isVideo = this.isVideo;
        console.log(this.form.value);
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        this.gcService.updateSingleQuestionInDraft(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.alertService.pop('success', 'Question successfully updated');
                _this.getDraftQuestion('single');
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
    AddGcComponent.prototype.publishSingle = function () {
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
                _this.gcService.publishSingleQuestion(_this.questionArr)
                    .subscribe(function (data) {
                    if (data['status'] == 200) {
                        _this.alertService.pop('success', 'Question added successfully');
                        setTimeout(function () { return _this.router.navigate(['/general-competition']); }, 1000);
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
    AddGcComponent.prototype.fileChangeEvent = function (event) {
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
    AddGcComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.question_value = this.croppedImage;
        this.isFile = true;
        this.form.patchValue({
            question_image: this.croppedImage
        });
    };
    AddGcComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    AddGcComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    AddGcComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload image only', 'error');
    };
    AddGcComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    AddGcComponent.prototype.qtChanged = function (element) {
        this.question_type = element;
        this.question_value = '';
        this.croppedImage = '';
        this.isFile = false;
        this.isVideo = false;
        this.form.patchValue({
            question_text: '',
        });
    };
    AddGcComponent.prototype.toggleVideo = function (event) {
        //event.toElement.play();
    };
    AddGcComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _services_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    AddGcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-gc',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-gc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/add/add-gc.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-gc.component.scss */ "./src/app/pages/general-competition/add/add-gc.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _services_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], AddGcComponent);
    return AddGcComponent;
}());



/***/ }),

/***/ "./src/app/pages/general-competition/general-competition-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/general-competition/general-competition-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralCompetitionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralCompetitionRoutingModule", function() { return GeneralCompetitionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_competition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-competition.component */ "./src/app/pages/general-competition/general-competition.component.ts");
/* harmony import */ var _add_add_gc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-gc.component */ "./src/app/pages/general-competition/add/add-gc.component.ts");





var routes = [
    {
        path: '',
        component: _general_competition_component__WEBPACK_IMPORTED_MODULE_3__["GeneralCompetitionComponent"],
        data: {
            breadcrumb: 'General Competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add',
        component: _add_add_gc_component__WEBPACK_IMPORTED_MODULE_4__["AddGcComponent"],
        data: {
            breadcrumb: 'Add GC',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    }
];
var GeneralCompetitionRoutingModule = /** @class */ (function () {
    function GeneralCompetitionRoutingModule() {
    }
    GeneralCompetitionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GeneralCompetitionRoutingModule);
    return GeneralCompetitionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/general-competition/general-competition.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/general-competition/general-competition.component.ts ***!
  \****************************************************************************/
/*! exports provided: GeneralCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralCompetitionComponent", function() { return GeneralCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_gc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gc.service */ "./src/app/services/gc.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var GeneralCompetitionComponent = /** @class */ (function () {
    function GeneralCompetitionComponent(fb, route, gcService, router, alertService, authenticationService) {
        this.fb = fb;
        this.route = route;
        this.gcService = gcService;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 25, 50, 100];
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].s3_url;
        this.quizArr = [];
        this.editData = [];
        this.isEdit = false;
        this.submitted = false;
        this.loading = false;
        this.isDesc = false;
        this.column = 'id';
        this.isCompt = false;
        this.questionArr = [];
        this.fileData = null;
        //@Output() public found = new EventEmitter<any>();
        this.found = [];
        this.masterArr = [];
        this.headingArr = [];
        this.categoryArr = [];
    }
    GeneralCompetitionComponent.prototype.ngOnInit = function () {
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.role_id = this.logUser['user'][0]['role_id'];
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.term1 = '';
        this.term2 = '0';
        this.term = '';
        this.getAllQuestion();
        this.getHeading();
    };
    GeneralCompetitionComponent.prototype.getAllQuestion = function () {
        var _this = this;
        var params = this.getRequestParams(this.term1, this.term2, this.page, this.pageSize);
        //console.log(params);
        this.gcService.getAllQuestionByUser(this.created_by, this.role_id, params)
            .subscribe(function (response) {
            //this.questionArr = response['data'];
            //this.count = this.questionArr.length;
            _this.questionArr = response['data'];
            _this.count = response['count'];
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    Object.defineProperty(GeneralCompetitionComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    GeneralCompetitionComponent.prototype.changeStatus = function (queston) {
        var _this = this;
        console.log(queston);
        if (queston.status == "0") {
            queston.status = "1";
        }
        else {
            queston.status = "0";
        }
        this.gcService.update_status(queston)
            .subscribe(function (data) {
            _this.alertService.pop('success', 'Question updated successfully');
            _this.getAllQuestion();
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
    };
    GeneralCompetitionComponent.prototype.getHeading = function () {
        var _this = this;
        this.gcService.getHeading()
            .subscribe(function (response) {
            _this.headingArr = response;
        }, function (error) {
            //
        });
    };
    GeneralCompetitionComponent.prototype.getCategoryByHeading = function (heading_id) {
        var _this = this;
        if (heading_id != '') {
            this.gcService.getCategoryByHeading(heading_id)
                .subscribe(function (response) {
                _this.categoryArr = response;
            }, function (error) {
                //
            });
        }
    };
    GeneralCompetitionComponent.prototype.changedHeading = function (heading_id) {
        this.term2 = "0";
        this.getCategoryByHeading(heading_id);
        this.updateFiltertable();
    };
    GeneralCompetitionComponent.prototype.changedCategory = function () {
        this.updateFiltertable();
    };
    GeneralCompetitionComponent.prototype.updateFiltertable = function () {
        this.page = 1;
        this.getAllQuestion();
    };
    GeneralCompetitionComponent.prototype.resetPage = function (event) {
        //this.config['currentPage'] = 1;
    };
    //custom search & pagination
    GeneralCompetitionComponent.prototype.getRequestParams = function (searchHeader, searchCategory, page, pageSize) {
        var params = {};
        if (searchHeader) {
            params["header_id"] = searchHeader;
        }
        else {
            params["header_id"] = 0;
        }
        if (searchCategory) {
            params["category_id"] = searchCategory;
        }
        else {
            params["category_id"] = 0;
        }
        if (page) {
            params["page"] = page - 1;
        }
        if (pageSize) {
            params["size"] = pageSize;
        }
        return params;
    };
    GeneralCompetitionComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getAllQuestion();
    };
    GeneralCompetitionComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getAllQuestion();
    };
    GeneralCompetitionComponent.prototype.toggleVideo = function (event) {
        //event.toElement.play();
    };
    GeneralCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    GeneralCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/general-competition/general-competition.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], GeneralCompetitionComponent);
    return GeneralCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/general-competition/general-competition.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/general-competition/general-competition.module.ts ***!
  \*************************************************************************/
/*! exports provided: SafeHtmlPipe, GeneralCompetitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralCompetitionModule", function() { return GeneralCompetitionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _general_competition_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-competition-routing.module */ "./src/app/pages/general-competition/general-competition-routing.module.ts");
/* harmony import */ var _general_competition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-competition.component */ "./src/app/pages/general-competition/general-competition.component.ts");
/* harmony import */ var _add_add_gc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-gc.component */ "./src/app/pages/general-competition/add/add-gc.component.ts");
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

var GeneralCompetitionModule = /** @class */ (function () {
    function GeneralCompetitionModule() {
    }
    GeneralCompetitionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _general_competition_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralCompetitionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperModule"]
            ],
            declarations: [
                _general_competition_component__WEBPACK_IMPORTED_MODULE_4__["GeneralCompetitionComponent"],
                _add_add_gc_component__WEBPACK_IMPORTED_MODULE_5__["AddGcComponent"],
                SafeHtmlPipe
            ]
        })
    ], GeneralCompetitionModule);
    return GeneralCompetitionModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-general-competition-general-competition-module.js.map