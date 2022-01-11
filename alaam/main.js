(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n<toaster-container></toaster-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"deviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vNavigationView\"\r\n     (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\r\n          <a class=\"mobile-menu\" id=\"mobile-collapse\" href=\"javascript:;\" (click)=\"toggleOpened()\" [exclude]=\"'#main_navbar'\" (clickOutside)=\"onClickedOutside($event)\">\r\n            <i class=\"ti-menu\"></i>\r\n          </a>\r\n          <a [routerLink]=\"[dashboard_url()]\">\r\n            <img class=\"img-fluid\" src=\"assets/images/allam.png\" alt=\"Allam\"/>\r\n          </a>\r\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n            <i class=\"ti-more\"></i>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-container\">\r\n          <div>\r\n            <ul class=\"nav-left\">\r\n              <li>\r\n                <div class=\"sidebar_toggle\"><a href=\"javascript:;\" (click)=\"toggleOpened()\"><i class=\"ti-menu f-18\"></i></a></div>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:;\" appToggleFullScreen>\r\n                  <i class=\"ti-fullscreen\"></i>\r\n                </a>\r\n              </li>\r\n              \r\n            </ul>\r\n            \r\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n             <!--  <li class=\"header-notification lng-dropdown\">\r\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\r\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                </a>\r\n               <ul class=\"show-notification\">\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"en\">\r\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"es\">\r\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"pt\">\r\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:;\" data-lng=\"fr\">\r\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\">\r\n                  <i class=\"ti-bell\"></i>\r\n                  <span class=\"badge bg-c-pink\"></span>\r\n                </a>\r\n                \r\n              </li>\r\n              <li class=\"header-notification\">\r\n                <a href=\"javascript:;\" (click)=\"toggleChat()\" class=\"displayChatbox\">\r\n                  <i class=\"ti-comments\"></i>\r\n                  <span class=\"badge bg-c-green\"></span>\r\n                </a>\r\n              </li>-->\r\n              <li class=\"user-profile header-notification\">\r\n                <a [routerLink]=\"['/dashboard']\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                  <span>{{global_username}}</span>\r\n                  <i class=\"ti-angle-down\"></i>\r\n                </a>\r\n                <ul class=\"show-notification profile-notification\">\r\n                  <li>\r\n                    <a [routerLink]=\"['/setting']\">\r\n                      <i class=\"ti-settings\"></i> Settings\r\n                    </a>\r\n                  </li>\r\n                 <!--  <li>\r\n                    <a [routerLink]=\"['/user/profile']\">\r\n                      <i class=\"ti-user\"></i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a [routerLink]=\"['/advance/notifications']\">\r\n                      <i class=\"ti-email\"></i> My Messages\r\n                    </a>\r\n                  </li> -->\r\n                  \r\n                  <li>\r\n                    <a (click)=\"logout()\" href=\"javascript:void(0);\">\r\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- rightbar chat start -->\r\n    \r\n    <!-- right-bar inner chat end -->\r\n\r\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"headerFixedMargin\">\r\n      <div class=\"pcoded-wrapper\">\r\n        <nav id=\"main_navbar\" class=\" pcoded-navbar\" (clickOutside)=\"onClickedOutside($event)\" [exclude]=\"'#mobile-collapse'\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.navbar-theme]=\"navBarTheme\" [attr.active-item-theme]=\"activeItemTheme\" sub-item-theme=\"theme2\" active-item-style=\"style0\" [attr.pcoded-navbar-position]=\"pcodedSidebarPosition\">\r\n          <div class=\"sidebar_toggle\"><a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a></div>\r\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\r\n            \r\n            <div class=\"pcoded-search\">\r\n              <span class=\"searchbar-toggle\">  </span>\r\n              <div class=\"pcoded-search-box \">\r\n                <input type=\"text\" placeholder=\"Search\">\r\n                <span class=\"search-icon\"><i class=\"ti-search\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            \r\n            <perfect-scrollbar [style.max-width]=\"'100%'\" [style.max-height]=\"'calc(100vh - 230px)'\" [config]=\"config\">\r\n              <div *ngFor=\"let asideItems of menuItems.getAll()\" class=\"d-color\">\r\n                <div class=\"pcoded-navigatio-lavel\" [attr.menu-title-theme]=\"menuTitleTheme\">{{asideItems.label}}</div>\r\n                <ul class=\"pcoded-item pcoded-left-item\" [attr.item-border]=\"itemBorder\" [attr.item-border-style]=\"itemBorderStyle\" [attr.subitem-border]=\"subItemBorder\" *ngFor=\"let asideItem of asideItems.main\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a href=\"{{asideItem.external}}\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link' && checkPermission(asideItem.menukey)==true\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a [routerLink]=\"['/', asideItem.main_state, asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle *ngIf=\"asideItem.main_state; else mainContent\">\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                    <ng-template #mainContent>\r\n\r\n                      <a [routerLink]=\"['/', asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\r\n                        <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                        <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                        <span class=\"pcoded-mcaret\"></span>\r\n                      </a>\r\n\r\n\r\n                    </ng-template>\r\n                  </li>\r\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'sub' && checkPermission(asideItem.menukey)==true\" class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a [routerLinkActive]=\"['active']\" href=\"javascript:;\" appAccordionToggle>\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                    <ul class=\"pcoded-submenu\">\r\n                      <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\r\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub'\">\r\n                          <a [routerLink]=\"['/', asideItem.state, asideChildren.state]\" target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\r\n                            <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\r\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\r\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                            <span class=\"pcoded-mcaret\"></span>\r\n                          </a>\r\n                        </li>\r\n\r\n                        <li [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\" *ngIf=\"asideChildren.type === 'sub' && checkPermission(asideItem.menukey)==true\" appAccordionLink group=\"sub-toggled\">\r\n                          <a href=\"javascript:;\" appAccordionToggle>\r\n                            <span class=\"pcoded-micon\"><i class=\"ti-direction-alt\"></i></span>\r\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\r\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                            <span class=\"pcoded-mcaret\"></span>\r\n                          </a>\r\n                          <ul class=\"pcoded-submenu\">\r\n                            <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\r\n                              <li [routerLinkActive]=\"['active']\">\r\n                                <a [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\" target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\r\n                                  <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\r\n                                  <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\r\n                                  <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\" class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\r\n                                  <span class=\"pcoded-mcaret\"></span>\r\n                                </a>\r\n                              </li>\r\n                            </ng-template>\r\n                          </ul>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ul>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </perfect-scrollbar>\r\n          </div>\r\n        </nav>\r\n        <div class=\"pcoded-content\">\r\n          <div class=\"pcoded-inner-content\">\r\n            <div class=\"main-body\">\r\n              <div class=\"page-wrapper\">\r\n                <app-title></app-title>\r\n                <app-breadcrumbs></app-breadcrumbs>\r\n                <div class=\"page-body\">\r\n                  <router-outlet>\r\n                    <app-spinner></app-spinner>\r\n                  </router-outlet>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page-header start -->\r\n<div class=\"\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last\">\r\n  <div class=\"page-header card\" *ngIf=\"breadcrumb.status && last\">\r\n    <div class=\"row align-items-end\" *ngIf=\"last\">\r\n      <div class=\"col-lg-8\">\r\n        <div class=\"page-header-title\">\r\n          <span *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"><i class=\"icofont {{ breadcrumb.icon }}\" *ngIf=\"last\"></i></span>\r\n          <div class=\"d-inline\">\r\n            <span class=\"d-block\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"><h4 *ngIf=\"last\">{{ breadcrumb.label }}</h4></span>\r\n            <span *ngIf=\"breadcrumb.caption\">{{ breadcrumb.caption }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"page-header-breadcrumb\">\r\n          <ul class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n              <a [routerLink]=\"'/'\">\r\n                <i class=\"icofont icofont-home\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs;\">\r\n\r\n              <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page-header end -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet><app-spinner></app-spinner></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\r\n  <div class=\"card-header\" *ngIf=\"title\">\r\n    <h5>{{ title }}</h5>\r\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\r\n    <span *ngIf=\"classHeader\">\r\n      <ng-content select=\".code-header\"></ng-content>\r\n    </span>\r\n    <div class=\"card-header-right\">\r\n      <ul class=\"list-unstyled card-option\">\r\n        <li *ngIf=\"!isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-left\"></i></li>\r\n        <li *ngIf=\"isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-right\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-maximize {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-minus minimize-card\" appCardToggleEvent (click)=\"toggleCard($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-refresh reload-card\" (click)=\"appCardRefresh($event)\" ></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-error close-card\" (click)=\"closeCard($event)\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div [@cardToggle]=\"cardToggle\">\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"icofont icofont-refresh rotate-refresh\"></i></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\r\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\r\n<ng-template #backDropOver>\r\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\r\n    <div class=\"modal-content\">\r\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\r\n        <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\".app-modal-body\"></ng-content>\r\n      </div>\r\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\r\n        <ng-content select=\".app-modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!--sk-cube-grid-->\r\n        <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\r\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-rotating-plane-->\r\n        <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\r\n        <!--sk-double-bounce-->\r\n        <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\r\n            <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-wave-->\r\n        <div class=\"theme-loader\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\r\n            <!--<div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>-->\r\n            <!--<div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>-->\r\n            <!--<div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>-->\r\n            <!--<div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>-->\r\n            <!--<div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>-->\r\n          <!-- Pre-loader start -->\r\n            <div class=\"ball-scale\">\r\n              <div class='contain'>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n                <div class=\"ring\"><div class=\"frame\"></div></div>\r\n              </div>\r\n            </div>\r\n          <!-- Pre-loader end -->\r\n\r\n        </div>\r\n        <!--sk-wandering-cubes-->\r\n        <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\r\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-spinner-pulse-->\r\n        <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\r\n        <!--sk-chasing-dots-->\r\n        <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\r\n            <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-three-bounce-->\r\n        <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");






var routes = [
    {
        path: '',
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            {
                path: '',
                redirectTo: 'authentication/login',
                pathMatch: 'full',
            },
            {
                path: 'authentication',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() | pages-dashboard-dashboard-default-dashboard-default-module */[__webpack_require__.e("default~pages-dashboard-dashboard-default-dashboard-default-module~pages-referendum-referendum-modul~c101ec06"), __webpack_require__.e("pages-dashboard-dashboard-default-dashboard-default-module")]).then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard-default/dashboard-default.module */ "./src/app/pages/dashboard/dashboard-default/dashboard-default.module.ts")).then(function (m) { return m.DashboardDefaultModule; }); },
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'role',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-roles-role-module */ "pages-roles-role-module").then(__webpack_require__.bind(null, /*! ./pages/roles/role.module */ "./src/app/pages/roles/role.module.ts")).then(function (m) { return m.RoleModule; }); },
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'category',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-category-category-module */ "pages-category-category-module").then(__webpack_require__.bind(null, /*! ./pages/category/category.module */ "./src/app/pages/category/category.module.ts")).then(function (m) { return m.CategoryModule; }); },
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'header',
                loadChildren: function () { return Promise.all(/*! import() | pages-header-header-module */[__webpack_require__.e("default~pages-header-header-module~pages-league-league-module"), __webpack_require__.e("pages-header-header-module")]).then(__webpack_require__.bind(null, /*! ./pages/header/header.module */ "./src/app/pages/header/header.module.ts")).then(function (m) { return m.HeaderModule; }); },
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'daily',
                loadChildren: function () { return Promise.all(/*! import() | pages-daily-competition-daily-competition-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("pages-daily-competition-daily-competition-module")]).then(__webpack_require__.bind(null, /*! ./pages/daily-competition/daily-competition.module */ "./src/app/pages/daily-competition/daily-competition.module.ts")).then(function (m) { return m.DailyCompetitionModule; }); },
            },
            {
                path: 'study-exam',
                loadChildren: function () { return Promise.all(/*! import() | pages-study-exam-question-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("default~pages-general-competition-general-competition-module~pages-question-question-module~pages-st~6ed52d2d"), __webpack_require__.e("pages-study-exam-question-module")]).then(__webpack_require__.bind(null, /*! ./pages/study-exam/question.module */ "./src/app/pages/study-exam/question.module.ts")).then(function (m) { return m.QuestionModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'special',
                loadChildren: function () { return Promise.all(/*! import() | pages-special-competition-special-competition-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("pages-special-competition-special-competition-module")]).then(__webpack_require__.bind(null, /*! ./pages/special-competition/special-competition.module */ "./src/app/pages/special-competition/special-competition.module.ts")).then(function (m) { return m.SpecialCompetitionModule; }); },
            },
            {
                path: 'league',
                loadChildren: function () { return Promise.all(/*! import() | pages-league-league-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("default~pages-header-header-module~pages-league-league-module"), __webpack_require__.e("pages-league-league-module")]).then(__webpack_require__.bind(null, /*! ./pages/league/league.module */ "./src/app/pages/league/league.module.ts")).then(function (m) { return m.LeagueCompetitionModule; }); },
                canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'reports',
                loadChildren: function () { return Promise.all(/*! import() | pages-reports-reports-module */[__webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("default~pages-dashboard-dashboard-default-dashboard-default-module~pages-referendum-referendum-modul~c101ec06"), __webpack_require__.e("pages-reports-reports-module")]).then(__webpack_require__.bind(null, /*! ./pages/reports/reports.module */ "./src/app/pages/reports/reports.module.ts")).then(function (m) { return m.ReportsModule; }); },
            },
            {
                path: 'referendum',
                loadChildren: function () { return Promise.all(/*! import() | pages-referendum-referendum-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-referendum-referendum-module~survey-vie~80c85670"), __webpack_require__.e("default~pages-dashboard-dashboard-default-dashboard-default-module~pages-referendum-referendum-modul~c101ec06"), __webpack_require__.e("pages-referendum-referendum-module")]).then(__webpack_require__.bind(null, /*! ./pages/referendum/referendum.module */ "./src/app/pages/referendum/referendum.module.ts")).then(function (m) { return m.ReferendumModule; }); },
            },
            {
                path: 'admin-referendum',
                loadChildren: function () { return Promise.all(/*! import() | pages-admin-referendum-admin-referendum-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-referendum-referendum-module~survey-vie~80c85670"), __webpack_require__.e("pages-admin-referendum-admin-referendum-module")]).then(__webpack_require__.bind(null, /*! ./pages/admin-referendum/admin-referendum.module */ "./src/app/pages/admin-referendum/admin-referendum.module.ts")).then(function (m) { return m.AdminReferendumModule; }); },
            },
            {
                path: 'mobile-users',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-mobile-users-mobile-users-module */ "pages-mobile-users-mobile-users-module").then(__webpack_require__.bind(null, /*! ./pages/mobile-users/mobile-users.module */ "./src/app/pages/mobile-users/mobile-users.module.ts")).then(function (m) { return m.MobileUsersModule; }); },
            },
            {
                path: 'sub-category',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-subcategory-subcategory-module */ "pages-subcategory-subcategory-module").then(__webpack_require__.bind(null, /*! ./pages/subcategory/subcategory.module */ "./src/app/pages/subcategory/subcategory.module.ts")).then(function (m) { return m.SubCategoryModule; }); },
            },
            {
                path: 'quiz',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-quizzes-quiz-module */ "pages-quizzes-quiz-module").then(__webpack_require__.bind(null, /*! ./pages/quizzes/quiz.module */ "./src/app/pages/quizzes/quiz.module.ts")).then(function (m) { return m.QuizModule; }); },
            },
            {
                path: 'question',
                loadChildren: function () { return Promise.all(/*! import() | pages-question-question-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("default~pages-general-competition-general-competition-module~pages-question-question-module~pages-st~6ed52d2d"), __webpack_require__.e("pages-question-question-module")]).then(__webpack_require__.bind(null, /*! ./pages/question/question.module */ "./src/app/pages/question/question.module.ts")).then(function (m) { return m.QuestionModule; }); },
            },
            {
                path: 'users',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-users-users-module */ "pages-users-users-module").then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "./src/app/pages/users/users.module.ts")).then(function (m) { return m.UsersModule; }); },
            },
            {
                path: 'broadcaster',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-broadcaster-broadcaster-module */ "pages-broadcaster-broadcaster-module").then(__webpack_require__.bind(null, /*! ./pages/broadcaster/broadcaster.module */ "./src/app/pages/broadcaster/broadcaster.module.ts")).then(function (m) { return m.BroadcasterModule; }); },
            },
            {
                path: 'referendum',
                loadChildren: function () { return Promise.all(/*! import() | pages-referendum-referendum-module */[__webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-daily-competition-daily-competition-mod~3350d8ab"), __webpack_require__.e("default~pages-admin-referendum-admin-referendum-module~pages-referendum-referendum-module~survey-vie~80c85670"), __webpack_require__.e("default~pages-dashboard-dashboard-default-dashboard-default-module~pages-referendum-referendum-modul~c101ec06"), __webpack_require__.e("pages-referendum-referendum-module")]).then(__webpack_require__.bind(null, /*! ./pages/referendum/referendum.module */ "./src/app/pages/referendum/referendum.module.ts")).then(function (m) { return m.ReferendumModule; }); },
            },
            {
                path: 'masterdata',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-masterdata-masterdata-module */ "pages-masterdata-masterdata-module").then(__webpack_require__.bind(null, /*! ./pages/masterdata/masterdata.module */ "./src/app/pages/masterdata/masterdata.module.ts")).then(function (m) { return m.MasterdataModule; }); },
            },
            {
                path: 'general-competition',
                loadChildren: function () { return Promise.all(/*! import() | pages-general-competition-general-competition-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("default~pages-general-competition-general-competition-module~pages-question-question-module~pages-st~6ed52d2d"), __webpack_require__.e("pages-general-competition-general-competition-module")]).then(__webpack_require__.bind(null, /*! ./pages/general-competition/general-competition.module */ "./src/app/pages/general-competition/general-competition.module.ts")).then(function (m) { return m.GeneralCompetitionModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'teacher-supervisor',
                loadChildren: function () { return Promise.all(/*! import() | pages-teacher-supervisor-teacher-supervisor-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("default~pages-general-competition-general-competition-module~pages-question-question-module~pages-st~6ed52d2d"), __webpack_require__.e("pages-teacher-supervisor-teacher-supervisor-module")]).then(__webpack_require__.bind(null, /*! ./pages/teacher-supervisor/teacher-supervisor.module */ "./src/app/pages/teacher-supervisor/teacher-supervisor.module.ts")).then(function (m) { return m.TeacherSupervisorModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'broadcasting',
                loadChildren: function () { return Promise.all(/*! import() | pages-broadcasting-broadcasting-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("pages-broadcasting-broadcasting-module")]).then(__webpack_require__.bind(null, /*! ./pages/broadcasting/broadcasting.module */ "./src/app/pages/broadcasting/broadcasting.module.ts")).then(function (m) { return m.BroadcastingModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'leaderboard',
                loadChildren: function () { return Promise.all(/*! import() | pages-leaderboard-leaderboard-module */[__webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("default~pages-leaderboard-leaderboard-module~pages-user-report-user-report-module"), __webpack_require__.e("pages-leaderboard-leaderboard-module")]).then(__webpack_require__.bind(null, /*! ./pages/leaderboard/leaderboard.module */ "./src/app/pages/leaderboard/leaderboard.module.ts")).then(function (m) { return m.LeaderboardModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'userreport',
                loadChildren: function () { return Promise.all(/*! import() | pages-user-report-user-report-module */[__webpack_require__.e("default~pages-daily-competition-daily-competition-module~pages-leaderboard-leaderboard-module~pages-~ccdeb134"), __webpack_require__.e("default~pages-leaderboard-leaderboard-module~pages-user-report-user-report-module"), __webpack_require__.e("pages-user-report-user-report-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-report/user-report.module */ "./src/app/pages/user-report/user-report.module.ts")).then(function (m) { return m.UserReportModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'study-exam-question',
                loadChildren: function () { return Promise.all(/*! import() | pages-study-exam-question-se-question-module */[__webpack_require__.e("default~pages-broadcasting-broadcasting-module~pages-general-competition-general-competition-module~~e0baacfd"), __webpack_require__.e("default~pages-general-competition-general-competition-module~pages-question-question-module~pages-st~6ed52d2d"), __webpack_require__.e("pages-study-exam-question-se-question-module")]).then(__webpack_require__.bind(null, /*! ./pages/study-exam-question/se-question.module */ "./src/app/pages/study-exam-question/se-question.module.ts")).then(function (m) { return m.SeQuestionModule; }); }, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'basic',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-ui-elements-basic-basic-module */ "pages-ui-elements-basic-basic-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/basic/basic.module */ "./src/app/pages/ui-elements/basic/basic.module.ts")).then(function (m) { return m.BasicModule; }); }
            }, {
                path: 'notifications',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-ui-elements-advance-notifications-notifications-module */ "pages-ui-elements-advance-notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/advance/notifications/notifications.module */ "./src/app/pages/ui-elements/advance/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsModule; }); }
            }, {
                path: 'bootstrap-table',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module */ "pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module.ts")).then(function (m) { return m.BasicBootstrapModule; }); },
            }, {
                path: 'map',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-map-google-map-google-map-module */ "pages-map-google-map-google-map-module").then(__webpack_require__.bind(null, /*! ./pages/map/google-map/google-map.module */ "./src/app/pages/map/google-map/google-map.module.ts")).then(function (m) { return m.GoogleMapModule; }); },
            }, {
                path: 'user',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-user-profile-profile-module */ "pages-user-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/user/profile/profile.module */ "./src/app/pages/user/profile/profile.module.ts")).then(function (m) { return m.ProfileModule; }); }
            }, {
                path: 'simple-page',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-simple-page-simple-page-module */ "pages-simple-page-simple-page-module").then(__webpack_require__.bind(null, /*! ./pages/simple-page/simple-page.module */ "./src/app/pages/simple-page/simple-page.module.ts")).then(function (m) { return m.SimplePageModule; }); }
            },
            {
                path: 'setting',
                loadChildren: function () { return Promise.all(/*! import() | pages-setting-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-setting-setting-module")]).then(__webpack_require__.bind(null, /*! ./pages/setting/setting.module */ "./src/app/pages/setting/setting.module.ts")).then(function (m) { return m.SettingModule; }); },
            },
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Welcome ! Allam App';
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['authentication/login']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/admin/breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/admin/title/title.component */ "./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/studyexam/pocquestion.service */ "./src/app/services/studyexam/pocquestion.service.ts");
/* harmony import */ var _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/studyexam/question.service */ "./src/app/services/studyexam/question.service.ts");
/* harmony import */ var _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/studyexam/curriculum-single.service */ "./src/app/services/studyexam/curriculum-single.service.ts");
/* harmony import */ var _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/studyexam/competitive-single.service */ "./src/app/services/studyexam/competitive-single.service.ts");
/* harmony import */ var _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/tsupervisor.service */ "./src/app/services/tsupervisor.service.ts");
/* harmony import */ var _services_gc_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/gc.service */ "./src/app/services/gc.service.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/index.js");
/* harmony import */ var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./http-error.interceptor */ "./src/app/http-error.interceptor.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");











// import additional







//import {Format} from "./pipes/format";











//import { OwlDateTimeModule, OwlNativeDateTimeModule } from '../../projects/picker/src/public_api';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
                _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_18__["ToasterModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_17__["NgMultiSelectDropDownModule"].forRoot(),
                _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_29__["RichTextEditorAllModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_28__["OwlNativeDateTimeModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_31__["ImageCropperModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            providers: [_services_category_service__WEBPACK_IMPORTED_MODULE_19__["CategoryService"],
                _services_role_service__WEBPACK_IMPORTED_MODULE_20__["RoleService"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_18__["ToasterService"],
                _services__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _services_studyexam_question_service__WEBPACK_IMPORTED_MODULE_23__["QuestionService"],
                _services_studyexam_pocquestion_service__WEBPACK_IMPORTED_MODULE_22__["PocquestionService"],
                _services_studyexam_curriculum_single_service__WEBPACK_IMPORTED_MODULE_24__["CurriculumSingleService"],
                _services_studyexam_competitive_single_service__WEBPACK_IMPORTED_MODULE_25__["CompetitiveSingleService"],
                _services_tsupervisor_service__WEBPACK_IMPORTED_MODULE_26__["TsupervisorService"],
                _services_gc_service__WEBPACK_IMPORTED_MODULE_27__["GcService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_30__["GlobalHttpInterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/helpers/basic-auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/helpers/basic-auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var BasicAuthInterceptor = /** @class */ (function () {
    function BasicAuthInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    BasicAuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with basic auth credentials if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + currentUser.authdata
                }
            });
        }
        return next.handle(request);
    };
    BasicAuthInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], BasicAuthInterceptor);
    return BasicAuthInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/fake-backend.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/fake-backend.ts ***!
  \*****************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var users = [{ id: 1, username: 'xyuhnl987662', password: '&^^%$#qhghb', firstName: 'Test', lastName: 'User' }];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === "Basic " + window.btoa('test:test');
        }
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard, BasicAuthInterceptor, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-auth.interceptor */ "./src/app/helpers/basic-auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["BasicAuthInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fake-backend */ "./src/app/helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]; });








/***/ }),

/***/ "./src/app/http-error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/http-error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: GlobalHttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHttpInterceptorService", function() { return GlobalHttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);






var GlobalHttpInterceptorService = /** @class */ (function () {
    function GlobalHttpInterceptorService(router) {
        this.router = router;
    }
    GlobalHttpInterceptorService.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log('error is intercept');
            console.error(error);
            if (error.status == 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oh', 'Please check your Internet connection', 'error');
            }
            else if (error.status == 401) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oh', error.error.message, 'error');
            }
            else {
                //Swal.fire('',error.message,'error');
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oh', 'Failed to load, please try again later', 'error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
        }));
    };
    GlobalHttpInterceptorService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    GlobalHttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GlobalHttpInterceptorService);
    return GlobalHttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/layout/admin/admin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/admin/admin.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(menuItems, router, authenticationService) {
        var _this = this;
        this.menuItems = menuItems;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Welcome ! Allam App';
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
        this.navType = 'st5';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        // dark
        /*this.setLayoutType('dark');
        this.headerTheme = 'theme5';
        this.logoTheme = 'theme5';*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');
        this.navType = 'st2';*/
        // dark-light
        // this.setNavBarTheme('theme1');
        // this.navType = 'st3';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.setBackgroundPattern('pattern2');
        this.checkPermission();
    };
    AdminComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    AdminComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    AdminComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    };
    AdminComponent.prototype.onClickedOutside = function (e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    AdminComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    AdminComponent.prototype.toggleChat = function () {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    };
    AdminComponent.prototype.toggleChatInner = function () {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    };
    AdminComponent.prototype.searchFriendList = function (e) {
        var search = (this.search_friends.nativeElement.value).toLowerCase();
        var search_input;
        var search_parent;
        var friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
        Array.prototype.forEach.call(friendList, function (elements, index) {
            search_input = (elements.innerHTML).toLowerCase();
            search_parent = (elements.parentNode).parentNode;
            if (search_input.indexOf(search) !== -1) {
                search_parent.classList.add('show');
                search_parent.classList.remove('hide');
            }
            else {
                search_parent.classList.add('hide');
                search_parent.classList.remove('show');
            }
        });
    };
    AdminComponent.prototype.toggleOpenedSidebar = function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    };
    AdminComponent.prototype.toggleRightbar = function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
    AdminComponent.prototype.setSidebarPosition = function () {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    };
    AdminComponent.prototype.setHeaderPosition = function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '80px' : '';
    };
    AdminComponent.prototype.setBackgroundPattern = function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    };
    AdminComponent.prototype.setLayoutType = function (type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.logoTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.logoTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
    };
    AdminComponent.prototype.setNavBarTheme = function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    };
    AdminComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['authentication/login']);
    };
    AdminComponent.prototype.checkPermission = function (menu) {
        var _this = this;
        if (menu === void 0) { menu = ''; }
        this.loginUser = this.authenticationService.currentUserValue;
        this.loginUser = JSON.parse(this.loginUser);
        var userRoleId = this.loginUser['user'][0]['role_id'];
        var userPermission = this.loginUser.permission;
        this.global_user_name = this.loginUser.user[0].first_name + ' ' + this.loginUser.user[0].last_name;
        this.global_username = this.loginUser.user[0].username;
        this.isAuth = false;
        userPermission.forEach(function (permission, index) {
            if (permission.name == menu) {
                _this.isAuth = true;
            }
        });
        if (this.isAuth) {
            //console.log('--exits');
        }
        if (userRoleId == 1) {
            this.isAuth = true;
        }
        //for super admin hide menu////
        if (menu == 'view-study-exam' && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "study-exam-approval" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-special" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-league" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-daily" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-broadcaster" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-referendum" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-category" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-header" && userRoleId == 1) {
            this.isAuth = false;
        }
        if (menu == "view-gc" && userRoleId == 1) {
            //this.isAuth=false;
        }
        if (menu == "view-leaderboard" && userRoleId == 1) {
            this.isAuth = false;
        }
        //console.log('---->'+menu+'<---------');
        ////////////////////////////
        return this.isAuth;
    };
    AdminComponent.prototype.dashboard_url = function () {
        this.loginUser = this.authenticationService.currentUserValue;
        this.loginUser = JSON.parse(this.loginUser);
        var userRoleId = this.loginUser.user[0].role_id;
        var url = '/';
        if (userRoleId == 1) {
            url = '/';
        }
        else if (userRoleId == 2) {
            url = '/category';
        }
        else if (userRoleId == 3) {
            url = '/dashboard';
        }
        else if (userRoleId == 4) {
            url = '/study-exam';
        }
        else if (userRoleId == 5) {
            url = '/dashboard';
        }
        else if (userRoleId == 6) {
            url = '/teacher-supervisor';
        }
        else if (userRoleId == 9) {
            url = '/broadcasting';
        }
        else {
            url = '/';
        }
        return url;
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchFriends', /* TODO: add static flag */ { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminComponent.prototype, "search_friends", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/admin.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mobileMenuTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('no-block <=> yes-block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideOnOff', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('on => off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('off => on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/layout/admin/admin.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-active {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL0Q6XFxtZWFuXFxhbGxhbS1jbXMvc3JjXFxhcHBcXGxheW91dFxcYWRtaW5cXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWFjdGl2ZSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbiIsIi5ub3QtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.tempState = [];
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function () {
            _this.breadcrumbs = [];
            _this.tempState = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        var routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (routes.snapshot.data.breadcrumb !== undefined) {
                            var status_1 = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status_1 = routes.snapshot.data.status;
                            }
                            var icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            var breadcrumb_caption = false;
                            if (routes.snapshot.data.breadcrumb_caption !== undefined) {
                                breadcrumb_caption = routes.snapshot.data.breadcrumb_caption;
                            }
                            if (!_this.tempState.includes(routes.snapshot.data.breadcrumb)) {
                                _this.tempState.push(routes.snapshot.data.breadcrumb);
                                _this.breadcrumbs.push({
                                    label: routes.snapshot.data.breadcrumb,
                                    icon: icon,
                                    caption: breadcrumb_caption,
                                    status: status_1,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumbs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumbs.component.scss */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/title/title.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/title/title.component.ts ***!
  \*******************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function () {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.breadcrumb;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            _this.titleService.setTitle(title + ' | Alaam.net');
        });
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title',
            template: '<span></span>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/layout/auth/auth.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/auth/auth.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/auth/auth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/layout/auth/auth.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/login', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user.status) {
                //user.authdata = window.btoa(email + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                _this.currentUserSubject.next(user.data);
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
var CategoryService = /** @class */ (function () {
    function CategoryService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(apiUrl + 'category/list');
    };
    /*create(category: Category) {
      return this.http.post(apiUrl+'category', category);
    }*/
    // Create User
    CategoryService.prototype.addCategory_old = function (category) {
        console.log(category);
        var formData = new FormData();
        formData.append("title", category.title);
        formData.append("icon", category.icon);
        formData.append("description", category.description);
        formData.append("status", category.status);
        return this.http.post(apiUrl + 'category/add', formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    CategoryService.prototype.addCategory = function (category) {
        return this.http.post(apiUrl + 'category/add', category);
    };
    CategoryService.prototype.getById = function (id) {
        return this.http.get(apiUrl + 'category/get/' + id);
    };
    CategoryService.prototype.checkCategory = function (params) {
        return this.http.get(apiUrl + 'category/check_category', { params: params });
    };
    CategoryService.prototype.update_old = function (category, id) {
        var formData = new FormData();
        formData.append("title", category.title);
        formData.append("icon", category.icon);
        formData.append("description", category.description);
        formData.append("status", category.status);
        return this.http.patch(apiUrl + 'category/update/' + id, formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    CategoryService.prototype.update = function (category, id) {
        return this.http.patch(apiUrl + 'category/update/' + id, category);
    };
    CategoryService.prototype.updateStatus = function (category) {
        return this.http.patch(apiUrl + 'category/update_status', category);
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(apiUrl + 'category/del/' + id);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/gc.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/gc.service.ts ***!
  \****************************************/
/*! exports provided: GcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcService", function() { return GcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var GcService = /** @class */ (function () {
    function GcService(http) {
        this.http = http;
    }
    GcService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-pocquestion/all_question');
    };
    GcService.prototype.getQuiz = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/all_quiz');
    };
    GcService.prototype.getQuizByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/all_quiz_by_user/' + id);
    };
    GcService.prototype.deleteDraftQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/delete_draft_question/' + id);
    };
    GcService.prototype.addQuestion = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-pocquestion/add_question', question);
    };
    GcService.prototype.addBulkQuestionTemp = function (questionData, created_by, header_id, category_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/add_question_temp', {
            selectedData: questionData, created_by: created_by, header_id: header_id, category_id: category_id
        });
    };
    GcService.prototype.addSingleQuestionTemp = function (questionData, created_by) {
        var formData = new FormData();
        formData.append("option1", questionData.option1);
        formData.append("option2", questionData.option2);
        formData.append("option3", questionData.option3);
        formData.append("option4", questionData.option4);
        formData.append("answer", questionData.answer);
        formData.append("video_file", questionData.video_file);
        formData.append("question", questionData.question);
        formData.append("question_type", questionData.question_type);
        formData.append("question_text", questionData.question_text);
        formData.append("heading", questionData.heading);
        formData.append("category", questionData.category);
        formData.append("note", questionData.note);
        formData.append("level", questionData.level);
        formData.append("duration", questionData.duration);
        formData.append("created_by", questionData.created_by);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/add_single_question_temp', formData);
    };
    GcService.prototype.updateQuestionInDraft = function (questionArr) {
        var formDataEdit = new FormData();
        formDataEdit.append("option1", questionArr.option1);
        formDataEdit.append("option2", questionArr.option2);
        formDataEdit.append("option3", questionArr.option3);
        formDataEdit.append("option4", questionArr.option4);
        formDataEdit.append("answer", questionArr.answer);
        formDataEdit.append("video_file", questionArr.video_file);
        formDataEdit.append("question", questionArr.question);
        formDataEdit.append("question_type", questionArr.question_type);
        formDataEdit.append("question_text", questionArr.question_text);
        formDataEdit.append("heading", questionArr.heading);
        formDataEdit.append("category", questionArr.category);
        formDataEdit.append("note", questionArr.note);
        formDataEdit.append("level", questionArr.level);
        formDataEdit.append("duration", questionArr.duration);
        formDataEdit.append("created_by", questionArr.created_by);
        formDataEdit.append("question_image_url", questionArr.question_image_url);
        formDataEdit.append("question_image", questionArr.question_image);
        formDataEdit.append("qui_type", questionArr.question_type);
        formDataEdit.append("id", questionArr.id);
        formDataEdit.append("isFile", questionArr.isFile);
        formDataEdit.append("isVideo", questionArr.isVideo);
        console.log(formDataEdit);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/update_question_in_draft', formDataEdit);
    };
    GcService.prototype.updateSingleQuestionInDraft = function (question) {
        var formData = new FormData();
        formData.append("option1", question.option1);
        formData.append("option2", question.option2);
        formData.append("option3", question.option3);
        formData.append("option4", question.option4);
        formData.append("answer", question.answer);
        formData.append("video_file", question.video_file);
        formData.append("question", question.question);
        formData.append("question_type", question.question_type);
        formData.append("question_text", question.question_text);
        formData.append("heading", question.heading);
        formData.append("category", question.category);
        formData.append("note", question.note);
        formData.append("level", question.level);
        formData.append("duration", question.duration);
        formData.append("created_by", question.created_by);
        formData.append("question_image_url", question.question_image_url);
        formData.append("qui_type", question.question_type);
        formData.append("id", question.id);
        formData.append("isFile", question.isFile);
        formData.append("isVideo", question.isVideo);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/update_single_question_in_draft', formData);
    };
    GcService.prototype.updateSingleQuestionInDraft_old = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/update_single_question_in_draft', question);
    };
    GcService.prototype.publishQuestion = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/publish_question', question);
    };
    GcService.prototype.addBulkQuestion = function (questionData) {
        // console.log('--before servirprint--')
        console.log(questionData);
        // console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/add_question', {
            selectedData: questionData
        });
    };
    GcService.prototype.getDraftQuestionByUser = function (id, type) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/get_draft_question_by_user/' + id + '/' + type);
    };
    GcService.prototype.getDraftQuizByUser = function (id, quiz_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/get_draft_quiz_by_user/' + id + '/' + quiz_id);
    };
    GcService.prototype.getAllQuestionByUser = function (id, role_id, params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/get_all_question_by_user/' + id + '/' + role_id, { params: params });
    };
    GcService.prototype.update_status = function (question) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/update_status', question);
    };
    GcService.prototype.getHeading = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/get_heading');
    };
    GcService.prototype.getCategoryByHeading = function (id) {
        if (id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/get_category_by_heading/' + id);
        }
    };
    GcService.prototype.publishSingleQuestion = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'gc/publish_single_question', question);
    };
    GcService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GcService);
    return GcService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/services/role.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
var RoleService = /** @class */ (function () {
    function RoleService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(apiUrl + 'user/roles');
    };
    RoleService.prototype.getAllPermission = function () {
        return this.http.get(apiUrl + 'user/permissions');
    };
    RoleService.prototype.createRole = function (role) {
        return this.http.post(apiUrl + 'user/create_role', role);
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(apiUrl + 'user/role/' + id);
    };
    RoleService.prototype.updateStatus = function (role, id) {
        return this.http.patch(apiUrl + 'user/update_role_status/' + id, role);
    };
    RoleService.prototype.updateRole = function (role, id) {
        return this.http.patch(apiUrl + 'user/update_role/' + id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(apiUrl + 'user/role/' + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/services/studyexam/competitive-single.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/studyexam/competitive-single.service.ts ***!
  \******************************************************************/
/*! exports provided: CompetitiveSingleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitiveSingleService", function() { return CompetitiveSingleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CompetitiveSingleService = /** @class */ (function () {
    function CompetitiveSingleService(http) {
        this.http = http;
    }
    CompetitiveSingleService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-cms-pocquestion/all_question');
    };
    CompetitiveSingleService.prototype.getMasterData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/get_master_data');
    };
    CompetitiveSingleService.prototype.getDraftQuestionByUser = function (id, quiz_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/get_draft_question_by_user/' + id + '/' + quiz_id);
    };
    CompetitiveSingleService.prototype.getDraftQuizByUser = function (id, quiz_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/get_draft_quiz_by_user/' + id + '/' + quiz_id);
    };
    CompetitiveSingleService.prototype.saveQuestionInDraft = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/save_question_in_deaft', question);
    };
    CompetitiveSingleService.prototype.updateQuestionInDraft = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/update_question_in_deaft', question);
    };
    CompetitiveSingleService.prototype.deleteDraftQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/delete_draft_question/' + id);
    };
    CompetitiveSingleService.prototype.saveQuizInTemp = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/save_quiz_in_temp', question);
    };
    CompetitiveSingleService.prototype.saveQuizInImage = function (imageData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/save_quiz_image', imageData);
    };
    CompetitiveSingleService.prototype.saveQuizImageNew = function (imageData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/save_quiz_image_new', imageData);
    };
    CompetitiveSingleService.prototype.saveQuiz = function (question, quiz_temp_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/save_quiz/' + quiz_temp_id, question);
    };
    // Update 
    CompetitiveSingleService.prototype.updateQuizInImage = function (imageData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_quiz_image', imageData);
    };
    CompetitiveSingleService.prototype.updateQuizImageNew = function (imageData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_quiz_image_new', imageData);
    };
    CompetitiveSingleService.prototype.updateQuizInTemp = function (question, quiz_temp_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-competitive-single/update_quiz_in_temp/' + quiz_temp_id, question);
    };
    CompetitiveSingleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CompetitiveSingleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompetitiveSingleService);
    return CompetitiveSingleService;
}());



/***/ }),

/***/ "./src/app/services/studyexam/curriculum-single.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/studyexam/curriculum-single.service.ts ***!
  \*****************************************************************/
/*! exports provided: CurriculumSingleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumSingleService", function() { return CurriculumSingleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CurriculumSingleService = /** @class */ (function () {
    function CurriculumSingleService(http) {
        this.http = http;
    }
    CurriculumSingleService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-pocquestion/all_question');
    };
    CurriculumSingleService.prototype.getMasterData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/get_master_data');
    };
    CurriculumSingleService.prototype.getDraftQuestionByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/get_draft_question_by_user/' + id);
    };
    CurriculumSingleService.prototype.saveQuiz = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/save_quiz', question);
    };
    CurriculumSingleService.prototype.saveQuestionInDraft = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/save_question_in_deaft', question);
    };
    CurriculumSingleService.prototype.updateQuestionInDraft = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/update_question_in_deaft', question);
    };
    CurriculumSingleService.prototype.deleteDraftQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/delete_draft_question/' + id);
    };
    CurriculumSingleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CurriculumSingleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CurriculumSingleService);
    return CurriculumSingleService;
}());



/***/ }),

/***/ "./src/app/services/studyexam/pocquestion.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/studyexam/pocquestion.service.ts ***!
  \***********************************************************/
/*! exports provided: PocquestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocquestionService", function() { return PocquestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var PocquestionService = /** @class */ (function () {
    function PocquestionService(http) {
        this.http = http;
    }
    PocquestionService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-pocquestion/all_question');
    };
    PocquestionService.prototype.getQuiz = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/all_quiz');
    };
    PocquestionService.prototype.getQuizByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/all_quiz_by_user/' + id);
    };
    PocquestionService.prototype.deleteDraftQuestion = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/delete_draft_question/' + id);
    };
    PocquestionService.prototype.addQuestion = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-pocquestion/add_question', question);
    };
    PocquestionService.prototype.addBulkQuestionTemp = function (questionData, created_by) {
        //console.log('--before servirprint--')
        console.log(questionData);
        // console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/add_question_temp', {
            selectedData: questionData, created_by: created_by
        });
    };
    PocquestionService.prototype.updateQuestionInDraft = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_question_in_deaft', question);
    };
    PocquestionService.prototype.saveQuiz = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/save_quiz', question);
    };
    PocquestionService.prototype.addBulkQuestion = function (questionData) {
        // console.log('--before servirprint--')
        console.log(questionData);
        // console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/add_question', {
            selectedData: questionData
        });
    };
    PocquestionService.prototype.addBulkQuestionCompetitive = function (questionData, studyData) {
        // console.log('--before servirprint--')
        // console.log(questionData);
        // console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/add_question_competitive', {
            selectedData: questionData,
            quizData: studyData
        });
    };
    PocquestionService.prototype.getDraftQuestionByUser = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_draft_question_by_user/' + id);
    };
    ////////// Here start for competitive data ///////////////
    PocquestionService.prototype.addBulkQuestionCompetitiveTemp = function (questionData, created_by, quiz_temp_id) {
        //console.log('--before servirprint--')
        console.log(questionData);
        // console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/add_question_competitive_temp', {
            selectedData: questionData, created_by: created_by, quiz_temp_id: quiz_temp_id
        });
    };
    PocquestionService.prototype.updateQuestionCompetitiveDraft = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_question_competitive_draft', question);
    };
    PocquestionService.prototype.saveCompetitiveQuiz = function (question, quiz_temp_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/save_competitive_quiz', { questionData: question, quiz_temp_id: quiz_temp_id });
    };
    PocquestionService.prototype.getDraftQuestionCompetitiveByUser = function (id, quiz_temp_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_draft_question_competitive_by_user/' + id + '/' + quiz_temp_id);
    };
    PocquestionService.prototype.getDraftQuizByUser = function (id, quiz_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_draft_quiz_by_user/' + id + '/' + quiz_id);
    };
    PocquestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PocquestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PocquestionService);
    return PocquestionService;
}());



/***/ }),

/***/ "./src/app/services/studyexam/question.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/studyexam/question.service.ts ***!
  \********************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.dataArray = [];
        //booksChanged:  Array <any> = [];
        this.uquestion = [
            {
                id: 1,
                question_type: 'text',
                image: '',
                question: 'How can you created rounded corners using CSS3?',
                category: 'CSS',
                answer1: 'test test',
                answer2: 'ee',
                answer3: 'fff',
                status: '1',
                quiz_type: "string",
                quiz_sub_type: "string",
                quiz_title: "string",
                quiz_description: "string",
                quiz_icon: "string",
                quiz_icon_url: "string"
            }
        ];
    }
    QuestionService.prototype.insertData = function (data) {
        this.dataArray = [];
        this.dataArray.unshift(data);
        //this.booksChanged.next(this.dataArray);
    };
    QuestionService.prototype.getQuestionsFromData = function () {
        return this.uquestion;
    };
    QuestionService.prototype.showEditQuestion = function (id) {
        return this.uquestion.find(function (c) { return c.id == id; });
    };
    QuestionService.prototype.addQuestion = function (question) {
        question.id = this.uquestion.length + 1;
        this.uquestion.unshift(question);
    };
    QuestionService.prototype.updateQuestion = function (question) {
        var index = this.uquestion.findIndex(function (u) { return question.id === u.id; });
        this.uquestion[index] = question;
    };
    QuestionService.prototype.deleteQuestion = function (question) {
        this.uquestion.splice(this.uquestion.indexOf(question), 1);
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/tsupervisor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tsupervisor.service.ts ***!
  \*************************************************/
/*! exports provided: TsupervisorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsupervisorService", function() { return TsupervisorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var TsupervisorService = /** @class */ (function () {
    function TsupervisorService(http) {
        this.http = http;
    }
    TsupervisorService.prototype.updateStatus = function (user, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/update_user_status/' + id, user);
    };
    TsupervisorService.prototype.getAllTeacher = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/get_all_teacher');
    };
    TsupervisorService.prototype.getPublishQuestion = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_publish_question_by_user/' + id);
    };
    TsupervisorService.prototype.getPublishQuestionNew = function (id, params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_publish_question_by_user_new/' + id, { params: params });
    };
    TsupervisorService.prototype.approvePublishQuestion = function (id, user_id, user) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/approve_publish_question/' + id + '/' + user_id, user);
    };
    TsupervisorService.prototype.updateQuestionByTsBulk = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_question_by_ts', question);
    };
    TsupervisorService.prototype.updateQuestionById = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_question_by_id', question);
    };
    TsupervisorService.prototype.updateQuestionByTsSingle = function (question) {
        console.log('--before servirprint--');
        console.log(question);
        console.log('--after service print');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-curriculum-single/update_question_by_ts', question);
    };
    TsupervisorService.prototype.getActiveQuestion = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_active_question');
    };
    TsupervisorService.prototype.getActiveQuestionNew = function (params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_active_question_new', { params: params });
    };
    TsupervisorService.prototype.getActiveQuiz = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_all_quiz');
    };
    TsupervisorService.prototype.getUserByID = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/get_user_by_id/' + id);
    };
    TsupervisorService.prototype.updateQuizStatus = function (quiz) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/update_status', quiz);
    };
    TsupervisorService.prototype.deletePublishQuestion = function (id, user_id, user) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'cms-study-exam/delete_publish_question/' + id + '/' + user_id, user);
    };
    TsupervisorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TsupervisorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TsupervisorService);
    return TsupervisorService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/get_all');
    };
    UserService.prototype.getBroadcaster = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/get_broadcaster');
    };
    UserService.prototype.getMobileUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/get_mobile_users');
    };
    UserService.prototype.isEmaiIDExist = function (email) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/check_email/' + email);
    };
    UserService.prototype.signup = function (signup) {
        var formData = new FormData();
        formData.append("register_as", signup.register_as);
        formData.append("user_avatar", signup.user_avatar);
        formData.append("name", signup.name);
        formData.append("email", signup.email);
        formData.append("mobile", signup.mobile);
        formData.append("country", signup.country);
        formData.append("website", signup.website);
        formData.append("password", signup.password);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/signup', formData);
    };
    UserService.prototype.verifyEmail = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/verify_email/' + id);
    };
    UserService.prototype.verifyCheckEmail = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/verify_check_email/' + id);
    };
    UserService.prototype.forgot = function (email) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/forgot_password/' + email);
    };
    UserService.prototype.resetPassword = function (signup) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/reset_password', signup);
    };
    UserService.prototype.updateStatus = function (user, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/update_user_status/' + id, user);
    };
    UserService.prototype.addUser = function (signup) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/add_user', signup);
    };
    UserService.prototype.addBroadcaster = function (signup) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/add_broadcaster', signup);
    };
    UserService.prototype.userById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/user_by_id/' + id);
    };
    UserService.prototype.generatePassword = function (signup) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/generate_password', signup);
    };
    UserService.prototype.changePassword = function (signup) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/change_password', signup);
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/update_user/' + id, user);
    };
    UserService.prototype.delete = function (id) {
        //return this.http.delete(environment.apiUrl+'user/delete/' + id);
    };
    UserService.prototype.getCountry = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'user/get_all_country');
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");




var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                var toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
        }
        this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            _this.countState = 0;
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AccordionDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AccordionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAccordion]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");



var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    AccordionAnchorDirective.ctorParameters = function () { return [
        { type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");



var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    AccordionLinkDirective.ctorParameters = function () { return [
        { type: _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.pcoded-trigger'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]; });







/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card-animation.ts ***!
  \***********************************************/
/*! exports provided: cardToggle, cardClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')),
]);


/***/ }),

/***/ "./src/app/shared/card/card-refresh.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/card/card-refresh.directive.ts ***!
  \*******************************************************/
/*! exports provided: CardRefreshDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRefreshDirective", function() { return CardRefreshDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardRefreshDirective = /** @class */ (function () {
    function CardRefreshDirective(el) {
        this.el = el;
    }
    CardRefreshDirective.prototype.open = function () {
        this.el.nativeElement.classList.add('rotate-refresh');
    };
    CardRefreshDirective.prototype.close = function () {
        this.el.nativeElement.classList.remove('rotate-refresh');
    };
    CardRefreshDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CardRefreshDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CardRefreshDirective.prototype, "close", null);
    CardRefreshDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCardRefresh]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CardRefreshDirective);
    return CardRefreshDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/card/card-toggle.directive.ts ***!
  \******************************************************/
/*! exports provided: CardToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function() { return CardToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardToggleDirective = /** @class */ (function () {
    function CardToggleDirective(el) {
        this.el = el;
    }
    CardToggleDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('icon-up');
    };
    CardToggleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CardToggleDirective.prototype, "onToggle", null);
    CardToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCardToggleEvent]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CardToggleDirective);
    return CardToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/card/card.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header-right {\r\n    z-index: 999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlci1yaWdodCB7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/card/card-animation.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.toggleCard = function (event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.closeCard = function (event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    CardComponent.prototype.fullScreen = function (event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
    };
    CardComponent.prototype.appCardRefresh = function () {
        var _this = this;
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout(function () {
            _this.cardLoad = '';
            _this.loadCard = false;
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "classHeader", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html")).default,
            animations: [_card_animation__WEBPACK_IMPORTED_MODULE_2__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_2__["cardClose"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/shared/card/card.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/element/data-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/element/data-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DataFilterPipe = /** @class */ (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'dataFilter'
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/element/parent-remove.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/element/parent-remove.directive.ts ***!
  \***********************************************************/
/*! exports provided: ParentRemoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRemoveDirective", function() { return ParentRemoveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParentRemoveDirective = /** @class */ (function () {
    function ParentRemoveDirective(elements) {
        this.elements = elements;
    }
    ParentRemoveDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    };
    ParentRemoveDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ParentRemoveDirective.prototype, "onToggle", null);
    ParentRemoveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appParentRemove]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ParentRemoveDirective);
    return ParentRemoveDirective;
}());



/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var ToggleFullScreenDirective = /** @class */ (function () {
    function ToggleFullScreenDirective() {
    }
    ToggleFullScreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToggleFullScreen]'
        })
    ], ToggleFullScreenDirective);
    return ToggleFullScreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MENUITEMS = [
    {
        label: 'Navigation',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'link',
                icon: 'ti-home',
                menukey: 'dashbiard',
            },
            {
                state: 'role',
                short_label: 'C',
                name: 'Role',
                type: 'link',
                icon: 'ti-files',
                menukey: 'view-role'
            },
            {
                state: 'study-exam',
                short_label: 'se',
                name: 'Study Exam',
                type: 'link',
                icon: 'ti-files',
                menukey: 'view-study-exam'
            },
            {
                state: 'study-exam-question',
                short_label: 'se',
                name: 'Study Exam',
                type: 'link',
                icon: 'ti-files',
                menukey: 'stuyd-exam-question'
            },
            {
                state: 'category',
                short_label: 'C',
                name: 'Category',
                type: 'link',
                icon: 'ti-files',
                menukey: 'view-category'
            },
            {
                state: 'header',
                short_label: 'C',
                name: 'Header',
                type: 'link',
                icon: 'ti-files',
                menukey: 'view-header'
            },
            /* {
               state: 'sub-category',
               short_label: 'C',
               name: 'Sub Category',
               type: 'link',
               icon: 'ti-files',
               menukey:'view-sub-category'
             },*/
            {
                state: 'quiz',
                short_label: 'QZ',
                name: 'Quizzes',
                type: 'link',
                icon: 'ti-files',
                menukey: 'view-quiz'
            },
            /*{
              state: 'question',
              short_label: 'Q',
              name: 'Question',
              type: 'link',
              icon: 'ti-book',
              menukey:'view-question'
            }, */
            {
                state: 'users',
                short_label: 'U',
                name: 'Users',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-users'
            },
            {
                state: 'referendum',
                short_label: 'RR',
                name: 'Referendum',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-referendum'
            },
            {
                state: 'admin-referendum',
                short_label: 'AR',
                name: 'Admin Referendum',
                type: 'link',
                icon: 'ti-user',
                menukey: 'admin-referendum'
            },
            {
                state: 'mobile-users',
                short_label: 'MU',
                name: 'Mobile Users',
                type: 'link',
                icon: 'ti-user',
                menukey: 'mobile-users'
            },
            {
                state: 'broadcaster',
                short_label: 'BR',
                name: 'Broadcaster',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-broadcaster'
            },
            {
                state: 'daily',
                short_label: 'CR',
                name: 'Challenge Race',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-daily',
            },
            {
                state: 'daily',
                short_label: 'B',
                name: 'Challenge Race',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-basics',
                children: [
                    {
                        state: 'list',
                        short_label: 'ms',
                        name: 'List of competition',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-daily-admin'
                    }
                ]
            },
            {
                state: 'special',
                short_label: 'B',
                name: 'Special Competition',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-basics',
                children: [
                    {
                        state: 'list',
                        short_label: 'ms',
                        name: 'List of competition',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-special-admin'
                    }
                ]
            },
            {
                state: 'league',
                short_label: 'B',
                name: 'League Competition',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-basics',
                children: [
                    {
                        state: 'list',
                        short_label: 'ms',
                        name: 'List of competition',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-league-admin'
                    }
                ]
            },
            {
                state: 'reports',
                short_label: 'B',
                name: 'Reports',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-basics',
                children: [
                    {
                        state: 'daily',
                        short_label: 'RCR',
                        name: 'Challenge Race',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-daily-admin'
                    }, {
                        state: 'special',
                        short_label: 'ms',
                        name: 'Special Competition',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-special-admin'
                    }
                ]
            },
            {
                state: 'leaderboard',
                short_label: 'LB',
                name: 'LeaderBoard',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-leaderboard',
            },
            {
                state: 'userreport',
                short_label: 'LB',
                name: 'userReport',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-user-report',
            },
            {
                state: 'general-competition',
                short_label: 'GC',
                name: 'General Competition',
                type: 'link',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-gc'
            },
            {
                state: 'teacher-supervisor',
                short_label: 'TS',
                name: 'Approve Questions',
                type: 'link',
                icon: 'ti-layout-grid2-alt',
                menukey: 'study-exam-approval'
            },
            {
                state: 'special',
                short_label: 'SC',
                name: 'Special Competition',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-special'
            },
            {
                state: 'league',
                short_label: 'LG',
                name: 'League Competition',
                type: 'link',
                icon: 'ti-user',
                menukey: 'view-league'
            },
            {
                state: 'masterdata',
                short_label: 'B',
                name: 'Master Data',
                type: 'sub',
                icon: 'ti-layout-grid2-alt',
                menukey: 'view-basic',
                children: [
                    {
                        state: 'country',
                        short_label: 'ms',
                        name: 'Country',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-country'
                    },
                    {
                        state: 'district',
                        short_label: 'mu',
                        name: 'District',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-district'
                    },
                    {
                        state: 'subject',
                        short_label: 'ms',
                        name: 'Subject',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-subject'
                    },
                    {
                        state: 'school',
                        short_label: 'ms',
                        name: 'School',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-school'
                    },
                    {
                        state: 'university',
                        short_label: 'mu',
                        name: 'University',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-university'
                    },
                    /*{
                      state: 'semester',
                      short_label: 'ms',
                      name: 'Semester',
                      type: 'link',
                      icon: 'ti-book',
                      menukey:'view-semester'
                    },
                    {
                      state: 'lesson',
                      short_label: 'ml',
                      name: 'Lesson',
                      type: 'link',
                      icon: 'ti-book',
                      menukey:'view-lesson'
                    },
                    {
                      state: 'chapter',
                      short_label: 'mc',
                      name: 'Chapter',
                      type: 'link',
                      icon: 'ti-book',
                      menukey:'view-chapter'
                    },
                    {
                      state: 'level',
                      short_label: 'mu',
                      name: 'Level',
                      type: 'link',
                      icon: 'ti-book',
                      menukey:'view-level'
                    },
                    {
                      state: 'group',
                      short_label: 'mg',
                      name: 'Group',
                      type: 'link',
                      icon: 'ti-book',
                      menukey:'view-group'
                    },*/
                    {
                        state: 'quiz',
                        short_label: 'mq',
                        name: 'Quiz',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-quiz'
                    },
                    {
                        state: 'sub-quiz',
                        short_label: 'msq',
                        name: 'Sub Quiz',
                        type: 'link',
                        icon: 'ti-book',
                        menukey: 'view-subquiz'
                    }
                ]
            },
        ],
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 21px;\r\n    right: 16px;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n.md-perspective,\r\n.md-perspective body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-perspective body  {\r\n    background: #222;\r\n    perspective: 600px;\r\n}\r\n\r\n.container {\r\n    min-height: 100%;\r\n}\r\n\r\n.md-modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 50%;\r\n    max-width: 630px;\r\n    min-width: 320px;\r\n    height: auto;\r\n    z-index: 2000;\r\n    visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.md-show {\r\n    visibility: visible;\r\n}\r\n\r\n.md-overlay {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1100;\r\n    opacity: 0;\r\n    background: rgba(55, 58, 60, 0.65);\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show ~ .md-overlay {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.md-content {\r\n    color: #666666;\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.md-content h3 {\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 0.4em;\r\n    text-align: center;\r\n    font-size: 2.4em;\r\n    font-weight: 300;\r\n    opacity: 0.8;\r\n    background: rgba(0, 115, 170, 0.93);\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.md-content > div {\r\n    padding: 15px 40px 30px;\r\n    margin: 0;\r\n    font-weight: 300;\r\n    font-size: 1.15em;\r\n}\r\n\r\n.md-content > div p {\r\n    margin: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.md-content > div ul {\r\n    margin: 0;\r\n    padding: 0 0 30px 20px;\r\n}\r\n\r\n.md-content > div ul li {\r\n    padding: 5px 0;\r\n}\r\n\r\n.md-content button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 0.8em;\r\n}\r\n\r\n/* Effect 1: Fade in and scale up */\r\n\r\n.md-effect-1 .md-content {\r\n    transform: scale(0.7);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-1 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 2: Slide from the right */\r\n\r\n.md-effect-2 .md-content {\r\n    transform: translateX(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\r\n}\r\n\r\n.md-show.md-effect-2 .md-content {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 3: Slide from the bottom */\r\n\r\n.md-effect-3 .md-content {\r\n    transform: translateY(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-3 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 4: Newspaper */\r\n\r\n.md-effect-4 .md-content {\r\n    transform: scale(0) rotate(720deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-4 ~ .md-overlay,\r\n.md-effect-4 .md-content {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-4 .md-content {\r\n    transform: scale(1) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 5: fall */\r\n\r\n.md-effect-5.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-5 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(600px) rotateX(20deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-5 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    transform: translateZ(0px) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 6: side fall */\r\n\r\n.md-effect-6.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-6 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translate(30%) translateZ(600px) rotate(10deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-6 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    transform: translate(0%) translateZ(0) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 7:  slide and stick to top */\r\n\r\n.md-effect-7{\r\n    top: 0;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.md-effect-7 .md-content {\r\n    transform: translateY(-200%);\r\n    transition: all .3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-7 .md-content {\r\n    transform: translateY(0%);\r\n    border-radius: 0 0 3px 3px;\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 8: 3D flip horizontal */\r\n\r\n.md-effect-8.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-8 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateY(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-8 .md-content {\r\n    transform: rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 9: 3D flip vertical */\r\n\r\n.md-effect-9.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-9 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateX(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-9 .md-content {\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 10: 3D sign */\r\n\r\n.md-effect-10.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-10 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateX(-60deg);\r\n    transform-origin: 50% 0;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-10 .md-content {\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 11: Super scaled */\r\n\r\n.md-effect-11 .md-content {\r\n    transform: scale(2);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-11 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 12:  Just me */\r\n\r\n.md-effect-12 .md-content {\r\n    transform: scale(0.8);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-12 ~ .md-overlay {\r\n    background: #0073aa;\r\n}\r\n\r\n.md-effect-12 .md-content h3,\r\n.md-effect-12 .md-content {\r\n    color: #fff;\r\n    background: transparent;\r\n}\r\n\r\n.md-show.md-effect-12 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n/* Effect 13: 3D slit */\r\n\r\n.md-effect-13.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-13 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(-3000px) rotateY(90deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-13 .md-content {\r\n    -webkit-animation: slit .7s forwards ease-out;\r\n    animation: slit .7s forwards ease-out;\r\n}\r\n\r\n@-webkit-keyframes slit {\r\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -webkit-animation-timing-function: ease-out;}\r\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n@keyframes slit {\r\n    50% { transform: translateZ(-250px) rotateY(89deg); opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;}\r\n    100% { transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n/* Effect 14:  3D Rotate from bottom */\r\n\r\n.md-effect-14.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-14 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateY(100%) rotateX(90deg);\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.md-show.md-effect-14 .md-content {\r\n    transform: translateY(0%) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 15:  3D Rotate in from left */\r\n\r\n.md-effect-15.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-15 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(100px) translateX(-30%) rotateY(90deg);\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-15 .md-content {\r\n    transform: translateZ(0px) translateX(0%) rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 16:  Blur */\r\n\r\n.md-show.md-effect-16 ~ .md-overlay {\r\n    background: rgba(180,46,32,0.5);\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container {\r\n    -webkit-filter: blur(3px);\r\n    -moz-filter: blur(3px);\r\n    filter: blur(3px);\r\n}\r\n\r\n.md-effect-16 .md-content {\r\n    transform: translateY(-5%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container,\r\n.md-effect-16 .md-content {\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-16 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 17:  Slide in from bottom with perspective on container */\r\n\r\n.md-show.md-effect-17 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.md-show.md-effect-17 ~ .container,\r\n.md-show.md-effect-17 ~ .md-overlay  {\r\n    transform: rotateX(-2deg);\r\n    transform-origin: 50% 0%;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.md-effect-17 .md-content {\r\n    opacity: 0;\r\n    transform: translateY(200%);\r\n}\r\n\r\n.md-show.md-effect-17 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.3s 0.2s;\r\n}\r\n\r\n/* Effect 18:  Slide from right with perspective on container */\r\n\r\n.md-show.md-effect-18 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    background: rgba(143,27,15,0.8);\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .container,\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 0% 50%;\r\n    -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 0% 50%;\r\n    -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 0% 50%;\r\n    animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateRightSideFirst {\r\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; }\r\n    100% { -webkit-transform: translateZ(-200px); }\r\n}\r\n\r\n@keyframes rotateRightSideFirst {\r\n    50% { transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n    100% { transform: translateZ(-200px); }\r\n}\r\n\r\n.md-effect-18 .md-content {\r\n    transform: translateX(200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-18 .md-content {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n/* Effect 19:  Slip in from the top with perspective on container */\r\n\r\n.md-show.md-effect-19 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .container,\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 50% 100%;\r\n    -webkit-animation: OpenTop 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 50% 100%;\r\n    -moz-animation: OpenTop 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 50% 100%;\r\n    animation: OpenTop 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes OpenTop {\r\n    50% {\r\n        -webkit-transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n@keyframes OpenTop {\r\n    50% {\r\n        transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n                animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n.md-effect-19 .md-content {\r\n    transform: translateY(-200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-19 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n@media screen and (max-width: 32em) {\r\n    body { font-size: 75%; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFHaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBRW5DLDJCQUEyQjtJQUkzQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtDQUFrQztJQUdsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBSUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFJSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUdWLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUEsb0NBQW9DOztBQUNwQztJQUlJLDBCQUEwQjtJQUMxQixVQUFVO0lBR1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0lBSUksa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTs7SUFJSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIsMkNBQTJDO0lBQzNDLFVBQVU7QUFDZDs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qix3Q0FBd0M7SUFDeEMsVUFBVTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIseURBQXlEO0lBQ3pELFVBQVU7QUFDZDs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1QixtREFBbUQ7SUFDbkQsVUFBVTtBQUNkOztBQUVBLHNDQUFzQzs7QUFDdEM7SUFDSSxNQUFNO0lBSU4sMkJBQTJCO0FBQy9COztBQUVBO0lBSUksNEJBQTRCO0lBRzVCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFJSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQix1QkFBdUI7SUFDdkIsVUFBVTtJQUdWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUEsNEJBQTRCOztBQUM1QjtJQUlJLG1CQUFtQjtJQUNuQixVQUFVO0lBR1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBSUksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0lBSUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUlJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIsNkNBQTZDO0lBQzdDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZDQUE2QztJQUU3QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxNQUFNLG9EQUFvRCxFQUFFLFdBQVcsRUFBRSwyQ0FBMkMsQ0FBQztJQUNySCxPQUFPLDhDQUE4QyxFQUFFLFVBQVUsRUFBRTtBQUN2RTs7QUFPQTtJQUNJLE1BQU0sNENBQTRDLEVBQUUsVUFBVSxFQUFFLDBDQUFrQyxFQUFsQyxrQ0FBa0MsQ0FBQztJQUNuRyxPQUFPLHNDQUFzQyxFQUFFLFVBQVUsRUFBRTtBQUMvRDs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBDQUEwQztJQUcxQyx3QkFBd0I7SUFDeEIsVUFBVTtJQUdWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUlJLHVDQUF1QztJQUN2QyxVQUFVO0FBQ2Q7O0FBRUEsdUNBQXVDOztBQUN2QztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qiw0REFBNEQ7SUFHNUQsd0JBQXdCO0lBQ3hCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSx1REFBdUQ7SUFDdkQsVUFBVTtBQUNkOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUlJLDBCQUEwQjtJQUMxQixVQUFVO0FBQ2Q7O0FBRUE7O0lBSUksb0JBQW9CO0FBQ3hCOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSxtRUFBbUU7O0FBQ25FO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUdoQiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBS0kseUJBQXlCO0lBR3pCLHdCQUF3QjtJQUd4Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBSVYsMkJBQTJCO0FBQy9COztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7SUFHVix5QkFBeUI7QUFDN0I7O0FBRUEsK0RBQStEOztBQUMvRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFHL0Isb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsNkRBQTZEO0lBQzdELGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsMERBQTBEO0lBQzFELDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksTUFBTSxrREFBa0QsRUFBRSwyQ0FBMkMsRUFBRTtJQUN2RyxPQUFPLHFDQUFxQyxFQUFFO0FBQ2xEOztBQU9BO0lBQ0ksTUFBTSwwQ0FBMEMsRUFBRSwyQ0FBbUMsRUFBbkMsbUNBQW1DLEVBQUU7SUFDdkYsT0FBTyw2QkFBNkIsRUFBRTtBQUMxQzs7QUFFQTtJQUlJLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFJSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUdWLHlCQUF5QjtBQUM3Qjs7QUFFQSxtRUFBbUU7O0FBQ25FO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUdJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGdEQUFnRDtJQUNoRCxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDZDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksaUNBQWlDO1FBQ2pDLDJDQUEyQztJQUMvQztBQUNKOztBQVNBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsMkNBQW1DO2dCQUFuQyxtQ0FBbUM7SUFDdkM7QUFDSjs7QUFFQTtJQUlJLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFJSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUdWLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU8sY0FBYyxFQUFFO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC1jbG9zZS1idG4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMXB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWQtcGVyc3BlY3RpdmUsXHJcbi5tZC1wZXJzcGVjdGl2ZSBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZC1wZXJzcGVjdGl2ZSBib2R5ICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWQtbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MzBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDExMDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NSwgNTgsIDYwLCAwLjY1KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93IH4gLm1kLW92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubWQtY29udGVudCBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNSwgMTcwLCAwLjkzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG59XHJcblxyXG4ubWQtY29udGVudCA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQwcHggMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuMTVlbTtcclxufVxyXG5cclxuLm1kLWNvbnRlbnQgPiBkaXYgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50ID4gZGl2IHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50ID4gZGl2IHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG4ubWQtY29udGVudCBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0yIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDM6IFNsaWRlIGZyb20gdGhlIGJvdHRvbSAqL1xyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuLm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDU6IGZhbGwgKi9cclxuLm1kLWVmZmVjdC01Lm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cclxuLm1kLWVmZmVjdC02Lm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cclxuLm1kLWVmZmVjdC03e1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgODogM0QgZmxpcCBob3Jpem9udGFsICovXHJcbi5tZC1lZmZlY3QtOC5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xyXG4ubWQtZWZmZWN0LTkubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEwOiAzRCBzaWduICovXHJcbi5tZC1lZmZlY3QtMTAubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDExOiBTdXBlciBzY2FsZWQgKi9cclxuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgfiAubWQtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3M2FhO1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IGgzLFxyXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcbi5tZC1lZmZlY3QtMTMubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG4gICAgLW1vei1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTsgb3BhY2l0eTogLjU7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7fVxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xyXG4gICAgNTAlIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTsgb3BhY2l0eTogLjU7IC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7fVxyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGl0IHtcclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpOyBvcGFjaXR5OiAxOyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO31cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuLm1kLWVmZmVjdC0xNC5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE1OiAgM0QgUm90YXRlIGluIGZyb20gbGVmdCAqL1xyXG4ubWQtZWZmZWN0LTE1Lm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE2OiAgQmx1ciAqL1xyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAubWQtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCw0NiwzMiwwLjUpO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyIHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAtbW96LWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsXHJcbi5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIsXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5tZC1vdmVybGF5ICB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOCB+IC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDMsMjcsMTUsMC44KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOCB+IC5jb250YWluZXIsXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOCB+IC5tZC1vdmVybGF5IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgLW1vei1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpOyAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTsgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gICAgNTAlIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7IC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cclxuICAgIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpOyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpOyB9XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAubWQtb3ZlcmxheSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyLFxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAubWQtb3ZlcmxheSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcclxuICAgIGJvZHkgeyBmb250LXNpemU6IDc1JTsgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function() { return ModalAnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalAnimationComponent = /** @class */ (function () {
    function ModalAnimationComponent() {
        this.backDrop = false;
    }
    ModalAnimationComponent.prototype.ngOnInit = function () {
    };
    ModalAnimationComponent.prototype.close = function (event) {
        document.querySelector('#' + event).classList.remove('md-show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalAnimationComponent.prototype, "modalClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalAnimationComponent.prototype, "contentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalAnimationComponent.prototype, "modalID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalAnimationComponent.prototype, "backDrop", void 0);
    ModalAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-animation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-animation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-animation.component.css */ "./src/app/shared/modal-animation/modal-animation.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalAnimationComponent);
    return ModalAnimationComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic.modal {\r\n    background: rgba(0,0,0,0.6);\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    overflow: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    outline: 0;\r\n}\r\n\r\n.basic.fade {\r\n    opacity: 0;\r\n    transition: opacity .15s linear;\r\n}\r\n\r\n.basic.fade.in {\r\n    opacity: 1;\r\n}\r\n\r\n.basic.modal.fade.in .modal-dialog {\r\n    transform: translate(0,0);\r\n}\r\n\r\n.basic.modal.fade .modal-dialog {\r\n    transition: all .3s ease-out;\r\n    transform: translate(0,-25%);\r\n}\r\n\r\n.basic .basic-close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    font-size: 16px;\r\n    color: #292b2c;\r\n}\r\n\r\n.basic .basic-close-light-box {\r\n    position: absolute;\r\n    top: -31px;\r\n    right: -20px;\r\n    font-size: 30px;\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: none;\r\n}\r\n\r\n.basic h5 {\r\n    margin-bottom: 0;\r\n    color: #757575;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUdWLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUlJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmJhc2ljLmZhZGUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYmFzaWMuZmFkZS5pbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYmFzaWMubW9kYWwuZmFkZS5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XHJcbn1cclxuXHJcbi5iYXNpYy5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTI1JSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjUlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTI1JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNSUpO1xyXG59XHJcblxyXG4uYmFzaWMgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyOTJiMmM7XHJcbn1cclxuXHJcbi5iYXNpYyAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJhc2ljIGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalBasicComponent.prototype, "dialogClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalBasicComponent.prototype, "hideHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-basic',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-basic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-basic.component.css */ "./src/app/shared/modal-basic/modal-basic.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card-refresh.directive */ "./src/app/shared/card/card-refresh.directive.ts");
/* harmony import */ var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-animation/modal-animation.component */ "./src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./element/data-filter.pipe */ "./src/app/shared/element/data-filter.pipe.ts");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./element/parent-remove.directive */ "./src/app/shared/element/parent-remove.directive.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_16__);

















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleFullScreenDirective"],
                _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__["CardRefreshDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["CardToggleDirective"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_10__["ModalAnimationComponent"],
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_11__["ModalBasicComponent"],
                _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["DataFilterPipe"],
                _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_14__["ParentRemoveDirective"]
            ],
            exports: [
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
                _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleFullScreenDirective"],
                _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__["CardRefreshDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["CardToggleDirective"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_10__["ModalAnimationComponent"],
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_11__["ModalBasicComponent"],
                _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["DataFilterPipe"],
                _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_14__["ParentRemoveDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideModule"]
            ],
            providers: [
                _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-chasing-dots.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-chasing-dots.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-chasing-dots {\r\n    top: 50%;\r\n    margin: auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    text-align: center;\r\n    -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\r\n    animation: sk-chasingDotsRotate 2s infinite linear;\r\n}\r\n\r\n.sk-chasing-dots .sk-child {\r\n    width: 60%;\r\n    height: 60%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    border-radius: 100%;\r\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\r\n    animation: sk-chasingDotsBounce 2s infinite ease-in-out;\r\n}\r\n\r\n.sk-chasing-dots .sk-dot2 {\r\n    top: auto;\r\n    bottom: 0;\r\n    -webkit-animation-delay: -1s;\r\n    animation-delay: -1s;\r\n}\r\n\r\n@-webkit-keyframes sk-chasingDotsRotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes sk-chasingDotsRotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes sk-chasingDotsBounce {\r\n    0%, 100% {\r\n        transform: scale(0);\r\n    }\r\n    50% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-chasingDotsBounce {\r\n    0%, 100% {\r\n        transform: scale(0);\r\n    }\r\n    50% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY2hhc2luZy1kb3RzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBEQUEwRDtJQUMxRCxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQiwrREFBK0Q7SUFDL0QsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJLG1CQUFtQjtJQUN2QjtJQUNBO1FBRUksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJLG1CQUFtQjtJQUN2QjtJQUNBO1FBRUksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jaGFzaW5nLWRvdHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWNoYXNpbmctZG90cyB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNoYXNpbmdEb3RzUm90YXRlIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNSb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uc2stY2hhc2luZy1kb3RzIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNoYXNpbmdEb3RzQm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c0JvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNrLWNoYXNpbmctZG90cyAuc2stZG90MiB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c1JvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzaW5nRG90c1JvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzQm91bmNlIHtcclxuICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNCb3VuY2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-cube-grid.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-cube-grid.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-cube-grid {\r\n    position: relative;\r\n    top: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: auto;\r\n}\r\n\r\n.sk-cube-grid .sk-cube {\r\n    width: 33%;\r\n    height: 33%;\r\n    float: left;\r\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n}\r\n\r\n.sk-cube-grid .sk-cube1 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube2 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube3 {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube4 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube5 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube6 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube7 {\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube8 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n}\r\n\r\n.sk-cube-grid .sk-cube9 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n@-webkit-keyframes sk-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        transform: scale3D(1, 1, 1);\r\n    }\r\n    35% {\r\n        transform: scale3D(0, 0, 1);\r\n    }\r\n}\r\n\r\n@keyframes sk-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        transform: scale3D(1, 1, 1);\r\n    }\r\n    35% {\r\n        transform: scale3D(0, 0, 1);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY3ViZS1ncmlkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0VBQWtFO0lBQ2xFLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBRUksMkJBQTJCO0lBQy9CO0lBQ0E7UUFFSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBRUksMkJBQTJCO0lBQy9CO0lBQ0E7UUFFSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWN1YmUtZ3JpZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY3ViZS1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMzMlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG59XHJcblxyXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xyXG4gICAgMCUsIDcwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgfVxyXG4gICAgMzUlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgIH1cclxuICAgIDM1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-double-bounce.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-double-bounce.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-double-bounce {\r\n    top: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% {\r\n        -webkit-transform: scale(0.0)\r\n    }\r\n    50% {\r\n        -webkit-transform: scale(1.0)\r\n    }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n    0%, 100% {\r\n        transform: scale(0.0);\r\n        -webkit-transform: scale(0.0);\r\n    }\r\n    50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stZG91YmxlLWJvdW5jZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxzREFBc0Q7SUFDdEQsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1kb3VibGUtYm91bmNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1kb3VibGUtYm91bmNlIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5kb3VibGUtYm91bmNlMiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-line-material.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-line-material.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-line-material {\r\n    top: 0  ;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\n.sk-line-material .sk-child {\r\n    width: 100%;\r\n    height: 4px;\r\n    position: absolute;\r\n    top:0;\r\n    display: inline-block;\r\n    transform-origin: 0% 0%;\r\n    -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n    animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n}\r\n\r\n@-webkit-keyframes sk-line-material {\r\n    0%, 80%, 100% {\r\n        transform: scaleX(0);\r\n    }\r\n    40% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-line-material {\r\n    0% {\r\n        transform: scaleX(0);\r\n    }\r\n    100% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n#http-loader {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n\r\n.loader-bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    filter: alpha(opacity=70);\r\n    opacity: 1;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.colored-parent, .colored > div {\r\n    background-color: rgba(26, 188, 156, 0.80);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtRUFBbUU7SUFDbkUsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0k7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-rotating-plane.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-rotating-plane.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-rotating-plane {\r\n    position: relative;\r\n    top: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: auto;\r\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes sk-rotateplane {\r\n    0% {\r\n        -webkit-transform: perspective(120px)\r\n    }\r\n    50% {\r\n        -webkit-transform: perspective(120px) rotateY(180deg)\r\n    }\r\n    100% {\r\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\r\n    }\r\n}\r\n\r\n@keyframes sk-rotateplane {\r\n    0% {\r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\r\n    }\r\n    50% {\r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\r\n    }\r\n    100% {\r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stcm90YXRpbmctcGxhbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlEQUF5RDtRQUN6RDtJQUNKO0lBQ0E7UUFDSSw4REFBOEQ7UUFDOUQ7SUFDSjtJQUNBO1FBQ0ksaUVBQWlFO1FBQ2pFLHlFQUF5RTtJQUM3RTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stcm90YXRpbmctcGxhbmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLXJvdGF0aW5nLXBsYW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZylcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpXHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-spinner-pulse {\r\n    position: relative;\r\n    top: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: auto;\r\n    border-radius: 100%;\r\n    -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\r\n    animation: sk-pulseScaleOut 1s infinite ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes sk-pulseScaleOut {\r\n    0% {\r\n        transform: scale(0);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes sk-pulseScaleOut {\r\n    0% {\r\n        transform: scale(0);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stc3Bpbm5lci1wdWxzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBRUksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFFSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1zcGlubmVyLXB1bHNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1zcGlubmVyLXB1bHNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXB1bHNlU2NhbGVPdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLXB1bHNlU2NhbGVPdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1wdWxzZVNjYWxlT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stcHVsc2VTY2FsZU91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-three-bounce.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-three-bounce.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-three-bounce {\r\n    top: 50%;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 80px;\r\n    text-align: center;\r\n}\r\n\r\n.sk-three-bounce .sk-child {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\r\n}\r\n\r\n.sk-three-bounce .sk-bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.sk-three-bounce .sk-bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        transform: scale(0);\r\n    }\r\n    40% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-three-bounce {\r\n    0%, 80%, 100% {\r\n        transform: scale(0);\r\n    }\r\n    40% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stdGhyZWUtYm91bmNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0VBQW9FO0lBQ3BFLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stdGhyZWUtYm91bmNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay10aHJlZS1ib3VuY2Uge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNrLXRocmVlLWJvdW5jZSAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXRocmVlLWJvdW5jZSAxLjRzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLXRocmVlLWJvdW5jZSAxLjRzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbi5zay10aHJlZS1ib3VuY2UgLnNrLWJvdW5jZTEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG59XHJcblxyXG4uc2stdGhyZWUtYm91bmNlIC5zay1ib3VuY2UyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXRocmVlLWJvdW5jZSB7XHJcbiAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stdGhyZWUtYm91bmNlIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-wandering-cubes {\r\n    top: 50%;\r\n    margin: auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n}\r\n\r\n.sk-wandering-cubes .sk-cube {\r\n    width: 10px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\r\n    animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\r\n}\r\n\r\n.sk-wandering-cubes .sk-cube2 {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n}\r\n\r\n@-webkit-keyframes sk-wanderingCube {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    25% {\r\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\r\n    }\r\n    50% {\r\n        /* Hack to make FF rotate in the right direction */\r\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\r\n    }\r\n    50.1% {\r\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\r\n    }\r\n    75% {\r\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\r\n    }\r\n    100% {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n\r\n@keyframes sk-wanderingCube {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    25% {\r\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\r\n    }\r\n    50% {\r\n        /* Hack to make FF rotate in the right direction */\r\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\r\n    }\r\n    50.1% {\r\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\r\n    }\r\n    75% {\r\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\r\n    }\r\n    100% {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2FuZGVyaW5nLWN1YmVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHdFQUF3RTtJQUN4RSxnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHFEQUFxRDtJQUN6RDtJQUNBO1FBQ0ksa0RBQWtEO1FBRWxELDREQUE0RDtJQUNoRTtJQUNBO1FBRUksNERBQTREO0lBQ2hFO0lBQ0E7UUFFSSxvRUFBb0U7SUFDeEU7SUFDQTtRQUVJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHFEQUFxRDtJQUN6RDtJQUNBO1FBQ0ksa0RBQWtEO1FBRWxELDREQUE0RDtJQUNoRTtJQUNBO1FBRUksNERBQTREO0lBQ2hFO0lBQ0E7UUFFSSxvRUFBb0U7SUFDeEU7SUFDQTtRQUVJLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2FuZGVyaW5nLWN1YmVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay13YW5kZXJpbmctY3ViZXMge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNrLXdhbmRlcmluZy1jdWJlcyAuc2stY3ViZSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2std2FuZGVyaW5nQ3ViZSAxLjhzIGVhc2UtaW4tb3V0IC0xLjhzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmUgMS44cyBlYXNlLWluLW91dCAtMS44cyBpbmZpbml0ZSBib3RoO1xyXG59XHJcblxyXG4uc2std2FuZGVyaW5nLWN1YmVzIC5zay1jdWJlMiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLyogSGFjayB0byBtYWtlIEZGIHJvdGF0ZSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAuMSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLyogSGFjayB0byBtYWtlIEZGIHJvdGF0ZSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAuMSUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-wave.css":
/*!********************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-wave.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-wave {\r\n    position: relative;\r\n    top: 50%;\r\n    margin: auto;\r\n    width: 50px;\r\n    height: 40px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n}\r\n\r\n.sk-wave .sk-rect {\r\n    height: 100%;\r\n    width: 6px;\r\n    display: inline-block;\r\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\r\n    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\r\n}\r\n\r\n.sk-wave .sk-rect1 {\r\n    -webkit-animation-delay: -1.2s;\r\n    animation-delay: -1.2s;\r\n}\r\n\r\n.sk-wave .sk-rect2 {\r\n    -webkit-animation-delay: -1.1s;\r\n    animation-delay: -1.1s;\r\n}\r\n\r\n.sk-wave .sk-rect3 {\r\n    -webkit-animation-delay: -1s;\r\n    animation-delay: -1s;\r\n}\r\n\r\n.sk-wave .sk-rect5 {\r\n    -webkit-animation-delay: -0.8s;\r\n    animation-delay: -0.8s;\r\n}\r\n\r\n.sk-wave .sk-rect4 {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n}\r\n\r\n@-webkit-keyframes sk-waveStretchDelay {\r\n    0%, 40%, 100% {\r\n        transform: scaleY(0.4);\r\n    }\r\n    20% {\r\n        transform: scaleY(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-waveStretchDelay {\r\n    0%, 40%, 100% {\r\n        transform: scaleY(0.4);\r\n    }\r\n    20% {\r\n        transform: scaleY(1);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0VBQWdFO0lBQ2hFLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFFSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2std2F2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc2std2F2ZSAuc2stcmVjdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXdhdmVTdHJldGNoRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2std2F2ZSAuc2stcmVjdDEge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcclxufVxyXG5cclxuLnNrLXdhdmUgLnNrLXJlY3QyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuXHJcbi5zay13YXZlIC5zay1yZWN0MyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbn1cclxuXHJcbi5zay13YXZlIC5zay1yZWN0NSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG59XHJcblxyXG4uc2std2F2ZSAuc2stcmVjdDQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXdhdmVTdHJldGNoRGVsYXkge1xyXG4gICAgMCUsIDQwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2std2F2ZVN0cmV0Y2hEZWxheSB7XHJcbiAgICAwJSwgNDAlLCAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinkits.ts ***!
  \********************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#http-loader {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n\r\n.loader-bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    filter: alpha(opacity=70);\r\n    opacity: .7;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.colored-parent, .colored > div {\r\n    background-color: #333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmxvYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinkits */ "./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = 'rgba(70, 128, 255, 0.69)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.css */ "./src/app/shared/spinner/spinner.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-double-bounce.css */ "./src/app/shared/spinner/spinkit-css/sk-double-bounce.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-chasing-dots.css */ "./src/app/shared/spinner/spinkit-css/sk-chasing-dots.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-cube-grid.css */ "./src/app/shared/spinner/spinkit-css/sk-cube-grid.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-rotating-plane.css */ "./src/app/shared/spinner/spinkit-css/sk-rotating-plane.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-spinner-pulse.css */ "./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-three-bounce.css */ "./src/app/shared/spinner/spinkit-css/sk-three-bounce.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-wandering-cubes.css */ "./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-wave.css */ "./src/app/shared/spinner/spinkit-css/sk-wave.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-line-material.css */ "./src/app/shared/spinner/spinkit-css/sk-line-material.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: true,
    apiUrl: 'https://alaam.net:3000/',
    //apiUrl: 'http://localhost:4400/',
    s3_url: 'https://allam-stg.s3.ap-south-1.amazonaws.com/',
    agora: {
        appId: '407deb8eaa634e0482b0f5481eefd1e9'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mean\allam-cms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map