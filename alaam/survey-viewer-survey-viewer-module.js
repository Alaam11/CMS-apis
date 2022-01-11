(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-viewer-survey-viewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/survey-viewer/survey-viewer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/survey-viewer/survey-viewer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row11\">\r\n<div class=\"col-sm-12\"  id=\"survey-viewer-container\">\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <div class=\"dt-responsive table-responsive11\">\r\n      <div id=\"autofill_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n        <!-- survey create wrap-->\r\n        <div class=\"sv_main sv_frame \">\r\n          <h2 class=\" \"> {{surveyName}}</h2>\r\n          <div class=\"sv_container\">\r\n           \r\n            <div class=\"sv_body\" style=\"border-top: 0px;\">\r\n              <survey [json]=\"json\" (submitSurvey)=\"sendData($event)\"></survey>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<style>\r\n.sv_qstn .sv-q-col-1, .sv-question .sv-q-col-1, .sv_qcbc .sv_q_radiogroup.sv-q-col-1 {padding-right: 0em!important;}\r\n\r\n</style>\r\n");

/***/ }),

/***/ "./src/app/pages/auth/survey-viewer/survey-viewer-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/survey-viewer/survey-viewer-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SurveyViewerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyViewerRoutingModule", function() { return SurveyViewerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _survey_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-viewer.component */ "./src/app/pages/auth/survey-viewer/survey-viewer.component.ts");




var routes = [
    {
        path: '',
        component: _survey_viewer_component__WEBPACK_IMPORTED_MODULE_3__["SurveyViewerComponent"],
        data: {
            title: 'Survey Viewer Component'
        }
    }
];
var SurveyViewerRoutingModule = /** @class */ (function () {
    function SurveyViewerRoutingModule() {
    }
    SurveyViewerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SurveyViewerRoutingModule);
    return SurveyViewerRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/survey-viewer/survey-viewer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/survey-viewer/survey-viewer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sv_main.sv_frame .sv_container {\n  max-width: 100% !important;\n  padding: 0 !important;\n}\n\n#survey-viewer-container {\n  margin-top: 15px;\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n#survey-viewer-container .sv_main.sv_default_css .sv_body {\n  border-top: 0px !important;\n}\n\n#survey-viewer-container .sv_q_radiogroup, .sv_qstn .sv-q-col-1 {\n  padding-right: 0 !important;\n}\n\nh2 {\n  padding: 15px 15px;\n  margin-bottom: 0px;\n  color: #4d4d4d;\n  font-size: 28px !important;\n}\n\n.sv_main.sv_default_css .sv_container .sv_body .sv_p_root .sv_qcbc .sv_q_radiogroup.sv-q-col-1 .sv_q_radiogroup_label input[type=radio] {\n  margin-left: 0.55em !important;\n  margin-right: 0em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zdXJ2ZXktdmlld2VyL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxzdXJ2ZXktdmlld2VyXFxzdXJ2ZXktdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL3N1cnZleS12aWV3ZXIvc3VydmV5LXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFpQywwQkFBQTtFQUEyQixxQkFBQTtBQ0c1RDs7QURGQTtFQUEyQixnQkFBQTtFQUFpQix5QkFBQTtFQUEwQiw0QkFBQTtBQ1F0RTs7QURQQTtFQUE0RCwwQkFBQTtBQ1c1RDs7QURWQTtFQUFpRSwyQkFBQTtBQ2NqRTs7QURaQTtFQUFLLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLGNBQUE7RUFDekMsMEJBQUE7QUNrQko7O0FEakJBO0VBRUksOEJBQUE7RUFDQSw0QkFBQTtBQ21CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc3VydmV5LXZpZXdlci9zdXJ2ZXktdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2X21haW4uc3ZfZnJhbWUgLnN2X2NvbnRhaW5lciB7bWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDsgcGFkZGluZzogMCFpbXBvcnRhbnQ7fVxyXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgeyBtYXJnaW4tdG9wOjE1cHg7IGRpcmVjdGlvbjogcnRsIWltcG9ydGFudDsgdGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnQ7fVxyXG4jc3VydmV5LXZpZXdlci1jb250YWluZXIgLnN2X21haW4uc3ZfZGVmYXVsdF9jc3MgLnN2X2JvZHkgeyBib3JkZXItdG9wOiAwcHghaW1wb3J0YW50OyB9XHJcbiNzdXJ2ZXktdmlld2VyLWNvbnRhaW5lciAuc3ZfcV9yYWRpb2dyb3VwLCAuc3ZfcXN0biAuc3YtcS1jb2wtMSB7cGFkZGluZy1yaWdodDogMCFpbXBvcnRhbnQ7fVxyXG5cclxuaDIgeyBwYWRkaW5nOiAxNXB4IDE1cHg7IG1hcmdpbi1ib3R0b206IDBweDsgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgICBmb250LXNpemU6IDI4cHghaW1wb3J0YW50OyB9XHJcbi5zdl9tYWluLnN2X2RlZmF1bHRfY3NzIC5zdl9jb250YWluZXIgLnN2X2JvZHkgLnN2X3Bfcm9vdCAuc3ZfcWNiYyAuc3ZfcV9yYWRpb2dyb3VwLnN2LXEtY29sLTEgXHJcbi5zdl9xX3JhZGlvZ3JvdXBfbGFiZWwgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNTVlbSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBlbSFpbXBvcnRhbnQ7XHJcbn0iLCIuc3ZfbWFpbi5zdl9mcmFtZSAuc3ZfY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuI3N1cnZleS12aWV3ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlyZWN0aW9uOiBydGwgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuI3N1cnZleS12aWV3ZXItY29udGFpbmVyIC5zdl9tYWluLnN2X2RlZmF1bHRfY3NzIC5zdl9ib2R5IHtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzdXJ2ZXktdmlld2VyLWNvbnRhaW5lciAuc3ZfcV9yYWRpb2dyb3VwLCAuc3ZfcXN0biAuc3YtcS1jb2wtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xufVxuXG4uc3ZfbWFpbi5zdl9kZWZhdWx0X2NzcyAuc3ZfY29udGFpbmVyIC5zdl9ib2R5IC5zdl9wX3Jvb3QgLnN2X3FjYmMgLnN2X3FfcmFkaW9ncm91cC5zdi1xLWNvbC0xIC5zdl9xX3JhZGlvZ3JvdXBfbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBtYXJnaW4tbGVmdDogMC41NWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMGVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/survey-viewer/survey-viewer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/survey-viewer/survey-viewer.component.ts ***!
  \*********************************************************************/
/*! exports provided: SurveyViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyViewerComponent", function() { return SurveyViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");


//import { CategoryService } from '../../../services/referendum.service';


//import {OrderBy} from "../../../pipes/orderBy"

var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var SurveyViewerComponent = /** @class */ (function () {
    function SurveyViewerComponent(router, activeroute, alertService) {
        this.router = router;
        this.activeroute = activeroute;
        this.alertService = alertService;
        this.parent = "";
        this.surveyName = "";
        this.json = "{}";
        this.surveyId = 0;
        this.userId = 0;
    }
    SurveyViewerComponent.prototype.ngOnInit = function () {
        this.parent = this.activeroute.snapshot.params['parent'];
        this.surveyId = this.activeroute.snapshot.params['id'];
        this.userId = this.activeroute.snapshot.params['user_id'];
        console.log(this.userId);
        if (this.parent != "admin" && typeof (this.userId) == "undefined") {
            this.userId = 0;
            alert('User is not logged in');
        }
        //console.log(this.surveyId);
        this.getSurvey(this.surveyId);
        this.getSurveyName(this.surveyId);
    };
    SurveyViewerComponent.prototype.getSurveyName = function (surveyId) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl + "survay/getSurveyName?surveyId=" + this.surveyId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : {};
            //console.log(result);
            self.surveyName = result[0];
        };
        xhr.send();
    };
    SurveyViewerComponent.prototype.sendData = function (results) {
        console.log(results);
        var self = this;
        var data = { postId: this.surveyId, surveyResult: results, userId: this.userId };
        console.log(data);
        //debugger;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", apiUrl + "survay/post");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    };
    SurveyViewerComponent.prototype.getSurvey = function (surveyId) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl + "survay/getSurvey?surveyId=" + this.surveyId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : {};
            self.json = result;
        };
        xhr.send();
    };
    SurveyViewerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    SurveyViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referendum',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/survey-viewer/survey-viewer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-viewer.component.scss */ "./src/app/pages/auth/survey-viewer/survey-viewer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], SurveyViewerComponent);
    return SurveyViewerComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/survey-viewer/survey-viewer.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/survey-viewer/survey-viewer.module.ts ***!
  \******************************************************************/
/*! exports provided: SurveyViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyViewerModule", function() { return SurveyViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _survey_viewer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-viewer-routing.module */ "./src/app/pages/auth/survey-viewer/survey-viewer-routing.module.ts");
/* harmony import */ var _survey_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-viewer.component */ "./src/app/pages/auth/survey-viewer/survey-viewer.component.ts");
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey.component */ "./src/app/pages/auth/survey-viewer/survey.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var SurveyViewerModule = /** @class */ (function () {
    function SurveyViewerModule() {
    }
    SurveyViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _survey_viewer_routing_module__WEBPACK_IMPORTED_MODULE_3__["SurveyViewerRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_survey_component__WEBPACK_IMPORTED_MODULE_5__["SurveyComponent"], _survey_viewer_component__WEBPACK_IMPORTED_MODULE_4__["SurveyViewerComponent"]]
        })
    ], SurveyViewerModule);
    return SurveyViewerModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/survey-viewer/survey.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/survey-viewer/survey.component.ts ***!
  \**************************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! surveyjs-widgets */ "./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__);




surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jquerybarrating"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
surveyjs_widgets__WEBPACK_IMPORTED_MODULE_3__["jqueryuidatepicker"](survey_angular__WEBPACK_IMPORTED_MODULE_2__);
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
survey_angular__WEBPACK_IMPORTED_MODULE_2__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
survey_angular__WEBPACK_IMPORTED_MODULE_2__["StylesManager"].applyTheme("default");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
        this.submitSurvey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SurveyComponent.prototype, "json", {
        get: function () {
            return this._json;
        },
        set: function (value) {
            this._json = value;
            if (typeof (value) == "object" && Object.keys(value).length > 0) {
                this.surveyView();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent.prototype.surveyView = function () {
        var _this = this;
        var surveyModel = new survey_angular__WEBPACK_IMPORTED_MODULE_2__["Model"](this.json);
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement("button");
            btn.className = "btn btn-info btn-xs";
            btn.innerHTML = "More Info";
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector("h5");
            var span = document.createElement("span");
            span.innerHTML = "  ";
            header.appendChild(span);
            header.appendChild(btn);
        });
        surveyModel.onComplete.add(function (result, options) {
            _this.submitSurvey.emit(result.data);
            _this.result = result.data;
        });
        survey_angular__WEBPACK_IMPORTED_MODULE_2__["SurveyNG"].render("surveyElement", { model: surveyModel });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyComponent.prototype, "submitSurvey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SurveyComponent.prototype, "_json", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SurveyComponent.prototype, "json", null);
    SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: "survey",
            template: "<div class=\"survey-container contentcontainer codecontainer\">\n    <div id=\"surveyElement\"></div>\n  </div>",
        })
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=survey-viewer-survey-viewer-module.js.map