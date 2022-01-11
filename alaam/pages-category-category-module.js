(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/add/add-category.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/add/add-category.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Add New Category </h3>\r\n     </div></div>\r\n     <hr />\r\n\r\n   <div class=\"card\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveCategory()\">\r\n    <div class=\"row\">\r\n     \r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n        <div class=\"form-group\">\r\n          <label>Title Name</label>\r\n          <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" (keyup)=\"onKey($event)\">\r\n           <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.title.errors.required\">Title is required.</div>\r\n            </div>\r\n          </div>\r\n          \r\n         <!--  <div class=\"form-group  files color m-t-15\" style=\"display: block;\">\r\n            <label>Upload Your File </label>\r\n        \r\n               <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\">\r\n          </div> -->\r\n\r\n          <!-- Progress Bar -->\r\n         <!--  <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n              [style.width.%]=\"percentDone\">\r\n            </div>\r\n          </div> -->\r\n          \r\n          <!-- Image Preview -->\r\n         <!--  <div class=\"form-group\">\r\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n              <img [src]=\"preview\" [alt]=\"form.value.name\" height=\"80\" >\r\n            </div>\r\n          </div> -->\r\n\r\n            <div class=\"form-group  files color m-t-15\">\r\n              <div class=\" m-t-15\">\r\n                <label>Upload Icon </label>\r\n                  <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"preview\" >\r\n                <img [src]=\"croppedImage\" />\r\n              </div>\r\n            </div>\r\n\r\n      </div>\r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"description\" formControlName=\"description\" ></textarea>\r\n          </div>\r\n          <div class=\"row \">\r\n            <div class=\"col-sm-12 col-xs-12 col-md-4 \">\r\n              <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n                <label>\r\n                <input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"1\" formControlName=\"status\" >\r\n                <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span class=\"text-inverse\">Active</span></label>\r\n                </div>\r\n              </div>\r\n             \r\n              <!--   (click)=\"saveCategory(newCategory)\" -->\r\n              <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n                <div class=\"m-t-15\">\r\n                  <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Create\r\n                  </button>\r\n                  <a class=\"btn btn-warning round-border create_cancel\" [routerLink]=\"['/category']\">Cancel</a>\r\n                  </div>\r\n                 </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  \r\n    </form>\r\n   </div>\r\n   </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/edit/edit-category.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/edit/edit-category.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Edit Category </h3>\r\n     </div></div>\r\n     <hr />\r\n   <div class=\"card\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"updateCategory()\">\r\n    <div class=\"row\">\r\n     \r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n        <div class=\"group\">\r\n          <label>Title Name</label>\r\n          <input type=\"text\"  class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n          <span class=\"md-line\"></span>\r\n            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.title.errors.required\">Title is required.</div>\r\n            </div>\r\n          </div>\r\n    \r\n          \r\n          <!-- <div class=\"group  files color m-t-15\" style=\"display: block;\">\r\n            <label>Upload Your File </label>\r\n              <input type=\"file\" class=\"form-control\"  (change)=\"uploadFile($event)\">\r\n           </div>\r\n\r\n           <div [innerHTML]=\"uploadError\" class=\"error\"></div> -->\r\n\r\n           <!-- Progress Bar -->\r\n          <!-- <div class=\"progress form-group\" *ngIf=\"percentDone\">\r\n            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\"\r\n              [style.width.%]=\"percentDone\">\r\n            </div>\r\n          </div> -->\r\n          <!-- <img src=\"{{s3_url}}user-default.png\" height=\"300\"> -->\r\n          <!-- Image Preview --> \r\n         <!--  <div class=\"form-group\"> \r\n            <div class=\"preview\" *ngIf=\"preview && preview !== null\">\r\n              <img [src]=\"preview\" [alt]=\"form.value.name\" height=\"80\" >\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group  files color m-t-15\">\r\n            <div class=\" m-t-15\">\r\n              <label>Upload Icon </label>\r\n                <input type=\"file\" class=\"form-control\" (change)=\"fileChangeEvent($event)\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"preview\" >\r\n              <img [src]=\"croppedImage\" />\r\n            </div>\r\n          </div>\r\n         \r\n\r\n      </div>\r\n      <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n        <div class=\"group \">\r\n          <label>Description</label>\r\n          <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"description\"  formControlName=\"description\"  ></textarea>\r\n          </div>\r\n          <div class=\"row m-t-15\">\r\n            <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n              <div class=\"checkbox-fade fade-in-primary m-t-15\">\r\n                <label><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"yes\" formControlName=\"status\">\r\n                <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                <span class=\"text-inverse\">Active</span></label>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n                <div class=\"m-t-15\">\r\n                   <button [disabled]=\"loading\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel pull-right\">\r\n                   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Save Changes\r\n                  </button>\r\n                  </div>\r\n                 </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n   </div>\r\n   </div>\r\n</div>\r\n<div class=\"modal crop-image-wrap\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Crop Image</h4>\r\n        <button type=\"button\" class=\"close alert-danger\" data-dismiss=\"modal\" (click)=\"closePopup()\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body slot-details-wrap\">\r\n          <image-cropper \r\n          [imageChangedEvent]=\"imageChangedEvent\" \r\n          [maintainAspectRatio]=\"true\" \r\n          [aspectRatio]=\"1 / 1\"\r\n          [resizeToWidth]=\"200\" \r\n          format=\"png\" \r\n          (imageCropped)=\"imageCropped($event)\" \r\n          (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" \r\n          (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"closePopup()\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list-category.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list-category.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n\r\n<div class=\"card\">\r\n\r\n<div class=\"card-block\">\r\n <div class=\"dt-responsive table-responsive11\">\r\n<div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n<div id=\"autofill_filter\" class=\"dataTables_filter\">\r\n  <label>Search \r\n    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> \r\n  </label>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n       <!--  <div class=\"form-check form-check-inline\">\r\n          <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-1\" value=\"\"  [(ngModel)]=\"term2\" checked=\"yes\"> All\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-2\" value=\"1\"  [(ngModel)]=\"term2\"> Active\r\n            </label>\r\n        </div>\r\n\r\n        <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"statusSearch\" id=\"statusSearch-3\" value=\"0\" [(ngModel)]=\"term2\"> Inactive\r\n            </label>\r\n        </div> -->\r\n        <a [routerLink]=\"['add-category']\" class=\"btn allam-btn-green text-white m-t-15\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>Add Category\r\n        </a>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n<div class=\"col-xs-12 col-sm-12\">\r\n\t<div class=\"dt-responsive table-responsive\">\r\n<table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n<thead>\r\n<tr role=\"row\">\r\n<!-- <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">No.</th> -->\r\n\r\n<th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 375px;\" aria-sort=\"descending\" (click)=\"sort('title')\">Title<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'title', 'fa-sort-asc': (column == 'title' && isDesc), 'fa-sort-desc': (column == 'title' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('description')\">Description<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'description', 'fa-sort-asc': (column == 'description' && isDesc), 'fa-sort-desc': (column == 'description' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 100px;\" (click)=\"sort('status')\">Status<i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status', 'fa-sort-asc': (column == 'status' && isDesc), 'fa-sort-desc': (column == 'status' && !isDesc) }\" aria-hidden=\"true\"> </i></th>\r\n\r\n<th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 60px;\"> </th>\r\n</thead>\r\n<tbody>\r\n\r\n\r\n<tr role=\"row\" *ngFor=\"let data of categories | filter: term : term2 | orderBy: {property: column, direction: direction} | paginate : {\r\n                  itemsPerPage: pageSize,\r\n                  currentPage: page,\r\n                  totalItems: count\r\n                };\" >\r\n\t<!-- <td class=\"\">{{ data.id }}</td> -->\r\n  <td class=\"sorting_1\">{{ data.title }}</td>\r\n\t<td>{{ data.description }}</td>\r\n\t<td>\r\n\r\n\t<button *ngIf=\"data.status!='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-times text-warning\"></i> Inactive </button>\r\n\t<button *ngIf=\"data.status=='1'\" class=\"btn allam-status-btn \" (click)=\"changeStatus(data)\"> <i class=\"fa fa-check allam-txt-green\"></i> Active </button>\r\n\r\n\t</td>\r\n\t<td class=\"categories\">\r\n\t<a [routerLink]=\"['edit-category', data.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\" ></i></a>\r\n\r\n<!-- \t<button type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"deleteCategory(data.id)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\" ></i> </button> -->\r\n\r\n\t</td>\r\n</tr>\r\n\r\n</tbody>\r\n\r\n</table>\r\n\r\n</div>\r\n\r\n</div></div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n    <div class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n      <label>\r\n        <select (change)=\"handlePageSizeChange($event)\" class=\"form-control inpuitemsPerPaget-sm\">\r\n          <option *ngFor=\"let size of pageSizes\" [ngValue]=\"size\">\r\n              {{ size }}\r\n          </option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n    <pagination-controls\r\n        previousLabel=\"Prev\"\r\n        nextLabel=\"Next\"\r\n        responsive=\"true\"\r\n        class=\"pagination\"\r\n        (pageChange)=\"handlePageChange($event)\"\r\n      ></pagination-controls>   \r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/category/add/add-category.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/category/add/add-category.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loading {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.files:before {\n  left: 0;\n  width: 53%;\n}\n\n.files input {\n  padding: 27px 30px 85px 30%;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvYWRkL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeVxcYWRkXFxhZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2FkZC9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUNDRjs7QURFRTtFQUNFO0lBQUssdUJBQUE7RUNFUDtFRERFO0lBQU8seUJBQUE7RUNJVDtBQUNGOztBRFBFO0VBQ0U7SUFBSyx1QkFBQTtFQ0VQO0VEREU7SUFBTyx5QkFBQTtFQ0lUO0FBQ0Y7O0FEREE7RUFBZSxPQUFBO0VBQVMsVUFBQTtBQ0t4Qjs7QURKQTtFQUFlLDJCQUFBO0VBQTZCLG1CQUFBO0FDUzVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvYWRkL2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkaW5neyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGxlZnQ6IDUwJTsgXHJcbiAgdG9wOiA1MCU7IFxyXG4gIHotaW5kZXg6IDE7IFxyXG4gIHdpZHRoOiAxNTBweDsgXHJcbiAgaGVpZ2h0OiAxNTBweDsgXHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgXHJcbiAgd2lkdGg6IDEyMHB4OyBcclxuICBoZWlnaHQ6IDEyMHB4OyBcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcclxuICB9IFxyXG4gICAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgfVxyXG5cclxuICBcclxuLmZpbGVzOmJlZm9yZSB7bGVmdDogMDsgd2lkdGg6IDUzJTt9XHJcbi5maWxlcyBpbnB1dCB7IHBhZGRpbmc6IDI3cHggMzBweCA4NXB4IDMwJTsgbWFyZ2luLWJvdHRvbTogMTBweDt9XHJcblxyXG5cclxuXHJcbiIsIiNsb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5maWxlczpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTMlO1xufVxuXG4uZmlsZXMgaW5wdXQge1xuICBwYWRkaW5nOiAyN3B4IDMwcHggODVweCAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/category/add/add-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/category/add/add-category.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(fb, categoryService, router, alertService) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
        this.newCategory = {};
        this.isTitleExist = false;
        this.percentDone = 0;
        this.submitted = false;
        this.showModal = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
        // Reactive Form
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [''],
            status: [''],
            avatar: [null]
        });
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    //   fileProgress(fileInput: any) {
    //       this.fileData = <File>fileInput.target.files[0];
    //       this.preview();
    //   }
    //   preview() {
    //       // Show preview 
    //       var mimeType = this.fileData.type;
    //       if (mimeType.match(/image\/*/) == null) {
    //         return;
    //       }
    //       var reader = new FileReader();      
    //       reader.readAsDataURL(this.fileData); 
    //       reader.onload = (_event) => { 
    //         this.previewUrl = reader.result; 
    //       }
    //   }
    //  onSubmit() {
    //     const formData = new FormData();
    //       formData.append('file', this.fileData);
    //       this.http.post('url/to/your/api', formData)
    //         .subscribe(res => {
    //           console.log(res);
    //           this.uploadedFilePath = res.data.filePath;
    //           alert('SUCCESS !!');
    //         })
    // }
    // Image Preview
    AddCategoryComponent.prototype.uploadFile = function (event) {
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
    Object.defineProperty(AddCategoryComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    AddCategoryComponent.prototype.onKey = function (event) {
        var _this = this;
        this.categoryService.checkCategory({ "title": event.target.value })
            .subscribe(function (response) {
            if (response['status'] == 1) {
                _this.alertService.pop('error', 'Category already exits.');
                _this.isTitleExist = true;
            }
            else {
                _this.isTitleExist = false;
            }
            return;
        }, function (error) {
            _this.alertService.pop('error', 'Something went wrong. Try again later.');
        });
    };
    AddCategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.isTitleExist) {
            this.alertService.pop('error', 'Category already exits.');
            return false;
        }
        this.loading = false;
        this.newCategory.title = this.form.value.title;
        this.newCategory.icon = this.form.value.avatar;
        this.newCategory.description = this.form.value.description;
        this.newCategory.status = this.form.value.status;
        if (this.newCategory.status) {
            this.newCategory.status = '1';
        }
        else {
            this.newCategory.status = '0';
        }
        this.categoryService.addCategory(this.newCategory)
            .subscribe(function (res) {
            _this.alertService.pop('success', 'Category added successfully');
            _this.percentDone = false;
            _this.submitted = false;
            _this.loading = false;
            _this.router.navigate(['/category']);
        });
    };
    AddCategoryComponent.prototype.cancelNewCategory = function () {
        this.newCategory = {};
    };
    AddCategoryComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
    };
    AddCategoryComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.form.patchValue({
            avatar: this.croppedImage
        });
    };
    AddCategoryComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    AddCategoryComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    AddCategoryComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    AddCategoryComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    AddCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/add/add-category.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-category.component.scss */ "./src/app/pages/category/add/add-category.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-category.component */ "./src/app/pages/category/list/list-category.component.ts");
/* harmony import */ var _add_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-category.component */ "./src/app/pages/category/add/add-category.component.ts");
/* harmony import */ var _edit_edit_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-category.component */ "./src/app/pages/category/edit/edit-category.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_category_component__WEBPACK_IMPORTED_MODULE_3__["ListCategoryComponent"],
        data: {
            breadcrumb: 'category',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-category',
        component: _add_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"],
        data: {
            breadcrumb: 'Add category',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add category',
            status: false
        }
    },
    {
        path: 'edit-category/:categoryId',
        component: _edit_edit_category_component__WEBPACK_IMPORTED_MODULE_5__["EditCategoryComponent"],
        data: {
            breadcrumb: 'Edit category',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit category',
            status: false
        }
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _list_list_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-category.component */ "./src/app/pages/category/list/list-category.component.ts");
/* harmony import */ var _add_add_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-category.component */ "./src/app/pages/category/add/add-category.component.ts");
/* harmony import */ var _edit_edit_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-category.component */ "./src/app/pages/category/edit/edit-category.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");








//import { BrowserModule } from '@angular/platform-browser';





var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperModule"]
            ],
            declarations: [
                _list_list_category_component__WEBPACK_IMPORTED_MODULE_4__["ListCategoryComponent"],
                _add_add_category_component__WEBPACK_IMPORTED_MODULE_5__["AddCategoryComponent"],
                _edit_edit_category_component__WEBPACK_IMPORTED_MODULE_6__["EditCategoryComponent"]
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/pages/category/edit/edit-category.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/category/edit/edit-category.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files:before {\n  left: 0;\n  width: 53%;\n}\n\n.files input {\n  padding: 27px 30px 85px 30%;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvZWRpdC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGVkaXRcXGVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2VkaXQvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFlLE9BQUE7RUFBUyxVQUFBO0FDR3hCOztBREZBO0VBQWUsMkJBQUE7RUFBNkIsbUJBQUE7QUNPNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9lZGl0L2VkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZXM6YmVmb3JlIHtsZWZ0OiAwOyB3aWR0aDogNTMlO31cclxuLmZpbGVzIGlucHV0IHsgcGFkZGluZzogMjdweCAzMHB4IDg1cHggMzAlOyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIuZmlsZXM6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUzJTtcbn1cblxuLmZpbGVzIGlucHV0IHtcbiAgcGFkZGluZzogMjdweCAzMHB4IDg1cHggMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/category/edit/edit-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/category/edit/edit-category.component.ts ***!
  \****************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(fb, categoryService, activeAouter, router, alertService) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.activeAouter = activeAouter;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
        this.s3_url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].s3_url;
        this.categories = [];
        this.newCategory = {};
        this.editedCategory = {};
        this.percentDone = 0;
        //preview: string;
        this.submitted = false;
        this.isFile = false;
        this.showModal = false;
        //image cropping
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.id = this.activeAouter.snapshot.params['categoryId'];
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [''],
            status: [''],
            icon: [null]
        });
        this.getDetail(this.id);
    };
    EditCategoryComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.categoryService.getById(id).subscribe(function (categories) {
            _this.editedCategory = categories[0];
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
    /*  import * as AWS from 'aws-sdk';
  
    let s3= new AWS.S3();
    const url = s3.getSignedUrl('getObject', {
        Bucket: myBucket,
        Key: myKey
    })
    console.log(url)*/
    // Image Preview
    EditCategoryComponent.prototype.uploadFile = function (event) {
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
    EditCategoryComponent.prototype.updateCategory_old = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.editedCategory.title = this.form.value.title;
        this.editedCategory.icon = this.form.value.icon;
        this.editedCategory.description = this.form.value.description;
        this.editedCategory.status = this.form.value.status;
        if (this.editedCategory.status) {
            this.editedCategory.status = '1';
        }
        else {
            this.editedCategory.status = '0';
        }
        this.editedCategory.created_at = '2020-09-09';
        this.categoryService.update(this.editedCategory, this.id)
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
                    _this.alertService.pop('success', 'Category updated successfully');
                    _this.percentDone = false;
                    _this.submitted = false;
                    _this.router.navigate(['/category']);
            }
        });
    };
    EditCategoryComponent.prototype.updateCategory = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.editedCategory.title = this.form.value.title;
        this.editedCategory.icon = this.form.value.icon;
        this.editedCategory.description = this.form.value.description;
        this.editedCategory.status = this.form.value.status;
        this.editedCategory.isFile = this.isFile;
        if (this.editedCategory.status) {
            this.editedCategory.status = '1';
        }
        else {
            this.editedCategory.status = '0';
        }
        this.categoryService.update(this.editedCategory, this.id)
            .subscribe(function (res) {
            _this.alertService.pop('success', 'Category updated successfully');
            _this.percentDone = false;
            _this.submitted = false;
            _this.loading = false;
            _this.router.navigate(['/category']);
        });
    };
    Object.defineProperty(EditCategoryComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    EditCategoryComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.showModal = true;
        this.isFile = true;
    };
    EditCategoryComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        this.form.patchValue({
            icon: this.croppedImage
        });
        this.isFile = true;
    };
    EditCategoryComponent.prototype.imageLoaded = function () {
        /* show cropper */
    };
    EditCategoryComponent.prototype.cropperReady = function () {
        /* cropper ready */
    };
    EditCategoryComponent.prototype.loadImageFailed = function () {
        /* show message */
        this.alertService.pop('error', 'Please upload image only');
    };
    EditCategoryComponent.prototype.closePopup = function () {
        this.showModal = false;
    };
    EditCategoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/edit/edit-category.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/pages/category/edit/edit-category.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/category/list/list-category.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/category/list/list-category.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  margin: 0;\n  float: right;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvbGlzdC9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGxpc3RcXGxpc3QtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2xpc3QvbGlzdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFjLFNBQUE7RUFBWSxZQUFBO0FDRTFCOztBRERBO0VBQTRDLFdBQUE7QUNLNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9saXN0L2xpc3QtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2luYXRpb24geyBtYXJnaW46IDA7ICBmbG9hdDogcmlnaHQ7IH1cclxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvIHtmbG9hdDogbGVmdDt9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIucGFnaW5hdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category/list/list-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/category/list/list-category.component.ts ***!
  \****************************************************************/
/*! exports provided: ListCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoryComponent", function() { return ListCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import {OrderBy} from "../../../pipes/orderBy"
var ListCategoryComponent = /** @class */ (function () {
    function ListCategoryComponent(categoryService, router, alertService) {
        this.categoryService = categoryService;
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
    ListCategoryComponent.prototype.ngOnInit = function () {
        this.getAllCategory();
    };
    ListCategoryComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListCategoryComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ListCategoryComponent.prototype.getAllCategory = function () {
        var _this = this;
        var params = this.getRequestParams(this.term, this.page, this.pageSize);
        // console.log(params);
        this.categoryService.getAll().subscribe(function (categories) {
            _this.categories = categories;
            _this.config.totalItems = categories.length;
        });
    };
    ListCategoryComponent.prototype.changeStatus = function (category) {
        var _this = this;
        console.log(category);
        if (category.status == "0") {
            category.status = "1";
        }
        else {
            category.status = "0";
        }
        this.categoryService.updateStatus(category)
            .subscribe(function (data) {
            console.log(data);
            _this.alertService.pop('success', 'Category updated successfully');
            //this.router.navigate(['/category']);
        }, function (error) {
            _this.alertService.pop('error', error);
        });
        console.log('category updated');
    };
    ListCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        if (confirm("Are you sure to delete " + name)) {
            this.categoryService.delete(id).subscribe(function () {
                _this.alertService.pop('success', 'Category deleted successfully');
                _this.getAllCategory();
            });
        }
    };
    //custom search & pagination
    ListCategoryComponent.prototype.getRequestParams = function (searchText, page, pageSize) {
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
    ListCategoryComponent.prototype.handlePageChange = function (event) {
        this.page = event;
        this.getAllCategory();
    };
    ListCategoryComponent.prototype.handlePageSizeChange = function (event) {
        this.pageSize = event.target.value;
        this.page = 1;
        this.getAllCategory();
    };
    ListCategoryComponent.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
    ]; };
    ListCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list-category.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-category.component.scss */ "./src/app/pages/category/list/list-category.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ListCategoryComponent);
    return ListCategoryComponent;
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
//# sourceMappingURL=pages-category-category-module.js.map