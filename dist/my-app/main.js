(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.guard */ "./src/app/login/login.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/userdetail/userdetail.component */ "./src/app/components/userdetail/userdetail.component.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/components/book/book.component.ts");
/* harmony import */ var _components_bookoverview_bookoverview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bookoverview/bookoverview.component */ "./src/app/components/bookoverview/bookoverview.component.ts");
/* harmony import */ var _components_bookeditor_bookeditor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bookeditor/bookeditor.component */ "./src/app/components/bookeditor/bookeditor.component.ts");
/* harmony import */ var _components_authoroverview_authoroverview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authoroverview/authoroverview.component */ "./src/app/components/authoroverview/authoroverview.component.ts");
/* harmony import */ var _components_authoreditor_authoreditor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/authoreditor/authoreditor.component */ "./src/app/components/authoreditor/authoreditor.component.ts");
/* harmony import */ var _components_authorcreate_authorcreate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/authorcreate/authorcreate.component */ "./src/app/components/authorcreate/authorcreate.component.ts");
/* harmony import */ var _components_pubview_pubview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pubview/pubview.component */ "./src/app/components/pubview/pubview.component.ts");
/* harmony import */ var _components_pubedit_pubedit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pubedit/pubedit.component */ "./src/app/components/pubedit/pubedit.component.ts");
/* harmony import */ var _components_pubcreate_pubcreate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pubcreate/pubcreate.component */ "./src/app/components/pubcreate/pubcreate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'book/:id', component: _components_book_book_component__WEBPACK_IMPORTED_MODULE_7__["BookComponent"] },
    // Requires login
    { path: 'userdetails', component: _components_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_6__["UserdetailComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'bookschema', component: _components_bookoverview_bookoverview_component__WEBPACK_IMPORTED_MODULE_8__["BookoverviewComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'authorschema', component: _components_authoroverview_authoroverview_component__WEBPACK_IMPORTED_MODULE_10__["AuthoroverviewComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'publisherschema', component: _components_pubview_pubview_component__WEBPACK_IMPORTED_MODULE_13__["PubviewComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'bookedit/:id', component: _components_bookeditor_bookeditor_component__WEBPACK_IMPORTED_MODULE_9__["BookeditorComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'authoredit/:id', component: _components_authoreditor_authoreditor_component__WEBPACK_IMPORTED_MODULE_11__["AuthoreditorComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'publisheredit/:id', component: _components_pubedit_pubedit_component__WEBPACK_IMPORTED_MODULE_14__["PubeditComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'authorcreate', component: _components_authorcreate_authorcreate_component__WEBPACK_IMPORTED_MODULE_12__["AuthorcreateComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    { path: 'publishercreate', component: _components_pubcreate_pubcreate_component__WEBPACK_IMPORTED_MODULE_15__["PubcreateComponent"], canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]] },
    // When path does not exist.
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WebCatalog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/userdetail/userdetail.component */ "./src/app/components/userdetail/userdetail.component.ts");
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.guard */ "./src/app/login/login.guard.ts");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/components/book/book.component.ts");
/* harmony import */ var _components_bookoverview_bookoverview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bookoverview/bookoverview.component */ "./src/app/components/bookoverview/bookoverview.component.ts");
/* harmony import */ var _components_bookeditor_bookeditor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bookeditor/bookeditor.component */ "./src/app/components/bookeditor/bookeditor.component.ts");
/* harmony import */ var _components_authoroverview_authoroverview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/authoroverview/authoroverview.component */ "./src/app/components/authoroverview/authoroverview.component.ts");
/* harmony import */ var _components_authoreditor_authoreditor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/authoreditor/authoreditor.component */ "./src/app/components/authoreditor/authoreditor.component.ts");
/* harmony import */ var _components_authorcreate_authorcreate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/authorcreate/authorcreate.component */ "./src/app/components/authorcreate/authorcreate.component.ts");
/* harmony import */ var _components_pubview_pubview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pubview/pubview.component */ "./src/app/components/pubview/pubview.component.ts");
/* harmony import */ var _components_pubedit_pubedit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pubedit/pubedit.component */ "./src/app/components/pubedit/pubedit.component.ts");
/* harmony import */ var _components_pubcreate_pubcreate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pubcreate/pubcreate.component */ "./src/app/components/pubcreate/pubcreate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailComponent"],
                _components_book_book_component__WEBPACK_IMPORTED_MODULE_17__["BookComponent"],
                _components_bookoverview_bookoverview_component__WEBPACK_IMPORTED_MODULE_18__["BookoverviewComponent"],
                _components_bookeditor_bookeditor_component__WEBPACK_IMPORTED_MODULE_19__["BookeditorComponent"],
                _components_authoroverview_authoroverview_component__WEBPACK_IMPORTED_MODULE_20__["AuthoroverviewComponent"],
                _components_authoreditor_authoreditor_component__WEBPACK_IMPORTED_MODULE_21__["AuthoreditorComponent"],
                _components_authorcreate_authorcreate_component__WEBPACK_IMPORTED_MODULE_22__["AuthorcreateComponent"],
                _components_pubview_pubview_component__WEBPACK_IMPORTED_MODULE_23__["PubviewComponent"],
                _components_pubedit_pubedit_component__WEBPACK_IMPORTED_MODULE_24__["PubeditComponent"],
                _components_pubcreate_pubcreate_component__WEBPACK_IMPORTED_MODULE_25__["PubcreateComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_login_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/authorcreate/authorcreate.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/authorcreate/authorcreate.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-card > * {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-grid-tile {\r\n    width: calc(50% - 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile:nth-child(2) {\r\n    left: calc(50% + 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile > * {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JjcmVhdGUvYXV0aG9yY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JjcmVhdGUvYXV0aG9yY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGUge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMjVweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGU6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlICsgMjVweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGUgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/authorcreate/authorcreate.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/authorcreate/authorcreate.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <h2>Create a new artist</h2>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input [formControl]=\"nameFormControl\" matInput name=\"name\" [(ngModel)]=\"name\" placeholder=\"Name\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input [formControl]=\"bioFormControl\" matInput name=\"bio\" [(ngModel)]=\"bio\" placeholder=\"bio\"  required>\n    <mat-error *ngIf=\"bioFormControl.hasError('required')\">\n        bio is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input [formControl]=\"countryFormControl\" matInput name=\"country\" [(ngModel)]=\"country\" placeholder=\"country\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n      country is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"birthyearFormControl\" matInput name=\"birthyear\" [(ngModel)]=\"birthyear\" placeholder=\"birthyear\" required>\n    <mat-error *ngIf=\"birthyearFormControl.hasError('required')\">\n      birthyear is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"imgUriFormControl\" matInput name=\"imgUri\" [(ngModel)]=\"imgUri\" placeholder=\"Image Uri\" required>\n    <mat-error *ngIf=\"imgUriFormControl.hasError('pattern') && !imgUrlFormControl.hasError('required')\">\n        Please enter a valid Image URI (example: 'http://example.com/i/img.png').\n      </mat-error>\n      <mat-error *ngIf=\"imgUriFormControl.hasError('required')\">\n        Image URI is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <button mat-flat-button (click)=\"createAuthor()\" color=\"primary\">Create Author</button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/authorcreate/authorcreate.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/authorcreate/authorcreate.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorcreateComponent", function() { return AuthorcreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorcreateComponent = /** @class */ (function () {
    function AuthorcreateComponent(router, authorService) {
        this.router = router;
        this.authorService = authorService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.bioFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.birthyearFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.imgUriFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
        ]);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AuthorcreateComponent.prototype.ngOnInit = function () {
    };
    AuthorcreateComponent.prototype.createAuthor = function () {
        var _this = this;
        this.authorService.createAuthor(this.currentUser.token, this.name, this.country, this.bio, this.birthyear, this.imgUri)
            .subscribe(function (data) {
            _this.router.navigate(['authorschema']);
        }, function (error) {
            _this.errorMessage = "Fatal error occured, author could not be created";
            _this.successMessage = null;
        });
    };
    AuthorcreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authorcreate',
            template: __webpack_require__(/*! ./authorcreate.component.html */ "./src/app/components/authorcreate/authorcreate.component.html"),
            styles: [__webpack_require__(/*! ./authorcreate.component.css */ "./src/app/components/authorcreate/authorcreate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthorcreateComponent);
    return AuthorcreateComponent;
}());



/***/ }),

/***/ "./src/app/components/authoreditor/authoreditor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/authoreditor/authoreditor.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-card > * {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-grid-tile {\r\n    width: calc(50% - 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile:nth-child(2) {\r\n    left: calc(50% + 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile > * {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JlZGl0b3IvYXV0aG9yZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JlZGl0b3IvYXV0aG9yZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGUge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMjVweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGU6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IGNhbGMoNTAlICsgMjVweCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1ncmlkLXRpbGUgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/authoreditor/authoreditor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/authoreditor/authoreditor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <h2>{{name}}</h2>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input [formControl]=\"nameFormControl\" matInput name=\"name\" [(ngModel)]=\"name\" value=\"{{name}}\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"bioFormControl\" matInput name=\"bio\" [(ngModel)]=\"bio\" value=\"{{bio}}\"  required>\n    <mat-error *ngIf=\"bioFormControl.hasError('required')\">\n        Bio is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"countryFormControl\" name=\"country\" [(ngModel)]=\"country\" value=\"{{country}}\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n        Genre is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"birthyearFormControl\" name=\"birthyear\" [(ngModel)]=\"birthyear\" value=\"{{birthyear}}\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n      birthyear is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"imgUriFormControl\" name=\"imgUri\" [(ngModel)]=\"imgUri\" value=\"{{imgUri}}\" required>\n    <mat-error *ngIf=\"imgUriFormControl.hasError('pattern') && !imgUriFormControl.hasError('required')\">\n        Please enter a valid Image URI (example: 'http://example.com/i/ex.png').\n      </mat-error>\n      <mat-error *ngIf=\"imgUriFormControl.hasError('required')\">\n        Image URI is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  \n  <button mat-flat-button (click)=\"editAuthor()\" color=\"primary\">Edit Author</button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/authoreditor/authoreditor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/authoreditor/authoreditor.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthoreditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoreditorComponent", function() { return AuthoreditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthoreditorComponent = /** @class */ (function () {
    function AuthoreditorComponent(route, authorService) {
        this.route = route;
        this.authorService = authorService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.bioFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.birthyearFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.imgUriFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
        ]);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AuthoreditorComponent.prototype.ngOnInit = function () {
        this.getAuthor();
    };
    AuthoreditorComponent.prototype.getAuthor = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        return this.authorService.getById(this.id)
            .subscribe(function (author) {
            _this.author = author;
            _this.name = author.name;
            _this.country = author.country;
            _this.bio = author.bio;
            _this.birthyear = author.birthyear;
            _this.imgUri = author.img;
        });
    };
    AuthoreditorComponent.prototype.editAuthor = function () {
        var _this = this;
        this.authorService.editAuthor(this.currentUser.token, this.id, this.name, this.country, this.bio, this.birthyear, this.imgUri)
            .subscribe(function (data) {
            _this.successMessage = "Author successfully edited";
            _this.errorMessage = null;
        }, function (error) {
            _this.errorMessage = "The author couldnt be edited, sorry.";
            _this.successMessage = null;
        });
    };
    AuthoreditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authoreditor',
            template: __webpack_require__(/*! ./authoreditor.component.html */ "./src/app/components/authoreditor/authoreditor.component.html"),
            styles: [__webpack_require__(/*! ./authoreditor.component.css */ "./src/app/components/authoreditor/authoreditor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthoreditorComponent);
    return AuthoreditorComponent;
}());



/***/ }),

/***/ "./src/app/components/authoroverview/authoroverview.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/authoroverview/authoroverview.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-weight: 700;\r\n    color: #EEEEEE;\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JvdmVydmlldy9hdXRob3JvdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRob3JvdmVydmlldy9hdXRob3JvdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjRUVFRUVFO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/authoroverview/authoroverview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/authoroverview/authoroverview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<h1>Authors</h1>\n<p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n<p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n<table mat-table [dataSource]=\"list\" matSort class=\"mat-elevation-z1\">\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"bio\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Bio </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.bio}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button (click)=\"deleteAuthor(element._id)\" class=\"warning-btn\">Delete</a></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"details\">\n        <th mat-header-cell *matHeaderCellDef>  <a mat-flat-button routerLink=\"/authorcreate\" class=\"success-btn\">Create</a></th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button routerLink=\"/authoredit/{{element._id}}\"color=\"primary\">Edit</a></td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/authoroverview/authoroverview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/authoroverview/authoroverview.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthoroverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoroverviewComponent", function() { return AuthoroverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthoroverviewComponent = /** @class */ (function () {
    function AuthoroverviewComponent(authorService) {
        this.authorService = authorService;
        this.displayedColumns = ['name', 'bio', 'delete', 'details'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AuthoroverviewComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    AuthoroverviewComponent.prototype.getAll = function () {
        var _this = this;
        this.authorService.getAll()
            .subscribe(function (authors) {
            _this.list = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](authors);
        });
    };
    AuthoroverviewComponent.prototype.deleteAuthor = function (authorId) {
        var _this = this;
        this.authorService.deleteAuthor(this.currentUser.token, authorId)
            .subscribe(function (data) {
            _this.successMessage = "The author has been removed.";
            _this.errorMessage = null;
            _this.getAll();
        }, function (error) {
            _this.errorMessage = "The author couldn't be removed";
            _this.successMessage = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AuthoroverviewComponent.prototype, "sort", void 0);
    AuthoroverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authoroverview',
            template: __webpack_require__(/*! ./authoroverview.component.html */ "./src/app/components/authoroverview/authoroverview.component.html"),
            styles: [__webpack_require__(/*! ./authoroverview.component.css */ "./src/app/components/authoroverview/authoroverview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthoroverviewComponent);
    return AuthoroverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/book/book.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/book/book.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay9ib29rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/book/book.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/book/book.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card class=\"announcement\">\n  <img src=\"{{book.img}}\" mat-card-image>\n  <h1 class=\"mat-headline\">{{book.name | uppercase }}</h1>\n</mat-card>\n<mat-card>\n    <h3>Details:</h3>\n    <p>{{book.description}}</p>\n    <br>\n    <p>Publisher: {{book.publisher.name}}</p>\n    <p>Genr: {{book.genre}}</p>\n    <p>Release date: {{book.publishdate}}</p>\n    <p>Language: {{book.language}}</p>\n\n    \n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/book/book.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/book/book.component.ts ***!
  \***************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookComponent = /** @class */ (function () {
    function BookComponent(route, bookService, location, loginService) {
        this.route = route;
        this.bookService = bookService;
        this.location = location;
        this.loginService = loginService;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    BookComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.loginService.isLoggedIn;
        if (this.currentUser != undefined) {
            this.decodedToken = this.helper.decodeToken(this.currentUser.token);
            console.log(this.decodedToken);
        }
        this.getBook();
    };
    BookComponent.prototype.getBook = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.bookService.getById(id)
            .subscribe(function (book) { return _this.book = book; });
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/components/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/components/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/components/bookeditor/bookeditor.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/bookeditor/bookeditor.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-card > * {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  mat-grid-tile {\r\n    width: calc(50% - 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile:nth-child(2) {\r\n    left: calc(50% + 25px) !important;\r\n  }\r\n  \r\n  mat-grid-tile > * {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rZWRpdG9yL2Jvb2tlZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2tlZGl0b3IvYm9va2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBtYXQtZ3JpZC10aWxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDI1cHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZ3JpZC10aWxlOm50aC1jaGlsZCgyKSB7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDI1cHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZ3JpZC10aWxlID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/bookeditor/bookeditor.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/bookeditor/bookeditor.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<mat-card>\n  <h2>{{book.author.name}}</h2>\n  <h2>{{book.publisher.name}}</h2>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n\n  <mat-form-field>\n    <input [formControl]=\"nameFormControl\" matInput name=\"name\" [(ngModel)]=\"name\" placeholder=\"name\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n      name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"descriptionFormControl\" matInput name=\"description\" [(ngModel)]=\"description\" placeholder=\"description\" required>\n    <mat-error *ngIf=\"descriptionFormControl.hasError('required')\">\n      description is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"genreFormControl\" matInput name=\"genre\" [(ngModel)]=\"genre\" placeholder=\"genre\" required>\n    <mat-error *ngIf=\"birthyearFormControl.hasError('required')\">\n      genre is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"languageFormControl\" matInput name=\"language\" [(ngModel)]=\"language\" placeholder=\"language\" required>\n    <mat-error *ngIf=\"languageFormControl.hasError('required')\">\n      language is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"publishdateFormControl\" matInput name=\"publishdate\" [(ngModel)]=\"publishdate\" placeholder=\"publishdate\" required>\n    <mat-error *ngIf=\"birthyearFormControl.hasError('required')\">\n      publishdate is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n\n\n\n  <mat-form-field>\n    <input [formControl]=\"imgUriFormControl\" matInput name=\"imgUri\" [(ngModel)]=\"imgUri\" placeholder=\"Image Uri\" required>\n    <mat-error *ngIf=\"imgUriFormControl.hasError('pattern') && !imgUrlFormControl.hasError('required')\">\n        Please enter a valid Image URI (example: 'http://example.com/i/img.png').\n      </mat-error>\n      <mat-error *ngIf=\"imgUriFormControl.hasError('required')\">\n        Image URI is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <button mat-button (click)=\"editBook()\" color=\"warn\">Edit</button>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/bookeditor/bookeditor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/bookeditor/bookeditor.component.ts ***!
  \***************************************************************/
/*! exports provided: BookeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookeditorComponent", function() { return BookeditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookeditorComponent = /** @class */ (function () {
    function BookeditorComponent(route, bookService) {
        this.route = route;
        this.bookService = bookService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.descriptionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.genreFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.publishdateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.imageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    BookeditorComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    BookeditorComponent.prototype.getBook = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        return this.bookService.getById(this.id)
            .subscribe(function (book) {
            _this.book = book;
            _this.name = book.name;
            _this.genre = book.genre;
            _this.language = book.language;
            _this.description = book.description;
            _this.publishdate = book.publishdate;
            _this.image = book.image;
        });
    };
    //sig: token: string, id:string, name: string, description: string, genre: string, language: string, publishdate : string, image : string
    BookeditorComponent.prototype.editBook = function () {
        var _this = this;
        this.bookService.editBook(this.currentUser.token, this.id, this.name, this.description, this.genre, this.language, this.publishdate, this.image)
            .subscribe(function (data) {
            _this.successMessage = "book has been edited";
            _this.errorMessage = null;
        }, function (error) {
            _this.errorMessage = "book couldnt be edited";
            _this.successMessage = null;
        });
    };
    BookeditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookeditor',
            template: __webpack_require__(/*! ./bookeditor.component.html */ "./src/app/components/bookeditor/bookeditor.component.html"),
            styles: [__webpack_require__(/*! ./bookeditor.component.css */ "./src/app/components/bookeditor/bookeditor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], BookeditorComponent);
    return BookeditorComponent;
}());



/***/ }),

/***/ "./src/app/components/bookoverview/bookoverview.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/bookoverview/bookoverview.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n}\r\n\r\nh1 {\r\n    font-weight: 700;\r\n    color: #EEEEEE;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rb3ZlcnZpZXcvYm9va292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2tvdmVydmlldy9ib29rb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjRUVFRUVFO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/bookoverview/bookoverview.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/bookoverview/bookoverview.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1>Catalog:</h1>\n<p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n<p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n\n<table mat-table [dataSource]=\"schedule\" matSort class=\"mat-elevation-z1\" matSortActive=\"name\" matSortDirection=\"asc\">\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Title </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n    \n\n    <ng-container matColumnDef=\"author\">\n        <th mat-header-cell *matHeaderCellDef> Author </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.author.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"publisher\">\n        <th mat-header-cell *matHeaderCellDef> Publisher </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.publisher.name}} </td>\n    </ng-container>\n\n\n\n    \n    <!-- 'name', 'author','publisher', 'genre', 'language', 'publishdate', 'image' -->\n\n    <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button (click)=\"deleteBook(element._id)\" class=\"warning-btn\">Delete</a></td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"details\">\n        <th mat-header-cell *matHeaderCellDef> <a mat-flat-button routerLink=\"/home\" class=\"success-btn\">Create</a> </th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button routerLink=\"/bookedit/{{element._id}}\" color=\"primary\">Edit</a></td>\n    </ng-container>\n\n\n    \n    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/bookoverview/bookoverview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bookoverview/bookoverview.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookoverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookoverviewComponent", function() { return BookoverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookoverviewComponent = /** @class */ (function () {
    function BookoverviewComponent(bookService) {
        this.bookService = bookService;
        this.displayedColumns = ['name', 'author', 'publisher', 'delete', 'details'];
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    BookoverviewComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BookoverviewComponent.prototype.getAll = function () {
        var _this = this;
        this.bookService.getAll()
            .subscribe(function (books) {
            _this.schedule = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](books);
            _this.schedule.sort = _this.sort;
        });
    };
    BookoverviewComponent.prototype.deleteBook = function (bookId) {
        var _this = this;
        this.bookService.delete(this.currentUser.token, bookId)
            .subscribe(function (data) {
            _this.successMessage = "Book deleted, you cannot reverse this change.";
            _this.errorMessage = null;
            _this.getAll();
        }, function (error) {
            _this.errorMessage = "This book could not be removed.";
            _this.successMessage = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BookoverviewComponent.prototype, "sort", void 0);
    BookoverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookoverview',
            template: __webpack_require__(/*! ./bookoverview.component.html */ "./src/app/components/bookoverview/bookoverview.component.html"),
            styles: [__webpack_require__(/*! ./bookoverview.component.css */ "./src/app/components/bookoverview/bookoverview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], BookoverviewComponent);
    return BookoverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <h4>&copy; OpenWebCatalog by Jöran Hompesch</h4>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    margin-bottom: 50px;\n    background: #16003f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTYwMDNmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button routerLink=\"/home\">Home</button>\n  <button mat-button routerLink=\"/agenda\">Collection</button>\n  <!-- When you're not logged in -->\n  <button mat-button [matMenuTriggerFor]=\"loginOptions\" *ngIf=\"!(isLoggedIn$ | async)\" >Login</button>\n  <!-- When you're logged in.-->\n  <button mat-button [matMenuTriggerFor]=\"accountOptions\" *ngIf=\"isLoggedIn$ | async\" >My Account</button>\n  <button mat-button [matMenuTriggerFor]=\"adminOptions\" *ngIf=\"(isLoggedIn$ | async)\" >Advanced view</button>\n  <button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn$ | async\"> Logout</button>\n\n  <mat-menu #loginOptions=\"matMenu\">\n    <button mat-menu-item routerLink=\"/login\">Login</button>\n    <button mat-menu-item routerLink=\"/register\">Register</button>\n  </mat-menu>\n\n  <mat-menu #accountOptions=\"matMenu\">\n    <button mat-menu-item routerLink=\"/userdetails\">My Account</button>\n  </mat-menu>\n\n  <mat-menu #adminOptions=\"matMenu\">\n    <button mat-menu-item routerLink=\"/bookschema\">Books</button>\n    <button mat-menu-item routerLink=\"/authorschema\">Authors</button>\n    <button mat-menu-item routerLink=\"/publisherschema\">Publishers</button>\n  </mat-menu>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.loginService.isLoggedIn;
        if (this.currentUser != undefined) {
            this.decodedToken = this.helper.decodeToken(this.currentUser.token);
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n}\r\n\r\nh1 {\r\n    font-weight: 700;\r\n    color: #EEEEEE;\r\n    margin: 0;\r\n}\r\n\r\n.announcement {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.announcement > h1 {\r\n    color: rgba(0,0,0,.87);\r\n}\r\n\r\n.announcement > img {\r\n    max-height: 540px;\r\n    height: 540px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: 0 0;\r\n       object-position: 0 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQix1QkFBb0I7T0FBcEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjRUVFRUVFO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYW5ub3VuY2VtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5hbm5vdW5jZW1lbnQgPiBoMSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcblxyXG4uYW5ub3VuY2VtZW50ID4gaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDU0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div *ngIf=\"dbook\">\n    <h1>Editors' choice</h1>\n    <mat-card class=\"announcement\">\n        <img src=\"{{dbook.img}}\" mat-card-image>\n        <h1 class=\"mat-headline\"><a routerLink=\"/book/{{ dbook._id }}\">{{dbook.name | uppercase }} | {{dbook.genre | uppercase }} |  {{dbook.author.name | uppercase }} </a></h1>\n    </mat-card>\n</div>\n\n<div *ngIf=\"!(dbook)\">\n    <h1>Sadly no books are available at this moment.</h1>\n    <mat-card>\n        Please add one or come back at a later time!\n    </mat-card>\n</div>\n\n<div *ngIf=\"schedule\">\n    <h1>Top viewed</h1>\n    <table mat-table [dataSource]=\"schedule\" matSort class=\"mat-elevation-z1\" matSortActive=\"name\" matSortDirection=\"asc\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            <a routerLink=\"/book/{{ dbook._id }}\"> </a>\n        </ng-container>\n        \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"author\">\n            <th mat-header-cell *matHeaderCellDef> Author </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.author.name}} </td>\n        </ng-container>\n        \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"genre\">\n            <th mat-header-cell *matHeaderCellDef> Genre </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.genre}} </td>\n        </ng-container>\n        \n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"publisher\">\n            <th mat-header-cell *matHeaderCellDef> publisher </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.publisher.name}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"details\">\n            <th mat-header-cell *matHeaderCellDef> details </th>\n            <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button color=\"primary\" routerLink=\"/book/{{ element._id }}\">Details</a></td>\n        </ng-container>\n\n        \n        \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/book.service */ "./src/app/services/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookService) {
        this.bookService = bookService;
        this.displayedColumns = ['name', 'genre', 'publisher', 'author', 'details'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getFive();
        this.getPopular();
    };
    HomeComponent.prototype.getFive = function () {
        var _this = this;
        this.bookService.getFive()
            .subscribe(function (books) {
            _this.schedule = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](books);
            _this.schedule.sort = _this.sort;
        });
    };
    HomeComponent.prototype.getPopular = function () {
        var _this = this;
        this.bookService.getPopular()
            .subscribe(function (books) {
            _this.dbook = books;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], HomeComponent.prototype, "sort", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    flex-direction: column;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  mat-card > * {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  mat-grid-tile {\n    width: calc(50% - 25px) !important;\n    box-sizing: border-box;\n  }\n  \n  mat-grid-tile:nth-child(2) {\n    left: calc(50% + 25px) !important;\n    box-sizing: border-box;\n  }\n  \n  mat-grid-tile > * {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  .mat-form-field {\n    width: 100%;\n  }\n  \n  h1 {\n    font-weight: 700;\n    color: #EEEEEE;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBtYXQtY2FyZCA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAyNXB4KSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlOm50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAyNXB4KSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI0VFRUVFRTtcbiAgICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1>LOGIN</h1>\n<mat-card>\n  <form class=\"loginForm\">\n    <table cellspacing=\"0\" width=\"100%\">\n      <tr *ngIf=\"errorMessage\">\n        <td>\n            <p class=\"errMsg\">{{errorMessage}}</p>\n        </td>\n      </tr>\n      <tr *ngIf=\"successMessage\">\n          <td>\n              <p class=\"successMsg\">{{successMessage}}</p>\n          </td>\n        </tr>\n      <tr>\n        <td>\n            <mat-form-field>\n              <input name=\"username\" matInput [(ngModel)]=\"username\" placeholder=\"Username\" required>\n            </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n            <mat-form-field>\n              <input name=\"password\" matInput [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" required>\n            </mat-form-field>\n        </td>\n      </tr>\n    </table>\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </form>\n  <button mat-flat-button (click)=\"login()\" color=\"primary\">Login</button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, loginService) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.errorMessage = "You tried to login with incorrect credentials!";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pubcreate/pubcreate.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pubcreate/pubcreate.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHViY3JlYXRlL3B1YmNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pubcreate/pubcreate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pubcreate/pubcreate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <h2>Create a new publisher</h2>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input [formControl]=\"nameFormControl\" matInput name=\"name\" [(ngModel)]=\"name\" placeholder=\"Name\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input [formControl]=\"countryFormControl\" matInput name=\"country\" [(ngModel)]=\"country\" placeholder=\"country\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n      country is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"cityFormControl\" matInput name=\"city\" [(ngModel)]=\"city\" placeholder=\"city\" required>\n    <mat-error *ngIf=\"birthyearFormControl.hasError('required')\">\n      city is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"addressFormControl\" matInput name=\"address\" [(ngModel)]=\"address\" placeholder=\"address\" required>\n    <mat-error *ngIf=\"addressFormControl.hasError('required')\">\n      address is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"emailFormControl\" matInput name=\"email\" [(ngModel)]=\"email\" placeholder=\"emai\" required>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      emai is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input [formControl]=\"phoneFormControl\" matInput name=\"phone\" [(ngModel)]=\"phone\" placeholder=\"phone\" required>\n    <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\n      phone is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  \n\n\n  <button mat-flat-button (click)=\"createPublisher()\" color=\"primary\">Create Publisher</button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/pubcreate/pubcreate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pubcreate/pubcreate.component.ts ***!
  \*************************************************************/
/*! exports provided: PubcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubcreateComponent", function() { return PubcreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/publisher.service */ "./src/app/services/publisher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PubcreateComponent = /** @class */ (function () {
    function PubcreateComponent(router, publisherService) {
        this.router = router;
        this.publisherService = publisherService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.addressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PubcreateComponent.prototype.ngOnInit = function () {
    };
    PubcreateComponent.prototype.createPublisher = function () {
        var _this = this;
        this.publisherService.createPublisher(this.currentUser.token, this.name, this.country, this.city, this.address, this.email, this.phone)
            .subscribe(function (data) {
            _this.router.navigate(['publisherschema']);
        }, function (error) {
            _this.errorMessage = "Fatal error occured, publisher could not be created";
            _this.successMessage = null;
        });
    };
    PubcreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pubcreate',
            template: __webpack_require__(/*! ./pubcreate.component.html */ "./src/app/components/pubcreate/pubcreate.component.html"),
            styles: [__webpack_require__(/*! ./pubcreate.component.css */ "./src/app/components/pubcreate/pubcreate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__["PublisherService"]])
    ], PubcreateComponent);
    return PubcreateComponent;
}());



/***/ }),

/***/ "./src/app/components/pubedit/pubedit.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pubedit/pubedit.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHViZWRpdC9wdWJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pubedit/pubedit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pubedit/pubedit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <h2>{{name}}</h2>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input [formControl]=\"nameFormControl\" matInput name=\"name\" [(ngModel)]=\"name\" value=\"{{name}}\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"countryFormControl\" name=\"country\" [(ngModel)]=\"country\" value=\"{{country}}\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n        Genre is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n\n  <mat-form-field>\n    <input matInput [formControl]=\"cityFormControl\" name=\"city\" [(ngModel)]=\"city\" value=\"{{city}}\" required>\n    <mat-error *ngIf=\"cityFormControl.hasError('required')\">\n        City is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"addressFormControl\" name=\"address\" [(ngModel)]=\"address\" value=\"{{address}}\" required>\n    <mat-error *ngIf=\"addressFormControl.hasError('required')\">\n      address is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"emailFormControl\" name=\"email\" [(ngModel)]=\"email\" value=\"{{email}}\" required>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      email is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"phoneFormControl\" name=\"phone\" [(ngModel)]=\"phone\" value=\"{{phone}}\" required>\n    <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\n      phone is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n\n  \n\n  \n  <button mat-flat-button (click)=\"editPublisher()\" color=\"primary\">Edit Publisher</button>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/components/pubedit/pubedit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pubedit/pubedit.component.ts ***!
  \*********************************************************/
/*! exports provided: PubeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubeditComponent", function() { return PubeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/publisher.service */ "./src/app/services/publisher.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PubeditComponent = /** @class */ (function () {
    function PubeditComponent(route, publisherService) {
        this.route = route;
        this.publisherService = publisherService;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.addressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PubeditComponent.prototype.ngOnInit = function () {
        this.getPublisher();
    };
    PubeditComponent.prototype.getPublisher = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        return this.publisherService.getById(this.id)
            .subscribe(function (publisher) {
            _this.publisher = publisher;
            _this.name = publisher.name;
            _this.country = publisher.country;
            _this.city = publisher.city;
            _this.address = publisher.address;
            _this.email = publisher.email;
            _this.phone = publisher.phone;
        });
    };
    PubeditComponent.prototype.editPublisher = function () {
        var _this = this;
        this.publisherService.editPublisher(this.currentUser.token, this.id, this.name, this.country, this.city, this.address, this.email, this.phone)
            .subscribe(function (data) {
            _this.successMessage = "Publisheredited";
            _this.errorMessage = null;
        }, function (error) {
            _this.errorMessage = "cant edit publisher ,,,,,,";
            _this.successMessage = null;
        });
    };
    PubeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pubedit',
            template: __webpack_require__(/*! ./pubedit.component.html */ "./src/app/components/pubedit/pubedit.component.html"),
            styles: [__webpack_require__(/*! ./pubedit.component.css */ "./src/app/components/pubedit/pubedit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__["PublisherService"]])
    ], PubeditComponent);
    return PubeditComponent;
}());



/***/ }),

/***/ "./src/app/components/pubview/pubview.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pubview/pubview.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-weight: 700;\r\n    color: #EEEEEE;\r\n    margin: 0;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJ2aWV3L3B1YnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVidmlldy9wdWJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pubview/pubview.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pubview/pubview.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1>Publishers:</h1>\n<p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n<p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n<table mat-table [dataSource]=\"list\" matSort class=\"mat-elevation-z1\">\n\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"country\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Country of origin </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact E-mail </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact Phone-nr </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button (click)=\"deletePublisher(element._id)\" class=\"warning-btn\">Delete</a></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"details\">\n        <th mat-header-cell *matHeaderCellDef>  <a mat-flat-button routerLink=\"/publishercreate\" class=\"success-btn\">Create</a></th>\n        <td mat-cell *matCellDef=\"let element\"> <a mat-flat-button routerLink=\"/publisheredit/{{element._id}}\"color=\"primary\">Edit</a></td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/pubview/pubview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pubview/pubview.component.ts ***!
  \*********************************************************/
/*! exports provided: PubviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubviewComponent", function() { return PubviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/publisher.service */ "./src/app/services/publisher.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PubviewComponent = /** @class */ (function () {
    function PubviewComponent(publisherService) {
        this.publisherService = publisherService;
        this.displayedColumns = ['name', 'country', 'email', 'phone', 'delete', 'details'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    PubviewComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    PubviewComponent.prototype.getAll = function () {
        var _this = this;
        this.publisherService.getAll()
            .subscribe(function (publishers) {
            _this.list = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](publishers);
        });
    };
    PubviewComponent.prototype.deleteAuthor = function (publisherId) {
        var _this = this;
        this.publisherService.deleteAuthor(this.currentUser.token, publisherId)
            .subscribe(function (data) {
            _this.successMessage = "The publisher has been removed";
            _this.errorMessage = null;
            _this.getAll();
        }, function (error) {
            _this.errorMessage = "The publisher cant be removed";
            _this.successMessage = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], PubviewComponent.prototype, "sort", void 0);
    PubviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pubview',
            template: __webpack_require__(/*! ./pubview.component.html */ "./src/app/components/pubview/pubview.component.html"),
            styles: [__webpack_require__(/*! ./pubview.component.css */ "./src/app/components/pubview/pubview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_publisher_service__WEBPACK_IMPORTED_MODULE_1__["PublisherService"]])
    ], PubviewComponent);
    return PubviewComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 50px;\n    box-sizing: border-box;\n  }\n  \n  mat-card > * {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  mat-grid-tile {\n    width: calc(50% - 25px) !important;\n  }\n  \n  mat-grid-tile:nth-child(2) {\n    left: calc(50% + 25px) !important;\n  }\n  \n  mat-grid-tile > * {\n    width: 100%;\n  }\n  \n  h1 {\n    font-weight: 700;\n    color: #EEEEEE;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBtYXQtY2FyZCA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAyNXB4KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0LWdyaWQtdGlsZTpudGgtY2hpbGQoMikge1xuICAgIGxlZnQ6IGNhbGMoNTAlICsgMjVweCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIG1hdC1ncmlkLXRpbGUgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjRUVFRUVFO1xuICAgIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1>REGISTER AN ACCOUNT</h1>\n<mat-card>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input [formControl]=\"usernameFormControl\" matInput name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" required>\n    <mat-error *ngIf=\"usernameFormControl.hasError('required')\">\n        Username is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [formControl]=\"passwordFormControl\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\" required>\n    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n        Password is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [formControl]=\"passwordRepeatFormControl\" name=\"passwordRepeat\" [(ngModel)]=\"passwordRepeat\" placeholder=\"Password (repeat)\" type=\"password\" required>\n    <mat-error *ngIf=\"passwordRepeatFormControl.hasError('required')\">\n        Password Repeat is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [formControl]=\"nameFormControl\" name=\"name\" [(ngModel)]=\"name\" placeholder=\" name\" required>\n    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n         name is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput [formControl]=\"countryFormControl\" name=\"country\" [(ngModel)]=\"country\" placeholder=\"Country\" required>\n    <mat-error *ngIf=\"countryFormControl.hasError('required')\">\n        Country is <strong>required</strong>\n      </mat-error>\n  </mat-form-field>\n  <button mat-flat-button (click)=\"register()\" color=\"primary\">Register</button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, loginService) {
        this.userService = userService;
        this.loginService = loginService;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.passwordRepeatFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loginService.logout();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.password == this.passwordRepeat) {
            this.userService.register(this.username, this.password, this.name, this.country)
                .subscribe(function (data) {
                _this.successMessage = "Your account has been successfully created! You can now try to login.";
                _this.errorMessage = null;
            }, function (error) {
                _this.errorMessage = "We're sorry, that username has already been taken. Try something else.";
                _this.successMessage = null;
            });
        }
        else {
            this.errorMessage = "We're sorry, the passwords you filled in aren't alike.";
            this.successMessage = null;
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/userdetail/userdetail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/userdetail/userdetail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 50px;\n    box-sizing: border-box;\n  }\n  \n  mat-card > * {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  mat-grid-tile {\n    width: calc(50% - 25px) !important;\n  }\n  \n  mat-grid-tile:nth-child(2) {\n    left: calc(50% + 25px) !important;\n  }\n  \n  mat-grid-tile > * {\n    width: 100%;\n  }\n  \n  h1 {\n    font-weight: 700;\n    color: #EEEEEE;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyZGV0YWlsL3VzZXJkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmRldGFpbC91c2VyZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIG1hdC1jYXJkID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIG1hdC1ncmlkLXRpbGUge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDI1cHgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICBtYXQtZ3JpZC10aWxlOm50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAyNXB4KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0LWdyaWQtdGlsZSA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNFRUVFRUU7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/userdetail/userdetail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/userdetail/userdetail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<h1>Account Details</h1>\n<mat-card>\n  <p *ngIf=\"errorMessage\" class=\"errMsg\">{{errorMessage}}</p>\n  <p *ngIf=\"successMessage\" class=\"successMsg\">{{successMessage}}</p>\n  <mat-form-field>\n    <input matInput name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" value=\"{{user.username}}\" disabled>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput name=\"name\" [(ngModel)]=\"name\" placeholder=\"name\" value=\"{{user.name}}\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput name=\"country\" [(ngModel)]=\"country\" placeholder=\"Country\" value=\"{{user.country}}\" required>\n  </mat-form-field>\n  <button mat-flat-button (click)=\"changeDetails()\" color=\"primary\">Change details</button>\n</mat-card>\n\n<mat-card>\n  <h2>Change password</h2>\n  <h2>Make sure to use keypassX or write it down!</h2>\n  <mat-form-field>\n    <input matInput name=\"password\" [(ngModel)]=\"password\" placeholder=\"Current Password\" type=\"password\"  required>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput name=\"newPassword\" [(ngModel)]=\"newPassword\" placeholder=\"New Password\" type=\"password\" required>\n  </mat-form-field>\n  <button mat-flat-button (click)=\"changePassword()\" color=\"primary\">Change password</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/userdetail/userdetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/userdetail/userdetail.component.ts ***!
  \***************************************************************/
/*! exports provided: UserdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailComponent", function() { return UserdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserdetailComponent = /** @class */ (function () {
    function UserdetailComponent(userService) {
        this.userService = userService;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserdetailComponent.prototype.getUser = function () {
        var _this = this;
        this.decodedToken = this.helper.decodeToken(this.currentUser.token);
        return this.userService.getById(this.decodedToken.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.name = user.name;
            _this.country = user.country;
        });
    };
    UserdetailComponent.prototype.changeDetails = function () {
        var _this = this;
        this.userService.changeDetails(this.currentUser.token, this.name, this.country)
            .subscribe(function (data) {
            _this.getUser();
            _this.successMessage = "Account succesfully edited!!";
            _this.errorMessage = null;
        }, function (error) {
            _this.errorMessage = "Due to an error we were unable to edit your user, please try at a later moment.";
            _this.successMessage = null;
        });
    };
    UserdetailComponent.prototype.changePassword = function () {
        var _this = this;
        this.userService.getById(this.decodedToken.userId)
            .subscribe(function (user) {
            if (user.password == _this.password) {
                if (_this.password !== _this.newPassword) {
                    _this.userService.changePassword(_this.currentUser.token, _this.password, _this.newPassword)
                        .subscribe(function (data) {
                        _this.getUser();
                        _this.successMessage = "Your account has been successfully edited!";
                        _this.errorMessage = null;
                    }, function (error) {
                        _this.errorMessage = "Due to some difficulties we are unable to change your details, try again.";
                        _this.successMessage = null;
                    });
                }
                else {
                    _this.errorMessage = "Your old and new password are the same, your password hasn't been changed.";
                    _this.successMessage = null;
                }
            }
            else {
                _this.errorMessage = "The password you've given, isn't the same as the one in our database.";
                _this.successMessage = null;
            }
        });
    };
    UserdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdetail',
            template: __webpack_require__(/*! ./userdetail.component.html */ "./src/app/components/userdetail/userdetail.component.html"),
            styles: [__webpack_require__(/*! ./userdetail.component.css */ "./src/app/components/userdetail/userdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserdetailComponent);
    return UserdetailComponent;
}());



/***/ }),

/***/ "./src/app/login/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuard = /** @class */ (function () {
    function LoginGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.loginService.isLoggedIn // {1}
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), // {2} 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                console.log('user not logged in');
                _this.router.navigate(['home']); // {4}
                return false;
            }
            return true;
        }));
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.authorUrl = 'http://localhost:3000/api/authors'; // URL to web api
    }
    AuthorService.prototype.getAll = function () {
        return this.http.get(this.authorUrl);
    };
    AuthorService.prototype.getById = function (id) {
        return this.http.get(this.authorUrl + '?id=' + id);
    };
    AuthorService.prototype.editAuthor = function (token, id, name, country, bio, birthyear, imgLink) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.put(this.authorUrl, {
            "id": id,
            "name": name,
            "country": country,
            "bio": bio,
            "birthyear": birthyear,
            "img": imgLink
        }, httpOptions);
    };
    AuthorService.prototype.createAuthor = function (token, name, country, bio, birthyear, imgLink) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.post(this.authorUrl, {
            "name": name,
            "country": country,
            "bio": bio,
            "birthyear": birthyear,
            "img": imgLink
        }, httpOptions);
    };
    AuthorService.prototype.deleteAuthor = function (token, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.delete(this.authorUrl + '?id=' + id, httpOptions);
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.bookUrl = 'http://localhost:3000/api/books'; // URL to web api
    }
    BookService.prototype.getAll = function () {
        return this.http.get(this.bookUrl);
    };
    BookService.prototype.getFive = function () {
        return this.http.get(this.bookUrl + '?limit=10');
    };
    BookService.prototype.getPopular = function () {
        return this.http.get(this.bookUrl + '?limit=1');
    };
    BookService.prototype.getById = function (id) {
        return this.http.get(this.bookUrl + '?id=' + id);
    };
    BookService.prototype.delete = function (token, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.delete(this.bookUrl + '?id=' + id, httpOptions);
    };
    BookService.prototype.createBook = function (token, author, publisher, name, description, genre, language, publishdate, image) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.post(this.bookUrl, {
            "author": author,
            "publisher": publisher,
            "name": name,
            "description": description,
            "genre": genre,
            "language": language,
            "publishdate": publishdate,
            "img": image
        }, httpOptions);
    };
    BookService.prototype.editBook = function (token, id, name, description, genre, language, publishdate, image) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.put(this.bookUrl, {
            "id": id,
            "name": name,
            "description": description,
            "genre": genre,
            "language": language,
            "publishdate": publishdate,
            "img": image,
        }, httpOptions);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:3000/api/login'; // URL to web api
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(LoginService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.loginUrl, { "username": username, "password": password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.loggedIn.next(true);
            }
            return user;
        }));
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/publisher.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/publisher.service.ts ***!
  \***********************************************/
/*! exports provided: PublisherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherService", function() { return PublisherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublisherService = /** @class */ (function () {
    function PublisherService(http) {
        this.http = http;
        this.publisherUrl = 'http://localhost:3000/api/publishers'; // web api url
    }
    PublisherService.prototype.getAll = function () {
        return this.http.get(this.publisherUrl);
    };
    PublisherService.prototype.getById = function (id) {
        return this.http.get(this.publisherUrl + '?id=' + id);
    };
    PublisherService.prototype.editPublisher = function (token, id, name, country, city, address, email, phone) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.put(this.publisherUrl, {
            "id": id,
            "name": name,
            "country": country,
            "city": city,
            "address": address,
            "email": email,
            "phone": phone
        }, httpOptions);
    };
    PublisherService.prototype.createPublisher = function (token, name, country, city, address, email, phone) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.post(this.publisherUrl, {
            "name": name,
            "country": country,
            "city": city,
            "address": address,
            "email": email,
            "phone": phone
        }, httpOptions);
    };
    PublisherService.prototype.deleteAuthor = function (token, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.delete(this.publisherUrl + '?id=' + id, httpOptions);
    };
    PublisherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PublisherService);
    return PublisherService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:3000/api/users';
    }
    UserService.prototype.register = function (username, password, name, country) {
        return this.http.post(this.userUrl, { "username": username, "password": password, "name": name, "country": country })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.code == 201) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                return user;
            }
            else {
                return false;
            }
        }));
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.userUrl + '?id=' + id);
    };
    UserService.prototype.changeDetails = function (token, name, country) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        console.log(country);
        return this.http.put(this.userUrl, { "name": name, "country": country }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.code == 201) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                return user;
            }
            else {
                return false;
            }
        }));
    };
    UserService.prototype.changePassword = function (token, password, newPassword) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        };
        return this.http.put(this.userUrl, { "password": password, "newPassword": newPassword }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.code == 201) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                return user;
            }
            else {
                return false;
            }
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\void\Desktop\m2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map