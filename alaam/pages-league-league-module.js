(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-league-league-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/edit/edit-league-competition.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/edit/edit-league-competition.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container daily-competition-wrap\">\r\n\t<div class=\"stepwizard\">\r\n\t  <div class=\"stepwizard-row setup-panel\">\r\n\t\t  <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t\t  <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-2\" id=\"foo\"  type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t\t  <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t\t  <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t\t  <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-5\" id=\"reviewStep\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\r\n\t\t\t  \r\n\t\t  </div>\r\n\t\t  <!-- <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-6\"  type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">6</a>\r\n\t\t\t  \r\n\t\t  </div> -->\r\n\t\t  <!-- <div class=\"stepwizard-step\"> \r\n\t\t\t  <a href=\"#step-7\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">7</a>\r\n\t\t\t  \r\n\t\t  </div> -->\r\n\t\t  \r\n\t  </div>\r\n\t</div>\r\n\t  <form role=\"form\" class=\"k-form\" [formGroup]=\"formVar\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\">\r\n\t\t \r\n\t\t<div class=\"panel panel-primary setup-content\" id=\"step-1\">\r\n\t\t\t  <div class=\"panel-heading\">\r\n\t\t\t\t   <h3 class=\"panel-title\">Edit League</h3>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"panel-body\">\r\n\t\t\t\t  <div class=\"row\"> \r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-4 \"> \r\n\t\t\t\t\t\t<div class=\"competition-logo-upload form-group\"> \r\n\t\t\t\t\t\t\t<label> League Logo Upload </label>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadCompetitionLogo($event)\" >\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\" required [ngClass]=\"{ 'is-invalid': f.imageInput.errors }\"/> <!-- Validation Field -->\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div *ngIf=\"f.imageInput.errors\" class=\"invalid-feedback\" >\r\n\t\t\t\t\t\t<div *ngIf=\"f.imageInput.errors.required\"><label> League logo is required </label></div>\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div> -->\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <!-- Image Preview -->\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t\t<img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"100\" width=\"100\" >\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n  \r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-8 \"> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t  <label class=\"control-label\">Name of the competition</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t  <input class=\"form-control\"  formControlName=\"competitionName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.competitionName.errors }\">\r\n\t\t\t\t\t\t</div>\r\n  \r\n\t\t\t\t\t\t<!-- <div class=\"form-group  m-b-15\">\r\n\t\t\t\t\t\t  <label>Description</label>\r\n\t\t\t\t\t\t  <textarea class=\"form-control\" cols=\"5\"  formControlName=\"description\" placeholder=\"Default textarea\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.description.errors }\"></textarea>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<div class=\"form-group  m-b-15\"> \r\n\t\t\t\t\t\t  <label>Question Type</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control select2\" formControlName=\"question_type\" type=\"text\" style=\"width: 100%;\" (change)=\"questionChange($event)\" required [ngClass]=\"{ 'is-invalid': f.question_type.errors }\">\r\n\t\t\t\t\t\t\t  <option value=\"\" [selected]=\"true\">--Select--</option>\r\n\t\t\t\t\t\t\t <option value=\"category\" >System upload of questions</option>\r\n\t\t\t\t\t\t\t <option value=\"bulk\" >Self upload of questions</option>\r\n\t\t\t\t\t\t  </select> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div  *ngIf=\"questionType == 'category'\">\r\n\t\t\t\t\t  <div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t<label>Categories</label> <!-- (onSelectAll)=\"onSelectAll($event)\"   [ngModelOptions]=\"{standalone: true}\" -->\r\n\t\t\t\t\t\t<ng-multiselect-dropdown  formControlName=\"categories\" required [ngClass]=\"{ 'is-invalid': f.categories.errors }\"\r\n\t\t\t\t\t\t  [placeholder]=\"'Select Categories'\"\r\n\t\t\t\t\t\t  [data]=\"dropdownList\"\r\n\t\t\t\t\t\t  [(ngModel)]=\"selectedItems\"\r\n\t\t\t\t\t\t  [settings]=\"dropdownSettings\"\r\n\t\t\t\t\t\t  (onSelect)=\"onItemSelect($event)\"\r\n\t\t\t\t\t\t  (onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</ng-multiselect-dropdown>\r\n\t\t\t\t\t\t<div *ngIf=\"f.categories.errors\" \r\n\t\t\t\t\t\t\tclass=\"text-danger mt-1\">\r\n\t\t\t\t\t\t  <div *ngIf=\"f.categories.errors.required\">\r\n\t\t\t\t\t\t\tCategories is required.\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t<!-- spinnner element is defined with id loading -->\r\n\t\t\t\t\t<div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n\t\t\t\t\t\t<div class=\"spinner-border\" role=\"status\"> \r\n\t\t\t\t\t\t\t<span class=\"sr-only\" id=\"loading\"></span> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n  \r\n\t\t\t\t\t<div *ngIf=\"!isProcessed && (errorCode == 1 )\"><h1 class=\"sucessful\">{{errorDesc}}</h1></div>\r\n\t\t\t\t\t  <div *ngIf=\"isError\">\r\n\t\t\t\t\t  <h3 class=\"errors-following\">Following data is having errors:</h3>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  \r\n\t\t\t\t\t\t<div class=\"publish-table-wrap table-responsive\">\r\n\t\t\t\t\t  <table width=\"100%\" border=\"1\" class=\"table table-striped table-bordered nowrap dataTable\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t<!-- <th width=\"10%\">Category</th> -->\r\n\t\t\t\t\t\t\t<th width=\"10%\">Question</th>\r\n\t\t\t\t\t\t\t<!-- <th width=\"10%\">Question File Url</th> -->\r\n\t\t\t\t\t\t\t<th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 2</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t  <th width=\"10%\">Level</th>\r\n\t\t\t\t\t  <th width=\"10%\">Duration</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Notes</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Remarks</th>\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t  <tr *ngFor=\"let item of errorData\">\r\n\t\t\t\t\t\t\t<!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.question }}</td>\r\n\t\t\t\t\t\t\t<!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t  <td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t\t\t  <td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.notes }}</td>\r\n\t\t\t\t\t\t\t<td [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t  </table>\r\n\t\t\t\t\t   </div>\r\n\t\t\t\t\t   \r\n  \r\n  \r\n  \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div *ngIf=\"!isError && isProcessed\">\r\n\t\t\t\t\t\t<h1 class=\"sucessful\">Data validated successfully</h1>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <div class=\"col-sm-12 col-md-12 mt-3\"> \r\n\t\t\t\t\t<button (click)=\"showQuestion(formVar.value)\" class=\"btn allam-btn-green text-white nextBtn pull-right uploadButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }}</button>\r\n\t\t\t\t\t\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n  \r\n\t\t\t\t\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-primary setup-content\" id=\"step-2\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t <h3 class=\"panel-title\">Competition Data</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"row\" *ngIf=\"isSave\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t\t  <div class=\"dt-responsive table-responsive\">\r\n\t\t\t\t\t<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t\t\t\t  <thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th *ngIf=\"questionShow\"><span class=\"option-width\"><input class=\"form-check-input\" type=\"checkbox\" (change)=\"selectAll()\" [checked]=\"selectedAll\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"btn allam-btn btn-warning\" (click)=\"deletItem()\" title=\"Delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button> </span></th>\r\n\t\t\t\t\t\t\t<th *ngIf=\"questionShow\">Delete </th>\r\n\t\t\t\t\t\t\t<th *ngIf=\"questionShow\">Edit </th>\r\n\t\t\t\t\t\t  <!-- <th width=\"10%\">Category</th> -->\r\n\t\t\t\t\t\t  <th width=\"10%\">Question</th>\r\n\t\t\t\t\t\t  <!-- <th width=\"10%\">Question File Url</th> -->\r\n\t\t\t\t\t\t  <th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Option 2</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Duration</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Level</th>\r\n\t\t\t\t\t\t  <th width=\"10%\">Notes</th>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t  </thead>\r\n\t\t\t\t\t  <tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let item of getQuestion\">\r\n\t\t\t\t\t\t\t<td class=\"categories\" *ngIf=\"questionShow\"><!-- <input type=\"checkbox\"  name=\"del_row\" [value]=\"item.id\" (change)=\"onCheckboxChange($event,item.id)\" > -->\r\n\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"{{item.question_name}}\" [(ngModel)]=\"item.selected\" [ngModelOptions]=\"{standalone: true}\" (change)=\"checkIfAllSelected($event,item.id)\"></td>\r\n\t\t\t\t\t\t\t<td class=\"\" *ngIf=\"questionShow\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(item.id)\" title=\"delete\" type=\"button\"><i class=\"icofont icofont-ui-delete\"></i></button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"questionShow\"><button type=\"button\" class=\"btn allam-btn btn-success\" (click)=\"editItem(item)\"><i class=\"icofont icofont-ui-edit\"></i> </button></td>\r\n\t\t\t\t\t\t  <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.question }}</td>\r\n\t\t\t\t\t\t  <!-- <td width=\"10%\">{{ item.question_file_url }} {{item.question_file_url === '' ? 'steps' : 'km'}}</td> -->\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.duration }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t\t\t\t  <td width=\"10%\">{{ item.note }}</td>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t  </tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\" id=\"buttonHide\">\r\n\t\t\t\t  <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }}</button>\r\n\t\t\t\t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-primary setup-content\" id=\"step-3\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t <h3 class=\"panel-title\">Set Date and Time</h3>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n  \r\n\t\t\t  <div class=\"col-md-10 text-right \">\r\n\t\t\t\t  <div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n                      \r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t  <div class=\"form-group m-b-15 sdtime\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t  Start Date Time\r\n\t\t\t\t\t\t\t</label> <!-- {{jstoday}}  -->\r\n\t\t\t\t\t\t\t<!-- [max]=\"max\" -->\r\n\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"invalidMoment\" formControlName=\"startDateTime\"  placeholder=\"Date Time\" class=\"form-control\" readonly=\"yes\" required\r\n\t\t\t\t\t\t\t\t[min]=\"min\"\r\n\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"dt11\" [owlDateTime]=\"dt11\"\r\n\t\t\t\t\t\t\t\t> <!-- #dateTime=\"ngModel\" -->\r\n\t\t\t\t\t\t\t\t<span class=\"example-trigger\" [owlDateTimeTrigger]=\"dt11\">\r\n\t\t\t\t\t\t\t\t  <i class=\"fas fa-calendar-alt\"></i>\r\n\t\t\t\t\t\t\t  </span>\r\n\t\t\t\t\t\t\t<owl-date-time [showSecondsTimer]=\"true\" [pickerMode]=\"'popup'\" #dt11></owl-date-time>\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"startTime.invalid && startTime.errors.owlDateTimeMin\">\r\n\t\t\t\t\t\t\t  Date Time value must after {{min | date: 'medium'}}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"dateTime.invalid && dateTime.errors.owlDateTimeMax\">\r\n\t\t\t\t\t\t\t  Date Time value must before {{max | date: 'medium'}}\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n  \r\n\t\t\t\t\t\t<!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t  <div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t  <label>\r\n\t\t\t\t\t\t\tStart Date\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"start_date\" formControlName=\"startDate\" value=\"{{ post.startDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.startDate.errors }\">\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t\t\t  <label>\r\n\t\t\t\t\t\t\t\t\t\tStart Time\r\n\t\t\t\t\t\t\t\t\t\t</label>--> <!-- {{f.startTime.errors |json}} -->\r\n\t\t\t\t\t\t\t<!--  <input type=\"time\" step=\"1\" class=\"form-control\" id=\"start_time\" formControlName=\"startTime\" required [ngClass]=\"{ 'is-invalid': f.startTime.errors }\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>  -->\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t\t\t  <label> End Time </label>\r\n\t\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"endTime\" required [ngClass]=\"{ 'is-invalid': f.endTime.errors }\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label>End Date</label>\r\n\t\t\t\t\t\t\t  <input type=\"date\" class=\"form-control\" formControlName=\"endDate\" value=\"{{ post.endDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.endDate.errors }\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t  <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t\t\t  <label>\r\n\t\t\t\t\t\t\t\t\t\tWaiting Time\r\n\t\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t<input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"waitingTime\" required [ngClass]=\"{ 'is-invalid': f.waitingTime.errors }\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div> -->\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \"> \r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label>Waiting Time (In Minutes)</label>\r\n\t\t\t\t\t\t\t  <select class=\"form-control select2 waiting-time1\" formControlName=\"minute_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.minute_time.errors }\">\r\n\t\t\t\t\t\t\t\t <!-- <option value=\"01\" >01</option>\r\n\t\t\t\t\t\t\t\t <option value=\"02\" >02</option>\r\n\t\t\t\t\t\t\t\t <option value=\"03\" >03</option>\r\n\t\t\t\t\t\t\t\t <option value=\"04\" >04</option>\r\n\t\t\t\t\t\t\t\t <option value=\"05\" >05</option>\r\n\t\t\t\t\t\t\t\t <option value=\"06\" >06</option>\r\n\t\t\t\t\t\t\t\t <option value=\"07\" >07</option>\r\n\t\t\t\t\t\t\t\t <option value=\"08\" >08</option>\r\n\t\t\t\t\t\t\t\t <option value=\"09\" >09</option> -->\r\n\t\t\t\t\t\t\t\t <option value=\"10\" >10</option>\r\n\t\t\t\t\t\t\t\t <option value=\"15\" >15</option>\r\n\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t  <!-- <select class=\"form-control select2 waiting-time1\" formControlName=\"second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.second_time.errors }\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let option of oneToSixtyArray\" [value]=\"option\" >{{option}}</option>\r\n\t\t\t\t\t\t\t  </select> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }}</button>\r\n\t\t\t\t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-primary setup-content\" id=\"step-4\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t <h3 class=\"panel-title\">Company Info</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row justify-content-center set-promotion-wrap\">\r\n\t\t\t\t<div class=\"col-sm-12 col-md-6\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t  <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t  <div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label>Narration option</label> \r\n\t\t\t\t\t\t\t<select class=\"form-control select2\" style=\"width: 100%;\" (change)=\"narrationOption($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\"> -->\r\n\t\t\t\t\t\t\t  <!-- <option value=\"\" [selected]=\"true\">--Select--</option> -->\r\n\t\t\t\t\t\t\t  <!-- <option value=\"url\" [selected]=\"narrationOptions=='url'\">Narration File</option>\r\n\t\t\t\t\t\t\t  <option value=\"text\" [selected]=\"'narrationOptions'\">Narration Text</option> -->\r\n\t\t\t\t\t\t\t  <option *ngFor=\"let option of narrOption\" [value]=\"option\" [selected]=\"narrationOptions==option\" >{{option}}</option>\r\n\t\t\t\t\t\t\t</select> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"narrationOptions == 'file'\">\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration Audio</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected($event)\" required>\r\n\r\n\t\t\t\t\t\t\t  <div class=\"control-label\" *ngIf=\"file_url && file_url !== null\"> <audio controls=\"\" name=\"media\"><source [src]=\"file_url | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration Audio 1</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected1($event)\" required>\r\n\r\n\t\t\t\t\t\t\t  <div class=\"control-label\" *ngIf=\"file_url1 && file_url1 !== null\"> <audio controls=\"\" name=\"media\"><source [src]=\"file_url1 | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12\" *ngIf=\"narrationOptions == 'text'\">\r\n\t\t\t\t\t\t  <!-- <app-multi-files-upload (onDataPickedBefore)=\"getFileStatus($event)\" (onDataPicked)=\"getFileData($event)\"></app-multi-files-upload> -->\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration text</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <textarea class=\"form-control\" rows=\"4\" formControlName=\"narration_text\" placeholder=\"Narration text\" required [ngClass]=\"{ 'is-invalid': f.narration_text.errors }\"> </textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration text 1</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <textarea class=\"form-control\" rows=\"4\" formControlName=\"narration_text1\" placeholder=\"Narration text 1\" required [ngClass]=\"{ 'is-invalid': f.narration_text1.errors }\"> </textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"col-md-12\">\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration time (In Seconds)</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <!-- <input class=\"form-control\"  formControlName=\"narration_time\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\"> -->\r\n\t\t\t\t\t\t\t  <select class=\"form-control select2 waiting-time\" formControlName=\"narration_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\">\r\n\t\t\t\t\t\t\t\t<option value=\"30\" >30</option>\r\n\t\t\t\t\t\t\t\t<option value=\"59\" >59</option>\r\n\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"col-sm-12 col-md-6 \">\r\n\t\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t  <label class=\"control-label\">Narration time1 (In Seconds)</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t  <!-- <input class=\"form-control\"  formControlName=\"narration_time1\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time1.errors }\"> -->\r\n\t\t\t\t\t\t\t  <select class=\"form-control select2 waiting-time1\" formControlName=\"narration_time1\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time1.errors }\">\r\n\t\t\t\t\t\t\t\t<option value=\"30\" >30</option>\r\n\t\t\t\t\t\t\t\t<option value=\"59\" >59</option>\r\n\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"container-fluid\">\r\n\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t<!--  <table id=\"tbl-upload\" class=\"table table-bordered \" *ngIf=\"advFile.length !=0\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t  <tr class=\"active\">\r\n\t\t\t\t\t\t\t\t\t<th>Document Name</th>\r\n\t\t\t\t\t\t\t\t\t<th>Document Description</th> \r\n\t\t\t\t\t\t\t\t\t<th width=\"30%\">MP3 File Time</th>\r\n\t\t\t\t\t\t\t\t\t<th width=\"70%\">MP3 File</th>\r\n\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t  <tr *ngFor='let url of advFile'>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"form-group \">\r\n\t\t\t\t\t\t\t\t\t\t<label>{{url.file_time}}</label>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"form-group \">\r\n\t\t\t\t\t\t\t\t\t\t<audio #figAudio controls=\"\" name=\"media\"><source [src]=\"url.file_location | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t  </table> -->\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 text-right \">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company Name</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"companyName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.companyName.errors }\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company logo</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t<input accept=\"image/x-png,image/jpeg\" class=\"form-control height-auto\" placeholder=\" \" type=\"file\"  (change)=\"uploadCompanyLogo($event)\" required >\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12\">\r\n\t\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t\t\t <!-- Image Preview -->\r\n\t\t\t\t\t\t <div class=\"form-group float-r\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company logo: </label>\r\n\t\t\t\t\t\t\t  <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"companyLogo\" [alt]=\"formData.app_name\" width=\"100\" >\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company URL</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"companyUrl\" placeholder=\" \" type=\"url\" required [ngClass]=\"{ 'is-invalid': f.companyUrl.errors }\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 \">\r\n\t\t\t\t\t\t<div class=\"form-group m-b-15\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Company Description</label> <!-- required=\"required\" -->\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\" formControlName=\"companyDescription\" placeholder=\"Company description\" required [ngClass]=\"{ 'is-invalid': f.companyDescription.errors }\"> </textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-12 mt-3\"> \r\n\t\t\t\t\t\t<!-- <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\"[disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }} </button> -->\r\n\t\t\t\t\t\t<button (click)=\"setFormPreview(formVar.value)\" class=\"btn allam-btn-green text-white  pull-right ml-5\" id=\"reviewButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Review' }} </button>\r\n\t\t\t\t\t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>     \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  \r\n\t\t  <div class=\"panel panel-primary setup-content\" id=\"step-5\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t <h3 class=\"panel-title\">Review</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <!-- <div class=\"col-md-4\">\r\n\t\t\t\t\t<label class=\"control-label\">Description: </label>\r\n\t\t\t\t\t<div class=\"control-label\"> {{formData.description}}</div>\r\n\t\t\t\t  </div> -->\r\n\t\t\t\t  <div class=\"col-md-6\">\r\n\t\t\t\t\t<label class=\"control-label\">Name of the competition: </label>\r\n\t\t\t\t\t<div class=\"control-label\"> {{formData.competitionName}}</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"col-md-6\">\r\n\t\t\t\t\t<label class=\"control-label\">Competition Logo: </label>\r\n\t\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t  <div class=\"form-group float-r\">\r\n\t\t\t\t\t  <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t\t<img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"100\" width=\"100\" >\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n  \r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t\t\t<div class=\"dt-responsive table-responsive\">\r\n\t\t\t\t\t  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t  <tr>\r\n\t\t\t\t\t\t\t<!-- <th width=\"10%\">Category</th> -->\r\n\t\t\t\t\t\t\t<th width=\"10%\">Question</th>\r\n\t\t\t\t\t\t\t<!-- <th width=\"10%\">Question File Url</th> -->\r\n\t\t\t\t\t\t\t<th width=\"10%\">Answer</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 2</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 3</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Option 4</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Level</th>\r\n\t\t\t\t\t\t\t<th width=\"10%\">Notes</th>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t  <tr *ngFor=\"let item of getQuestion\">\r\n\t\t\t\t\t\t\t<!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.question }}</td>\r\n\t\t\t\t\t\t\t<!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.answer }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option2 }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option3 }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.option4 }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.level }}</td>\r\n\t\t\t\t\t\t\t<td width=\"10%\">{{ item.note }}</td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t  </table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t  <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <label class=\"control-label\">Start Date: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.startDateTime | date: 'dd/MM/yyyy'}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<label class=\"control-label\">Start Time: </label>\r\n\t\t\t\t\t\t<div class=\"control-label\">  {{formData.startDateTime | date:\"hh:mm a\"}}</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t<!-- <div class=\"col-md-3\">\r\n\t\t\t\t\t  <label class=\"control-label\">End Date: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.endDate}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <label class=\"control-label\">End Time: </label>\r\n\t\t\t\t\t  <div class=\"control-label\">  {{formData.endTime}}</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <label class=\"control-label\">waiting Time: </label>\r\n\t\t\t\t\t  <div class=\"control-label\">  {{waitingTime}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t  <label class=\"control-label\">Company Name: </label>\r\n\t\t\t\t\t<div class=\"control-label\"> {{formData.companyName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t  <label class=\"control-label\">Company URL: </label>\r\n\t\t\t\t\t<div class=\"control-label\"> {{formData.companyUrl}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"col-md-3\">\r\n\t\t\t\t\t\t  <!-- Image Preview -->\r\n\t\t\t\t\t\t<div class=\"form-group float-r\">\r\n\t\t\t\t\t\t  <label class=\"control-label\">Company logo: </label>\r\n\t\t\t\t\t\t\t<div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n\t\t\t\t\t\t\t  <img [src]=\"companyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>     \r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\r\n\t\t\t\t<!-- <div class=\"col-md-12 narration-img-upload\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"control-label\">File : </label>\r\n\t\t\t\t\t  <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 justify-content-center\">\r\n\t\t\t\t\t\t  <table id=\"tbl-upload\" class=\"table table-bordered\" *ngIf=\"advFile.length !=0\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t  <tr class=\"active\">\r\n\t\t\t\t\t\t\t\t<th>Document Name</th>\r\n\t\t\t\t\t\t\t\t<th>Document Description</th>\r\n\t\t\t\t\t\t\t\t<th>MP3 File Time</th>\r\n\t\t\t\t\t\t\t\t<th>MP3 File</th>\r\n\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  <tr *ngFor='let url of advFile'>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-group \">\r\n\t\t\t\t\t\t\t\t\t<label>{{url.file_time}}</label>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-group \">\r\n\t\t\t\t\t\t\t\t\t<audio #figAudio controls=\"\" name=\"media\"><source [src]=\"url.file_location | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t  </table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div> -->\r\n\t\t\t\t\r\n\t\t\t\t  <div class=\"row\" *ngIf=\"narrationOptions == 'text'\">\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Narration Text: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.narration_text}}</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Narration Text 1: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.narration_text1}}</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Narration Time: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.narration_time}}</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">Narration Time 1: </label>\r\n\t\t\t\t\t  <div class=\"control-label\"> {{formData.narration_time1}}</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>  \r\n\t\t\t\t  <div class=\"row\" *ngIf=\"narrationOptions == 'file'\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label\">Narration URL: </label>\r\n\t\t\t\t\t\t<div class=\"control-label\"> <audio #figAudio controls=\"\" name=\"media\"><source [src]=\"audSrc | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label\">Narration URL 1: </label>\r\n\t\t\t\t\t\t<div class=\"control-label\"> <audio #figAudio1 controls=\"\" name=\"media\"><source [src]=\"audSrc1 | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\r\n\t\t<div class=\"row\">\r\n\t\t  <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t<!-- {{percentDone}} -->\r\n\t\t\t <!-- Progress Bar --> \r\n\t\t\t\t\t<div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n\t\t\t\t\t <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n\t\t\t\t\t\t[style.width.%]=\"percentDone\">\r\n\t\t\t\t\t </div>\r\n\t\t\t </div>\r\n\t\t  </div>\r\n  \r\n\t\t  </div>\r\n  \r\n\t\t</div>\r\n\t\t\t<div class=\"row\"> \r\n\t\t\t  \r\n\t\t\t  <div class=\"col-sm-12 col-md-12 \"> \r\n\t\t\t\t<button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"submit\">Update</button>\r\n\t\t\t\t<button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n\t\t\t  </div>\r\n\t\t\t</div> \r\n\t\t  </div>\r\n\t\t  </div>\r\n\t\t  \r\n\t\t  <div class=\"modal crop-image-wrap\" id=\"myCropModal\" [style.display]=\"showCropModal ? 'block' : 'none'\">\r\n\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t  <div class=\"modal-content\">\r\n\t\t\t\r\n\t\t\t  <!-- Modal Header -->\r\n\t\t\t  <div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\">Crop Image</h4>\r\n\t\t\t\t<button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n\t\t\t  </div>\r\n\t\t\t  <!-- Modal body -->\r\n\t\t\t  <div class=\"modal-body slot-details-wrap\">\r\n\t\t\t\t<image-cropper\r\n\t\t\t\t[imageChangedEvent]=\"imageChangedEvent\" \r\n\t\t\t\t[maintainAspectRatio]=\"true\" \r\n\t\t\t\t[aspectRatio]=\"3 / 3\"\r\n\t\t\t\t[resizeToWidth]=\"600\" \r\n\t\t\t\tformat=\"png\" \r\n\t\t\t\t(imageCropped)=\"imageCropped($event, image_type)\" \r\n\t\t\t\t(imageLoaded)=\"imageLoaded()\"\r\n\t\t\t\t(cropperReady)=\"cropperReady()\" \r\n\t\t\t\t(loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t  <!-- Modal footer -->\r\n\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n\t\t\t  </div>\r\n\t\t\t\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  <!-- {{formVar.value | json}} -->\r\n\t\t  <!-- {{fileArr | json}} -->\r\n\t  </form>\r\n\t  \r\n  </div>\r\n  <div class=\"panel-body\" *ngIf=\"isEdit\">\r\n\t<div class=\"row\" >\r\n\t\t<div class=\"col-md-12\">\r\n\t\t<form class=\"md-float-material\" [formGroup]=\"form\" (ngSubmit)=\"onUpdateTemp()\">\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-8 \">\r\n\t\t\t\t<div class=\"row \">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\t\t\t\t\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Option A\" type=\"text\" formControlName=\"option1\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option1.errors }\">\r\n\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t\t<div *ngIf=\"submitted && ff.option1.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.option1.errors.required\">Option A is required.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2  txt-left \"> \r\n\t\t\t\t\t<label class=\"radio-box\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'a'\">\r\n\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row m-t-15\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Option B\" type=\"text\" formControlName=\"option2\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option2.errors }\">\r\n\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t<div *ngIf=\"submitted && ff.option2.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.option2.errors.required\">Option B is required.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2 txt-left\"> \r\n\t\t\t\t\t<label class=\"radio-box\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\"  [checked]=\"form.get('answer').value == 'b'\">\r\n\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row m-t-15\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Option C\" type=\"text\" formControlName=\"option3\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option3.errors }\">\r\n\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t<div *ngIf=\"submitted && ff.option3.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.option3.errors.required\">Option C is required.</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n\t\t\t\t\t<label class=\"radio-box\">\r\n\t\t\t\t\t<input type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'c'\"> \r\n\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row m-t-15\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 group\">\r\n\t\t\t\t\r\n\t\t\t\t<input class=\"form-control\" placeholder=\"Option D\" type=\"text\" formControlName=\"option4\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.option4.errors }\">\r\n\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t<div *ngIf=\"submitted && ff.option4.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.option4.errors.required\">Option D is required.</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> \r\n\t\t\t\t\t<label class=\"radio-box\">\r\n\t\t\t\t\t<input type=\"radio\"  name=\"answer\" value=\"d\" formControlName=\"answer\" [checked]=\"form.get('answer').value == 'd'\">\r\n\t\t\t\t\t<span class=\"checkmark\"></span>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\t\t\t\t\t<label >Level</label>\r\n\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"level\" [ngClass]=\"{ 'is-invalid': submitted && ff.level.errors }\">\r\n\t\t\t\t\t\t<option value=\"\">Level</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let option of levelOptions\" [value]=\"option\" >{{option}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t\t<div *ngIf=\"submitted && ff.level.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.level.errors.required\">Level is required.</div>\r\n\t\t\t\t\t\t<div *ngIf=\"ff.level.errors.pattern\">Accept numeric values only.</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10\">\r\n\t\t\t\t\t<label >Duration (In Seconds)</label>\r\n\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"duration\" [ngClass]=\"{ 'is-invalid': submitted && ff.duration.errors }\">\r\n\t\t\t\t\t\t<option value=\"\">Duration (In Seconds)</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let option of durationOptions\" [value]=\"option\" >{{option}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t\t<div *ngIf=\"submitted && ff.duration.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t<div *ngIf=\"ff.duration.errors.required\">Question time is required.</div>\r\n\t\t\t\t\t\t<div *ngIf=\"ff.duration.errors.pattern\">Accept numeric values only.</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n\t\t\t\t\t<label >Note</label>\r\n\t\t\t\t\t<div class=\"group\">\r\n\r\n\t\t\t\t\t<input class=\"form-control\" placeholder=\"Note\" type=\"text\" formControlName=\"note\" maxlength=\"70\">\r\n\t\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>\r\n\t\t\t\t</div> \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-10 col-xs-10 col-md-10 \">\r\n\t\t\t\t\t<div class=\"m-t-15\">\r\n\t\t\t\t\t<button (click)=\"goBack()\" [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n\t\t\t\t\t\t<span *ngIf=\"this.idEdit\">Back</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border create_cancel\">\r\n\t\t\t\t\t\t<span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n\t\t\t\t\t\t<span *ngIf=\"this.idEdit\">Update</span>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2 col-xs-2 col-md-2\"> </div>  \r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 \">\r\n\t\t\t\t<div class=\"editor-wrap\" id=\"my-node\"> \r\n\t\t\t\t<label>Question</label>\r\n\t\t\t\t<textarea class=\"form-control\" placeholder=\"Question\" formControlName=\"question\" maxlength=\"70\" [ngClass]=\"{ 'is-invalid': submitted && ff.question.errors }\"> </textarea> \r\n\t\t\t\t<span class=\"md-line\"></span>\r\n\t\t\t\t<div *ngIf=\"submitted && ff.question.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t<div *ngIf=\"ff.question.errors.required\">Question is required.</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"editor-wrap\" id=\"my-node\"> \r\n\t\t\t\t<label>Question Image</label>\r\n\t\t\t\t<input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadQuestionImage($event)\"> -->\r\n\t\t\t\t<!-- Image Preview -->\r\n\t\t\t\t<!--<div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n\t\t\t\t\t<img [src]=\"preview\" height=\"150\" >\r\n\t\t\t\t</div> \r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-12 col-xs-12 col-md-12\">\r\n\t\t\t\t<div class=\"m-t-15\">\r\n\t\t\t\t\t<button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n\t\t\t\t\t<span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n\t\t\t\t\tSave and insert\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t-->\r\n\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/league.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/league.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container daily-competition-wrap\">\r\n  <div class=\"stepwizard\">\r\n    <div class=\"stepwizard-row setup-panel\">\r\n        <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n            \r\n        </div>\r\n        <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-2\" id=\"foo\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n            \r\n        </div>\r\n        <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n            \r\n        </div>\r\n        <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n            \r\n        </div>\r\n        <!-- <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-5\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\r\n            \r\n        </div> -->\r\n        <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-5\" id=\"reviewStep\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">5</a>\r\n            \r\n        </div>\r\n        <!-- <div class=\"stepwizard-step\"> \r\n            <a href=\"#step-7\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">7</a>\r\n            \r\n        </div> -->\r\n        \r\n    </div>\r\n  </div>\r\n    <form role=\"form\" class=\"k-form\" [formGroup]=\"formVar\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\">\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-1\">\r\n            <div class=\"panel-heading\">\r\n                 <h3 class=\"panel-title\">Create League</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n            \t<div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-4 \"> \r\n                    <div class=\"competition-logo-upload form-group\"> \r\n                      <label> League Logo </label>\r\n                      \r\n                      \r\n                      <input accept=\"image/x-png,image/jpeg\" type=\"file\" class=\"form-control choosefiles\"  (change)=\"uploadCompetitionLogo($event)\" required>\r\n                      <input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\" required [ngClass]=\"{ 'is-invalid': f.imageInput.errors }\"/> <!-- Validation Field -->\r\n                    </div>\r\n                    <div *ngIf=\"f.imageInput.errors\" class=\"invalid-feedback text-left\" >\r\n                      <div *ngIf=\"f.imageInput.errors.required\"><label> League logo is required </label></div>\r\n                      <!-- <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div> -->\r\n                    </div>\r\n                    <!-- Image Preview -->\r\n                    <div class=\"form-group\">\r\n                      <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                      <img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"100\" width=\"100\" >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 col-md-8 \"> \r\n                      \r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Name of the competition</label> <!-- required=\"required\" -->\r\n                        <input class=\"form-control\"  formControlName=\"competitionName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.competitionName.errors }\">\r\n                      </div>\r\n\r\n                      <!-- <div class=\"form-group  m-b-15\">\r\n                        <label>Description</label>\r\n                        <textarea class=\"form-control\" cols=\"5\"  formControlName=\"description\" placeholder=\"Default textarea\" rows=\"5\" required [ngClass]=\"{ 'is-invalid': f.description.errors }\"></textarea>\r\n                      </div> -->\r\n                      <div class=\"form-group  m-b-15\"> \r\n                        <label>Question Type</label>\r\n                          <select class=\"form-control select2\" formControlName=\"question_type\" type=\"text\" style=\"width: 100%;\" (change)=\"questionChange($event)\" required [ngClass]=\"{ 'is-invalid': f.question_type.errors }\">\r\n                            <option value=\"\" [selected]=\"true\">--Select--</option>\r\n                           <option value=\"category\" >System upload of questions</option>\r\n                           <option value=\"bulk\" >Self upload of questions</option>\r\n                        </select> \r\n                      </div>\r\n                      <div *ngIf=\"questionType == 'bulk'\">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label>Upload Your File </label>\r\n                        <input  #variable accept=\".xlsx\" (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"excelFile\" required [ngClass]=\"{ 'is-invalid': f.excelFile.errors }\">\r\n                      </div>\r\n                      <a href=\"assets/file/sample_competition.xlsx\">\r\n                        <div class=\"group m-b-15\">  Sample Quiz\r\n                        <img src=\"assets/images/sample-quiz.jpg\"> \r\n                       </div> </a>\r\n\r\n                    <div class=\"form-group color m-b-15\">\r\n                      <label>Upload Your File </label>\r\n                      <input  #variable accept=\".zip\"  (change)=\"fileChange($event)\" type=\"file\" class=\"form-control choosefiles\" formControlName=\"zipFile\" >\r\n                    </div>\r\n                    <div class=\"group m-b-15\">\r\n                      Please upload a zip file which contains subfolders for Images\r\n                      and Videos. The image file type should be .png / .jpg / .jpeg\r\n                      and the video file type should be .mp4. The images and\r\n                      videos should be placed in their designated folders.\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-warning text-white upload nextBtn pull-right\" (click)=\"upload()\" id=\"btnUpload\" [disabled]=\"loading\">{{ loading ? 'Uploading...' : 'Uplaod' }}</button>\r\n                      \r\n                    \r\n                    <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n                  </div>\r\n                  <div  *ngIf=\"questionType == 'category'\">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label>Categories</label> <!-- (onSelectAll)=\"onSelectAll($event)\"   [ngModelOptions]=\"{standalone: true}\" -->\r\n                      <ng-multiselect-dropdown  formControlName=\"categories\" required [ngClass]=\"{ 'is-invalid': f.categories.errors }\"\r\n                        [placeholder]=\"'Select Categories'\"\r\n                        [data]=\"dropdownList\"\r\n                        [(ngModel)]=\"selectedItems\"\r\n                        [settings]=\"dropdownSettings\"\r\n                        (onSelect)=\"onItemSelect($event)\"\r\n                        (onSelectAll)=\"onSelectAll($event)\"\r\n                      >\r\n                      </ng-multiselect-dropdown>\r\n                      <div *ngIf=\"f.categories.errors\" \r\n                          class=\"text-danger mt-1\">\r\n                        <div *ngIf=\"f.categories.errors.required\">\r\n                          Categories is required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            \t</div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-12\">\r\n                  <!-- spinnner element is defined with id loading -->\r\n                  <div class=\"justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n                      <div class=\"spinner-border\" role=\"status\"> \r\n                          <span class=\"sr-only\" id=\"loading\"></span> \r\n                      </div> \r\n                  </div>\r\n\r\n                  <div *ngIf=\"!isProcessed && (errorCode == 1 )\"><h1 class=\"sucessful\">{{errorDesc}}</h1></div>\r\n                    <div *ngIf=\"isError\">\r\n                    <h3 class=\"errors-following\">Following data is having errors:</h3>\r\n                    \r\n                    \r\n                      <div class=\"publish-table-wrap table-responsive\">\r\n                    <table width=\"100%\" border=\"1\" class=\"table table-striped table-bordered nowrap dataTable\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th width=\"10%\">Remarks</th>\r\n                          <th width=\"10%\">Category</th>\r\n                          <th width=\"10%\">Question</th>\r\n                          <th width=\"10%\">Question File Url</th>\r\n                          <th width=\"10%\">Answer</th>\r\n                          <th width=\"10%\">Option 2</th>\r\n                          <th width=\"10%\">Option 3</th>\r\n                          <th width=\"10%\">Option 4</th>\r\n                          <th width=\"10%\">Duration</th>\r\n                          <th width=\"10%\">Level</th>\r\n                          <th width=\"10%\">Notes</th>\r\n                          \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of errorData\">\r\n                          <td [style.color]=\"'red'\" [innerHTML]=\"item.Remarks\" width=\"15%\"></td>\r\n                          <td width=\"10%\">{{ item.category }}</td>\r\n                          <td width=\"10%\">{{ item.question }}</td>\r\n                          <td width=\"10%\">{{ item.question_file_url }}</td>\r\n                          <td width=\"10%\">{{ item.answer }}</td>\r\n                          <td width=\"10%\">{{ item.option2 }}</td>\r\n                          <td width=\"10%\">{{ item.option3 }}</td>\r\n                          <td width=\"10%\">{{ item.option4 }}</td>\r\n                          <td width=\"10%\">{{ item.duration }}</td>\r\n                          <td width=\"10%\">{{ item.level }}</td>\r\n                          <td width=\"10%\">{{ item.note }}</td>\r\n                          \r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                     </div>\r\n                    </div>\r\n                    <div *ngIf=\"!isError && isProcessed\">\r\n                      <h1 class=\"sucessful\">Data validated successfully</h1>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" id=\"buttonNextHide\">\r\n                <div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                  <div class=\"form-group\">\r\n                  <button (click)=\"showQuestion(formVar.value)\" class=\"btn allam-btn-green text-white nextBtn pull-right uploadButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }} </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              \r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-2\">\r\n          <div class=\"panel-heading\">\r\n               <h3 class=\"panel-title\">Competition Data</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                  <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                    <thead>\r\n                      <tr>\r\n                        <!-- <th width=\"10%\">Category</th> -->\r\n                        <th width=\"10%\">Question</th>\r\n                        <!-- <th width=\"10%\">Question File Url</th> -->\r\n                        <th width=\"10%\">File Type</th>\r\n                        <th width=\"10%\">Answer</th>\r\n                        <th width=\"10%\">Option 1</th>\r\n                        <th width=\"10%\">Option 2</th>\r\n                        <th width=\"10%\">Option 3</th>\r\n                        <th width=\"10%\">Option 4</th>\r\n                        <th width=\"10%\">Duration</th>\r\n                        <th width=\"10%\">Level</th>\r\n                        <th width=\"10%\">Notes</th>\r\n                        \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of fileData\">\r\n                        <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n                        <td width=\"10%\">{{ item.question }}</td>\r\n                        <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                        <td width=\"10%\">{{ item.file_type }}</td>\r\n                        <td width=\"10%\">{{ item.answer }}</td>\r\n                        <td width=\"10%\">{{ item.option1 }}</td>\r\n                        <td width=\"10%\">{{ item.option2 }}</td>\r\n                        <td width=\"10%\">{{ item.option3 }}</td>\r\n                        <td width=\"10%\">{{ item.option4 }}</td>\r\n                        <td width=\"10%\">{{ item.duration }}</td>\r\n                        <td width=\"10%\">{{ item.level }}</td>\r\n                        <td width=\"10%\">{{ item.note }}</td>\r\n                        \r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n          </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-12 \"> \r\n                  <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\"[disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }} </button>\r\n                  <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-3\">\r\n          <div class=\"panel-heading\">\r\n               <h3 class=\"panel-title\">Set Date and Time</h3>\r\n          </div>\r\n          \r\n          <div class=\"row justify-content-center set-promotion-wrap\">\r\n\r\n            <div class=\"col-md-10 text-right \">\r\n                <div class=\"panel-body\">\r\n                  \r\n                    <div class=\"row\">\r\n                      \r\n                      <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n                      <div class=\"col-sm-12 col-md-6 \"> \r\n                        <div class=\"form-group m-b-15 sdtime\">\r\n                          <label>\r\n                            Start Date Time\r\n                          </label> <!-- {{jstoday}}  -->\r\n                          <!-- [max]=\"max\" -->\r\n                          <input type=\"text\" [(ngModel)]=\"invalidMoment\" formControlName=\"startDateTime\"  placeholder=\"Date Time\" class=\"form-control\" readonly=\"yes\" required\r\n                              [min]=\"min\"\r\n                              [owlDateTimeTrigger]=\"dt11\" [owlDateTime]=\"dt11\"\r\n                              > <!-- #dateTime=\"ngModel\" -->\r\n                              <span class=\"example-trigger\" [owlDateTimeTrigger]=\"dt11\">\r\n                                <i class=\"fas fa-calendar-alt\"></i>\r\n                            </span>\r\n                          <owl-date-time [showSecondsTimer]=\"true\" [pickerMode]=\"'popup'\" #dt11></owl-date-time>\r\n                          <!-- <div *ngIf=\"startTime.invalid && startTime.errors.owlDateTimeMin\">\r\n                            Date Time value must after {{min | date: 'medium'}}\r\n                          </div> -->\r\n                          <!-- <div *ngIf=\"dateTime.invalid && dateTime.errors.owlDateTimeMax\">\r\n                            Date Time value must before {{max | date: 'medium'}}\r\n                          </div> -->\r\n                            \r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n                        <div class=\"form-group m-b-15\">\r\n                        <label>\r\n                          Start Date\r\n                          </label>\r\n                          <input type=\"date\" class=\"form-control\" id=\"start_date\" formControlName=\"startDate\" value=\"{{ post.startDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.startDate.errors }\">\r\n                        </div>\r\n                      </div>\r\n                        <div class=\"col-sm-12 col-md-6 \"> \r\n                          <div class=\"form-group m-b-15\">\r\n                                    <label>\r\n                                      Start Time\r\n                                      </label>--> <!-- {{f.startTime.errors |json}} -->\r\n                          <!--  <input type=\"time\" step=\"1\" class=\"form-control\" id=\"start_time\" formControlName=\"startTime\" required [ngClass]=\"{ 'is-invalid': f.startTime.errors }\">\r\n                          </div>\r\n                        </div>  -->\r\n                        \r\n                        \r\n                        <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n                          <div class=\"form-group m-b-15\">\r\n                                    <label> End Time </label>\r\n                          <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"endTime\" required [ngClass]=\"{ 'is-invalid': f.endTime.errors }\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-6 \"> \r\n                          <div class=\"form-group m-b-15\">\r\n                            <label>End Date</label>\r\n                            <input type=\"date\" class=\"form-control\" formControlName=\"endDate\" value=\"{{ post.endDate | date:'yyyy-MM-dd' }}\" required [ngClass]=\"{ 'is-invalid': f.endDate.errors }\">\r\n                          </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-sm-12 col-md-6 \"> \r\n                          <div class=\"form-group m-b-15\">\r\n                                    <label>\r\n                                      Waiting Time\r\n                                    </label>\r\n                          <input type=\"time\" step=\"1\" class=\"form-control\" formControlName=\"waitingTime\" required [ngClass]=\"{ 'is-invalid': f.waitingTime.errors }\">\r\n                          </div>\r\n                        </div> -->\r\n                        <div class=\"col-sm-12 col-md-6 \"> \r\n                          <div class=\"form-group m-b-15\">\r\n                            <label>Waiting Time (In minutes)</label>\r\n                            <select class=\"form-control select2 waiting-time1\" formControlName=\"minute_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.minute_time.errors }\">\r\n                               <!-- <option value=\"01\" >01</option>\r\n                               <option value=\"02\" >02</option>\r\n                               <option value=\"03\" >03</option>\r\n                               <option value=\"04\" >04</option>\r\n                               <option value=\"05\" >05</option>\r\n                               <option value=\"06\" >06</option>\r\n                               <option value=\"07\" >07</option>\r\n                               <option value=\"08\" >08</option>\r\n                               <option value=\"09\" >09</option> -->\r\n                               <option value=\"10\" >10</option>\r\n                               <option value=\"15\" >15</option>\r\n                            </select>\r\n                            <!-- <select class=\"form-control select2 waiting-time1\" formControlName=\"second_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.second_time.errors }\">\r\n                              <option *ngFor=\"let option of oneToSixtyArray\" [value]=\"option\" >{{option}}</option>\r\n                            </select> -->\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 col-md-12 \"> \r\n                  <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\"[disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }} </button>\r\n                  <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-4\">\r\n          <div class=\"panel-heading\">\r\n               <h3 class=\"panel-title\">Company Info</h3>\r\n          </div>\r\n          <div class=\"row justify-content-center set-promotion-wrap\">\r\n            <div class=\"col-sm-12 col-md-6\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12\">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label>Narration option</label> \r\n                      <select class=\"form-control select2\" style=\"width: 100%;\" (change)=\"narrationOption($event)\" required [ngClass]=\"{ 'is-invalid': f.narration_type.errors }\"> -->\r\n                        <!-- <option value=\"\" [selected]=\"true\">--Select--</option> -->\r\n                        <!-- <option value=\"url\" [selected]=\"narrationOptions=='url'\">Narration File</option>\r\n                        <option value=\"text\" [selected]=\"'narrationOptions'\">Narration Text</option> -->\r\n                        <option *ngFor=\"let option of narrOption\" [value]=\"option\" [selected]=\"narrationOptions==option\" >{{option}}</option>\r\n                      </select> \r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\" *ngIf=\"narrationOptions == 'file'\">\r\n                    <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n                    <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration Audio 1</label> <!-- required=\"required\" -->\r\n                        <input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected($event)\" required>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration Audio 2</label> <!-- required=\"required\" -->\r\n                        <input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected1($event)\" required>\r\n                      </div>\r\n                    </div>\r\n\r\n                     <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration Audio 3</label> <!-- required=\"required\" -->\r\n                        <input accept=\".mp3\" type=\"file\" class=\"form-control choosefiles\" (change)=\"audFileSelected2($event)\" required>\r\n                      </div>\r\n                    </div>\r\n                     <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration time1 (In Seconds)</label> <!-- required=\"required\" -->\r\n                        <!-- <input class=\"form-control\"  formControlName=\"narration_time\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\"> -->\r\n                        <select class=\"form-control select2 waiting-time\" formControlName=\"narration_time\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time.errors }\">\r\n                          <option value=\"30\" >30</option>\r\n                          <option value=\"59\" >59</option>\r\n                          <option value=\"120\" >120</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col-md-12\" *ngIf=\"narrationOptions == 'text'\">\r\n                    <!-- <app-multi-files-upload (onDataPickedBefore)=\"getFileStatus($event)\" (onDataPicked)=\"getFileData($event)\"></app-multi-files-upload> -->\r\n                    <div class=\"col-sm-12 col-md-12 \" >&nbsp; <br/></div>\r\n                    <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration text 1</label> <!-- required=\"required\" -->\r\n                        <textarea class=\"form-control\" rows=\"4\" formControlName=\"narration_text\" placeholder=\"Narration text 1\" required [ngClass]=\"{ 'is-invalid': f.narration_text.errors }\"> </textarea>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration text 2</label> <!-- required=\"required\" -->\r\n                        <textarea class=\"form-control\" rows=\"4\" formControlName=\"narration_text1\" placeholder=\"Narration text 2\" required [ngClass]=\"{ 'is-invalid': f.narration_text1.errors }\"> </textarea>\r\n                      </div>\r\n                    </div>\r\n\r\n                     <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration text 3</label> <!-- required=\"required\" -->\r\n                        <textarea class=\"form-control\" rows=\"4\" formControlName=\"narration_text2\" placeholder=\"Narration text 2\" required [ngClass]=\"{ 'is-invalid': f.narration_text2.errors }\"> </textarea>\r\n                      </div>\r\n                    </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                    <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration time2 (In Seconds)</label> \r\n                        <select class=\"form-control select2 waiting-time1\" formControlName=\"narration_time1\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time1.errors }\">\r\n                          <option value=\"30\" >30</option>\r\n                          <option value=\"59\" >59</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                     <div class=\"col-sm-12 col-md-6 \">\r\n                      <div class=\"form-group m-b-15\">\r\n                        <label class=\"control-label\">Narration time3 (In Seconds)</label> \r\n                        <select class=\"form-control select2 waiting-time2\" formControlName=\"narration_time2\" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.narration_time2.errors }\">\r\n                          <option value=\"30\" >30</option>\r\n                          <option value=\"59\" >59</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"container-fluid\">\r\n                    \r\n                      <!--  <table id=\"tbl-upload\" class=\"table table-bordered \" *ngIf=\"advFile.length !=0\">\r\n                          <tbody>\r\n                            <tr class=\"active\">\r\n                              <th>Document Name</th>\r\n                              <th>Document Description</th> \r\n                              <th width=\"30%\">MP3 File Time</th>\r\n                              <th width=\"70%\">MP3 File</th>\r\n                            </tr>\r\n                            <tr *ngFor='let url of advFile'>\r\n                              <td>\r\n                                <div class=\"form-group \">\r\n                                  <label>{{url.file_time}}</label>\r\n                                </div>\r\n                              </td>\r\n                              <td>\r\n                                <div class=\"form-group \">\r\n                                  <audio #figAudio controls=\"\" name=\"media\"><source [src]=\"url.file_location | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table> -->\r\n                      \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 text-right \">\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 \">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label class=\"control-label\">Company Name</label> <!-- required=\"required\" -->\r\n                      <input class=\"form-control\"  formControlName=\"companyName\" placeholder=\" \" type=\"text\" required [ngClass]=\"{ 'is-invalid': f.companyName.errors }\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-md-12 \">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label class=\"control-label\">Company logo</label> <!-- required=\"required\" -->\r\n                      <input accept=\"image/x-png,image/jpeg\" class=\"form-control height-auto\" placeholder=\" \" type=\"file\"  (change)=\"uploadCompanyLogo($event)\" required >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-md-12\">\r\n                    <!-- Image Preview -->\r\n                  <div class=\"form-group float-r\">\r\n                       \r\n                          <div class=\"preview\" *ngIf=\"previewCompanyLogo && previewCompanyLogo !== null\">\r\n                            <img [src]=\"previewCompanyLogo\" height=\"100\" width=\"100\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-md-12 \">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label class=\"control-label\">Company URL</label> <!-- required=\"required\" -->\r\n                      <input class=\"form-control\"  formControlName=\"companyUrl\" placeholder=\" \" type=\"url\" required [ngClass]=\"{ 'is-invalid': f.companyUrl.errors }\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-md-12 \">\r\n                    <div class=\"form-group m-b-15\">\r\n                      <label class=\"control-label\">Company Description</label> <!-- required=\"required\" -->\r\n                      <textarea class=\"form-control\" rows=\"4\" formControlName=\"companyDescription\" placeholder=\"Company description\" required [ngClass]=\"{ 'is-invalid': f.companyDescription.errors }\"> </textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 mt-3\"> \r\n                    <!-- <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\"[disabled]=\"loading\">{{ loading ? 'Wait...' : 'Next' }} </button> -->\r\n                    <button (click)=\"setFormPreview(formVar.value)\" class=\"btn allam-btn-green text-white  pull-right ml-5\" id=\"reviewButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Review' }} </button>\r\n                    <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n                  </div>\r\n                </div>     \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"panel panel-primary setup-content\" id=\"step-5\">\r\n          <div class=\"panel-heading\">\r\n               <h3 class=\"panel-title\">Narration </h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n             <app-multi-files-upload (onDataPicked)=\"getFileData($event)\"></app-multi-files-upload> \r\n            <div class=\"col-md-12 narration-img-upload\">\r\n                <div> <img *ngFor='let url of fileArr.locationArray'  [src]=\"url\" height=\"200\"> <br/> </div>\r\n            </div>\r\n            \r\n            <br><br>\r\n           \r\n            \r\n            <div class=\"row mt-5\">\r\n              <div class=\"col-sm-12 col-md-12 \"> \r\n                <div class=\"form-group\">\r\n                <button (click)=\"setFormPreview(formVar.value)\" class=\"btn allam-btn-green text-white  pull-right ml-5\" id=\"reviewButton\" type=\"button\" [disabled]=\"loading\">{{ loading ? 'Wait...' : 'Review' }} </button>\r\n                <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    \r\n    \r\n        </div> -->\r\n        <div class=\"panel panel-primary setup-content\" id=\"step-5\">\r\n          <div class=\"panel-heading\">\r\n               <h3 class=\"panel-title\">Review</h3>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"form-group\">\r\n              <div class=\"row\">\r\n                <!-- <div class=\"col-md-4\">\r\n                  <label class=\"control-label\">Description: </label>\r\n                  <div class=\"control-label\"> {{formData.description}}</div>\r\n                </div> -->\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"control-label\">Name of the competition: </label>\r\n                  <div class=\"control-label\"> {{formData.competitionName}}</div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"control-label\">Competition Logo: </label>\r\n                  <!-- Image Preview -->\r\n                <div class=\"form-group float-r\">\r\n                    <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                      <img [src]=\"preview\" [alt]=\"formData.competitionName\" height=\"100\" width=\"100\" >\r\n                    </div>\r\n                </div>\r\n                </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                  <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12\">\r\n                  <div class=\"dt-responsive table-responsive\">\r\n                    <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                      <thead>\r\n                        <tr>\r\n                          <!-- <th width=\"10%\">Category</th> -->\r\n                          <th width=\"10%\">Question</th>\r\n                          <!-- <th width=\"10%\">Question File Url</th> -->\r\n                          <th width=\"10%\">Answer</th>\r\n                          <th width=\"10%\">Option 1</th>\r\n                          <th width=\"10%\">Option 2</th>\r\n                          <th width=\"10%\">Option 3</th>\r\n                          <th width=\"10%\">Option 4</th>\r\n                          <th width=\"10%\">Duration</th>\r\n                          <th width=\"10%\">Level</th>\r\n                          <th width=\"10%\">Notes</th>\r\n                          \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of fileData\">\r\n                          <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n                          <td width=\"10%\">{{ item.question }}</td>\r\n                          <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                          <td width=\"10%\">{{ item.answer }}</td>\r\n                          <td width=\"10%\">{{ item.option1 }}</td>\r\n                          <td width=\"10%\">{{ item.option2 }}</td>\r\n                          <td width=\"10%\">{{ item.option3 }}</td>\r\n                          <td width=\"10%\">{{ item.option4 }}</td>\r\n                          <td width=\"10%\">{{ item.duration }}</td>\r\n                          <td width=\"10%\">{{ item.level }}</td>\r\n                          <td width=\"10%\">{{ item.note }}</td>\r\n                          \r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <label class=\"control-label\">Start Date: </label>\r\n                    <div class=\"control-label\"> {{dateString}}</div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <label class=\"control-label\">Start Time: </label>\r\n                    <div class=\"control-label\">  {{formData.startDateTime | date:\"hh:mm a\"}}</div>\r\n                  </div>\r\n                  <!-- <div class=\"col-md-3\">\r\n                    <label class=\"control-label\">End Date: </label>\r\n                    <div class=\"control-label\"> {{formData.endDate}}</div>\r\n                  </div>\r\n                  \r\n                  <div class=\"col-md-3\">\r\n                    <label class=\"control-label\">End Time: </label>\r\n                    <div class=\"control-label\">  {{formData.endTime}}</div>\r\n                  </div> -->\r\n                  <div class=\"col-md-3\">\r\n                    <label class=\"control-label\">waiting Time: </label>\r\n                    <div class=\"control-label\">  {{showWaiting_time}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                        <label class=\"control-label\">Company Name: </label>\r\n                  <div class=\"control-label\"> {{formData.companyName}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                        <label class=\"control-label\">Company URL: </label>\r\n                  <div class=\"control-label\"> {{formData.companyUrl}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                        <!-- Image Preview -->\r\n                      <div class=\"form-group float-r\">\r\n                        <label class=\"control-label\">Company logo: </label>\r\n                          <div class=\"preview\" *ngIf=\"previewCompanyLogo && previewCompanyLogo !== null\">\r\n                            <img [src]=\"previewCompanyLogo\" [alt]=\"formData.app_name\" height=\"150\" >\r\n                          </div>\r\n                      </div>\r\n                </div>\r\n              </div>     \r\n            </div>\r\n            <div class=\"form-group\">\r\n              \r\n                <!-- <div class=\"col-md-12 narration-img-upload\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">File : </label>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12 justify-content-center\">\r\n                        <table id=\"tbl-upload\" class=\"table table-bordered\" *ngIf=\"advFile.length !=0\">\r\n                          <tbody>\r\n                            <tr class=\"active\">\r\n                              <th>Document Name</th>\r\n                              <th>Document Description</th>\r\n                              <th>MP3 File Time</th>\r\n                              <th>MP3 File</th>\r\n                            </tr>\r\n                            <tr *ngFor='let url of advFile'>\r\n                              <td>\r\n                                <div class=\"form-group \">\r\n                                  <label>{{url.file_time}}</label>\r\n                                </div>\r\n                              </td>\r\n                              <td>\r\n                                <div class=\"form-group \">\r\n                                  <audio #figAudio controls=\"\" name=\"media\"><source [src]=\"url.file_location | sanitizerUrl\" type=\"audio/mp3\"></audio>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"row\" *ngIf=\"narrationOptions == 'text'\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Text: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_text}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Text 2: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_text1}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Text 3: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_text2}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Time 1: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_time}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Time 2: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_time1}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                          <label class=\"control-label\">Narration Time 3: </label>\r\n                    <div class=\"control-label\"> {{formData.narration_time2}}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>  \r\n                <div class=\"row\" *ngIf=\"narrationOptions == 'file'\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Narration URL 1: </label>\r\n                      <div class=\"control-label\"> <audio #figAudio controls=\"\" name=\"media\"><source [src]=\"audSrc | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Narration URL 2: </label>\r\n                      <div class=\"control-label\"> <audio #figAudio1 controls=\"\" name=\"media\"><source [src]=\"audSrc1 | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n                    </div>\r\n                  </div>\r\n                   <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">Narration URL 3: </label>\r\n                      <div class=\"control-label\"> <audio #figAudio2 controls=\"\" name=\"media\"><source [src]=\"audSrc2 | sanitizerUrl\" type=\"audio/mp3\"></audio></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 \"> \r\n          <div class=\"form-group\">\r\n          <!-- {{percentDone}} -->\r\n           <!-- Progress Bar --> \r\n                  <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n                   <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                      [style.width.%]=\"percentDone\">\r\n                   </div>\r\n           </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n          <div class=\"row\"> \r\n            \r\n            <div class=\"col-sm-12 col-md-12 \"> \r\n              <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"submit\">Submit</button>\r\n              <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\">Prev</button>\r\n            </div>\r\n          </div> \r\n        </div>\r\n        </div>\r\n        \r\n        <div class=\"modal crop-image-wrap\" id=\"myCropModal\" [style.display]=\"showCropModal ? 'block' : 'none'\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n          \r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Crop Image</h4>\r\n              <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n            </div>\r\n            <!-- Modal body -->\r\n            <div class=\"modal-body slot-details-wrap\">\r\n              <image-cropper\r\n              [imageChangedEvent]=\"imageChangedEvent\" \r\n              [maintainAspectRatio]=\"true\" \r\n              [aspectRatio]=\"3 / 3\"\r\n              [resizeToWidth]=\"600\" \r\n              format=\"png\" \r\n              (imageCropped)=\"imageCropped($event, image_type)\" \r\n              (imageLoaded)=\"imageLoaded()\"\r\n              (cropperReady)=\"cropperReady()\" \r\n              (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n              </div>\r\n          \r\n            <!-- Modal footer -->\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n            </div>\r\n          \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- {{formVar.value | json}} -->\r\n        <!-- {{fileArr | json}} -->\r\n    </form>\r\n    \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/list/list-league.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/list/list-league.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loading *ngIf=\"isLoading\">{{ isLoading }}</loading>\r\n<div class=\"container-fluid single-curriculum\">\r\n\r\n    <div class=\"row m-b-20\">\r\n        <div class=\"col-md-12 p-l-0\">\r\n          \r\n            <a class=\"btn btn-success creat-new-btn\" [routerLink]=\"['/league/add']\" href=\"javascript: void(0);\" > CREATE NEW LEAGUE COMPETITION </a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 Competitive-exam-wrap \">\r\n\r\n\r\n\r\n        <div class=\"row filter-wrap\">\r\n            <!-- <div class=\"co2-md-2  col-xl-2\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">End Date</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">End Date 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">End Date 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">End Date 3</option>\r\n                    </select>\r\n                </div>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"co2-md-2  col-xl-2\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">Start Date</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">Start Date 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Start Date 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Start Date 3</option>\r\n                    </select>\r\n                </div>\r\n               </div> -->\r\n\r\n               <!-- <div class=\"co2-md-3  col-xl-3\">\r\n                <div class=\"group\">\r\n                    <select class=\"form-control ng-pristine ng-invalid ng-touched\" >\r\n                        <option value=\"\">Select Your choice</option>\r\n                        <option value=\"2\" class=\"ng-star-inserted\">Select 1</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Select 2</option>\r\n                        <option value=\"1\" class=\"ng-star-inserted\">Select 3</option>\r\n                    </select>\r\n                </div>\r\n               </div> -->\r\n               <div class=\"co2-md-6  col-xl-6\">&nbsp;</div>\r\n               <div class=\"co2-md-3  col-xl-3\">\r\n                <input [(ngModel)]=\"term\" class=\"form-control ng-pristine ng-valid ng-touched\" placeholder=\"Search by name\" type=\"search\">\r\n               </div>\r\n\r\n               <div class=\"co2-md-3  col-xl-3 p-l-0\">\r\n               <h3>League Competition</h3>\r\n               </div>\r\n\r\n        </div>\r\n \r\n        <div class=\"row\">\r\n           <div class=\"col-md-12 \">\r\n\r\n           <div class=\"col-md-6 col-xl-3\">\r\n            <div class=\"card text-center\">\r\n                <div class=\"card-block-small\"><a [routerLink]=\"['/league/add']\" href=\"javascript: void(0);\">\r\n                    \r\n                    <span class=\"text-c-blue f-w-600\">+</span>\r\n                    <h4>Create New <br>League Competition </h4></a>\r\n                </div>\r\n            </div>\r\n           </div>\r\n\r\n           <div class=\"col-md-6 col-xl-3 competitive-exam\" *ngFor=\"let data of dailyList | filter: term let index =index;\r\n            let isOdd=odd;\r\n            let isEven=even\" \r\n            [class.odd]=\"isOdd\" \r\n            [class.even]=\"isEven\">\r\n           <div class=\"card widget-card-1 mt-0\"> {{checkDate(data.league_date)}}  \r\n            <a *ngIf=\"data.league_date > jstoday\" [routerLink]=\"['/league/edit', data.id]\" href=\"javascript: void(0);\">\r\n                <div class=\"card-block-small p-0\">\r\n                    <div class=\"title\">  {{data.compitition_name}}</div>\r\n                    <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                    <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                    <!-- <div class=\"text-c-pink\">Total Participant: 120</div> -->\r\n                    <div class=\"text-c-pink\">Mode: {{data.status==1 ? 'Active':'Inactive'}}</div>\r\n                    <div class=\"status\">   Status: Upcoming </div>\r\n                </div>\r\n            </a>\r\n            \r\n                <div class=\"card-block-small p-0\" *ngIf=\"data.league_date < jstoday\">\r\n                    <div class=\"title\">  {{data.compitition_name}}</div>\r\n                    <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                    <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                    <div class=\"text-c-pink\">Total Participant: {{data.total_interest}}</div>\r\n                    <div class=\"status\">   Status: Completed </div>\r\n                </div>\r\n                <div class=\"card-block-small p-0\" *ngIf=\"data.league_date == jstoday\">\r\n                    <div class=\"title\">  {{data.compitition_name}}</div>\r\n                    <!-- <div class=\"text-c-pink\">End on {{data.start_date | date: 'dd/MM/yyyy'}}</div> -->\r\n                    <div class=\"text-c-pink\"> Total Ques: {{data.total_question}} </div>\r\n                    <!-- <div class=\"text-c-pink\">Total Participant: 120</div> -->\r\n                    <div class=\"status\">   Status: Live </div>\r\n                </div>\r\n            \r\n            </div>\r\n           </div>\r\n        </div>\r\n        </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/multi-files-upload/multi-files-upload.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/multi-files-upload/multi-files-upload.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\r\n  <section class=\"content\">\r\n\r\n    <div id=\"main-form-content\">\r\n      <form [formGroup]=\"documentGrp\" (ngSubmit)=\"OnSubmit(documentGrp.value)\" #uploadDocumentsForm=\"ngForm\" ngNativeValidate>\r\n        <div class=\"box box-solid box-primary\">\r\n          <div class=\"box-body\" formArrayName=\"items\">\r\n            <!-- <h2 class=\"page-header  text-blue mt-0 pt-0\">\r\n              <i class=\"fa fa-files-o\"></i> Upload MP3\r\n            </h2> -->\r\n            <label class=\"control-label\">Narration</label>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <div *ngFor=\"let item of items.controls; let i = index;\">\r\n                  <div [formGroupName]=\"i\">\r\n                    <table id=\"tbl-upload\" class=\"table table-bordered\">\r\n                      <tbody>\r\n                        <tr *ngIf=\"i==0\" class=\"active\">\r\n                          <!-- <th>Document Name</th>\r\n                          <th>Document Description</th> -->\r\n                          <th>MP3 File Time</th>\r\n                          <th>MP3 File</th>\r\n                        </tr>\r\n                        <tr>\r\n                          <!-- <td>\r\n                            <div class=\"form-group required\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"doc_name\" formControlName=\"doc_name\" placeholder=\"Enter document Category\"\r\n                                required=\"\">\r\n\r\n\r\n\r\n\r\n                              <div class=\"help-block\"></div>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td>\r\n                            <div class=\"form-group \">\r\n\r\n                              <input type=\"text\" class=\"form-control\" name=\"doc_description\" formControlName=\"doc_description\" maxlength=\"100\" placeholder=\"Enter document related descriptions\"\r\n                                required=\"\">\r\n\r\n                              <div class=\"help-block\"></div>\r\n                            </div>\r\n                          </td> -->\r\n                          <td>\r\n                            <div class=\"form-group required\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"file_time\" formControlName=\"file_time\" placeholder=\"Enter File Time\" required>\r\n                              <div class=\"help-block\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td>\r\n                            <div class=\"form-group  required\">\r\n                              <input #variable accept=\".mp3\" type=\"file\" title=\"Browse MP3\"   (change)=\"fileSelectionEvent($event,i, variable)\" >\r\n                              <div class=\"help-block\"></div>\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"remove\" *ngIf=\" i!=0 \">\r\n                            <a title=\"Remove\" (click)=\"removeItem(i)\" class=\"fa fa-minus-square fa-lg text-red\"></a>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"pull-right\">\r\n                  <button type=\"button\" class=\"btn btn-sm allam-btn-green text-white\" title=\"Add More\" style=\"\" (click)=\"addItem()\" [disabled]=\"loading\">{{ loading ? 'wait...' : 'Add More' }}</button>\r\n                   \r\n                </div> -->\r\n                <div class=\"box-footer\" style=\"align-content: center\">\r\n                  <button type=\"submit\" class=\"btn btn-warning pull-right upload-file\" [disabled]=\"loading\">{{ loading ? 'Uploading...' : 'Upload File' }} </button>\r\n                </div>\r\n              </div>\r\n              <!--./col-->\r\n            </div>\r\n            <!--./row-->\r\n          </div>\r\n          <!--./box-body-->\r\n          \r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    \r\n  </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/view/view-league-competition.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/view/view-league-competition.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"show\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-block\">\r\n                \r\n            <div class=\"dt-responsive table-responsive11\" *ngIf=\"route.endsWith('list')\"  >\r\n                <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6 mb-3\"> </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6 mb-3\">\r\n                    <div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n                        <label>Search\r\n                        <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n                        </label>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12\">\r\n                <div class=\"dt-responsive table-responsive\">\r\n                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                <thead>\r\n                <tr role=\"row\">\r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">ID</th> -->\r\n            \r\n                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 100px;\" aria-sort=\"descending\" (click)=\"sort('compitition_name')\">Title<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'compitition_name', 'fa-sort-asc': (column == 'compitition_name' && isDesc), 'fa-sort-desc': (column == 'compitition_name' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('start_date')\">Start Date<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'start_date', 'fa-sort-asc': (column == 'start_date' && isDesc), 'fa-sort-desc': (column == 'start_date' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('created_at')\">Created Date<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'created_at', 'fa-sort-asc': (column == 'created_at' && isDesc), 'fa-sort-desc': (column == 'created_at' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('end_date')\">End Date<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'end_date', 'fa-sort-asc': (column == 'end_date' && isDesc), 'fa-sort-desc': (column == 'end_date' && !isDesc) }\" aria-hidden=\"true\"> </i></th> -->\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('start_time')\">Start Time<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'start_time', 'fa-sort-asc': (column == 'start_time' && isDesc), 'fa-sort-desc': (column == 'start_time' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('end_time')\">End Time<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'end_time', 'fa-sort-asc': (column == 'end_time' && isDesc), 'fa-sort-desc': (column == 'end_time' && !isDesc) }\" aria-hidden=\"true\"> </i></th> -->\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n            \r\n                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> </th>\r\n                </thead>\r\n                <tbody>\r\n            \r\n            \r\n                <tr role=\"row\" *ngFor=\"let data of dailyList | filter: term : term2 | orderBy: {property: column, direction: direction} | paginate : {\r\n                    itemsPerPage: pageSize,\r\n                    currentPage: page,\r\n                    totalItems: count\r\n                  }; let index =index;\r\n                            let isOdd=odd;\r\n                            let isEven=even\" \r\n            \r\n                    [class.odd]=\"isOdd\" \r\n                    [class.even]=\"isEven\" >\r\n                <!-- <td class=\"\">{{ data.id }}</td> -->\r\n                <td class=\"sorting_1\"><a href=\"javascript:void(0);\" (click)=\"getLeagueCompetition(data.id)\">{{ data.compitition_name }} </a></td>\r\n                <td class=\"\">{{ data.start_date | date }}</td>\r\n                <td class=\"\">{{ data.created_at | date}}</td>\r\n                <td><!-- {{ data.start_time }} --> {{ data.start_date_time | date:\"hh:mm:ss a\":setOffset}}</td>\r\n                <!-- <td>{{ data.end_time }}</td> -->\r\n                <td>\r\n                    <!-- (click)=\"changeStatus(data)\" -->\r\n                <button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(1, data.id)\"> <i class=\"fa fa-times text-warning\"></i> UnApproved </button>\r\n                <button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(0, data.id)\"> <i class=\"fa fa-check allam-txt-green\"></i> Approved </button>\r\n            \r\n                </td>\r\n                <td class=\"categories\">\r\n                <!-- <a [routerLink]=\"['edit-category', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\" ></i></a> -->\r\n            \r\n                <button *ngIf=\"data.league_date > jstoday\" type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"deleteOneItem(data.id)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\" ></i> </button>\r\n            \r\n                </td>\r\n                </tr>\r\n            \r\n                </tbody>\r\n            \r\n                </table>\r\n            \r\n                </div>\r\n            \r\n                </div></div>\r\n            \r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                      <div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n                        <label>\r\n                          <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n                            <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n                                {{ size }}\r\n                            </option>\r\n                          </select>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                      <pagination-controls\r\n                          previousLabel=\"Prev\"\r\n                          nextLabel=\"Next\"\r\n                          responsive=\"true\"\r\n                          class=\"pagination\"\r\n                          (pageChange)=\"handlePageChange($event)\"\r\n                        ></pagination-controls>   \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"dt-responsive table-responsive11\"  *ngIf=\"currentRoute=='/league/league-list/group'\">\r\n                tetetef\r\n            </div> -->\r\n            <ng-container *ngIf=\"route.endsWith('league-list/group')\">\r\n                show group\r\n                <button (click)=\"backLeagueList()\" class=\"btn allam-btn-green text-white nextBtn \" type=\"button\">Back</button>\r\n            </ng-container>\r\n            </div>\r\n        </div>\r\n        <!-- {{route | json}} -->\r\n        <!--  route is\r\n        <ng-container *ngIf=\"route.endsWith('league-list/group')\">group</ng-container>\r\n        <ng-container *ngIf=\"route.includes('league-list/list')\">show</ng-container> \r\n        <ng-container *ngIf=\"route.includes('list/update')\">show</ng-container> -->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"!show\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 Competitive-exam-wrap \">\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-7\">\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">League Competition</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\"> <!-- {{getCompetition | json}} -->\r\n                                <label class=\"control-label\">Description: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.description}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\">Name of the competition: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.compitition_name}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <label class=\"control-label\">Competition Logo: </label>\r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group float-r\">\r\n                                    <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n                                    <img [src]=\"preview\" [alt]=\"getCompetition.compitition_name\" height=\"150\" >\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12\">\r\n                            <div class=\"dt-responsive table-responsive\">\r\n                                <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n                                <thead>\r\n                                    <tr>\r\n                                    <!-- <th width=\"10%\">Category</th> -->\r\n                                    <th width=\"10%\">Question</th>\r\n                                    <!-- <th width=\"10%\">Question File Url</th> -->\r\n                                    <th width=\"10%\">Answer</th>\r\n                                    <th width=\"10%\">Option 1</th>\r\n                                    <th width=\"10%\">Option 2</th>\r\n                                    <th width=\"10%\">Option 3</th>\r\n                                    <th width=\"10%\">Option 4</th>\r\n                                    <th width=\"10%\">Duration</th>\r\n                                    <th width=\"10%\">Level</th>\r\n                                    <th width=\"10%\">Notes</th>\r\n                                    \r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of getQuestion\">\r\n                                    <!-- <td width=\"10%\">{{ item.category }}</td> -->\r\n                                    <td width=\"10%\">{{ item.question_name }}</td>\r\n                                    <!-- <td width=\"10%\">{{ item.question_file_url }}</td> -->\r\n                                    <td width=\"10%\">{{ item.answer }}</td>\r\n                                    <td width=\"10%\">{{ item.option1 }}</td>\r\n                                    <td width=\"10%\">{{ item.option2 }}</td>\r\n                                    <td width=\"10%\">{{ item.option3 }}</td>\r\n                                    <td width=\"10%\">{{ item.option4 }}</td>\r\n                                    <td width=\"10%\">{{ item.duration }}</td>\r\n                                    <td width=\"10%\">{{ item.level }}</td>\r\n                                    <td width=\"10%\">{{ item.note }}</td>\r\n                                    \r\n                                    </tr>\r\n                                </tbody>\r\n                                </table>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Start Date: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.start_date | date}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Start Time: </label>\r\n                                <div class=\"control-label\">  <!-- {{getCompetition.start_time}} --> {{ getCompetition.start_date_time | date:\"hh:mm:ss a\":setOffset}}</div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">Waiting Time: </label>\r\n                                <div class=\"control-label\"> {{getCompetition.waiting_time}}</div>\r\n                            </div>\r\n                            \r\n                            <!-- <div class=\"col-md-3\">\r\n                                <label class=\"control-label\">End Time: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.end_ime}}</div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-3\">\r\n                                <!-- Image Preview -->\r\n                                <div class=\"form-group float-r\">\r\n                                    <label class=\"control-label\">Company logo: </label>\r\n                                    <div class=\"preview\" *ngIf=\"companyLogo && companyLogo !== null\">\r\n                                      <img [src]=\"companyLogo\" [alt]=\"getCompetition.app_name\" height=\"150\" >\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company name: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.company_name}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company link: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.company_url}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                <label class=\"control-label\">Company about: </label>\r\n                                <div class=\"control-label\">  {{getCompetition.company_about}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12 narration-img-upload\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"control-label\">File : </label>\r\n                                <div> <img *ngFor='let url of advFile'  [src]=\"url\" height=\"200\"> <br/> </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-md-12 \"> \r\n                            <div class=\"form-group\">\r\n                            {{percentDone}}\r\n                <!-- Progress Bar --> \r\n                        <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n                            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n                                [style.width.%]=\"percentDone\">\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\"> \r\n                        <div class=\"col-sm-12 col-md-12 \"> \r\n                            <!-- <button class=\"btn allam-btn-green text-white nextBtn pull-right ml-5\" type=\"button\" (click)=\"changeStatus(1, getCompetition.id)\">{{getCompetition.status == 1 ? 'UnApproved': 'Approved!'}} </button> -->\r\n                            <button *ngIf=\"getStatus!='1'\" class=\"btn allam-status-btn btn allam-btn-green text-white nextBtn pull-right ml-4\" (click)=\"changeStatus(1, getCompetition.id)\"> UnApproved </button>\r\n                            <button *ngIf=\"getStatus=='1'\" class=\"btn allam-status-btn btn allam-btn-green text-white nextBtn pull-right ml-4\" (click)=\"changeStatus(0, getCompetition.id)\"> Approved </button>\r\n                            <button class=\"btn btn-warning prevBtn pull-right\" type=\"button\" (click)=\"goBack()\">Back</button>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/league/edit/edit-league-competition.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/league/edit/edit-league-competition.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Latest compiled and minified CSS included as External Resource*/\n/* Optional theme */\n/*@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css');*/\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: 0;\n}\n.daily-competition-wrap {\n  text-align: right !important;\n  font-size: 14px;\n  color: #353c4e;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #949494;\n  border-color: #949494;\n}\n#btnUpload {\n  border: 0px;\n}\n.stepwizard-step p {\n  margin-top: 0px;\n  color: #666;\n}\n.stepwizard-row {\n  display: table-row;\n}\n.stepwizard {\n  display: table;\n  margin-bottom: 25px;\n  width: 100%;\n  position: relative;\n}\n.stepwizard-step button[disabled] {\n  /*opacity: 1 !important;\n  filter: alpha(opacity=100) !important;*/\n}\n.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {\n  opacity: 1 !important;\n  color: #bbb;\n}\n.stepwizard-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc;\n  z-index: 0;\n  left: 0;\n}\n.stepwizard-step {\n  display: table-cell;\n  text-align: center;\n  position: relative;\n}\n.btn-success:not(:disabled):not(.disabled).active,\n.btn-success:not(:disabled):not(.disabled):active,\n.show > .btn-success.dropdown-toggle {\n  background-color: #00a39d;\n  border-color: #00a39d;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.active {\n  background-color: #2be0d5;\n  color: #fff;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.formtab-stepbystep {\n  overflow: auto;\n}\n.formtab-stepbystep ul li {\n  float: left;\n  width: 14.1%;\n  position: relative;\n}\n.formtab-stepbystep ul li a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  text-align: center;\n  font-size: 18px;\n  line-height: 37px;\n  position: relative;\n  z-index: 1;\n  color: #353c4e;\n  background: #fff;\n  border: solid 1px #18BBB1;\n}\n.formtab-stepbystep ul li a.active {\n  background-color: #18BBB1;\n  color: #fff;\n}\n.formtab-stepbystep ul li:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  background: #18BBB1;\n  width: 100%;\n  top: 20px;\n}\n.download-list {\n  float: right;\n}\n.set-promotion-wrap {\n  padding: 30px 0 40px;\n}\n.set-promotion-wrap select, option {\n  text-align: right;\n}\n.set-promotion-wrap select {\n  background: #f1f1f1;\n}\n.set-promotion-wrap .set-promotion ul li input[type=text], .set-narration-wrap input[type=text], .set-narration-wrap input[type=number], .set-narration-wrap textarea {\n  text-align: right;\n}\n.set-promotion-wrap .set-promotion ul li input[type=file] {\n  direction: rtl;\n}\n.set-promotion-wrap .set-promotion ul li {\n  margin-bottom: 4px;\n}\n.set-narration-wrap {\n  text-align: right;\n}\n.set-narration-wrap textarea {\n  resize: none;\n}\n.set-narration-wrap .narration-url {\n  margin-bottom: 40px;\n  position: relative;\n}\n.set-narration-wrap .narration-url:after {\n  content: \"OR\";\n  position: absolute;\n  bottom: -40px;\n  left: 46%;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.set-narration-wrap .company-logo-place {\n  height: 151px;\n}\n.live-streaming-wrap {\n  padding: 20px 0 10px;\n}\ninput, input[type=text], textarea, select {\n  text-align: right;\n  direction: rtl;\n  resize: none;\n}\n.daily-competition-wrap .nextBtn, .daily-competition-wrap .prevBtn {\n  width: 150px;\n}\n.form-control.select2.ng-valid.ng-dirty.ng-touched,\n.form-control.select2.ng-untouched.ng-pristine.ng-valid,\n.form-control.select2.ng-pristine.ng-valid.ng-touched {\n  margin-bottom: 20px;\n  background: #f1f0f0;\n  height: 40px;\n}\n.or-wrap {\n  position: relative;\n  padding-bottom: 30px;\n}\n.or-txt {\n  padding: 7px 8px;\n  position: absolute;\n  border-radius: 50%;\n  left: 49%;\n  bottom: 6px;\n  border: solid 1px #a5a5a5;\n}\n.narration-text-h {\n  height: 75px;\n}\n.company-logo-area {\n  width: 100%;\n  height: 155px;\n  padding: 60px 10px 10px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n}\n.company-logo-area input {\n  height: 155px;\n  opacity: 0;\n  position: absolute;\n  top: 26px;\n  left: 16px;\n  width: 92%;\n}\n.send-push input[type=radio] {\n  margin: 0 5px;\n}\n.table-bordered td, .table-bordered th {\n  border: 1px solid #dee2e6 !important;\n}\n.sucessful {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n#step-7 {\n  overflow-wrap: anywhere;\n}\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n#step-7 img {\n  max-width: 100px !important;\n  height: 100px !important;\n}\n.table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n  font-weight: 600;\n}\n#step-7 .table-bordered td, #step-7 .table-bordered th {\n  border: 1px solid #bfbfbf !important;\n}\n.slot-details-wrap span {\n  width: 65px;\n  display: inline-block;\n}\n.btn:active, .btn.active {\n  box-shadow: none !important;\n}\n#step-6 img {\n  max-width: 100px !important;\n  height: auto !important;\n}\n.invalid-feedback {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZ3VlL2VkaXQvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGxlYWd1ZVxcZWRpdFxcZWRpdC1sZWFndWUtY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYWd1ZS9lZGl0L2VkaXQtbGVhZ3VlLWNvbXBldGl0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFBO0FBRUEsbUJBQUE7QUFFQSx3RkFBQTtBQUNBO0VBRUksVUFBQTtBQ0ZKO0FESUE7RUFDRyw0QkFBQTtFQUE2QixlQUFBO0VBQWlCLGNBQUE7QUNDakQ7QURDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDRUo7QURBQTtFQUFZLFdBQUE7QUNJWjtBREhBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNNSjtBREpBO0VBQ0ksa0JBQUE7QUNPSjtBRExBO0VBQ0ksY0FBQTtFQUFnQixtQkFBQTtFQUNoQixXQUFBO0VBQ0Esa0JBQUE7QUNTSjtBRE5BO0VBQ0k7eUNBQUE7QUNVSjtBRFBBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDVUo7QURSQTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFBWSxPQUFBO0FDWWhCO0FEVkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNhSjtBRFRBOzs7RUFFcUMseUJBQUE7RUFBMEIscUJBQUE7QUNjL0Q7QURYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNjSjtBRFpBO0VBQVMseUJBQUE7RUFBMEIsV0FBQTtBQ2lCbkM7QURoQkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ21CSjtBRFpBO0VBQXFCLGNBQUE7QUNnQnJCO0FEZkE7RUFBMkIsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtBQ3FCcEQ7QURwQkE7RUFBOEIsV0FBQTtFQUFhLFlBQUE7RUFBYSxrQkFBQTtFQUN0RCxjQUFBO0VBQWdCLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGlCQUFBO0VBQWtCLGtCQUFBO0VBQ3JGLFVBQUE7RUFBWSxjQUFBO0VBQWUsZ0JBQUE7RUFBaUIseUJBQUE7QUNrQzlDO0FEakNFO0VBQW9DLHlCQUFBO0VBQTBCLFdBQUE7QUNzQ2hFO0FEckNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUN3Q0o7QURuQ0E7RUFBaUIsWUFBQTtBQ3VDakI7QURyQ0E7RUFBc0Isb0JBQUE7QUN5Q3RCO0FEeENBO0VBQW9DLGlCQUFBO0FDNENwQztBRDNDQTtFQUE0QixtQkFBQTtBQytDNUI7QUQ5Q0E7RUFBOEssaUJBQUE7QUNrRDlLO0FEakRBO0VBQThELGNBQUE7QUNxRDlEO0FEcERBO0VBQTBDLGtCQUFBO0FDd0QxQztBRHJEQTtFQUFzQixpQkFBQTtBQ3lEdEI7QUR4REE7RUFBK0IsWUFBQTtBQzREL0I7QUQzREE7RUFBb0MsbUJBQUE7RUFBb0Isa0JBQUE7QUNnRXhEO0FEL0RBO0VBQTBDLGFBQUE7RUFBYyxrQkFBQTtFQUFtQixhQUFBO0VBQWMsU0FBQTtFQUFVLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7RUFBbUIsaUJBQUE7RUFBa0IsZ0JBQUE7RUFBaUIsZUFBQTtBQzRFbEw7QUQxRUE7RUFBMEMsYUFBQTtBQzhFMUM7QUQ3RUE7RUFBdUIsb0JBQUE7QUNpRnZCO0FEL0VBO0VBQ0ksaUJBQUE7RUFBbUIsY0FBQTtFQUNuQixZQUFBO0FDbUZKO0FEaEZBO0VBQXFFLFlBQUE7QUNvRnJFO0FEbkZBOzs7RUFHRyxtQkFBQTtFQUFxQixtQkFBQTtFQUFxQixZQUFBO0FDd0Y3QztBRHZGQTtFQUFXLGtCQUFBO0VBQW9CLG9CQUFBO0FDNEYvQjtBRDNGQTtFQUFTLGdCQUFBO0VBQWtCLGtCQUFBO0VBQ3ZCLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2dHSjtBRDVGQTtFQUFvQixZQUFBO0FDZ0dwQjtBRC9GQTtFQUFxQixXQUFBO0VBQWEsYUFBQTtFQUFlLHVCQUFBO0VBQzdDLHNCQUFBO0VBQ0Esa0JBQUE7QUNxR0o7QURwR0E7RUFBMEIsYUFBQTtFQUN0QixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUN3R0o7QUR0R0E7RUFBaUMsYUFBQTtBQzBHakM7QUR6R0E7RUFBd0Msb0NBQUE7QUM2R3hDO0FEM0dBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDOEdKO0FEM0dBO0VBQVMsdUJBQUE7QUMrR1Q7QUQ5R0E7RUFBVSxxQ0FBQTtBQ2tIVjtBRGpIQTtFQUF1QyxtQkFBQTtFQUFxQixxQ0FBQTtFQUFtQyxhQUFBO0FDdUgvRjtBRHRIQTtFQUFxQixtQkFBQTtBQzBIckI7QUR6SEE7RUFBYywyQkFBQTtFQUEyQix3QkFBQTtBQzhIekM7QUQ3SEE7RUFBMkQsZ0JBQUE7QUNpSTNEO0FEaElBO0VBQXdELG9DQUFBO0FDb0l4RDtBRGxJQTtFQUEwQixXQUFBO0VBQWEscUJBQUE7QUN1SXZDO0FEdElBO0VBQTBCLDJCQUFBO0FDMEkxQjtBRHpJQTtFQUFjLDJCQUFBO0VBQTJCLHVCQUFBO0FDOEl6QztBRDdJQTtFQUNJLHlCQUFBO0FDZ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhZ3VlL2VkaXQvZWRpdC1sZWFndWUtY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTUyBpbmNsdWRlZCBhcyBFeHRlcm5hbCBSZXNvdXJjZSovXHJcblxyXG4vKiBPcHRpb25hbCB0aGVtZSAqL1xyXG5cclxuLypAaW1wb3J0IHVybCgnLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzJyk7Ki9cclxuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmZvY3VzLCAuYnRuOmFjdGl2ZS5mb2N1cywgLmJ0bi5hY3RpdmUuZm9jdXN7XHJcblxyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCB7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzM1M2M0ZTtcclxufVxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM5NDk0OTQ7XHJcbn1cclxuI2J0blVwbG9hZCB7Ym9yZGVyOjBweDt9XHJcbi5zdGVwd2l6YXJkLXN0ZXAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjojNjY2O1xyXG59XHJcbi5zdGVwd2l6YXJkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnN0ZXB3aXphcmQge1xyXG4gICAgZGlzcGxheTogdGFibGU7IG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0ZXB3aXphcmQtc3RlcCBidXR0b25bZGlzYWJsZWRdIHtcclxuICAgIC8qb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCkgIWltcG9ydGFudDsqL1xyXG59XHJcbi5zdGVwd2l6YXJkIC5idG4uZGlzYWJsZWQsIC5zdGVwd2l6YXJkIC5idG5bZGlzYWJsZWRdLCAuc3RlcHdpemFyZCBmaWVsZHNldFtkaXNhYmxlZF0gLmJ0biB7XHJcbiAgICBvcGFjaXR5OjEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNiYmI7XHJcbn1cclxuLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OlwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICB6LWluZGV4OiAwOyBsZWZ0OiAwO1xyXG59XHJcbi5zdGVwd2l6YXJkLXN0ZXAge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIFxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCBcclxuLnNob3c+LmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7IGJhY2tncm91bmQtY29sb3I6IzAwYTM5ZDsgYm9yZGVyLWNvbG9yOiMwMGEzOWQ7IH1cclxuXHJcblxyXG4uYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiMyYmUwZDU7IGNvbG9yOiNmZmY7fVxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHtvdmVyZmxvdzogYXV0bzt9XHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkge2Zsb2F0OmxlZnQ7IHdpZHRoOjE0LjElOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXHJcbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYSB7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6NDBweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IGF1dG87IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDozN3B4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTsgY29sb3I6IzM1M2M0ZTsgYmFja2dyb3VuZDojZmZmOyBib3JkZXI6c29saWQgMXB4ICMxOEJCQjE7fVxyXG4gIC5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYS5hY3RpdmUge2JhY2tncm91bmQtY29sb3I6IzE4QkJCMTsgY29sb3I6I2ZmZjt9XHJcbiAgLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiMxOEJCQjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMjBweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG4uZG93bmxvYWQtbGlzdCB7IGZsb2F0OnJpZ2h0O31cclxuXHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgeyBwYWRkaW5nOjMwcHggMCA0MHB4fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCwgb3B0aW9uIHt0ZXh0LWFsaWduOnJpZ2h0OyAgIH1cclxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3Qge2JhY2tncm91bmQ6ICNmMWYxZjE7fVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIC5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT1cImZpbGVcIl0geyBkaXJlY3Rpb246IHJ0bDsgfVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIHttYXJnaW4tYm90dG9tOjRweDt9XHJcblxyXG5cclxuLnNldC1uYXJyYXRpb24td3JhcCB7IHRleHQtYWxpZ246IHJpZ2h0O31cclxuLnNldC1uYXJyYXRpb24td3JhcCB0ZXh0YXJlYSB7IHJlc2l6ZTogbm9uZTt9XHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmwge21hcmdpbi1ib3R0b206NDBweDsgcG9zaXRpb246cmVsYXRpdmU7fVxyXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsOmFmdGVyIHtjb250ZW50OidPUic7IHBvc2l0aW9uOmFic29sdXRlOyBib3R0b206LTQwcHg7IGxlZnQ6NDYlOyB3aWR0aDo0MHB4OyBoZWlnaHQ6NDBweDsgdGV4dC1hbGlnbjpjZW50ZXI7IGxpbmUtaGVpZ2h0OjQwcHg7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOiAxOHB4O31cclxuXHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgLmNvbXBhbnktbG9nby1wbGFjZSB7IGhlaWdodDoxNTFweDsgfVxyXG4ubGl2ZS1zdHJlYW1pbmctd3JhcCB7IHBhZGRpbmc6MjBweCAwIDEwcHggfVxyXG5cclxuaW5wdXQsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAgLm5leHRCdG4sIC5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5wcmV2QnRuIHsgd2lkdGg6MTUwcHg7fVxyXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctdmFsaWQubmctZGlydHkubmctdG91Y2hlZCwgXHJcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQsIFxyXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctcHJpc3RpbmUubmctdmFsaWQubmctdG91Y2hlZFxyXG4geyBtYXJnaW4tYm90dG9tOiAyMHB4OyBiYWNrZ3JvdW5kOiAjZjFmMGYwOyBoZWlnaHQ6IDQwcHg7fVxyXG4ub3Itd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDMwcHg7fVxyXG4ub3ItdHh0IHtwYWRkaW5nOiA3cHggOHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsZWZ0OiA0OSU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNhNWE1YTU7XHJcblxyXG59XHJcblxyXG4ubmFycmF0aW9uLXRleHQtaCB7IGhlaWdodDogNzVweDt9XHJcbi5jb21wYW55LWxvZ28tYXJlYSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDE1NXB4OyBwYWRkaW5nOiA2MHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7fVxyXG4uY29tcGFueS1sb2dvLWFyZWEgaW5wdXQge2hlaWdodDogMTU1cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNnB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiA5MiU7fVxyXG5cclxuLnNlbmQtcHVzaCBpbnB1dFt0eXBlPVwicmFkaW9cIl0geyBtYXJnaW46IDAgNXB4OyB9XHJcbi50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDt9XHJcblxyXG4uc3VjZXNzZnVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiNzdGVwLTcge292ZXJmbG93LXdyYXA6IGFueXdoZXJlO31cclxuLmdyYXktYmcge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXA6bnRoLW9mLXR5cGUoZXZlbikge21hcmdpbi1ib3R0b206IDI1cHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjA1KTsgcGFkZGluZzogMTBweDt9XHJcbiNzdGVwLTcgLmZvcm0tZ3JvdXAge21hcmdpbi1ib3R0b206IDI1cHg7fVxyXG4jc3RlcC03IGltZyB7IG1heC13aWR0aDoxMDBweCFpbXBvcnRhbnQ7IGhlaWdodDoxMDBweCFpbXBvcnRhbnQ7fVxyXG4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGgsIC50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZCB7IGZvbnQtd2VpZ2h0OiA2MDA7fVxyXG4jc3RlcC03IC50YWJsZS1ib3JkZXJlZCB0ZCwgI3N0ZXAtNyAudGFibGUtYm9yZGVyZWQgdGgge2JvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDsgfVxyXG5cclxuLnNsb3QtZGV0YWlscy13cmFwIHNwYW4geyB3aWR0aDogNjVweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmJ0bjphY3RpdmUsIC5idG4uYWN0aXZlIHtib3gtc2hhZG93OiBub25lIWltcG9ydGFudDt9XHJcbiNzdGVwLTYgaW1nIHsgbWF4LXdpZHRoOjEwMHB4IWltcG9ydGFudDsgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDt9XHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKiBMYXRlc3QgY29tcGlsZWQgYW5kIG1pbmlmaWVkIENTUyBpbmNsdWRlZCBhcyBFeHRlcm5hbCBSZXNvdXJjZSovXG4vKiBPcHRpb25hbCB0aGVtZSAqL1xuLypAaW1wb3J0IHVybCgnLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzJyk7Ki9cbi5idG46Zm9jdXMsIC5idG46YWN0aXZlOmZvY3VzLCAuYnRuLmFjdGl2ZTpmb2N1cywgLmJ0bi5mb2N1cywgLmJ0bjphY3RpdmUuZm9jdXMsIC5idG4uYWN0aXZlLmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzUzYzRlO1xufVxuXG4ucGFuZWwtcHJpbWFyeSA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XG4gIGJvcmRlci1jb2xvcjogIzk0OTQ5NDtcbn1cblxuI2J0blVwbG9hZCB7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc3RlcHdpemFyZC1zdGVwIHAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uc3RlcHdpemFyZC1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG5cbi5zdGVwd2l6YXJkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdGVwd2l6YXJkLXN0ZXAgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIC8qb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKSAhaW1wb3J0YW50OyovXG59XG5cbi5zdGVwd2l6YXJkIC5idG4uZGlzYWJsZWQsIC5zdGVwd2l6YXJkIC5idG5bZGlzYWJsZWRdLCAuc3RlcHdpemFyZCBmaWVsZHNldFtkaXNhYmxlZF0gLmJ0biB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNiYmI7XG59XG5cbi5zdGVwd2l6YXJkLXJvdzpiZWZvcmUge1xuICB0b3A6IDE0cHg7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB6LWluZGV4OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc3RlcHdpemFyZC1zdGVwIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLnNob3cgPiAuYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTM5ZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMzlkO1xufVxuXG4uYnRuLWNpcmNsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiZTBkNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcm10YWItc3RlcGJ5c3RlcCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNC4xJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIGEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIzM1M2M0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzE4QkJCMTtcbn1cblxuLmZvcm10YWItc3RlcGJ5c3RlcCB1bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOEJCQjE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzE4QkJCMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMjBweDtcbn1cblxuLmRvd25sb2FkLWxpc3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAge1xuICBwYWRkaW5nOiAzMHB4IDAgNDBweDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3QsIG9wdGlvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT10ZXh0XSwgLnNldC1uYXJyYXRpb24td3JhcCBpbnB1dFt0eXBlPXRleHRdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9bnVtYmVyXSwgLnNldC1uYXJyYXRpb24td3JhcCB0ZXh0YXJlYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNldC1uYXJyYXRpb24td3JhcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsOmFmdGVyIHtcbiAgY29udGVudDogXCJPUlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwcHg7XG4gIGxlZnQ6IDQ2JTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5jb21wYW55LWxvZ28tcGxhY2Uge1xuICBoZWlnaHQ6IDE1MXB4O1xufVxuXG4ubGl2ZS1zdHJlYW1pbmctd3JhcCB7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xufVxuXG5pbnB1dCwgaW5wdXRbdHlwZT10ZXh0XSwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCAubmV4dEJ0biwgLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAgLnByZXZCdG4ge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy12YWxpZC5uZy1kaXJ0eS5uZy10b3VjaGVkLFxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCxcbi5mb3JtLWNvbnRyb2wuc2VsZWN0Mi5uZy1wcmlzdGluZS5uZy12YWxpZC5uZy10b3VjaGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ub3Itd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5vci10eHQge1xuICBwYWRkaW5nOiA3cHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogNDklO1xuICBib3R0b206IDZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2E1YTVhNTtcbn1cblxuLm5hcnJhdGlvbi10ZXh0LWgge1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5jb21wYW55LWxvZ28tYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1NXB4O1xuICBwYWRkaW5nOiA2MHB4IDEwcHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29tcGFueS1sb2dvLWFyZWEgaW5wdXQge1xuICBoZWlnaHQ6IDE1NXB4O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLnNlbmQtcHVzaCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uc3VjZXNzZnVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4jc3RlcC03IHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ncmF5LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuI3N0ZXAtNyAuZm9ybS1ncm91cDpudGgtb2YtdHlwZShldmVuKSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNzdGVwLTcgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4jc3RlcC03IGltZyB7XG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNzdGVwLTcgLnRhYmxlLWJvcmRlcmVkIHRkLCAjc3RlcC03IC50YWJsZS1ib3JkZXJlZCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmYgIWltcG9ydGFudDtcbn1cblxuLnNsb3QtZGV0YWlscy13cmFwIHNwYW4ge1xuICB3aWR0aDogNjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNzdGVwLTYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/league/edit/edit-league-competition.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/league/edit/edit-league-competition.component.ts ***!
  \************************************************************************/
/*! exports provided: EditLeagueCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeagueCompetitionComponent", function() { return EditLeagueCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/league.service */ "./src/app/services/league.service.ts");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);














var EditLeagueCompetitionComponent = /** @class */ (function () {
    function EditLeagueCompetitionComponent(activatedRoute, fb, leagueService, headerService, alertService, authenticationService, datePipe, router) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.leagueService = leagueService;
        this.headerService = headerService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.datePipe = datePipe;
        this.router = router;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].s3_url;
        this.getCompetition = [];
        this.getQuestion = [];
        this.getLeagueFile = [];
        this.setAudience = [];
        this.narrationOptions = 'file';
        this.editData = [];
        this.isEdit = false;
        this.idEdit = false;
        this.isSave = true;
        this.loading = false;
        this.submitted = false;
        this.questionShow = false;
        this.isProcessed = false;
        this.question_value = "";
        this.selectedType = '';
        this.narrationType = '';
        this.slot_9 = true;
        this.slot_12 = true;
        this.slot_3 = true;
        this.slot_6 = true;
        this.selectedItems = [];
        this.selectedAll = false;
        this.percentDone = 0;
        this.advFile = [];
        this.dropdownList = [];
        this.dropdownSettings = {};
        this.fileArr = [];
        this.jstoday = '';
        this.oneToSixtyArray = [];
        this.post = {
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now()),
        };
        this.narrOption = ["file"];
        this.durationOptions = ["10", "15", "20", "25", "30", "35", "40"];
        this.levelOptions = ["1", "2", "3", "4", "5"];
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
        this.formVar = this.fb.group({
            logo: [null],
            competitionName: [''],
            description: [''],
            startTime: ['00:00:00'],
            endTime: ['00:00:00'],
            waitingTime: ['00:00:00'],
            companyName: [''],
            companyLogo: [null],
            companyUrl: [''],
            companyDescription: [''],
            excelFile: [null],
            zipFile: [null],
            file: [null],
            question_type: [''],
            categories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            startDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["formatDate"])(this.post.startDate, 'yyyy-MM-dd', 'en')],
            endDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["formatDate"])(this.post.endDate, 'yyyy-MM-dd', 'en')],
            imageInput: [''],
            startDateTime: [''],
            minute_time: [''],
            second_time: [''],
            narration_text: [''],
            narration_time: [''],
            narration_text1: [''],
            narration_time1: [''],
            narration_type: [''],
            narration_url: [''],
            narration_url1: ['']
        });
        this.form = this.fb.group({
            question: [''],
            option1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            option4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answer: [''],
            note: [''],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            delArray: this.fb.array([])
        });
    }
    EditLeagueCompetitionComponent.prototype.ngOnInit = function () {
        this.formData = {};
        this.jstoday = new Date().toISOString();
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getAllCategory();
        this.getSeconds();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'title',
            enableCheckAll: false,
            searchPlaceholderText: 'Search Categories',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.getLeagueCompetition(id);
    };
    Object.defineProperty(EditLeagueCompetitionComponent.prototype, "f", {
        get: function () { return this.formVar.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditLeagueCompetitionComponent.prototype, "ff", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    EditLeagueCompetitionComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.headerService.getCategory().subscribe(function (categories) {
            _this.dropdownList = categories;
            ;
            //console.log(this.dropdownList);
        });
    };
    EditLeagueCompetitionComponent.prototype.getSeconds = function () {
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
    EditLeagueCompetitionComponent.prototype.getFileData = function (fileDataBroadcast) {
        this.fileArr = fileDataBroadcast;
        console.log('Picked date: ', fileDataBroadcast);
        this.advFile = [];
        //this.advFile.push(fileDataBroadcast.locationArray);
        var fileArray = fileDataBroadcast.locationArray;
        if (fileArray && (Object.keys(fileArray).length > 0)) {
            this.loading = false;
            for (var index = 0; index < fileArray.length; index++) {
                this.advFile.push(fileArray[index]);
            }
        }
    };
    EditLeagueCompetitionComponent.prototype.getDetailCategories = function (id) {
        var _this = this;
        this.leagueService.getByIdCategories(id).subscribe(function (categories) {
            //console.log(categories[0]);
            _this.selectedItems = JSON.parse(categories[0].categories);
        });
    };
    /* showQuestion(formVar){
      if(formVar.question_type == "category" && formVar.categories.length > 0){
        var categoriesIds = [];
        for (let i = 0; i < formVar.categories.length; i++) {
          var id = formVar.categories[i].id;
          categoriesIds.push(id);
        }
        console.log(categoriesIds);
        this.leagueService.getCategoryQuestion(categoriesIds).subscribe(categories => {
          this.getQuestion = categories;
          console.log('categories', categories);
          });
      }
    } */
    EditLeagueCompetitionComponent.prototype.showQuestion = function (formVar) {
        var _this = this;
        //console.log('formVar', formVar);
        this.loading = true;
        var categoriesIds = [];
        if (formVar.question_type == "category") {
            this.getQuestion = new Array();
        }
        if (formVar.question_type == "category" && formVar.categories.length > 0) {
            for (var i = 0; i < formVar.categories.length; i++) {
                var id = formVar.categories[i].id;
                categoriesIds.push(id);
            }
            //console.log('categoriesIds', categoriesIds);
            this.leagueService.getCategoryQuestion(categoriesIds).subscribe(function (categories) {
                _this.getQuestion = categories;
                //console.log('categories', categories);
                jquery__WEBPACK_IMPORTED_MODULE_12___default()('#foo').removeAttr('disabled').trigger('click');
            });
        }
        //this.loading = false;
    };
    EditLeagueCompetitionComponent.prototype.getFileStatus = function (getStatus) {
        console.log(getStatus);
        this.loading = getStatus;
    };
    EditLeagueCompetitionComponent.prototype.getLeagueCompetition = function (id) {
        var _this = this;
        //console.log(id);
        this.leagueService.editCompetition(id).subscribe(function (competition) {
            console.log(competition.data);
            _this.getCompetition = competition.data[0].competition[0];
            if (_this.getCompetition.league_date < _this.jstoday) {
                _this.alertService.pop('error', 'League Competiton has completed, you can not edit!');
                _this.router.navigate(['/league']);
            }
            if (_this.getCompetition.question_type == 'bulk') {
                _this.getQuestion = competition.data[1].question;
                _this.questionShow = true;
            }
            else {
                _this.questionShow = false;
                _this.getDetailCategories(id);
            }
            _this.getLeagueFile = competition.data[2].leagueFile[0];
            var fileArray = competition.data[2].leagueFile;
            if (fileArray && (Object.keys(fileArray).length > 0)) {
                for (var index = 0; index < fileArray.length; index++) {
                    _this.advFile.push(fileArray[index]);
                }
            }
            _this.preview = _this.s3_url + _this.getCompetition.logo;
            //this.appLogo = this.s3_url+this.getCompetition.app_logo;
            //this.audienceLogo = this.s3_url+this.setAudience.image_upload;
            _this.companyLogo = _this.s3_url + _this.getCompetition.company_logo;
            _this.file_url = _this.s3_url + _this.getLeagueFile.file_url;
            _this.file_url1 = _this.s3_url + _this.getLeagueFile.file_url1;
            _this.selectedType = _this.getCompetition.promotion_type;
            _this.questionType = _this.getCompetition.question_type;
            //this.narrationType = this.getNarration.narration_type;
            console.log(_this.getCompetition.compitition_name);
            //console.log(this.getLeagueFile.narration_text);
            //split time here
            var arr = _this.getCompetition.waiting_time.split(':');
            var hour = parseInt(arr[0]);
            var min = arr[1];
            var sec = arr[2];
            var file_time_arr = _this.getLeagueFile.file_time.split(':');
            var narration_time = file_time_arr[2];
            console.log(narration_time);
            var file_time_arr1 = _this.getLeagueFile.file_time1.split(':');
            var narration_time1 = file_time_arr1[2];
            _this.formVar.patchValue({
                logo: [null],
                competitionName: _this.getCompetition.compitition_name,
                description: _this.getCompetition.description,
                //startTime: this.getCompetition.start_time,
                endTime: _this.getCompetition.end_time,
                //waitingTime : this.getCompetition.waiting_time,
                //startDate: this.datePipe.transform(this.getCompetition.start_date,"yyyy-MM-dd"),
                endDate: _this.datePipe.transform(_this.getCompetition.end_date, "yyyy-MM-dd"),
                companyName: _this.getCompetition.company_name,
                companyLogo: [null],
                companyUrl: _this.getCompetition.company_url,
                companyDescription: _this.getCompetition.company_about,
                // excelFile: [null],
                // zipFile: [null],
                file: [null],
                question_type: _this.getCompetition.question_type,
                categories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                imageInput: [''],
                startDateTime: _this.getCompetition.start_date_time,
                minute_time: min,
                second_time: sec,
                narration_text: _this.getLeagueFile.narration_text,
                narration_time: narration_time,
                narration_text1: _this.getLeagueFile.narration_text1,
                narration_time1: narration_time1,
            });
        });
    };
    EditLeagueCompetitionComponent.prototype.editItem = function (event) {
        this.editData = event;
        this.isEdit = true;
        this.isSave = false;
        this.idEdit = this.editData.id;
        document.getElementById('buttonHide')
            .style.display = 'none';
        //this.question_value=this.editData.question;
        //console.log('---------------->>');
        //console.log(this.question_value);
        //console.log('<<----------------');
        this.form.patchValue({
            question: this.editData.question,
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
    };
    EditLeagueCompetitionComponent.prototype.goBack = function () {
        this.isEdit = false;
        this.isSave = true;
        document.getElementById('buttonHide').style.display = 'block';
    };
    EditLeagueCompetitionComponent.prototype.onClick = function (event) {
        this.showModal = true; // Show-Hide Modal Check
    };
    EditLeagueCompetitionComponent.prototype.hide = function () {
        this.showModal = false;
    };
    EditLeagueCompetitionComponent.prototype.setFormPreview = function (formValue) {
        /* if(this.advFile && (Object.keys(this.advFile).length === 0)){
          Swal.fire('','You have to upload file.','error');
          $('#reviewButton').closest(".form-group").addClass("has-error");
          this.loading = false;
          return;
        } */
        this.formData = formValue;
        var dateStringISO = new Date(this.formData.startDateTime).toLocaleString('en-IN', { timeZone: "Asia/Kolkata" });
        this.dateString = dateStringISO.split(',')[0];
        this.timeString = dateStringISO.split(',')[1];
        this.waitingTime = '00:' + formValue.minute_time + ':00';
        console.log(this.dateString);
        console.log(this.timeString);
        jquery__WEBPACK_IMPORTED_MODULE_12___default()('#reviewStep').removeAttr('disabled').trigger('click');
    };
    EditLeagueCompetitionComponent.prototype.onChange = function (event) {
        this.selectedType = event.target.value;
    };
    EditLeagueCompetitionComponent.prototype.narrationonChange = function (event) {
        this.narrationType = event.target.value;
    };
    // Image Preview
    EditLeagueCompetitionComponent.prototype.uploadCompetitionLogo = function (event) {
        var _this = this;
        var fileIn = event.target.files[0]; // <--- File Object for future use.
        this.formVar.controls['imageInput'].setValue(fileIn ? fileIn.name : ''); // <-- Set Value for Validation
        var file = event.target.files[0];
        this.formVar.patchValue({
            logo: file
        });
        this.formVar.get('logo').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditLeagueCompetitionComponent.prototype.uploadAudienceLogo = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.formVar.patchValue({
            image_upload: file
        });
        this.formVar.get('image_upload').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.audienceLogo = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditLeagueCompetitionComponent.prototype.uploadAppLogo = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.formVar.patchValue({
            app_logo: file
        });
        this.formVar.get('app_logo').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.appLogo = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditLeagueCompetitionComponent.prototype.uploadCompanyLogo = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.formVar.patchValue({
            company_logo: file
        });
        this.formVar.get('company_logo').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.companyLogo = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditLeagueCompetitionComponent.prototype.audFileSelected = function (event) {
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
        else {
            this.audSrc = '';
            this.figAudio.nativeElement.src = '';
        }
    };
    EditLeagueCompetitionComponent.prototype.audFileSelected1 = function (event) {
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.formVar.patchValue({
                narration_url1: file
            });
            this.formVar.get('narration_url1').updateValueAndValidity();
            this.audSrc1 = URL.createObjectURL(event.target.files[0]);
            console.log(this.audSrc1);
            this.figAudio1.nativeElement.src = this.audSrc1;
        }
        else {
            this.audSrc1 = '';
            this.figAudio1.nativeElement.src = '';
        }
    };
    EditLeagueCompetitionComponent.prototype.selectAll = function () {
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
    EditLeagueCompetitionComponent.prototype.checkIfAllSelected = function (event, val) {
        if (event.target.checked) {
            this.selectedItems.push(val);
        }
        else {
            this.selectedItems.splice(this.selectedItems.indexOf(val), 1);
        }
        //console.log(this.selectedItems)
    };
    EditLeagueCompetitionComponent.prototype.deleteOneItem = function (item_id) {
        var _this = this;
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                self.leagueService.deleteQuestion(item_id).subscribe(function () {
                    console.log('deleted draft row');
                    //self.getDraftQuestion();
                    //self.getQuestion.splice(self.getQuestion.indexOf(item_id),1);
                    _this.removeByAttr(self.getQuestion, 'id', item_id);
                });
                if (self.getQuestion.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                //Swal.fire('Cancelled','Your data is safe :)','error')
            }
        });
    };
    EditLeagueCompetitionComponent.prototype.deletItem = function () {
        var _this = this;
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oh', 'No item selected to delete :)', 'error');
            return false;
        }
        var self = this;
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                            self.leagueService.deleteQuestion(value).subscribe(function () {
                                console.log('deleted draft row');
                            });
                        }
                    });
                });
                if (self.getQuestion.length == 0) {
                    _this.isProcessed = false;
                }
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    EditLeagueCompetitionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('submit');
        if (!this.formVar.valid) {
            //this.formVar.markAllAsTouched();
            //this.stepper.validateSteps();
        }
        console.log('submit', this.fileArr.locationArray);
        //console.log('Submitted data', this.formVar.value);
        var competition_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.leagueService.updateCompetition(this.formVar.value, competition_id, this.fileArr.locationArray)
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
                        _this.alertService.pop('success', 'League Competiton updated successfully!');
                        _this.router.navigate(['/league']);
                    }
                    else {
                        _this.alertService.pop('error', event.body.message);
                    }
                    _this.percentDone = false;
            }
        });
    };
    EditLeagueCompetitionComponent.prototype.onUpdateTemp = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (!this.form.value.answer) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'Please select correct answer.', 'error');
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
        this.leagueService.updateQuestionCompetition(this.form.value)
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
    EditLeagueCompetitionComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
            var today = new Date().toISOString().split('T')[0];
            var todayTime = new Date().toISOString().split('T')[1];
            var tt = todayTime.split('.')[0];
            console.log(today);
            console.log(todayTime);
            console.log(tt);
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
                self.loading = true;
                var curStep = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='url'],input[type='file'],input[type='date'],input[type='time'],textarea,select"), isValid = true;
                //console.log('hello');
                setTimeout(function () {
                    //  console.log(self.getQuestion);
                    //if (typeof self.getQuestion == 'undefined' && self.getQuestion != 0) {
                    if (self.getQuestion && (Object.keys(self.getQuestion).length === 0)) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'You have to upload question data first.', 'error');
                        isValid = false;
                        jquery__WEBPACK_IMPORTED_MODULE_12___default()('.uploadButton').closest(".form-group").addClass("has-error");
                        self.loading = false;
                        return false;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_12___default()(".form-group").removeClass("has-error");
                    for (var i = 0; i < curInputs.length; i++) {
                        if (!curInputs[i].validity.valid) {
                            isValid = false; //console.log(curInputs[i]);
                            jquery__WEBPACK_IMPORTED_MODULE_12___default()(curInputs[i]).closest(".form-group").addClass("has-error");
                        }
                    }
                    //console.log('nextStepWizard', nextStepWizard);
                    if (isValid)
                        nextStepWizard.removeAttr('disabled').trigger('click');
                    self.loading = false;
                }, 2000);
            });
            jquery__WEBPACK_IMPORTED_MODULE_12___default()('div.setup-panel div a.btn-success').trigger('click');
        });
    };
    EditLeagueCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_league_service__WEBPACK_IMPORTED_MODULE_9__["LeagueService"] },
        { type: _services_header_service__WEBPACK_IMPORTED_MODULE_10__["HeaderService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditLeagueCompetitionComponent.prototype, "figAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditLeagueCompetitionComponent.prototype, "figAudio1", void 0);
    EditLeagueCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-league-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-league-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/edit/edit-league-competition.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-league-competition.component.scss */ "./src/app/pages/league/edit/edit-league-competition.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_league_service__WEBPACK_IMPORTED_MODULE_9__["LeagueService"], _services_header_service__WEBPACK_IMPORTED_MODULE_10__["HeaderService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _services__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditLeagueCompetitionComponent);
    return EditLeagueCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/league/league-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/league/league-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LeagueCompetitionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCompetitionRoutingModule", function() { return LeagueCompetitionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _league_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./league.component */ "./src/app/pages/league/league.component.ts");
/* harmony import */ var _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-league.component */ "./src/app/pages/league/list/list-league.component.ts");
/* harmony import */ var _edit_edit_league_competition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-league-competition.component */ "./src/app/pages/league/edit/edit-league-competition.component.ts");
/* harmony import */ var _view_view_league_competition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view-league-competition.component */ "./src/app/pages/league/view/view-league-competition.component.ts");







var routes = [
    {
        path: 'add',
        component: _league_component__WEBPACK_IMPORTED_MODULE_3__["LeagueCompetitionComponent"],
        data: {
            breadcrumb: 'League-competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'list',
        component: _view_view_league_competition_component__WEBPACK_IMPORTED_MODULE_6__["ViewDailyCompetitionComponent"],
        data: {
            breadcrumb: 'League-competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'edit/:id',
        component: _edit_edit_league_competition_component__WEBPACK_IMPORTED_MODULE_5__["EditLeagueCompetitionComponent"],
        data: {
            breadcrumb: 'League-competition',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: '',
        component: _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__["ListLeagueComponent"],
        data: {
            breadcrumb: 'List League Component',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'List League',
            status: false
        },
        children: [
            { path: 'group', component: _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__["ListLeagueComponent"], data: { viewOption: 'group', breadcrumb: 'Grouping', status: false } },
            { path: 'list-dash', component: _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__["ListLeagueComponent"], data: { viewOption: 'list', breadcrumb: 'List', status: false } },
            { path: 'update/:id', component: _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__["ListLeagueComponent"], data: { viewOption: 'update' } },
        ]
    }
];
var LeagueCompetitionRoutingModule = /** @class */ (function () {
    function LeagueCompetitionRoutingModule() {
    }
    LeagueCompetitionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeagueCompetitionRoutingModule);
    return LeagueCompetitionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/league/league.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/league/league.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Latest compiled and minified CSS included as External Resource*/\n/* Optional theme */\n/*@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css');*/\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: 0;\n}\n.daily-competition-wrap {\n  text-align: right !important;\n  font-size: 14px;\n  color: #353c4e;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #949494;\n  border-color: #949494;\n}\n#btnUpload {\n  border: 0px;\n}\n.stepwizard-step p {\n  margin-top: 0px;\n  color: #666;\n}\n.stepwizard-row {\n  display: table-row;\n}\n.stepwizard {\n  display: table;\n  margin-bottom: 25px;\n  width: 100%;\n  position: relative;\n}\n.stepwizard-step button[disabled] {\n  /*opacity: 1 !important;\n  filter: alpha(opacity=100) !important;*/\n}\n.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {\n  opacity: 1 !important;\n  color: #bbb;\n}\n.stepwizard-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc;\n  z-index: 0;\n  left: 0;\n}\n.stepwizard-step {\n  display: table-cell;\n  text-align: center;\n  position: relative;\n}\n.btn-success:not(:disabled):not(.disabled).active,\n.btn-success:not(:disabled):not(.disabled):active,\n.show > .btn-success.dropdown-toggle {\n  background-color: #00a39d;\n  border-color: #00a39d;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n.active {\n  background-color: #2be0d5;\n  color: #fff;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.formtab-stepbystep {\n  overflow: auto;\n}\n.formtab-stepbystep ul li {\n  float: left;\n  width: 14.1%;\n  position: relative;\n}\n.formtab-stepbystep ul li a {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  text-align: center;\n  font-size: 18px;\n  line-height: 37px;\n  position: relative;\n  z-index: 1;\n  color: #353c4e;\n  background: #fff;\n  border: solid 1px #18BBB1;\n}\n.formtab-stepbystep ul li a.active {\n  background-color: #18BBB1;\n  color: #fff;\n}\n.formtab-stepbystep ul li:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  background: #18BBB1;\n  width: 100%;\n  top: 20px;\n}\n.download-list {\n  float: right;\n}\n.set-promotion-wrap {\n  padding: 30px 0 40px;\n}\n.set-promotion-wrap select, option {\n  text-align: right;\n}\n.set-promotion-wrap select {\n  background: #f1f1f1;\n}\n.set-promotion-wrap .set-promotion ul li input[type=text], .set-narration-wrap input[type=text], .set-narration-wrap input[type=number], .set-narration-wrap textarea {\n  text-align: right;\n}\n.set-promotion-wrap .set-promotion ul li input[type=file] {\n  direction: rtl;\n}\n.set-promotion-wrap .set-promotion ul li {\n  margin-bottom: 4px;\n}\n.set-narration-wrap {\n  text-align: right;\n}\n.set-narration-wrap textarea {\n  resize: none;\n}\n.set-narration-wrap .narration-url {\n  margin-bottom: 40px;\n  position: relative;\n}\n.set-narration-wrap .narration-url:after {\n  content: \"OR\";\n  position: absolute;\n  bottom: -40px;\n  left: 46%;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.set-narration-wrap .company-logo-place {\n  height: 151px;\n}\n.live-streaming-wrap {\n  padding: 20px 0 10px;\n}\ninput, input[type=text], textarea, select {\n  text-align: right;\n  direction: rtl;\n  resize: none;\n}\n.daily-competition-wrap .nextBtn, .daily-competition-wrap .prevBtn {\n  width: 150px;\n}\n.form-control.select2.ng-valid.ng-dirty.ng-touched,\n.form-control.select2.ng-untouched.ng-pristine.ng-valid,\n.form-control.select2.ng-pristine.ng-valid.ng-touched {\n  margin-bottom: 20px;\n  background: #f1f0f0;\n  height: 40px;\n}\n.or-wrap {\n  position: relative;\n  padding-bottom: 30px;\n}\n.or-txt {\n  padding: 7px 8px;\n  position: absolute;\n  border-radius: 50%;\n  left: 49%;\n  bottom: 6px;\n  border: solid 1px #a5a5a5;\n}\n.narration-text-h {\n  height: 75px;\n}\n.company-logo-area {\n  width: 100%;\n  height: 155px;\n  padding: 60px 10px 10px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n}\n.company-logo-area input {\n  height: 155px;\n  opacity: 0;\n  position: absolute;\n  top: 26px;\n  left: 16px;\n  width: 92%;\n}\n.send-push input[type=radio] {\n  margin: 0 5px;\n}\n.table-bordered td, .table-bordered th {\n  border: 1px solid #dee2e6 !important;\n}\n.sucessful {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n#step-7 {\n  overflow-wrap: anywhere;\n}\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n#step-6 img {\n  max-width: 100px !important;\n  height: auto !important;\n}\n.slot-details-wrap span {\n  width: 20px;\n  display: inline-block;\n}\n.btn:active, .btn.active {\n  box-shadow: none !important;\n}\n.errors-following {\n  margin-bottom: 15px;\n}\n.invalid-feedback {\n  display: inline !important;\n}\n#tbl-upload {\n  margin-top: 15px;\n  background-color: #fff;\n}\n#tbl-upload th {\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZ3VlL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxsZWFndWVcXGxlYWd1ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhZ3VlL2xlYWd1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBQTtBQUVBLG1CQUFBO0FBRUEsd0ZBQUE7QUFDQTtFQUVJLFVBQUE7QUNGSjtBRElBO0VBQ0csNEJBQUE7RUFBNkIsZUFBQTtFQUFpQixjQUFBO0FDQ2pEO0FEQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUE7RUFBWSxXQUFBO0FDSVo7QURIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDTUo7QURKQTtFQUNJLGtCQUFBO0FDT0o7QURMQTtFQUNJLGNBQUE7RUFBZ0IsbUJBQUE7RUFDaEIsV0FBQTtFQUNBLGtCQUFBO0FDU0o7QUROQTtFQUNJO3lDQUFBO0FDVUo7QURQQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ1VKO0FEUkE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQVksT0FBQTtBQ1loQjtBRFZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDYUo7QURUQTs7O0VBRXFDLHlCQUFBO0VBQTBCLHFCQUFBO0FDYy9EO0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDY0o7QURaQTtFQUFTLHlCQUFBO0VBQTBCLFdBQUE7QUNpQm5DO0FEaEJBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNtQko7QURaQTtFQUFxQixjQUFBO0FDZ0JyQjtBRGZBO0VBQTJCLFdBQUE7RUFBWSxZQUFBO0VBQWEsa0JBQUE7QUNxQnBEO0FEcEJBO0VBQThCLFdBQUE7RUFBYSxZQUFBO0VBQWEsa0JBQUE7RUFDdEQsY0FBQTtFQUFnQixZQUFBO0VBQWMsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixpQkFBQTtFQUFrQixrQkFBQTtFQUNyRixVQUFBO0VBQVksY0FBQTtFQUFlLGdCQUFBO0VBQWlCLHlCQUFBO0FDa0M5QztBRGpDRTtFQUFvQyx5QkFBQTtFQUEwQixXQUFBO0FDc0NoRTtBRHJDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDd0NKO0FEbkNBO0VBQWlCLFlBQUE7QUN1Q2pCO0FEckNBO0VBQXNCLG9CQUFBO0FDeUN0QjtBRHhDQTtFQUFvQyxpQkFBQTtBQzRDcEM7QUQzQ0E7RUFBNEIsbUJBQUE7QUMrQzVCO0FEOUNBO0VBQThLLGlCQUFBO0FDa0Q5SztBRGpEQTtFQUE4RCxjQUFBO0FDcUQ5RDtBRHBEQTtFQUEwQyxrQkFBQTtBQ3dEMUM7QURyREE7RUFBc0IsaUJBQUE7QUN5RHRCO0FEeERBO0VBQStCLFlBQUE7QUM0RC9CO0FEM0RBO0VBQW9DLG1CQUFBO0VBQW9CLGtCQUFBO0FDZ0V4RDtBRC9EQTtFQUEwQyxhQUFBO0VBQWMsa0JBQUE7RUFBbUIsYUFBQTtFQUFjLFNBQUE7RUFBVSxXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLGVBQUE7QUM0RWxMO0FEMUVBO0VBQTBDLGFBQUE7QUM4RTFDO0FEN0VBO0VBQXVCLG9CQUFBO0FDaUZ2QjtBRC9FQTtFQUNJLGlCQUFBO0VBQW1CLGNBQUE7RUFDbkIsWUFBQTtBQ21GSjtBRGhGQTtFQUFxRSxZQUFBO0FDb0ZyRTtBRG5GQTs7O0VBR0csbUJBQUE7RUFBcUIsbUJBQUE7RUFBcUIsWUFBQTtBQ3dGN0M7QUR2RkE7RUFBVyxrQkFBQTtFQUFvQixvQkFBQTtBQzRGL0I7QUQzRkE7RUFBUyxnQkFBQTtFQUFrQixrQkFBQTtFQUN2QixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNnR0o7QUQ1RkE7RUFBb0IsWUFBQTtBQ2dHcEI7QUQvRkE7RUFBcUIsV0FBQTtFQUFhLGFBQUE7RUFBZSx1QkFBQTtFQUM3QyxzQkFBQTtFQUNBLGtCQUFBO0FDcUdKO0FEcEdBO0VBQTBCLGFBQUE7RUFDdEIsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDd0dKO0FEdEdBO0VBQWlDLGFBQUE7QUMwR2pDO0FEekdBO0VBQXdDLG9DQUFBO0FDNkd4QztBRDNHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQzhHSjtBRDNHQTtFQUFTLHVCQUFBO0FDK0dUO0FEOUdBO0VBQVUscUNBQUE7QUNrSFY7QURqSEE7RUFBdUMsbUJBQUE7RUFBcUIscUNBQUE7RUFBbUMsYUFBQTtBQ3VIL0Y7QUR0SEE7RUFBcUIsbUJBQUE7QUMwSHJCO0FEeEhBO0VBQWMsMkJBQUE7RUFBMkIsdUJBQUE7QUM2SHpDO0FEMUhBO0VBQTBCLFdBQUE7RUFBYSxxQkFBQTtBQytIdkM7QUQ5SEE7RUFBMEIsMkJBQUE7QUNrSTFCO0FEaElBO0VBQW1CLG1CQUFBO0FDb0luQjtBRGhJQTtFQUFrQiwwQkFBQTtBQ29JbEI7QURuSUE7RUFBYSxnQkFBQTtFQUFrQixzQkFBQTtBQ3dJL0I7QUR2SUE7RUFBZ0IsY0FBQTtBQzJJaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFndWUvbGVhZ3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGF0ZXN0IGNvbXBpbGVkIGFuZCBtaW5pZmllZCBDU1MgaW5jbHVkZWQgYXMgRXh0ZXJuYWwgUmVzb3VyY2UqL1xyXG5cclxuLyogT3B0aW9uYWwgdGhlbWUgKi9cclxuXHJcbi8qQGltcG9ydCB1cmwoJy8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMC4wL2Nzcy9ib290c3RyYXAtdGhlbWUubWluLmNzcycpOyovXHJcbi5idG46Zm9jdXMsIC5idG46YWN0aXZlOmZvY3VzLCAuYnRuLmFjdGl2ZTpmb2N1cywgLmJ0bi5mb2N1cywgLmJ0bjphY3RpdmUuZm9jdXMsIC5idG4uYWN0aXZlLmZvY3Vze1xyXG5cclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLmRhaWx5LWNvbXBldGl0aW9uLXdyYXAge1xyXG4gICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMzNTNjNGU7XHJcbn1cclxuLnBhbmVsLXByaW1hcnk+LnBhbmVsLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTQ5NDk0O1xyXG59XHJcbiNidG5VcGxvYWQge2JvcmRlcjowcHg7fVxyXG4uc3RlcHdpemFyZC1zdGVwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IzY2NjtcclxufVxyXG4uc3RlcHdpemFyZC1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcbi5zdGVwd2l6YXJkIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlOyBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdGVwd2l6YXJkLXN0ZXAgYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAvKm9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApICFpbXBvcnRhbnQ7Ki9cclxufVxyXG4uc3RlcHdpemFyZCAuYnRuLmRpc2FibGVkLCAuc3RlcHdpemFyZCAuYnRuW2Rpc2FibGVkXSwgLnN0ZXB3aXphcmQgZmllbGRzZXRbZGlzYWJsZWRdIC5idG4ge1xyXG4gICAgb3BhY2l0eToxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojYmJiO1xyXG59XHJcbi5zdGVwd2l6YXJkLXJvdzpiZWZvcmUge1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDpcIiBcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgei1pbmRleDogMDsgbGVmdDogMDtcclxufVxyXG4uc3RlcHdpemFyZC1zdGVwIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCBcclxuLmJ0bi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgXHJcbi5zaG93Pi5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiMwMGEzOWQ7IGJvcmRlci1jb2xvcjojMDBhMzlkOyB9XHJcblxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjojMmJlMGQ1OyBjb2xvcjojZmZmO31cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmZvcm10YWItc3RlcGJ5c3RlcCB7b3ZlcmZsb3c6IGF1dG87fVxyXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIHtmbG9hdDpsZWZ0OyB3aWR0aDoxNC4xJTsgcG9zaXRpb246IHJlbGF0aXZlOyB9IFxyXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIGEgeyB3aWR0aDogNDBweDsgaGVpZ2h0OjQwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiBhdXRvOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6MzdweDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7IGNvbG9yOiMzNTNjNGU7IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyOnNvbGlkIDFweCAjMThCQkIxO31cclxuICAuZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIGEuYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiMxOEJCQjE7IGNvbG9yOiNmZmY7fVxyXG4gIC5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDojMThCQkIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuLmRvd25sb2FkLWxpc3QgeyBmbG9hdDpyaWdodDt9XHJcblxyXG4uc2V0LXByb21vdGlvbi13cmFwIHsgcGFkZGluZzozMHB4IDAgNDBweH1cclxuLnNldC1wcm9tb3Rpb24td3JhcCBzZWxlY3QsIG9wdGlvbiB7dGV4dC1hbGlnbjpyaWdodDsgICB9XHJcbi5zZXQtcHJvbW90aW9uLXdyYXAgc2VsZWN0IHtiYWNrZ3JvdW5kOiAjZjFmMWYxO31cclxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLnNldC1uYXJyYXRpb24td3JhcCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLnNldC1uYXJyYXRpb24td3JhcCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIHRleHRhcmVhIHsgdGV4dC1hbGlnbjpyaWdodDsgfVxyXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIGlucHV0W3R5cGU9XCJmaWxlXCJdIHsgZGlyZWN0aW9uOiBydGw7IH1cclxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSB7bWFyZ2luLWJvdHRvbTo0cHg7fVxyXG5cclxuXHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgeyB0ZXh0LWFsaWduOiByaWdodDt9XHJcbi5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEgeyByZXNpemU6IG5vbmU7fVxyXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5uYXJyYXRpb24tdXJsIHttYXJnaW4tYm90dG9tOjQwcHg7IHBvc2l0aW9uOnJlbGF0aXZlO31cclxuLnNldC1uYXJyYXRpb24td3JhcCAubmFycmF0aW9uLXVybDphZnRlciB7Y29udGVudDonT1InOyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOi00MHB4OyBsZWZ0OjQ2JTsgd2lkdGg6NDBweDsgaGVpZ2h0OjQwcHg7IHRleHQtYWxpZ246Y2VudGVyOyBsaW5lLWhlaWdodDo0MHB4OyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTogMThweDt9XHJcblxyXG4uc2V0LW5hcnJhdGlvbi13cmFwIC5jb21wYW55LWxvZ28tcGxhY2UgeyBoZWlnaHQ6MTUxcHg7IH1cclxuLmxpdmUtc3RyZWFtaW5nLXdyYXAgeyBwYWRkaW5nOjIwcHggMCAxMHB4IH1cclxuXHJcbmlucHV0LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEsIHNlbGVjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgZGlyZWN0aW9uOiBydGw7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5uZXh0QnRuLCAuZGFpbHktY29tcGV0aXRpb24td3JhcCAucHJldkJ0biB7IHdpZHRoOjE1MHB4O31cclxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXZhbGlkLm5nLWRpcnR5Lm5nLXRvdWNoZWQsIFxyXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLCBcclxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXByaXN0aW5lLm5nLXZhbGlkLm5nLXRvdWNoZWRcclxuIHsgbWFyZ2luLWJvdHRvbTogMjBweDsgYmFja2dyb3VuZDogI2YxZjBmMDsgaGVpZ2h0OiA0MHB4O31cclxuLm9yLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiAzMHB4O31cclxuLm9yLXR4dCB7cGFkZGluZzogN3B4IDhweDsgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGVmdDogNDklO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYTVhNWE1O1xyXG5cclxufVxyXG5cclxuLm5hcnJhdGlvbi10ZXh0LWggeyBoZWlnaHQ6IDc1cHg7fVxyXG4uY29tcGFueS1sb2dvLWFyZWEgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxNTVweDsgcGFkZGluZzogNjBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O31cclxuLmNvbXBhbnktbG9nby1hcmVhIGlucHV0IHtoZWlnaHQ6IDE1NXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjZweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogOTIlO31cclxuXHJcbi5zZW5kLXB1c2ggaW5wdXRbdHlwZT1cInJhZGlvXCJdIHsgbWFyZ2luOiAwIDVweDsgfVxyXG4udGFibGUtYm9yZGVyZWQgdGQsIC50YWJsZS1ib3JkZXJlZCB0aCB7Ym9yZGVyOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnQ7fVxyXG5cclxuLnN1Y2Vzc2Z1bCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4jc3RlcC03IHtvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTt9XHJcbi5ncmF5LWJnIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7fVxyXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHttYXJnaW4tYm90dG9tOiAyNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7IHBhZGRpbmc6IDEwcHg7fVxyXG4jc3RlcC03IC5mb3JtLWdyb3VwIHttYXJnaW4tYm90dG9tOiAyNXB4O31cclxuXHJcbiNzdGVwLTYgaW1nIHsgbWF4LXdpZHRoOjEwMHB4IWltcG9ydGFudDsgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDt9XHJcblxyXG5cclxuLnNsb3QtZGV0YWlscy13cmFwIHNwYW4geyB3aWR0aDogMjBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuLmJ0bjphY3RpdmUsIC5idG4uYWN0aXZlIHtib3gtc2hhZG93OiBub25lIWltcG9ydGFudDt9XHJcblxyXG4uZXJyb3JzLWZvbGxvd2luZyB7bWFyZ2luLWJvdHRvbTogMTVweDt9XHJcblxyXG5cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNre2Rpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O31cclxuI3RibC11cGxvYWQge21hcmdpbi10b3A6IDE1cHg7IGJhY2tncm91bmQtY29sb3I6I2ZmZjt9XHJcbiN0YmwtdXBsb2FkIHRoIHtjb2xvcjogIzIxMjUyOTt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qIExhdGVzdCBjb21waWxlZCBhbmQgbWluaWZpZWQgQ1NTIGluY2x1ZGVkIGFzIEV4dGVybmFsIFJlc291cmNlKi9cbi8qIE9wdGlvbmFsIHRoZW1lICovXG4vKkBpbXBvcnQgdXJsKCcvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjAuMC9jc3MvYm9vdHN0cmFwLXRoZW1lLm1pbi5jc3MnKTsqL1xuLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmZvY3VzLCAuYnRuOmFjdGl2ZS5mb2N1cywgLmJ0bi5hY3RpdmUuZm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZGFpbHktY29tcGV0aXRpb24td3JhcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzNTNjNGU7XG59XG5cbi5wYW5lbC1wcmltYXJ5ID4gLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcbiAgYm9yZGVyLWNvbG9yOiAjOTQ5NDk0O1xufVxuXG4jYnRuVXBsb2FkIHtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zdGVwd2l6YXJkLXN0ZXAgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5zdGVwd2l6YXJkLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLnN0ZXB3aXphcmQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0ZXB3aXphcmQtc3RlcCBidXR0b25bZGlzYWJsZWRdIHtcbiAgLypvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApICFpbXBvcnRhbnQ7Ki9cbn1cblxuLnN0ZXB3aXphcmQgLmJ0bi5kaXNhYmxlZCwgLnN0ZXB3aXphcmQgLmJ0bltkaXNhYmxlZF0sIC5zdGVwd2l6YXJkIGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2JiYjtcbn1cblxuLnN0ZXB3aXphcmQtcm93OmJlZm9yZSB7XG4gIHRvcDogMTRweDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHotaW5kZXg6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zdGVwd2l6YXJkLXN0ZXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMzlkO1xuICBib3JkZXItY29sb3I6ICMwMGEzOWQ7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJlMGQ1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0LjElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGkgYSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjMzUzYzRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMThCQkIxO1xufVxuXG4uZm9ybXRhYi1zdGVwYnlzdGVwIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4QkJCMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtdGFiLXN0ZXBieXN0ZXAgdWwgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMThCQkIxO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAyMHB4O1xufVxuXG4uZG93bmxvYWQtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCB7XG4gIHBhZGRpbmc6IDMwcHggMCA0MHB4O1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIHNlbGVjdCwgb3B0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLnNldC1wcm9tb3Rpb24td3JhcCAuc2V0LXByb21vdGlvbiB1bCBsaSBpbnB1dFt0eXBlPXRleHRdLCAuc2V0LW5hcnJhdGlvbi13cmFwIGlucHV0W3R5cGU9dGV4dF0sIC5zZXQtbmFycmF0aW9uLXdyYXAgaW5wdXRbdHlwZT1udW1iZXJdLCAuc2V0LW5hcnJhdGlvbi13cmFwIHRleHRhcmVhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtcHJvbW90aW9uLXdyYXAgLnNldC1wcm9tb3Rpb24gdWwgbGkgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uc2V0LXByb21vdGlvbi13cmFwIC5zZXQtcHJvbW90aW9uIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc2V0LW5hcnJhdGlvbi13cmFwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmwge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLm5hcnJhdGlvbi11cmw6YWZ0ZXIge1xuICBjb250ZW50OiBcIk9SXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDBweDtcbiAgbGVmdDogNDYlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZXQtbmFycmF0aW9uLXdyYXAgLmNvbXBhbnktbG9nby1wbGFjZSB7XG4gIGhlaWdodDogMTUxcHg7XG59XG5cbi5saXZlLXN0cmVhbWluZy13cmFwIHtcbiAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG5cbmlucHV0LCBpbnB1dFt0eXBlPXRleHRdLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogcnRsO1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5kYWlseS1jb21wZXRpdGlvbi13cmFwIC5uZXh0QnRuLCAuZGFpbHktY29tcGV0aXRpb24td3JhcCAucHJldkJ0biB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXZhbGlkLm5nLWRpcnR5Lm5nLXRvdWNoZWQsXG4uZm9ybS1jb250cm9sLnNlbGVjdDIubmctdW50b3VjaGVkLm5nLXByaXN0aW5lLm5nLXZhbGlkLFxuLmZvcm0tY29udHJvbC5zZWxlY3QyLm5nLXByaXN0aW5lLm5nLXZhbGlkLm5nLXRvdWNoZWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMGYwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5vci13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLm9yLXR4dCB7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsZWZ0OiA0OSU7XG4gIGJvdHRvbTogNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYTVhNWE1O1xufVxuXG4ubmFycmF0aW9uLXRleHQtaCB7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLmNvbXBhbnktbG9nby1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTU1cHg7XG4gIHBhZGRpbmc6IDYwcHggMTBweCAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb21wYW55LWxvZ28tYXJlYSBpbnB1dCB7XG4gIGhlaWdodDogMTU1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNnB4O1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogOTIlO1xufVxuXG4uc2VuZC1wdXNoIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRkLCAudGFibGUtYm9yZGVyZWQgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNlc3NmdWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNzdGVwLTcge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3N0ZXAtNyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNzdGVwLTYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnNsb3QtZGV0YWlscy13cmFwIHNwYW4ge1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvcnMtZm9sbG93aW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuI3RibC11cGxvYWQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jdGJsLXVwbG9hZCB0aCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/league/league.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/league/league.component.ts ***!
  \**************************************************/
/*! exports provided: LeagueCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCompetitionComponent", function() { return LeagueCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/league.service */ "./src/app/services/league.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/header.service */ "./src/app/services/header.service.ts");













var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var LeagueCompetitionComponent = /** @class */ (function () {
    function LeagueCompetitionComponent(fb, http, leagueService, alertService, router, authenticationService, headerService) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.leagueService = leagueService;
        this.alertService = alertService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.headerService = headerService;
        this.fileArr = [];
        //uploadedFiles: Array <any> = [];
        //uploadedFiles: any[] = [];
        this.myFiles = [];
        this.oneToSixtyArray = [];
        this.image_type = '';
        this.showCropper = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
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
        this.percentDone = 0;
        this.post = {
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now()),
        };
        this.advFile = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.narrationOptions = 'file';
        this.progressInfos = [];
        this.message = '';
        this.invalidMoment = new Date().toISOString(); //toString(); 
        //public min = new Date(2021, 1, 3, 10, 30);
        this.min = new Date().toISOString(); //.toString(); //.toISOString();
        this.max = new Date(2021, 3, 21, 20, 30);
        this.narrOption = ["file"];
        // Reactive Form
        this.formVar = this.fb.group({
            logo: [null],
            competitionName: [''],
            description: [''],
            startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endTime: ['00:00:00'],
            waitingTime: ['00:05:00'],
            companyName: [''],
            companyLogo: [null],
            companyUrl: [''],
            companyDescription: [''],
            excelFile: [null],
            zipFile: [null],
            file: [null],
            question_type: [''],
            categories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.post.startDate, 'yyyy-MM-dd', 'en')],
            endDate: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.post.endDate, 'yyyy-MM-dd', 'en')],
            imageInput: [''],
            startDateTime: [''],
            minute_time: [''],
            second_time: [''],
            narration_text: [''],
            narration_time: [''],
            narration_text1: [''],
            narration_text2: [''],
            narration_time1: [''],
            narration_time2: [''],
            narration_type: [''],
            narration_url: [''],
            narration_url1: [''],
            narration_url2: ['']
        });
    }
    LeagueCompetitionComponent.prototype.ngOnInit = function () {
        //this.formContent = STEP_ITEMS;
        var date = new Date();
        console.log(date.toString());
        this.formData = {};
        this.fileData = new Array();
        console.log("jQuery version: " + $.fn.jquery);
        // Get user id by 
        this.logUser = this.authenticationService.currentUserValue;
        this.logUser = JSON.parse(this.logUser);
        this.created_by = this.logUser['user'][0]['id'];
        this.getSeconds();
        this.getAllCategory();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'title',
            enableCheckAll: false,
            searchPlaceholderText: 'Search Categories',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    Object.defineProperty(LeagueCompetitionComponent.prototype, "f", {
        get: function () { return this.formVar.controls; },
        enumerable: true,
        configurable: true
    });
    LeagueCompetitionComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.headerService.getCategory().subscribe(function (categories) {
            _this.dropdownList = categories;
            ;
            //console.log(this.dropdownList);
        });
    };
    LeagueCompetitionComponent.prototype.getSeconds = function () {
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
    LeagueCompetitionComponent.prototype.getFileStatus = function (getStatus) {
        console.log(getStatus);
        this.loading = getStatus;
    };
    LeagueCompetitionComponent.prototype.getFileData = function (fileDataBroadcast) {
        this.fileArr = fileDataBroadcast;
        console.log('Picked date: ', fileDataBroadcast);
        this.advFile = [];
        //this.advFile.push(fileDataBroadcast.locationArray);
        var fileArray = fileDataBroadcast.locationArray;
        if (fileArray && (Object.keys(fileArray).length > 0)) {
            this.loading = false;
            for (var index = 0; index < fileArray.length; index++) {
                this.advFile.push(fileArray[index]);
            }
        }
    };
    LeagueCompetitionComponent.prototype.narrationOption = function (event) {
        this.narrationOptions = event.target.value;
    };
    LeagueCompetitionComponent.prototype.audFileSelected = function (event) {
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
        else {
            this.audSrc = '';
            this.figAudio.nativeElement.src = '';
        }
    };
    LeagueCompetitionComponent.prototype.audFileSelected1 = function (event) {
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.formVar.patchValue({
                narration_url1: file
            });
            this.formVar.get('narration_url1').updateValueAndValidity();
            this.audSrc1 = URL.createObjectURL(event.target.files[0]);
            console.log(this.audSrc1);
            this.figAudio1.nativeElement.src = this.audSrc1;
        }
        else {
            this.audSrc1 = '';
            this.figAudio1.nativeElement.src = '';
        }
    };
    LeagueCompetitionComponent.prototype.audFileSelected2 = function (event) {
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.formVar.patchValue({
                narration_url2: file
            });
            this.formVar.get('narration_url2').updateValueAndValidity();
            this.audSrc2 = URL.createObjectURL(event.target.files[0]);
            console.log(this.audSrc2);
            this.figAudio2.nativeElement.src = this.audSrc2;
        }
        else {
            this.audSrc2 = '';
            this.figAudio2.nativeElement.src = '';
        }
    };
    LeagueCompetitionComponent.prototype.showQuestion = function (formVar) {
        var _this = this;
        //console.log('formVar', formVar);
        this.loading = true;
        var categoriesIds = [];
        if (formVar.question_type == "category") {
            this.fileData = new Array();
        }
        if (formVar.question_type == "category" && formVar.categories.length > 0) {
            for (var i = 0; i < formVar.categories.length; i++) {
                var id = formVar.categories[i].id;
                categoriesIds.push(id);
            }
            //console.log('categoriesIds', categoriesIds);
            this.leagueService.getCategoryQuestion(categoriesIds).subscribe(function (categories) {
                _this.fileData = categories;
                //console.log('categories', categories);
                //$('#foo').removeAttr('disabled').trigger('click');
            });
        }
        //this.loading = false;
    };
    Object.defineProperty(LeagueCompetitionComponent.prototype, "currentGroup", {
        /* selectFiles(event) {
          this.progressInfos = [];
          this.selectedFiles = event.target.files;
          console.log(event.target.files);
          //this.uploadFiles();
        } */
        /* selectFiles(event) {
          console.log('an', this.myFiles.length);
          if(this.myFiles.length > 4){
            Swal.fire('','You can select only 5 files.','error');
            return;
            }else{
            for (var i = 0; i < event.target.files.length; i++) {
                this.myFiles.push(event.target.files[i]);
            }
          }
        }
        uploadFiles() {
          this.message = '';
          this.loading = true;
          console.log(this.myFiles);
          this.fileArr = [];
          for (let i = 0; i < this.myFiles.length; i++) {
            this.submitFile(i, this.myFiles[i]);
          }
        }
        submitFile(idx, file) {
          this.progressInfos[idx] = { value: 0, fileName: file.name };
        
          this.leagueService.uploadFile(file).subscribe(
            event => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                //this.fileInfos = this.leagueService.getFiles();
                console.log('events', event.body.filesArray);
                this.fileArr.push(event.body.filesArray);
                this.loading = false;
              }
            },
            err => {
              this.progressInfos[idx].value = 0;
              this.message = 'Could not upload the file:' + file.name;
              this.loading = false;
            });
        } */
        get: function () {
            return this.getGroupAt(this.currentStep);
        },
        enumerable: true,
        configurable: true
    });
    LeagueCompetitionComponent.prototype.questionChange = function (event) {
        this.questionType = event.target.value;
    };
    LeagueCompetitionComponent.prototype.onItemSelect = function (item) {
        //this.selectedItems.push(item);
        console.log(item);
        //console.log(this.selectedItems);
    };
    LeagueCompetitionComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    LeagueCompetitionComponent.prototype.upload = function () {
        var _this = this;
        this.showLoader();
        this.loading = true;
        //debugger;
        //console.log('fileChange');
        //console.log(this.uploadedFiles);
        //console.log('End fileChange');
        var formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl + 'league/api/upload', formData)
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
            }
            else if (response["error_code"] == 1) {
                _this.isError = false;
                _this.isProcessed = false;
                _this.errorData = response["data"];
                _this.errorCode = response["error_code"];
                _this.errorDesc = response["err_desc"];
                _this.formVar.controls['excelFile'].reset();
                _this.formVar.controls['zipFile'].reset();
            }
            _this.hideLoader();
            _this.loading = false;
            console.log('response receved is ', response);
        }, function (error) {
            console.error('error caught in component');
            //this.errorMessage = error;
            //this.loading = false;
            _this.hideLoader();
            _this.loading = false;
            //console.log(error);
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire('', error.message, 'error');
            //throw error;   //You can also throw the error to a global error handler
        });
    };
    /* onFileChange(event) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(event.target.files[i]);
      }
    } */
    /* submitFile(){
      this.loading = true;
      const formData = new FormData();
   
      for (var i = 0; i < this.myFiles.length; i++) {
        formData.append("file[]", this.myFiles[i]);
      }
    
      this.http.post(apiUrl+'league/uploadLeagueImages', formData)
        .subscribe(res => {
          this.loading = false;
          console.log(res);
          alert('Uploaded Successfully.');
        },
        (error) => {    //Error callback
          console.error('error caught in upload function component')
          this.loading = false;
          console.log(error);
          Swal.fire('',error.message,'error');
        }
        )
    } */
    LeagueCompetitionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sumbitted = true;
        console.log('submit');
        if (!this.formVar.valid) {
            //this.formVar.markAllAsTouched();
            //this.stepper.validateSteps();
        }
        //console.log('Submitted data', this.formVar.value);
        this.formVar.value.status = 0;
        this.formVar.value.created_by = this.created_by;
        console.log(this.formVar.value);
        console.log('submit', this.fileArr.locationArray);
        this.leagueService.addLeague(this.formVar.value, this.fileData, this.fileArr.locationArray)
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
                        _this.alertService.pop('success', 'League added successfully!');
                        _this.router.navigate(['/league']);
                    }
                    else {
                        _this.alertService.pop('error', event.body.message);
                    }
                    _this.percentDone = false;
            }
        });
    };
    LeagueCompetitionComponent.prototype.getGroupAt = function (index) {
        var _this = this;
        var groups = Object.keys(this.formVar.controls).map(function (groupName) {
            return _this.formVar.get(groupName);
        });
        return groups[index];
    };
    LeagueCompetitionComponent.prototype.fileChange = function (element) {
        if (typeof (this.uploadedFiles) == "undefined") {
            this.uploadedFiles = new Array();
            this.uploadedFiles.push(element.target.files[0]);
        }
        else {
            this.uploadedFiles.push(element.target.files[0]);
        }
        //console.log(this.uploadedFiles);
    };
    // Image Preview
    LeagueCompetitionComponent.prototype.uploadCompetitionLogo = function (event) {
        var fileIn = event.target.files[0]; // <--- File Object for future use.
        this.formVar.controls['imageInput'].setValue(fileIn ? fileIn.name : ''); // <-- Set Value for Validation
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'logo';
        console.log('app_logoFile', file);
        // this.formVar.patchValue({
        //   logo: file
        // });
        // this.formVar.get('logo').updateValueAndValidity()
        // // File Preview
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.preview = reader.result as string;
        // }
        // reader.readAsDataURL(file)
    };
    // Image Preview CompanyLogo
    LeagueCompetitionComponent.prototype.uploadCompanyLogo = function (event) {
        var file = event.target.files[0];
        this.imageChangedEvent = event;
        this.showCropModal = true;
        this.image_type = 'companyLogo';
        console.log('company_logoFile', file);
        //console.log('this.imageChangedEvent', this.imageChangedEvent);
        // this.formVar.patchValue({
        //   companyLogo: file
        // });
        // this.formVar.get('companyLogo').updateValueAndValidity()
        // // File Preview
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.previewCompanyLogo = reader.result as string;
        // }
        // reader.readAsDataURL(file)
    };
    // Image Preview
    LeagueCompetitionComponent.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: 'image/jpg'
        });
    };
    LeagueCompetitionComponent.prototype.imageCropped = function (event, image_type) {
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
        else if (image_type == 'companyLogo') {
            var base64 = event.base64;
            var imageName = 'companyLogo.png';
            var imageBlob = this.dataURItoBlob(base64);
            var imageFile = new File([imageBlob], imageName, { type: 'image/png' });
            this.formVar.patchValue({
                companyLogo: imageFile
            });
            this.formVar.get('companyLogo').updateValueAndValidity();
            // File Preview
            this.previewCompanyLogo = event.base64;
        }
    };
    LeagueCompetitionComponent.prototype.imageLoaded = function () {
        /* show cropper */
        //this.showCropper = true;
        console.log('Image loaded');
    };
    LeagueCompetitionComponent.prototype.cropperReady = function () {
        /* cropper ready */
        console.log('cropper Ready');
    };
    LeagueCompetitionComponent.prototype.loadImageFailed = function () {
        /* show message */
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire('', 'Please upload image only', 'error');
    };
    LeagueCompetitionComponent.prototype.closePopup = function () {
        this.showCropModal = false;
    };
    LeagueCompetitionComponent.prototype.setFormPreview = function (formValue) {
        /* if(this.advFile && (Object.keys(this.advFile).length === 0)){
          Swal.fire('','You have to upload file.','error');
          $('#reviewButton').closest(".form-group").addClass("has-error");
          this.loading = false;
          return;
        } */
        this.formData = formValue;
        var dateStringISO = new Date(this.formData.startDateTime).toLocaleString('en-IN', { timeZone: "Asia/Kolkata" });
        /* let startDateObject = new Date(this.formData.startDateTime);
        console.log(typeof startDateObject)
    
        var ddd = startDateObject.getDate();
        var mmm = startDateObject.getMonth();
        var yyyyy = startDateObject.getFullYear();
        var hh = competition.slot_time.split(':')[0];
        var min = competition.slot_time.split(':')[1]; */
        this.dateString = dateStringISO.split(',')[0];
        this.timeString = dateStringISO.split(',')[1];
        //console.log('before ', this.timeString);
        //console.log(this.formData.startDateTime);
        // let date = new Date(dateStringISO);
        // let hours = date.getHours();
        // let minutes = date.getMinutes();
        // this.timeString = hours+':'+minutes+':00';
        console.log(this.dateString);
        console.log('after ', this.timeString);
        //this.showWaiting_time = '00:'+formValue.minute_time+':'+formValue.second_time;
        this.showNarration_time = '00:' + formValue.narration_minute_time + ':' + formValue.narration_second_time;
        this.showWaiting_time = '00:' + formValue.minute_time + ':00';
        $('#reviewStep').removeAttr('disabled').trigger('click');
    };
    LeagueCompetitionComponent.prototype.onChange = function (event) {
        this.selectedType = event.target.value;
    };
    // Function is defined 
    LeagueCompetitionComponent.prototype.hideLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'none';
    };
    LeagueCompetitionComponent.prototype.showLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'block';
    };
    LeagueCompetitionComponent.prototype.ngAfterViewInit = function () {
        /* var fileInput = document.getElementById('file-input');
          var lines = [];
          fileInput.addEventListener('change', function(event) {
            var input = event.target;
            var show =document.getElementById('show_file');
            //console.log('js', lines.length);
            if(lines.length < 5){
              for (var i = 0; i < input.files.length; i++) {
                //console.log(input.files[i].name);
                lines.push(input.files[i].name);
              }
              show.innerHTML = lines.join("\n <br/>");
            }
          }); */
        var self = this;
        $(document).ready(function () {
            // var today = new Date().toISOString().split('T')[0];
            // var todayTime = new Date().toISOString().split('T')[1];
            // var tt = todayTime.split('.')[0];
            // console.log(today);
            // console.log(todayTime);
            // console.log(tt);
            //document.getElementsByName("start_time")[0].setAttribute('min', today);
            //document.getElementById("start_date").setAttribute("min", today);
            //document.getElementById("end_date").setAttribute("min", today);
            //document.getElementById("start_time").setAttribute("min", tt);
            // var stratTime = document.getElementById("start_time").value;
            // if(stratTime <= tt)
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
                self.loading = true;
                var curStep = $(this).closest(".setup-content"), curStepBtn = curStep.attr("id"), nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"), curInputs = curStep.find("input[type='text'],input[type='url'],input[type='file'],input[type='date'],input[type='time'],textarea,select"), isValid = true;
                setTimeout(function () {
                    //  console.log(self.fileData);
                    //if (typeof self.fileData == 'undefined' && self.fileData != 0) {
                    if (self.fileData && (Object.keys(self.fileData).length === 0)) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire('', 'You have to upload question data first.', 'error');
                        isValid = false;
                        $('.uploadButton').closest(".form-group").addClass("has-error");
                        self.loading = false;
                        return false;
                    }
                    $(".form-group").removeClass("has-error");
                    for (var i = 0; i < curInputs.length; i++) {
                        if (!curInputs[i].validity.valid) {
                            isValid = false; //console.log(curInputs[i]);
                            $(curInputs[i]).closest(".form-group").addClass("has-error");
                        }
                    }
                    //console.log('nextStepWizard', nextStepWizard);
                    if (isValid)
                        nextStepWizard.removeAttr('disabled').trigger('click');
                    self.loading = false;
                }, 2000);
            });
            $('div.setup-panel div a.btn-success').trigger('click');
        });
    };
    LeagueCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_league_service__WEBPACK_IMPORTED_MODULE_5__["LeagueService"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] },
        { type: _services_header_service__WEBPACK_IMPORTED_MODULE_11__["HeaderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LeagueCompetitionComponent.prototype, "figAudio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LeagueCompetitionComponent.prototype, "figAudio1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('figAudio2', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LeagueCompetitionComponent.prototype, "figAudio2", void 0);
    LeagueCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-league-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./league.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/league.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./league.component.scss */ "./src/app/pages/league/league.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_league_service__WEBPACK_IMPORTED_MODULE_5__["LeagueService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"], _services_header_service__WEBPACK_IMPORTED_MODULE_11__["HeaderService"]])
    ], LeagueCompetitionComponent);
    return LeagueCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/pages/league/league.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/league/league.module.ts ***!
  \***********************************************/
/*! exports provided: LeagueCompetitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueCompetitionModule", function() { return LeagueCompetitionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _league_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./league.component */ "./src/app/pages/league/league.component.ts");
/* harmony import */ var _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-league.component */ "./src/app/pages/league/list/list-league.component.ts");
/* harmony import */ var _edit_edit_league_competition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-league-competition.component */ "./src/app/pages/league/edit/edit-league-competition.component.ts");
/* harmony import */ var _view_view_league_competition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view-league-competition.component */ "./src/app/pages/league/view/view-league-competition.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _league_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./league-routing.module */ "./src/app/pages/league/league-routing.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/league.service */ "./src/app/services/league.service.ts");
/* harmony import */ var _multi_files_upload_multi_files_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./multi-files-upload/multi-files-upload.component */ "./src/app/pages/league/multi-files-upload/multi-files-upload.component.ts");
/* harmony import */ var _spinner_loading_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spinner/loading.module */ "./src/app/pages/spinner/loading.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_dc_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/dc.service */ "./src/app/services/dc.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");



















var LeagueCompetitionModule = /** @class */ (function () {
    function LeagueCompetitionModule() {
    }
    LeagueCompetitionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_league_component__WEBPACK_IMPORTED_MODULE_3__["LeagueCompetitionComponent"], _list_list_league_component__WEBPACK_IMPORTED_MODULE_4__["ListLeagueComponent"],
                _edit_edit_league_competition_component__WEBPACK_IMPORTED_MODULE_5__["EditLeagueCompetitionComponent"], _view_view_league_competition_component__WEBPACK_IMPORTED_MODULE_6__["ViewDailyCompetitionComponent"],
                _multi_files_upload_multi_files_upload_component__WEBPACK_IMPORTED_MODULE_11__["MultiFilesUploadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _league_routing_module__WEBPACK_IMPORTED_MODULE_8__["LeagueCompetitionRoutingModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_18__["OwlNativeDateTimeModule"],
                _spinner_loading_module__WEBPACK_IMPORTED_MODULE_12__["LoadingModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__["ImageCropperModule"]
            ],
            providers: [_services_league_service__WEBPACK_IMPORTED_MODULE_10__["LeagueService"], _services_dc_service__WEBPACK_IMPORTED_MODULE_15__["DcService"]]
        })
    ], LeagueCompetitionModule);
    return LeagueCompetitionModule;
}());



/***/ }),

/***/ "./src/app/pages/league/list/list-league.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/league/list/list-league.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Competitive-exam-wrap .competitive-exam .card {\n  padding: 25px 15px;\n}\n\n.competitive-exam .card .title {\n  margin-bottom: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #18BBB1;\n}\n\n.competitive-exam .card .text-c-pink {\n  margin-bottom: 2px;\n}\n\n.competitive-exam .card .status {\n  margin-top: 7px;\n}\n\n.creat-new-btn {\n  margin: 0;\n  float: left;\n  font-size: 16px;\n}\n\n.filter-wrap {\n  margin-bottom: 25px;\n}\n\n.Competitive-exam-wrap {\n  padding: 30px 25px 25px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZ3VlL2xpc3QvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGxlYWd1ZVxcbGlzdFxcbGlzdC1sZWFndWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYWd1ZS9saXN0L2xpc3QtbGVhZ3VlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUFpQyxtQkFBQTtFQUFxQixlQUFBO0VBQWdCLGdCQUFBO0VBQW1CLGNBQUE7QUNHekY7O0FERkE7RUFBdUMsa0JBQUE7QUNNdkM7O0FETEE7RUFBa0MsZUFBQTtBQ1NsQzs7QURSQTtFQUFpQixTQUFBO0VBQVcsV0FBQTtFQUFhLGVBQUE7QUNjekM7O0FEYkE7RUFBZSxtQkFBQTtBQ2lCZjs7QURoQkE7RUFBd0IsNEJBQUE7QUNvQnhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhZ3VlL2xpc3QvbGlzdC1sZWFndWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5Db21wZXRpdGl2ZS1leGFtLXdyYXAgLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQge1xyXG4gICAgcGFkZGluZzoyNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5jb21wZXRpdGl2ZS1leGFtIC5jYXJkIC50aXRsZSB7IG1hcmdpbi1ib3R0b206IDE1cHg7IGZvbnQtc2l6ZToxNnB4OyBmb250LXdlaWdodDogNjAwOyAgY29sb3I6ICMxOEJCQjE7fVxyXG4uY29tcGV0aXRpdmUtZXhhbSAuY2FyZCAudGV4dC1jLXBpbmsgeyBtYXJnaW4tYm90dG9tOjJweDt9XHJcbi5jb21wZXRpdGl2ZS1leGFtIC5jYXJkIC5zdGF0dXMgeyBtYXJnaW4tdG9wOjdweDt9XHJcbi5jcmVhdC1uZXctYnRuIHsgbWFyZ2luOiAwOyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiAxNnB4O31cclxuLmZpbHRlci13cmFwIHsgbWFyZ2luLWJvdHRvbTogMjVweDt9XHJcbi5Db21wZXRpdGl2ZS1leGFtLXdyYXAge3BhZGRpbmc6IDMwcHggMjVweCAyNXB4IDI1cHg7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5Db21wZXRpdGl2ZS1leGFtLXdyYXAgLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG5cbi5jb21wZXRpdGl2ZS1leGFtIC5jYXJkIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxOEJCQjE7XG59XG5cbi5jb21wZXRpdGl2ZS1leGFtIC5jYXJkIC50ZXh0LWMtcGluayB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmNvbXBldGl0aXZlLWV4YW0gLmNhcmQgLnN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmNyZWF0LW5ldy1idG4ge1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5Db21wZXRpdGl2ZS1leGFtLXdyYXAge1xuICBwYWRkaW5nOiAzMHB4IDI1cHggMjVweCAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/league/list/list-league.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/league/list/list-league.component.ts ***!
  \************************************************************/
/*! exports provided: ListLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLeagueComponent", function() { return ListLeagueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/league.service */ "./src/app/services/league.service.ts");



var ListLeagueComponent = /** @class */ (function () {
    function ListLeagueComponent(leagueService) {
        this.leagueService = leagueService;
        this.dailyList = [];
        this.today = new Date();
        this.jstoday = '';
        this.isLoading = false;
    }
    ListLeagueComponent.prototype.ngOnInit = function () {
        //this.jstoday = formatDate(this.today, 'dd-MM-yyyy HH:mm:ss', 'en-US', '+0000');
        this.jstoday = new Date().toISOString();
        this.getAllLeague();
    };
    ListLeagueComponent.prototype.getAllLeague = function () {
        var _this = this;
        this.isLoading = true;
        this.leagueService.getLeagueList().subscribe(function (daily) {
            //console.log(daily.data)
            _this.dailyList = daily.data;
            _this.isLoading = false;
        });
    };
    ListLeagueComponent.prototype.checkDate = function (db_date) {
        if (db_date > this.jstoday) {
            this.live_status = 1;
        }
        else {
            this.live_status = 0;
        }
    };
    ListLeagueComponent.ctorParameters = function () { return [
        { type: _services_league_service__WEBPACK_IMPORTED_MODULE_2__["LeagueService"] }
    ]; };
    ListLeagueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-league.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/list/list-league.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-league.component.scss */ "./src/app/pages/league/list/list-league.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_league_service__WEBPACK_IMPORTED_MODULE_2__["LeagueService"]])
    ], ListLeagueComponent);
    return ListLeagueComponent;
}());



/***/ }),

/***/ "./src/app/pages/league/multi-files-upload/multi-files-upload.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/league/multi-files-upload/multi-files-upload.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.upload-file {font-size: 11px;\r\n    margin-right: 15px;}\r\n\r\ninput[type=file], input[type=file]:focus, input[type=radio]:focus, input[type=checkbox]:focus {outline: 0; float: right;}\r\n\r\n.form-group.has-error {\r\n    border: solid 1px red;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZ3VlL211bHRpLWZpbGVzLXVwbG9hZC9tdWx0aS1maWxlcy11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBYyxlQUFlO0lBQ3pCLGtCQUFrQixDQUFDOztBQUV2QiwrRkFBK0YsVUFBVSxFQUFFLFlBQVksQ0FBQzs7QUFFeEg7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFndWUvbXVsdGktZmlsZXMtdXBsb2FkL211bHRpLWZpbGVzLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51cGxvYWQtZmlsZSB7Zm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0sIGlucHV0W3R5cGU9ZmlsZV06Zm9jdXMsIGlucHV0W3R5cGU9cmFkaW9dOmZvY3VzLCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cyB7b3V0bGluZTogMDsgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5mb3JtLWdyb3VwLmhhcy1lcnJvciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/league/multi-files-upload/multi-files-upload.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/league/multi-files-upload/multi-files-upload.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MultiFilesUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFilesUploadComponent", function() { return MultiFilesUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _multifiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multifiles.service */ "./src/app/pages/league/multi-files-upload/multifiles.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);





var MultiFilesUploadComponent = /** @class */ (function () {
    function MultiFilesUploadComponent(renderer, formBuilder, multifilesService) {
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.multifilesService = multifilesService;
        this.duration = 0;
        this.onDataPickedBefore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDataPicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalfiles = [];
        this.totalFileName = [];
        this.lengthCheckToaddMore = 0;
    }
    MultiFilesUploadComponent.prototype.reset = function () {
        // We will clear the value of the input  
        // field using the reference variable. 
        this.InputVar.nativeElement.value = "";
    };
    MultiFilesUploadComponent.prototype.ngOnInit = function () {
        this.documentGrp = this.formBuilder.group({
            /* doc_name: '',
            doc_description: '', */
            file_time: [10],
            documentFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](File),
            items: this.formBuilder.array([this.createUploadDocuments()])
        });
    };
    MultiFilesUploadComponent.prototype.createUploadDocuments = function () {
        return this.formBuilder.group({
            /* doc_name: '',
            doc_description: '', */
            file_time: [10],
            documentFile: File
        });
    };
    Object.defineProperty(MultiFilesUploadComponent.prototype, "items", {
        get: function () {
            return this.documentGrp.get('items');
        },
        enumerable: true,
        configurable: true
    });
    ;
    MultiFilesUploadComponent.prototype.addItem = function () {
        //console.log("length is ",this.totalfiles.length);
        //console.log("lengthCheckToaddMore ", this.lengthCheckToaddMore);
        if (this.totalfiles.length == 5) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'You can select only 5 mp3 file.', 'error');
            return;
        }
        if (this.totalfiles.length != 0)
            /* this.items.value[0].doc_name != "" && this.items.value[0].doc_description != "" && */
            if (this.items.value[0].file_time != 0 && ((this.lengthCheckToaddMore) === (this.totalfiles.length))) {
                this.items.insert(0, this.createUploadDocuments());
                this.lengthCheckToaddMore = this.lengthCheckToaddMore + 1;
            }
    };
    MultiFilesUploadComponent.prototype.removeItem = function (index) {
        this.totalfiles.splice(index);
        this.totalFileName.splice(index);
        this.items.removeAt(index);
        this.lengthCheckToaddMore = this.lengthCheckToaddMore - 1;
        // console.log("name are ",this.totalFileName);
    };
    MultiFilesUploadComponent.prototype.fileSelectionEvent = function (fileInput, oldIndex, variable) {
        var _this = this;
        console.log("newIndex is ", oldIndex);
        var name = fileInput.target.files[0].name;
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (ext.toLowerCase() == 'mp3') {
            if (fileInput.target.files && fileInput.target.files[0]) {
                this.file = fileInput.target.files[0];
                console.log('size', this.file.size);
                new Audio(URL.createObjectURL(this.file)).onloadedmetadata = function (e) {
                    _this.duration = e.currentTarget.duration;
                    console.log('duration', _this.duration);
                    if (_this.duration >= 30) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'You can select only less than 30 seconds of mp3 file.', 'error');
                        //this.documentGrp.controls['documentFile'].reset();
                        //this.documentGrp.reset();
                        variable.value = null;
                        return;
                    }
                    var reader = new FileReader();
                    reader.onload = function (event) {
                    };
                    if (oldIndex == 0) {
                        _this.totalfiles.unshift((fileInput.target.files[0]));
                        _this.totalFileName.unshift(fileInput.target.files[0].name);
                    }
                    else {
                        _this.totalfiles[oldIndex] = (fileInput.target.files[0]);
                        _this.totalFileName[oldIndex] = fileInput.target.files[0].name;
                    }
                    reader.readAsDataURL(fileInput.target.files[0]);
                    if (_this.totalfiles.length == 1) {
                        _this.lengthCheckToaddMore = 1;
                    }
                };
                console.log('test', this.duration);
            }
        }
        else {
            variable.value = null;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'File type should be mp3', 'error');
            return;
        }
        /* setTimeout(function () {
          if(this.totalfiles.length == 1)
          {
            this.lengthCheckToaddMore=1;
          }
        }, 2000); */
    };
    MultiFilesUploadComponent.prototype.OnSubmit = function (formValue) {
        var _this = this;
        this.loading = true;
        var main_form = new FormData();
        this.onDataPickedBefore.emit(this.loading);
        for (var j = 0; j < this.totalfiles.length; j++) {
            console.log("the values is ", this.totalfiles[j]);
            console.log("the name is ", this.totalFileName[j]);
            main_form.append('file_time[]', formValue.items[j].file_time);
            main_form.append('file[]', this.totalfiles[j]);
        }
        console.log(formValue.items);
        //reverseFileNames=this.totalFileName.reverse();
        /* let AllFilesObj= []
    
        formValue.items.forEach((element, index) => {
         
          console.log("index is ",index);
          console.log("element is ", element);
          
          let eachObj=
          {
             'doc_name' : element.doc_name,
            'doc_description' : element.doc_description,
            'file_name' : this.totalFileName[index]
          }
          AllFilesObj.push(eachObj);
        }); */
        //console.log("the Array data is ",AllFilesObj);
        //main_form.append("fileInfo",JSON.stringify(AllFilesObj))
        this.multifilesService.saveFiles(main_form).subscribe(function (data) {
            console.log("result is ", data);
            _this.loading = false;
            _this.onDataPicked.emit(data);
        }, function (err) {
            _this.loading = false;
        });
    };
    MultiFilesUploadComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _multifiles_service__WEBPACK_IMPORTED_MODULE_3__["MultifilesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiFilesUploadComponent.prototype, "onDataPickedBefore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiFilesUploadComponent.prototype, "onDataPicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('variable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MultiFilesUploadComponent.prototype, "InputVar", void 0);
    MultiFilesUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-files-upload',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./multi-files-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/multi-files-upload/multi-files-upload.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./multi-files-upload.component.css */ "./src/app/pages/league/multi-files-upload/multi-files-upload.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _multifiles_service__WEBPACK_IMPORTED_MODULE_3__["MultifilesService"]])
    ], MultiFilesUploadComponent);
    return MultiFilesUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/league/multi-files-upload/multifiles.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/league/multi-files-upload/multifiles.service.ts ***!
  \***********************************************************************/
/*! exports provided: MultifilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultifilesService", function() { return MultifilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var MultifilesService = /** @class */ (function () {
    function MultifilesService(http) {
        this.http = http;
    }
    MultifilesService.prototype.saveFiles = function (total_form) {
        console.log(total_form);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'multipart/form-data',
        });
        var options = {
            headers: httpHeaders
        };
        return this.http.post(apiUrl + "league/uploadLeagueImages", total_form);
    };
    MultifilesService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', apiUrl + "league/uploadLeagueImages", formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.http.request(req);
    };
    MultifilesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MultifilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MultifilesService);
    return MultifilesService;
}());



/***/ }),

/***/ "./src/app/pages/league/view/view-league-competition.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/league/view/view-league-competition.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#step-7 {\n  overflow-wrap: anywhere;\n}\n\n.gray-bg {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n#step-7 .form-group:nth-of-type(even) {\n  margin-bottom: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n\n#step-7 .form-group {\n  margin-bottom: 25px;\n}\n\n#step-7 img {\n  max-width: 100px !important;\n  height: 100px !important;\n}\n\nlabel.control-label {\n  display: block;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n\n.pagination {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhZ3VlL3ZpZXcvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGxlYWd1ZVxcdmlld1xcdmlldy1sZWFndWUtY29tcGV0aXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYWd1ZS92aWV3L3ZpZXctbGVhZ3VlLWNvbXBldGl0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsdUJBQUE7QUNFVDs7QUREQTtFQUFVLHFDQUFBO0FDS1Y7O0FESkE7RUFBdUMsbUJBQUE7RUFBcUIscUNBQUE7RUFBbUMsYUFBQTtBQ1UvRjs7QURUQTtFQUFxQixtQkFBQTtBQ2FyQjs7QURaQTtFQUFjLDJCQUFBO0VBQTJCLHdCQUFBO0FDaUJ6Qzs7QURmQTtFQUFxQixjQUFBO0FDbUJyQjs7QURqQkE7RUFBNEMsV0FBQTtBQ3FCNUM7O0FEcEJBO0VBQWEsU0FBQTtBQ3dCYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWd1ZS92aWV3L3ZpZXctbGVhZ3VlLWNvbXBldGl0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0ZXAtNyB7b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7fVxyXG4uZ3JheS1iZyB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO31cclxuI3N0ZXAtNyAuZm9ybS1ncm91cDpudGgtb2YtdHlwZShldmVuKSB7bWFyZ2luLWJvdHRvbTogMjVweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpOyBwYWRkaW5nOiAxMHB4O31cclxuI3N0ZXAtNyAuZm9ybS1ncm91cCB7bWFyZ2luLWJvdHRvbTogMjVweDt9XHJcbiNzdGVwLTcgaW1nIHsgbWF4LXdpZHRoOjEwMHB4IWltcG9ydGFudDsgaGVpZ2h0OjEwMHB4IWltcG9ydGFudDt9XHJcblxyXG5sYWJlbC5jb250cm9sLWxhYmVsIHtkaXNwbGF5OmJsb2NrO31cclxuXHJcbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7ZmxvYXQ6IGxlZnQ7fVxyXG4ucGFnaW5hdGlvbiB7bWFyZ2luOiAwO31cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIiNzdGVwLTcge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4jc3RlcC03IC5mb3JtLWdyb3VwOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3N0ZXAtNyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNzdGVwLTcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/league/view/view-league-competition.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/league/view/view-league-competition.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewDailyCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDailyCompetitionComponent", function() { return ViewDailyCompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/league.service */ "./src/app/services/league.service.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var ViewDailyCompetitionComponent = /** @class */ (function () {
    function ViewDailyCompetitionComponent(router, activatedRoute, alertService, leagueService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.leagueService = leagueService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].s3_url;
        this.getCompetition = [];
        this.getQuestion = [];
        this.getNarration = [];
        this.setAudience = [];
        this.dailyList = [];
        this.getLeagueFile = [];
        this.categoriesIds = [];
        this.questionShow = false;
        this.selectedItems = [];
        this.isDesc = false;
        this.column = 'id';
        this.show = false;
        this.advFile = [];
        this.selectedType = '';
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
        this.getAllLeague();
        this.getTimeZone();
    };
    ViewDailyCompetitionComponent.prototype.getAllLeague = function () {
        var _this = this;
        this.show = true;
        this.leagueService.getLeagueList().subscribe(function (daily) {
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
        this.getAllLeague();
    };
    ViewDailyCompetitionComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getAllLeague();
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
                _this.leagueService.updateStatus(status, competition_id)
                    .subscribe(function (data) {
                    //console.log(data);
                    _this.alertService.pop('success', 'Competition updated successfully');
                    //this.router.navigate(['/League']);
                    _this.getStatus = status;
                    var getArr = data['data'][0];
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
                self.leagueService.deleteCompetition(item_id).subscribe(function () {
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
    ViewDailyCompetitionComponent.prototype.getDetailCategories = function (id) {
        var _this = this;
        this.categoriesIds = [];
        this.leagueService.getByIdCategories(id).subscribe(function (categories) {
            _this.selectedItems = JSON.parse(categories[0].categories);
            console.log('selectedItems', _this.selectedItems);
            for (var i = 0; i < _this.selectedItems.length; i++) {
                var id = _this.selectedItems[i].id;
                _this.categoriesIds.push(id);
            }
        }, function (error) { return console.log('#1 Error:', error); }, function () {
            _this.leagueService.getCategoryQuestion(_this.categoriesIds).subscribe(function (categories) {
                _this.getQuestion = categories;
                console.log('categories', categories);
            });
        });
    };
    ViewDailyCompetitionComponent.prototype.getLeagueCompetition = function (id) {
        var _this = this;
        //console.log(id);
        console.log(id);
        this.show = false;
        this.leagueService.editCompetition(id).subscribe(function (competition) {
            //  console.log(competition.data)
            _this.getCompetition = competition.data[0].competition[0];
            console.log('question_type', _this.getCompetition.question_type);
            if (_this.getCompetition.question_type == 'bulk') {
                _this.getQuestion = competition.data[1].question;
                _this.questionShow = true;
            }
            else {
                _this.questionShow = false;
                _this.getDetailCategories(id);
                //console.log(this.selectedItems);
            }
            _this.getLeagueFile = competition.data[2].leagueFile;
            var fileArray = competition.data[2].leagueFile;
            if (fileArray && (Object.keys(fileArray).length > 0)) {
                for (var index = 0; index < fileArray.length; index++) {
                    _this.advFile.push(fileArray[index].file_path);
                }
            }
            _this.preview = _this.s3_url + _this.getCompetition.logo;
            //this.appLogo = this.s3_url+this.getCompetition.app_logo;
            //this.audienceLogo = this.s3_url+this.setAudience.image_upload;
            _this.companyLogo = _this.s3_url + _this.getCompetition.company_logo;
            _this.selectedType = _this.getCompetition.promotion_type;
            _this.questionType = _this.getCompetition.question_type;
            //this.narrationType = this.getNarration.narration_type;
            console.log(_this.getCompetition.compitition_name);
        });
    };
    ViewDailyCompetitionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] },
        { type: _services_league_service__WEBPACK_IMPORTED_MODULE_3__["LeagueService"] }
    ]; };
    ViewDailyCompetitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-league-competition',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-league-competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/league/view/view-league-competition.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-league-competition.component.scss */ "./src/app/pages/league/view/view-league-competition.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"], _services_league_service__WEBPACK_IMPORTED_MODULE_3__["LeagueService"]])
    ], ViewDailyCompetitionComponent);
    return ViewDailyCompetitionComponent;
}());



/***/ }),

/***/ "./src/app/services/league.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/league.service.ts ***!
  \********************************************/
/*! exports provided: LeagueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueService", function() { return LeagueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






//import { Header } from '../models/header';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var LeagueService = /** @class */ (function () {
    function LeagueService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
    }
    LeagueService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', apiUrl + "league/uploadLeagueImages", formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.http.request(req);
    };
    LeagueService.prototype.getFiles = function () {
        return this.http.get(apiUrl + "files");
    };
    LeagueService.prototype.getByIdCategories = function (id) {
        return this.http.get(apiUrl + 'league/categories/' + id);
    };
    LeagueService.prototype.updateQuestionCompetition = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(apiUrl + 'league/update_question_competition', question);
    };
    LeagueService.prototype.deleteQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'league/delete_question/' + id);
    };
    LeagueService.prototype.updateStatus = function (status, competition_id) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('status', status);
        return this.http.post(apiUrl + 'league/update_status/' + competition_id, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    LeagueService.prototype.deleteCompetition = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'competition/delete_competition/' + id);
    };
    LeagueService.prototype.addLeague = function (competition, fileData, myFiles) {
        //console.log(competition);
        console.log(myFiles);
        var formData = new FormData();
        /* for (var i = 0; i < myFiles.length; i++) {
          formData.append("file[]", myFiles[i]);
        } */
        var waiting_time = '00:' + competition.minute_time + ':' + competition.second_time;
        var narration_time = '00:' + competition.narration_minute_time + ':' + competition.narration_second_time;
        console.log('waiting_time', waiting_time);
        console.log('narration_time', narration_time);
        var narration_time = '00:00:' + competition.narration_time;
        if (competition.narration_time == 120) {
            narration_time = '00:02:00';
        }
        var narration_time1 = '00:00:' + competition.narration_time1;
        var narration_time2 = '00:00:' + competition.narration_time2;
        formData.append("logo", competition.logo);
        formData.append("compitition_name", competition.competitionName);
        formData.append("description", competition.description);
        formData.append("start_date_time", competition.startDateTime);
        formData.append("end_date", competition.endDate);
        //formData.append("start_time", competition.startTime);
        formData.append("end_time", competition.endTime);
        formData.append("waiting_time", waiting_time);
        formData.append("company_name", competition.companyName);
        formData.append("company_logo", competition.companyLogo);
        formData.append("company_url", competition.companyUrl);
        formData.append("company_about", competition.companyDescription);
        formData.append("status", competition.status);
        formData.append("question_type", competition.question_type);
        formData.append("created_by", competition.created_by);
        formData.append("categories", JSON.stringify(competition.categories));
        formData.append("fileData", JSON.stringify(fileData));
        formData.append("fileArray", JSON.stringify(myFiles));
        if (competition.narration_text != '') {
            formData.append("narration_text", competition.narration_text);
            formData.append("narration_text1", competition.narration_text1);
            formData.append("narration_text2", competition.narration_text2);
        }
        else {
            formData.append("narration_url", competition.narration_url);
            formData.append("narration_url1", competition.narration_url1);
            formData.append("narration_url2", competition.narration_url2);
        }
        formData.append("narration_time", narration_time);
        formData.append("narration_time1", narration_time1);
        formData.append("narration_time2", narration_time2);
        return this.http.post(apiUrl + 'league/addLeague', formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    LeagueService.prototype.updateCompetition = function (competition, competition_id, myFiles) {
        console.log(competition);
        console.log(myFiles);
        var formData = new FormData();
        /* for (var i = 0; i < myFiles.length; i++) {
          formData.append("file[]", myFiles[i]);
        } */
        //var waiting_time = '00:'+competition.minute_time+':'+competition.second_time;
        //var narration_time = '00:'+competition.narration_minute_time+':'+competition.narration_second_time;
        var realDateObject = new Date(competition.startDateTime);
        console.log(typeof realDateObject);
        var dd = realDateObject.getDate();
        var mm = realDateObject.getMonth();
        var yyyy = realDateObject.getFullYear();
        var hh = realDateObject.getHours();
        var min = realDateObject.getMinutes();
        var start_date_time = new Date(yyyy, mm, dd, hh, min);
        console.log(start_date_time);
        var waiting_time = '00:' + competition.minute_time + ':00';
        console.log('waiting_time', waiting_time);
        //console.log('narration_time', narration_time);
        var narration_time = '00:00:' + competition.narration_time;
        var narration_time1 = '00:00:' + competition.narration_time1;
        formData.append("logo", competition.logo);
        formData.append("compitition_name", competition.competitionName);
        formData.append("description", competition.description);
        formData.append("start_date_time", start_date_time); //competition.startDate);
        formData.append("start_date", competition.startDate);
        formData.append("end_date", competition.endDate);
        //formData.append("start_time", start_time);
        formData.append("end_time", competition.endTime);
        formData.append("waiting_time", waiting_time);
        formData.append("company_name", competition.companyName);
        formData.append("company_logo", competition.companyLogo);
        formData.append("company_url", competition.companyUrl);
        formData.append("company_about", competition.companyDescription);
        formData.append("status", competition.status);
        formData.append("question_type", competition.question_type);
        formData.append("created_by", competition.created_by);
        formData.append("categories", JSON.stringify(competition.categories));
        //formData.append("fileData", JSON.stringify(fileData));
        formData.append("fileArray", JSON.stringify(myFiles));
        if (competition.narration_text != '') {
            formData.append("narration_text", competition.narration_text);
            formData.append("narration_text1", competition.narration_text1);
        }
        else {
            formData.append("narration_url", competition.narration_url);
            formData.append("narration_url1", competition.narration_url1);
        }
        formData.append("narration_time", narration_time);
        formData.append("narration_time1", narration_time1);
        return this.http.post(apiUrl + 'league/updateCompetition/' + competition_id, formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    LeagueService.prototype.getAll = function () {
        return this.http.get(apiUrl + 'league');
    };
    LeagueService.prototype.getLeagueList = function () {
        return this.http.get(apiUrl + 'league/get_league_list');
    };
    LeagueService.prototype.editCompetition = function (id) {
        return this.http.get(apiUrl + 'league/edit_competition/' + id);
    };
    LeagueService.prototype.interestLeaguePost = function (competition) {
        //console.log(competition);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('competition_id', competition.id)
            .set('interest_id', competition.interest_by)
            .set('status', competition.status);
        return this.http.post(apiUrl + 'league/league_interest', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    LeagueService.prototype.groupLeaguePost = function (competition) {
        //console.log(competition);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('competition_id', competition.id)
            .set('interest_id', competition.interest_by)
            .set('status', competition.status);
        return this.http.post(apiUrl + 'league/league_group', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    LeagueService.prototype.getCategoryQuestion = function (categories) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('categories', categories.join(','));
        return this.http.get(apiUrl + 'league/getCategoryQuestion', { params: params });
    };
    LeagueService.prototype.update = function (competition, id) {
        var formData = new FormData();
        formData.append("logo", competition.logo);
        formData.append("compitition_name", competition.competitionName);
        formData.append("description", competition.description);
        formData.append("start_date", competition.startDate);
        formData.append("end_date", competition.endDate);
        formData.append("start_time", competition.startTime);
        formData.append("end_time", competition.endTime);
        formData.append("waiting_time", competition.waitingTime);
        formData.append("status", competition.status);
        return this.http.patch(apiUrl + 'category/' + id, formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    LeagueService.prototype.delete = function (id) {
        return this.http.delete(apiUrl + 'league/' + id);
    };
    LeagueService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    LeagueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LeagueService);
    return LeagueService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-league-league-module.js.map