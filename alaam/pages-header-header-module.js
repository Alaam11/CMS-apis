(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-header-header-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/add/add-header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/add/add-header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Add New Header </h3>\r\n     </div></div>\r\n     <hr />\r\n\r\n   <div class=\"card\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveHeader()\">\r\n    <div class=\"row\">\r\n     \r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n        <div class=\"form-group\">\r\n          <label>Title Name</label>\r\n           <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" (keyup)=\"onKey($event)\">\r\n           <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.title.errors.required\">Title is required.</div>\r\n            </div>\r\n          </div>\r\n    \r\n          \r\n          <!-- <div class=\"form-group  files color m-t-15\" style=\"display: block;\">\r\n            <label>Upload Your File </label>\r\n               <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\">\r\n          </div>\r\n          <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n              [style.width.%]=\"percentDone\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n              <img [src]=\"preview\" [alt]=\"form.value.name\" height=\"80\" >\r\n            </div>\r\n          </div> -->\r\n           <div class=\"form-group  files color m-t-15\">\r\n              <div class=\" m-t-15\">\r\n                <label>Upload Icon </label>\r\n                  <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"preview\" >\r\n                <img [src]=\"croppedImage\" />\r\n              </div>\r\n            </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n        \r\n          <div class=\"form-group\">\r\n            <label>Categories</label> <!-- (onSelectAll)=\"onSelectAll($event)\"   [ngModelOptions]=\"{standalone: true}\" -->\r\n            <ng-multiselect-dropdown  formControlName=\"categories\" \r\n              [placeholder]=\"'Select Categories'\"\r\n              [data]=\"dropdownList\"\r\n              [(ngModel)]=\"selectedItems\"\r\n              [settings]=\"dropdownSettings\"\r\n              (onSelect)=\"onItemSelect($event)\"\r\n              (onSelectAll)=\"onSelectAll($event)\"\r\n            >\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"description\" formControlName=\"description\" ></textarea>\r\n            </div>\r\n\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n              <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n                <label>\r\n                <input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"1\" formControlName=\"status\" >\r\n                <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span class=\"text-inverse\">Active</span></label>\r\n                </div>\r\n              </div>\r\n               <!-- spinnner element is  \r\n                  defined with id loading -->\r\n              <div class=\"d-flex justify-content-center\" id=\"loading-s\" style=\"display: none !important\"> \r\n                  <div class=\"spinner-border\" role=\"status\"> \r\n                      <span class=\"sr-only\" id=\"loading\"></span> \r\n                  </div> \r\n              </div>\r\n\r\n              <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n                <div class=\"m-t-15\">                  \r\n                  <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Create\r\n                  </button>\r\n\r\n                  <a class=\"btn btn-warning round-border create_cancel\" [routerLink]=\"['/header']\">Cancel</a>\r\n                  </div>\r\n                 </div>\r\n  \r\n  \r\n          </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n   </div>   \r\n   </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/edit/edit-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/edit/edit-header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Edit Header </h3>\r\n     </div></div>\r\n     <hr />\r\n   <div class=\"card\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"updateCategory()\">\r\n    <div class=\"row\">\r\n     \r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n        <div class=\"group\">\r\n          <label>Title Name</label>\r\n          <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" >\r\n           <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.title.errors.required\">Title is required.</div>\r\n            </div>\r\n          </div>\r\n    \r\n          <!-- <div class=\"group  files color m-t-15\" style=\"display: block;\">\r\n            <label>Upload Your File </label>\r\n              <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\">\r\n          </div>\r\n          <div [innerHTML]=\"uploadError\" class=\"error\"></div>\r\n          <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n              [style.width.%]=\"percentDone\">\r\n            </div>\r\n          </div>        \r\n          <div class=\"form-group\"> \r\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n              <img [src]=\"preview\" [alt]=\"form.value.name\" height=\"80\" >\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group  files color m-t-15\">\r\n            <div class=\" m-t-15\">\r\n              <label>Upload Icon </label>\r\n                <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"preview\" >\r\n              <img [src]=\"croppedImage\" />\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n        <div class=\"group \">\r\n          <label>Description</label>\r\n          <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"description\"  formControlName=\"description\"  ></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Categories</label> <!-- (onSelectAll)=\"onSelectAll($event)\" -->\r\n            <ng-multiselect-dropdown  formControlName=\"categories\" \r\n              [placeholder]=\"'Select Categories'\"\r\n              [data]=\"dropdownList\"\r\n              [(ngModel)]=\"selectedItems\"\r\n              [settings]=\"dropdownSettings\"\r\n              (onSelect)=\"onItemSelect($event)\"\r\n              (onSelectAll)=\"onSelectAll($event)\"\r\n            >\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n              <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n                <label><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"yes\" formControlName=\"status\">\r\n                <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span class=\"text-inverse\">Active</span></label>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n                <div class=\"m-t-15\">\r\n                   <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Save Changes\r\n                  </button>\r\n                  <!-- <button type=\"button\" class=\"btn btn-warning round-border create_cancel\">Reset</button> -->\r\n                  </div>\r\n                 </div>\r\n  \r\n  \r\n          </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n   </div>\r\n   </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/list/list-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/list/list-header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search\r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n       <!--  <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-1\" value=\"\"  [(ngModel)]=\"term2\" checked=\"yes\"> All\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-2\" value=\"1\"  [(ngModel)]=\"term2\"> Active\r\n            </label>\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-3\" value=\"0\" [(ngModel)]=\"term2\"> Inactive\r\n            </label>\r\n        </div> -->\r\n        <a [routerLink]=\"['add-header']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Header\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">No.</th>\r\n -->\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 375px;\" aria-sort=\"descending\" (click)=\"sort('title')\">Title<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'title', 'fa-sort-asc': (column == 'title' && isDesc), 'fa-sort-desc': (column == 'title' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('description')\">Description<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'description', 'fa-sort-asc': (column == 'description' && isDesc), 'fa-sort-desc': (column == 'description' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> </th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of categories | filter: term : term2 | orderBy: {property: column, direction: direction} | paginate : {\r\n                  itemsPerPage: pageSize,\r\n                  currentPage: page,\r\n                  totalItems: count\r\n                };\" >\r\n\t<!-- <td class=\"\">{{ data.id }}</td> -->\r\n  <td class=\"sorting_1\">{{ data.title }}</td>\r\n\t<td>{{ data.description }}</td>\r\n\t<td>\r\n\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"categories\">\r\n\t<a [routerLink]=\"['edit-header', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\" ></i></a>\r\n\r\n\t<!-- <button type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"deleteHeader(data.id)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\" ></i> </button> -->\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n<label>\r\n  <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n    <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n        {{ size }}\r\n    </option>\r\n  </select>\r\n</label>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div _ngcontent-cjp-c8=\"\" class=\"col-xs-12 col-sm-12 col-md-6\">\r\n   <pagination-controls\r\n      previousLabel=\"Prev\"\r\n      nextLabel=\"Next\"\r\n      responsive=\"true\"\r\n      class=\"pagination\"\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>   \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/header/add/add-header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/header/add/add-header.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loading {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.files:before {\n  left: 0;\n  width: 53%;\n}\n\n.files input {\n  padding: 34px 30px 85px 30%;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2FkZC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcaGVhZGVyXFxhZGRcXGFkZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWRlci9hZGQvYWRkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0NGOztBREVFO0VBQ0U7SUFBSyx1QkFBQTtFQ0VQO0VEREU7SUFBTyx5QkFBQTtFQ0lUO0FBQ0Y7O0FEUEU7RUFDRTtJQUFLLHVCQUFBO0VDRVA7RURERTtJQUFPLHlCQUFBO0VDSVQ7QUFDRjs7QUREQTtFQUFlLE9BQUE7RUFBUyxVQUFBO0FDS3hCOztBREpBO0VBQWUsMkJBQUE7RUFBNkIsbUJBQUE7QUNTNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXIvYWRkL2FkZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGluZ3sgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBsZWZ0OiA1MCU7IFxyXG4gIHRvcDogNTAlOyBcclxuICB6LWluZGV4OiAxOyBcclxuICB3aWR0aDogMTUwcHg7IFxyXG4gIGhlaWdodDogMTUwcHg7IFxyXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxyXG4gIHdpZHRoOiAxMjBweDsgXHJcbiAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgfSBcclxuICAgIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG4gIH1cclxuXHJcblxyXG4uZmlsZXM6YmVmb3JlIHtsZWZ0OiAwOyB3aWR0aDogNTMlO31cclxuLmZpbGVzIGlucHV0IHsgcGFkZGluZzogMzRweCAzMHB4IDg1cHggMzAlOyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIjbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uZmlsZXM6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUzJTtcbn1cblxuLmZpbGVzIGlucHV0IHtcbiAgcGFkZGluZzogMzRweCAzMHB4IDg1cHggMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/header/add/add-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/header/add/add-header.component.ts ***!
  \**********************************************************/
/*! exports provided: AddHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderComponent", function() { return AddHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







var AddHeaderComponent = /** @class */ (function () {
    function AddHeaderComponent(fb, headerService, router, alertService) {
        this.fb = fb;
        this.headerService = headerService;
        this.router = router;
        this.alertService = alertService;
        this.newHeader = {};
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.isTitleExist = false;
        this.percentDone = 0;
        this.submitted = false;
        //categories: any = [];
        this.showModal = false;
        this.loading = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        // Reactive Form
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [''],
            status: [''],
            avatar: [null],
            categories: ['']
        });
    }
    AddHeaderComponent.prototype.ngOnInit = function () {
        this.getAllCategory();
        //console.log(this.selectedItems);
        //console.log(this.categories);
        /*this.dropdownList = [
          { item_id: 1, item_text: 'Mumbai' },
          { item_id: 2, item_text: 'Bangaluru' },
          { item_id: 3, item_text: 'Pune' },
          { item_id: 4, item_text: 'Navsari' },
          { item_id: 5, item_text: 'New Delhi' }
        ];*/
        //this.selectedItems = [
        /*{ item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' }*/
        //];
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
    AddHeaderComponent.prototype.onItemSelect = function (item) {
        //this.selectedItems.push(item);
        console.log(item);
        //console.log(this.selectedItems);
    };
    AddHeaderComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    AddHeaderComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.headerService.getCategory().subscribe(function (categories) {
            _this.dropdownList = categories;
            ;
            //console.log(this.dropdownList);
        });
    };
    // Image Preview
    AddHeaderComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AddHeaderComponent.prototype.saveHeader = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.isTitleExist) {
            this.alertService.pop('error', 'Header name already exits.');
            return false;
        }
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'Please select category.', 'error');
            return;
        }
        this.loading = true;
        //console.log(this.form.value);
        this.newHeader.title = this.form.value.title;
        this.newHeader.icon = this.form.value.avatar;
        this.newHeader.description = this.form.value.description;
        this.newHeader.status = this.form.value.status;
        this.newHeader.categories = this.form.value.categories;
        if (this.newHeader.status) {
            this.newHeader.status = '1';
        }
        else {
            this.newHeader.status = '0';
        }
        console.log(this.newHeader);
        this.headerService.addHeader(this.newHeader)
            .subscribe(function (res) {
            _this.alertService.pop('success', 'Header added successfully');
            _this.percentDone = false;
            _this.submitted = false;
            _this.loading = false;
            _this.router.navigate(['/header']);
        });
        /*
        this.headerService.addHeader(this.newHeader)
            .subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Sent:
                console.log('Request has been made!');
                break;
              case HttpEventType.ResponseHeader:
                console.log('Response header has been received!');
                break;
              case HttpEventType.UploadProgress:
                this.percentDone = Math.round(event.loaded / event.total * 100);
                console.log(`Uploaded! ${this.percentDone}%`);
                break;
              case HttpEventType.Response:
              this.alertService.pop('success', 'Header added successfully');
              this.percentDone = false;
              this.hideLoader();
              this.submitted=false;
              this.router.navigate(['/header']);

      }
    })*/
    };
    AddHeaderComponent.prototype.cancelNewCategory = function () {
        this.newHeader = {};
    };
    // Function is defined 
    AddHeaderComponent.prototype.hideLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'none';
    };
    AddHeaderComponent.prototype.showLoader = function () {
        // Setting display of spinner 
        // element to none 
        document.getElementById('loading-s')
            .style.display = 'block';
    };
    Object.defineProperty(AddHeaderComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    AddHeaderComponent.prototype.onKey = function (event) {
        var _this = this;
        this.headerService.checkCategory({ "title": event.target.value })
            .subscribe(function (response) {
            if (response['status'] == 1) {
                _this.isTitleExist = true;
                _this.alertService.pop('error', 'Header name already exits.');
            }
            else {
                _this.isTitleExist = false;
            }
            return;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    AddHeaderComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
    };
    AddHeaderComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.form.patchValue({
            avatar: this.croppedImage
        });
    };
    AddHeaderComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    AddHeaderComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    AddHeaderComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    AddHeaderComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    AddHeaderComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    AddHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/add/add-header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-header.component.scss */ "./src/app/pages/header/add/add-header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AddHeaderComponent);
    return AddHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/edit/edit-header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/header/edit/edit-header.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files:before {\n  left: 0;\n  width: 53%;\n}\n\n.files input {\n  padding: 27px 30px 85px 30%;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2VkaXQvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGhlYWRlclxcZWRpdFxcZWRpdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWRlci9lZGl0L2VkaXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQWUsT0FBQTtFQUFTLFVBQUE7QUNFeEI7O0FEREE7RUFBZSwyQkFBQTtFQUE2QixtQkFBQTtBQ001QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9lZGl0L2VkaXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5maWxlczpiZWZvcmUge2xlZnQ6IDA7IHdpZHRoOiA1MyU7fVxyXG4uZmlsZXMgaW5wdXQgeyBwYWRkaW5nOiAyN3B4IDMwcHggODVweCAzMCU7IG1hcmdpbi1ib3R0b206IDEwcHg7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmZpbGVzOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MyU7XG59XG5cbi5maWxlcyBpbnB1dCB7XG4gIHBhZGRpbmc6IDI3cHggMzBweCA4NXB4IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/header/edit/edit-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/header/edit/edit-header.component.ts ***!
  \************************************************************/
/*! exports provided: EditHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHeaderComponent", function() { return EditHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__);









var EditHeaderComponent = /** @class */ (function () {
    function EditHeaderComponent(fb, headerService, activeAouter, router, alertService) {
        this.fb = fb;
        this.headerService = headerService;
        this.activeAouter = activeAouter;
        this.router = router;
        this.alertService = alertService;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].s3_url;
        this.header = [];
        this.newCategory = {};
        this.editedCategory = {};
        this.submitted = false;
        this.isFile = false;
        this.showModal = false;
        this.loading = false;
        this.percentDone = 0;
        //preview: string;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    EditHeaderComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['categoryId'];
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [''],
            status: [''],
            icon: [null],
            categories: ['']
        });
        this.getAllCategory();
        this.getDetail(this.id);
        this.getDetailCategories(this.id);
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
    EditHeaderComponent.prototype.onItemSelect = function (item) {
        //this.selectedItems.push(item);
        console.log(item);
        //console.log(this.selectedItems);
    };
    EditHeaderComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    EditHeaderComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.headerService.getCategory().subscribe(function (categories) {
            _this.dropdownList = categories;
            ;
            //console.log(this.dropdownList);
        });
    };
    EditHeaderComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.headerService.getById(id).subscribe(function (categories) {
            //this.editedCategory = categories[0];  
            _this.form.patchValue({
                title: categories[0].title,
                description: categories[0].description,
                status: categories[0].status,
                //is_active: categories.is_active,
                id: categories[0].id
            });
            _this.preview = _this.s3_url + categories[0].icon;
            _this.croppedImage = _this.s3_url + categories[0].icon;
        });
    };
    EditHeaderComponent.prototype.getDetailCategories = function (id) {
        var _this = this;
        this.headerService.getByIdCategories(id).subscribe(function (categories) {
            _this.selectedItems = JSON.parse(categories[0].category_ids);
        });
    };
    /*  import * as AWS from 'aws-sdk';
  
    let s3= new AWS.S3();
    const url = s3.getSignedUrl('getObject', {
        Bucket: myBucket,
        Key: myKey
    })
    console.log(url)*/
    // Image Preview
    EditHeaderComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({
            icon: file
        });
        this.form.get('icon').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.preview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditHeaderComponent.prototype.updateCategory_old = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please select category.', 'error');
            return;
        }
        this.editedCategory.title = this.form.value.title;
        this.editedCategory.icon = this.form.value.icon;
        this.editedCategory.description = this.form.value.description;
        this.editedCategory.status = this.form.value.status;
        this.editedCategory.categories = this.form.value.categories;
        if (this.editedCategory.status) {
            this.editedCategory.status = '1';
        }
        else {
            this.editedCategory.status = '0';
        }
        this.editedCategory.created_at = '2020-09-09';
        this.headerService.update(this.editedCategory, this.id)
            .subscribe(function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress:
                    _this.percentDone = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.percentDone + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response:
                    //console.log('User successfully created!', event.body);
                    _this.alertService.pop('success', 'Header updated successfully');
                    _this.percentDone = false;
                    _this.submitted = false;
                    _this.router.navigate(['/header']);
            }
        });
    };
    EditHeaderComponent.prototype.updateCategory = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.selectedItems.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8___default.a.fire('', 'Please select category.', 'error');
            return;
        }
        this.loading = true;
        this.editedCategory.title = this.form.value.title;
        this.editedCategory.icon = this.form.value.icon;
        this.editedCategory.description = this.form.value.description;
        this.editedCategory.status = this.form.value.status;
        this.editedCategory.categories = this.form.value.categories;
        this.editedCategory.isFile = this.isFile;
        if (this.editedCategory.status) {
            this.editedCategory.status = '1';
        }
        else {
            this.editedCategory.status = '0';
        }
        this.headerService.update(this.editedCategory, this.id)
            .subscribe(function (res) {
            _this.alertService.pop('success', 'Header updated successfully');
            _this.percentDone = false;
            _this.submitted = false;
            _this.loading = false;
            _this.router.navigate(['/header']);
        });
    };
    Object.defineProperty(EditHeaderComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    EditHeaderComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
        this.isFile = true;
    };
    EditHeaderComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.form.patchValue({
            icon: this.croppedImage
        });
        this.isFile = true;
    };
    EditHeaderComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    EditHeaderComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    EditHeaderComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    EditHeaderComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    EditHeaderComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    EditHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/edit/edit-header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-header.component.scss */ "./src/app/pages/header/edit/edit-header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], EditHeaderComponent);
    return EditHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/header/header-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRoutingModule", function() { return HeaderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-header.component */ "./src/app/pages/header/list/list-header.component.ts");
/* harmony import */ var _add_add_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-header.component */ "./src/app/pages/header/add/add-header.component.ts");
/* harmony import */ var _edit_edit_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-header.component */ "./src/app/pages/header/edit/edit-header.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_header_component__WEBPACK_IMPORTED_MODULE_3__["ListHeaderComponent"],
        data: {
            breadcrumb: 'header',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-header',
        component: _add_add_header_component__WEBPACK_IMPORTED_MODULE_4__["AddHeaderComponent"],
        data: {
            breadcrumb: 'Add header',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add header',
            status: false
        }
    },
    {
        path: 'edit-header/:categoryId',
        component: _edit_edit_header_component__WEBPACK_IMPORTED_MODULE_5__["EditHeaderComponent"],
        data: {
            breadcrumb: 'Edit header',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit header',
            status: false
        }
    }
];
var HeaderRoutingModule = /** @class */ (function () {
    function HeaderRoutingModule() {
    }
    HeaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HeaderRoutingModule);
    return HeaderRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/header/header.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/header/header.module.ts ***!
  \***********************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-routing.module */ "./src/app/pages/header/header-routing.module.ts");
/* harmony import */ var _list_list_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-header.component */ "./src/app/pages/header/list/list-header.component.ts");
/* harmony import */ var _add_add_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-header.component */ "./src/app/pages/header/add/add-header.component.ts");
/* harmony import */ var _edit_edit_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-header.component */ "./src/app/pages/header/edit/edit-header.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");








//import { BrowserModule } from '@angular/platform-browser';






var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _header_routing_module__WEBPACK_IMPORTED_MODULE_3__["HeaderRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperModule"]
            ],
            declarations: [
                _list_list_header_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderComponent"],
                _add_add_header_component__WEBPACK_IMPORTED_MODULE_5__["AddHeaderComponent"],
                _edit_edit_header_component__WEBPACK_IMPORTED_MODULE_6__["EditHeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/pages/header/list/list-header.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/header/list/list-header.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  float: right;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2xpc3QvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXGhlYWRlclxcbGlzdFxcbGlzdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWRlci9saXN0L2xpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsWUFBQTtBQ0VkOztBRERBO0VBQTRDLFdBQUE7QUNLNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXIvbGlzdC9saXN0LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHsgZmxvYXQ6IHJpZ2h0OyB9XHJcbmRpdi5kYXRhVGFibGVzX3dyYXBwZXIgZGl2LmRhdGFUYWJsZXNfaW5mbyB7ZmxvYXQ6IGxlZnQ7fSIsIi5wYWdpbmF0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/header/list/list-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/header/list/list-header.component.ts ***!
  \************************************************************/
/*! exports provided: ListHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeaderComponent", function() { return ListHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service */ "./src/app/services/header.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../pipes/orderBy"
var ListHeaderComponent = /** @class */ (function () {
    function ListHeaderComponent(headerService, router, alertService) {
        this.headerService = headerService;
        this.router = router;
        this.alertService = alertService;
        this.page = 1;
        this.count = 0;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 25, 50, 100];
        this.categories = [];
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
    ListHeaderComponent.prototype.ngOnInit = function () {
        this.getAllHeader();
    };
    ListHeaderComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListHeaderComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListHeaderComponent.prototype.getAllHeader = function () {
        var _this = this;
        var params = this.getRequestParams(this.term, this.page, this.pageSize);
        console.log(params);
        this.headerService.getAll().subscribe(function (categories) {
            _this.categories = categories;
            _this.config.totalItems = categories.length;
        });
    };
    ListHeaderComponent.prototype.changeStatus = function (category) {
        var _this = this;
        console.log(category);
        if (category.status == "0") {
            category.status = "1";
        }
        else {
            category.status = "0";
        }
        this.headerService.updateStatus(category)
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Header updated successfully');
            //this.router.navigate(['/header']);
        }, function (error) {
            _this.toasterService.pop('error', error);
        });
        console.log('category updated');
    };
    ListHeaderComponent.prototype.deleteHeader = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete " + name)) {
            this.headerService.delete(id).subscribe(function () {
                _this.alertService.pop('success', 'Header deleted successfully');
                _this.getAllHeader();
            });
        }
    };
    //custom search & pagination
    ListHeaderComponent.prototype.getRequestParams = function (searchText, page, pageSize) {
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
    ListHeaderComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getAllHeader();
    };
    ListHeaderComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getAllHeader();
    };
    ListHeaderComponent.ctorParameters = function () { return [
        { type: _services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/list/list-header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-header.component.scss */ "./src/app/pages/header/list/list-header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListHeaderComponent);
    return ListHeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-header-header-module.js.map