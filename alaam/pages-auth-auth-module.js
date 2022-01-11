(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Authentication',
            status: false
        },
        children: [
            {
                path: 'login',
                loadChildren: function () { return __webpack_require__.e(/*! import() | login-basic-login-basic-login-module */ "login-basic-login-basic-login-module").then(__webpack_require__.bind(null, /*! ./login/basic-login/basic-login.module */ "./src/app/pages/auth/login/basic-login/basic-login.module.ts")).then(function (m) { return m.BasicLoginModule; }); }
            },
            {
                path: 'registration',
                loadChildren: function () { return Promise.all(/*! import() | registration-basic-reg-basic-reg-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-basic-reg-basic-reg-module")]).then(__webpack_require__.bind(null, /*! ./registration/basic-reg/basic-reg.module */ "./src/app/pages/auth/registration/basic-reg/basic-reg.module.ts")).then(function (m) { return m.BasicRegModule; }); }
            },
            {
                path: 'forgotpassword',
                loadChildren: function () { return __webpack_require__.e(/*! import() | forgot-basic-forgot-basic-forgot-module */ "forgot-basic-forgot-basic-forgot-module").then(__webpack_require__.bind(null, /*! ./forgot/basic-forgot/basic-forgot.module */ "./src/app/pages/auth/forgot/basic-forgot/basic-forgot.module.ts")).then(function (m) { return m.BasicForgotModule; }); }
            },
            {
                path: 'resetpassword/:userId',
                loadChildren: function () { return Promise.all(/*! import() | forgot-reset-reset-module */[__webpack_require__.e("common"), __webpack_require__.e("forgot-reset-reset-module")]).then(__webpack_require__.bind(null, /*! ./forgot/reset/reset.module */ "./src/app/pages/auth/forgot/reset/reset.module.ts")).then(function (m) { return m.ResetModule; }); }
            },
            {
                path: 'thanks',
                loadChildren: function () { return __webpack_require__.e(/*! import() | thanks-thanks-module */ "thanks-thanks-module").then(__webpack_require__.bind(null, /*! ./thanks/thanks.module */ "./src/app/pages/auth/thanks/thanks.module.ts")).then(function (m) { return m.ThanksModule; }); }
            },
            {
                path: 'verify/:userId',
                loadChildren: function () { return __webpack_require__.e(/*! import() | verify-verify-module */ "verify-verify-module").then(__webpack_require__.bind(null, /*! ./verify/verify.module */ "./src/app/pages/auth/verify/verify.module.ts")).then(function (m) { return m.VerifyModule; }); }
            },
            {
                path: 'generate_pswd/:userId',
                loadChildren: function () { return Promise.all(/*! import() | generatepswd-generatepswd-module */[__webpack_require__.e("common"), __webpack_require__.e("generatepswd-generatepswd-module")]).then(__webpack_require__.bind(null, /*! ./generatepswd/generatepswd.module */ "./src/app/pages/auth/generatepswd/generatepswd.module.ts")).then(function (m) { return m.GeneratepswdModule; }); }
            },
            {
                path: 'survey-viewer/:parent/:id/:user_id',
                loadChildren: function () { return Promise.all(/*! import() | survey-viewer-survey-viewer-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-referendum-referendum-module~survey-vie~80c85670"), __webpack_require__.e("survey-viewer-survey-viewer-module")]).then(__webpack_require__.bind(null, /*! ./survey-viewer/survey-viewer.module */ "./src/app/pages/auth/survey-viewer/survey-viewer.module.ts")).then(function (m) { return m.SurveyViewerModule; }); }
            },
            {
                path: 'studyexam-downlad/:parent/:mode/:quiz_temp_id',
                loadChildren: function () { return Promise.all(/*! import() | studyexam-downlad-studyexam-downlad-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("studyexam-downlad-studyexam-downlad-module")]).then(__webpack_require__.bind(null, /*! ./studyexam-downlad/studyexam-downlad.module */ "./src/app/pages/auth/studyexam-downlad/studyexam-downlad.module.ts")).then(function (m) { return m.StudyExamDownloadModule; }); }
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map