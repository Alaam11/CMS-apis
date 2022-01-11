(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-daily-competition-daily-competition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/daily-competition.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/daily-competition.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>daily-competition works!</p> -->\r\n<!-- <div class=\"main-container\">\r\n  <app-multi-step-form\r\n    class=\"multi-step-form\"\r\n    [formContent]=\"formContent\"\r\n    (formSubmit)=\"onFormSubmit($event)\"\r\n  ></app-multi-step-form>\r\n</div> -->\r\n\r\n\r\n<div class=\"container daily-competition-wrap\">\r\n    <div class=\"stepwizard\">\r\n        <div class=\"stepwizard-row setup-panel\">\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-2\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-5\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-6\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">6</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-7\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">7</a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n\r\n    <form role=\"form\" class=\"k-form\" [formGroup]=\"formVar\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-1\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Create Competition</h3>\r\n\t\t\t</div>\r\n\r\n            <div class=\"panel-body\">\r\n            \t<div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-4 \"> \r\n                      \t<div class=\"competition-logo-upload form-group\"> \r\n\t\t\t\t\t\t<label> Competition Logo </label>\r\n                       \r\n\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadCompetitionLogo($event)\" required>\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\" required [ngClass]=\"{ 'is-invalid': f.imageInput.errors }\"/> <!-- Validation Field -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.imageInput.errors\" class=\"invalid-feedback text-left\" >\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.imageInput.errors.required\"><label> Competition logo is required </label></div>\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t\t\t<img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"150\" >\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n                    <div class=\"col-sm-12 col-md-8 \"> \r\n                      \r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Name of the competition</label> <!-- required=\"required\" -->\r\n                        <input class=\"form-control\"  formControlName=\"competitionName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.competitionName.errors }\">\r\n                      </div>\r\n\r\n                      <!-- <div class=\"form-group  m-b-15\">\r\n                        <label>Description</label>\r\n                        <textarea class=\"form-control\" cols=\"5\"  formControlName=\"description\" placeholder=\"Default textarea\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.description.errors }\"></textarea>\r\n                      </div> -->\r\n\r\n                       <div class=\"form-group m-b-15\">\r\n                          <label>Upload Your File </label>\r\n                          <input  #variable accept=\".xlsx\" (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\" required [ngClass]=\"{ 'is-invalid': f.excelFile.errors }\">\r\n                        </div>\r\n                        <a href=\"assets/file/sample_competition.xlsx\">\r\n\t\t\t\t\t\t\t<div class=\"group m-b-15\">Sample Quiz\r\n                         \t<img src=\"assets/images/sample-quiz.jpg\">\r\n                        \t</div>\r\n\t\t\t\t\t\t</a>\r\n\r\n                      <div class=\"form-group color m-b-15\">\r\n                        <label>Upload Your File </label>\r\n                        <input  #variable accept=\".zip\"  (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\" >\r\n                      </div>\r\n                      <div class=\"group m-b-15\">\r\n                        Please upload a zip file which contains subfolders for Images\r\n                        and Videos. The image file type should be .png / .jpg / .jpeg\r\n                        and the video file type should be .mp4. The images and\r\n                        videos should be placed in their designated folders.\r\n                        </div>\r\n                        <!---\r\n                        <div class=\"group  files color m-b-15\" style=\"display: block;\">\r\n                          <label>Upload Your File </label>\r\n                          <input class=\"form-control\" multiple=\"\" type=\"file\">\r\n                        </div>\r\n                        -->\r\n\r\n                        \r\n                            <button type=\"button\" class=\"btn btn-warning text-white upload m-b-15\" (click)=\"upload()\" id=\"btnUpload\" [disabled]=\"loading\">{{ loading ? 'Uploading...' : 'Upload' }} </button>\r\n                          \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                  \t<div class=\"col-sm-12 col-md-12\">\r\n                  \t\t<!-- spinnner element is defined with id loading -->\r\n\t\t              \t<div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n\t\t                  \t<div class=\"spinner-border\" role=\"status\"> \r\n\t\t                      \t<span class=\"sr-only\" id=\"loading\"></span> \r\n\t\t                  \t</div> \r\n\t\t              \t</div>\r\n\r\n                  \t\t<div *ngIf=\"!isProcessed && (errorCode == 1 )\"><h1 class=\"sucessful\">{{errorDesc}}</h1></div>\r\n                      \t<div *ngIf=\"isError\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t<h3 class=\"errors-following\">Following data is having errors:</h3>\r\n\t\t\t\t\t\t  <div class=\"publish-table-wrap table-responsive\">\r\n\t\t\t\t\t      <table width=\"100%\" border=\"1\" class=\"table table-striped table-bordered nowrap dataTable\">\r\n\t\t\t\t\t        <thead>\r\n\t\t\t\t\t          <tr>\r\n\t\t\t\t\t\t\t\t<th width=\"10%\">Remarks</th>\r\n\t\t\t\t\t          \t<th width=\"10%\">Category</th>\r\n\t\t\t\t\t            <th width=\"10%\">Question</th>\r\n\t\t\t\t\t            <th width=\"10%\">Question File Url</th>\r\n\t\t\t\t\t            <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t            <th width=\"10%\">Option 2</th>\r\n\t\t\t\t\t            <th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t            <th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t\t\t<th width=\"10%\">Level</th>\r\n\t\t\t\t\t\t\t\t<th width=\"10%\">Duration</th>\r\n\t\t\t\t\t            <th width=\"10%\">Notes</th>\r\n\t\t\t\t\t            \r\n\t\t\t\t\t          </tr>\r\n\t\t\t\t\t        </thead>\r\n\t\t\t\t\t        <tbody>\r\n\t\t\t\t\t          <tr *ngFor=\"let item of errorData\">\r\n\t\t\t\t\t\t\t\t<td [style.color]=\"'red'\" [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n\t\t\t\t\t          \t<td width=\"10%\">{{ item.category }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.question }}</td>\r\n\t\t\t\t\t            <td width=\"10%\" class=\"overflow-wrap\">{{ item.question_file_url }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t\t\t\t\t\t<td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t            <td width=\"10%\">{{ item.notes }}</td>\r\n\t\t\t\t\t            \r\n\t\t\t\t\t          </tr>\r\n\t\t\t\t\t        </tbody>\r\n\t\t\t\t\t      </table>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t    <div *ngIf=\"!isError && isProcessed\">\r\n\t\t\t\t\t      <h1 class=\"sucessful\">Data validated successfully</h1>\r\n\t\t\t\t\t    </div>\r\n                  \t</div>\r\n                  </div>\r\n                  <!-- <div class=\"col-sm-12 col-md-8 \"> \r\n                <div class=\"form-group m-b-15\">\r\n                    <label class=\"control-label\">First Name</label>\r\n                    <input maxlength=\"100\" type=\"text\" required=\"required\" class=\"form-control\" placeholder=\"Enter First Name\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Last Name</label>\r\n                    <input maxlength=\"100\" type=\"text\" required=\"required\" class=\"form-control\" placeholder=\"Enter Last Name\" />\r\n                </div>\r\n            </div> -->\r\n                <!-- <button class=\"btn btn-primary prevBtn pull-right\" type=\"button\">Prev</button> -->\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right uploadButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }}</button>\r\n                \t\t\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"panel panel-primary setup-content\" id=\"step-2\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Competition Data</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n\t\t            <div class=\"col-xs-12 col-sm-12 mb-3\">\r\n\t\t              <div class=\"dt-responsive table-responsive\">\r\n\t\t                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t                  <thead>\r\n\t\t                    <tr>\r\n\t\t                      <!-- <th width=\"10%\">Category</th> -->\r\n\t\t                      <th width=\"10%\">Question</th>\r\n\t\t                      <th width=\"10%\">Question File Url</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Option 1</th>\r\n\t\t                      <th width=\"10%\">Option 2</th>\r\n\t\t                      <th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Duration</th>\r\n\t\t                      <th width=\"10%\">Level</th>\r\n\t\t                      <th width=\"10%\">Notes</th>\r\n\t\t                      \r\n\t\t                    </tr>\r\n\t\t                  </thead>\r\n\t\t                  <tbody>\r\n\t\t                    <tr *ngFor=\"let item of fileData\">\r\n\t\t                      <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t                      <td width=\"10%\">{{ item.question }}</td>\r\n\t\t                      <td width=\"10%\" class=\"overflow-wrap\">{{ item.question_file_url }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.option1 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.level }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.note }}</td>\r\n\t\t                      \r\n\t\t                    </tr>\r\n\t\t                  </tbody>\r\n\t\t                </table>\r\n\t\t              </div>\r\n\t\t            </div>\r\n\t\t        </div>\r\n                \r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"panel panel-primary setup-content\" id=\"step-3\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Set Date and Time</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n\t\t\t\t<div class=\"col-md-10 text-right \">\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 show-slot\" >\r\n\t\t\t\t\t\t<button class=\"btn border pull-right\" type=\"button\" (click)=\"onClick($event)\" >Show Slot</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" >\r\n\t\t\t\t\t\t<div *ngIf=\"f.slot_time.errors\" class=\"invalid-feedback\" >\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.slot_time.errors.required\"><label> Slot time is required </label></div>\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15 sdtime\">\r\n\t\t\t\t\t\t\t<!-- <label>&nbsp;</label> -->\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\tDate\r\n\t\t\t\t\t\t\t</label> <!-- {{jstoday}}  -->\r\n\t\t\t\t\t\t\t<!-- [max]=\"max\" -->\r\n\t\t\t\t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"invalidMoment\" formControlName=\"startDateTime\"  placeholder=\"Date Time\" class=\"form-control\" readonly=\"yes\" required\r\n\t\t\t\t\t\t\t\t\t[min]=\"min\" \r\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"dt11\" [owlDateTime]=\"dt11\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<span class=\"trigger\" [owlDateTimeTrigger]=\"dt11\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-calendar-alt\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" [showSecondsTimer]=\"true\" [pickerMode]=\"'popup'\" #dt11></owl-date-time> -->\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<input placeholder=\"Date:\" type=\"text\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"myDate\" formControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" readonly=\"yes\" required\r\n\t\t\t\t\t\t\t\t[min]=\"min\" \r\n\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"dt1\" [owlDateTime]=\"dt1\">\r\n\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"startTime.invalid && startTime.errors.owlDateTimeMin\">\r\n\t\t\t\t\t\t\t\tDate Time value must after {{min | date: 'medium'}}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"dateTime.invalid && dateTime.errors.owlDateTimeMax\">\r\n\t\t\t\t\t\t\t\tDate Time value must before {{max | date: 'medium'}}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t<label>\tStart Date</label>\r\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"start_date\" formControlName=\"startDate\" value=\"{{ post.startDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.startDate.errors }\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label>Start Time</label>\r\n\t\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" id=\"start_time\" formControlName=\"startTime\" required [ngClass]=\"{ 'is-invalid': f.startTime.errors }\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t  <div class=\"row11\">\t\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label>Waiting Time (In Minutes)</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t<!-- <label>Minutes</label> -->\r\n\t\t\t\t\t\t\t\t<select class=\"form-control select2 waiting-time1\" formControlName=\"minute_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.minute_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t<!--  <option value=\"01\" >01</option>\r\n\t\t\t\t\t\t\t\t\t <option value=\"02\" >02</option> \r\n\t\t\t\t\t\t\t\t\t<option value=\"03\" >03</option>\r\n\t\t\t\t\t\t\t\t\t <option value=\"04\" >04</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"05\" >05</option> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <option value=\"06\" >06</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"07\" >07</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"08\" >08</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"09\" >09</option> -->\r\n\t\t\t\t\t\t\t\t\t<option value=\"10\" >10</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"15\" >15</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <div class=\"col-sm-6 col-md-6 pr-0\"> \r\n\t\t\t\t\t\t\t\t<label>Seconds</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control select2 waiting-time1\" formControlName=\"second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.second_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of oneToSixtyArray\" [value]=\"option\" >{{option}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                   \r\n\t\t\t\t\t</div>\r\n                    <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                      <label>\r\n                        End Date\r\n                        </label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"end_date\" formControlName=\"endDate\" value=\"{{ post.endDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.endDate.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                      <label>\r\n                        End Time\r\n                        </label>\r\n\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"endTime\" required [ngClass]=\"{ 'is-invalid': f.endTime.errors }\">\r\n\t\t\t\t\t\t</div>\r\n                    </div> -->\r\n                    \r\n                </div>\r\n\r\n                <!-- The Modal -->\r\n\t\t\t\t<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n\t\t\t\t    <div class=\"modal-dialog\">\r\n\t\t\t\t      <div class=\"modal-content\">\r\n\t\t\t\t      \r\n\t\t\t\t        <!-- Modal Header -->\r\n\t\t\t\t        <div class=\"modal-header\">\r\n\t\t\t\t          <h4 class=\"modal-title\">Slot Details:</h4>\r\n\t\t\t\t          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click) = \"hide()\">&times;</button>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        \r\n\t\t\t\t        <!-- Modal body --> \r\n\t\t\t\t        <div class=\"modal-body slot-details-wrap form-group\">\r\n\t\t\t\t\t\t\t<label>Choose your time slot</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"09:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 09:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"10:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 10:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"12:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 12:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"13:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 13:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"15:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 15:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"16:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 16:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"18:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 18:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"19:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 19:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"21:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 21:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"22:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 22:30 </span></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t        \r\n\t\t\t\t        <!-- Modal footer -->\r\n\t\t\t\t        <div class=\"modal-footer\">\r\n\t\t\t\t          <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click) = \"hide()\">Close</button>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        \r\n\t\t\t\t      </div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n                \r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-4\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Promotion</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n\r\n\t\t\t\t<div class=\"col-md-9 text-right \">\r\n            <div class=\"panel-body\">\r\n\t\t\t\t\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                        <select class=\"form-control select2\" formControlName=\"promotion_type\" type=\"text\" style=\"width: 100%;\" (change)=\"onChange($event)\" required [ngClass]=\"{ 'is-invalid': f.promotion_type.errors }\">\r\n                        \t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t                     \t<!-- <option value=\"social_media\" >Social Media follow promotion</option> -->\r\n\t                     \t<option value=\"Download\" >Download</option>\r\n\t                     \t<option value=\"Affiliate\" >Affiliate Code</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                    <div class=\"col-md-12 no-padding\" *ngIf=\"selectedType == 'social_media'\">\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"instragramUrl\" class=\"form-control\" placeholder=\"Instragram URL\" required [ngClass]=\"{ 'is-invalid': f.instragramUrl.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"twitterUrl\" class=\"form-control\" placeholder=\"Twitter URL\" required [ngClass]=\"{ 'is-invalid': f.twitterUrl.errors }\">\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"snapchatUrl\" class=\"form-control\" placeholder=\"Snapchat URL\" required [ngClass]=\"{ 'is-invalid': f.snapchatUrl.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t\t<div class=\"col-md-12 no-padding\" *ngIf=\"selectedType =='Download'\">\r\n\t\t\t\t\t\t<div class=\"form-group\"> \r\n\t\t\t\t\t  <label>App logo</label>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadAppLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.app_logo.errors }\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"app_name\" class=\"form-control\" placeholder=\"App Name\" required [ngClass]=\"{ 'is-invalid': f.app_name.errors }\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"apple_store_url\" class=\"form-control\" placeholder=\"Apple store URL\" required [ngClass]=\"{ 'is-invalid': f.apple_store_url.errors }\">\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"form-group\"> \r\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"apple_schema\" class=\"form-control\" placeholder=\"Apple schema\" required [ngClass]=\"{ 'is-invalid': f.apple_schema.errors }\">\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t\t <div class=\"form-group\">  \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"google_play_url\" class=\"form-control\" placeholder=\"Google play URL\" required [ngClass]=\"{ 'is-invalid': f.google_play_url.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t\t<div class=\"col-md-12 no-padding\" *ngIf=\"selectedType =='Affiliate'\">\r\n\t\t\t\t\t\t<div class=\"form-group\"> \r\n\t\t\t\t\t\t\t<input type=\"tel\" formControlName=\"affiliate_url\" class=\"form-control\" placeholder=\"Enter 4 digit Affiliate Code\" minlength=\"3\" maxlength=\"4\" pattern=\"^\\d{4}$\" required  [ngClass]=\"{ 'is-invalid': f.affiliate_url.errors }\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n                </div>\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n                \r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-5\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Narration</h3>\r\n\t\t\t</div>\r\n\t\t\r\n            <div class=\"panel-body\">\r\n                <div class=\"row justify-content-center\">\r\n                \t<div class=\"col-sm-12 col-md-10 mb-3 \"> \r\n                      <label>Narration option</label>\r\n                        <select class=\"form-control select2\" formControlName=\"narration_type\" type=\"text\" style=\"width: 100%;\" (change)=\"narrationonChange($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\">\r\n                        \t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t                     \t<option value=\"narration\" >Narration</option>\r\n\t                     \t<option value=\"live_stareaming\" >Live streaming</option>\r\n\t                    </select> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t<div class=\"col-md-10 text-right \">\r\n\t                    <div class=\"row\" *ngIf=\"narrationType == 'narration'\">\r\n\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t<label>Enter Company Detail</label>\r\n\t\t\t\t\t\t\t\t</div>-->\r\n\t\t                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t                    \t<div class=\"row\">\r\n\t\t                    \t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Narration option</label>\r\n\t\t\t\t\t\t\t\t\t\t  <select class=\"form-control select2\" style=\"width: 100%;\" (change)=\"narrationOption($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\"> \r\n\t\t\t\t\t\t\t\t\t\t\t  <!-- <option value=\"\" >--Select--</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t   <option value=\"url\" [selected]=\"true\">Narration File</option> \r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"text\" [selected]=\"true\">Narration Text</option> -->\r\n\t\t\t\t\t\t\t\t\t\t  </select> \r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" *ngIf=\"narrationOptions == 'url'\"> \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t  <label class=\"mb-4\">Set Narration</label> \r\n\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"url\" class=\"form-control\" formControlName=\"narration_url\" placeholder=\"Enter Narration URL\" required [ngClass]=\"{ 'is-invalid': f.narration_url.errors }\"> -->\r\n\t\t\t\t\t\t\t\t\t\t<input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_url.errors }\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" *ngIf=\"narrationOptions == 'text'\"> \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"mb-4\">Enter Narration Text</label>\r\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control narration-text-h\" cols=\"5\"  formControlName=\"narration_text\" placeholder=\"Narration text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.narration_text.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t                    \t\r\n\t\t\t                    \t\r\n\t\t                    \t</div>\r\n\t\t                \t</div>\r\n\t\t                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t                    \t<div class=\"row\">\r\n\t\t                    \t\t\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"mb-4\">Enter Company detail</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control \" formControlName=\"company_name\" placeholder=\"Company Name\" required [ngClass]=\"{ 'is-invalid': f.company_name.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t                      \r\n\t\t\t                        <input type=\"url\" class=\"form-control \" formControlName=\"company_link\" placeholder=\"Company Link\" required [ngClass]=\"{ 'is-invalid': f.company_link.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t                    \t</div>\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t                      \r\n\t\t\t                        <input type=\"text\" class=\"form-control \" formControlName=\"company_about\" placeholder=\"Company About\" required [ngClass]=\"{ 'is-invalid': f.company_about.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Company details Time (In Seconds)</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"narration_time\" placeholder=\"Narration Time\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2 waiting-time1\" formControlName=\"narration_second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_second_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"30\" >30</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"59\" >59</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t  <div class=\"competition-logo-upload \">\r\n\t\t\t\t\t\t\t\t\t\t<label> Company logo </label> \r\n\t\t\t                        <input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadCompanyLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.company_logo.errors }\">\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"control-label\">company logo: </label> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"preview step-5\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Time in second</label>\r\n\t\t\t                        <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"narration_time\" placeholder=\"Narration Time\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t                    </div>\r\n\t\t\t                </div>\r\n\t\t            \t</div>\r\n\t\t            \t\r\n\t\t                    <div class=\"row justify-content-center\" *ngIf=\"narrationType == 'live_stareaming'\">\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t                      \t\r\n\t\t\t                        <input type=\"url\" class=\"form-control\" formControlName=\"live_stream_url\" placeholder=\"Live Stream URL\" required [ngClass]=\"{ 'is-invalid': f.live_stream_url.errors }\">\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t  <label>Brodcaster option</label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"broadcaster\" type=\"text\" style=\"width: 100%;\" (change)=\"broadcasteronChange($event, formVar.value)\" required [ngClass]=\"{ 'is-invalid': f.broadcaster.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\" [selected]=\"true\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of broadcasterData\" [value]=\"option.id\" >{{option.email}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"mb-4\">Enter Company name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control \" formControlName=\"company_name\" placeholder=\"Company Name\" required [ngClass]=\"{ 'is-invalid': f.company_name.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload \">\r\n\t\t\t\t\t\t\t\t\t\t\t<label> Company logo </label> \r\n\t\t\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadCompanyLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.company_logo.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right\">\r\n\t\t\t\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"control-label\">company logo: </label> -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"preview step-5\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t\t  <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t                \t</div>\r\n\t\t            \t\r\n\t            \t</div>\r\n                </div>\r\n                \r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-11 col-md-11 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-6\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Set Audience</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                \t\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10 mb-3 \"> \r\n\t\t\t\t\t\t\t<label>Notification option</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"notification_type\" type=\"text\" style=\"width: 100%;\" (change)=\"notificationonChange($event)\" required [ngClass]=\"{ 'is-invalid': f.notification_type.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"text\" >Text</option>\r\n\t\t\t\t\t\t\t\t\t<!-- <option value=\"image\" >Image</option> -->\r\n\t\t\t\t\t\t\t\t\t<option value=\"text_image\" >Text with Image</option>\r\n\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-10 text-right \">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'text'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Text</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control notification-text-h\" cols=\"5\"  formControlName=\"notification_text\" placeholder=\"notification text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.notification_text.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'image'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadNotificationLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.notification_logo.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'text_image'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Text With Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control notification-text-h\" cols=\"5\"  formControlName=\"notification_text\" placeholder=\"notification text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.notification_text.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadNotificationLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.notification_logo.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group notification_wrap\">\r\n\t\t\t\t\t\t\t\t<label class=\"notification_txt\"> Do you want to byPass set audience?</label>\r\n\t\t\t\t\t\t\t\t  <div class=\"wrap_radio_btn\">\r\n\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\"  formControlName=\"bypass_audience\" value=\"yes\" (change)=\"changeBypassAudience($event)\">Yes\r\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" formControlName=\"bypass_audience\" value=\"no\" (change)=\"changeBypassAudience($event)\">No\r\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" *ngIf=\"showTargetAudience\"> \r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> \r\n\t\t\t\t\t\t\t\t\t  <label>Gender</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"gender\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.gender.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"male\" >Male</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"female\" >Female</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"both\" >Both</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>State</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"state\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.state.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"UP\" >UP</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"delhi\" >Delhi</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Area Locality</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"area_locality\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.area_locality.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"sector-36\">Sector 36</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"sector-37\" >Sector 37</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Based on your filter, <strong>2000 users</strong> have been finalised</label>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Age Range</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"age_range\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.age_range.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6-16\">6-16</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"17-27\" >17-27</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"28-38\" >28-38</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"39-49\" >39-49</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"50-60\" >50-60</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"61-71\" >61-71</option>\r\n\t\t\t\t\t\t\t\t\t   <option value=\"72-82\" >72-82</option>\r\n\t\t\t\t\t\t\t\t\t   <option value=\"83-93\" >83-93</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Nationality</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"nationality\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.nationality.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let option of nationalityData\" [value]=\"option.id\" >{{option.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Country</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"country\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.country.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of countryData\" [value]=\"option.id\" >{{option.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<label>City</label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"city\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.city.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"noida\" >Noida</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"gr_noida\" >Greater Noida</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"form-group notification_wrap\">\r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t<label class=\"notification_txt\"> Do you want to send the push notification</label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <div class=\"wrap_radio_btn\">\r\n\t\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\"  formControlName=\"push_notification\" value=\"yes\">Yes\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" formControlName=\"push_notification\" value=\"no\">No\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Description</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" cols=\"5\"  formControlName=\"audience_description\" placeholder=\"Audience text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.audience_description.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t  <label>Title</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"title\" placeholder=\"Title\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.title.errors }\">\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Image Upload</label>\r\n\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadAudienceLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.image_upload.errors }\" >\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\r\n\r\n\r\n\r\n                <div class=\"row justify-content-center\">\r\n                \t<div class=\"col-sm-12 col-md-10 \"> \r\n                \t\t<!-- <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button> -->\r\n                \t\t<button (click)=\"setFormPreview(formVar.value)\" class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Review</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"panel panel-primary setup-content\" id=\"step-7\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Review</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            \t<div class=\"form-group\">\r\n            \t\t<div class=\"row\">\r\n\t            \t\t<!-- <div class=\"col-md-4\">\r\n\t            \t\t\t<label class=\"control-label\">Description: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.description}}</div>\r\n\t            \t\t</div> -->\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Name of the competition: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.competitionName}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Competition Logo: </label>\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t              <img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n\t\t\t            <div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t              <div class=\"dt-responsive table-responsive\">\r\n\t\t\t                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t\t                  <thead>\r\n\t\t\t                    <tr>\r\n\t\t\t                      <!-- <th width=\"10%\">Category</th> -->\r\n\t\t\t                      <th width=\"10%\">Question</th>\r\n\t\t\t                      <th width=\"10%\">Question File Url</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Option 1</th>\r\n\t\t\t                      <th width=\"10%\">Option 2</th>\r\n\t\t\t                      <th width=\"10%\">Option 3</th>\r\n\t\t\t                      <th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Duration</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Level</th>\r\n\t\t\t                      <th width=\"10%\">Notes</th>\r\n\t\t\t                    </tr>\r\n\t\t\t                  </thead>\r\n\t\t\t                  <tbody>\r\n\t\t\t                    <tr *ngFor=\"let item of fileData\">\r\n\t\t\t                      <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t\t                      <td width=\"10%\">{{ item.question }}</td>\r\n\t\t\t                      <td width=\"10%\" class=\"overflow-wrap\">{{ item.question_file_url }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.option1 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.note }}</td>\r\n\t\t\t                      \r\n\t\t\t                    </tr>\r\n\t\t\t                  </tbody>\r\n\t\t\t                </table>\r\n\t\t\t              </div>\r\n\t\t\t            </div>\r\n\t\t\t        </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\">\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t            \t\t\t<label class=\"control-label\">Start Date: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.startDate | date}} </div>\r\n\t            \t\t</div>\r\n\t            \t\t<!-- <div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">End Date: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.endDate}}</div>\r\n\t            \t\t</div> -->\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t            \t\t\t<label class=\"control-label\">Start Time: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.slot_time}}</div>\r\n\t            \t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t            \t\t\t<label class=\"control-label\">Waiting Time: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{showWaiting_time}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<!-- <div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">End Time: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.endTime}}</div>\r\n\t            \t\t</div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\" *ngIf=\"formData.promotion_type=='social_media'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Instagram URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.instragramUrl}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Twitter URL: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.twitterUrl}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Snapchat URL: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.snapchatUrl}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.promotion_type=='Download'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">App Logo: </label>\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"appLogo && appLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"appLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">App Name: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.app_name}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Apple store URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.apple_store_url}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Google play URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.google_play_url}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.promotion_type=='Affiliate'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Affiliate Code: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.affiliate_url}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\" *ngIf=\"formData.narration_type=='narration'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration option: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.narration_type}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\" *ngIf=\"narrationOptions == 'url'\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Narration File: </label>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"control-label\"> {{formData.narration_url}}</div> --> \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"preview\" *ngIf=\"narrationUrlLogo && narrationUrlLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t<audio controls=\"\" autoplay=\"\" name=\"media\"><source [src]=\"narrationUrlLogo\" type=\"audio/mp3\"></audio>\t\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t<audio #figAudio controls=\"\" autoplay=\"\" name=\"media\"><source [src]=\"audSrc | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n\r\n\t\t\t\t\t\t\t\t<!-- <audio #figAudio>\r\n\t\t\t\t\t\t\t\t\t<source [src]=\"audSrc | sanitizerUrl\" type=\"audio/ogg\">\r\n\t\t\t\t\t\t\t\t\t<source [src]=\"audSrc | sanitizerUrl\" type=\"audio/mpeg\">\r\n\t\t\t\t\t\t\t\t\t<source [src]=\"audSrc | sanitizerUrl\" type=\"audio/mp3\">\r\n\t\t\t\t\t\t\t\t\t<source [src]=\"audSrc | sanitizerUrl\" type=\"audio/wav\">\r\n\t\t\t\t\t\t\t\t</audio> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\" *ngIf=\"narrationOptions == 'text'\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration Text: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.narration_text}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration Time: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{showNarration_time}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Company logo: </label>\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Company name: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_name}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company link: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_link}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Company about: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_about}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.narration_type=='live_stareaming'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration option: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.narration_type=='live_stareaming'?'Live Streaming': ''}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">broadcaster: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.broadcaster}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Company logo: </label>\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Company name: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_name}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"showTargetAudience\">\r\n                    <div class=\"row\">\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Gender: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.gender}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">State: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.state}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Area locality: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.area_locality}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n                    <div class=\"row\">\r\n\t            \t\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Age range: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.age_range}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    \r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">City: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.city}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Nationality: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.nationality}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n                    <div class=\"row\">\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Country: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.country}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Push Notification: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.push_notification}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Audience description: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.audience_description}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n\r\n\r\n                    <div class=\"row\">\r\n\t            \t\t\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Title: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.title}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    \r\n\t            \t\t<div class=\"col-md-4\">\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Image upload: </label>\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"audienceLogo && audienceLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"audienceLogo\" [alt]=\"formData.title\" height=\"200\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\r\n\t            \t\t</div>\r\n\t            \t\t\r\n                    </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<!-- {{percentDone}} -->\r\n\t           <!-- Progress Bar --> \r\n\t                  <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n\t\t                 <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n\t\t                    [style.width.%]=\"percentDone\">\r\n\t\t                 </div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n                <div class=\"row\"> \r\n                  <input type=\"hidden\" formControlName=\"competition_type\" value=\"daily\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"submit\"  [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Submit' }}</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n\t\t<div class=\"modal crop-image-wrap\" id=\"myCropModal\" [style.display]=\"showCropModal ? 'block' : 'none'\">\r\n\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t  <div class=\"modal-content\">\r\n\t\t  \r\n\t\t\t\t<!-- Modal Header -->\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t  <h4 class=\"modal-title\">Crop Image</h4>\r\n\t\t\t\t  <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Modal body --> \r\n\t\t\t\t<div class=\"modal-body slot-details-wrap\">\r\n\t\t\t\t\t<image-cropper\r\n\t\t\t\t\t[imageChangedEvent]=\"imageChangedEvent\" \r\n\t\t\t\t\t[maintainAspectRatio]=\"true\" \r\n\t\t\t\t\t[aspectRatio]=\"3 / 3\"\r\n\t\t\t\t\t[resizeToWidth]=\"600\" \r\n\t\t\t\t\tformat=\"png\" \r\n\t\t\t\t\t(imageCropped)=\"imageCropped($event, image_type)\" \r\n\t\t\t\t\t(imageLoaded)=\"imageLoaded()\"\r\n\t\t\t\t\t(cropperReady)=\"cropperReady()\" \r\n\t\t\t\t\t(loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n\t\t\t\t\t</div>\r\n\t\t  \r\n\t\t\t\t<!-- Modal footer -->\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t  <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n\t\t\t\t</div>\r\n\t\t  \r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n        <!-- {{formVar.value | json}} -->\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/edit/edit-daily-competition.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/edit/edit-daily-competition.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>daily-competition works!</p> -->\r\n<!-- <div class=\"main-container\">\r\n  <app-multi-step-form\r\n    class=\"multi-step-form\"\r\n    [formContent]=\"formContent\"\r\n    (formSubmit)=\"onFormSubmit($event)\"\r\n  ></app-multi-step-form>\r\n</div> -->\r\n\r\n\r\n<div class=\"container daily-competition-wrap\">\r\n    <div class=\"stepwizard\">\r\n        <div class=\"stepwizard-row setup-panel\">\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-2\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-5\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-6\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">6</a>\r\n                \r\n            </div>\r\n            <div class=\"stepwizard-step\"> \r\n                <a href=\"#step-7\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">7</a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n    <div >\r\n    <form role=\"form\" class=\"k-form\" [formGroup]=\"formVar\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-1\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Update Competition</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            \t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n                      \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t  <label class=\"control-label\">Name of the competition</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t  <input class=\"form-control\"  formControlName=\"competitionName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.competitionName.errors }\">\r\n\t\t\t\t\t\t</div>\r\n  \r\n\t\t\t\t\t\t<!-- <div class=\"form-group  m-b-15\">\r\n\t\t\t\t\t\t  <label>Description</label>\r\n\t\t\t\t\t\t  <textarea class=\"form-control\" cols=\"5\"  formControlName=\"description\" placeholder=\"Default textarea\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.description.errors }\"></textarea>\r\n\t\t\t\t\t\t</div> -->\r\n  \r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-sm-12 col-md-6 \"> \r\n                      \t<div class=\"form-group competition-logo-upload\">\r\n                        <label> Competition Logo Upload</label> \r\n                       \r\n\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadCompetitionLogo($event)\" >\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\" required [ngClass]=\"{ 'is-invalid': f.imageInput.errors }\"/> <!-- Validation Field -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.imageInput.errors\" class=\"invalid-feedback\" >\r\n\t\t\t\t\t\t\t<div *ngIf=\"f.imageInput.errors.required\"><label> Competition logo is required </label></div>\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t\t\t<img [src]=\"preview\" height=\"100\" >\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n                    \r\n                </div>\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right\" type=\"button\">Next</button>\r\n                \t\t\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"panel panel-primary setup-content\" id=\"step-2\" >\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Competition Data</h3>\r\n            </div>\r\n            <div class=\"panel-body\" >\r\n                <div class=\"row\" *ngIf=\"isSave\">\r\n\t\t            <div class=\"col-xs-12 col-sm-12\">\r\n\t\t              <div class=\"dt-responsive table-responsive\">\r\n\t\t                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t                  <thead>\r\n\t\t                    <tr>\r\n                              <th><span class=\"option-width\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t  <input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"selectedAll\">\r\n\t\t\t\t\t\t\t\t   </span>\r\n                                <th>Delete </th>\r\n                                <th>Edit </th>\r\n\t\t                      <!-- <th width=\"10%\">Category</th> -->\r\n\t\t                      <th width=\"10%\">Question</th>\r\n\t\t                      <th width=\"10%\">Question File Url</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t  <th width=\"10%\">Option 1</th>\r\n\t\t                      <th width=\"10%\">Option 2</th>\r\n\t\t                      <th width=\"10%\">Option 3</th>\r\n\t\t                      <th width=\"10%\">Option 4</th>\r\n\t\t                      <th width=\"10%\">Level</th>\r\n\t\t                      <th width=\"10%\">Notes</th>\r\n\t\t                      \r\n\t\t                    </tr>\r\n\t\t                  </thead>\r\n\t\t                  <tbody>\r\n\t\t                    <tr *ngFor=\"let item of getQuestion\">\r\n                                <td class=\"categories\"><!-- <input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" > -->\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"{{item.question_name}}\" [(ngModel)]=\"item.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"checkIfAllSelected($event,item.id)\"></td>\r\n                                <td class=\"\">\r\n                                    <button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n                                </td>\r\n                                <td><button type=\"button\" class=\"btn allam-btn btn-success\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button></td>\r\n\t\t                      <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t                      <td width=\"10%\">{{ item.question_name }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.question_file_url }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.option1 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.level }}</td>\r\n\t\t                      <td width=\"10%\">{{ item.note }}</td>\r\n\t\t                      \r\n\t\t                    </tr>\r\n\t\t                  </tbody>\r\n\t\t                </table>\r\n\t\t              </div>\r\n\t\t            </div>\r\n\t\t        </div>\r\n                \r\n                <div class=\"row\" id=\"buttonHide\">\r\n                \t<div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"panel panel-primary setup-content\" id=\"step-3\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Set Date and Time</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n\r\n\t\t\t\t<div class=\"col-md-10 text-right \">\r\n            <div class=\"panel-body\">\r\n            \t\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 show-slot\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button class=\"btn border pull-right\" type=\"button\" (click)=\"onClick($event)\" >Show Slot</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                      <label>\r\n                        Start Date\r\n                        </label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"start_date\" formControlName=\"startDate\" value=\"{{ post.startDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.startDate.errors }\">\r\n\t\t\t\t   </div>\r\n\t\t\t\t\t</div> -->\r\n                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15 sdtime\">\r\n                      <label>\r\n                        Start Date Time\r\n\t\t\t\t\t\t</label> <!-- {{jstoday}}  -->\r\n\t\t\t\t\t\t<!-- [max]=\"max\" -->\r\n\t\t\t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"invalidMoment\" formControlName=\"startDateTime\"  placeholder=\"Date Time\" class=\"form-control\" readonly=\"yes\" required\r\n\t\t\t\t\t\t\t\t[min]=\"min\" \r\n\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"dt11\" [owlDateTime]=\"dt11\"\r\n\t\t\t\t\t\t\t\t> \r\n\t\t\t\t\t\t\t\t<span class=\"trigger\" [owlDateTimeTrigger]=\"dt11\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-calendar-alt\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<owl-date-time [showSecondsTimer]=\"true\" [pickerMode]=\"'popup'\" #dt11></owl-date-time> -->\r\n\r\n\t\t\t\t\t\t<input placeholder=\"Date:\" type=\"text\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"invalidMoment\" formControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" readonly=\"yes\" required\r\n\t\t\t\t\t\t\t\t[min]=\"min\" \r\n\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"dt1\" [owlDateTime]=\"dt1\">\r\n\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"startTime.invalid && startTime.errors.owlDateTimeMin\">\r\n\t\t\t\t\t\t\tDate Time value must after {{min | date: 'medium'}}\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"dateTime.invalid && dateTime.errors.owlDateTimeMax\">\r\n\t\t\t\t\t\t\tDate Time value must before {{max | date: 'medium'}}\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t<!-- <input type=\"time\" step=\"1\" class=\"form-control\" id=\"start_time\" formControlName=\"startTime\" min=\"jstoday\" required [ngClass]=\"{ 'is-invalid': f.startTime.errors }\"> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label>Waiting Time</label>\r\n\t\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"waiting_time\" required [ngClass]=\"{ 'is-invalid': f.waiting_time.errors }\">\r\n\t\t\t\t\t\t</div>\r\n                    </div> -->\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15 \">\r\n\t\t\t\t\t\t\t<label>Waiting Time (In Minutes)</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control select2 waiting-time1\" formControlName=\"minute_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.minute_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t<!--  <option value=\"01\" >01</option>\r\n\t\t\t\t\t\t\t\t\t <option value=\"02\" >02</option> \r\n\t\t\t\t\t\t\t\t\t<option value=\"03\" >03</option>\r\n\t\t\t\t\t\t\t\t\t <option value=\"04\" >04</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"05\" >05</option> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <option value=\"06\" >06</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"07\" >07</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"08\" >08</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"09\" >09</option> -->\r\n\t\t\t\t\t\t\t\t\t<option value=\"10\" >10</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"15\" >15</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<!-- <select class=\"form-control select2 waiting-time1\" formControlName=\"second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.second_time.errors }\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of oneToSixtyArray\" [value]=\"option\" >{{option}}</option>\r\n\t\t\t\t\t\t\t</select> -->\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                    \r\n                    <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                      <label>\r\n                        End Time\r\n                        </label>\r\n\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"endTime\" required [ngClass]=\"{ 'is-invalid': f.endTime.errors }\">\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                      <label>\r\n                        End Date\r\n                        </label>\r\n                        <input type=\"date\" class=\"form-control\" formControlName=\"endDate\" value=\"{{ post.endDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.endDate.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n                </div>\r\n\r\n                <!-- The Modal -->\r\n\t\t\t\t<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n\t\t\t\t    <div class=\"modal-dialog\">\r\n\t\t\t\t      <div class=\"modal-content\">\r\n\t\t\t\t      \r\n\t\t\t\t        <!-- Modal Header -->\r\n\t\t\t\t        <div class=\"modal-header\">\r\n\t\t\t\t          <h4 class=\"modal-title\">Slot Details:</h4>\r\n\t\t\t\t          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click) = \"hide()\">&times;</button>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        \r\n\t\t\t\t        <!-- Modal body -->\r\n\t\t\t\t        <div class=\"modal-body slot-details-wrap\">\r\n\t                      \t<label>Choose your time slot</label>\r\n\t\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" ><input type=\"text\" name=\"slot_time\" formControlName=\"slot_time\" value=\"09:00\" >\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"09:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 09:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"10:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 10:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"12:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 12:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"13:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 13:30 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"15:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 15:00 \r\n\t\t\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"16:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 16:30 \r\n\t\t\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"18:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 18:00\r\n\t\t\t\t\t\t\t\t\t</span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"19:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 19:30        </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"21:00\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 21:00 </span></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-3 \" ><input type=\"radio\" name=\"slot_time\" formControlName=\"slot_time\" value=\"22:30\" [checked]=\"false\" required [ngClass]=\"{ 'is-invalid': f.slot_time.errors }\"> <span> 22:30        </span></div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        \r\n\t\t\t\t        <!-- Modal footer -->\r\n\t\t\t\t        <div class=\"modal-footer\">\r\n\t\t\t\t          <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click) = \"hide()\">Close</button>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        \r\n\t\t\t\t      </div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n                \r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-4\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Promotion</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n\r\n\t\t\t\t<div class=\"col-md-9 text-right \">\r\n            <div class=\"panel-body\">\r\n\t\t\t\t\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n                        <select class=\"form-control select2\" formControlName=\"promotion_type\" type=\"text\" style=\"width: 100%;\" (change)=\"onChange($event)\" required [ngClass]=\"{ 'is-invalid': f.promotion_type.errors }\">\r\n                        \t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t                     \t<!-- <option value=\"1\" >Social Media follow promotion</option> -->\r\n\t                     \t<option value=\"2\" >Download</option>\r\n\t                     \t<option value=\"3\" >Affiliate Code</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n                    </div>\r\n                    <div class=\"col-md-12 no-padding\" *ngIf=\"selectedType == '1'\">\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"instragramUrl\" class=\"form-control\" placeholder=\"Instragram URL\" required [ngClass]=\"{ 'is-invalid': f.instragramUrl.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"twitterUrl\" class=\"form-control\" placeholder=\"Twitter URL\" required [ngClass]=\"{ 'is-invalid': f.twitterUrl.errors }\">\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"snapchatUrl\" class=\"form-control\" placeholder=\"Snapchat URL\" required [ngClass]=\"{ 'is-invalid': f.snapchatUrl.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t\t<div class=\"col-md-12 no-padding\" *ngIf=\"selectedType =='2'\">\r\n\t\t\t\t\t\t<div class=\"form-group\"> \r\n\t\t\t\t\t  <label>App logo</label>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadAppLogo($event)\" >\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">App Logo: </label>\r\n\t\t\t\t\t\t\t<div class=\"preview\" *ngIf=\"appLogo && appLogo !== null\">\r\n\t\t\t\t\t\t\t  <img [src]=\"appLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"app_name\" class=\"form-control\" placeholder=\"App Name\" required [ngClass]=\"{ 'is-invalid': f.app_name.errors }\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"apple_store_url\" class=\"form-control\" placeholder=\"Apple store URL\" required [ngClass]=\"{ 'is-invalid': f.apple_store_url.errors }\">\r\n\t\t\t\t\t </div>\r\n\t\t\t\t\t <div class=\"form-group\"> \r\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"apple_schema\" class=\"form-control\" placeholder=\"Apple schema\" required [ngClass]=\"{ 'is-invalid': f.apple_schema.errors }\">\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t\t <div class=\"form-group\">  \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"google_play_url\" class=\"form-control\" placeholder=\"Google play URL\" required [ngClass]=\"{ 'is-invalid': f.google_play_url.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t\t\t<div class=\"col-md-12 no-padding\" *ngIf=\"selectedType =='3'\">\r\n\t\t\t\t\t\t<div class=\"form-group\"> \r\n\t\t\t\t\t \r\n\t\t\t\t\t  <input type=\"text\" formControlName=\"affiliate_url\" class=\"form-control\" placeholder=\"Enter 4 digit Affiliate Code\" required [ngClass]=\"{ 'is-invalid': f.affiliate_url.errors }\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n                </div>\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n                \r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-5\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Narration</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n            <div class=\"panel-body\">\r\n                <div class=\"row justify-content-center\">\r\n\t\t\t\r\n                \t<div class=\"col-sm-12 col-md-10 \"> \r\n                      <label>Narration option</label>\r\n                        <select class=\"form-control select2\" formControlName=\"narration_type\" type=\"text\" style=\"width: 100%;\" (change)=\"narrationonChange($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\">\r\n                        \t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t                     \t<option value=\"narration\" >Narration</option>\r\n\t                     \t<option value=\"live_stareaming\" >Live streaming</option>\r\n\t                    </select> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t<div class=\"col-md-10 text-right \">\r\n\t                    <div class=\"row\" *ngIf=\"narrationType == 'narration'\">\r\n\t\t\t\t\t\t\t<!--<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t<label>Enter Company Detail</label>\r\n\t\t\t\t\t\t\t\t</div>-->\r\n\t\t                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t                    \t<div class=\"row\">\r\n\t\t                    \t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Narration option</label> \r\n\t\t\t\t\t\t\t\t\t\t  <select class=\"form-control select2\" style=\"width: 100%;\" (change)=\"narrationOption($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t  <!-- <option value=\"\" [selected]=\"true\">--Select--</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t   <!-- <option value=\"url\" [selected]=\"narrationOptions=='url'\">Narration File</option>\r\n\t\t\t\t\t\t\t\t\t\t\t   <option value=\"text\" [selected]=\"'narrationOptions'\">Narration Text</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t   <option *ngFor=\"let option of narrOption\" [value]=\"option\" [selected]=\"narrationOptions==option\" >{{option}}</option>\r\n\t\t\t\t\t\t\t\t\t\t  </select> \r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\" *ngIf=\"narrationOptions == 'url'\"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t                      \t\t<label class=\"mb-4\">Set Narration</label>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"url\" class=\"form-control\" formControlName=\"narration_url\" placeholder=\"Enter Narration URL\" required [ngClass]=\"{ 'is-invalid': f.narration_url.errors }\"> -->\r\n\t\t\t\t\t\t\t\t\t\t<input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected($event)\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<audio #figAudio controls=\"\" name=\"media\"><source [src]=\"audSrcPreview | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t                    \t\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \" *ngIf=\"narrationOptions == 'text'\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"mb-4\">Enter Narration Text</label>\r\n\t\t\t                        <textarea class=\"form-control narration-text-h\" cols=\"5\"  formControlName=\"narration_text\" placeholder=\"Narration text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.narration_text.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t                    \t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Narration Time</label>\r\n\t\t\t                        <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"narration_time\" placeholder=\"Narration Time\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t                    \t</div>\r\n\t\t                \t</div>\r\n\t\t                    <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t                    \t<div class=\"row\">\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"mb-4\">Enter Company detail</label>\r\n\t\t\t                        <input type=\"text\" class=\"form-control \" formControlName=\"company_name\" placeholder=\"Company Name\" required [ngClass]=\"{ 'is-invalid': f.company_name.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"url\" class=\"form-control \" formControlName=\"company_link\" placeholder=\"Company Link\" required [ngClass]=\"{ 'is-invalid': f.company_link.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t                    \t</div>\r\n\t\t\t                    \t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t                      \r\n\t\t\t                        <input type=\"text\" class=\"form-control \" formControlName=\"company_about\" placeholder=\"Company About\" required [ngClass]=\"{ 'is-invalid': f.company_about.errors }\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Company details Time (In Seconds)</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"narration_time\" placeholder=\"Narration Time\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2 waiting-time1\" formControlName=\"narration_second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_second_time.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"30\" >30</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"59\" >59</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload \">\r\n\t\t\t\t\t\t\t\t\t\t <label> Company logo </label> \r\n\t\t\t              \t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadCompanyLogo($event)\" >\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"control-label\">company logo: </label> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"preview step-5\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t                    \t\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\t\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Time in second</label>\r\n\t\t\t                        <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"narration_time\" placeholder=\"Narration Time\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t                    </div>\r\n\t\t\t                </div>\r\n\t\t            \t</div>\r\n\t\t            \t\r\n\t\t                    <div class=\"row justify-content-center\" *ngIf=\"narrationType == 'live_stareaming'\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right  \"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Brodcaster option</label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"broadcaster\" type=\"text\" style=\"width: 100%;\" (change)=\"broadcasteronChange($event, formVar.value)\" required [ngClass]=\"{ 'is-invalid': f.broadcaster.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"0\" [selected]=\"true\">--Select--</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of broadcasterData\" [value]=\"option.id\" >{{option.email}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t                      \t\r\n\t\t\t                        <input type=\"url\" class=\"form-control\" formControlName=\"live_stream_url\" placeholder=\"Live Stream URL\" required [ngClass]=\"{ 'is-invalid': f.live_stream_url.errors }\">\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t                    \t</div> -->\r\n\t\t                \t</div>\r\n\t\t            \t\r\n\t            \t</div>\r\n                </div>\r\n                \r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-11 col-md-11 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Next</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-6\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Set Audience</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-10 mb-3 \"> \r\n\t\t\t\t\t\t\t<label>Notification option</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"notification_type\" type=\"text\" style=\"width: 100%;\" (change)=\"notificationonChange($event)\" required [ngClass]=\"{ 'is-invalid': f.notification_type.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"text\" >Text</option>\r\n\t\t\t\t\t\t\t\t\t<!-- <option value=\"image\" >Image</option> -->\r\n\t\t\t\t\t\t\t\t\t<option value=\"text_image\" >Text with Image</option>\r\n\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-10 text-right \">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'text'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Text</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control notification-text-h\" cols=\"5\"  formControlName=\"notification_text\" placeholder=\"notification text\" rows=\"5\" ></textarea>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'image'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadNotificationLogo($event)\" >\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Notification Logo: </label>\r\n\t\t\t\t\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notificationLogo\" *ngIf=\"notificationLogo && notificationLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <img [src]=\"notificationLogo\" [alt]=\"formData.notification_type\" height=\"150\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\" *ngIf=\"notificationType == 'text_image'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-right \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"competition-logo-upload form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Text With Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control notification-text-h\" cols=\"5\"  formControlName=\"notification_text\" placeholder=\"notification text\" rows=\"5\" ></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadNotificationLogo($event)\" >\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Notification Logo: </label>\r\n\t\t\t\t\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"notificationLogo\" *ngIf=\"notificationLogo && notificationLogo !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <img [src]=\"notificationLogo\" [alt]=\"formData.notification_type\" height=\"150\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"row justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group notification_wrap\">\r\n\t\t\t\t\t\t\t\t<label class=\"notification_txt\"> Do you want to byPass set audience?</label>\r\n\t\t\t\t\t\t\t\t  <div class=\"wrap_radio_btn\">\r\n\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\"  formControlName=\"bypass_audience\" value=\"yes\" (change)=\"changeBypassAudience($event)\">Yes\r\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" formControlName=\"bypass_audience\" value=\"no\" (change)=\"changeBypassAudience($event)\">No\r\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" *ngIf=\"showTargetAudience\"> \r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\"> \r\n\t\t\t\t\t\t\t\t\t  <label>Gender</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"gender\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.gender.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"male\" >Male</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"female\" >Female</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"both\" >Both</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>State</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"state\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.state.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"UP\" >UP</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"delhi\" >Delhi</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Area Locality</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"area_locality\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.area_locality.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"sector-36\">Sector 36</option>\r\n\t\t\t\t\t\t\t\t\t\t <option value=\"sector-37\" >Sector 37</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Based on your filter, <strong>2000 users</strong> have been finalised</label>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Age Range</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"age_range\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.age_range.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"6-16\">6-16</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"17-27\" >17-27</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"28-38\" >28-38</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"39-49\" >39-49</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"50-60\" >50-60</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"61-71\" >61-71</option>\r\n\t\t\t\t\t\t\t\t\t   <option value=\"72-82\" >72-82</option>\r\n\t\t\t\t\t\t\t\t\t   <option value=\"83-93\" >83-93</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Nationality</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"nationality\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.nationality.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let option of nationalityData\" [value]=\"option.id\" >{{option.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<label>Country</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"country\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.country.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let option of countryData\" [value]=\"option.id\" >{{option.name}}</option>\r\n\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<label>City</label>\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"city\" style=\"width: 100%;\" required [ngClass]=\"{ 'is-invalid': f.city.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"noida\" >Noida</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"gr_noida\" >Greater Noida</option>\r\n\t\t\t\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"form-group notification_wrap\">\r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t<label class=\"notification_txt\"> Do you want to send the push notification</label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <div class=\"wrap_radio_btn\">\r\n\t\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\"  formControlName=\"push_notification\" value=\"yes\">Yes\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t  <label class=\"radio-box\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" formControlName=\"push_notification\" value=\"no\">No\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t  <label>Description</label>\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" cols=\"5\"  formControlName=\"audience_description\" placeholder=\"Audience text\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.audience_description.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t  <label>Title</label>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"title\" placeholder=\"Title\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.title.errors }\">\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Image Upload</label>\r\n\t\t\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\" (change)=\"uploadAudienceLogo($event)\" required [ngClass]=\"{ 'is-invalid': f.image_upload.errors }\" >\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n                </div>\r\n\t\t\t\t\r\n                <div class=\"row\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<!-- <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button> -->\r\n                \t\t<button (click)=\"setFormPreview(formVar.value)\" class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\">Review</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-7\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Review</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            \t<div class=\"form-group\">\r\n            \t\t<div class=\"row\">\r\n\t            \t\t<!-- <div class=\"col-md-4\">\r\n\t            \t\t\t<label class=\"control-label\">Description: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.description}}</div>\r\n\t            \t\t</div> -->\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Name of the competition: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.competitionName}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Competition Logo: </label>\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t              <img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n\t\t\t            <div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t              <div class=\"dt-responsive table-responsive\">\r\n\t\t\t                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t\t                  <thead>\r\n\t\t\t                    <tr>\r\n\t\t\t                      <!-- <th width=\"10%\">Category</th> -->\r\n\t\t\t                      <th width=\"10%\">Question</th>\r\n\t\t\t                      <th width=\"10%\">Question File Url</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Option 1</th>\r\n\t\t\t                      <th width=\"10%\">Option 2</th>\r\n\t\t\t                      <th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t\t\t  <th width=\"10%\">Duration</th>\r\n\t\t\t                      <th width=\"10%\">Level</th>\r\n\t\t\t                      <th width=\"10%\">Notes</th>\r\n\t\t\t                      \r\n\t\t\t                    </tr>\r\n\t\t\t                  </thead>\r\n\t\t\t                  <tbody>\r\n\t\t\t                    <tr *ngFor=\"let item of getQuestion\">\r\n\t\t\t                      <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t\t                      <td width=\"10%\">{{ item.question_name }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.question_file_url }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.option1 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t\t\t\t  <td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t                      <td width=\"10%\">{{ item.note }}</td>\r\n\t\t\t                      \r\n\t\t\t                    </tr>\r\n\t\t\t                  </tbody>\r\n\t\t\t                </table>\r\n\t\t\t              </div>\r\n\t\t\t            </div>\r\n\t\t\t        </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\">\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Start Date: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.startDate | date}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<!-- <div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">End Date: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.endDate}}</div>\r\n\t            \t\t</div> -->\r\n\t            \t\t<div class=\"col-md-6\">\r\n\t            \t\t\t<label class=\"control-label\">Start Time: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.slot_time}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<!-- <div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">End Time: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.endTime}}</div>\r\n\t            \t\t</div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\" *ngIf=\"formData.promotion_type=='1'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion Option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type=='1'? 'Social Media':''}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Instagram URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.instragramUrl}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Twitter URL: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.twitterUrl}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Snapchat URL: </label>\r\n\t            \t\t\t<div class=\"control-label\">  {{formData.snapchatUrl}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.promotion_type=='2'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion Option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type=='2'? 'Download':''}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">App Logo: </label>\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"appLogo && appLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"appLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">App Name: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.app_name}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Apple store URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.apple_store_url}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Google play URL: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.google_play_url}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.promotion_type=='3'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Promotion Option: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.promotion_type=='3'? 'Affiliate':''}}</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t<label class=\"control-label\">Affiliate Code: </label>\r\n\t            \t\t\t<div class=\"control-label\"> {{formData.affiliate_url}}</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n            \t\t<div class=\"row\" *ngIf=\"formData.narration_type=='narration'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration option: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.narration_type}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<!-- <div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration File: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.narration_url}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div> -->\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration Text: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.narration_text}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration Time: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{showNarration_time}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t            \t\t\t\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Company Logo: </label>\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Company Name: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_name}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company Link: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_link}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Company About: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\">  {{formData.company_about}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"formData.narration_type=='live_stareaming'\">\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Narration Option: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.narration_type}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Live Stream URL: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.live_stream_url}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"showTargetAudience\">\r\n                    <div class=\"row\">\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Gender: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.gender}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">State: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.state}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Area Locality: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.area_locality}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n                    <div class=\"row\">\r\n\t            \t\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Age Range: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.age_range}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    \r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">City: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.city}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Nationality: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.nationality}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n                    <div class=\"row\">\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Country: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.country}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Push Notification: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.push_notification}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Audience Description: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.audience_description}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\r\n\r\n\r\n                    <div class=\"row\">\r\n\t            \t\t\r\n\t            \t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t            \t\t\t<label class=\"control-label\">Title: </label>\r\n\t\t\t\t\t\t\t<div class=\"control-label\"> {{formData.title}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t            \t\t</div>\r\n                    \r\n\t            \t\t<div class=\"col-md-4\">\r\n\t            \t\t\t\r\n\t            \t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t        <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\">Image Upload: </label>\r\n\t\t\t\t\t            <div class=\"preview\" *ngIf=\"audienceLogo && audienceLogo !== null\">\r\n\t\t\t\t\t              <img [src]=\"audienceLogo\" [alt]=\"formData.title\" height=\"200\" >\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\r\n\t            \t\t</div>\r\n\t            \t\t\r\n                    </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<!-- {{percentDone}} -->\r\n\t           <!-- Progress Bar --> \r\n\t                  <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n\t\t                 <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n\t\t                    [style.width.%]=\"percentDone\">\r\n\t\t                 </div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n                <div class=\"row\"> \r\n                  <input type=\"hidden\" formControlName=\"competition_type\" value=\"daily\">\r\n                \t<div class=\"col-sm-12 col-md-12 \"> \r\n                \t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"submit\">Update</button>\r\n                \t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                \t</div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n        \r\n\t\t<div class=\"modal crop-image-wrap\" id=\"myCropModal\" [style.display]=\"showCropModal ? 'block' : 'none'\">\r\n\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t  <div class=\"modal-content\">\r\n\t\t  \r\n\t\t\t\t<!-- Modal Header -->\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t  <h4 class=\"modal-title\">Crop Image</h4>\r\n\t\t\t\t  <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Modal body -->\r\n\t\t\t\t<div class=\"modal-body slot-details-wrap\">\r\n\t\t\t\t\t<image-cropper\r\n\t\t\t\t\t[imageChangedEvent]=\"imageChangedEvent\" \r\n\t\t\t\t\t[maintainAspectRatio]=\"true\" \r\n\t\t\t\t\t[aspectRatio]=\"3 / 3\"\r\n\t\t\t\t\t[resizeToWidth]=\"600\" \r\n\t\t\t\t\tformat=\"png\" \r\n\t\t\t\t\t(imageCropped)=\"imageCropped($event, image_type)\" \r\n\t\t\t\t\t(imageLoaded)=\"imageLoaded()\"\r\n\t\t\t\t\t(cropperReady)=\"cropperReady()\" \r\n\t\t\t\t\t(loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n\t\t\t\t\t</div>\r\n\t\t  \r\n\t\t\t\t<!-- Modal footer -->\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t  <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n\t\t\t\t</div>\r\n\t\t  \r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n        <!-- {{formVar.value | json}} -->\r\n    </form>\r\n    </div>\r\n\r\n    <div class=\"panel-body\" *ngIf=\"isEdit\">\r\n        <div class=\"row\" >\r\n            <div class=\"col-md-12\">\r\n            <form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n                \r\n                <div class=\"row\">\r\n                <div class=\"col-lg-8 \">\r\n                    <div class=\"row \">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option1.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && ff.option1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.option1.errors.required\">Option A is required.</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n                        <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'a'\">\r\n                        <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n    \r\n                    <input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option2.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && ff.option2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.option2.errors.required\">Option B is required.</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n                        <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value == 'b'\">\r\n                        <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n    \r\n                    <input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option3.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && ff.option3.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.option3.errors.required\">Option C is required.</div>\r\n                        </div>\r\n    \r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                        <input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'c'\"> \r\n                        <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n    \r\n                    <div class=\"row m-t-15\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n                    \r\n                    <input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option4.errors }\">\r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && ff.option4.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.option4.errors.required\">Option D is required.</div>\r\n                        </div>\r\n    \r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n                        <label class=\"radio-box\">\r\n                        <input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'd'\">\r\n                        <span class=\"checkmark\"></span>\r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                        <label >Level</label>\r\n                        <div class=\"group\">\r\n                        \r\n                        <select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && ff.level.errors }\">\r\n                            <option value=\"\">Level</option>\r\n                            <option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n                        </select>\r\n                        <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && ff.level.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.level.errors.required\">Level is required.</div>\r\n                            <div *ngIf=\"ff.level.errors.pattern\">Accept numeric values only.</div>\r\n    \r\n                        </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n                        <label >Duration (In Seconds)</label>\r\n                        <div class=\"group\">\r\n                        <select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && ff.duration.errors }\">\r\n                            <option value=\"\">Duration (In Seconds)</option>\r\n                            <option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n                        </select>\r\n                        \r\n                        <span class=\"md-line\"></span>\r\n                        <div *ngIf=\"submitted && ff.duration.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"ff.duration.errors.required\">Question time is required.</div>\r\n                            <div *ngIf=\"ff.duration.errors.pattern\">Accept numeric values only.</div>\r\n    \r\n                        </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <label >Note</label>\r\n                        <div class=\"group\">\r\n    \r\n                        <input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n                        <span class=\"md-line\"></span>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n                    </div> \r\n                    \r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n                        <div class=\"m-t-15\">\r\n                        <button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                            <span *ngIf=\"this.idEdit\">Back</span>\r\n                        </button>\r\n                        \r\n                        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                            <span *ngIf=\"this.idEdit\">Update</span>\r\n                            \r\n                        </button>\r\n    \r\n                        </div>\r\n                        \r\n                    </div>\r\n                    <div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 \">\r\n                    <div class=\"editor-wrap\" id=\"my-node\"> \r\n                    <label>Question</label>\r\n                    <textarea class=\"form-control\" rows=\"10\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.question.errors }\"> </textarea> \r\n                    <span class=\"md-line\"></span>\r\n                    <div *ngIf=\"submitted && ff.question.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"ff.question.errors.required\">Question is required.</div>\r\n                    </div>\r\n                    </div>\r\n                    <!-- <div class=\"editor-wrap\" id=\"my-node\"> \r\n                    <label>Question Image</label>\r\n                    <input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadQuestionImage($event)\"> -->\r\n                    <!-- Image Preview -->\r\n                    <!--<div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                        <img [src]=\"preview\" height=\"150\" >\r\n                    </div> \r\n                    </div> -->\r\n                </div>\r\n                </div>\r\n                <!--\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n                    <div class=\"m-t-15\">\r\n                        <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                        Save and insert\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                -->\r\n            </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/list/list-daily.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/list/list-daily.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loading *ngIf=\"isLoading\">{{ isLoading }}</loading>\r\n<div class=\"container-fluid single-curriculum\">\r\n\r\n    <div class=\"row m-b-20\">\r\n        <div class=\"col-md-12 p-l-0\">\r\n          \r\n            <a class=\"btn btn-success creat-new-btn\" [routerLink]=\"['/daily/add']\" href=\"javascript: void(0);\" > CREATE NEW CHALLENGE RACE <!-- DAILY COMPETITION --> </a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 Competitive-exam-wrap \">\r\n\r\n\r\n\r\n        <div class=\"row filter-wrap\">\r\n            <!-- <div class=\"co2-md-2  col-xl-2\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">End Date</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">End Date 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">End Date 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">End Date 3</option>\r\n                    </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"co2-md-2  col-xl-2\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">Start Date</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">Start Date 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Start Date 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Start Date 3</option>\r\n                    </select>\r\n                </div>\r\n               </div>\r\n\r\n               <div class=\"co2-md-3  col-xl-3\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">Select Your choice</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">Select 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Select 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Select 3</option>\r\n                    </select>\r\n                </div>\r\n               </div> -->\r\n               <div class=\"col-md-6\">&nbsp;</div>\r\n               <div class=\"co2-md-3  col-xl-3\">\r\n                <input [(ngModel)]=\"term\" class=\"form-control ng-pristine ng-valid ng-touched\" placeholder=\"Search by name\" type=\"search\">\r\n               </div>\r\n\r\n               <div class=\"co2-md-3  col-xl-3 p-l-0\">\r\n               <h3>Challenge Race</h3>\r\n               </div>\r\n\r\n\r\n\r\n        </div>\r\n \r\n        <div class=\"row\">\r\n           <div class=\"col-md-12 \">\r\n\r\n           <div class=\"col-md-6 col-xl-3\">\r\n            <div class=\"card text-center\">\r\n                <div class=\"card-block-small\"><a [routerLink]=\"['/daily/add']\" href=\"javascript: void(0);\">\r\n                    \r\n                    <span class=\"text-c-blue f-w-600\">+</span>\r\n                    <h4>Create New <br>Challenge Race </h4></a>\r\n                </div>\r\n            </div>\r\n           </div>\r\n\r\n           <div class=\"col-md-6 col-xl-3 competitive-exam\" *ngFor=\"let data of dailyList | filter: term let index =index;\r\n            let isOdd=odd;\r\n            let isEven=even\" \r\n            [class.odd]=\"isOdd\" \r\n            [class.even]=\"isEven\">\r\n           <div class=\"card widget-card-1 mt-0\">\r\n                <a *ngIf=\"data.league_date > jstoday\" [routerLink]=\"['/daily/edit', data.id]\" href=\"javascript: void(0);\">\r\n                    <div class=\"card-block-small p-0\">\r\n                        <div class=\"title\">  {{data.compitition_name}}</div>\r\n                        <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                            <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                        <!-- <div class=\"text-c-pink\">Total Participant: 120</div> -->\r\n                        <div class=\"text-c-pink\">Mode: {{data.status==1 ? 'Active':'Inactive'}}</div>\r\n                        <div class=\"status\">   Status: Upcoming </div>\r\n                    </div>\r\n                </a>\r\n            \r\n                <div class=\"card-block-small p-0\" *ngIf=\"data.league_date < jstoday\">\r\n                    <div class=\"title\">  {{data.compitition_name}}</div>\r\n                    <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                        <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                    <div class=\"text-c-pink\">Total Participant: {{data.total_interest}}</div>\r\n                    <div class=\"status\">   Status: Completed </div>\r\n                </div>\r\n                <div class=\"card-block-small p-0\" *ngIf=\"data.league_date == jstoday\">\r\n                    <div class=\"title\">  {{data.compitition_name}}</div>\r\n                    <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                        <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                    <!-- <div class=\"text-c-pink\">Total Participant: 120</div> -->\r\n                    <div class=\"status\">   Status: Live </div>\r\n                </div>\r\n            </div>\r\n           </div>\r\n        </div>\r\n        </div>\r\n\r\n     </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/view/view-daily-competition.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/view/view-daily-competition.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"show\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-block\">\r\n                \r\n            <div class=\"dt-responsive table-responsive11\" *ngIf=\"route.endsWith('list')\"  >\r\n                <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12  col-md-6 mb-3\"> </div>\r\n                    <div class=\"col-xs-12  col-md-6 mb-3\">\r\n                    <div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n                        <label>Search\r\n                        <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                <thead>\r\n                <tr role=\"row\">\r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th> -->\r\n            \r\n                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('compitition_name')\">Title<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'compitition_name', 'fa-sort-asc': (column == 'compitition_name' && isDesc), 'fa-sort-desc': (column == 'compitition_name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('start_date')\">Start Date<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'start_date', 'fa-sort-asc': (column == 'start_date' && isDesc), 'fa-sort-desc': (column == 'start_date' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('created_at')\">Created Date<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'created_at', 'fa-sort-asc': (column == 'created_at' && isDesc), 'fa-sort-desc': (column == 'created_at' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('start_time')\">Start Time<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'start_time', 'fa-sort-asc': (column == 'start_time' && isDesc), 'fa-sort-desc': (column == 'start_time' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('end_time')\">End Time<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'end_time', 'fa-sort-asc': (column == 'end_time' && isDesc), 'fa-sort-desc': (column == 'end_time' && !isDesc) }\" aria-hidden=\"true\"> </i></th> -->\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> </th>\r\n                </thead>\r\n                <tbody>\r\n            \r\n            \r\n                <tr role=\"row\" *ngFor=\"let data of dailyList | filter: term : term2 | orderBy: {property: column, direction: direction} | paginate : {\r\n                    itemsPerPage: pageSize,\r\n                    currentPage: page,\r\n                    totalItems: count\r\n                  }; let index =index;\r\n                            let isOdd=odd;\r\n                            let isEven=even\" \r\n            \r\n                    [class.odd]=\"isOdd\" \r\n                    [class.even]=\"isEven\" >\r\n                <!-- <td class=\"\">{{ data.id }}</td> -->\r\n                <td class=\"sorting_1\"><a href=\"javascript:void(0);\" (click)=\"getDailyCompetition(data.id)\">{{ data.compitition_name }} </a></td>\r\n                <td class=\"\">{{ data.start_date | date }}</td>\r\n                <td class=\"\">{{ data.created_at | date}}</td>\r\n                <td><!-- {{ data.start_time }}  -->{{ data.start_date_time | date:\"hh:mm:ss a\":setOffset}}</td>\r\n                <!-- <td>{{ data.end_time }}</td> -->\r\n                <td>\r\n                    <!-- (click)=\"changeStatus(data)\" -->\r\n                <button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(1, data.id)\"> <i class=\"fa fa-times text-warning\"></i> UnApproved </button>\r\n                <button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(0, data.id)\"> <i class=\"fa fa-check allam-txt-green\"></i> Approved </button>\r\n            \r\n                </td>\r\n                <td class=\"categories\">\r\n                <!-- <a [routerLink]=\"['edit-category', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\" ></i></a> -->\r\n                    \r\n                <button *ngIf=\"data.league_date > jstoday\" type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(data.id)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\" ></i> </button>\r\n            \r\n                </td>\r\n                </tr>\r\n            \r\n                </tbody>\r\n            \r\n                </table>\r\n            \r\n                </div>\r\n            \r\n                </div></div>\r\n            \r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                      <div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n                        <label>\r\n                          <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n                            <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n                                {{ size }}\r\n                            </option>\r\n                          </select>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                      <pagination-controls\r\n                          previousLabel=\"Prev\"\r\n                          nextLabel=\"Next\"\r\n                          responsive=\"true\"\r\n                          class=\"pagination\"\r\n                          (pageChange)=\"handlePageChange($event)\"\r\n                        ></pagination-controls>   \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"dt-responsive table-responsive11\"  *ngIf=\"currentRoute=='/league/league-list/group'\">\r\n                tetetef\r\n            </div> -->\r\n            <ng-container *ngIf=\"route.endsWith('league-list/group')\">\r\n                show group\r\n                <button (click)=\"backLeagueList()\" class=\"btn allam-btn-green text-white nextBtn \" type=\"button\">Back</button>\r\n            </ng-container>\r\n            </div>\r\n        </div>\r\n        <!-- {{route | json}} -->\r\n        <!--  route is\r\n        <ng-container *ngIf=\"route.endsWith('league-list/group')\">group</ng-container>\r\n        <ng-container *ngIf=\"route.includes('league-list/list')\">show</ng-container> \r\n        <ng-container *ngIf=\"route.includes('list/update')\">show</ng-container> -->\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-fluid\" *ngIf=\"!show\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 Competitive-exam-wrap \">\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-7\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">Challenge Race</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\"> <!-- {{getCompetition | json}} -->\r\n                                <label class=\"control-label\">Description: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.description}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\">Name of the competition: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.compitition_name}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\">Competition Logo: </label>\r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group float-r\">\r\n                                    <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                                    <img [src]=\"preview \" [alt]=\"getCompetition.compitition_name\" height=\"150\" >\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n  \r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12\">\r\n                            <div class=\"dt-responsive table-responsive\">\r\n                                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                                <thead>\r\n                                    <tr>\r\n                                    <!-- <th width=\"10%\">Category</th> -->\r\n                                    <th width=\"10%\">Question</th>\r\n                                    <th width=\"10%\">Question File Url</th>\r\n                                    <th width=\"10%\">Answer</th>\r\n                                    <th width=\"10%\">Option 1</th>\r\n                                    <th width=\"10%\">Option 2</th>\r\n                                    <th width=\"10%\">Option 3</th>\r\n                                    <th width=\"10%\">Option 4</th>\r\n                                    <th width=\"10%\">Level</th>\r\n                                    <th width=\"10%\">Notes</th>\r\n                                    \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of getQuestion\">\r\n                                    <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n                                    <td width=\"10%\">{{ item.question_name }}</td>\r\n                                    <td width=\"10%\">{{ item.question_file_url }}</td>\r\n                                    <td width=\"10%\">{{ item.answer }}</td>\r\n                                    <td width=\"10%\">{{ item.option1 }}</td>\r\n                                    <td width=\"10%\">{{ item.option2 }}</td>\r\n                                    <td width=\"10%\">{{ item.option3 }}</td>\r\n                                    <td width=\"10%\">{{ item.option4 }}</td>\r\n                                    <td width=\"10%\">{{ item.level }}</td>\r\n                                    <td width=\"10%\">{{ item.note }}</td>\r\n                                    \r\n                                    </tr>\r\n                                </tbody>\r\n                                </table>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Start Date: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.start_date | date}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Start Time: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.start_time}}</div>\r\n                            </div>\r\n  \r\n                            <!-- <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">End Date: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.end_date}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">End Time: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.end_ime}}</div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\" *ngIf=\"getCompetition.promotion_type=='1'\">\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Promotion Option: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.promotion_type=='1' ? 'Social Media' : ''}} </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Instagram URL: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.instragramUrl}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Twitter URL: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.twitterUrl}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Snapchat URL: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.snapchatUrl}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"getCompetition.promotion_type=='2'\">\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Promotion Option: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.promotion_type=='2' ? 'Download' : ''}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">App Logo: </label>\r\n                                \r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"preview\" *ngIf=\"appLogo && appLogo !== null\">\r\n                                      <img [src]=\"appLogo\" [alt]=\"getCompetition.app_name\" height=\"150\" >\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">App Name: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.app_name}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Apple store URL: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.apple_store_url}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Google play URL: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.google_play_url}}</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"getCompetition.promotion_type=='3'\">\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Promotion Option: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.promotion_type=='3' ? 'Affiliate' : ''}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Affiliate Code: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.affiliate_url}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\" *ngIf=\"getNarration.narration_type=='narration'\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Narration option: </label>\r\n                                <div class=\"control-label\"> {{getNarration.narration_type}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Narration URL: </label>\r\n                                <div class=\"control-label\"> {{getNarration.narration_url}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Narration Text: </label>\r\n                                <div class=\"control-label\">  {{getNarration.narration_text}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Narration Time: </label>\r\n                                <div class=\"control-label\">  {{getNarration.narration_time}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                \r\n                                \r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group float-r\">\r\n                                    <label class=\"control-label\">Company logo: </label>\r\n                                    <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n                                      <img [src]=\"companyLogo\" [alt]=\"getNarration.app_name\" height=\"150\" >\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company Name: </label>\r\n                                <div class=\"control-label\">  {{getNarration.company_name}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company link: </label>\r\n                                <div class=\"control-label\">  {{getNarration.company_link}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company about: </label>\r\n                                <div class=\"control-label\">  {{getNarration.company_about}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"getNarration.narration_type=='live_stareaming'\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Promotion Option: </label>\r\n                                <div class=\"control-label\"> {{getNarration.narration_type}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Live Stream URL: </label>\r\n                                <div class=\"control-label\"> {{getNarration.live_stream_url}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\">Gender: </label>\r\n                                <div class=\"control-label\"> {{setAudience.gender}}</div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">State: </label>\r\n                                <div class=\"control-label\"> {{setAudience.state}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Area locality: </label>\r\n                                <div class=\"control-label\"> {{setAudience.area_locality}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                        \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Age Range: </label>\r\n                                <div class=\"control-label\"> {{setAudience.age_range}}</div>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">City: </label>\r\n                                <div class=\"control-label\"> {{setAudience.city}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Nationality: </label>\r\n                                <div class=\"control-label\"> {{setAudience.nationality}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n  \r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Country: </label>\r\n                                <div class=\"control-label\"> {{setAudience.country}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"control-label\">Push Notification: </label>\r\n                                <div class=\"control-label\"> {{setAudience.push_notification}}</div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Audience description: </label>\r\n                                <div class=\"control-label\"> {{setAudience.audience_description}}</div>\r\n                                </div>\r\n                            </div>\r\n  \r\n                        </div>\r\n                        \r\n  \r\n  \r\n  \r\n                        <div class=\"row\">\r\n                            \r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Title: </label>\r\n                                <div class=\"control-label\"> {{setAudience.title}}</div>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <div class=\"col-md-6\">\r\n                                \r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group float-r\">\r\n                                    <label class=\"control-label\">Image upload: </label>\r\n                                    <div class=\"preview\" *ngIf=\"audienceLogo && audienceLogo !== null\">\r\n                                    <img [src]=\"audienceLogo\"  height=\"200\" >\r\n                                    </div>\r\n                                </div>\r\n  \r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n  \r\n                    <div class=\"row\"> \r\n                        <div class=\"col-sm-12 col-md-12 \"> \r\n                            <!-- <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\" (click)=\"changeStatus(1, getCompetition.id)\">{{getCompetition.status == 1 ? 'UnApproved': 'Approved!'}} </button> -->\r\n                            <button *ngIf=\"getStatus!='1'\" class=\"btn allam-status-btn btn allam-btn-green text-white nextBtn pull-right ml-4\" (click)=\"changeStatus(1, getCompetition.id)\"> UnApproved </button>\r\n                            <button *ngIf=\"getStatus=='1'\" class=\"btn allam-status-btn btn allam-btn-green text-white nextBtn pull-right ml-4\" (click)=\"changeStatus(0, getCompetition.id)\"> Approved </button>\r\n                            <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\" (click)=\"goBack()\">Back</button>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multi-step-form/multi-step-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multi-step-form/multi-step-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <!-- <h1 class=\"form-heading\">{{ stepItems[activeStepIndex].label }}</h1> {{activeStepIndex}}\r\n  <ul>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 0, 'active1': activeStepIndex >= 0}\" >1</a></li>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 1, 'active1': activeStepIndex >= 1}\" >2</a></li>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 2, 'active1': activeStepIndex >= 2}\">3</a></li>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 3, 'active1': activeStepIndex >= 3}\">4</a></li>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 4,'active1': activeStepIndex >= 4}\">5</a></li>\r\n  <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 5, 'active1': activeStepIndex >= 5}\">6</a></li>\r\n</ul> -->\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block allam-wrap\">\r\n              <div class=\"dt-responsive table-responsive11\">\r\n                <div id=\" \" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                  <div class=\"formtab-stepbystep\">\r\n                    <ul> {{activeStepIndex}}\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 0, 'active1': activeStepIndex >= 0}\" >1</a></li>\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 1, 'active1': activeStepIndex >= 1}\" >2</a></li>\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 2, 'active1': activeStepIndex >= 2}\">3</a></li>\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 3, 'active1': activeStepIndex >= 3}\">4</a></li>\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 4,'active1': activeStepIndex >= 4}\">5</a></li>\r\n                      <li><a href=\"#\" [ngClass]=\"{'active': activeStepIndex == 5, 'active1': activeStepIndex >= 5}\">6</a></li>\r\n                    </ul>\r\n                  </div>\r\n                  <hr>\r\n\r\n  <ng-container\r\n    *ngFor=\"let form of masterForm; let i = index; trackBy: trackByFn\"\r\n  >\r\n    <form\r\n      action=\"\"\r\n      [formGroup]=\"masterForm[i]\"\r\n      *ngIf=\"i === activeStepIndex || masterForm.length === 1\"\r\n    >\r\n        <ng-container>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 pb-4\"> \r\n                    <h4 class=\"text-left txt-primary\">Create New Daily Competition</h4>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-3 \"> \r\n                      <div class=\"competition-logo-upload\">\r\n                        Competition Logo Uplaod\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12 col-md-8 \"> \r\n                      \r\n                      <div class=\"group m-b-15\">\r\n                        <label>Name of the competition</label>\r\n                        <input class=\"form-control ng-pristine ng-valid ng-touched\" name=\"title\" placeholder=\" \" type=\"text\" ng-reflect-name=\"title\">\r\n                      </div>\r\n\r\n                      <div class=\"group  m-b-15\">\r\n                        <label>Description</label>\r\n                        <textarea class=\"form-control ng-untouched ng-pristine ng-valid\" cols=\"5\" name=\"description\" placeholder=\"Default textarea\" rows=\"5\" ng-reflect-name=\"description\"></textarea>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"group color m-b-15\">\r\n                        <label>Upload Your File </label>\r\n                        <input type=\"file\" class=\"form-control choosefiles\">\r\n                      </div>\r\n                      <div class=\"group m-b-15\">\r\n                        Please upload a zip file which contains subfolders for Images\r\n                        and Videos. The image file type should be .png / .jpg / .jpeg\r\n                        and the video file type should be .mp4. The images and\r\n                        videos should be placed in their designated folders.\r\n                        </div>\r\n                        <!---\r\n                        <div class=\"group  files color m-b-15\" style=\"display: block;\">\r\n                          <label>Upload Your File </label>\r\n                          <input class=\"form-control\" multiple=\"\" type=\"file\">\r\n                        </div>\r\n                        -->\r\n\r\n                        <div class=\"group m-b-15\">\r\n                          <label>Upload Your File </label>\r\n                          <input type=\"file\" class=\"form-control choosefiles\">\r\n                        </div>\r\n                        <div class=\"group m-b-15\">\r\n                         <img src=\"assets/images/sample-quiz-icon.png\">\r\n                         Sample Quiz\r\n                        </div>\r\n\r\n\r\n                        <div class=\"group m-b-15\">\r\n                          <button class=\"btn allam-btn-green text-white round-border create_cancel\" type=\"button\">Next</button>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                  </div>\r\n        </ng-container>\r\n                \r\n\r\n      <div class=\"\">\r\n        <div class=\"fields-container\"> {{formFields}}\r\n          <div \r\n            *ngFor=\"let field of formFields[i]; trackBy: trackByFn\"\r\n            [ngSwitch]=\"currentFormContent[i][field].type\"\r\n          >\r\n            <div class=\"full-width\">\r\n              <label class=\"field-label text-bold\" [for]=\"field\">{{ field | formatTitle }}</label>\r\n\r\n              <ng-container *ngSwitchCase=\"'textarea'\">\r\n                <textarea\r\n                  [id]=\"field\"\r\n                  [formControlName]=\"field\"\r\n                  [placeholder]=\"currentFormContent[i][field].placeholder\"></textarea>\r\n              </ng-container>\r\n\r\n              <ng-container *ngSwitchCase=\"'select'\">\r\n                <select [formControlName]=\"field\" [id]=\"field\">\r\n                  <option value=\"\">Select your Country</option>\r\n                  <option\r\n                    *ngFor=\"let option of currentFormContent[i][field].options; trackBy: trackByFn\"\r\n                    [value]=\"option.name\"\r\n                    >{{ option.name }}</option>\r\n                </select>\r\n              </ng-container>\r\n\r\n              <ng-container *ngSwitchDefault>\r\n                <input\r\n                  [type]=\"currentFormContent[i][field].type\"\r\n                  [formControlName]=\"field\"\r\n                  [id]=\"field\"\r\n                  [placeholder]=\"currentFormContent[i][field].placeholder\"\r\n                />\r\n              </ng-container>\r\n            </div>\r\n\r\n            <p\r\n              class=\"validation-error\"\r\n              *ngIf=\"\r\n                (masterForm[i].get(field).dirty ||\r\n                  masterForm[i].get(field).touched) &&\r\n                masterForm[i].get(field).invalid &&\r\n                masterForm[i].get(field).errors\r\n              \"\r\n            >\r\n              {{ getValidationMessage(i, field) }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"preview-container\"\r\n          *ngIf=\"activeStepIndex === stepItems.length - 1\">\r\n          <ul>\r\n            <li\r\n              class=\"form-details-list\"\r\n              *ngFor=\"let field of masterFormFields; trackBy: trackByFn\">\r\n              <span class=\"text-bold\">{{ field | formatTitle }}</span>\r\n              <span>{{ formData[field] || 'N/A' }}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"button-container\">\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"!activeStepIndex\"\r\n            (click)=\"goToStep('prev')\"\r\n          >Previous</button>\r\n          <button\r\n            *ngIf=\"activeStepIndex === stepItems.length - 1\"\r\n            type=\"button\"\r\n            (click)=\"onFormSubmit()\"\r\n          >Submit</button>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"activeStepIndex === stepItems.length - 1 || masterForm[i].invalid\"\r\n            (click)=\"goToStep('next')\"\r\n          >Next</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n</div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n");

/***/ }),

/***/ "./src/app/pages/daily-competition/account-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/daily-competition/account-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");






//import { FileRestrictions } from '@progress/kendo-angular-upload';
var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var AccountDetailsComponent = /** @class */ (function () {
    function AccountDetailsComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.currentStep = 0;
    }
    //@Output() public uploadedFiles = new EventEmitter<any>();
    AccountDetailsComponent.prototype.fileChange = function (element) {
        if (typeof (this.uploadedFiles) == "undefined") {
            this.uploadedFiles = new Array();
            this.uploadedFiles.push(element.target.files[0]);
        }
        else {
            this.uploadedFiles.push(element.target.files[0]);
        }
        //console.log(this.uploadedFiles);
    };
    AccountDetailsComponent.prototype.ngOnInit = function () {
    };
    AccountDetailsComponent.prototype.upload = function () {
        var _this = this;
        //debugger;
        /*if(typeof(this.selectedCategory)=="undefined" || this.selectedCategory==""){
          alert("Category is required!");
          return;
        }
        if(typeof(this.selectedSubCategory)=="undefined" || this.selectedSubCategory==""){
          alert("Sub Category is required!");
          return;
        }
        if(typeof(this.selectedLanguage)=="undefined" || this.selectedLanguage==""){
          alert("Language is required!");
          return;
        }*/
        //console.log('fileChange');
        //console.log(this.uploadedFiles);
        //console.log('End fileChange');
        var formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl + 'competition/api/upload', formData)
            .subscribe(function (response) {
            _this.isProcessed = true;
            if (response["error_code"] == 2) {
                _this.isError = true;
                _this.errorData = response["data"];
            }
            else if (response["error_code"] == 0) {
                //this.errorData = response["data"];
                _this.fileData = response["data"];
                //console.log(this.fileData);
                //this.dataService.setEvent(response["data"])
                _this.passDataToService(_this.fileData);
                //this.dataService.setData(this.fileData);
                _this.isError = false;
            }
            console.log('response receved is ', response);
        });
    };
    //passObjects : any[] = [{'name': 'John', 'city': 'paris'},{'name': 'Bob', 'city': 'london'}, {'name': 'Grim', 'city': 'paris'}];
    /*passDataToService() { console.log("fileData "+this.fileData);
       //this.dataService.allPassedData.next(this.fileData); // here you emit the objects
       //this.dataService.storePassedObject(this.fileData);
      }*/
    AccountDetailsComponent.prototype.passDataToService = function (filearray) {
        this.dataService.storePassedObject(filearray); // here you emit   the objects 
    };
    AccountDetailsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_5__["DcService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], AccountDetailsComponent.prototype, "accountDetails", void 0);
    AccountDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'account-details',
            template: "\n        <ng-container [formGroup]=\"accountDetails\">\n            <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3 \"> \n                      <div class=\"competition-logo-upload\">\n                        Competition Logo Uplaod\n                        </div>\n                        <input type=\"file\" class=\"form-control choosefiles\" formControlName=\"logo\">\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-8 \"> \n                      \n                      <div class=\"group m-b-15\">\n                        <label>Name of the competition</label>\n                        <input class=\"form-control\" formControlName=\"competitionName\" placeholder=\" \" type=\"text\" >\n                      </div>\n\n                      <div class=\"group  m-b-15\">\n                        <label>Description</label>\n                        <textarea class=\"form-control\" cols=\"5\" formControlName=\"description\" placeholder=\"Default textarea\" rows=\"5\"></textarea>\n                      </div>\n\n                       <div class=\"group m-b-15\">\n                          <label>Upload Your File </label>\n                          <input (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\">\n                        </div>\n                        <div class=\"group m-b-15\">\n                         <!-- <img src=\"assets/images/sample-quiz-icon.png\"> -->\n                         Sample Quiz\n                        </div>\n\n                      <div class=\"group color m-b-15\">\n                        <label>Upload Your File </label>\n                        <input (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\">\n                      </div>\n                      <div class=\"group m-b-15\">\n                        Please upload a zip file which contains subfolders for Images\n                        and Videos. The image file type should be .png / .jpg / .jpeg\n                        and the video file type should be .mp4. The images and\n                        videos should be placed in their designated folders.\n                        </div>\n                        <!---\n                        <div class=\"group  files color m-b-15\" style=\"display: block;\">\n                          <label>Upload Your File </label>\n                          <input class=\"form-control\" multiple=\"\" type=\"file\">\n                        </div>\n                        -->\n\n                       \n\n                        <div class=\"col-md-4\">\n                          <div class=\"input-group-prepend text-center\">\n                            <button class=\"input-group-text upload\" (click)=\"upload()\" id=\"btnUpload\">Upload</button>\n                          </div>\n                          <div *ngIf='response && response[\"error_code\"] == 0'>{{response[\"err_desc\"]}}</div>\n                        </div>\n                    </div>\n                  </div>\n      </ng-container>\n    ",
            providers: [_services_dc_service__WEBPACK_IMPORTED_MODULE_5__["DcService"]] // inject in module for singleton instance
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_dc_service__WEBPACK_IMPORTED_MODULE_5__["DcService"]])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/daily-competition-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/daily-competition/daily-competition-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DailyCompetitionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyCompetitionRoutingModule", function() { return DailyCompetitionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _daily_competition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-competition.component */ "./src/app/pages/daily-competition/daily-competition.component.ts");
/* harmony import */ var _list_list_daily_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-daily.component */ "./src/app/pages/daily-competition/list/list-daily.component.ts");
/* harmony import */ var _edit_edit_daily_competition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-daily-competition.component */ "./src/app/pages/daily-competition/edit/edit-daily-competition.component.ts");
/* harmony import */ var _view_view_daily_competition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view-daily-competition.component */ "./src/app/pages/daily-competition/view/view-daily-competition.component.ts");







var routes = [
    {
        path: 'add',
        component: _daily_competition_component__WEBPACK_IMPORTED_MODULE_3__["DailyCompetitionComponent"],
        data: {
            breadcrumb: 'daily-competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: '',
        component: _list_list_daily_component__WEBPACK_IMPORTED_MODULE_4__["ListDailyComponent"],
        data: {
            breadcrumb: 'daily-list',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'edit/:id',
        component: _edit_edit_daily_competition_component__WEBPACK_IMPORTED_MODULE_5__["EditDailyCompetitionComponent"],
        data: {
            breadcrumb: 'daily-edit',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'list',
        component: _view_view_daily_competition_component__WEBPACK_IMPORTED_MODULE_6__["ViewDailyCompetitionComponent"],
        data: {
            breadcrumb: 'daily-view',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        },
        children: [
            //{ path: 'group', component: ListLeagueComponent, data: { viewOption: 'group', breadcrumb:'Grouping', status: false } },
            //{ path: 'list', component: ListLeagueComponent, data: { viewOption: 'list', breadcrumb:'List', status: false } },
            { path: 'update/:id', component: _view_view_daily_competition_component__WEBPACK_IMPORTED_MODULE_6__["ViewDailyCompetitionComponent"], data: { viewOption: 'update' } },
        ]
    }
];
var DailyCompetitionRoutingModule = /** @class */ (function () {
    function DailyCompetitionRoutingModule() {
    }
    DailyCompetitionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DailyCompetitionRoutingModule);
    return DailyCompetitionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/daily-competition.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/daily-competition/daily-competition.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Latest compiled and minified CSS included as External Resource*/\n/* Optional theme */\n/*@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css');*/\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: 0;\n}\n.daily-competition-wrap {\n  text-align: right !important;\n  font-size: 14px;\n  color: #353c4e;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #949494;\n  border-color: #949494;\n}\n#btnUpload {\n  border: 0px;\n}\n.stepwizard-step p {\n  margin-top: 0px;\n  color: #666;\n}\n.stepwizard-row {\n  display: table-row;\n}\n.stepwizard {\n  display: table;\n  margin-bottom: 25px;\n  width: 100%;\n  position: relative;\n}\n.stepwizard-step button[disabled] {\n  /*opacity: 1 !important;\n  filter: alpha(opacity=100) !important;*/\n}\n.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {\n  opacity: 1 !important;\n  color: #bbb;\n}\n.stepwizard-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc;\n  z-index: 0;\n  left: 0;\n}\n.stepwizard-step {\n  display: table-cell;\n  text-align: center;\n  position: relative;\n}\n.btn-success:not(:disabled):not(.disabled).active,\n.btn-success:not(:disabled):not(.disabled):active,\n.show > .btn-success.dropdown-toggle {\n  background-color: #00a39d;\n  border-color: #00a39d;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.active {\n  background-color: #2be0d5;\n  color: #fff;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.formtab-stepbystep {\n  overflow: auto;\n}\n.formtab-stepbystep ul li {\n  float: left;\n  width: 14.1%;\n  position: relative;\n}\n.formtab-stepbystep ul li a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  text-align: center;\n  font-size: 18px;\n  line-height: 37px;\n  position: relative;\n  z-index: 1;\n  color: #353c4e;\n  background: #fff;\n  border: solid 1px #18BBB1;\n}\n.formtab-stepbystep ul li a.active {\n  background-color: #18BBB1;\n  color: #fff;\n}\n.formtab-stepbystep ul li:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  background: #18BBB1;\n  width: 100%;\n  top: 20px;\n}\n.download-list {\n  float: right;\n}\n.set-promotion-wrap {\n  padding: 30px 0 40px;\n}\n.set-promotion-wrap select, option {\n  text-align: right;\n}\n.set-promotion-wrap select {\n  background: #f1f1f1;\n}\n.set-promotion-wrap .set-promotion ul li input[type=text], .set-narration-wrap input[type=text], .set-narration-wrap input[type=number], .set-narration-wrap textarea {\n  text-align: right;\n}\n.set-promotion-wrap .set-promotion ul li input[type=file] {\n  direction: rtl;\n}\n.set-promotion-wrap .set-promotion ul li {\n  margin-bottom: 4px;\n}\n.set-narration-wrap {\n  text-align: right;\n}\n.set-narration-wrap textarea {\n  resize: none;\n}\n.set-narration-wrap .narration-url {\n  margin-bottom: 40px;\n  position: relative;\n}\n.set-narration-wrap .narration-url:after {\n  content: \"OR\";\n  position: absolute;\n  bottom: -40px;\n  left: 46%;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.set-narration-wrap .company-logo-place {\n  height: 151px;\n}\n.live-streaming-wrap {\n  padding: 20px 0 10px;\n}\ninput, input[type=text], textarea, select {\n  text-align: right;\n  direction: rtl;\n  resize: none;\n}\n.daily-competition-wrap .nextBtn, .daily-competition-wrap .prevBtn {\n  width: 72px;\n}\n.form-control.select2.ng-valid.ng-dirty.ng-touched,\n.form-control.select2.ng-untouched.ng-pristine.ng-valid,\n.form-control.select2.ng-pristine.ng-valid.ng-touched {\n  margin-bottom: 20px;\n  background: #f1f0f0;\n  height: 40px;\n}\n.or-wrap {\n  position: relative;\n  padding-bottom: 30px;\n}\n.or-txt {\n  padding: 7px 8px;\n  position: absolute;\n  border-radius: 50%;\n  left: 49%;\n  bottom: 6px;\n  border: solid 1px #a5a5a5;\n}\n.narration-text-h {\n  height: 75px;\n}\n.company-logo-area {\n  width: 100%;\n  height: 155px;\n  padding: 60px 10px 10px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n}\n.company-logo-area input {\n  height: 155px;\n  opacity: 0;\n  position: absolute;\n  top: 26px;\n  left: 16px;\n  width: 92%;\n}\n.send-push input[type=radio] {\n  margin: 0 5px;\n}\n.table-bordered td, .table-bordered th {\n  border: 1px solid #dee2e6 !important;\n}\n.sucessful {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n#step-7 img {\n  max-width: 100px !important;\n  height: 100px !important;\n}\n.slot-details-wrap span {\n  width: 65px;\n  display: inline-block;\n}\n.btn:active, .btn.active {\n  box-shadow: none !important;\n}\n.invalid-feedback {\n  display: block !important;\n}\n.sdtime input[type=text] {\n  height: 40px;\n}\n.competition-logo-upload > .choosefiles:after {\n  top: 30%;\n  right: revert;\n  left: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGRhaWx5LWNvbXBldGl0aW9uXFxkYWlseS1jb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vZGFpbHktY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQUE7QUFFQSxtQkFBQTtBQUVBLHdGQUFBO0FBQ0E7RUFFSSxVQUFBO0FDRko7QURJQTtFQUNHLDRCQUFBO0VBQTZCLGVBQUE7RUFBaUIsY0FBQTtBQ0NqRDtBRENBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNFSjtBREFBO0VBQVksV0FBQTtBQ0laO0FESEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ01KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FETEE7RUFDSSxjQUFBO0VBQWdCLG1CQUFBO0VBQ2hCLFdBQUE7RUFDQSxrQkFBQTtBQ1NKO0FETkE7RUFDSTt5Q0FBQTtBQ1VKO0FEUEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNVSjtBRFJBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUFZLE9BQUE7QUNZaEI7QURWQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2FKO0FEVEE7OztFQUVxQyx5QkFBQTtFQUEwQixxQkFBQTtBQ2MvRDtBRFhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ2NKO0FEWkE7RUFBUyx5QkFBQTtFQUEwQixXQUFBO0FDaUJuQztBRGhCQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDbUJKO0FEWkE7RUFBcUIsY0FBQTtBQ2dCckI7QURmQTtFQUEyQixXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0FDcUJwRDtBRHBCQTtFQUE4QixXQUFBO0VBQWEsWUFBQTtFQUFhLGtCQUFBO0VBQ3RELGNBQUE7RUFBZ0IsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsaUJBQUE7RUFBa0Isa0JBQUE7RUFDckYsVUFBQTtFQUFZLGNBQUE7RUFBZSxnQkFBQTtFQUFpQix5QkFBQTtBQ2tDOUM7QURqQ0U7RUFBb0MseUJBQUE7RUFBMEIsV0FBQTtBQ3NDaEU7QURyQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3dDSjtBRG5DQTtFQUFpQixZQUFBO0FDdUNqQjtBRHJDQTtFQUFzQixvQkFBQTtBQ3lDdEI7QUR4Q0E7RUFBb0MsaUJBQUE7QUM0Q3BDO0FEM0NBO0VBQTRCLG1CQUFBO0FDK0M1QjtBRDlDQTtFQUE4SyxpQkFBQTtBQ2tEOUs7QURqREE7RUFBOEQsY0FBQTtBQ3FEOUQ7QURwREE7RUFBMEMsa0JBQUE7QUN3RDFDO0FEckRBO0VBQXNCLGlCQUFBO0FDeUR0QjtBRHhEQTtFQUErQixZQUFBO0FDNEQvQjtBRDNEQTtFQUFvQyxtQkFBQTtFQUFvQixrQkFBQTtBQ2dFeEQ7QUQvREE7RUFBMEMsYUFBQTtFQUFjLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxTQUFBO0VBQVUsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixlQUFBO0FDNEVsTDtBRDFFQTtFQUEwQyxhQUFBO0FDOEUxQztBRDdFQTtFQUF1QixvQkFBQTtBQ2lGdkI7QUQvRUE7RUFDSSxpQkFBQTtFQUFtQixjQUFBO0VBQ25CLFlBQUE7QUNtRko7QURoRkE7RUFBcUUsV0FBQTtBQ29GckU7QURuRkE7OztFQUdHLG1CQUFBO0VBQXFCLG1CQUFBO0VBQXFCLFlBQUE7QUN3RjdDO0FEdkZBO0VBQVcsa0JBQUE7RUFBb0Isb0JBQUE7QUM0Ri9CO0FEM0ZBO0VBQVMsZ0JBQUE7RUFBa0Isa0JBQUE7RUFDdkIsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDZ0dKO0FENUZBO0VBQW9CLFlBQUE7QUNnR3BCO0FEL0ZBO0VBQXFCLFdBQUE7RUFBYSxhQUFBO0VBQWUsdUJBQUE7RUFDN0Msc0JBQUE7RUFDQSxrQkFBQTtBQ3FHSjtBRHBHQTtFQUEwQixhQUFBO0VBQ3RCLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ3dHSjtBRHRHQTtFQUFpQyxhQUFBO0FDMEdqQztBRHpHQTtFQUF3QyxvQ0FBQTtBQzZHeEM7QUQzR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUM4R0o7QUQxR0E7RUFBVSxxQ0FBQTtBQzhHVjtBRDdHQTtFQUF1QyxtQkFBQTtFQUFxQixxQ0FBQTtFQUFtQyxhQUFBO0FDbUgvRjtBRGxIQTtFQUFxQixtQkFBQTtBQ3NIckI7QURySEE7RUFBYywyQkFBQTtFQUEyQix3QkFBQTtBQzBIekM7QUR2SEE7RUFBMEIsV0FBQTtFQUFhLHFCQUFBO0FDNEh2QztBRDNIQTtFQUEwQiwyQkFBQTtBQytIMUI7QUQ3SEE7RUFDSSx5QkFBQTtBQ2dJSjtBRDNIQTtFQUEwQixZQUFBO0FDK0gxQjtBRDVIQTtFQUErQyxRQUFBO0VBQVUsYUFBQTtFQUFlLFVBQUE7QUNrSXhFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vZGFpbHktY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTUyBpbmNsdWRlZCBhcyBFeHRlcm5hbCBSZXNvdXJjZSovXHJcblxyXG4vKiBPcHRpb25hbCB0aGVtZSAqL1xyXG5cclxuLypAaW1wb3J0IHVybCgnLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzJyk7Ki9cclxuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmZvY3VzLCAuYnRuOmFjdGl2ZS5mb2N1cywgLmJ0bi5hY3RpdmUuZm9jdXN7XHJcblxyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCB7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzM1M2M0ZTtcclxufVxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM5NDk0OTQ7XHJcbn1cclxuI2J0blVwbG9hZCB7Ym9yZGVyOjBweDt9XHJcbi5zdGVwd2l6YXJkLXN0ZXAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjojNjY2O1xyXG59XHJcbi5zdGVwd2l6YXJkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnN0ZXB3aXphcmQge1xyXG4gICAgZGlzcGxheTogdGFibGU7IG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0ZXB3aXphcmQtc3RlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgIC8qb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCkgIWltcG9ydGFudDsqL1xyXG59XHJcbi5zdGVwd2l6YXJkIC5idG4uZGlzYWJsZWQsIC5zdGVwd2l6YXJkIC5idG5bZGlzYWJsZWRdLCAuc3RlcHdpemFyZCBmaWVsZHNldFtkaXNhYmxlZF0gLmJ0biB7XHJcbiAgICBvcGFjaXR5OjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNiYmI7XHJcbn1cclxuLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OlwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICB6LWluZGV4OiAwOyBsZWZ0OiAwO1xyXG59XHJcbi5zdGVwd2l6YXJkLXN0ZXAge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIFxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCBcclxuLnNob3c+LmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7IGJhY2tncm91bmQtY29sb3I6IzAwYTM5ZDsgYm9yZGVyLWNvbG9yOiMwMGEzOWQ7IH1cclxuXHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiMyYmUwZDU7IGNvbG9yOiNmZmY7fVxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHtvdmVyZmxvdzogYXV0bzt9XHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkge2Zsb2F0OmxlZnQ7IHdpZHRoOjE0LjElOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYSB7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6NDBweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDozN3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTsgY29sb3I6IzM1M2M0ZTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXI6c29saWQgMXB4ICMxOEJCQjE7fVxyXG4gIC5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYS5hY3RpdmUge2JhY2tncm91bmQtY29sb3I6IzE4QkJCMTsgY29sb3I6I2ZmZjt9XHJcbiAgLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMxOEJCQjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMjBweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG4uZG93bmxvYWQtbGlzdCB7IGZsb2F0OnJpZ2h0O31cclxuXHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgeyBwYWRkaW5nOjMwcHggMCA0MHB4fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCwgb3B0aW9uIHt0ZXh0LWFsaWduOnJpZ2h0OyAgIH1cclxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3Qge2JhY2tncm91bmQ6ICNmMWYxZjE7fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIC5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT1cImZpbGVcIl0geyBkaXJlY3Rpb246IHJ0bDsgfVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIHttYXJnaW4tYm90dG9tOjRweDt9XHJcblxyXG5cclxuLnNldC1uYXJyYXRpb24td3JhcCB7IHRleHQtYWxpZ246IHJpZ2h0O31cclxuLnNldC1uYXJyYXRpb24td3JhcCB0ZXh0YXJlYSB7IHJlc2l6ZTogbm9uZTt9XHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmwge21hcmdpbi1ib3R0b206NDBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxyXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsOmFmdGVyIHtjb250ZW50OidPUic7IHBvc2l0aW9uOmFic29sdXRlOyBib3R0b206LTQwcHg7IGxlZnQ6NDYlOyB3aWR0aDo0MHB4OyBoZWlnaHQ6NDBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjQwcHg7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOiAxOHB4O31cclxuXHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLmNvbXBhbnktbG9nby1wbGFjZSB7IGhlaWdodDoxNTFweDsgfVxyXG4ubGl2ZS1zdHJlYW1pbmctd3JhcCB7IHBhZGRpbmc6MjBweCAwIDEwcHggfVxyXG5cclxuaW5wdXQsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAgLm5leHRCdG4sIC5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5wcmV2QnRuIHsgd2lkdGg6NzJweDt9XHJcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy12YWxpZC5uZy1kaXJ0eS5uZy10b3VjaGVkLCBcclxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCwgXHJcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy1wcmlzdGluZS5uZy12YWxpZC5uZy10b3VjaGVkXHJcbiB7IG1hcmdpbi1ib3R0b206IDIwcHg7IGJhY2tncm91bmQ6ICNmMWYwZjA7IGhlaWdodDogNDBweDt9XHJcbi5vci13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogMzBweDt9XHJcbi5vci10eHQge3BhZGRpbmc6IDdweCA4cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IDQ5JTtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2E1YTVhNTtcclxuXHJcbn1cclxuXHJcbi5uYXJyYXRpb24tdGV4dC1oIHsgaGVpZ2h0OiA3NXB4O31cclxuLmNvbXBhbnktbG9nby1hcmVhIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTU1cHg7IHBhZGRpbmc6IDYwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDt9XHJcbi5jb21wYW55LWxvZ28tYXJlYSBpbnB1dCB7aGVpZ2h0OiAxNTVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDkyJTt9XHJcblxyXG4uc2VuZC1wdXNoIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7IG1hcmdpbjogMCA1cHg7IH1cclxuLnRhYmxlLWJvcmRlcmVkIHRkLCAudGFibGUtYm9yZGVyZWQgdGgge2JvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O31cclxuXHJcbi5zdWNlc3NmdWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcbi5ncmF5LWJnIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7fVxyXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHttYXJnaW4tYm90dG9tOiAyNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7IHBhZGRpbmc6IDEwcHg7fVxyXG4jc3RlcC03IC5mb3JtLWdyb3VwIHttYXJnaW4tYm90dG9tOiAyNXB4O31cclxuI3N0ZXAtNyBpbWcgeyBtYXgtd2lkdGg6MTAwcHghaW1wb3J0YW50OyBoZWlnaHQ6MTAwcHghaW1wb3J0YW50O31cclxuXHJcblxyXG4uc2xvdC1kZXRhaWxzLXdyYXAgc3BhbiB7IHdpZHRoOiA2NXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUge2JveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O31cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnNkdGltZSBpbnB1dFt0eXBlPXRleHRdIHtoZWlnaHQ6NDBweDt9XHJcblxyXG5cclxuLmNvbXBldGl0aW9uLWxvZ28tdXBsb2FkID4gLmNob29zZWZpbGVzOmFmdGVyIHt0b3A6IDMwJTsgcmlnaHQ6IHJldmVydDsgbGVmdDogNTVweDt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyogTGF0ZXN0IGNvbXBpbGVkIGFuZCBtaW5pZmllZCBDU1MgaW5jbHVkZWQgYXMgRXh0ZXJuYWwgUmVzb3VyY2UqL1xuLyogT3B0aW9uYWwgdGhlbWUgKi9cbi8qQGltcG9ydCB1cmwoJy8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMC4wL2Nzcy9ib290c3RyYXAtdGhlbWUubWluLmNzcycpOyovXG4uYnRuOmZvY3VzLCAuYnRuOmFjdGl2ZTpmb2N1cywgLmJ0bi5hY3RpdmU6Zm9jdXMsIC5idG4uZm9jdXMsIC5idG46YWN0aXZlLmZvY3VzLCAuYnRuLmFjdGl2ZS5mb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5kYWlseS1jb21wZXRpdGlvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzM1M2M0ZTtcbn1cblxuLnBhbmVsLXByaW1hcnkgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xuICBib3JkZXItY29sb3I6ICM5NDk0OTQ7XG59XG5cbiNidG5VcGxvYWQge1xuICBib3JkZXI6IDBweDtcbn1cblxuLnN0ZXB3aXphcmQtc3RlcCBwIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnN0ZXB3aXphcmQtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uc3RlcHdpemFyZCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RlcHdpemFyZC1zdGVwIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAvKm9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCkgIWltcG9ydGFudDsqL1xufVxuXG4uc3RlcHdpemFyZCAuYnRuLmRpc2FibGVkLCAuc3RlcHdpemFyZCAuYnRuW2Rpc2FibGVkXSwgLnN0ZXB3aXphcmQgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYmJiO1xufVxuXG4uc3RlcHdpemFyZC1yb3c6YmVmb3JlIHtcbiAgdG9wOiAxNHB4O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnN0ZXB3aXphcmQtc3RlcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLmJ0bi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEzOWQ7XG4gIGJvcmRlci1jb2xvcjogIzAwYTM5ZDtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmUwZDU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTQuMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaSBhIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICMzNTNjNGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMxOEJCQjE7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThCQkIxO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMxOEJCQjE7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDIwcHg7XG59XG5cbi5kb3dubG9hZC1saXN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIHtcbiAgcGFkZGluZzogMzBweCAwIDQwcHg7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgc2VsZWN0LCBvcHRpb24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9dGV4dF0sIC5zZXQtbmFycmF0aW9uLXdyYXAgaW5wdXRbdHlwZT10ZXh0XSwgLnNldC1uYXJyYXRpb24td3JhcCBpbnB1dFt0eXBlPW51bWJlcl0sIC5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNldC1uYXJyYXRpb24td3JhcCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLnNldC1uYXJyYXRpb24td3JhcCAubmFycmF0aW9uLXVybCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNldC1uYXJyYXRpb24td3JhcCAubmFycmF0aW9uLXVybDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiT1JcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00MHB4O1xuICBsZWZ0OiA0NiU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNldC1uYXJyYXRpb24td3JhcCAuY29tcGFueS1sb2dvLXBsYWNlIHtcbiAgaGVpZ2h0OiAxNTFweDtcbn1cblxuLmxpdmUtc3RyZWFtaW5nLXdyYXAge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcbn1cblxuaW5wdXQsIGlucHV0W3R5cGU9dGV4dF0sIHRleHRhcmVhLCBzZWxlY3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAgLm5leHRCdG4sIC5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5wcmV2QnRuIHtcbiAgd2lkdGg6IDcycHg7XG59XG5cbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy12YWxpZC5uZy1kaXJ0eS5uZy10b3VjaGVkLFxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCxcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy1wcmlzdGluZS5uZy12YWxpZC5uZy10b3VjaGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ub3Itd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5vci10eHQge1xuICBwYWRkaW5nOiA3cHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogNDklO1xuICBib3R0b206IDZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2E1YTVhNTtcbn1cblxuLm5hcnJhdGlvbi10ZXh0LWgge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5jb21wYW55LWxvZ28tYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1NXB4O1xuICBwYWRkaW5nOiA2MHB4IDEwcHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29tcGFueS1sb2dvLWFyZWEgaW5wdXQge1xuICBoZWlnaHQ6IDE1NXB4O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLnNlbmQtcHVzaCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uc3VjZXNzZnVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZ3JheS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbiNzdGVwLTcgLmZvcm0tZ3JvdXA6bnRoLW9mLXR5cGUoZXZlbikge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc3RlcC03IC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuI3N0ZXAtNyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLnNsb3QtZGV0YWlscy13cmFwIHNwYW4ge1xuICB3aWR0aDogNjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnNkdGltZSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY29tcGV0aXRpb24tbG9nby11cGxvYWQgPiAuY2hvb3NlZmlsZXM6YWZ0ZXIge1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IHJldmVydDtcbiAgbGVmdDogNTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/daily-competition/daily-competition.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/daily-competition/daily-competition.component.ts ***!
  \************************************************************************/
/*! exports provided: DailyCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyCompetitionComponent", function() { return DailyCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9__);











var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var DailyCompetitionComponent = /** @class */ (function () {
    function DailyCompetitionComponent(fb, http, dataService, alertService, router, datePipe) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.dataService = dataService;
        this.alertService = alertService;
        this.router = router;
        this.datePipe = datePipe;
        this.image_type = '';
        this.showCropper = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        //uploadedFiles: Array <any> = [];
        //uploadedFiles: any[] = [];
        this.currentStep = 0;
        this.sumbitted = false;
        this.isStepValid = function (index) {
            return _this.getGroupAt(index).valid;
        };
        this.shouldValidate = function () {
            return _this.sumbitted === true;
        };
        this.isProcessed = false;
        this.selectedType = '';
        this.narrationType = '';
        this.notificationType = '';
        this.narrationOptions = 'url';
        this.percentDone = 0;
        this.showTargetAudience = false;
        this.slotData = [];
        this.countryData = [];
        this.nationalityData = [];
        this.broadcasterData = [];
        this.broadcasterCom = [];
        this.oneToSixtyArray = [];
        this.timeSlots = [];
        this.slot_9 = true;
        this.slot_12 = true;
        this.slot_3 = true;
        this.slot_6 = true;
        this.jstoday = null;
        this.post = {
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now()),
        };
        this.myDate = new Date(Date.now());
        this.afterViewInitExecuted = false;
        this.invalidMoment = new Date().toISOString();
        //public min = new Date(2021, 1, 3, 10, 30);
        //public min = new Date().toISOString();
        this.max = new Date(2021, 3, 21, 20, 30);
        //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
        var currentDate = new Date();
        this.min = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        //this.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
        // Reactive Form
        this.formVar = this.fb.group({
            logo: [null],
            competitionName: [''],
            description: [''],
            excelFile: [null],
            zipFile: [null],
            //startTime:[formatTime(this.post.startTime, 'HH:ss', 'en')],
            //endTime: [formatTime(this.post.endTime, 'HH;ss', 'en')],
            startTime: [''],
            endTime: ['00:00'],
            startDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.post.startDate, 'yyyy-MM-dd', 'en')],
            endDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.post.endDate, 'yyyy-MM-dd', 'en')],
            promotion_type: [''],
            instragramUrl: [''],
            twitterUrl: [''],
            snapchatUrl: [''],
            app_logo: [''],
            app_name: [''],
            apple_store_url: [''],
            google_play_url: [''],
            affiliate_url: [''],
            narration_type: [''],
            narration_url: [''],
            narration_text: [''],
            narration_time: ['00:00'],
            company_logo: [''],
            company_name: [''],
            company_link: [''],
            company_about: [''],
            live_stream_url: [''],
            gender: [''],
            state: [''],
            area_locality: [''],
            age_range: [''],
            nationality: [''],
            city: [''],
            country: [''],
            push_notification: ['yes'],
            audience_description: [''],
            title: [''],
            image_upload: [''],
            slot_time: [''],
            competition_type: ['daily'],
            imageInput: [],
            waiting_time: ['00:05'],
            broadcaster: [0],
            startDateTime: [''],
            bypass_audience: ['yes'],
            minute_time: [''],
            second_time: [''],
            narration_minute_time: [''],
            narration_second_time: [''],
            notification_type: [''],
            notification_text: [''],
            notification_logo: [''],
            apple_schema: ['']
        });
    }
    DailyCompetitionComponent.prototype.ngOnInit = function () {
        //this.formContent = STEP_ITEMS;
        this.formData = {};
        console.log("jQuery version: " + $.fn.jquery);
        this.getSlotDetail();
        this.getBroadcaster();
        this.getCountry();
        this.getSeconds();
        this.createTimeSlots1(9, 20, 90);
        //document.getElementById('buttonNextHide').style.display = 'none';
    };
    Object.defineProperty(DailyCompetitionComponent.prototype, "f", {
        /* Start*/
        get: function () { return this.formVar.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DailyCompetitionComponent.prototype, "currentGroup", {
        /*public formVar = new FormGroup({
              accountDetails: new FormGroup({
                  competitionName: new FormControl('', Validators.required),
                  logo: new FormControl(null, Validators.required),
                  description: new FormControl('', [Validators.required]),
                  zipFile: new FormControl(null, Validators.required),
                  excelFile: new FormControl(null, Validators.required)
              }),
              dataDetails: new FormGroup({
                  fullName: new FormControl('', [Validators.required]),
                  country: new FormControl('', [Validators.required]),
                  gender: new FormControl(null, [Validators.required]),
                  about: new FormControl('')
              }),
              dateTime: new FormGroup({
                  startTime: new FormControl(null, Validators.required),
                  startDate: new FormControl('', Validators.required),
                  endTime: new FormControl(null, Validators.required),
                  endDate: new FormControl('', Validators.required)
              }),
              promotion: new FormGroup({
                  paymentType: new FormControl(null, Validators.required),
                  cardNumber: new FormControl('', Validators.required),
                  cvc: new FormControl('', [
                      Validators.required,
                      Validators.maxLength(3),
                      Validators.minLength(3)
                  ]),
                  expirationDate: new FormControl('', Validators.required),
                  cardHolder: new FormControl('', Validators.required)
              })
          });*/
        get: function () {
            return this.getGroupAt(this.currentStep);
        },
        enumerable: true,
        configurable: true
    });
    DailyCompetitionComponent.prototype.next = function () {
        /*if (this.currentStep == 0) {
            this.upload();
        }*/
        this.currentStep += 1;
    };
    DailyCompetitionComponent.prototype.prev = function () {
        this.currentStep -= 1;
    };
    /* createTimeSlots(startHour, endHour, interval) {
      if (!startHour) {
          endHour = 8;
      }
      if (!endHour) {
          endHour = 20;
      }
      this.timeSlots =[];
      var //timeSlots = [],
          dateTime = new Date(),
          timeStr = '',
          minutes: any = '00';
      dateTime.setHours(startHour, 0, 0, 0);
      while (new Date(dateTime.getTime() + interval * 60000).getHours() < endHour) {
        //console.log(dateTime.getMinutes());
        if(dateTime.getMinutes() == 0){
          minutes = '00';
        }else{
          minutes = dateTime.getMinutes();
        }
          timeStr = ''; //dateTime.getHours() + ':' + minutes;
          //timeStr += '-';
          dateTime = new Date(dateTime.getTime() + interval * 60000);
          timeStr += dateTime.getHours() + ':' + minutes;
          this.timeSlots.push(timeStr);
      }
      //return timeSlots;
      console.log(this.timeSlots)
    } */
    DailyCompetitionComponent.prototype.createTimeSlots1 = function (startHour, endHour, interval) {
        if (startHour === void 0) { startHour = 9; }
        if (endHour === void 0) { endHour = 20; }
        var ii = '';
        for (var i = startHour; i <= endHour; i += 1.5) {
            if (i.toString().length === 1) {
                ii = '0' + i;
            }
            else {
                ii = i;
            }
            //console.log(i);
            this.timeSlots.push(ii + ':00');
        }
        console.log(this.timeSlots);
    };
    DailyCompetitionComponent.prototype.getSeconds = function () {
        for (var value = 0; value < 60; value++) {
            var values;
            if (value.toString().length < 2) {
                values = "0" + value;
            }
            else {
                values = value;
            }
            this.oneToSixtyArray.push(values);
        }
    };
    DailyCompetitionComponent.prototype.changeBypassAudience = function (event) {
        console.log(event.target.value);
        var isSetAudience = event.target.value;
        if (isSetAudience == 'yes') {
            this.showTargetAudience = false;
        }
        else {
            this.showTargetAudience = true;
        }
    };
    DailyCompetitionComponent.prototype.getCountry = function () {
        var _this = this;
        this.dataService.getCountry().subscribe(function (broadcaster) {
            _this.countryData = broadcaster.data;
            //console.log('broadcaster '+JSON.stringify(broadcaster));
        });
        this.dataService.getNationality().subscribe(function (national) {
            _this.nationalityData = national.data;
            //console.log('nationalityData '+JSON.stringify(this.nationalityData));
        });
    };
    DailyCompetitionComponent.prototype.getBroadcaster = function () {
        var _this = this;
        this.dataService.getBroadcaster().subscribe(function (broadcaster) {
            _this.broadcasterData = broadcaster.data;
            //console.log('broadcaster '+JSON.stringify(broadcaster));
        });
    };
    DailyCompetitionComponent.prototype.broadcasteronChange = function (event, formValue) {
        var _this = this;
        var broadcaster_id = event.target.value;
        console.log(broadcaster_id);
        this.dataService.getBroadcasterData(broadcaster_id).subscribe(function (broadcaster) {
            _this.broadcasterCom = broadcaster.data;
            console.log('broadcaster ' + JSON.stringify(broadcaster));
            if (broadcaster.data != null) {
                for (var i = 0; i < broadcaster.data.length; i++) {
                    var format = 'yyyy-MM-dd';
                    var myDate = broadcaster.data[i].start_date; //'2019-06-29';
                    var locale = 'en-US';
                    var formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(myDate, format, locale);
                    console.log('formattedDate', formattedDate);
                    var dbDate = new Date(formattedDate + ' ' + broadcaster.data[i].slot_time);
                    var dateObj = new Date(formValue.startDate + ' ' + formValue.slot_time);
                    console.log('dbDate', dbDate.getTime());
                    console.log('dateObj', dateObj.getTime());
                    if (dbDate.getTime() == dateObj.getTime()) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'You have already assigned this broadcater.', 'error');
                        _this.formVar.controls['broadcaster'].reset();
                        return;
                    }
                }
            }
        });
        /* var dateObj = new Date(formValue.startDate + ' ' + formValue.startTime);
        console.log('dateObj', dateObj);
        console.log('this.myDate', this.myDate);
        if(dateObj >= this.myDate){
  
        } */
    };
    DailyCompetitionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sumbitted = true;
        this.loading = true;
        console.log('submit');
        if (!this.formVar.valid) {
            //this.formVar.markAllAsTouched();
            //this.stepper.validateSteps();
        }
        //console.log('Submitted data', this.formVar.value);
        if (typeof this.fileData == 'undefined' && this.fileData != 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'You have to upload question first.', 'error');
            return;
        }
        this.dataService.addCompetition(this.formVar.value, this.fileData)
            .subscribe(function (event) {
            console.log('event.type ' + event.type);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    console.log('event.body.message ' + event.body.message);
                    //console.log('User successfully created!', event.body);
                    if (event.body.message == 'Record inserted') {
                        _this.alertService.pop('success', 'Daily Competiton added successfully!');
                        _this.router.navigate(['/daily']);
                    }
                    else {
                        _this.alertService.pop('error', event.body.message);
                    }
                    _this.percentDone = false;
                    _this.loading = false;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    DailyCompetitionComponent.prototype.getGroupAt = function (index) {
        var _this = this;
        var groups = Object.keys(this.formVar.controls).map(function (groupName) {
            return _this.formVar.get(groupName);
        });
        return groups[index];
    };
    /* Start again*/
    /*setFormPreview(): void {
      this.formData = this.formVar.reduce(
        (formVar, currentForm) => ({ ...formVar, ...currentForm.value }),
        {}
      );
  
      this.masterFormFields = Object.keys(this.formData);
      }*/
    DailyCompetitionComponent.prototype.getSlotDetail = function () {
        var _this = this;
        this.dataService.getSlot().subscribe(function (sloted) {
            //this.slotData = sloted[0];  
            //console.log('slotData '+JSON.stringify(sloted));
            var resObj = JSON.parse(JSON.stringify(sloted));
            //console.log(resObj)
            //const resObj =  [{"id":38,"slot_time":"12"}]
            var result = resObj.find(function (_a) {
                var slot_time = _a.slot_time;
                return slot_time === '12';
            });
            //console.log(result.slot_time)
            for (var i = 0; i < resObj.length; i++) {
                console.log(resObj[i]['slot_time']);
                if (resObj[i]['slot_time'] == '09:00') {
                    _this.slot_9 = true;
                }
                if (resObj[i]['slot_time'] == '12:00') {
                    _this.slot_12 = false;
                }
                if (resObj[i]['slot_time'] == '15:00') {
                    _this.slot_3 = false;
                }
                if (resObj[i]['slot_time'] == '18:00') {
                    _this.slot_6 = false;
                }
            }
            /*this.form.patchValue({
                title: categories[0].title,
                description: categories[0].description,
                status: categories[0].status,
                //is_active: categories.is_active,
                id: categories[0].id
              });
              this.preview = this.s3_url+categories[0].icon;*/
        });
    };
    DailyCompetitionComponent.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: 'image/jpg'
        });
    };
    DailyCompetitionComponent.prototype.imageCropped = function (event, image_type) {
        // this.croppedImage = event.base64;
        console.log('image_type', image_type);
        // console.log(event);
        if (image_type == 'logo') {
            var base64 = event.base64;
            var imageName = 'logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                logo: imageFile
            });
            this.formVar.get('logo').updateValueAndValidity();
            // File Preview
            this.preview = event.base64;
        }
        else if (image_type == 'image_upload') {
            var base64 = event.base64;
            var imageName = 'image_upload.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                image_upload: imageFile
            });
            this.formVar.get('image_upload').updateValueAndValidity();
            // File Preview
            this.audienceLogo = event.base64;
        }
        else if (image_type == 'app_logo') {
            var base64 = event.base64;
            var imageName = 'app_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                app_logo: imageFile
            });
            this.formVar.get('app_logo').updateValueAndValidity();
            // File Preview
            this.appLogo = event.base64;
        }
        else if (image_type == 'company_logo') {
            var base64 = event.base64;
            var imageName = 'company_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                company_logo: imageFile
            });
            this.formVar.get('company_logo').updateValueAndValidity();
            // File Preview
            this.companyLogo = event.base64;
        }
        else if (image_type == 'notification_logo') {
            var base64 = event.base64;
            var imageName = 'notification_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                notification_logo: imageFile
            });
            this.formVar.get('notification_logo').updateValueAndValidity();
            // File Preview
            this.notificationLogo = event.base64;
        }
    };
    DailyCompetitionComponent.prototype.imageLoaded = function () {
        /* show cropper */
        //this.showCropper = true;
        console.log('Image loaded');
    };
    DailyCompetitionComponent.prototype.cropperReady = function () {
        /* cropper ready */
        console.log('cropper Ready');
    };
    DailyCompetitionComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'Please upload image only', 'error');
    };
    DailyCompetitionComponent.prototype.closePopup = function () {
        this.showCropModal = false;
    };
    // Image Preview
    DailyCompetitionComponent.prototype.uploadCompetitionLogo = function (event) {
        this.imageChangedEvent = '';
        var fileIn = event.target.files[0]; // <--- File Object for future use.
        this.formVar.controls['imageInput'].setValue(fileIn ? fileIn.name : ''); // <-- Set Value for Validation
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'logo';
        var file = event.target.files[0];
        console.log('file', file);
        console.log('this.imageChangedEvent', this.imageChangedEvent);
    };
    DailyCompetitionComponent.prototype.uploadAudienceLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'image_upload';
        // this.formVar.patchValue({
        //   image_upload: file
        // });
        // this.formVar.get('image_upload').updateValueAndValidity()
        // // File Preview
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.audienceLogo = reader.result as string;
        // }
        // reader.readAsDataURL(file)
    };
    DailyCompetitionComponent.prototype.uploadAppLogo = function (event) {
        this.imageChangedEvent = '';
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'app_logo';
        console.log('app_logofile', file);
        console.log('this.imageChangedEvent', this.imageChangedEvent);
    };
    DailyCompetitionComponent.prototype.uploadCompanyLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'company_logo';
    };
    DailyCompetitionComponent.prototype.uploadNotificationLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'notification_logo';
    };
    /* uploadNarrationLogo(event) {
      const file = (event.target as HTMLInputElement).files[0];
      this.formVar.patchValue({
        narration_url: file
      });
      this.formVar.get('narration_url').updateValueAndValidity()
  
      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.narrationUrlLogo = reader.result as string;
      }
      reader.readAsDataURL(file)
  } */
    DailyCompetitionComponent.prototype.audFileSelected = function (event) {
        if (event.target.files && event.target.files[0] && this.afterViewInitExecuted) {
            var file = event.target.files[0];
            this.formVar.patchValue({
                narration_url: file
            });
            this.formVar.get('narration_url').updateValueAndValidity();
            this.audSrc = URL.createObjectURL(event.target.files[0]);
            console.log(this.audSrc);
            this.figAudio.nativeElement.src = this.audSrc;
        }
    };
    DailyCompetitionComponent.prototype.setFormPreview = function (formValue) {
        this.formData = formValue;
        //this.showWaiting_time = this.formData.startDateTime.setMinutes(this.formData.startDateTime.getMinutes() + formValue.slot_time);
        //var dateStringISO = new Date(this.formData.startDateTime).toLocaleString('en-IN', {timeZone: "Asia/Kolkata"})
        //this.dateString = dateStringISO.split(',')[0];
        //this.timeString = dateStringISO.split(',')[1];
        //console.log(this.dateString);
        //console.log(this.timeString);
        //this.showWaiting_time = '00:'+formValue.minute_time+':'+formValue.second_time;
        //this.showNarration_time = '00:'+formValue.narration_minute_time+':'+formValue.narration_second_time;
        this.showWaiting_time = '00:' + formValue.minute_time + ':' + '00';
        this.showNarration_time = '00:00:' + formValue.narration_second_time;
    };
    DailyCompetitionComponent.prototype.onChange = function (event) {
        this.selectedType = event.target.value;
    };
    DailyCompetitionComponent.prototype.narrationonChange = function (event) {
        this.narrationType = event.target.value;
    };
    DailyCompetitionComponent.prototype.narrationOption = function (event) {
        this.narrationOptions = event.target.value;
    };
    DailyCompetitionComponent.prototype.notificationonChange = function (event) {
        this.notificationType = event.target.value;
    };
    DailyCompetitionComponent.prototype.fileChange = function (element) {
        if (typeof (this.uploadedFiles) == "undefined") {
            this.uploadedFiles = new Array();
            this.uploadedFiles.push(element.target.files[0]);
        }
        else {
            this.uploadedFiles.push(element.target.files[0]);
        }
        //console.log(this.uploadedFiles);
    };
    DailyCompetitionComponent.prototype.upload = function () {
        var _this = this;
        if (typeof this.uploadedFiles == 'undefined' && this.uploadedFiles != 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'You have to select xlsx and zip file.', 'error');
            return;
        }
        this.showLoader();
        this.loading = true;
        //document.getElementById('buttonNextHide').style.display = 'none';
        //debugger;
        /*if(typeof(this.selectedCategory)=="undefined" || this.selectedCategory==""){
          alert("Category is required!");
          return;
        }
        if(typeof(this.selectedSubCategory)=="undefined" || this.selectedSubCategory==""){
          alert("Sub Category is required!");
          return;
        }
        if(typeof(this.selectedLanguage)=="undefined" || this.selectedLanguage==""){
          alert("Language is required!");
          return;
        }*/
        //console.log('fileChange');
        //console.log(this.uploadedFiles);
        //console.log('End fileChange');
        var formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl + 'competition/api/upload', formData)
            .subscribe(function (response) {
            _this.isProcessed = true;
            if (response["error_code"] == 2) {
                _this.isError = true;
                _this.errorData = response["data"];
                _this.uploadedFiles = new Array();
                //this.formVar.reset();
                _this.formVar.controls['excelFile'].reset();
                _this.formVar.controls['zipFile'].reset();
            }
            else if (response["error_code"] == 0) {
                //this.errorData = response["data"];
                _this.fileData = response["data"];
                //console.log(this.fileData);
                _this.isError = false;
                _this.isProcessed = true;
                //document.getElementById('buttonNextHide').style.display = 'block';
            }
            else if (response["error_code"] == 1) {
                _this.isError = false;
                _this.isProcessed = false;
                _this.errorData = response["data"];
                _this.errorCode = response["error_code"];
                _this.errorDesc = response["err_desc"];
                _this.uploadedFiles = new Array();
                _this.formVar.controls['excelFile'].reset();
                _this.formVar.controls['zipFile'].reset();
            }
            _this.hideLoader();
            _this.loading = false;
            console.log('response receved is ', response);
        }, function (err) {
            _this.loading = false;
        });
    };
    // Function is defined 
    DailyCompetitionComponent.prototype.hideLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'none';
    };
    DailyCompetitionComponent.prototype.showLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'block';
    };
    DailyCompetitionComponent.prototype.onClick = function (event) {
        this.showModal = true; // Show-Hide Modal Check
        // this.UserId = event.target.id;
        // this.Firstname = document.getElementById("firstname"+this.UserId).innerHTML;
        // this.Lastname = document.getElementById("lastname"+this.UserId).innerHTML;
        // this.Email = document.getElementById("email"+this.UserId).innerHTML;
    };
    //Bootstrap Modal Close event
    DailyCompetitionComponent.prototype.hide = function () {
        this.showModal = false;
    };
    DailyCompetitionComponent.prototype.ngAfterViewInit = function () {
        this.afterViewInitExecuted = true; // for mp3 upload excution
        var self = this;
        $(document).ready(function () {
            var today = new Date().toISOString().split('T')[0];
            var todayTime = new Date().toISOString().split('T')[1];
            //var tt = todayTime.split('.')[0]
            //console.log(todayTime);
            //console.log(tt);
            //document.getElementsByName("start_time")[0].setAttribute('min', today);
            //document.getElementById("start_date").setAttribute("min", today);
            //document.getElementById("end_date").setAttribute("min", today);
            //document.getElementById("start_time").setAttribute("min", tt);
            var navListItems = $('div.setup-panel div a'), allWells = $('.setup-content'), allNextBtn = $('.nextBtn'), allPrevBtn = $('.prevBtn');
            allWells.hide();
            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')), $item = $(this);
                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-success').addClass('active');
                    $item.addClass('btn-success');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
            allPrevBtn.click(function () {
                var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"), curInputs = curStep.find("input[type='text'],input[type='url']"), isValid = true;
                //alert(curStepBtn);
                $(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (!curInputs[i].validity.valid) {
                        //isValid = false;
                        //$(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
                if (isValid)
                    prevStepWizard.removeAttr('disabled').trigger('click');
            });
            allNextBtn.click(function () {
                var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='tel'],input[type='radio'],input[type='url'],input[type='file'],input[type='date'],input[type='time'],textarea,select"), isValid = true;
                console.log(self.fileData);
                if (typeof self.fileData == 'undefined' && self.fileData != 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire('', 'You have to upload question data first.', 'error');
                    isValid = false;
                    $('.uploadButton').closest(".form-group").addClass("has-error");
                    return false;
                }
                $(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (!curInputs[i].validity.valid) {
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });
            $('div.setup-panel div a.btn-success').trigger('click');
        });
    };
    DailyCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_5__["DcService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DailyCompetitionComponent.prototype, "figAudio", void 0);
    DailyCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./daily-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/daily-competition.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./daily-competition.component.scss */ "./src/app/pages/daily-competition/daily-competition.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_dc_service__WEBPACK_IMPORTED_MODULE_5__["DcService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], DailyCompetitionComponent);
    return DailyCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/daily-competition.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/daily-competition/daily-competition.module.ts ***!
  \*********************************************************************/
/*! exports provided: DailyCompetitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyCompetitionModule", function() { return DailyCompetitionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _daily_competition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-competition.component */ "./src/app/pages/daily-competition/daily-competition.component.ts");
/* harmony import */ var _multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multi-step-form/multi-step-form.component */ "./src/app/pages/multi-step-form/multi-step-form.component.ts");
/* harmony import */ var _account_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-details.component */ "./src/app/pages/daily-competition/account-details.component.ts");
/* harmony import */ var _data_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-details.component */ "./src/app/pages/daily-competition/data-details.component.ts");
/* harmony import */ var _date_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-time.component */ "./src/app/pages/daily-competition/date-time.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _daily_competition_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./daily-competition-routing.module */ "./src/app/pages/daily-competition/daily-competition-routing.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var _list_list_daily_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list/list-daily.component */ "./src/app/pages/daily-competition/list/list-daily.component.ts");
/* harmony import */ var _edit_edit_daily_competition_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit/edit-daily-competition.component */ "./src/app/pages/daily-competition/edit/edit-daily-competition.component.ts");
/* harmony import */ var _view_view_daily_competition_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/view-daily-competition.component */ "./src/app/pages/daily-competition/view/view-daily-competition.component.ts");
/* harmony import */ var _spinner_loading_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../spinner/loading.module */ "./src/app/pages/spinner/loading.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");




















var DailyCompetitionModule = /** @class */ (function () {
    function DailyCompetitionModule() {
    }
    DailyCompetitionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_multi_step_form_multi_step_form_component__WEBPACK_IMPORTED_MODULE_4__["MultiStepFormComponent"], _daily_competition_component__WEBPACK_IMPORTED_MODULE_3__["DailyCompetitionComponent"],
                _account_details_component__WEBPACK_IMPORTED_MODULE_5__["AccountDetailsComponent"], _data_details_component__WEBPACK_IMPORTED_MODULE_6__["DataDetailsComponent"], _date_time_component__WEBPACK_IMPORTED_MODULE_7__["DateTimeComponent"],
                _list_list_daily_component__WEBPACK_IMPORTED_MODULE_14__["ListDailyComponent"], _edit_edit_daily_competition_component__WEBPACK_IMPORTED_MODULE_15__["EditDailyCompetitionComponent"],
                _view_view_daily_competition_component__WEBPACK_IMPORTED_MODULE_16__["ViewDailyCompetitionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _daily_competition_routing_module__WEBPACK_IMPORTED_MODULE_9__["DailyCompetitionRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_19__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_19__["OwlNativeDateTimeModule"],
                _spinner_loading_module__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__["ImageCropperModule"]
            ],
            providers: [_services_dc_service__WEBPACK_IMPORTED_MODULE_13__["DcService"], { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_19__["OWL_DATE_TIME_LOCALE"], useValue: 'en-IN' }]
        })
    ], DailyCompetitionModule);
    return DailyCompetitionModule;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/data-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/daily-competition/data-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDetailsComponent", function() { return DataDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");




//import { countries } from './countries';
var DataDetailsComponent = /** @class */ (function () {
    function DataDetailsComponent(dataService) {
        this.dataService = dataService;
    }
    ;
    DataDetailsComponent.prototype.ngOnInit = function () {
        /*this.dataService.allPassedData.subscribe((allPassedData)=>{
         this.selectProducts = allPassedData;
         console.log(JSON.stringify(this.selectProducts)); // print the data
       }) */
        var selectedProducts = this.dataService.retrievePassedObject();
        console.log('selectedProducts ' + JSON.stringify(selectedProducts)); // prints empty array
        /*this.dataService.sharedParam.subscribe(param=>console.log('paramProducts '+JSON.stringify(param)))*/
        /*this.dataService.retrievePassedObject.subscribe((allPassedData)=>{
          this.selectProducts = allPassedData;
          console.log(JSON.stringify(this.selectProducts)); // print the data
        }) */
        //this.dataService.sharedParam.subscribe(param=>console.log(param))
        /*this.dataService.getEvent().subscribe(info => {
         //this.updateUserInfo = info;
 
         console.log(info)
       })*/
        /*this.dataService.currentData.subscribe(data => {
          console.log(data);
        });*/
        //this.dataService.sharedParam.subscribe(param=>this.name=JSON.stringify(param))
        //console.log(this.name);
    };
    DataDetailsComponent.ctorParameters = function () { return [
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DataDetailsComponent.prototype, "dataDetails", void 0);
    DataDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-details',
            template: "\n        <ng-container [formGroup]=\"dataDetails\">\n            <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n              <div class=\"dt-responsive table-responsive\">\n                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\n                  <thead>\n                    <tr>\n                      <th width=\"15%\">Question</th>\n                      <th width=\"10%\">Question File Url</th>\n                      <th width=\"10%\">Answer</th>\n                      <th width=\"10%\">Option 2</th>\n                      <th width=\"10%\">Option 3</th>\n                      <th width=\"10%\">Option 4</th>\n                      <th width=\"10%\">Level</th>\n                      <th width=\"10%\">Notes</th>\n                      <th width=\"15%\">Remarks</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of selectedProducts\">\n                      <td width=\"15%\">{{ item.question }}</td>\n                      <td width=\"10%\">{{ item.question_file_url }}</td>\n                      <td width=\"10%\">{{ item.answer }}</td>\n                      <td width=\"10%\">{{ item.option2 }}</td>\n                      <td width=\"10%\">{{ item.option3 }}</td>\n                      <td width=\"10%\">{{ item.option4 }}</td>\n                      <td width=\"10%\">{{ item.level }}</td>\n                      <td width=\"10%\">{{ item.notes }}</td>\n                      <td [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n    ",
            providers: [_services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n        .k-list-horizontal .k-radio-item,\n        .k-radio-list .k-radio-item:first-child {\n            margin: 0 12px 0 0;\n        }\n\n        .k-radio+.k-radio-label, .k-radio-label+.k-radio {\n            margin-left: 6px;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"]])
    ], DataDetailsComponent);
    return DataDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/date-time.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/daily-competition/date-time.component.ts ***!
  \****************************************************************/
/*! exports provided: DateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeComponent", function() { return DateTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");




//import { countries } from './countries';
var DateTimeComponent = /** @class */ (function () {
    function DateTimeComponent(dataService) {
        this.dataService = dataService;
    }
    ;
    DateTimeComponent.prototype.ngOnInit = function () {
    };
    DateTimeComponent.ctorParameters = function () { return [
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DateTimeComponent.prototype, "dateTime", void 0);
    DateTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-time',
            template: "\n        <ng-container [formGroup]=\"dateTime\">\n            <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-6 \"> \n                      <div class=\"competition-logo-upload\">\n                        Start Time\n                        </div>\n                        <input type=\"time\" class=\"form-control\" formControlName=\"startTime\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 \"> \n                      <div class=\"competition-logo-upload\">\n                        Start Date\n                        </div>\n                        <input type=\"date\" class=\"form-control\" formControlName=\"startDate\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 \"> \n                      <div class=\"competition-logo-upload\">\n                        End Time\n                        </div>\n                        <input type=\"time\" class=\"form-control\" formControlName=\"endTime\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-6 \"> \n                      <div class=\"competition-logo-upload\">\n                        End Date\n                        </div>\n                        <input type=\"date\" class=\"form-control\" formControlName=\"endDate\">\n                    </div>\n                  </div>\n                    \n      </ng-container>\n    ",
            providers: [_services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n        .k-list-horizontal .k-radio-item,\n        .k-radio-list .k-radio-item:first-child {\n            margin: 0 12px 0 0;\n        }\n\n        .k-radio+.k-radio-label, .k-radio-label+.k-radio {\n            margin-left: 6px;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"]])
    ], DateTimeComponent);
    return DateTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/edit/edit-daily-competition.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/daily-competition/edit/edit-daily-competition.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Latest compiled and minified CSS included as External Resource*/\n/* Optional theme */\n/*@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css');*/\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: 0;\n}\n.daily-competition-wrap {\n  text-align: right !important;\n  font-size: 14px;\n  color: #353c4e;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #949494;\n  border-color: #949494;\n}\n#btnUpload {\n  border: 0px;\n}\n.stepwizard-step p {\n  margin-top: 0px;\n  color: #666;\n}\n.stepwizard-row {\n  display: table-row;\n}\n.stepwizard {\n  display: table;\n  margin-bottom: 25px;\n  width: 100%;\n  position: relative;\n}\n.stepwizard-step button[disabled] {\n  /*opacity: 1 !important;\n  filter: alpha(opacity=100) !important;*/\n}\n.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {\n  opacity: 1 !important;\n  color: #bbb;\n}\n.stepwizard-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc;\n  z-index: 0;\n  left: 0;\n}\n.stepwizard-step {\n  display: table-cell;\n  text-align: center;\n  position: relative;\n}\n.btn-success:not(:disabled):not(.disabled).active,\n.btn-success:not(:disabled):not(.disabled):active,\n.show > .btn-success.dropdown-toggle {\n  background-color: #00a39d;\n  border-color: #00a39d;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.active {\n  background-color: #2be0d5;\n  color: #fff;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.formtab-stepbystep {\n  overflow: auto;\n}\n.formtab-stepbystep ul li {\n  float: left;\n  width: 14.1%;\n  position: relative;\n}\n.formtab-stepbystep ul li a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  text-align: center;\n  font-size: 18px;\n  line-height: 37px;\n  position: relative;\n  z-index: 1;\n  color: #353c4e;\n  background: #fff;\n  border: solid 1px #18BBB1;\n}\n.formtab-stepbystep ul li a.active {\n  background-color: #18BBB1;\n  color: #fff;\n}\n.formtab-stepbystep ul li:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  background: #18BBB1;\n  width: 100%;\n  top: 20px;\n}\n.download-list {\n  float: right;\n}\n.set-promotion-wrap {\n  padding: 30px 0 40px;\n}\n.set-promotion-wrap select, option {\n  text-align: right;\n}\n.set-promotion-wrap select {\n  background: #f1f1f1;\n}\n.set-promotion-wrap .set-promotion ul li input[type=text], .set-narration-wrap input[type=text], .set-narration-wrap input[type=number], .set-narration-wrap textarea {\n  text-align: right;\n}\n.set-promotion-wrap .set-promotion ul li input[type=file] {\n  direction: rtl;\n}\n.set-promotion-wrap .set-promotion ul li {\n  margin-bottom: 4px;\n}\n.set-narration-wrap {\n  text-align: right;\n}\n.set-narration-wrap textarea {\n  resize: none;\n}\n.set-narration-wrap .narration-url {\n  margin-bottom: 40px;\n  position: relative;\n}\n.set-narration-wrap .narration-url:after {\n  content: \"OR\";\n  position: absolute;\n  bottom: -40px;\n  left: 46%;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.set-narration-wrap .company-logo-place {\n  height: 151px;\n}\n.live-streaming-wrap {\n  padding: 20px 0 10px;\n}\ninput, input[type=text], textarea, select {\n  text-align: right;\n  direction: rtl;\n  resize: none;\n}\n.daily-competition-wrap .nextBtn, .daily-competition-wrap .prevBtn {\n  width: 150px;\n}\n.form-control.select2.ng-valid.ng-dirty.ng-touched,\n.form-control.select2.ng-untouched.ng-pristine.ng-valid,\n.form-control.select2.ng-pristine.ng-valid.ng-touched {\n  margin-bottom: 20px;\n  background: #f1f0f0;\n  height: 40px;\n}\n.or-wrap {\n  position: relative;\n  padding-bottom: 30px;\n}\n.or-txt {\n  padding: 7px 8px;\n  position: absolute;\n  border-radius: 50%;\n  left: 49%;\n  bottom: 6px;\n  border: solid 1px #a5a5a5;\n}\n.narration-text-h {\n  height: 75px;\n}\n.company-logo-area {\n  width: 100%;\n  height: 155px;\n  padding: 60px 10px 10px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n}\n.company-logo-area input {\n  height: 155px;\n  opacity: 0;\n  position: absolute;\n  top: 26px;\n  left: 16px;\n  width: 92%;\n}\n.send-push input[type=radio] {\n  margin: 0 5px;\n}\n.table-bordered td, .table-bordered th {\n  border: 1px solid #dee2e6 !important;\n}\n.sucessful {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n#step-7 {\n  overflow-wrap: anywhere;\n}\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n#step-7 img {\n  max-width: 100px !important;\n  height: 100px !important;\n}\n.slot-details-wrap span {\n  width: 65px;\n  display: inline-block;\n}\n.btn:active, .btn.active {\n  box-shadow: none !important;\n}\n.invalid-feedback {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vZWRpdC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcZGFpbHktY29tcGV0aXRpb25cXGVkaXRcXGVkaXQtZGFpbHktY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhaWx5LWNvbXBldGl0aW9uL2VkaXQvZWRpdC1kYWlseS1jb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBQTtBQUVBLG1CQUFBO0FBRUEsd0ZBQUE7QUFDQTtFQUVJLFVBQUE7QUNGSjtBRElBO0VBQ0csNEJBQUE7RUFBNkIsZUFBQTtFQUFpQixjQUFBO0FDQ2pEO0FEQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUE7RUFBWSxXQUFBO0FDSVo7QURIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTUo7QURKQTtFQUNJLGtCQUFBO0FDT0o7QURMQTtFQUNJLGNBQUE7RUFBZ0IsbUJBQUE7RUFDaEIsV0FBQTtFQUNBLGtCQUFBO0FDU0o7QUROQTtFQUNJO3lDQUFBO0FDVUo7QURQQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ1VKO0FEUkE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQVksT0FBQTtBQ1loQjtBRFZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDYUo7QURUQTs7O0VBRXFDLHlCQUFBO0VBQTBCLHFCQUFBO0FDYy9EO0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDY0o7QURaQTtFQUFTLHlCQUFBO0VBQTBCLFdBQUE7QUNpQm5DO0FEaEJBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNtQko7QURaQTtFQUFxQixjQUFBO0FDZ0JyQjtBRGZBO0VBQTJCLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7QUNxQnBEO0FEcEJBO0VBQThCLFdBQUE7RUFBYSxZQUFBO0VBQWEsa0JBQUE7RUFDdEQsY0FBQTtFQUFnQixZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixpQkFBQTtFQUFrQixrQkFBQTtFQUNyRixVQUFBO0VBQVksY0FBQTtFQUFlLGdCQUFBO0VBQWlCLHlCQUFBO0FDa0M5QztBRGpDRTtFQUFvQyx5QkFBQTtFQUEwQixXQUFBO0FDc0NoRTtBRHJDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDd0NKO0FEbkNBO0VBQWlCLFlBQUE7QUN1Q2pCO0FEckNBO0VBQXNCLG9CQUFBO0FDeUN0QjtBRHhDQTtFQUFvQyxpQkFBQTtBQzRDcEM7QUQzQ0E7RUFBNEIsbUJBQUE7QUMrQzVCO0FEOUNBO0VBQThLLGlCQUFBO0FDa0Q5SztBRGpEQTtFQUE4RCxjQUFBO0FDcUQ5RDtBRHBEQTtFQUEwQyxrQkFBQTtBQ3dEMUM7QURyREE7RUFBc0IsaUJBQUE7QUN5RHRCO0FEeERBO0VBQStCLFlBQUE7QUM0RC9CO0FEM0RBO0VBQW9DLG1CQUFBO0VBQW9CLGtCQUFBO0FDZ0V4RDtBRC9EQTtFQUEwQyxhQUFBO0VBQWMsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLFNBQUE7RUFBVSxXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLGVBQUE7QUM0RWxMO0FEMUVBO0VBQTBDLGFBQUE7QUM4RTFDO0FEN0VBO0VBQXVCLG9CQUFBO0FDaUZ2QjtBRC9FQTtFQUNJLGlCQUFBO0VBQW1CLGNBQUE7RUFDbkIsWUFBQTtBQ21GSjtBRGhGQTtFQUFxRSxZQUFBO0FDb0ZyRTtBRG5GQTs7O0VBR0csbUJBQUE7RUFBcUIsbUJBQUE7RUFBcUIsWUFBQTtBQ3dGN0M7QUR2RkE7RUFBVyxrQkFBQTtFQUFvQixvQkFBQTtBQzRGL0I7QUQzRkE7RUFBUyxnQkFBQTtFQUFrQixrQkFBQTtFQUN2QixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNnR0o7QUQ1RkE7RUFBb0IsWUFBQTtBQ2dHcEI7QUQvRkE7RUFBcUIsV0FBQTtFQUFhLGFBQUE7RUFBZSx1QkFBQTtFQUM3QyxzQkFBQTtFQUNBLGtCQUFBO0FDcUdKO0FEcEdBO0VBQTBCLGFBQUE7RUFDdEIsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDd0dKO0FEdEdBO0VBQWlDLGFBQUE7QUMwR2pDO0FEekdBO0VBQXdDLG9DQUFBO0FDNkd4QztBRDNHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQzhHSjtBRDNHQTtFQUFTLHVCQUFBO0FDK0dUO0FEOUdBO0VBQVUscUNBQUE7QUNrSFY7QURqSEE7RUFBdUMsbUJBQUE7RUFBcUIscUNBQUE7RUFBbUMsYUFBQTtBQ3VIL0Y7QUR0SEE7RUFBcUIsbUJBQUE7QUMwSHJCO0FEekhBO0VBQWMsMkJBQUE7RUFBMkIsd0JBQUE7QUM4SHpDO0FEM0hBO0VBQTBCLFdBQUE7RUFBYSxxQkFBQTtBQ2dJdkM7QUQvSEE7RUFBMEIsMkJBQUE7QUNtSTFCO0FEaklBO0VBQ0kseUJBQUE7QUNvSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYWlseS1jb21wZXRpdGlvbi9lZGl0L2VkaXQtZGFpbHktY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTUyBpbmNsdWRlZCBhcyBFeHRlcm5hbCBSZXNvdXJjZSovXHJcblxyXG4vKiBPcHRpb25hbCB0aGVtZSAqL1xyXG5cclxuLypAaW1wb3J0IHVybCgnLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzJyk7Ki9cclxuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmZvY3VzLCAuYnRuOmFjdGl2ZS5mb2N1cywgLmJ0bi5hY3RpdmUuZm9jdXN7XHJcblxyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCB7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzM1M2M0ZTtcclxufVxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM5NDk0OTQ7XHJcbn1cclxuI2J0blVwbG9hZCB7Ym9yZGVyOjBweDt9XHJcbi5zdGVwd2l6YXJkLXN0ZXAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjojNjY2O1xyXG59XHJcbi5zdGVwd2l6YXJkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnN0ZXB3aXphcmQge1xyXG4gICAgZGlzcGxheTogdGFibGU7IG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0ZXB3aXphcmQtc3RlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgIC8qb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCkgIWltcG9ydGFudDsqL1xyXG59XHJcbi5zdGVwd2l6YXJkIC5idG4uZGlzYWJsZWQsIC5zdGVwd2l6YXJkIC5idG5bZGlzYWJsZWRdLCAuc3RlcHdpemFyZCBmaWVsZHNldFtkaXNhYmxlZF0gLmJ0biB7XHJcbiAgICBvcGFjaXR5OjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNiYmI7XHJcbn1cclxuLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OlwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICB6LWluZGV4OiAwOyBsZWZ0OiAwO1xyXG59XHJcbi5zdGVwd2l6YXJkLXN0ZXAge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIFxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCBcclxuLnNob3c+LmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7IGJhY2tncm91bmQtY29sb3I6IzAwYTM5ZDsgYm9yZGVyLWNvbG9yOiMwMGEzOWQ7IH1cclxuXHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiMyYmUwZDU7IGNvbG9yOiNmZmY7fVxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHtvdmVyZmxvdzogYXV0bzt9XHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkge2Zsb2F0OmxlZnQ7IHdpZHRoOjE0LjElOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYSB7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6NDBweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDozN3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTsgY29sb3I6IzM1M2M0ZTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXI6c29saWQgMXB4ICMxOEJCQjE7fVxyXG4gIC5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYS5hY3RpdmUge2JhY2tncm91bmQtY29sb3I6IzE4QkJCMTsgY29sb3I6I2ZmZjt9XHJcbiAgLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMxOEJCQjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMjBweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG4uZG93bmxvYWQtbGlzdCB7IGZsb2F0OnJpZ2h0O31cclxuXHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgeyBwYWRkaW5nOjMwcHggMCA0MHB4fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCwgb3B0aW9uIHt0ZXh0LWFsaWduOnJpZ2h0OyAgIH1cclxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3Qge2JhY2tncm91bmQ6ICNmMWYxZjE7fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIC5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT1cImZpbGVcIl0geyBkaXJlY3Rpb246IHJ0bDsgfVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIHttYXJnaW4tYm90dG9tOjRweDt9XHJcblxyXG5cclxuLnNldC1uYXJyYXRpb24td3JhcCB7IHRleHQtYWxpZ246IHJpZ2h0O31cclxuLnNldC1uYXJyYXRpb24td3JhcCB0ZXh0YXJlYSB7IHJlc2l6ZTogbm9uZTt9XHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmwge21hcmdpbi1ib3R0b206NDBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxyXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsOmFmdGVyIHtjb250ZW50OidPUic7IHBvc2l0aW9uOmFic29sdXRlOyBib3R0b206LTQwcHg7IGxlZnQ6NDYlOyB3aWR0aDo0MHB4OyBoZWlnaHQ6NDBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjQwcHg7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOiAxOHB4O31cclxuXHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLmNvbXBhbnktbG9nby1wbGFjZSB7IGhlaWdodDoxNTFweDsgfVxyXG4ubGl2ZS1zdHJlYW1pbmctd3JhcCB7IHBhZGRpbmc6MjBweCAwIDEwcHggfVxyXG5cclxuaW5wdXQsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAgLm5leHRCdG4sIC5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5wcmV2QnRuIHsgd2lkdGg6MTUwcHg7fVxyXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctdmFsaWQubmctZGlydHkubmctdG91Y2hlZCwgXHJcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQsIFxyXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctcHJpc3RpbmUubmctdmFsaWQubmctdG91Y2hlZFxyXG4geyBtYXJnaW4tYm90dG9tOiAyMHB4OyBiYWNrZ3JvdW5kOiAjZjFmMGYwOyBoZWlnaHQ6IDQwcHg7fVxyXG4ub3Itd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDMwcHg7fVxyXG4ub3ItdHh0IHtwYWRkaW5nOiA3cHggOHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsZWZ0OiA0OSU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNhNWE1YTU7XHJcblxyXG59XHJcblxyXG4ubmFycmF0aW9uLXRleHQtaCB7IGhlaWdodDogNzVweDt9XHJcbi5jb21wYW55LWxvZ28tYXJlYSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDE1NXB4OyBwYWRkaW5nOiA2MHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7fVxyXG4uY29tcGFueS1sb2dvLWFyZWEgaW5wdXQge2hlaWdodDogMTU1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiA5MiU7fVxyXG5cclxuLnNlbmQtcHVzaCBpbnB1dFt0eXBlPVwicmFkaW9cIl0geyBtYXJnaW46IDAgNXB4OyB9XHJcbi50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDt9XHJcblxyXG4uc3VjZXNzZnVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiNzdGVwLTcge292ZXJmbG93LXdyYXA6IGFueXdoZXJlO31cclxuLmdyYXktYmcge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXA6bnRoLW9mLXR5cGUoZXZlbikge21hcmdpbi1ib3R0b206IDI1cHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTsgcGFkZGluZzogMTBweDt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXAge21hcmdpbi1ib3R0b206IDI1cHg7fVxyXG4jc3RlcC03IGltZyB7IG1heC13aWR0aDoxMDBweCFpbXBvcnRhbnQ7IGhlaWdodDoxMDBweCFpbXBvcnRhbnQ7fVxyXG5cclxuXHJcbi5zbG90LWRldGFpbHMtd3JhcCBzcGFuIHsgd2lkdGg6IDY1cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbi5idG46YWN0aXZlLCAuYnRuLmFjdGl2ZSB7Ym94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7fVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qIExhdGVzdCBjb21waWxlZCBhbmQgbWluaWZpZWQgQ1NTIGluY2x1ZGVkIGFzIEV4dGVybmFsIFJlc291cmNlKi9cbi8qIE9wdGlvbmFsIHRoZW1lICovXG4vKkBpbXBvcnQgdXJsKCcvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjAuMC9jc3MvYm9vdHN0cmFwLXRoZW1lLm1pbi5jc3MnKTsqL1xuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmZvY3VzLCAuYnRuOmFjdGl2ZS5mb2N1cywgLmJ0bi5hY3RpdmUuZm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzNTNjNGU7XG59XG5cbi5wYW5lbC1wcmltYXJ5ID4gLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcbiAgYm9yZGVyLWNvbG9yOiAjOTQ5NDk0O1xufVxuXG4jYnRuVXBsb2FkIHtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zdGVwd2l6YXJkLXN0ZXAgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5zdGVwd2l6YXJkLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLnN0ZXB3aXphcmQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXB3aXphcmQtc3RlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgLypvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApICFpbXBvcnRhbnQ7Ki9cbn1cblxuLnN0ZXB3aXphcmQgLmJ0bi5kaXNhYmxlZCwgLnN0ZXB3aXphcmQgLmJ0bltkaXNhYmxlZF0sIC5zdGVwd2l6YXJkIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2JiYjtcbn1cblxuLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XG4gIHRvcDogMTRweDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHotaW5kZXg6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zdGVwd2l6YXJkLXN0ZXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMzlkO1xuICBib3JkZXItY29sb3I6ICMwMGEzOWQ7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJlMGQ1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0LjElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjMzUzYzRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMThCQkIxO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4QkJCMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMThCQkIxO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAyMHB4O1xufVxuXG4uZG93bmxvYWQtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCB7XG4gIHBhZGRpbmc6IDMwcHggMCA0MHB4O1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCwgb3B0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSBpbnB1dFt0eXBlPXRleHRdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9dGV4dF0sIC5zZXQtbmFycmF0aW9uLXdyYXAgaW5wdXRbdHlwZT1udW1iZXJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIHRleHRhcmVhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmwge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmw6YWZ0ZXIge1xuICBjb250ZW50OiBcIk9SXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDBweDtcbiAgbGVmdDogNDYlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLmNvbXBhbnktbG9nby1wbGFjZSB7XG4gIGhlaWdodDogMTUxcHg7XG59XG5cbi5saXZlLXN0cmVhbWluZy13cmFwIHtcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG5cbmlucHV0LCBpbnB1dFt0eXBlPXRleHRdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogcnRsO1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5uZXh0QnRuLCAuZGFpbHktY29tcGV0aXRpb24td3JhcCAucHJldkJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXZhbGlkLm5nLWRpcnR5Lm5nLXRvdWNoZWQsXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLFxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXByaXN0aW5lLm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMGYwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5vci13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLm9yLXR4dCB7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsZWZ0OiA0OSU7XG4gIGJvdHRvbTogNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYTVhNWE1O1xufVxuXG4ubmFycmF0aW9uLXRleHQtaCB7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmNvbXBhbnktbG9nby1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTU1cHg7XG4gIHBhZGRpbmc6IDYwcHggMTBweCAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb21wYW55LWxvZ28tYXJlYSBpbnB1dCB7XG4gIGhlaWdodDogMTU1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNnB4O1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogOTIlO1xufVxuXG4uc2VuZC1wdXNoIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRkLCAudGFibGUtYm9yZGVyZWQgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNlc3NmdWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNzdGVwLTcge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3N0ZXAtNyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNzdGVwLTcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbG90LWRldGFpbHMtd3JhcCBzcGFuIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0bjphY3RpdmUsIC5idG4uYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/daily-competition/edit/edit-daily-competition.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/daily-competition/edit/edit-daily-competition.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditDailyCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyCompetitionComponent", function() { return EditDailyCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);












//import { OwlDateTimeComponent } from '../../../../../projects/picker/src/public_api';


var EditDailyCompetitionComponent = /** @class */ (function () {
    function EditDailyCompetitionComponent(activatedRoute, fb, dcService, alertService, authenticationService, datePipe, router, dateTimeAdapter) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.dcService = dcService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.datePipe = datePipe;
        this.router = router;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].s3_url;
        this.getCompetition = [];
        this.getQuestion = [];
        this.getNarration = [];
        this.setAudience = [];
        this.broadcasterData = [];
        this.oneToSixtyArray = [];
        this.image_type = '';
        this.showCropper = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.editData = [];
        this.isEdit = false;
        this.idEdit = false;
        this.isSave = true;
        this.loading = false;
        this.submitted = false;
        this.isProcessed = false;
        this.question_value = "";
        this.selectedType = '';
        this.narrationType = '';
        this.notificationType = '';
        this.slot_9 = true;
        this.slot_12 = true;
        this.slot_3 = true;
        this.slot_6 = true;
        this.selectedItems = [];
        this.selectedAll = false;
        this.narrationOptions = 'url';
        this.percentDone = 0;
        this.showTargetAudience = true;
        this.countryData = [];
        this.nationalityData = [];
        this.jstoday = '';
        this.post = {
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now()),
        };
        this.invalidMoment = new Date().toISOString();
        //public min = new Date(2021, 1, 3, 10, 30);
        //public min = new Date().toISOString();
        this.max = new Date(2021, 3, 21, 20, 30);
        this.durationOptions = ["10", "15", "20", "25", "30", "35", "40"];
        this.levelOptions = ["1", "2", "3", "4", "5"];
        this.narrOption = ["url"];
        this.removeByAttr = function (arr, attr, value) {
            var i = arr.length;
            while (i--) {
                if (arr[i]
                    && arr[i].hasOwnProperty(attr)
                    && (arguments.length > 2 && arr[i][attr] === value)) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        };
        var currentDate = new Date();
        this.min = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        //this.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
        dateTimeAdapter.setLocale('en-IN'); // change locale to Europe/London
        this.formVar = this.fb.group({
            logo: [null],
            competitionName: [''],
            description: [''],
            excelFile: [null],
            zipFile: [null],
            //startTime:[formatTime(this.post.startTime, 'HH:ss', 'en')],
            //endTime: [formatTime(this.post.endTime, 'HH;ss', 'en')],
            startTime: [''],
            endTime: ['00:00'],
            startDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.post.startDate, 'yyyy-MM-dd', 'en')],
            endDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(this.post.endDate, 'yyyy-MM-dd', 'en')],
            promotion_type: [''],
            instragramUrl: [''],
            twitterUrl: [''],
            snapchatUrl: [''],
            app_logo: [''],
            app_name: [''],
            apple_store_url: [''],
            google_play_url: [''],
            affiliate_url: [''],
            narration_type: [''],
            narration_url: [''],
            narration_text: [''],
            narration_time: ['00:00'],
            company_logo: [''],
            company_name: [''],
            company_link: [''],
            company_about: [''],
            live_stream_url: [''],
            gender: [''],
            state: [''],
            area_locality: [''],
            age_range: [''],
            nationality: [''],
            city: [''],
            country: [''],
            push_notification: [''],
            audience_description: [''],
            title: [''],
            image_upload: [''],
            slot_time: [''],
            competition_type: ['daily'],
            imageInput: [],
            waiting_time: ['00:05'],
            startDateTime: [''],
            broadcaster: [''],
            bypass_audience: ['no'],
            minute_time: [''],
            second_time: [''],
            narration_minute_time: [''],
            narration_second_time: [''],
            notification_type: [''],
            notification_text: [''],
            notification_logo: [''],
            apple_schema: ['']
        });
        this.form = this.fb.group({
            question: [''],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            answer: [''],
            note: [''],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
    }
    EditDailyCompetitionComponent.prototype.ngOnInit = function () {
        this.formData = {};
        this.jstoday = new Date().toISOString();
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getBroadcaster();
        this.getCountry();
        this.getSeconds();
        this.getDailyCompetition(id);
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
    };
    Object.defineProperty(EditDailyCompetitionComponent.prototype, "f", {
        get: function () { return this.formVar.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditDailyCompetitionComponent.prototype, "ff", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    EditDailyCompetitionComponent.prototype.getSeconds = function () {
        for (var value = 0; value < 60; value++) {
            var values;
            if (value.toString().length < 2) {
                values = "0" + value;
            }
            else {
                values = value;
            }
            this.oneToSixtyArray.push(values);
        }
    };
    EditDailyCompetitionComponent.prototype.getDailyCompetition = function (id) {
        //console.log(id);
        var _this = this;
        this.dcService.editCompetition(id).subscribe(function (competition) {
            //  console.log(competition.data)
            _this.getCompetition = competition.data[0].competition[0];
            _this.getQuestion = competition.data[1].question;
            _this.getNarration = competition.data[2].narration[0];
            _this.setAudience = competition.data[3].setAudience[0];
            //console.log('time ', this.getCompetition.start_time)
            if (_this.getCompetition.league_date < _this.jstoday) {
                _this.alertService.pop('error', 'Daily Competiton has completed, you can not edit!');
                _this.router.navigate(['/daily']);
            }
            _this.preview = _this.s3_url + _this.getCompetition.logo;
            _this.appLogo = _this.s3_url + _this.getCompetition.app_logo;
            _this.audienceLogo = _this.s3_url + _this.setAudience.image_upload;
            _this.companyLogo = _this.s3_url + _this.getNarration.company_logo;
            _this.audSrcPreview = _this.s3_url + _this.getNarration.narration_url;
            _this.notificationLogo = _this.s3_url + _this.getCompetition.notification_logo;
            //console.log('this.getNarration.narration_text', this.getNarration.narration_text)
            if (_this.getNarration.narration_text == '') {
                _this.narrationOptions = 'url';
            }
            else {
                _this.narrationOptions = 'text';
            }
            // var dateObj = new Date(this.getCompetition.start_date + ' ' + this.getCompetition.start_time);
            // console.log(dateObj);
            _this.selectedType = _this.getCompetition.promotion_type;
            _this.narrationType = _this.getCompetition.narration_type;
            _this.notificationType = _this.getCompetition.notification_type;
            //console.log(this.getCompetition.notification_type);
            var set_audience = 'no';
            if (_this.getCompetition.set_audience == true) {
                set_audience = 'no';
                _this.showTargetAudience = true;
            }
            else {
                set_audience = 'yes';
                _this.showTargetAudience = false;
            }
            //split time here
            var arr = _this.getCompetition.waiting_time.split(':');
            var hour = parseInt(arr[0]);
            var min = arr[1];
            var sec = arr[2];
            console.log(_this.getCompetition.start_date);
            var realDateObject = new Date(_this.getCompetition.start_date);
            console.log(typeof realDateObject);
            var dd = realDateObject.getDate();
            var mm = realDateObject.getMonth();
            var yyyy = realDateObject.getFullYear();
            var start_date = new Date(yyyy, mm, dd);
            _this.formVar.patchValue({
                logo: [null],
                competitionName: _this.getCompetition.compitition_name,
                description: _this.getCompetition.description,
                startTime: _this.getCompetition.start_time,
                endTime: _this.getCompetition.end_time,
                startDate: start_date,
                endDate: _this.datePipe.transform(_this.getCompetition.end_date, "yyyy-MM-dd"),
                promotion_type: _this.getCompetition.promotion_type,
                instragramUrl: _this.getCompetition.instagram_url,
                twitterUrl: _this.getCompetition.twitter_url,
                snapchatUrl: _this.getCompetition.snapchat_url,
                app_logo: _this.getCompetition.app_logo,
                app_name: _this.getCompetition.app_name,
                apple_store_url: _this.getCompetition.apple_store_url,
                google_play_url: _this.getCompetition.google_play_url,
                affiliate_url: _this.getCompetition.affiliate_url,
                narration_type: _this.getCompetition.narration_type,
                narration_url: _this.getNarration.narration_url,
                narration_text: _this.getNarration.narration_text,
                narration_time: _this.getNarration.narration_time,
                narration_second_time: _this.getNarration.narration_time.split(':')[2],
                company_logo: _this.getNarration.company_logo,
                company_name: _this.getNarration.company_name,
                company_link: _this.getNarration.company_link,
                company_about: _this.getNarration.company_about,
                live_stream_url: _this.getNarration.live_stream_url,
                gender: _this.setAudience.gender,
                state: _this.setAudience.state,
                area_locality: _this.setAudience.area_locality,
                age_range: _this.setAudience.age_range,
                nationality: _this.setAudience.nationality,
                city: _this.setAudience.city,
                country: _this.setAudience.country,
                push_notification: _this.setAudience.push_notification,
                audience_description: _this.setAudience.audience_description,
                title: _this.setAudience.title,
                image_upload: _this.setAudience.image_upload,
                slot_time: _this.getCompetition.slot_time,
                //competition_type:['daily'],
                imageInput: [''],
                waiting_time: _this.getCompetition.waiting_time,
                minute_time: min,
                second_time: sec,
                startDateTime: _this.getCompetition.league_date,
                broadcaster: _this.getCompetition.broadcaster_id,
                bypass_audience: set_audience,
                notification_type: _this.getCompetition.notification_type,
                notification_text: _this.getCompetition.notification_text,
                apple_schema: _this.getCompetition.apple_schema,
            });
        });
    };
    EditDailyCompetitionComponent.prototype.editItem = function (event) {
        this.editData = event;
        this.isEdit = true;
        this.isSave = false;
        this.idEdit = this.editData.id;
        document.getElementById('buttonHide')
            .style.display = 'none';
        //this.question_value=this.editData.question;
        //console.log('---------------->>');
        //console.log(this.question_value);
        //const domEditableElement = document.querySelector('.ck-editor__editable');
        //const editorInstance = domEditableElement.ckeditorInstance;
        //editorInstance.setData(this.editData.question );
        //console.log('<<----------------');
        this.form.patchValue({
            question: this.editData.question_name,
            option1: this.editData.option1,
            option2: this.editData.option2,
            option3: this.editData.option3,
            option4: this.editData.option4,
            answer: this.editData.answer,
            class: this.editData.class,
            note: this.editData.note,
            level: this.editData.level,
            duration: this.editData.duration
        });
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
    EditDailyCompetitionComponent.prototype.getBroadcaster = function () {
        var _this = this;
        this.dcService.getBroadcaster().subscribe(function (broadcaster) {
            _this.broadcasterData = broadcaster.data;
            //console.log('broadcaster '+JSON.stringify(broadcaster));
        });
    };
    EditDailyCompetitionComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isSave = true;
        document.getElementById('buttonHide').style.display = 'block';
    };
    EditDailyCompetitionComponent.prototype.onClick = function (event) {
        this.showModal = true; // Show-Hide Modal Check
    };
    EditDailyCompetitionComponent.prototype.hide = function () {
        this.showModal = false;
    };
    EditDailyCompetitionComponent.prototype.setFormPreview = function (formValue) {
        this.formData = formValue;
        //var date_timeUTC = new Date(this.formData.startDateTime).toISOString();
        //this.dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
        //this.timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');
        //var dateStringISO = new Date(this.formData.startDateTime).toLocaleString('en-IN', {timeZone: "Asia/Kolkata"})
        //this.dateString = dateStringISO.split(',')[0];
        //this.timeString = dateStringISO.split(',')[1];
        //console.log(this.dateString);
        //console.log(this.timeString);
        this.showNarration_time = '00:00:' + formValue.narration_second_time;
    };
    EditDailyCompetitionComponent.prototype.onChange = function (event) {
        this.selectedType = event.target.value;
    };
    EditDailyCompetitionComponent.prototype.narrationonChange = function (event) {
        this.narrationType = event.target.value;
    };
    EditDailyCompetitionComponent.prototype.narrationOption = function (event) {
        this.narrationOptions = event.target.value;
    };
    EditDailyCompetitionComponent.prototype.notificationonChange = function (event) {
        this.notificationType = event.target.value;
    };
    EditDailyCompetitionComponent.prototype.changeBypassAudience = function (event) {
        //console.log(event.target.value);
        var isSetAudience = event.target.value;
        if (isSetAudience == 'yes') {
            this.showTargetAudience = false;
        }
        else {
            this.showTargetAudience = true;
        }
    };
    EditDailyCompetitionComponent.prototype.getCountry = function () {
        var _this = this;
        this.dcService.getCountry().subscribe(function (broadcaster) {
            _this.countryData = broadcaster.data;
            //console.log('broadcaster '+JSON.stringify(broadcaster));
        });
        this.dcService.getNationality().subscribe(function (national) {
            _this.nationalityData = national.data;
            //console.log('nationalityData '+JSON.stringify(this.nationalityData));
        });
    };
    // Image Preview
    EditDailyCompetitionComponent.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: 'image/jpg'
        });
    };
    EditDailyCompetitionComponent.prototype.imageCropped = function (event, image_type) {
        // this.croppedImage = event.base64;
        console.log('image_type', image_type);
        // console.log(event);
        if (image_type == 'logo') {
            var base64 = event.base64;
            var imageName = 'logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                logo: imageFile
            });
            this.formVar.get('logo').updateValueAndValidity();
            // File Preview
            this.preview = event.base64;
        }
        else if (image_type == 'image_upload') {
            var base64 = event.base64;
            var imageName = 'image_upload.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                image_upload: imageFile
            });
            this.formVar.get('image_upload').updateValueAndValidity();
            // File Preview
            this.audienceLogo = event.base64;
        }
        else if (image_type == 'app_logo') {
            var base64 = event.base64;
            var imageName = 'app_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                app_logo: imageFile
            });
            this.formVar.get('app_logo').updateValueAndValidity();
            // File Preview
            this.appLogo = event.base64;
        }
        else if (image_type == 'company_logo') {
            var base64 = event.base64;
            var imageName = 'company_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                company_logo: imageFile
            });
            this.formVar.get('company_logo').updateValueAndValidity();
            // File Preview
            this.companyLogo = event.base64;
        }
        else if (image_type == 'notification_logo') {
            var base64 = event.base64;
            var imageName = 'notification_logo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                notification_logo: imageFile
            });
            this.formVar.get('notification_logo').updateValueAndValidity();
            // File Preview
            this.notificationLogo = event.base64;
        }
    };
    EditDailyCompetitionComponent.prototype.imageLoaded = function () {
        /* show cropper */
        //this.showCropper = true;
        console.log('Image loaded');
    };
    EditDailyCompetitionComponent.prototype.cropperReady = function () {
        /* cropper ready */
        console.log('cropper Ready');
    };
    EditDailyCompetitionComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('', 'Please upload image only', 'error');
    };
    EditDailyCompetitionComponent.prototype.closePopup = function () {
        this.showCropModal = false;
    };
    // Image Preview
    EditDailyCompetitionComponent.prototype.uploadCompetitionLogo = function (event) {
        this.imageChangedEvent = '';
        var fileIn = event.target.files[0]; // <--- File Object for future use.
        this.formVar.controls['imageInput'].setValue(fileIn ? fileIn.name : ''); // <-- Set Value for Validation
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'logo';
        var file = event.target.files[0];
        console.log('file', file);
        console.log('this.imageChangedEvent', this.imageChangedEvent);
    };
    EditDailyCompetitionComponent.prototype.uploadAudienceLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'image_upload';
        // this.formVar.patchValue({
        //   image_upload: file
        // });
        // this.formVar.get('image_upload').updateValueAndValidity()
        // // File Preview
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.audienceLogo = reader.result as string;
        // }
        // reader.readAsDataURL(file)
    };
    EditDailyCompetitionComponent.prototype.uploadAppLogo = function (event) {
        this.imageChangedEvent = '';
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'app_logo';
        console.log('app_logofile', file);
        console.log('this.imageChangedEvent', this.imageChangedEvent);
    };
    EditDailyCompetitionComponent.prototype.uploadCompanyLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'company_logo';
    };
    EditDailyCompetitionComponent.prototype.uploadNotificationLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'notification_logo';
    };
    EditDailyCompetitionComponent.prototype.audFileSelected = function (event) {
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.formVar.patchValue({
                narration_url: file
            });
            this.formVar.get('narration_url').updateValueAndValidity();
            this.audSrc = URL.createObjectURL(event.target.files[0]);
            console.log(this.audSrc);
            this.figAudio.nativeElement.src = this.audSrc;
        }
    };
    EditDailyCompetitionComponent.prototype.selectAll = function () {
        this.selectedAll = !this.selectedAll;
        this.selectedItems = [];
        for (var i = 0; i < this.getQuestion.length; i++) {
            this.getQuestion[i].selected = this.selectedAll;
            //console.log(this.selectedAll)
            if (this.selectedAll == true) {
                this.selectedItems.push(this.getQuestion[i].id);
            }
            else {
                this.selectedItems.splice(this.selectedItems.indexOf(this.getQuestion[i].id), 1);
            }
        }
        //console.log(this.selectedItems)
    };
    EditDailyCompetitionComponent.prototype.checkIfAllSelected = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
        //console.log(this.selectedItems)
    };
    EditDailyCompetitionComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                //console.log(item_id);
                //console.log(self.getQuestion);
                //self.getQuestion.splice(self.getQuestion.indexOf(item_id),1);
                self.dcService.deleteQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    //self.getDraftQuestion();
                    //self.getQuestion.splice(self.getQuestion.indexOf(item_id),1);
                    _this.removeByAttr(self.getQuestion, 'id', item_id);
                });
                if (self.getQuestion.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    EditDailyCompetitionComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
                    self.getQuestion.forEach(function (arrItem) {
                        if (value == arrItem.id) {
                            self.getQuestion.splice(self.getQuestion.indexOf(arrItem), 1);
                            self.dcService.deleteQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.getQuestion.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    EditDailyCompetitionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('submit');
        if (!this.formVar.valid) {
            //this.formVar.markAllAsTouched();
            //this.stepper.validateSteps();
        }
        //console.log('Submitted data', this.formVar.value);
        var competition_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.dcService.updateCompetition(this.formVar.value, competition_id)
            .subscribe(function (event) {
            console.log('event.type ' + event.type);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    console.log('event.body.message ' + event.body.message);
                    //console.log('User successfully created!', event.body);
                    if (event.body.message == 'Record inserted') {
                        _this.alertService.pop('success', 'Daily Competiton updated successfully!');
                        _this.router.navigate(['/daily']);
                    }
                    else {
                        _this.alertService.pop('error', event.body.message);
                    }
                    _this.percentDone = false;
            }
        });
    };
    EditDailyCompetitionComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire('', 'Please select correct answer.', 'error');
            return;
        }
        /* if(this.question_value=='' ){
          Swal.fire('','Please write question.','error');
          return;
        } */
        //this.gridview=true;
        //this.form.value.q_id=this.row_id;
        // this.row_id=this.row_id+1;
        //this.form.value.question=this.question_value;
        this.form.value.created_by = this.created_by;
        //this.questionArr.push(this.form.value);
        //console.log(this.form.value);
        //this.form.reset();
        this.loading = true;
        /////update in temp////
        this.form.value.id = this.idEdit;
        //console.log(this.form.value);
        console.log('---------->>>>>>>>');
        this.dcService.updateQuestionCompetition(this.form.value)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                var competition_id = _this.activatedRoute.snapshot.paramMap.get('id');
                //this.getDailyCompetition(competition_id);
                var getArr = data['data'][0];
                //console.log(data['data'][0]);
                _this.getQuestion = _this.getQuestion.map(function (u) { return u.id !== getArr.id ? u : getArr; });
                //this.getQuestion = (arr1, arr2) => arr1 && arr1.map(obj => arr2 && arr2.find(p => p.id === obj.id) || obj);
                _this.alertService.pop('success', 'Question successfully updated');
                //setTimeout(()=>this.router.navigate(['/study-exam']), 1000);
                _this.idEdit = false;
                _this.isEdit = false;
                _this.isProcessed = true;
                _this.isSave = true;
                document.getElementById('buttonHide').style.display = 'block';
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
    EditDailyCompetitionComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
            var today = new Date().toISOString().split('T')[0];
            var todayTime = new Date().toISOString().split('T')[1];
            var tt = todayTime.split('.')[0];
            console.log(today);
            //console.log(todayTime);
            //console.log(tt);
            //document.getElementsByName("start_time")[0].setAttribute('min', today);
            //document.getElementById("start_date").setAttribute("min", today);
            //document.getElementById("end_date").setAttribute("min", today);
            //document.getElementById("start_time").setAttribute("min", tt);
            var navListItems = jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a'), allWells = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.setup-content'), allNextBtn = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.nextBtn'), allPrevBtn = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.prevBtn');
            allWells.hide();
            navListItems.click(function (e) {
                e.preventDefault();
                var $target = jquery__WEBPACK_IMPORTED_MODULE_12___default()(jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).attr('href')), $item = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this);
                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-success').addClass('active');
                    $item.addClass('btn-success');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
            allPrevBtn.click(function () {
                var curStep = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), prevStepWizard = jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"), curInputs = curStep.find("input[type='text'],input[type='url']"), isValid = true;
                //alert(curStepBtn);
                jquery__WEBPACK_IMPORTED_MODULE_12___default()(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (!curInputs[i].validity.valid) {
                        //isValid = false;
                        //$(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
                if (isValid)
                    prevStepWizard.removeAttr('disabled').trigger('click');
            });
            allNextBtn.click(function () {
                var curStep = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='url'],input[type='file'],input[type='date'],input[type='time'],textarea,select"), isValid = true;
                //console.log('hello');
                jquery__WEBPACK_IMPORTED_MODULE_12___default()(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (!curInputs[i].validity.valid) {
                        isValid = false;
                        jquery__WEBPACK_IMPORTED_MODULE_12___default()(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }
                console.log(isValid);
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });
            jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a.btn-success').trigger('click');
        });
    };
    EditDailyCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_4__["DcService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["DateTimeAdapter"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditDailyCompetitionComponent.prototype, "figAudio", void 0);
    EditDailyCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-daily-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-daily-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/edit/edit-daily-competition.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-daily-competition.component.scss */ "./src/app/pages/daily-competition/edit/edit-daily-competition.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_dc_service__WEBPACK_IMPORTED_MODULE_4__["DcService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["DateTimeAdapter"]])
    ], EditDailyCompetitionComponent);
    return EditDailyCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/list/list-daily.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/daily-competition/list/list-daily.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Competitive-exam-wrap .competitive-exam .card {\n  padding: 25px 15px;\n}\n\n.competitive-exam .card .title {\n  margin-bottom: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #18BBB1;\n}\n\n.competitive-exam .card .text-c-pink {\n  margin-bottom: 2px;\n}\n\n.competitive-exam .card .status {\n  margin-top: 7px;\n}\n\n.creat-new-btn {\n  margin: 0;\n  float: left;\n  font-size: 16px;\n}\n\n.filter-wrap {\n  margin-bottom: 25px;\n}\n\n.Competitive-exam-wrap {\n  padding: 30px 25px 25px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vbGlzdC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcZGFpbHktY29tcGV0aXRpb25cXGxpc3RcXGxpc3QtZGFpbHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhaWx5LWNvbXBldGl0aW9uL2xpc3QvbGlzdC1kYWlseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFBaUMsbUJBQUE7RUFBcUIsZUFBQTtFQUFnQixnQkFBQTtFQUFtQixjQUFBO0FDR3pGOztBREZBO0VBQXVDLGtCQUFBO0FDTXZDOztBRExBO0VBQWtDLGVBQUE7QUNTbEM7O0FEUkE7RUFBaUIsU0FBQTtFQUFXLFdBQUE7RUFBYSxlQUFBO0FDY3pDOztBRGJBO0VBQWUsbUJBQUE7QUNpQmY7O0FEaEJBO0VBQXdCLDRCQUFBO0FDb0J4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LWNvbXBldGl0aW9uL2xpc3QvbGlzdC1kYWlseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLkNvbXBldGl0aXZlLWV4YW0td3JhcCAuY29tcGV0aXRpdmUtZXhhbSAuY2FyZCB7XHJcbiAgICBwYWRkaW5nOjI1cHggMTVweDtcclxufVxyXG5cclxuLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQgLnRpdGxlIHsgbWFyZ2luLWJvdHRvbTogMTVweDsgZm9udC1zaXplOjE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7ICBjb2xvcjogIzE4QkJCMTt9XHJcbi5jb21wZXRpdGl2ZS1leGFtIC5jYXJkIC50ZXh0LWMtcGluayB7IG1hcmdpbi1ib3R0b206MnB4O31cclxuLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQgLnN0YXR1cyB7IG1hcmdpbi10b3A6N3B4O31cclxuLmNyZWF0LW5ldy1idG4geyBtYXJnaW46IDA7IGZsb2F0OiBsZWZ0OyBmb250LXNpemU6IDE2cHg7fVxyXG4uZmlsdGVyLXdyYXAgeyBtYXJnaW4tYm90dG9tOiAyNXB4O31cclxuLkNvbXBldGl0aXZlLWV4YW0td3JhcCB7cGFkZGluZzogMzBweCAyNXB4IDI1cHggMjVweDt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLkNvbXBldGl0aXZlLWV4YW0td3JhcCAuY29tcGV0aXRpdmUtZXhhbSAuY2FyZCB7XG4gIHBhZGRpbmc6IDI1cHggMTVweDtcbn1cblxuLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzE4QkJCMTtcbn1cblxuLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQgLnRleHQtYy1waW5rIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uY29tcGV0aXRpdmUtZXhhbSAuY2FyZCAuc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uY3JlYXQtbmV3LWJ0biB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZpbHRlci13cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLkNvbXBldGl0aXZlLWV4YW0td3JhcCB7XG4gIHBhZGRpbmc6IDMwcHggMjVweCAyNXB4IDI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/daily-competition/list/list-daily.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/daily-competition/list/list-daily.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListDailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDailyComponent", function() { return ListDailyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dc.service */ "./src/app/services/dc.service.ts");



var ListDailyComponent = /** @class */ (function () {
    function ListDailyComponent(dcService) {
        this.dcService = dcService;
        this.dailyList = [];
        this.jstoday = '';
        this.isLoading = false;
    }
    ListDailyComponent.prototype.ngOnInit = function () {
        this.jstoday = new Date().toISOString();
        this.getAllLeague();
    };
    ListDailyComponent.prototype.getAllLeague = function () {
        var _this = this;
        this.isLoading = true;
        this.dcService.getList().subscribe(function (daily) {
            //console.log(daily.data)
            _this.dailyList = daily.data;
            _this.isLoading = false;
        });
    };
    ListDailyComponent.ctorParameters = function () { return [
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_2__["DcService"] }
    ]; };
    ListDailyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-daily.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/list/list-daily.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-daily.component.scss */ "./src/app/pages/daily-competition/list/list-daily.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dc_service__WEBPACK_IMPORTED_MODULE_2__["DcService"]])
    ], ListDailyComponent);
    return ListDailyComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-competition/view/view-daily-competition.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/daily-competition/view/view-daily-competition.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#step-7 {\n  overflow-wrap: anywhere;\n}\n\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n\n#step-7 img {\n  max-width: 100px !important;\n}\n\nlabel.control-label {\n  display: block;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n\n.pagination {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHktY29tcGV0aXRpb24vdmlldy9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcZGFpbHktY29tcGV0aXRpb25cXHZpZXdcXHZpZXctZGFpbHktY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhaWx5LWNvbXBldGl0aW9uL3ZpZXcvdmlldy1kYWlseS1jb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLHVCQUFBO0FDRVQ7O0FEREE7RUFBVSxxQ0FBQTtBQ0tWOztBREpBO0VBQXVDLG1CQUFBO0VBQXFCLHFDQUFBO0VBQW1DLGFBQUE7QUNVL0Y7O0FEVEE7RUFBcUIsbUJBQUE7QUNhckI7O0FEWkE7RUFBYywyQkFBQTtBQ2dCZDs7QURmQTtFQUFxQixjQUFBO0FDbUJyQjs7QURsQkE7RUFBNEMsV0FBQTtBQ3NCNUM7O0FEckJBO0VBQWEsU0FBQTtBQ3lCYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LWNvbXBldGl0aW9uL3ZpZXcvdmlldy1kYWlseS1jb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdGVwLTcge292ZXJmbG93LXdyYXA6IGFueXdoZXJlO31cclxuLmdyYXktYmcge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXA6bnRoLW9mLXR5cGUoZXZlbikge21hcmdpbi1ib3R0b206IDI1cHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTsgcGFkZGluZzogMTBweDt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXAge21hcmdpbi1ib3R0b206IDI1cHg7fVxyXG4jc3RlcC03IGltZyB7IG1heC13aWR0aDoxMDBweCFpbXBvcnRhbnQ7IH1cclxubGFiZWwuY29udHJvbC1sYWJlbCB7ZGlzcGxheTpibG9jazt9XHJcbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7ZmxvYXQ6IGxlZnQ7fVxyXG4ucGFnaW5hdGlvbiB7bWFyZ2luOiAwO31cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIiNzdGVwLTcge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3N0ZXAtNyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNzdGVwLTcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG5sYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/daily-competition/view/view-daily-competition.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/daily-competition/view/view-daily-competition.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewDailyCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDailyCompetitionComponent", function() { return ViewDailyCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var ViewDailyCompetitionComponent = /** @class */ (function () {
    function ViewDailyCompetitionComponent(router, activatedRoute, dcService, alertService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dcService = dcService;
        this.alertService = alertService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].s3_url;
        this.getCompetition = [];
        this.getQuestion = [];
        this.getNarration = [];
        this.setAudience = [];
        this.dailyList = [];
        this.isDesc = false;
        this.column = 'id';
        this.show = false;
        this.jstoday = '';
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 25, 50, 100];
        this.removeByAttr = function (arr, attr, value) {
            var i = arr.length;
            while (i--) {
                if (arr[i]
                    && arr[i].hasOwnProperty(attr)
                    && (arguments.length > 2 && arr[i][attr] === value)) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        };
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
    }
    ViewDailyCompetitionComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.jstoday = new Date().toISOString();
        this.term1 = '';
        this.term2 = '0';
        this.term = '';
        this.getAllDaily();
        this.getTimeZone();
    };
    ViewDailyCompetitionComponent.prototype.getAllDaily = function () {
        var _this = this;
        this.show = true;
        var params = this.getRequestParams(this.term, this.page, this.pageSize);
        this.dcService.getList().subscribe(function (daily) {
            //console.log(daily.data)
            _this.dailyList = daily.data;
            _this.config.totalItems = _this.dailyList.length;
        });
    };
    Object.defineProperty(ViewDailyCompetitionComponent.prototype, "route", {
        get: function () { return this.router.url; },
        enumerable: true,
        configurable: true
    });
    ViewDailyCompetitionComponent.prototype.getTimeZone = function () {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        this.setOffset = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
        console.log(this.setOffset);
    };
    //custom search & pagination
    ViewDailyCompetitionComponent.prototype.getRequestParams = function (searchText, page, pageSize) {
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
    ViewDailyCompetitionComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getAllDaily();
    };
    ViewDailyCompetitionComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getAllDaily();
    };
    ViewDailyCompetitionComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ViewDailyCompetitionComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ViewDailyCompetitionComponent.prototype.goBack = function () {
        this.show = true;
    };
    ViewDailyCompetitionComponent.prototype.changeStatus = function (status, competition_id) {
        var _this = this;
        var self = this;
        var showMessage;
        if (status == 0) {
            showMessage = 'Unapproved';
        }
        else {
            showMessage = 'Approved';
        }
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure want to ' + showMessage + '?',
            //text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, ' + showMessage + ' it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                //console.log(item_id);
                _this.dcService.updateStatus(status, competition_id)
                    .subscribe(function (data) {
                    //console.log(data);
                    _this.alertService.pop('success', 'Competition updated successfully');
                    //this.router.navigate(['/League']);
                    var getArr = data['data'][0];
                    _this.getStatus = status;
                    _this.dailyList = _this.dailyList.map(function (u) { return u.id !== getArr.id ? u : getArr; });
                }, function (error) {
                    _this.alertService.pop('error', error);
                });
                console.log('Competition updated');
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire(showMessage + '!', 'Your data has been ' + showMessage + '.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    ViewDailyCompetitionComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure want to delete?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                //console.log(item_id);
                //console.log(self.dailyList);
                //self.dailyList.splice(self.dailyList.indexOf(item_id),1);
                self.dcService.deleteCompetition(item_id).subscribe(function () {
                    console.log('deleted competition row');
                    //self.getDraftQuestion();
                    //self.dailyList.splice(self.dailyList.indexOf(item_id),1);
                    _this.removeByAttr(self.dailyList, 'id', item_id);
                });
                if (self.dailyList.length == 0) {
                    //this.isProcessed=false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    ViewDailyCompetitionComponent.prototype.getDailyCompetition = function (id) {
        var _this = this;
        this.show = false;
        console.log(id);
        this.dcService.editCompetition(id).subscribe(function (competition) {
            console.log(competition.data);
            _this.getCompetition = competition.data[0].competition[0];
            _this.getQuestion = competition.data[1].question;
            _this.getNarration = competition.data[2].narration[0];
            _this.setAudience = competition.data[3].setAudience[0];
            _this.preview = _this.s3_url + _this.getCompetition.logo;
            _this.appLogo = _this.s3_url + _this.getCompetition.app_logo;
            _this.audienceLogo = _this.s3_url + _this.setAudience.image_upload;
            _this.companyLogo = _this.s3_url + _this.getNarration.company_logo;
        });
    };
    ViewDailyCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
    ]; };
    ViewDailyCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-daily-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-daily-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/daily-competition/view/view-daily-competition.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-daily-competition.component.scss */ "./src/app/pages/daily-competition/view/view-daily-competition.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dc_service__WEBPACK_IMPORTED_MODULE_3__["DcService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], ViewDailyCompetitionComponent);
    return ViewDailyCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/multi-step-form/multi-step-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/multi-step-form/multi-step-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-label {\r\n  font-size: 0.875em;\r\n}\r\n\r\n.validation-error {\r\n  color: #cc3c3c;\r\n  font-size: 0.750em;\r\n}\r\n\r\n.active {\r\n  color: red;\r\n}\r\n\r\n.active1 {\r\n  color: red;\r\n  border: 2px #cc3c3c solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXVsdGktc3RlcC1mb3JtL211bHRpLXN0ZXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tdWx0aS1zdGVwLWZvcm0vbXVsdGktc3RlcC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcclxufVxyXG5cclxuLnZhbGlkYXRpb24tZXJyb3Ige1xyXG4gIGNvbG9yOiAjY2MzYzNjO1xyXG4gIGZvbnQtc2l6ZTogMC43NTBlbTtcclxufVxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5hY3RpdmUxIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogMnB4ICNjYzNjM2Mgc29saWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/multi-step-form/multi-step-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/multi-step-form/multi-step-form.component.ts ***!
  \********************************************************************/
/*! exports provided: MultiStepFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiStepFormComponent", function() { return MultiStepFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MultiStepFormComponent = /** @class */ (function () {
    function MultiStepFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MultiStepFormComponent.prototype.ngOnInit = function () {
        // TODO: add interfaces and enums wherever appropriate
        var _this = this;
        this.activeStepIndex = 0;
        this.masterForm = [];
        this.currentFormContent = [];
        this.formFields = [];
        this.stepItems = this.formContent;
        // NOTE: this can be cofigured to create a single form when needed
        this.stepItems.forEach(function (data, i) {
            // holds name, validators, placeholder of all steps
            _this.currentFormContent.push(_this.stepItems[i]['data']);
            // holds string values for each field of all steps
            _this.formFields.push(Object.keys(_this.currentFormContent[i]));
            console.log(_this.currentFormContent);
            // holds all form groups
            _this.masterForm.push(_this.buildForm(_this.currentFormContent[i]));
        });
    };
    // build separate FormGroups for each form
    MultiStepFormComponent.prototype.buildForm = function (currentFormContent) {
        var _this = this;
        var formDetails = Object.keys(currentFormContent).reduce(function (obj, key) {
            obj[key] = ['', _this.getValidators(currentFormContent[key])];
            return obj;
        }, {});
        return this._formBuilder.group(formDetails);
    };
    // get validator(s) for each field, if any
    MultiStepFormComponent.prototype.getValidators = function (formField) {
        var fieldValidators = Object.keys(formField.validations).map(function (validator) {
            if (validator === 'required') {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator];
            }
            else {
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validator](formField.validations[validator]);
            }
        });
        return fieldValidators;
    };
    // get validation error messages per error, per field
    MultiStepFormComponent.prototype.getValidationMessage = function (formIndex, formFieldName) {
        var formErrors = this.masterForm[formIndex].get(formFieldName).errors;
        var errorMessages = this.currentFormContent[formIndex][formFieldName]
            .errors;
        var validationError = errorMessages[Object.keys(formErrors)[0]];
        return validationError;
    };
    MultiStepFormComponent.prototype.goToStep = function (step) {
        this.activeStepIndex =
            step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
        this.setFormPreview();
    };
    MultiStepFormComponent.prototype.setFormPreview = function () {
        this.formData = this.masterForm.reduce(function (masterForm, currentForm) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, masterForm, currentForm.value)); }, {});
        this.masterFormFields = Object.keys(this.formData);
    };
    MultiStepFormComponent.prototype.onFormSubmit = function () {
        // emit aggregate form data to parent component, where we POST
        this.formSubmit.emit(this.formData);
    };
    MultiStepFormComponent.prototype.trackByFn = function (index) {
        return index;
    };
    MultiStepFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultiStepFormComponent.prototype, "formContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiStepFormComponent.prototype, "formSubmit", void 0);
    MultiStepFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-step-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multi-step-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/multi-step-form/multi-step-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multi-step-form.component.css */ "./src/app/pages/multi-step-form/multi-step-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MultiStepFormComponent);
    return MultiStepFormComponent;
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
//# sourceMappingURL=pages-daily-competition-daily-competition-module.js.map