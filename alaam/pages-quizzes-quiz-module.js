(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quizzes-quiz-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/add/add-quiz.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/add/add-quiz.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Add Quiz </h3>\r\n     </div></div>\r\n     <hr />\r\n\r\n   <div class=\"card\">\r\n    <form>\r\n    <div class=\"row\">\r\n     \r\n    <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n     \r\n   <div class=\"group\">\r\n    <label>Title</label>\r\n    <input class=\"form-control\" placeholder=\"Add title\" type=\"text\" name=\"title\" [(ngModel)]=\"newQuiz.title\" >\r\n    </div>\r\n    \r\n    <div class=\"group m-t-15\">\r\n    <label>Select Category</label>\r\n    <select id=\"hello-single\" class=\"form-control\" name=\"category\" [(ngModel)]=\"newQuiz.category\">\r\n       <option value=\"History\">History</option>\r\n       <option value=\"Art\">Art</option>\r\n       <option value=\"Technology\">Technology</option>\r\n       <option value=\"Sceince\">Sceince</option>\r\n    </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n    \r\n   <div class=\"group\">\r\n    <label>Date</label>\r\n    <div class=\"input-group input-tr-br-radius\">\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"09/03/2020\">\r\n      <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-ui-calendar\"></i></span>\r\n      </div>\r\n    </div>\r\n\r\n   </div>\r\n\r\n   <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n    <label>Time</label>\r\n    <div class=\"input-group input-tr-br-radius\">\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"3:26 PM\">\r\n      <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-clock-time\"></i></span>\r\n      </div>\r\n\r\n   </div>\r\n</div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n      <div class=\"group \">\r\n        <label>Description</label>\r\n        <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Default textarea\" name=\"description\" [(ngModel)]=\"newQuiz.description\"></textarea>\r\n        </div>\r\n        <div class=\"row m-t-15\">\r\n          <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n            <div class=\"checkbox-fade fade-in-primary \">\r\n              <label _ngcontent-iwp-c3=\"\"><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"yes\" name=\"isPublish\" [(ngModel)]=\"newQuiz.isPublish\">\r\n              <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n              <span class=\"text-inverse\">Active</span></label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n              <div class=\" \">\r\n                <button type=\"button\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\" (click)=\"saveQuiz(newQuiz)\">Create</button>\r\n                <button type=\"button\" class=\"btn btn-warning round-border create_cancel\" (click)=\"cancelNewQuiz()\">Reset</button>\r\n                </div>\r\n               </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n  \r\n\r\n\r\n    </div>\r\n  </form>\r\n   </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/edit/edit-quiz.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/edit/edit-quiz.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row allam-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row m-b-20\"><div class=\"col-md-12\">\r\n      <h3  class=\"text-right txt-primary\">Edit Quiz </h3>\r\n     </div></div>\r\n     <hr />\r\n\r\n   <div class=\"card\">\r\n    <form>\r\n    <div class=\"row\">\r\n     \r\n    <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n     \r\n   <div class=\"group\">\r\n    <label>Title</label>\r\n    <input class=\"form-control\" placeholder=\"Add title\" type=\"text\" name=\"title\" [(ngModel)]=\"newQuiz.title\" >\r\n    </div>\r\n    \r\n    <div class=\"group m-t-15\">\r\n    <label>Select Category</label>\r\n    <select id=\"hello-single\" class=\"form-control\" name=\"category\" [(ngModel)]=\"newQuiz.category\">\r\n       <option value=\"History\">History</option>\r\n       <option value=\"Art\">Art</option>\r\n       <option value=\"Technology\">Technology</option>\r\n       <option value=\"Sceince\">Sceince</option>\r\n    </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"row m-t-15\">\r\n      <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n    \r\n   <div class=\"group\">\r\n    <label>Date</label>\r\n    <div class=\"input-group input-tr-br-radius\">\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"09/03/2020\">\r\n      <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-ui-calendar\"></i></span>\r\n      </div>\r\n    </div>\r\n\r\n   </div>\r\n\r\n   <div class=\"col-sm-12 col-xs-12 col-md-6\">\r\n    <label>Time</label>\r\n    <div class=\"input-group input-tr-br-radius\">\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"3:26 PM\">\r\n      <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-clock-time\"></i></span>\r\n      </div>\r\n\r\n   </div>\r\n</div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"card-block col-sm-12 col-xs-12 col-md-6 \">\r\n\r\n      <div class=\"group \">\r\n        <label>Description</label>\r\n        <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Default textarea\" name=\"description\" [(ngModel)]=\"newQuiz.description\"></textarea>\r\n        </div>\r\n        <div class=\"row m-t-15\">\r\n          <div class=\"col-sm-12 col-xs-12 col-md-4 m-t-15\">\r\n            <div class=\"checkbox-fade fade-in-primary \">\r\n              <label _ngcontent-iwp-c3=\"\"><input _ngcontent-iwp-c3=\"\" type=\"checkbox\" value=\"yes\" name=\"isPublish\" [(ngModel)]=\"newQuiz.isPublish\">\r\n              <span  class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n              <span class=\"text-inverse\">Active</span></label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 col-xs-12 col-md-8\">\r\n              <div class=\" \">\r\n                <button type=\"button\" class=\"btn allam-btn-green text-white round-border m-r-10 create_cancel\" (click)=\"saveQuiz(newQuiz)\">Save Changes</button>\r\n                <button type=\"button\" class=\"btn btn-warning round-border create_cancel\" (click)=\"cancelNewQuiz()\">Reset</button>\r\n                </div>\r\n               </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n  \r\n\r\n\r\n    </div>\r\n  </form>\r\n   </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/list/list-quiz.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/list/list-quiz.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n      \r\n      <div class=\"card\">\r\n      \r\n      <div class=\"card-block\">\r\n       <div class=\"dt-responsive table-responsive11\">\r\n      <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n      \r\n      <div class=\"row\">\r\n      \r\n      <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n      <div id=\"autofill_filter\" class=\"dataTables_filter\"><label>Search <input type=\"search\" class=\"form-control input-sm\" placeholder=\"Search Here\" aria-controls=\"autofill\" [(ngModel)]=\"term\"> </label></div></div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6 text-right\"> \r\n      \r\n      <a [routerLink]=\"['add-quiz']\" class=\"btn allam-btn-green m-t-15 text-white\">\r\n      <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-plus\"></i>\r\n      Add Quiz\r\n      </a>\r\n      \r\n      \r\n      \r\n      \r\n       </div>\r\n      \r\n      </div>\r\n      \r\n      \r\n      <div class=\"row\">\r\n      \r\n      <div class=\"col-xs-12 col-sm-12\">\r\n            <div class=\"dt-responsive table-responsive\">\r\n      <table id=\"autofill\" class=\"table table-striped table-bordered nowrap dataTable\" role=\"grid\" aria-describedby=\"autofill_info\">\r\n      <thead>\r\n      <tr role=\"row\">\r\n      <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Name: activate to sort column ascending\" style=\"width: 30px;\">No.</th>\r\n      <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\" style=\"width: 310px;\" aria-sort=\"descending\">Title</th>\r\n      <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\" style=\"width: 200px;\">Category</th>\r\n      <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 170px;\"> Insert Date</th>\r\n      <th class=\"sorting\" tabindex=\"0\" aria-controls=\"autofill\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\" style=\"width: 108px;\"> </th>\r\n      \r\n      </thead>\r\n      <tbody>\r\n      \r\n      \r\n      <tr role=\"row\" *ngFor=\"let quiz of quizs | filter:term | paginate: config; let index =index;\r\n                   let isOdd=odd;\r\n                   let isEven=even\" \r\n      \r\n            [class.odd]=\"isOdd\" \r\n            [class.even]=\"isEven\" \r\n            [class.selected]=\"quiz === selectedQuiz\">\r\n            <td class=\"\">{{ quiz.id }}</td>\r\n            <td class=\"sorting_1\">{{ quiz.title }}</td>\r\n            <td class=\"sorting_1\">{{ quiz.category }}</td>\r\n            <td>{{ quiz.insertDate }}</td>\r\n      \r\n            <td class=\"categories\">\r\n            <a [routerLink]=\"['edit-quiz', quiz.id]\"  class=\"btn allam-btn allam-btn-green text-white\" title=\"Edit\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-edit\"></i></a>\r\n      \r\n            <button type=\"button\" class=\"btn allam-btn btn-warning\" (click)=\"removeQuiz(quiz)\" title=\"Delete\"><i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\"></i> </button>\r\n      \r\n            <!-- <a href=\"\" class=\"btn btn-warning\">\r\n            <i _ngcontent-yet-c5=\"\" class=\"icofont icofont-ui-delete\"></i>Delete\r\n            </a> -->\r\n            </td>\r\n      </tr>\r\n      \r\n      </tbody>\r\n      \r\n      </table>\r\n      \r\n      </div>\r\n      </div>\r\n      \r\n      \r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n      <div class=\"dataTables_info\" id=\"autofill_info\" role=\"status\" aria-live=\"polite\">Show Entries\r\n      <label><select name=\"autofill_length\" aria-controls=\"autofill\" class=\"form-control input-sm\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> </label>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n      \r\n            <pagination-controls [responsive]=\"responsive\" directionLinks=\"true\"\r\n            autoHide=\"true\"\r\n            responsive=\"true\"\r\n            previousLabel=\"Previous\"\r\n            nextLabel=\"Next\" \r\n            screenReaderPaginationLabel=\"Pagination\"\r\n            screenReaderPageLabel=\"page\" \r\n            (pageChange)=\"pageChanged($event)\"></pagination-controls>\r\n      \r\n      </div>\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      <!-- <div class=\"col-xs-12 col-sm-12 col-md-7\"><div class=\"dataTables_paginate paging_simple_numbers\" id=\"autofill_paginate\"><ul class=\"pagination\"><li class=\"paginate_button page-item previous disabled\" id=\"autofill_previous\"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li><li class=\"paginate_button page-item active\"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"1\" tabindex=\"0\" class=\"page-link\">1</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">4</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"5\" tabindex=\"0\" class=\"page-link\">5</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"6\" tabindex=\"0\" class=\"page-link\">6</a></li><li class=\"paginate_button page-item next\" id=\"autofill_next\"><a href=\"#\" aria-controls=\"autofill\" data-dt-idx=\"7\" tabindex=\"0\" class=\"page-link\">Next</a></li></ul></div></div> -->\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      \r\n      \r\n      \r\n      </div>\r\n      </div>");

/***/ }),

/***/ "./src/app/pages/quizzes/add/add-quiz.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/quizzes/add/add-quiz.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group-addon {\n  padding: 4px 20px 4px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpenplcy9hZGQvRDpcXG1lYW5cXGFsbGFtLWNtcy9zcmNcXGFwcFxccGFnZXNcXHF1aXp6ZXNcXGFkZFxcYWRkLXF1aXouY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1aXp6ZXMvYWRkL2FkZC1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQXFCLHlCQUFBO0FDQXJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVpenplcy9hZGQvYWRkLXF1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7IHBhZGRpbmc6IDRweCAyMHB4IDRweCA1cHg7fVxyXG5cclxuXHJcbiIsIi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDRweCAyMHB4IDRweCA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/quizzes/add/add-quiz.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/quizzes/add/add-quiz.component.ts ***!
  \*********************************************************/
/*! exports provided: AddQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function() { return AddQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddQuizComponent = /** @class */ (function () {
    function AddQuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.newQuiz = {};
    }
    AddQuizComponent.prototype.ngOnInit = function () {
        this.quizs = this.getQuizs();
    };
    AddQuizComponent.prototype.getQuizs = function () {
        return this.quizService.getQuizsFromData();
    };
    AddQuizComponent.prototype.showAddQuizForm = function () {
        // resets form if edited user
        if (this.quizs.length) {
            this.newQuiz = {};
        }
        this.quizForm = true;
        this.isNewQuiz = true;
    };
    AddQuizComponent.prototype.saveQuiz = function (quiz) {
        //if (this.isNewQuiz) {
        // add a new quiz
        this.quizService.addQuiz(quiz);
        console.log('Quiz created!');
        //this.router.navigateByUrl('/quiz/');
        this.router.navigate(['/quiz']);
        //}
        this.quizForm = false;
    };
    AddQuizComponent.prototype.cancelNewQuiz = function () {
        this.newQuiz = {};
        this.quizForm = false;
    };
    AddQuizComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/add/add-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-quiz.component.scss */ "./src/app/pages/quizzes/add/add-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddQuizComponent);
    return AddQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/quizzes/edit/edit-quiz.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/quizzes/edit/edit-quiz.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group-addon {\n  padding: 4px 20px 4px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpenplcy9lZGl0L0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxxdWl6emVzXFxlZGl0XFxlZGl0LXF1aXouY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1aXp6ZXMvZWRpdC9lZGl0LXF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBcUIseUJBQUE7QUNDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6emVzL2VkaXQvZWRpdC1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7IHBhZGRpbmc6IDRweCAyMHB4IDRweCA1cHg7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgcGFkZGluZzogNHB4IDIwcHggNHB4IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/quizzes/edit/edit-quiz.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quizzes/edit/edit-quiz.component.ts ***!
  \***********************************************************/
/*! exports provided: EditQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuizComponent", function() { return EditQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditQuizComponent = /** @class */ (function () {
    function EditQuizComponent(quizService, activeAouter, router) {
        this.quizService = quizService;
        this.activeAouter = activeAouter;
        this.router = router;
        this.newQuiz = {};
        this.editedQuiz = {};
    }
    EditQuizComponent.prototype.ngOnInit = function () {
        //this.quizs = this.getQuizs();
        this.getDetail(this.activeAouter.snapshot.params['quizId']);
        //var ss = this.activeAouter.snapshot.params['quizId'];
        //console.log(ss);
    };
    /* getQuizs(): Quiz[] {
       return this.quizService.getQuizsFromData();
       this.quizService.showEditQuiz(id);
     }
   */
    /*showEditQuizForm(quiz: Quiz) {
      if (!quiz) {
        this.quizForm = false;
        return;
      }
      this.editQuizForm = true;
      this.editedQuiz = quiz;
    }*/
    EditQuizComponent.prototype.getDetail = function (id) {
        this.editedQuiz = this.quizService.showEditQuiz(id);
    };
    EditQuizComponent.prototype.updateQuiz = function () {
        //this.getDetail(this.activeAouter.snapshot.params['id']);
        this.quizService.updateQuiz(this.editedQuiz);
        this.editQuizForm = false;
        this.editedQuiz = {};
        console.log('Quiz created!');
        //this.router.navigateByUrl('/quiz/');
        this.router.navigate(['/quiz']);
    };
    EditQuizComponent.prototype.removeUser = function (user) {
        this.quizService.deleteQuiz(user);
    };
    EditQuizComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/edit/edit-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-quiz.component.scss */ "./src/app/pages/quizzes/edit/edit-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditQuizComponent);
    return EditQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/quizzes/list/list-quiz.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/quizzes/list/list-quiz.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#autofill_info {\n  margin-top: 0px;\n}\n\ndiv.dataTables_wrapper div.dataTables_info {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpenplcy9saXN0L0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxxdWl6emVzXFxsaXN0XFxsaXN0LXF1aXouY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1aXp6ZXMvbGlzdC9saXN0LXF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6emVzL2xpc3QvbGlzdC1xdWl6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNhdXRvZmlsbF9pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG5kaXYuZGF0YVRhYmxlc193cmFwcGVyIGRpdi5kYXRhVGFibGVzX2luZm8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4iLCIjYXV0b2ZpbGxfaW5mbyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuZGl2LmRhdGFUYWJsZXNfd3JhcHBlciBkaXYuZGF0YVRhYmxlc19pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/quizzes/list/list-quiz.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quizzes/list/list-quiz.component.ts ***!
  \***********************************************************/
/*! exports provided: ListQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuizComponent", function() { return ListQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/quiz.service */ "./src/app/services/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListQuizComponent = /** @class */ (function () {
    function ListQuizComponent(quizService, router) {
        //Create dummy data
        /*for (var i = 0; i < this.quizs.length; i++) {
          this.collection.data.push(
            {
              id: i + 1,
              value: "items number " + (i + 1)
            }
          );
        }*/
        this.quizService = quizService;
        this.router = router;
        this.config = {
            itemsPerPage: 3,
            currentPage: 1,
            totalItems: this.getQuizs().length
        };
    }
    ListQuizComponent.prototype.ngOnInit = function () {
        this.quizs = this.getQuizs();
    };
    ListQuizComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ListQuizComponent.prototype.getQuizs = function () {
        return this.quizService.getQuizsFromData();
    };
    ListQuizComponent.prototype.removeQuiz = function (quiz) {
        if (confirm("Are you sure to delete- " + quiz.title)) {
            this.quizService.deleteQuiz(quiz);
        }
    };
    ListQuizComponent.ctorParameters = function () { return [
        { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ListQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizzes/list/list-quiz.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-quiz.component.scss */ "./src/app/pages/quizzes/list/list-quiz.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListQuizComponent);
    return ListQuizComponent;
}());



/***/ }),

/***/ "./src/app/pages/quizzes/quiz-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/quizzes/quiz-routing.module.ts ***!
  \******************************************************/
/*! exports provided: QuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function() { return QuizRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list-quiz.component */ "./src/app/pages/quizzes/list/list-quiz.component.ts");
/* harmony import */ var _add_add_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add-quiz.component */ "./src/app/pages/quizzes/add/add-quiz.component.ts");
/* harmony import */ var _edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit-quiz.component */ "./src/app/pages/quizzes/edit/edit-quiz.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_quiz_component__WEBPACK_IMPORTED_MODULE_3__["ListQuizComponent"],
        data: {
            breadcrumb: 'quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: '',
            status: false
        }
    },
    {
        path: 'add-quiz',
        component: _add_add_quiz_component__WEBPACK_IMPORTED_MODULE_4__["AddQuizComponent"],
        data: {
            breadcrumb: 'Add quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'add Quiz',
            status: false
        }
    },
    {
        path: 'edit-quiz/:quizId',
        component: _edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_5__["EditQuizComponent"],
        data: {
            breadcrumb: 'Edit quiz',
            icon: 'icofont-table bg-c-blue',
            breadcrumb_caption: 'Edit quiz',
            status: false
        }
    }
];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/quizzes/quiz.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quizzes/quiz.module.ts ***!
  \**********************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-routing.module */ "./src/app/pages/quizzes/quiz-routing.module.ts");
/* harmony import */ var _list_list_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list-quiz.component */ "./src/app/pages/quizzes/list/list-quiz.component.ts");
/* harmony import */ var _add_add_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add-quiz.component */ "./src/app/pages/quizzes/add/add-quiz.component.ts");
/* harmony import */ var _edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-quiz.component */ "./src/app/pages/quizzes/edit/edit-quiz.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");








//import { BrowserModule } from '@angular/platform-browser';



var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuizRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                //BrowserModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]
            ],
            declarations: [
                _list_list_quiz_component__WEBPACK_IMPORTED_MODULE_4__["ListQuizComponent"],
                _add_add_quiz_component__WEBPACK_IMPORTED_MODULE_5__["AddQuizComponent"],
                _edit_edit_quiz_component__WEBPACK_IMPORTED_MODULE_6__["EditQuizComponent"]
            ]
        })
    ], QuizModule);
    return QuizModule;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizService = /** @class */ (function () {
    function QuizService() {
        this.uquiz = [
            {
                id: 1,
                title: 'Durgesh',
                category: 'Sceince',
                description: 'test test',
                isPublish: 'yes',
                status: 'active',
                insertDate: '31 Aug 2020'
            },
            {
                id: 2,
                title: 'Sudhir',
                category: 'Technology',
                description: 'test test again',
                isPublish: 'yes',
                status: 'active',
                insertDate: '31 Aug 2020'
            },
            {
                id: 3,
                title: 'Ashish',
                category: 'Technology',
                description: 'test test again',
                isPublish: 'yes',
                status: 'active',
                insertDate: '31 Aug 2020'
            },
            {
                id: 4,
                title: 'Prabhas',
                category: 'History',
                description: 'test test again',
                isPublish: 'yes',
                status: 'active',
                insertDate: '31 Aug 2020'
            },
            {
                id: 5,
                title: 'Santosh',
                category: 'Technology',
                description: 'test test again',
                isPublish: 'yes',
                status: 'active',
                insertDate: '31 Aug 2020'
            }
        ];
    }
    QuizService.prototype.getQuizsFromData = function () {
        return this.uquiz;
    };
    QuizService.prototype.showEditQuiz = function (id) {
        return this.uquiz.find(function (c) { return c.id == id; });
    };
    QuizService.prototype.addQuiz = function (quiz) {
        quiz.id = this.uquiz.length + 1;
        this.uquiz.unshift(quiz);
    };
    QuizService.prototype.updateQuiz = function (quiz) {
        var index = this.uquiz.findIndex(function (u) { return quiz.id === u.id; });
        this.uquiz[index] = quiz;
    };
    QuizService.prototype.deleteQuiz = function (quiz) {
        this.uquiz.splice(this.uquiz.indexOf(quiz), 1);
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuizService);
    return QuizService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-quizzes-quiz-module.js.map