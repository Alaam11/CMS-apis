(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"],{

/***/ "./src/app/pages/spinner/loading.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/spinner/loading.module.ts ***!
  \*************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _spinner_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner/loading */ "./src/app/pages/spinner/loading.ts");




var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_spinner_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                _spinner_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
            ],
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ }),

/***/ "./src/app/pages/spinner/loading.scss":
/*!********************************************!*\
  !*** ./src/app/pages/spinner/loading.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#spinner {\n  -webkit-animation: frames 1s infinite linear;\n  animation: frames 1s infinite linear;\n  background: transparent;\n  border: 1vw solid #FFF;\n  border-radius: 100%;\n  border-top-color: #DF691A;\n  width: 10vw;\n  height: 10vw;\n  opacity: 0.6;\n  padding: 0;\n  position: absolute;\n  z-index: 999;\n}\n\n@-webkit-keyframes frames {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes frames {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n\n#pause {\n  display: block;\n  background: rgba(0, 0, 0, 0.66) no-repeat 0 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Bpbm5lci9EOlxcbWVhblxcYWxsYW0tY21zL3NyY1xcYXBwXFxwYWdlc1xcc3Bpbm5lclxcbG9hZGluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGlubmVyL2xvYWRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLDRDQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRDs7QURFQTtFQUNFO0lBRUQsdUJBQUE7RUNDQztFRENBO0lBRUQseUJBQUE7RUNDQztBQUNGOztBRFRBO0VBQ0U7SUFFRCx1QkFBQTtFQ0NDO0VEQ0E7SUFFRCx5QkFBQTtFQ0NDO0FBQ0Y7O0FERUE7RUFDQyxjQUFBO0VBQ0EsNkNBQ0M7RUFHRCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwaW5uZXIvbG9hZGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNzcGlubmVyIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogZnJhbWVzIDFzIGluZmluaXRlIGxpbmVhcjtcclxuXHRhbmltYXRpb246IGZyYW1lcyAxcyBpbmZpbml0ZSBsaW5lYXI7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAxLjAwdncgc29saWQgI0ZGRjtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNERjY5MUE7XHJcblx0d2lkdGg6IDEwdnc7XHJcblx0aGVpZ2h0OiAxMHZ3O1xyXG5cdG9wYWNpdHk6IC42O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDk5OTtcclxufVxyXG5Aa2V5ZnJhbWVzIGZyYW1lcyB7XHJcbiAgMCUge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuI3BhdXNlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOlxyXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjY2KVxyXG5cdFx0bm8tcmVwZWF0XHJcblx0XHQwIDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG59XHJcbiIsIiNzcGlubmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZyYW1lcyAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogZnJhbWVzIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXZ3IHNvbGlkICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci10b3AtY29sb3I6ICNERjY5MUE7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDEwdnc7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBrZXlmcmFtZXMgZnJhbWVzIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbiNwYXVzZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjYpIG5vLXJlcGVhdCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/spinner/loading.ts":
/*!******************************************!*\
  !*** ./src/app/pages/spinner/loading.ts ***!
  \******************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading',
            template: "\t\t<div id=\"pause\" class=\"d-flex align-items-center justify-content-center\">\n\t\t\t\t\t\t\t\t\t<div id=\"spinner\"></div>\n\t\t\t\t\t\t\t\t</div>",
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.scss */ "./src/app/pages/spinner/loading.scss")).default]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/services/dc.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/dc.service.ts ***!
  \****************************************/
/*! exports provided: DcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DcService", function() { return DcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");







//import { Header } from '../models/header';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var DcService = /** @class */ (function () {
    function DcService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.allPassedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.sharedParam = this.allPassedData.asObservable();
    }
    DcService.prototype.storePassedObject = function (passedData) {
        this.allPassedData.next(passedData);
        console.log('this.allPassedData ' + JSON.stringify(this.allPassedData));
    };
    // here instead of reterieve like this you can directly subscribe the property in your compoents
    DcService.prototype.retrievePassedObject = function () {
        //console.log('this.retrieve '+JSON.stringify(this.allPassedData))
        //return this.allPassedData;
        return this.allPassedData.getValue();
    };
    DcService.prototype.addCompetition = function (competition, fileData) {
        console.log('competition', competition);
        console.log(fileData);
        //debugger;
        var realDateObject = new Date(competition.startDate);
        console.log(typeof realDateObject);
        var dd = realDateObject.getDate();
        var mm = realDateObject.getMonth();
        var yyyy = realDateObject.getFullYear();
        var hh = competition.slot_time.split(':')[0];
        var min = competition.slot_time.split(':')[1];
        var start_date_time = new Date(yyyy, mm, dd, hh, min);
        console.log(start_date_time);
        var endDateObject = new Date(competition.endDate);
        console.log(typeof endDateObject);
        var ddd = endDateObject.getDate();
        var mmm = endDateObject.getMonth();
        var yyyyy = endDateObject.getFullYear();
        var hh = competition.slot_time.split(':')[0];
        var min = competition.slot_time.split(':')[1];
        var end_date_time = new Date(yyyyy, mmm, ddd, hh, min);
        console.log(end_date_time);
        var waiting_time = '00:' + competition.minute_time + ':' + competition.second_time;
        //var narration_time = '00:'+competition.narration_minute_time+':'+competition.narration_second_time;
        var narration_time = '00:00:' + competition.narration_second_time;
        console.log('waiting_time', waiting_time);
        console.log('narration_time', narration_time);
        var formData = new FormData();
        formData.append("logo", competition.logo);
        formData.append("compitition_name", competition.competitionName);
        formData.append("description", competition.description);
        formData.append("start_date", competition.startDate);
        formData.append("start_date_time", start_date_time); //competition.startDate);
        formData.append("end_date_time", end_date_time); //competition.startDate);
        formData.append("end_date", competition.endDate);
        formData.append("start_time", competition.slot_time);
        formData.append("end_time", competition.slot_time);
        formData.append("promotion_type", competition.promotion_type);
        formData.append("instagram_url", competition.instragramUrl);
        formData.append("twitter_url", competition.twitterUrl);
        formData.append("snapchat_url", competition.snapchatUrl);
        formData.append("app_logo", competition.app_logo);
        formData.append("app_name", competition.app_name);
        formData.append("apple_store_url", competition.apple_store_url);
        formData.append("google_play_url", competition.google_play_url);
        formData.append("affiliate_url", competition.affiliate_url);
        formData.append("narration_type", competition.narration_type);
        formData.append("narration_url", competition.narration_url);
        formData.append("narration_text", competition.narration_text);
        formData.append("narration_time", narration_time);
        formData.append("company_logo", competition.company_logo);
        formData.append("company_name", competition.company_name);
        formData.append("company_link", competition.company_link);
        formData.append("company_about", competition.company_about);
        formData.append("live_stream_url", competition.live_stream_url);
        formData.append("gender", competition.gender);
        formData.append("age_range", competition.age_range);
        formData.append("city", competition.city);
        formData.append("state", competition.state);
        formData.append("country", competition.country);
        formData.append("nationality", competition.nationality);
        formData.append("area_locality", competition.area_locality);
        formData.append("push_notification", competition.push_notification);
        formData.append("title", competition.title);
        formData.append("image_upload", competition.image_upload);
        formData.append("audience_description", competition.audience_description);
        formData.append("slot_time", competition.slot_time);
        formData.append("competition_type", competition.competition_type);
        formData.append("status", 0);
        formData.append("waiting_time", waiting_time);
        formData.append("broadcaster_id", competition.broadcaster);
        formData.append("fileData", JSON.stringify(fileData));
        formData.append("bypass_audience", competition.bypass_audience);
        formData.append("notification_type", competition.notification_type);
        formData.append("notification_text", competition.notification_text);
        formData.append("notification_logo", competition.notification_logo);
        formData.append("apple_schema", competition.apple_schema);
        return this.http.post(apiUrl + 'competition/addCompetition', formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    DcService.prototype.updateCompetition = function (competition, competition_id) {
        console.log(competition);
        //console.log(competition.startDateTime.getDate());
        // var theDate = new Date(competition.startDateTime);
        // console.log(theDate.toDateString());
        var realDateObject = new Date(competition.startDate);
        console.log(typeof realDateObject);
        var dd = realDateObject.getDate();
        var mm = realDateObject.getMonth();
        var yyyy = realDateObject.getFullYear();
        var hh = competition.slot_time.split(':')[0];
        var min = competition.slot_time.split(':')[1];
        var start_date_time = new Date(yyyy, mm, dd, hh, min);
        console.log(start_date_time);
        var endDateObject = new Date(competition.endDate);
        console.log(typeof endDateObject);
        var ddd = endDateObject.getDate();
        var mmm = endDateObject.getMonth();
        var yyyyy = endDateObject.getFullYear();
        var hh = competition.slot_time.split(':')[0];
        var min = competition.slot_time.split(':')[1];
        var end_date_time = new Date(yyyyy, mmm, ddd, hh, min);
        console.log(end_date_time);
        var waiting_time = '00:' + competition.minute_time + ':' + competition.second_time;
        //var narration_time = '00:'+competition.narration_minute_time+':'+competition.narration_second_time;
        var narration_time = '00:00:' + competition.narration_second_time;
        console.log('waiting_time', waiting_time);
        console.log('narration_time', narration_time);
        //return;
        var formData = new FormData();
        formData.append("logo", competition.logo);
        formData.append("compitition_name", competition.competitionName);
        formData.append("description", competition.description);
        formData.append("start_date", competition.startDate);
        formData.append("start_date_time", start_date_time); //competition.startDate);
        formData.append("end_date_time", end_date_time); //competition.startDate);
        formData.append("end_date", competition.endDate);
        formData.append("start_time", competition.slot_time);
        formData.append("end_time", competition.slot_time);
        formData.append("promotion_type", competition.promotion_type);
        formData.append("instagram_url", competition.instragramUrl);
        formData.append("twitter_url", competition.twitterUrl);
        formData.append("snapchat_url", competition.snapchatUrl);
        formData.append("app_logo", competition.app_logo);
        formData.append("app_name", competition.app_name);
        formData.append("apple_store_url", competition.apple_store_url);
        formData.append("google_play_url", competition.google_play_url);
        formData.append("affiliate_url", competition.affiliate_url);
        formData.append("narration_type", competition.narration_type);
        formData.append("narration_url", competition.narration_url);
        formData.append("narration_text", competition.narration_text);
        formData.append("narration_time", narration_time);
        formData.append("company_logo", competition.company_logo);
        formData.append("company_name", competition.company_name);
        formData.append("company_link", competition.company_link);
        formData.append("company_about", competition.company_about);
        formData.append("live_stream_url", competition.live_stream_url);
        formData.append("gender", competition.gender);
        formData.append("age_range", competition.age_range);
        formData.append("city", competition.city);
        formData.append("state", competition.state);
        formData.append("country", competition.country);
        formData.append("nationality", competition.nationality);
        formData.append("area_locality", competition.area_locality);
        formData.append("push_notification", competition.push_notification);
        formData.append("title", competition.title);
        formData.append("image_upload", competition.image_upload);
        formData.append("audience_description", competition.audience_description);
        formData.append("slot_time", competition.slot_time);
        formData.append("competition_type", competition.competition_type);
        formData.append("status", 0);
        formData.append("waiting_time", waiting_time);
        formData.append("broadcaster_id", competition.broadcaster);
        formData.append("bypass_audience", competition.bypass_audience);
        formData.append("notification_type", competition.notification_type);
        formData.append("notification_text", competition.notification_text);
        formData.append("notification_logo", competition.notification_logo);
        formData.append("apple_schema", competition.apple_schema);
        return this.http.post(apiUrl + 'competition/updateCompetition/' + competition_id, formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    DcService.prototype.getCountry = function () {
        return this.http.get(apiUrl + 'competition/get_country');
    };
    DcService.prototype.getNationality = function () {
        return this.http.get(apiUrl + 'competition/get_nationality');
    };
    DcService.prototype.getBroadcaster = function () {
        return this.http.get(apiUrl + 'competition/get-broadcaster');
    };
    DcService.prototype.getBroadcasterData = function (broadcaster_id) {
        return this.http.get(apiUrl + 'competition/get-broadcaster-data/' + broadcaster_id);
    };
    DcService.prototype.getSlot = function () {
        return this.http.get(apiUrl + 'competition/competition-slot');
    };
    DcService.prototype.getSlotSpecial = function () {
        return this.http.get(apiUrl + 'competition/competition-slot-special');
    };
    DcService.prototype.getList = function () {
        return this.http.get(apiUrl + 'competition/get_list');
    };
    DcService.prototype.getSpecialList = function () {
        return this.http.get(apiUrl + 'competition/get_special_list');
    };
    DcService.prototype.editCompetition = function (id) {
        return this.http.get(apiUrl + 'competition/edit_competition/' + id);
    };
    DcService.prototype.updateQuestionCompetition = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(apiUrl + 'competition/update_question_competition', question);
    };
    DcService.prototype.updateStatus = function (status, competition_id) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('status', status);
        return this.http.post(apiUrl + 'competition/update_status/' + competition_id, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    DcService.prototype.deleteQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'competition/delete_question/' + id);
    };
    DcService.prototype.deleteCompetition = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'competition/delete_competition/' + id);
    };
    DcService.prototype.getQuizReportsName = function (competition_type) {
        return this.http.get(apiUrl + 'competition/reports_competition_name/' + competition_type);
    };
    DcService.prototype.getQuizReports = function (reportFilter) {
        console.log('reportFilter', reportFilter);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('competition_id', reportFilter.competitionId)
            .set('competition_type', reportFilter.competitionType)
            .set('created_at', reportFilter.created_at);
        return this.http.post(apiUrl + 'competition/quiz_reports', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        });
    };
    DcService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DcService);
    return DcService;
}());

// export class DcService{
//   //allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
//   //private paramSource = new BehaviorSubject<any>(null);
//   //sharedParam = this.paramSource.asObservable();
//   //private paramSource = new ReplaySubject(1);
//   /*private paramSource = new BehaviorSubject<any>({
//     firstName: 'Kevin',
//     email: 'ksmith@fanreact.com',
//     g: 'M'
//   });*/
//   //sharedParam = this.paramSource.asObservable();
//   // private fileData = new BehaviorSubject<any>(null);
//   // sharedParam = this.fileData.asObservable();
//  //private employeeData= new BehaviorSubject<any>(null);
//   private data = new BehaviorSubject<any>("")
//   currentData = this.data.asObservable();
// 	constructor() { }
//   setData(data) {
//       this.data.next(data);
//       console.log('--datat--')
//       console.log(data)
//   }
//    /* getEvent(): Observable<any> {
//         return this.employeeData.asObservable();
//     }
//     setEvent(param: any): void {
//         this.employeeData.next(param);
//     }*/
//   /*changeParam(param: any[]) {
//     this.fileData.next(param)
//   }*/
// 	/*storePassedObject(passedData) {
//     this.allPassedData.next(passedData);
//      console.log('--service--')
//      console.log(passedData)
//   }
//   // here instead of reterieve like this you can directly subscribe the property in your compoents
//   retrievePassedObject() {
//       return this.allPassedData;
//   }
//   getNewUserInfo() {
//     return this.paramSource.asObservable();
//   }*/
// }


/***/ })

}]);
//# sourceMappingURL=default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134.js.map