(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Register</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Fullname </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"full_name\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label position=\"floating\"> Phone Number </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"phone_number\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Username </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\"> Password </ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Confirm Password </ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirm_password\"></ion-input>\n      </ion-item>\n      <ion-item>\n\t      <ion-label floating>Birthday</ion-label>\n\t      <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"birthday\"></ion-datetime>\n\t    </ion-item>\n      <ion-item>\n\t\t    <ion-label floating>Gender</ion-label>\n\t\t     <ion-select [(ngModel)]=\"gender\">\n           <ion-select-option value=\"Male\">Male</ion-select-option>\n           <ion-select-option value=\"Female\">Female</ion-select-option>\n        </ion-select>\n        </ion-item>\n    </ion-list>\n  \n    <div padding>\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"addRegister()\">Submit</ion-button>\n    </div>\n  \n  </ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxhbmlsXFxEb3dubG9hZHNcXGlvbmljLTQtbWFzdGVyXFxpb25pYy00LW1hc3RlclxcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlcyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, toastController, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.full_name = '';
        this.phone_number = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.birthday = '';
        this.gender = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage.prototype.addRegister = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.full_name == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Fullname is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 2:
                        if (!(this.phone_number == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Phone number is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 4:
                        if (!(this.username == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Username is required',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 6:
                        if (!(this.password == '')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Password is required',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 8:
                        if (!(this.password != this.confirm_password)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Password does not match',
                                duration: 2000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 10:
                        body = {
                            full_name: this.full_name,
                            phone_number: this.phone_number,
                            username: this.username,
                            password: this.password,
                            aksi: 'add_register'
                        };
                        //   this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
                        //    var alertpesan = data.msg;
                        //    if (data.success) {
                        this.router.navigate(['/login']);
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map