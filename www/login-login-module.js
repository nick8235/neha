(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content padding>\n  <div style=\"width:100%\" text-center>\n    <ion-row class=\"login-logo\" style=\"margin-top:30px;\">\n      <ion-col>\n        <img src=\"assets/imgs/logo.jpg\" width=\"150\" height=\"150\" style=\"border-radius:50%;\" />\n      </ion-col>\n    </ion-row>\n    \n    \n    <ion-row class=\"login-form\">\n      <ion-col >\n        <ion-card>\n       <ion-item>\n              <ion-label>\n                <ion-icon name=\"person\"></ion-icon>\n              </ion-label>\n              <ion-input [(ngModel)]=\"username\" placeholder=\"username\" type=\"email\"></ion-input>\n            </ion-item>\n          </ion-card>\n          <ion-card>\n             <ion-item>\n              <ion-label>\n                <ion-icon name=\"lock\"></ion-icon>\n              </ion-label>\n              <ion-input [(ngModel)]=\"password\" placeholder=\"password\" type=\"{{type}}\"></ion-input>\n\n              <button *ngIf=\"!showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n                <ion-icon name=\"eye-off\"></ion-icon>\n              </button>\n              <button *ngIf=\"showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n                <ion-icon name=\"eye-on\"></ion-icon>              \n              </button>\n            </ion-item>\n          </ion-card>\n            <!-- <label>\n              <input type=\"checkbox\" [(ngModel)]=\"rememberMe\" >Remember me</label> -->\n             <p text-right>Forgot Password?</p>\n\n\n          <!-- <a (click)=\"forgotPassword()\" style=\"float:right;text-align:right;padding: 0px;margin-top:5px;color:#0E4C48 \">\n            Forgot Password?\n          </a> -->\n          <!-- <button ion-button block (click)=\"login()\" style=\"margin-top:30px;text-transform:none;\">LogIn</button> -->\n         \n            <ion-button expand=\"block\" shape=\"round\" (click)=\"proseslogin()\"style=\"margin-top:20px;text-transform:none;\">Sign In</ion-button>\n          </ion-col>\n        </ion-row>\n            <!-- <ion-button expand=\"block\" shape=\"round\" (click)=\"formRegister()\">Register</ion-button> -->\n         \n          <p text-center>Don't have a account?</p>\n          <ion-button expand=\"full\" shape=\"round\"  color=\"danger\" (click)=\"formRegister()\">Register</ion-button>\n          <!-- </div> -->\n       \n    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(router, toastController, postPvdr, storage) {
        this.router = router;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.username = '';
        this.password = '';
        this.type = 'password';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.formRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginPage.prototype.proseslogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username != '' && this.password != '')) return [3 /*break*/, 1];
                        body = {
                            username: this.username,
                            password: this.password,
                            aksi: 'login'
                        };
                        //   this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
                        //    var alertpesan = data.msg;
                        //    if (data.success) {
                        //      this.storage.set('session_storage', data.result);
                        this.router.navigate(['/customer']);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: 'Username or password invalid',
                            duration: 2000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3:
                        this.username = '';
                        this.password = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    /**
     * Forgot the password
     */
    LoginPage.prototype.forgotPassword = function () {
        //this.navCtrl.push(RetrievePasswordPage);
        //this.navCtrl.push(OtpVerificationPage,{email:this.UserName});
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map