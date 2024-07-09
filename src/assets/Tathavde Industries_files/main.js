"use strict";
(self["webpackChunktech"] = self["webpackChunktech"] || []).push([["main"],{

/***/ 76:
/*!************************************************************!*\
  !*** ./src/app/Shared/snackbar/inputsnackbar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSnackbarComponent": () => (/* binding */ InputSnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../login/login.service */ 294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);







class InputSnackbarComponent {
    constructor(snackBarRef, data, loginService) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        this.loginService = loginService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
    }
    onOkClick() {
        this.snackBarRef.dismissWithAction();
        this.loginService.getUserByEmail(this.emailFormControl.value).subscribe((data) => {
            if (data == undefined || data == null) {
                window.alert("User does'nt Exsists");
            }
            else {
                window.alert("User Exsists");
            }
        });
    }
}
InputSnackbarComponent.ɵfac = function InputSnackbarComponent_Factory(t) { return new (t || InputSnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MAT_SNACK_BAR_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
InputSnackbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputSnackbarComponent, selectors: [["app-custom-snackbar"]], decls: 7, vars: 1, consts: [[1, "snackbarContainer2"], ["type", "email", "placeholder", "Enter Email", 3, "formControl"], [1, "example-spacer"], ["mat-button", "", 3, "click"]], template: function InputSnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputSnackbarComponent_Template_button_click_5_listener() { return ctx.onOkClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.emailFormControl);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".snackbarContainer2[_ngcontent-%COMP%]{\n      display:flex;\n      flex-direction:row;\n      justify-content:center;\n      align-items:center;\n      gap:2vh;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0c25hY2tiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixPQUFPO0lBQ1QiLCJmaWxlIjoiaW5wdXRzbmFja2Jhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc25hY2tiYXJDb250YWluZXIye1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgIGdhcDoydmg7XG4gICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 898:
/*!*****************************************************!*\
  !*** ./src/app/Shared/snackbar/snackbar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _inputsnackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputsnackbar.component */ 76);
/* harmony import */ var _yesNoSnackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yesNoSnackbar.component */ 878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);




class SnackbarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openYesNoSnackbar(message, callback) {
        const snackBarRef = this.snackBar.openFromComponent(_yesNoSnackbar_component__WEBPACK_IMPORTED_MODULE_1__.YesNoSnackBarComponent, {
            data: { message }
        });
        snackBarRef.onAction().subscribe(() => {
            callback();
        });
    }
    openCustomSnackbar() {
        const snackBarRef = this.snackBar.openFromComponent(_inputsnackbar_component__WEBPACK_IMPORTED_MODULE_0__.InputSnackbarComponent, {});
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 878:
/*!************************************************************!*\
  !*** ./src/app/Shared/snackbar/yesNoSnackbar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoSnackBarComponent": () => (/* binding */ YesNoSnackBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 898);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);





class YesNoSnackBarComponent {
    constructor(snackBarRef, data, snackbarService) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        this.snackbarService = snackbarService;
    }
    onYesClick() {
        this.snackBarRef.dismissWithAction();
        this.snackbarService.openCustomSnackbar();
    }
    onNoClick() {
        this.snackBarRef.dismiss();
    }
}
YesNoSnackBarComponent.ɵfac = function YesNoSnackBarComponent_Factory(t) { return new (t || YesNoSnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MAT_SNACK_BAR_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService)); };
YesNoSnackBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YesNoSnackBarComponent, selectors: [["yes-no-snackbar"]], decls: 9, vars: 1, consts: [[1, "snackbarContainer"], [1, "snackbar-buttons"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]], template: function YesNoSnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YesNoSnackBarComponent_Template_button_click_5_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function YesNoSnackBarComponent_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".snackbarContainer[_ngcontent-%COMP%]{\n        display:flex;\n        flex-direction:column;\n        justify-content:center;\n        align-items:center;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllc05vU25hY2tiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJ5ZXNOb1NuYWNrYmFyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnNuYWNrYmFyQ29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/product-list/product-list.component */ 759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, pathMatch: "full" },
    { path: "products", component: _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, pathMatch: "full" },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared/snackbar/snackbar.service */ 898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
    constructor(snackbarService) {
        this.snackbarService = snackbarService;
    }
    ngOnInit() {
        this.snackbarService.openYesNoSnackbar('Are you a working professional at Tathawade Industries?', () => {
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 0, consts: [[1, "container"], [1, "header"], [1, "example-spacer"], [1, "logo"], ["src", "../assets/logo.jpg", 1, "height100per", "width100per", "positionRel"], [1, "titleFont"], [1, "pad-botm-1vh"], [1, "mail"], ["src", "../assets//icons8-mail-100.png", 1, "headerLogo"], [1, "phone"], ["src", "../assets//icons8-phone-100.png", 1, "headerLogo"], [1, "navbar", "navBack"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "TATHAWADE INDUSTRIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "tathawadeindustries@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "+91 96234 45536 | +91 77579 89898");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 2)(20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " dfghjk. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " sdfghjm,. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 12)(28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".container[_ngcontent-%COMP%]{\n  height: max-content;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]{\n  height: max-content;\n  width: 100%;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 2vh;\n}\n\n.logo[_ngcontent-%COMP%]{\n  height: 10.5vh;\n  width: 17.5vh;\n}\n\n.height100per[_ngcontent-%COMP%]{\n  height: 100%;\n}\n\n.width100per[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.positionRel[_ngcontent-%COMP%]{\n  position: relative;\n}\n\n.titleFont[_ngcontent-%COMP%]{\n  font-size: 4.5vh;\n  font-weight: bold;\n  color: #E42129;\n  font-family: 'Spy';\n  height: max-content;\n  line-height: 1;\n\n}\n\n.headerLogo[_ngcontent-%COMP%]{\n  height: 3vh;\n  width: 3vh;\n  padding-right: 1vh;\n}\n\n.mail[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.navBack[_ngcontent-%COMP%]{\n  background-color: #E42129;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciwubmF2YmFye1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi5sb2dve1xuICBoZWlnaHQ6IDEwLjV2aDtcbiAgd2lkdGg6IDE3LjV2aDtcbn1cblxuLmhlaWdodDEwMHBlcntcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud2lkdGgxMDBwZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zaXRpb25SZWx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlRm9udHtcbiAgZm9udC1zaXplOiA0LjV2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRTQyMTI5O1xuICBmb250LWZhbWlseTogJ1NweSc7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG59XG5cbi5oZWFkZXJMb2dve1xuICBoZWlnaHQ6IDN2aDtcbiAgd2lkdGg6IDN2aDtcbiAgcGFkZGluZy1yaWdodDogMXZoO1xufVxuXG4ubWFpbCwucGhvbmV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2QmFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0MjEyOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _products_glass_glass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/glass/glass.component */ 1789);
/* harmony import */ var _products_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/frame/frame.component */ 6907);
/* harmony import */ var _products_single_french_door_single_french_door_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/single-french-door/single-french-door.component */ 7076);
/* harmony import */ var _products_double_sliding_window_double_sliding_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/double-sliding-window/double-sliding-window.component */ 2006);
/* harmony import */ var _products_double_sliding_window_frame_set_double_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/double-sliding-window-frame-set/double-sliding-window-frame-set.component */ 4017);
/* harmony import */ var _products_triple_sliding_window_frame_set_triple_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/triple-sliding-window-frame-set/triple-sliding-window-frame-set.component */ 9630);
/* harmony import */ var _products_triple_sliding_window_triple_sliding_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/triple-sliding-window/triple-sliding-window.component */ 6239);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/app */ 9674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 822);
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-list/product-list.component */ 759);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _Shared_snackbar_inputsnackbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Shared/snackbar/inputsnackbar.component */ 76);
/* harmony import */ var _Shared_snackbar_yesNoSnackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Shared/snackbar/yesNoSnackbar.component */ 878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_23__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.firebaseConfig),
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_24__.AngularFirestoreModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_25__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_25__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.firebaseConfig)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.getAuth)()),
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _products_glass_glass_component__WEBPACK_IMPORTED_MODULE_2__.GlassComponent,
        _products_frame_frame_component__WEBPACK_IMPORTED_MODULE_3__.FrameComponent,
        _products_single_french_door_single_french_door_component__WEBPACK_IMPORTED_MODULE_4__.SingleFrenchDoorComponent,
        _products_double_sliding_window_double_sliding_window_component__WEBPACK_IMPORTED_MODULE_5__.DoubleSlidingWindowComponent,
        _products_double_sliding_window_frame_set_double_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_6__.DoubleSlidingWindowFrameSetComponent,
        _products_triple_sliding_window_frame_set_triple_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_7__.TripleSlidingWindowFrameSetComponent,
        _products_triple_sliding_window_triple_sliding_window_component__WEBPACK_IMPORTED_MODULE_8__.TripleSlidingWindowComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent,
        _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__.ProductListComponent,
        _Shared_snackbar_inputsnackbar_component__WEBPACK_IMPORTED_MODULE_12__.InputSnackbarComponent,
        _Shared_snackbar_yesNoSnackbar_component__WEBPACK_IMPORTED_MODULE_13__.YesNoSnackBarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_23__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_24__.AngularFirestoreModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_25__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.AuthModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule] }); })();


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent),
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 822);









function LoginComponent_div_2_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_2_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6)(5, "mat-form-field", 7)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_2_mat_error_9_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_2_mat_error_10_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "mat-form-field", 7)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_div_2_mat_error_16_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.enableCreateAccountForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.emailFormControl)("errorStateMatcher", ctx_r0.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.emailFormControl.hasError("email") && !ctx_r0.emailFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.emailFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.passwordFormControl)("errorStateMatcher", ctx_r0.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.passwordFormControl.hasError("required"));
} }
function LoginComponent_div_3_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Role is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_3_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.createAccount()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create New Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 7)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_3_mat_error_10_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_div_3_mat_error_16_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 7)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_div_3_mat_error_24_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_3_mat_error_25_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 7)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_div_3_mat_error_31_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 7)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.passwordHide = !ctx_r17.passwordHide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, LoginComponent_div_3_mat_error_42_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 7)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.confirmPassswordHide = !ctx_r18.confirmPassswordHide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, LoginComponent_div_3_mat_error_51_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div")(54, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.firstNameFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.firstNameFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.lastNameFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lastNameFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.emailFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.emailFormControl.hasError("email") && !ctx_r1.emailFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.emailFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.roleFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.lastNameFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.passwordHide ? "password" : "text")("formControl", ctx_r1.passwordFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.passwordHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.passwordHide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordFormControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.confirmPassswordHide ? "password" : "text")("formControl", ctx_r1.confirmPasswordFormControl)("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r1.confirmPassswordHide);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.confirmPassswordHide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.confirmPasswordFormControl.hasError("required"));
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class LoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.confirmPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.roleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.passwordHide = true;
        this.confirmPassswordHide = true;
        this.matcher = new MyErrorStateMatcher();
        this.login = true;
    }
    ngOnInit() {
    }
    enableCreateAccountForm() {
        this.login = false;
    }
    onSubmit() {
        if (this.emailFormControl.value == null || this.emailFormControl.value.length == 0) {
            window.alert("Email is Required");
        }
        else if (this.passwordFormControl.value == null || this.passwordFormControl.value.length == 0) {
            window.alert("Password is Required");
        }
        else {
            this.loginService.loginWithEmailPassword(this.emailFormControl.value, this.passwordFormControl.value);
        }
    }
    createAccount() {
        if (this.firstNameFormControl.value == null || this.firstNameFormControl.value.length == 0) {
            window.alert("First Name is Required");
        }
        else if (this.lastNameFormControl.value == null || this.lastNameFormControl.value.length == 0) {
            window.alert("Last Name is Required");
        }
        else if (this.emailFormControl.value == null || this.emailFormControl.value.length == 0) {
            window.alert("Email is Required");
        }
        else if (this.roleFormControl.value == null || this.roleFormControl.value.length == 0) {
            window.alert("Role is Required");
        }
        else if (this.passwordFormControl.value == null || this.passwordFormControl.value.length == 0) {
            window.alert("Password is Required");
        }
        else if (this.passwordFormControl.value.length < 8) {
            window.alert("Password should be greater than length of 8");
        }
        else if (this.confirmPasswordFormControl.value == null || this.confirmPasswordFormControl.value.length == 0) {
            window.alert("Confirmation Password is Required");
        }
        else if (this.confirmPasswordFormControl.value.length < 8) {
            window.alert("Confirmation Password should be greater than length of 8");
        }
        else if (this.confirmPasswordFormControl.value != this.passwordFormControl.value) {
            window.alert("Confirmation Password and Password does'nt match");
        }
        else {
            this.loginService.createUser({ "firstName": this.firstNameFormControl.value, "lastName": this.lastNameFormControl.value, "email": this.emailFormControl.value, "role": this.roleFormControl.value, "password": this.passwordFormControl.value });
            this.firstNameFormControl.reset();
            this.lastNameFormControl.reset();
            this.emailFormControl.reset();
            this.roleFormControl.reset();
            this.passwordFormControl.reset();
            this.confirmPasswordFormControl.reset();
            this.login = true;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 2, consts: [[1, "container"], [1, "insideContainer", "mat-elevation-z4"], ["class", "form", 4, "ngIf"], [1, "form"], [1, "example-form", "form", 3, "ngSubmit"], [1, "header", "pad-botm-4vh"], [1, "pad-botm-1vh"], ["appearance", "outline", 1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Enter Email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"], [1, "pad-botm-2vh"], ["type", "password", "matInput", "", "placeholder", "Enter Password", 3, "formControl", "errorStateMatcher"], [1, "pad-botm-3vh"], ["type", "button", "mat-button", "", "color", "primary"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "pad-botm-1vh", "fields"], [1, "example-spacer"], ["type", "text", "matInput", "", "placeholder", "Enter First Name", 3, "formControl", "errorStateMatcher"], [1, "pad-left-1vh"], ["type", "text", "matInput", "", "placeholder", "Enter Last Name", 3, "formControl", "errorStateMatcher"], ["type", "text", "matInput", "", "placeholder", "Enter Role Name", 3, "formControl", "errorStateMatcher"], [1, "pad-botm-2vh", "fields"], ["matInput", "", "placeholder", "Enter Password", 3, "type", "formControl", "errorStateMatcher"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Enter Confirm Password", 3, "type", "formControl", "errorStateMatcher"], ["type", "submit", "mat-raised-button", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 26, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 56, 27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.login);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: [".container[_ngcontent-%COMP%]{\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.insideContainer[_ngcontent-%COMP%]{\n  position: relative;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%]{\n  font-size: xx-large;\n  font-weight: bold;\n}\n\n.pad-botm-4vh[_ngcontent-%COMP%]{\n  padding-bottom:4vh\n}\n\n.pad-botm-3vh[_ngcontent-%COMP%]{\n  padding-bottom:3vh\n}\n\n.pad-botm-2vh[_ngcontent-%COMP%]{\n  padding-bottom:2vh\n}\n\n.pad-botm-1vh[_ngcontent-%COMP%]{\n  padding-bottom:1vh\n}\n\n.fields[_ngcontent-%COMP%]{\n  width: 94%;\n  padding-left: 3%;\n  padding-right: 3%;\n  display: flex;\n  flex-direction: row;\n}\n\n.pad-left-1vh[_ngcontent-%COMP%]{\n  padding-left: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluc2lkZUNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3Jte1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcntcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWQtYm90bS00dmh7XG4gIHBhZGRpbmctYm90dG9tOjR2aFxufVxuXG4ucGFkLWJvdG0tM3Zoe1xuICBwYWRkaW5nLWJvdHRvbTozdmhcbn1cblxuLnBhZC1ib3RtLTJ2aHtcbiAgcGFkZGluZy1ib3R0b206MnZoXG59XG5cbi5wYWQtYm90bS0xdmh7XG4gIHBhZGRpbmctYm90dG9tOjF2aFxufVxuXG4uZmllbGRze1xuICB3aWR0aDogOTQlO1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnBhZC1sZWZ0LTF2aHtcbiAgcGFkZGluZy1sZWZ0OiAxdmg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 294:
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class LoginService {
    constructor(firestore, fireAuth, router) {
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.router = router;
        this.saltRounds = 10;
    }
    // Get all users
    getUsers() {
        return this.firestore.collection('/users').valueChanges({ idField: 'uid' });
    }
    // Get a single user
    getUserByEmail(email) {
        return this.firestore.collection('/users', ref => ref.where('email', '==', email))
            .valueChanges()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(users => users.length > 0 ? users[0] : undefined));
    }
    // Add a new user
    addUser(user) {
        const userId = this.firestore.createId();
        return this.firestore.collection('/users').doc(userId).set(user);
    }
    // Update a user
    updateUser(userId, user) {
        return this.firestore.collection('/users').doc(userId).update(user);
    }
    // Delete a user
    deleteUser(userId) {
        return this.firestore.collection('/users').doc(userId).delete();
    }
    loginWithEmailPassword(email, password) {
        this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
            window.alert("Login SuccessFully");
            this.router.navigate(['/products']);
        }, error => {
            window.alert("Not able to SignIn Currently");
            this.router.navigate(['/login']);
        });
    }
    createUser(user) {
        this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
            this.addUser({ "firstName": user.firstName, "lastName": user.lastName, "email": user.email, "role": user.role });
            window.alert("Created User Sucessfully");
        }, error => {
            if (error.code == "auth/email-already-in-use") {
                window.alert("User Already Exsists");
            }
            else {
                window.alert("Server is Currently Busy");
            }
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4017:
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/double-sliding-window-frame-set/double-sliding-window-frame-set.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubleSlidingWindowFrameSetComponent": () => (/* binding */ DoubleSlidingWindowFrameSetComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class DoubleSlidingWindowFrameSetComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.doubleSlidingWindow();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.doubleSlidingWindow();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    doubleSlidingWindow() {
        this.clearCanvas();
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        // Main Frame
        this.mainFrameWidth = this.width * 2 + this.frameThickness * 3;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameDepth = this.frameThickness * 3;
        this.mainFrameFrameThickness = this.frameThickness;
        const mainFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 2) / 2 + this.frameThickness / 2, -this.frameThickness / 2);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 2) / 2 - this.frameThickness / 2, -this.frameThickness / 2);
        mainLeftFrame.position.set(-(this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        mainRightFrame.position.set((this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // First Frame
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        const frameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame1.position.set(-(this.width + this.frameThickness) / 2, (this.height + this.frameThickness) / 2, 0);
        bottomFrame1.position.set(-(this.width + this.frameThickness) / 2, -(this.height + this.frameThickness) / 2, 0);
        leftFrame1.position.set(-(this.width + this.frameThickness), 0, 0);
        rightFrame1.position.set(0, 0, 0);
        this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);
        // Second Frame
        const topFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame2.position.set((this.width + this.frameThickness) / 2, (this.height + this.frameThickness) / 2, -this.frameThickness);
        bottomFrame2.position.set((this.width + this.frameThickness) / 2, -(this.height + this.frameThickness) / 2, -this.frameThickness);
        leftFrame2.position.set(0, 0, -this.frameThickness);
        rightFrame2.position.set((this.width + this.frameThickness), 0, -this.frameThickness);
        this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
DoubleSlidingWindowFrameSetComponent.ɵfac = function DoubleSlidingWindowFrameSetComponent_Factory(t) { return new (t || DoubleSlidingWindowFrameSetComponent)(); };
DoubleSlidingWindowFrameSetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DoubleSlidingWindowFrameSetComponent, selectors: [["app-double-sliding-window-frame-set"]], hostBindings: function DoubleSlidingWindowFrameSetComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DoubleSlidingWindowFrameSetComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function DoubleSlidingWindowFrameSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3VibGUtc2xpZGluZy13aW5kb3ctZnJhbWUtc2V0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2006:
/*!***********************************************************************************!*\
  !*** ./src/app/products/double-sliding-window/double-sliding-window.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubleSlidingWindowComponent": () => (/* binding */ DoubleSlidingWindowComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class DoubleSlidingWindowComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.doubleSlidingWindow();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.doubleSlidingWindow();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    doubleSlidingWindow() {
        this.clearCanvas();
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        const glassMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });
        // Main Frame
        this.mainFrameWidth = this.width * 2 + this.frameThickness * 3;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameDepth = this.frameThickness * 3;
        this.mainFrameFrameThickness = this.frameThickness;
        const mainFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 2) / 2 + this.frameThickness / 2, -this.frameThickness / 2);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 2) / 2 - this.frameThickness / 2, -this.frameThickness / 2);
        mainLeftFrame.position.set(-(this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        mainRightFrame.position.set((this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // First Frame
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        const frameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame1.position.set(-(this.width + this.frameThickness) / 2, (this.height + this.frameThickness) / 2, 0);
        bottomFrame1.position.set(-(this.width + this.frameThickness) / 2, -(this.height + this.frameThickness) / 2, 0);
        leftFrame1.position.set(-(this.width + this.frameThickness), 0, 0);
        rightFrame1.position.set(0, 0, 0);
        this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);
        const glassGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.width, this.height, this.glassThickness);
        const glass1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        glass1.position.set(-(this.width + this.frameThickness) / 2, 0, 0);
        this.object.add(glass1);
        // Second Frame
        const topFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame2.position.set((this.width + this.frameThickness) / 2, (this.height + this.frameThickness) / 2, -this.frameThickness);
        bottomFrame2.position.set((this.width + this.frameThickness) / 2, -(this.height + this.frameThickness) / 2, -this.frameThickness);
        leftFrame2.position.set(0, 0, -this.frameThickness);
        rightFrame2.position.set((this.width + this.frameThickness), 0, -this.frameThickness);
        this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);
        const glass2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        glass2.position.set((this.width + this.frameThickness) / 2, 0, -this.frameThickness);
        this.object.add(glass2);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
DoubleSlidingWindowComponent.ɵfac = function DoubleSlidingWindowComponent_Factory(t) { return new (t || DoubleSlidingWindowComponent)(); };
DoubleSlidingWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DoubleSlidingWindowComponent, selectors: [["app-double-sliding-window"]], hostBindings: function DoubleSlidingWindowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DoubleSlidingWindowComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor", glassThickness: "glassThickness" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function DoubleSlidingWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3VibGUtc2xpZGluZy13aW5kb3cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6907:
/*!***************************************************!*\
  !*** ./src/app/products/frame/frame.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameComponent": () => (/* binding */ FrameComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class FrameComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.createFrameSet();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.createFrameSet();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    createFrameSet() {
        this.clearCanvas();
        // const textureLoader = new THREE.TextureLoader();
        // const frameTexture = textureLoader.load('assets/blueTexture.avif');
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        //Main Frame
        this.mainFrameWidth = this.width + this.frameThickness * 4;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameFrameThickness = this.frameThickness;
        this.mainFrameDepth = this.frameThickness * 2;
        this.mainFrameVolume = (this.mainFrameWidth * this.mainFrameFrameThickness * this.mainFrameDepth * 2) + (this.mainFrameFrameThickness * this.mainFrameHeigth * this.mainFrameDepth * 2);
        const mainFrame = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 3) / 2, 0);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 3) / 2, 0);
        mainLeftFrame.position.set(-(this.width + this.frameThickness * 3) / 2, 0, 0);
        mainRightFrame.position.set((this.width + this.frameThickness * 3) / 2, 0, 0);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // Sub Frame
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        this.subFrameVolume = (this.subFrameWidth * this.subFrameFrameThickness * this.subFrameDepth * 2) + (this.subFrameFrameThickness * this.subFrameHeigth * this.subFrameDepth * 2);
        const frameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame.position.set(0, (this.height + this.frameThickness) / 2, 0);
        bottomFrame.position.set(0, -(this.height + this.frameThickness) / 2, 0);
        leftFrame.position.set(-(this.width + this.frameThickness) / 2, 0, 0);
        rightFrame.position.set((this.width + this.frameThickness) / 2, 0, 0);
        this.object.add(topFrame, bottomFrame, leftFrame, rightFrame);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
FrameComponent.ɵfac = function FrameComponent_Factory(t) { return new (t || FrameComponent)(); };
FrameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FrameComponent, selectors: [["app-frame"]], hostBindings: function FrameComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function FrameComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function FrameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1789:
/*!***************************************************!*\
  !*** ./src/app/products/glass/glass.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlassComponent": () => (/* binding */ GlassComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class GlassComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.createGlass();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.createGlass();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    // Glass
    createGlass() {
        this.clearCanvas();
        const glassMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });
        const glassGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.width, this.height, this.glassThickness);
        const glass = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        this.object.add(glass);
        this.scene.add(this.object);
        this.glassVolume = this.width * this.height * this.glassThickness;
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
GlassComponent.ɵfac = function GlassComponent_Factory(t) { return new (t || GlassComponent)(); };
GlassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlassComponent, selectors: [["app-glass"]], hostBindings: function GlassComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function GlassComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", glassThickness: "glassThickness", color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function GlassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#threejs-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJnbGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RocmVlanMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 759:
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _glass_glass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glass/glass.component */ 1789);
/* harmony import */ var _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame/frame.component */ 6907);
/* harmony import */ var _single_french_door_single_french_door_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../single-french-door/single-french-door.component */ 7076);
/* harmony import */ var _double_sliding_window_double_sliding_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../double-sliding-window/double-sliding-window.component */ 2006);
/* harmony import */ var _double_sliding_window_frame_set_double_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../double-sliding-window-frame-set/double-sliding-window-frame-set.component */ 4017);
/* harmony import */ var _triple_sliding_window_frame_set_triple_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../triple-sliding-window-frame-set/triple-sliding-window-frame-set.component */ 9630);
/* harmony import */ var _triple_sliding_window_triple_sliding_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../triple-sliding-window/triple-sliding-window.component */ 6239);














function ProductListComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", product_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](product_r12.key);
} }
function ProductListComponent_mat_form_field_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Glass Thickness MM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_mat_form_field_26_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.valueChange()); })("keydown", function ProductListComponent_mat_form_field_26_Template_input_keydown_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.valueChange()); })("ngModelChange", function ProductListComponent_mat_form_field_26_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.glassThicknessInches = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.glassThicknessInches);
} }
function ProductListComponent_mat_form_field_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Frame Thickness Inches");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_mat_form_field_27_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.valueChange()); })("keydown", function ProductListComponent_mat_form_field_27_Template_input_keydown_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.valueChange()); })("ngModelChange", function ProductListComponent_mat_form_field_27_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.frameThicknessInches = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.frameThicknessInches);
} }
function ProductListComponent_mat_form_field_29_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "MainFrameColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_mat_form_field_29_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.valueChange()); })("keydown", function ProductListComponent_mat_form_field_29_Template_input_keydown_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.valueChange()); })("ngModelChange", function ProductListComponent_mat_form_field_29_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.mainFrameColor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.mainFrameColor);
} }
function ProductListComponent_mat_form_field_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 6)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "SubFrameColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_mat_form_field_30_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.valueChange()); })("keydown", function ProductListComponent_mat_form_field_30_Template_input_keydown_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.valueChange()); })("ngModelChange", function ProductListComponent_mat_form_field_30_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.subFrameColor = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.subFrameColor);
} }
function ProductListComponent_app_glass_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-glass", 20);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r5.width)("height", ctx_r5.height)("glassThickness", ctx_r5.glassThickness);
} }
function ProductListComponent_app_frame_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-frame", 21);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r6.width)("height", ctx_r6.height)("frameThickness", ctx_r6.frameThickness)("mainFrameColor", ctx_r6.mainFrameColor)("subFrameColor", ctx_r6.subFrameColor);
} }
function ProductListComponent_app_single_french_door_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-single-french-door", 22);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r7.width)("height", ctx_r7.height)("glassThickness", ctx_r7.glassThickness)("frameThickness", ctx_r7.frameThickness)("mainFrameColor", ctx_r7.mainFrameColor)("subFrameColor", ctx_r7.subFrameColor);
} }
function ProductListComponent_app_double_sliding_window_frame_set_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-double-sliding-window-frame-set", 21);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r8.width)("height", ctx_r8.height)("frameThickness", ctx_r8.frameThickness)("mainFrameColor", ctx_r8.mainFrameColor)("subFrameColor", ctx_r8.subFrameColor);
} }
function ProductListComponent_app_double_sliding_window_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-double-sliding-window", 22);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r9.width)("height", ctx_r9.height)("glassThickness", ctx_r9.glassThickness)("frameThickness", ctx_r9.frameThickness)("mainFrameColor", ctx_r9.mainFrameColor)("subFrameColor", ctx_r9.subFrameColor);
} }
function ProductListComponent_app_triple_sliding_window_frame_set_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-triple-sliding-window-frame-set", 21);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r10.width)("height", ctx_r10.height)("frameThickness", ctx_r10.frameThickness)("mainFrameColor", ctx_r10.mainFrameColor)("subFrameColor", ctx_r10.subFrameColor);
} }
function ProductListComponent_app_triple_sliding_window_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-triple-sliding-window", 22);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", ctx_r11.width)("height", ctx_r11.height)("glassThickness", ctx_r11.glassThickness)("frameThickness", ctx_r11.frameThickness)("mainFrameColor", ctx_r11.mainFrameColor)("subFrameColor", ctx_r11.subFrameColor);
} }
class ProductListComponent {
    constructor() {
        this.frameThicknessInches = 1.375;
        this.glassThicknessInches = 3;
        this.widthInches = 6;
        this.widthFeet = 2;
        this.heightInches = 8;
        this.heightFeet = 6;
        this.width = this.widthFeet + (this.widthInches / 12);
        this.height = this.heightFeet + (this.heightInches / 12);
        this.frameThickness = this.frameThicknessInches / 12;
        this.glassThickness = this.glassThicknessInches / 304.8;
        this.mainFrameColor = 0x000000;
        this.subFrameColor = 0x000000;
        this.products = [{ key: 'Glass', value: 'glass' }, { key: 'Single French Door (Frame Set)', value: 'frameset' }, { key: 'Single French Door', value: 'both' }, { key: 'Double Sliding Window (Frame Set)', value: 'frameset' }, { key: 'Double Sliding Window', value: 'both' }, { key: 'Triple Sliding Window (Frame Set)', value: 'frameset' }, { key: 'Triple Sliding Window', value: 'both' }];
        this.product = this.products[0];
    }
    ngOnInit() {
    }
    valueChange() {
        this.width = this.widthFeet + (this.widthInches / 12);
        this.height = this.heightFeet + (this.heightInches / 12);
        this.frameThickness = this.frameThicknessInches / 12;
        this.glassThickness = this.glassThicknessInches / 304.8;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 39, vars: 17, consts: [["id", "contianer"], ["id", "controls"], ["appearance", "outline", 1, "example-full-width"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fieldset"], ["appearance", "outline", 1, "example-half-width"], ["matInput", "", "placeholder", "Enter Width in Feets", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "Enter Width in Inches", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "Enter Height in Feets", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "Enter Height in Inches", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["class", "example-half-width", "appearance", "outline", 4, "ngIf"], ["id", "mainFrame"], [3, "width", "height", "glassThickness", 4, "ngIf"], [3, "width", "height", "frameThickness", "mainFrameColor", "subFrameColor", 4, "ngIf"], [3, "width", "height", "glassThickness", "frameThickness", "mainFrameColor", "subFrameColor", 4, "ngIf"], [3, "value"], ["matInput", "", "placeholder", "Enter Glass Thickness in mm", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "Enter Frame Thickness in Inches", "type", "number", "step", "0.1", 3, "ngModel", "keyup", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "Enter color", "type", "color", 3, "ngModel", "keyup", "keydown", "ngModelChange"], [3, "width", "height", "glassThickness"], [3, "width", "height", "frameThickness", "mainFrameColor", "subFrameColor"], [3, "width", "height", "glassThickness", "frameThickness", "mainFrameColor", "subFrameColor"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_5_listener($event) { return ctx.product = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProductListComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "mat-form-field", 6)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Width Feet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_Template_input_keyup_11_listener() { return ctx.valueChange(); })("keydown", function ProductListComponent_Template_input_keydown_11_listener() { return ctx.valueChange(); })("ngModelChange", function ProductListComponent_Template_input_ngModelChange_11_listener($event) { return ctx.widthFeet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Width Inches");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_Template_input_keyup_15_listener() { return ctx.valueChange(); })("keydown", function ProductListComponent_Template_input_keydown_15_listener() { return ctx.valueChange(); })("ngModelChange", function ProductListComponent_Template_input_ngModelChange_15_listener($event) { return ctx.widthInches = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5)(17, "mat-form-field", 6)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Height Feet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_Template_input_keyup_20_listener() { return ctx.valueChange(); })("keydown", function ProductListComponent_Template_input_keydown_20_listener() { return ctx.valueChange(); })("ngModelChange", function ProductListComponent_Template_input_ngModelChange_20_listener($event) { return ctx.heightFeet = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 6)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Height Inches");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ProductListComponent_Template_input_keyup_24_listener() { return ctx.valueChange(); })("keydown", function ProductListComponent_Template_input_keydown_24_listener() { return ctx.valueChange(); })("ngModelChange", function ProductListComponent_Template_input_ngModelChange_24_listener($event) { return ctx.heightInches = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ProductListComponent_mat_form_field_26_Template, 4, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ProductListComponent_mat_form_field_27_Template, 4, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ProductListComponent_mat_form_field_29_Template, 4, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ProductListComponent_mat_form_field_30_Template, 4, 1, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ProductListComponent_app_glass_32_Template, 1, 3, "app-glass", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ProductListComponent_app_frame_33_Template, 1, 5, "app-frame", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ProductListComponent_app_single_french_door_34_Template, 1, 6, "app-single-french-door", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ProductListComponent_app_double_sliding_window_frame_set_35_Template, 1, 5, "app-double-sliding-window-frame-set", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ProductListComponent_app_double_sliding_window_36_Template, 1, 6, "app-double-sliding-window", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ProductListComponent_app_triple_sliding_window_frame_set_37_Template, 1, 5, "app-triple-sliding-window-frame-set", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ProductListComponent_app_triple_sliding_window_38_Template, 1, 6, "app-triple-sliding-window", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.widthFeet);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.widthInches);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.heightFeet);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.heightInches);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.value != "frameset");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.value != "glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.value != "glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.value != "glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Glass");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Single French Door (Frame Set)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Single French Door");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Double Sliding Window (Frame Set)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Double Sliding Window");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Triple Sliding Window (Frame Set)");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product.key == "Triple Sliding Window");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _glass_glass_component__WEBPACK_IMPORTED_MODULE_0__.GlassComponent, _frame_frame_component__WEBPACK_IMPORTED_MODULE_1__.FrameComponent, _single_french_door_single_french_door_component__WEBPACK_IMPORTED_MODULE_2__.SingleFrenchDoorComponent, _double_sliding_window_double_sliding_window_component__WEBPACK_IMPORTED_MODULE_3__.DoubleSlidingWindowComponent, _double_sliding_window_frame_set_double_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_4__.DoubleSlidingWindowFrameSetComponent, _triple_sliding_window_frame_set_triple_sliding_window_frame_set_component__WEBPACK_IMPORTED_MODULE_5__.TripleSlidingWindowFrameSetComponent, _triple_sliding_window_triple_sliding_window_component__WEBPACK_IMPORTED_MODULE_6__.TripleSlidingWindowComponent], styles: ["#controls[_ngcontent-%COMP%] {\n  position: relative;\n  height: 96%;\n  width: 26%;\n  display: flex;\n  flex-direction: column;\n  padding: 2%;\n}\n\n#mainFrame[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 70%;\n}\n\n.fieldset[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 10%;\n}\n\n.example-half-width[_ngcontent-%COMP%] {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250cm9scyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5NiU7XG4gIHdpZHRoOiAyNiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4jbWFpbkZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5maWVsZHNldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwJTtcbn1cblxuLmV4YW1wbGUtaGFsZi13aWR0aCB7XG4gIHdpZHRoOiA0NSU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 7076:
/*!*****************************************************************************!*\
  !*** ./src/app/products/single-french-door/single-french-door.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleFrenchDoorComponent": () => (/* binding */ SingleFrenchDoorComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SingleFrenchDoorComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.createFrameSet();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.createFrameSet();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    createFrameSet() {
        this.clearCanvas();
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        //Main Frame
        this.mainFrameWidth = this.width + this.frameThickness * 4;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameFrameThickness = this.frameThickness;
        this.mainFrameDepth = this.frameThickness * 2;
        this.mainFrameVolume = (this.mainFrameWidth * this.mainFrameFrameThickness * this.mainFrameDepth * 2) + (this.mainFrameFrameThickness * this.mainFrameHeigth * this.mainFrameDepth * 2);
        const mainFrame = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrame[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 3) / 2, 0);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 3) / 2, 0);
        mainLeftFrame.position.set(-(this.width + this.frameThickness * 3) / 2, 0, 0);
        mainRightFrame.position.set((this.width + this.frameThickness * 3) / 2, 0, 0);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // Sub Frame
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        this.subFrameVolume = (this.subFrameWidth * this.subFrameFrameThickness * this.subFrameDepth * 2) + (this.subFrameFrameThickness * this.subFrameHeigth * this.subFrameDepth * 2);
        const frameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[0], subFrameMaterial);
        const bottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[1], subFrameMaterial);
        const leftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[2], subFrameMaterial);
        const rightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(frameGeometries[3], subFrameMaterial);
        topFrame.position.set(0, (this.height + this.frameThickness) / 2, 0);
        bottomFrame.position.set(0, -(this.height + this.frameThickness) / 2, 0);
        leftFrame.position.set(-(this.width + this.frameThickness) / 2, 0, 0);
        rightFrame.position.set((this.width + this.frameThickness) / 2, 0, 0);
        this.object.add(topFrame, bottomFrame, leftFrame, rightFrame);
        //Glass
        const glassMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });
        const glassGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.width, this.height, this.glassThickness);
        const glass = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        this.object.add(glass);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
SingleFrenchDoorComponent.ɵfac = function SingleFrenchDoorComponent_Factory(t) { return new (t || SingleFrenchDoorComponent)(); };
SingleFrenchDoorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingleFrenchDoorComponent, selectors: [["app-single-french-door"]], hostBindings: function SingleFrenchDoorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SingleFrenchDoorComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor", glassThickness: "glassThickness" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function SingleFrenchDoorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtZnJlbmNoLWRvb3IuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9630:
/*!*******************************************************************************************************!*\
  !*** ./src/app/products/triple-sliding-window-frame-set/triple-sliding-window-frame-set.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripleSlidingWindowFrameSetComponent": () => (/* binding */ TripleSlidingWindowFrameSetComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class TripleSlidingWindowFrameSetComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.doubleSlidingWindow();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.doubleSlidingWindow();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    doubleSlidingWindow() {
        this.clearCanvas();
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        // Main Frame
        this.mainFrameWidth = this.width * 3 + this.frameThickness * 4;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameDepth = this.frameThickness * 4;
        this.mainFrameFrameThickness = this.frameThickness;
        const mainFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 2) / 2 + this.frameThickness / 2, -this.frameThickness / 2);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 2) / 2 - this.frameThickness / 2, -this.frameThickness / 2);
        mainLeftFrame.position.set(-(this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        mainRightFrame.position.set((this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // First Frame
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        const subFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame1.position.set(-(this.width + this.frameThickness), (this.height + this.frameThickness) / 2, -this.frameThickness);
        bottomFrame1.position.set(-(this.width + this.frameThickness), -(this.height + this.frameThickness) / 2, -this.frameThickness);
        leftFrame1.position.set(-(this.width * 1.5 + this.frameThickness * 1.5), 0, -this.frameThickness);
        rightFrame1.position.set(-(this.width * 0.5 + this.frameThickness * 0.5), 0, -this.frameThickness);
        this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);
        // Second Frame
        const topFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame2.position.set(0, (this.height + this.frameThickness) / 2, 0);
        bottomFrame2.position.set(0, -(this.height + this.frameThickness) / 2, 0);
        leftFrame2.position.set(-(this.width * 0.5 + this.frameThickness * 0.5), 0, 0);
        rightFrame2.position.set((this.width + this.frameThickness) / 2, 0, 0);
        this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);
        // Third Frame
        const topFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame3.position.set((this.width + this.frameThickness), (this.height + this.frameThickness) / 2, +this.frameThickness);
        bottomFrame3.position.set((this.width + this.frameThickness), -(this.height + this.frameThickness) / 2, +this.frameThickness);
        leftFrame3.position.set((this.width + this.frameThickness) / 2, 0, +this.frameThickness);
        rightFrame3.position.set(this.width * 1.5 + this.frameThickness * 1.5, 0, +this.frameThickness);
        this.object.add(topFrame3, bottomFrame3, leftFrame3, rightFrame3);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
TripleSlidingWindowFrameSetComponent.ɵfac = function TripleSlidingWindowFrameSetComponent_Factory(t) { return new (t || TripleSlidingWindowFrameSetComponent)(); };
TripleSlidingWindowFrameSetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TripleSlidingWindowFrameSetComponent, selectors: [["app-triple-sliding-window-frame-set"]], hostBindings: function TripleSlidingWindowFrameSetComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function TripleSlidingWindowFrameSetComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function TripleSlidingWindowFrameSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmlwbGUtc2xpZGluZy13aW5kb3ctZnJhbWUtc2V0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6239:
/*!***********************************************************************************!*\
  !*** ./src/app/products/triple-sliding-window/triple-sliding-window.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripleSlidingWindowComponent": () => (/* binding */ TripleSlidingWindowComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class TripleSlidingWindowComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.doubleSlidingWindow();
    }
    ngOnInit() {
        this.initThreeJS();
    }
    initThreeJS() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = this.height + 5;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff); // Set the background color to white
        document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
        this.doubleSlidingWindow();
        this.animate();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        this.object.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
    clearCanvas() {
        if (this.object) {
            this.scene.remove(this.object);
            this.object.children.forEach(child => {
                if (child.geometry) {
                    child.geometry.dispose();
                }
            });
        }
        this.object = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    }
    doubleSlidingWindow() {
        this.clearCanvas();
        const mainFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.mainFrameColor });
        const subFrameMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: this.subFrameColor });
        const glassMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });
        // Main Frame
        this.mainFrameWidth = this.width * 3 + this.frameThickness * 4;
        this.mainFrameHeigth = this.height + this.frameThickness * 4;
        this.mainFrameDepth = this.frameThickness * 4;
        this.mainFrameFrameThickness = this.frameThickness;
        const mainFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
        ];
        const mainTopFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[0], mainFrameMaterial);
        const mainBottomFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[1], mainFrameMaterial);
        const mainLeftFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[2], mainFrameMaterial);
        const mainRightFrame = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(mainFrameGeometries[3], mainFrameMaterial);
        mainTopFrame.position.set(0, (this.height + this.frameThickness * 2) / 2 + this.frameThickness / 2, -this.frameThickness / 2);
        mainBottomFrame.position.set(0, -(this.height + this.frameThickness * 2) / 2 - this.frameThickness / 2, -this.frameThickness / 2);
        mainLeftFrame.position.set(-(this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        mainRightFrame.position.set((this.mainFrameWidth + this.frameThickness) / 2, 0, -this.frameThickness / 2);
        this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);
        // First Frame
        this.subFrameWidth = this.width + this.frameThickness * 2;
        this.subFrameFrameThickness = this.frameThickness;
        this.subFrameHeigth = this.height + this.frameThickness * 2;
        this.subFrameDepth = this.frameThickness;
        const subFrameGeometries = [
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
            new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
        ];
        const topFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame1.position.set(-(this.width + this.frameThickness), (this.height + this.frameThickness) / 2, -this.frameThickness);
        bottomFrame1.position.set(-(this.width + this.frameThickness), -(this.height + this.frameThickness) / 2, -this.frameThickness);
        leftFrame1.position.set(-(this.width * 1.5 + this.frameThickness * 1.5), 0, -this.frameThickness);
        rightFrame1.position.set(-(this.width * 0.5 + this.frameThickness * 0.5), 0, -this.frameThickness);
        this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);
        const glassGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(this.width, this.height, this.glassThickness);
        const glass1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        glass1.position.set(-(this.width + this.frameThickness), 0, -this.frameThickness / 2);
        this.object.add(glass1);
        //Second Frame
        const topFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame2.position.set(0, (this.height + this.frameThickness) / 2, 0);
        bottomFrame2.position.set(0, -(this.height + this.frameThickness) / 2, 0);
        leftFrame2.position.set(-(this.width * 0.5 + this.frameThickness * 0.5), 0, 0);
        rightFrame2.position.set((this.width + this.frameThickness) / 2, 0, 0);
        this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);
        const glass2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        glass2.position.set(0, 0, 0);
        this.object.add(glass2);
        // Third Frame
        const topFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[0], subFrameMaterial);
        const bottomFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[1], subFrameMaterial);
        const leftFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[2], subFrameMaterial);
        const rightFrame3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(subFrameGeometries[3], subFrameMaterial);
        topFrame3.position.set((this.width + this.frameThickness), (this.height + this.frameThickness) / 2, +this.frameThickness);
        bottomFrame3.position.set((this.width + this.frameThickness), -(this.height + this.frameThickness) / 2, +this.frameThickness);
        leftFrame3.position.set((this.width + this.frameThickness) / 2, 0, +this.frameThickness);
        rightFrame3.position.set(this.width * 1.5 + this.frameThickness * 1.5, 0, +this.frameThickness);
        this.object.add(topFrame3, bottomFrame3, leftFrame3, rightFrame3);
        const glass3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(glassGeometry, glassMaterial);
        glass3.position.set((this.width + this.frameThickness), 0, this.frameThickness / 2);
        this.object.add(glass3);
        this.scene.add(this.object);
        const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        this.scene.add(light);
    }
}
TripleSlidingWindowComponent.ɵfac = function TripleSlidingWindowComponent_Factory(t) { return new (t || TripleSlidingWindowComponent)(); };
TripleSlidingWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TripleSlidingWindowComponent, selectors: [["app-triple-sliding-window"]], hostBindings: function TripleSlidingWindowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function TripleSlidingWindowComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", frameThickness: "frameThickness", mainFrameColor: "mainFrameColor", subFrameColor: "subFrameColor", glassThickness: "glassThickness" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "threejs-container"]], template: function TripleSlidingWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmlwbGUtc2xpZGluZy13aW5kb3cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCQOIYvEboCkw7cEWKDJSU0S9urxiedJYw",
        authDomain: "furnitureindustries-a34d2.firebaseapp.com",
        projectId: "furnitureindustries-a34d2",
        storageBucket: "furnitureindustries-a34d2.appspot.com",
        messagingSenderId: "145560759067",
        appId: "1:145560759067:web:5749671fe77b4b4756c1be",
        measurementId: "G-QSQZ38LNVP"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map